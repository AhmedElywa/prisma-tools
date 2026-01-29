# @paljs/schema Package Review

**Review Date:** 2026-01-28
**Package Version:** 8.2.1
**Reviewer:** Claude (Opus 4.5)
**Review Type:** Comprehensive modernization assessment

---

## Table of Contents

1. [Current Functionality Summary](#current-functionality-summary)
2. [Architecture Analysis](#architecture-analysis)
3. [What Works Well](#what-works-well)
4. [What's Outdated or Problematic](#whats-outdated-or-problematic)
5. [Modern Alternatives](#modern-alternatives)
6. [Overlap with Prisma 7 Compatibility Requirements](#overlap-with-prisma-7-compatibility-requirements)
7. [Recommendation](#recommendation)
8. [Modernization Action Plan](#modernization-action-plan)
9. [DMMF Generator Package Potential](#dmmf-generator-package-potential)

---

## Current Functionality Summary

The `@paljs/schema` package provides utilities for Prisma schema manipulation and analysis. It consists of four main components:

### 1. PrismaReader (`/packages/schema/src/PrismaReader.ts`)

Base class for reading and parsing Prisma schema files using **regex-based parsing**.

**Key capabilities:**
- Reads schema file from disk
- Extracts models, enums, datasources, and generators using regex patterns
- Parses field attributes like `@map`, `@default`, `@relation`
- Determines field "kind" (scalar, object, enum)

### 2. ConvertSchemaToObject (`/packages/schema/src/json.ts`)

Converts Prisma schema to a custom `SchemaObject` JSON structure.

**Output structure:**
```typescript
interface SchemaObject {
  models: Model[];
  enums: Enums[];
  dataSource?: DataSource;
  generators?: Generator[];
}
```

### 3. CamelCase (`/packages/schema/src/camelCase.ts`)

Transforms snake_case identifiers to camelCase in Prisma schema files.

**Features:**
- Converts model names (e.g., `user_profile` -> `UserProfile`)
- Converts field names (e.g., `first_name` -> `firstName`)
- Automatically adds `@@map` and `@map` attributes to preserve database naming
- Uses `formatSchema` from `@prisma/internals` for output formatting

### 4. GenerateTypeScript (`/packages/schema/src/typescript.ts`)

Generates TypeScript interfaces from Prisma schema.

**Output example:**
```typescript
export interface User {
  id: number;
  email: string;
  name: string | null;
}

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}
```

---

## Architecture Analysis

### Dependencies

```
@paljs/schema
├── @paljs/display (console output styling)
├── @paljs/types (type definitions including SchemaObject)
└── @paljs/utils (formatSchema from @prisma/internals)
```

### Current Consumers

| Package | Usage |
|---------|-------|
| `@paljs/generator` | Uses `ConvertSchemaToObject` for admin page generation |
| `@paljs/cli` | Uses all three utilities (`ConvertSchemaToObject`, `CamelCase`, `GenerateTypeScript`) |

### Parsing Approach

The package uses **custom regex-based parsing** rather than Prisma's official DMMF:

```typescript
// Current approach in PrismaReader
get models() {
  return this.data.match(/\n(model(\s)[\s\S]*?})\r?\n/g);
}

get enums() {
  return this.data.match(/\n(enum(\s)[\s\S]*?})\r?\n/g);
}
```

### Contrast with @paljs/utils

The `@paljs/utils` package already provides official DMMF access:

```typescript
// packages/utils/src/dmmf.ts
import { getDMMF, getSchemaWithPath } from '@prisma/internals';

export const getDMMFBySchemaPath = async (schemaPath?: string): Promise<DMMF.Document> => {
  const schemaPathFromPrisma = await getSchemaPath(schemaPath);
  const schemaString = readFileSync(schemaPathFromPrisma, 'utf-8');
  return await getDMMF({ datamodel: schemaString });
};
```

**This means the monorepo has two separate schema parsing approaches.**

---

## What Works Well

### 1. CamelCase Converter

The `CamelCase` utility is genuinely useful and well-implemented:

- Handles both model and field name conversion
- Preserves database mapping with `@@map` and `@map`
- Uses official `formatSchema` from `@prisma/internals` for clean output
- Has test coverage (`/packages/schema/tests/camelCase.test.ts`)

### 2. Clear API

The API is straightforward and easy to use:

```typescript
// Simple, clear usage patterns
const schema = new ConvertSchemaToObject('./prisma/schema.prisma').run();
await new CamelCase('./prisma/schema.prisma').convert();
const types = new GenerateTypeScript('./prisma/schema.prisma').run();
```

### 3. Synchronous Operation

`ConvertSchemaToObject` runs synchronously, which is convenient for some use cases (though this comes at the cost of not using official async DMMF parsing).

### 4. Test Coverage

All components have dedicated test files:
- `/packages/schema/tests/PrismaReader.test.ts`
- `/packages/schema/tests/camelCase.test.ts`
- `/packages/schema/tests/json.test.ts`
- `/packages/schema/tests/typescript.test.ts`

---

## What's Outdated or Problematic

### 1. Regex-Based Parsing is Fragile

The regex approach cannot handle all Prisma schema features:

```typescript
// This regex can miss edge cases
getRelation(line: string) {
  const relationString = line.match(/@relation\((.*?)\)/);
  // Non-greedy match may fail with nested parentheses or complex expressions
}
```

**Missing/incomplete support for:**
- Multi-line attributes
- Complex default expressions: `@default(dbgenerated("uuid_generate_v4()"))`
- Composite types (Prisma 3.12+)
- `@updatedAt` attribute detection
- Multi-schema support (Prisma 5.15+)
- Views (Prisma 4.9+)
- `onDelete`/`onUpdate` relation actions

### 2. Custom Schema Object vs DMMF

The custom `SchemaObject` type is a subset of what Prisma's DMMF provides:

| Feature | SchemaObject | DMMF.Document |
|---------|--------------|---------------|
| Basic model/field info | Yes | Yes |
| Full relation metadata | Partial | Yes |
| Input types | No | Yes |
| Output types | No | Yes |
| Model operations | No | Yes |
| Field attributes | Partial | Complete |
| Native types | No | Yes |
| Composite types | No | Yes |

### 3. Duplicated Effort

The monorepo already has DMMF access in `@paljs/utils`, creating:
- Two parsing approaches to maintain
- Potential inconsistencies between SchemaObject and DMMF
- Confusion about which to use when

### 4. TypeScript Generator is Basic

The `GenerateTypeScript` class produces minimal output:

```typescript
private scalar: Record<string, string> = {
  Int: 'number',
  Float: 'number',
  Decimal: 'number',  // Should be Prisma.Decimal or custom type
  BigInt: 'number',   // Should be bigint
  String: 'string',
  Boolean: 'boolean',
  DateTime: 'Date',
  Json: 'any',        // Should be Prisma.JsonValue
};
```

**Missing:**
- `Bytes` type handling
- Native type annotations
- Input/args types
- Configurable output options
- Zero-dependency mode

### 5. process.exit() in Library Code

```typescript
// PrismaReader.ts
checkIfSchemaExit() {
  if (!existsSync(this.path)) {
    log.error(`Error: ...`);
    process.exit(); // Anti-pattern - should throw
  }
}
```

Calling `process.exit()` in library code is problematic for consumers who want to handle errors gracefully.

---

## Modern Alternatives

### Official Prisma Tools

| Tool | Purpose | Stability |
|------|---------|-----------|
| [`@prisma/internals`](https://github.com/prisma/prisma) | `getDMMF()`, `formatSchema()` | Unofficial/Unstable |
| [`@prisma/generator-helper`](https://www.npmjs.com/package/@prisma/generator-helper) | Create Prisma generators | Official |
| [`@prisma/dmmf`](https://github.com/prisma/prisma/pull/26660) | DMMF types (new in Prisma 6) | New extraction |
| `prisma validate` | Schema validation | Official CLI |
| `prisma format` | Schema formatting | Official CLI |

### Community TypeScript Generators

| Package | Features | Weekly Downloads |
|---------|----------|------------------|
| [`prisma-generator-typescript-interfaces`](https://github.com/mogzol/prisma-generator-typescript-interfaces) | Zero-dependency interfaces, Prisma 6 compatible | 10k+ |
| [`prisma-json-types-generator`](https://www.npmjs.com/package/prisma-json-types-generator) | Typed JSON fields | 20k+ |
| [`@mainamiru/prisma-types-generator`](https://www.npmjs.com/package/@mainamiru/prisma-types-generator) | Clean TypeScript types | 1k+ |
| [`prisma-standalone-types`](https://www.buildwithmatija.com/blog/prisma-standalone-types-announcement) | Copy-anywhere types | New |

### Key Finding: Community Standard

The community has converged on using `@prisma/generator-helper` for schema introspection:

```typescript
import { generatorHandler } from '@prisma/generator-helper'

generatorHandler({
  onManifest() {
    return { defaultOutput: './generated', prettyName: 'My Generator' }
  },
  async onGenerate(options) {
    const dmmf = options.dmmf // Full DMMF access
    // Generate whatever you need
  },
})
```

**Benefits:**
- Official Prisma API
- Runs at `prisma generate` time
- Access to complete DMMF
- Automatic regeneration when schema changes

---

## Overlap with Prisma 7 Compatibility Requirements

The existing `/docs/prisma-7-compatibility.md` document recommends creating a DMMF generator as the long-term solution:

> **Long-term (Full Support)**
> Implement Option 4 - Create a `@paljs/generator` package that:
> 1. Generates DMMF during `prisma generate`
> 2. Exports it in a format compatible with PrismaSelect
> 3. Optionally generates TypeScript types

**This directly aligns with modernizing `@paljs/schema`.**

The Prisma 7 breaking change (removal of `Prisma.dmmf`) makes a DMMF generator essential for:
- `@paljs/plugins` (PrismaSelect field validation)
- `@paljs/nexus` (DMMF-based operations)

---

## Recommendation

### **MODERNIZE** (with significant refactoring)

The package should be transformed from a regex-based schema parser into a proper **Prisma DMMF Generator package**.

**Rationale:**
1. The regex parsing duplicates what Prisma provides officially
2. The monorepo needs DMMF access for Prisma 7 compatibility
3. The package name "schema" fits a DMMF generator role
4. Some utilities (CamelCase) remain valuable as-is
5. Creating a new package would fragment the codebase further

### What to Keep

| Component | Action |
|-----------|--------|
| `CamelCase` | **Keep** - Unique utility, well-implemented |
| `PrismaReader` | **Deprecate** - Replace with DMMF |
| `ConvertSchemaToObject` | **Replace** - Use DMMF-based approach |
| `GenerateTypeScript` | **Replace** - Use DMMF or recommend community generators |

---

## Modernization Action Plan

### Phase 1: Add DMMF Generator Core (2-3 days)

Create a Prisma generator that captures and exports DMMF.

**New file: `/packages/schema/src/generator.ts`**

```typescript
import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';

export interface PalJSGeneratorConfig {
  outputDmmf?: boolean;      // Output dmmf.json
  outputTypes?: boolean;     // Output types.ts
  outputSchema?: boolean;    // Output schema.ts (legacy SchemaObject)
}

generatorHandler({
  onManifest() {
    return {
      defaultOutput: './generated/paljs',
      prettyName: 'PalJS Schema Generator',
      requiresGenerators: ['prisma-client-js', 'prisma-client'],
    };
  },

  async onGenerate(options: GeneratorOptions) {
    const outputDir = options.generator.output?.value ?? './generated/paljs';
    mkdirSync(outputDir, { recursive: true });

    // Export DMMF as JSON
    writeFileSync(
      join(outputDir, 'dmmf.json'),
      JSON.stringify(options.dmmf, null, 2)
    );

    // Export as TypeScript module
    writeFileSync(
      join(outputDir, 'index.ts'),
      `import type { DMMF } from '@prisma/generator-helper';
export const dmmf: DMMF.Document = ${JSON.stringify(options.dmmf)};
export default dmmf;
`
    );
  },
});
```

**package.json additions:**
```json
{
  "bin": {
    "paljs-generator": "./dist/generator.js"
  },
  "dependencies": {
    "@prisma/generator-helper": "^6.11.1"
  }
}
```

### Phase 2: Create DMMF-Based Utilities (2-3 days)

Replace regex parsing with DMMF-based alternatives.

**New file: `/packages/schema/src/dmmf-utils.ts`**

```typescript
import { DMMF } from '@prisma/generator-helper';
import { SchemaObject, Model, Field, Enums } from '@paljs/types';

/**
 * Convert DMMF to legacy SchemaObject format for backward compatibility
 */
export function dmmfToSchemaObject(dmmf: DMMF.Document): SchemaObject {
  const models: Model[] = dmmf.datamodel.models.map((model) => ({
    name: model.name,
    documentation: model.documentation,
    map: model.dbName ?? undefined,
    fields: model.fields.map((field) => ({
      name: field.name,
      type: field.type,
      list: field.isList,
      required: field.isRequired,
      isId: field.isId,
      unique: field.isUnique,
      kind: field.kind as 'scalar' | 'object' | 'enum',
      defaultValue: field.default ? String(field.default) : undefined,
      map: field.dbName ?? undefined,
      relationField: field.relationFromFields?.length > 0,
      documentation: field.documentation,
      relation: field.relationName ? {
        name: field.relationName,
        fields: field.relationFromFields,
        references: field.relationToFields,
      } : undefined,
    })),
  }));

  const enums: Enums[] = dmmf.datamodel.enums.map((e) => ({
    name: e.name,
    fields: e.values.map((v) => v.name),
  }));

  return { models, enums };
}

/**
 * Get model by name from DMMF
 */
export function getModel(dmmf: DMMF.Document, name: string): DMMF.Model | undefined {
  return dmmf.datamodel.models.find((m) => m.name === name);
}

/**
 * Get all relation fields for a model
 */
export function getRelationFields(model: DMMF.Model): DMMF.Field[] {
  return model.fields.filter((f) => f.kind === 'object');
}
```

### Phase 3: Update API Surface (1-2 days)

Maintain backward compatibility while introducing new APIs.

**Updated `/packages/schema/src/index.ts`:**

```typescript
// Legacy exports (deprecated)
export * from './json';       // ConvertSchemaToObject
export * from './typescript'; // GenerateTypeScript
export * from './PrismaReader';

// Keep CamelCase - it's still useful
export * from './camelCase';

// New DMMF-based exports
export * from './dmmf-utils';

// Re-export DMMF types for convenience
export type { DMMF } from '@prisma/generator-helper';

// Deprecation notices
/** @deprecated Use DMMF from @paljs/generator instead */
export { ConvertSchemaToObject } from './json';

/** @deprecated Use prisma-generator-typescript-interfaces instead */
export { GenerateTypeScript } from './typescript';
```

### Phase 4: Update Consumers (2-3 days)

#### Update @paljs/generator

```typescript
// packages/generator/src/admin/index.ts
import { DMMF } from '@prisma/generator-helper';
import { dmmfToSchemaObject } from '@paljs/schema';

export class UIGenerator {
  schema: SchemaObject;

  constructor(schemaPathOrDmmf: string | string[] | DMMF.Document) {
    if (typeof schemaPathOrDmmf === 'object' && 'datamodel' in schemaPathOrDmmf) {
      // New: Accept DMMF directly
      this.schema = dmmfToSchemaObject(schemaPathOrDmmf);
    } else {
      // Legacy: Path-based (deprecated)
      const paths = Array.isArray(schemaPathOrDmmf) ? schemaPathOrDmmf : [schemaPathOrDmmf];
      this.schema = this.mergeSchemas(
        paths.map((path) => new ConvertSchemaToObject(path).run())
      );
    }
  }
}
```

#### Update @paljs/cli

```typescript
// packages/cli/src/commands/schema.ts
import { getDMMFBySchemaPath } from '@paljs/utils';
import { dmmfToSchemaObject, CamelCase } from '@paljs/schema';

// In the json converter:
if (args.converter === 'json') {
  const dmmf = await getDMMFBySchemaPath(flags.schema);
  const schemaObject = dmmfToSchemaObject(dmmf);
  await schemaFile(flags['output-path'], schemaObject, flags.type as Output);
}
```

### Phase 5: Documentation and Migration Guide (1 day)

Update README.md with:
- New generator usage
- Migration from ConvertSchemaToObject to DMMF
- Deprecation timeline

---

## DMMF Generator Package Potential

### Rename Consideration

The package could be renamed to better reflect its new purpose:

| Current | Option 1 | Option 2 | Option 3 |
|---------|----------|----------|----------|
| `@paljs/schema` | `@paljs/dmmf` | `@paljs/prisma-generator` | Keep `@paljs/schema` |

**Recommendation:** Keep `@paljs/schema` because:
- Minimal disruption to existing users
- "Schema" still accurately describes the focus
- The package deals with schema representation (just via DMMF now)

### Target User Experience

**In `schema.prisma`:**
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

**In application code:**
```typescript
// Import DMMF from generated output
import { dmmf } from '../generated/paljs';

// Use with @paljs/plugins
import { PrismaSelect } from '@paljs/plugins';

const select = new PrismaSelect(info, {
  dmmf: [dmmf],
});
```

### Features Roadmap

| Feature | Priority | Description |
|---------|----------|-------------|
| DMMF JSON output | P0 | Core requirement for Prisma 7 |
| TypeScript module output | P0 | Type-safe DMMF access |
| SchemaObject compatibility | P1 | Backward compatibility |
| Admin schema generation | P1 | Merge with `buildSettingsSchema` |
| Multi-schema support | P2 | Handle Prisma multi-file schemas |
| Watch mode | P3 | Auto-regenerate on schema changes |

---

## Summary

The `@paljs/schema` package has served its purpose but is now at a crossroads:

1. **The regex-based parsing is outdated** and cannot keep up with Prisma's evolving schema features
2. **Prisma 7's DMMF removal** creates an urgent need for a DMMF generator
3. **The package can be modernized** rather than deprecated, providing value through:
   - Official Prisma generator integration
   - DMMF capture at build time
   - Backward compatibility layer for existing consumers
   - The unique CamelCase utility

**Timeline estimate:** 8-12 days for full modernization

**Risk mitigation:** The phased approach allows incremental delivery and testing.

---

## References

- [Prisma Generator Documentation](https://www.prisma.io/docs/orm/prisma-schema/overview/generators)
- [A Guide for Building Community Prisma Generators](https://github.com/prisma/prisma/discussions/10721)
- [Create Prisma Generator Tutorial](https://dev.to/yassineldeeb/create-prisma-generator-2mdg)
- [@prisma/generator-helper npm](https://www.npmjs.com/package/@prisma/generator-helper)
- [prisma-generator-typescript-interfaces](https://github.com/mogzol/prisma-generator-typescript-interfaces)
- [DMMF and Type System Deep Dive](https://deepwiki.com/prisma/prisma/2.3-generated-client-structure-and-type-system)
- [PalJS Prisma 7 Compatibility Report](/docs/prisma-7-compatibility.md)
