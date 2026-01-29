# Prisma 7 Compatibility Report

## Overview

Prisma 7 introduces breaking changes that affect `@paljs/nexus` and `@paljs/plugins` packages. The primary issue is the removal of `Prisma.dmmf` from the generated client.

## Breaking Changes in Prisma 7

### 1. New Generator Name
- Old: `provider = "prisma-client-js"`
- New: `provider = "prisma-client"`

### 2. Custom Output Path Required
```prisma
generator client {
  provider = "prisma-client"
  output   = "../src/generated/prisma"
}
```

### 3. Driver Adapter Architecture
Prisma 7 requires explicit driver adapters instead of direct database connections:

```typescript
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from './generated/prisma/client'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })
```

### 4. DMMF No Longer Exported
**This is the critical issue for PalJS.**

In Prisma 6 and earlier:
```typescript
import { Prisma } from '@prisma/client'
console.log(Prisma.dmmf) // ✅ Available
```

In Prisma 7:
```typescript
import { Prisma } from './generated/prisma/client'
console.log(Prisma.dmmf) // ❌ undefined - No longer exported
```

### 5. Configuration File
New `prisma.config.ts` at project root:
```typescript
import 'dotenv/config'
import { defineConfig } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: process.env.DATABASE_URL!,
  },
})
```

---

## Impact on PalJS Packages

### @paljs/plugins - PrismaSelect

**File:** `packages/plugins/src/select.ts`

The `PrismaSelect` class uses DMMF for:
1. Field validation against schema
2. Filtering select objects to only include valid fields
3. Handling relation fields correctly

**Current behavior without DMMF:**
```typescript
get dataModel(): DMMF.Model[] {
  if (this.options?.dmmf) {
    // ... returns models from dmmf
  }
  return []; // ⚠️ Empty array - no field validation
}
```

When `dmmf` is not provided:
- `PrismaSelect` still works for basic select generation
- Field filtering/validation is skipped
- Invalid fields may be passed to Prisma (causing runtime errors)

### @paljs/nexus

**File:** `packages/nexus/src/index.ts`

The nexus plugin passes DMMF to PrismaSelect:
```typescript
paljs({
  prismaSelectOptions: {
    dmmf: [Prisma.dmmf], // ❌ No longer available in Prisma 7
  },
})
```

---

## Required Changes

### Option 1: Use @prisma/internals (Runtime DMMF Generation)

Generate DMMF at runtime using `@prisma/internals`:

```typescript
import { getDMMF } from '@prisma/internals'
import fs from 'fs'

const schema = fs.readFileSync('./prisma/schema.prisma', 'utf-8')
const dmmf = await getDMMF({ datamodel: schema })
```

**Pros:**
- Always up-to-date with schema
- No additional build step

**Cons:**
- Async operation (needs initialization)
- `@prisma/internals` is not officially supported/stable
- Performance overhead on startup

### Option 2: Generate DMMF at Build Time

Create a separate generator that outputs DMMF as JSON:

```prisma
generator dmmf {
  provider = "prisma-dmmf-generator"
  output   = "./generated/dmmf.json"
}
```

Then load it:
```typescript
import dmmf from './generated/dmmf.json'

paljs({
  prismaSelectOptions: {
    dmmf: [dmmf],
  },
})
```

**Pros:**
- No runtime overhead
- Synchronous loading

**Cons:**
- Requires custom generator or build step
- Must regenerate when schema changes

### Option 3: Make DMMF Optional with Graceful Degradation

Update `PrismaSelect` to work without DMMF:

```typescript
// In packages/plugins/src/select.ts
private filterBy(modelName: string, selectObject: any) {
  const model = this.model(modelName);

  // If no DMMF available, return select object as-is
  if (!model) {
    return selectObject;
  }

  // ... existing filtering logic
}
```

**Pros:**
- Backward compatible
- Works with Prisma 7 out of the box

**Cons:**
- Loses field validation benefits
- May pass invalid fields to Prisma

### Option 4: Use @prisma/generator-helper in Custom Generator

Create a PalJS Prisma generator that captures DMMF during generation:

```typescript
// packages/generator/src/index.ts
import { generatorHandler } from '@prisma/generator-helper'

generatorHandler({
  onManifest() {
    return {
      defaultOutput: './generated',
      prettyName: 'PalJS DMMF Generator',
    }
  },
  async onGenerate(options) {
    const dmmf = options.dmmf
    // Write DMMF to file or generate code that exports it
    fs.writeFileSync(
      path.join(options.generator.output.value, 'dmmf.json'),
      JSON.stringify(dmmf)
    )
  },
})
```

**Pros:**
- Official Prisma API
- Captures DMMF at the right time
- Can be added to user's schema.prisma

**Cons:**
- Requires users to add another generator
- More complex setup

---

## Recommended Approach

### Short-term (Quick Fix)
Implement **Option 3** - Make DMMF optional with graceful degradation. This allows existing users to upgrade to Prisma 7 without breaking changes.

### Long-term (Full Support)
Implement **Option 4** - Create a `@paljs/generator` package that:
1. Generates DMMF during `prisma generate`
2. Exports it in a format compatible with PrismaSelect
3. Optionally generates TypeScript types

**Schema usage:**
```prisma
generator client {
  provider = "prisma-client"
  output   = "../src/generated/prisma"
}

generator paljs {
  provider = "paljs-generator"
  output   = "../src/generated/paljs"
}
```

**Usage in code:**
```typescript
import { dmmf } from '../generated/paljs'

paljs({
  prismaSelectOptions: {
    dmmf: [dmmf],
  },
})
```

---

## Migration Guide for Users

### Upgrading to Prisma 7 with PalJS

1. **Update dependencies:**
```bash
npm install prisma@latest @prisma/client@latest @prisma/adapter-pg dotenv
```

2. **Update schema.prisma:**
```prisma
datasource db {
  provider = "postgresql"
  // Remove: url = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client"
  output   = "../src/generated/prisma"
}
```

3. **Create prisma.config.ts:**
```typescript
import 'dotenv/config'
import { defineConfig } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: process.env.DATABASE_URL!,
  },
})
```

4. **Update PrismaClient instantiation:**
```typescript
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from './generated/prisma/client'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
export const prisma = new PrismaClient({ adapter })
```

5. **Update @paljs/nexus usage:**
```typescript
// Remove dmmf option until PalJS adds Prisma 7 support
paljs({
  includeAdmin: true,
  // prismaSelectOptions: { dmmf: [...] } // Remove this
})
```

6. **Update imports:**
```typescript
// Old
import { PrismaClient, Prisma } from '@prisma/client'

// New
import { PrismaClient, Prisma } from './generated/prisma/client'
```

---

## Testing Checklist

- [ ] PrismaSelect works without DMMF (graceful degradation)
- [ ] PrismaSelect works with DMMF from @prisma/internals
- [ ] PrismaSelect works with DMMF from custom generator
- [ ] @paljs/nexus plugin loads without errors
- [ ] Admin queries (getSchema, updateSchema) work
- [ ] Field selection in resolvers works correctly
- [ ] Nested relations are handled properly

---

## References

- [Prisma 7 Upgrade Guide](https://www.prisma.io/docs/orm/more/upgrade-guides/upgrading-versions/upgrading-to-prisma-7)
- [Prisma Config Reference](https://www.prisma.io/docs/orm/reference/prisma-config-reference)
- [GitHub Issue: Missing DMMF](https://github.com/prisma/prisma/issues/28166)
- [@prisma/generator-helper](https://www.npmjs.com/package/@prisma/generator-helper)
