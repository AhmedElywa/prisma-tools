# Migration Guide: PalJS v8 to v9

This guide helps you migrate from PalJS v8.x to v9.0.

## Overview of Changes

PalJS v9 consolidates code generation into a true Prisma generator that runs during `prisma generate`, eliminating the need for a separate CLI.

### Key Changes

1. **New Prisma Generator**: Use `@paljs/generator` instead of `@paljs/cli`
2. **Single Command**: `prisma generate` does everything
3. **TypeScript Config**: `paljs.config.ts` replaces `pal.config.js`
4. **Typed Helpers**: Generated types for PrismaSelect (no more `any`)
5. **Prisma 7 Support**: Works with Prisma 7.x

## Migration Steps

### Step 1: Update Dependencies

**Remove old packages:**
```bash
npm uninstall @paljs/cli
# or globally
npm uninstall -g @paljs/cli
```

**Install new packages:**
```bash
npm install @paljs/generator --save-dev
```

### Step 2: Update schema.prisma

Add the paljs generator to your Prisma schema:

```prisma
generator client {
  provider = "prisma-client-js"
}

// Add this generator block
generator paljs {
  provider = "paljs-generator"
  output   = "./generated/paljs"
}
```

### Step 3: Convert Configuration

**Before (pal.config.js):**
```javascript
module.exports = {
  schema: './prisma/schema.prisma',
  backend: {
    generator: 'nexus',
    output: './src/graphql',
    excludeFields: ['password'],
    excludeModels: [{ name: 'Migration' }],
    excludeFieldsByModel: {
      User: ['internalNotes'],
    },
    excludeQueriesAndMutations: ['deleteMany'],
    excludeQueriesAndMutationsByModel: {
      User: ['deleteOne'],
    },
  },
  frontend: {
    admin: {
      outPut: './src/admin',
      routerType: 'app',
    },
  },
};
```

**After (paljs.config.ts):**
```typescript
import { defineConfig } from '@paljs/generator/config';

export default defineConfig({
  generateGraphQL: true,
  nexusOutput: './nexus',
  generateTypes: true,
  generateAdmin: {
    enabled: true,
    output: './admin',
    routerType: 'app',
  },

  excludeFields: ['password'],
  excludeQueriesAndMutations: ['deleteMany'],

  models: {
    Migration: { exclude: true },
    User: {
      excludeFields: ['internalNotes'],
      excludeQueriesAndMutations: ['deleteOne'],
    },
  },
});
```

### Step 4: Update Build Scripts

**Before:**
```json
{
  "scripts": {
    "generate": "prisma generate && pal g"
  }
}
```

**After:**
```json
{
  "scripts": {
    "generate": "prisma generate"
  }
}
```

### Step 5: Update Imports

**Before:**
```typescript
import { PrismaSelect } from '@paljs/plugins';

const select = new PrismaSelect(info).value;
const users = await prisma.user.findMany(select as any);
```

**After:**
```typescript
import { PrismaSelect } from '@paljs/plugins';
import type { ModelsObject } from './generated/paljs';

const select = new PrismaSelect<'User', ModelsObject>(info);
const users = await prisma.user.findMany(select.value);
// users is properly typed!
```

### Step 6: Run Generation

```bash
npx prisma generate
```

## Configuration Mapping

| v8 Option | v9 Option |
|-----------|-----------|
| `backend.generator: 'nexus'` | `generateGraphQL: true` |
| `backend.output` | `nexusOutput` |
| `backend.excludeFields` | `excludeFields` |
| `backend.excludeModels` | `models: { X: { exclude: true } }` |
| `backend.excludeFieldsByModel` | `models: { X: { excludeFields: [...] } }` |
| `backend.excludeQueriesAndMutations` | `excludeQueriesAndMutations` |
| `backend.excludeQueriesAndMutationsByModel` | `models: { X: { excludeQueriesAndMutations: [...] } }` |
| `frontend.admin.outPut` | `generateAdmin.output` |
| `frontend.admin.routerType` | `generateAdmin.routerType` |

## Breaking Changes

### 1. CLI Removed
- `pal g` command no longer exists
- Use `prisma generate` instead

### 2. SDL and GraphQL Modules Removed
- Only Nexus code-first is supported
- For SDL, use `printSchema()` from graphql-js after generating Nexus schema

### 3. Configuration Format Changed
- `pal.config.js` → `paljs.config.ts`
- Flat structure instead of nested `backend`/`frontend`

### 4. Output Structure Changed
- Generated files go to a single output directory
- Subdirectories: `dmmf/`, `types/`, `nexus/`, `admin/`

### 5. Prisma Version Requirement
- Requires Prisma 7.x
- DMMF is captured during generation (no more @prisma/internals dependency)

## FAQ

### Q: Can I still use @paljs/generator for Nexus?

Yes, `@paljs/generator` still works but is deprecated. We recommend migrating to `@paljs/generator` for:
- Better integration with Prisma workflow
- Type-safe generated helpers
- Single command generation

### Q: What about @paljs/create?

`@paljs/create` is deprecated. Use `create-t3-app` or `create-next-app` to scaffold new projects, then add PalJS packages manually.

### Q: Does PrismaSelect still work?

Yes! `@paljs/plugins` works exactly as before. The new generator adds typed helpers that work with PrismaSelect to eliminate `any` types.

### Q: How do I generate SDL?

With Nexus, you can generate SDL using:

```typescript
import { makeSchema } from 'nexus';
import { printSchema } from 'graphql';
import * as types from './generated/paljs/nexus';

const schema = makeSchema({ types });
const sdl = printSchema(schema);
```

## Troubleshooting

### Generator not found

Ensure `@paljs/generator` is installed as a dev dependency and `node_modules/.bin` is in your PATH.

### Config file not loading

Place `paljs.config.ts` in the same directory as `schema.prisma`, or specify the path:

```prisma
generator paljs {
  provider = "paljs-generator"
  output   = "./generated/paljs"
  config   = "./custom/path/paljs.config.ts"
}
```

### TypeScript errors in generated files

Ensure you have TypeScript 5+ and the correct `tsconfig.json`:

```json
{
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext"
  }
}
```
