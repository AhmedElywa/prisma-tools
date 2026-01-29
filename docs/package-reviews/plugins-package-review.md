# @paljs/plugins Package Review

**Package Version:** 8.2.1
**Review Date:** 2026-01-28
**Status:** Active Development
**Recommendation:** Modernize and Keep as Core Package

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Current Functionality](#current-functionality)
3. [Value Proposition Analysis](#value-proposition-analysis)
4. [DMMF Dependency Analysis](#dmmf-dependency-analysis)
5. [Modern Alternatives Comparison](#modern-alternatives-comparison)
6. [Recommendation](#recommendation)
7. [Prisma 7 Compatibility Plan](#prisma-7-compatibility-plan)
8. [Implementation Roadmap](#implementation-roadmap)

---

## Executive Summary

The `@paljs/plugins` package is a **small but critical component** of the PalJS ecosystem, providing GraphQL field selection optimization through the `PrismaSelect` class. This functionality solves the common N+1 problem in GraphQL + Prisma applications by automatically generating optimized `select` objects based on GraphQL query fields.

**Key Findings:**
- The package provides genuine value that is still relevant in 2025
- DMMF dependency is the critical barrier for Prisma 7 compatibility
- Modern alternatives exist but PrismaSelect offers unique flexibility
- The package is an ideal candidate to house the DMMF fallback/generation solution
- Documentation is out of sync with actual code (sdlInputs function removed but still documented)

---

## Current Functionality

### 1. PrismaSelect Class (`select.ts`)

**Purpose:** Analyzes GraphQL queries and generates optimized Prisma select/include objects.

**Core Features:**

| Feature | Description |
|---------|-------------|
| **Field Selection** | Converts GraphQL query fields to Prisma `select` objects |
| **Relation Loading** | Automatically handles nested relations |
| **Default Fields** | Allows specifying fields to always include per model |
| **Field Exclusion** | Excludes sensitive fields (e.g., passwords) from selection |
| **Multi-Schema Support** | Supports multiple Prisma DMMF documents |
| **Type Mapping** | Maps GraphQL types to Prisma models via `@PrismaSelect.map()` |
| **Aggregate Support** | Handles aggregate queries differently |

**Implementation Details:**

```typescript
// Core class structure (~330 lines)
export class PrismaSelect {
  private availableArgs = ['where', 'orderBy', 'skip', 'cursor', 'take', 'distinct'];
  private allowedProps = ['_count'];

  constructor(
    private info: GraphQLResolveInfo,
    private options?: PrismaSelectOptions
  ) {}

  get value() { /* returns optimized select object */ }
  get dataModel(): DMMF.Model[] { /* returns models from DMMF */ }
  valueOf(field: string, filterBy?: string) { /* nested value extraction */ }
  valueWithFilter(modelName: string) { /* filter by model */ }
  private filterBy(modelName: string, selectObject: any) { /* core filtering logic */ }
}
```

**Dependencies:**
- `graphql-parse-resolve-info` - Parses GraphQL resolve info
- `@paljs/types` - DMMF type definitions
- `@paljs/utils` - Utility functions (indirectly)

### 2. generateGraphQlSDLFile (`sdlInputs.ts`)

**Purpose:** Simple utility to write a GraphQL SDL file from a schema.

```typescript
export const generateGraphQlSDLFile = (schema: GraphQLSchema, path = 'schema.graphql') => {
  writeFileSync(path, printSchema(schema));
};
```

**Note:** The `sdlInputs` function documented in README.md **no longer exists** in the codebase. It appears to have been moved to `@paljs/generator` as `generateSDLInputsString()`. The README needs to be updated.

---

## Value Proposition Analysis

### The Problem It Solves

GraphQL's flexible query structure creates a fundamental mismatch with ORMs:

```graphql
# GraphQL Query - Only requests specific fields
query {
  users {
    id
    email
    posts {
      title
    }
  }
}
```

```typescript
// Without PrismaSelect - Over-fetches data
const users = await prisma.user.findMany({
  include: {
    posts: true,  // Loads ALL post fields
  },
});

// With PrismaSelect - Optimized query
const select = new PrismaSelect(info).value;
const users = await prisma.user.findMany(select);
// Generates: { select: { id: true, email: true, posts: { select: { title: true } } } }
```

### Value Assessment

| Aspect | Assessment | Notes |
|--------|------------|-------|
| **Performance Impact** | HIGH | Reduces database load significantly for complex queries |
| **N+1 Prevention** | MEDIUM | Helps but Prisma's DataLoader also addresses this |
| **Developer Experience** | HIGH | Simple API, minimal integration effort |
| **Flexibility** | HIGH | Works with any GraphQL server (Apollo, Yoga, etc.) |
| **Type Safety** | MEDIUM | TypeScript support but DMMF validation is optional |
| **Maintenance Burden** | LOW | Small codebase (~330 lines core) |

### Is This Still Needed in 2025?

**YES, but with caveats:**

1. **Prisma's Built-in DataLoader** - Automatically batches `findUnique()` queries, reducing N+1 issues. However, it doesn't optimize field selection.

2. **Pothos GraphQL** - Provides integrated optimization but requires code-first schema approach and full framework buy-in.

3. **Prisma Optimize** - Query monitoring tool, not field selection optimization.

**PrismaSelect's unique value:**
- Framework agnostic (works with SDL-first, code-first, any GraphQL server)
- Simple integration via middleware
- No schema paradigm lock-in
- Lightweight (~3KB bundled)

---

## DMMF Dependency Analysis

### How DMMF is Used

The `PrismaSelect` class uses DMMF (Data Model Meta Format) for:

1. **Field Validation** - Ensures only valid Prisma fields are included
2. **Relation Detection** - Identifies object fields vs scalar fields
3. **Type Mapping** - Maps GraphQL types to Prisma models

```typescript
// Current DMMF access pattern
get dataModel(): DMMF.Model[] {
  if (this.options?.dmmf) {
    const models: DMMF.Model[] = [];
    this.options?.dmmf.forEach((doc) => {
      models.push(...doc.datamodel.models);
    });
    return models;
  }
  return [];  // Graceful degradation - no validation
}
```

### Critical Finding: Graceful Degradation Already Exists

The code already handles missing DMMF:

```typescript
private filterBy(modelName: string, selectObject: any) {
  const model = this.model(modelName);
  if (model && typeof selectObject === 'object') {
    // ... filtering logic with DMMF
  } else {
    return selectObject;  // Returns as-is without validation
  }
}
```

**Implication:** PrismaSelect works without DMMF, but loses:
- Field validation against schema
- Invalid field detection
- Relation vs scalar field distinction

### DMMF Sources in PalJS Ecosystem

| Source | Location | Method |
|--------|----------|--------|
| Generated Client | `Prisma.dmmf` | Direct access (broken in Prisma 7) |
| `@paljs/utils` | `getDMMFBySchemaPath()` | Uses `@prisma/internals` at runtime |
| `@paljs/generator` | `Generators.dmmf()` | Uses `@prisma/internals` at build time |
| User-provided | `options.dmmf` | Manual pass-through |

---

## Modern Alternatives Comparison

### 1. Pothos GraphQL Prisma Plugin

**Approach:** Code-first schema with built-in Prisma integration

```typescript
// Pothos approach
builder.prismaObject('User', {
  select: { id: true },  // Base selection
  fields: (t) => ({
    id: t.exposeID('id'),
    email: t.exposeString('email'),
    posts: t.relation('posts'),  // Auto-optimized
  }),
});
```

| Aspect | Pothos | PalJS |
|--------|--------|-------|
| **Approach** | Declarative, code-first | Imperative, any approach |
| **Integration** | Deep framework coupling | Middleware/resolver level |
| **Flexibility** | Framework-locked | Server agnostic |
| **Learning Curve** | Higher | Lower |
| **N+1 Handling** | Built-in | Via select optimization |

**Verdict:** Pothos is more powerful but requires full buy-in. PrismaSelect is better for existing projects or SDL-first approaches.

### 2. prisma-parse-selected-fields

**Approach:** Lightweight AST-to-select converter

```typescript
import { parseSelectedFields } from 'prisma-parse-selected-fields';
const select = parseSelectedFields(info);
```

| Aspect | prisma-parse-selected-fields | PalJS |
|--------|------------------------------|-------|
| **Size** | Very small | Small |
| **Features** | Basic parsing only | Full feature set |
| **Default Fields** | No | Yes |
| **Field Exclusion** | No | Yes |
| **DMMF Validation** | No | Yes (optional) |
| **Maintenance** | Low activity | Active |

**Verdict:** PrismaSelect provides significantly more features while remaining lightweight.

### 3. Prisma's Built-in DataLoader

**Scope:** Batches `findUnique()` queries in same tick

**Limitations:**
- Only works with `findUnique()`
- Doesn't optimize field selection
- Doesn't help with `findMany()` or relations

**Verdict:** Complementary to PrismaSelect, not a replacement.

### 4. GraphQL DataLoader Pattern

**Approach:** Manual batching implementation

```typescript
const userLoader = new DataLoader(async (ids) => {
  const users = await prisma.user.findMany({ where: { id: { in: ids } } });
  return ids.map(id => users.find(u => u.id === id));
});
```

**Verdict:** Addresses N+1 but not field selection. More boilerplate.

---

## Recommendation

### Decision: MODERNIZE AND KEEP

**Rationale:**

1. **Unique Value** - No direct replacement offers the same flexibility + features combination
2. **Small Footprint** - Low maintenance burden (~330 lines core code)
3. **Wide Applicability** - Works with any GraphQL setup
4. **Strategic Position** - Ideal package to house DMMF generation solution

### Recommended Actions

| Priority | Action | Effort |
|----------|--------|--------|
| P0 | Fix Prisma 7 compatibility | Medium |
| P0 | Update README (remove sdlInputs docs) | Low |
| P1 | Add DMMF auto-generation capability | Medium |
| P2 | Add TypeScript type inference improvements | Medium |
| P3 | Consider renaming to `@paljs/select` | Low |

---

## Prisma 7 Compatibility Plan

### Problem Statement

Prisma 7 removes `Prisma.dmmf` from the generated client, breaking the common pattern:

```typescript
// Broken in Prisma 7
import { Prisma } from '@prisma/client';
const select = new PrismaSelect(info, { dmmf: [Prisma.dmmf] });
```

### Solution Strategy

**Multi-layered approach with automatic fallback:**

```
Priority Order:
1. User-provided DMMF (explicit)
2. Generated DMMF file (build-time)
3. Runtime DMMF generation (lazy initialization)
4. No DMMF (graceful degradation)
```

### Implementation Plan

#### Phase 1: Immediate Fixes (Week 1)

1. **Update graceful degradation messaging:**
```typescript
get dataModel(): DMMF.Model[] {
  if (this.options?.dmmf) {
    // ... existing logic
  }
  // Add console.warn for development mode
  if (process.env.NODE_ENV === 'development' && !this._dmmfWarningShown) {
    console.warn(
      '[@paljs/plugins] PrismaSelect: No DMMF provided. ' +
      'Field validation disabled. See https://paljs.com/docs/prisma-7'
    );
    this._dmmfWarningShown = true;
  }
  return [];
}
```

2. **Fix README documentation** - Remove references to non-existent `sdlInputs` function

#### Phase 2: DMMF Auto-Generation (Week 2-3)

Add new export for DMMF generation:

```typescript
// New file: packages/plugins/src/dmmf.ts
import { getDMMF } from '@prisma/internals';
import { readFileSync, existsSync, writeFileSync } from 'fs';
import { join } from 'path';

export interface DMMFOptions {
  schemaPath?: string;
  cacheDir?: string;
  force?: boolean;
}

let cachedDMMF: DMMF.Document | null = null;

/**
 * Get DMMF with intelligent caching
 */
export async function getOrGenerateDMMF(options: DMMFOptions = {}): Promise<DMMF.Document> {
  const schemaPath = options.schemaPath || findSchemaPath();

  // Check cache first
  if (cachedDMMF && !options.force) {
    return cachedDMMF;
  }

  // Check for cached file
  const cachePath = options.cacheDir
    ? join(options.cacheDir, 'dmmf.json')
    : null;

  if (cachePath && existsSync(cachePath) && !options.force) {
    const cached = JSON.parse(readFileSync(cachePath, 'utf-8'));
    cachedDMMF = cached;
    return cached;
  }

  // Generate fresh DMMF
  const schemaString = readFileSync(schemaPath, 'utf-8');
  const dmmf = await getDMMF({ datamodel: schemaString });

  // Cache in memory
  cachedDMMF = dmmf;

  // Cache to file if cacheDir provided
  if (cachePath) {
    writeFileSync(cachePath, JSON.stringify(dmmf));
  }

  return dmmf;
}

/**
 * Create PrismaSelect factory with pre-loaded DMMF
 */
export function createPrismaSelectFactory(dmmf: DMMF.Document) {
  return function createPrismaSelect<M extends string, O extends Record<M, Record<string, any>>>(
    info: GraphQLResolveInfo,
    options?: Omit<PrismaSelectOptions<M, O>, 'dmmf'>
  ) {
    return new PrismaSelect(info, { ...options, dmmf: [dmmf] });
  };
}
```

#### Phase 3: Enhanced PrismaSelect (Week 4)

Add automatic DMMF resolution to PrismaSelect:

```typescript
// Enhanced constructor with auto-resolution
export class PrismaSelect {
  private static globalDMMF: DMMF.Document | null = null;

  /**
   * Initialize global DMMF (call once at app startup)
   */
  static async initialize(options?: DMMFOptions): Promise<void> {
    PrismaSelect.globalDMMF = await getOrGenerateDMMF(options);
  }

  get dataModel(): DMMF.Model[] {
    // Priority: explicit > global > none
    const dmmfSources = this.options?.dmmf ||
      (PrismaSelect.globalDMMF ? [PrismaSelect.globalDMMF] : []);

    const models: DMMF.Model[] = [];
    dmmfSources.forEach((doc) => {
      models.push(...doc.datamodel.models);
    });
    return models;
  }
}
```

#### Phase 4: CLI Integration (Week 5)

Add CLI command for DMMF generation:

```bash
# Generate DMMF file during build
npx paljs generate-dmmf --output ./generated/dmmf.json

# Or via pal.config.js
module.exports = {
  generateDMMF: {
    output: './generated/dmmf.json',
  },
};
```

---

## Implementation Roadmap

### Milestone 1: Prisma 7 Basic Compatibility (v8.3.0)

**Timeline:** 1 week
**Changes:**
- Improve graceful degradation messaging
- Update documentation
- Add migration guide

### Milestone 2: DMMF Generation Feature (v9.0.0)

**Timeline:** 3 weeks
**Changes:**
- Add `getOrGenerateDMMF()` function
- Add `createPrismaSelectFactory()` helper
- Add `PrismaSelect.initialize()` static method
- Update all examples

### Milestone 3: Full Prisma 7 Support (v9.1.0)

**Timeline:** 2 weeks
**Changes:**
- CLI command for DMMF generation
- Build-time generator option
- Comprehensive test coverage

### Migration Guide for Users

```typescript
// Before (Prisma 6)
import { Prisma } from '@prisma/client';
const select = new PrismaSelect(info, { dmmf: [Prisma.dmmf] });

// After - Option 1: Initialize once at startup
import { PrismaSelect } from '@paljs/plugins';

// In server initialization
await PrismaSelect.initialize({ schemaPath: './prisma/schema.prisma' });

// In resolvers
const select = new PrismaSelect(info).value;

// After - Option 2: Factory pattern
import { createPrismaSelectFactory, getOrGenerateDMMF } from '@paljs/plugins';

const dmmf = await getOrGenerateDMMF();
const createSelect = createPrismaSelectFactory(dmmf);

// In resolvers
const select = createSelect(info).value;

// After - Option 3: Build-time generation
// Add to build script: npx paljs generate-dmmf
import dmmf from './generated/dmmf.json';
const select = new PrismaSelect(info, { dmmf: [dmmf] }).value;
```

---

## Appendix

### A. Files in Package

| File | Lines | Purpose |
|------|-------|---------|
| `src/index.ts` | 2 | Re-exports |
| `src/select.ts` | 332 | PrismaSelect class |
| `src/sdlInputs.ts` | 6 | SDL file generator |

### B. Dependencies

```json
{
  "dependencies": {
    "@paljs/types": "workspace:*",
    "@paljs/utils": "workspace:*",
    "graphql-parse-resolve-info": "^4.13.0",
    "graphql-tag": "^2.12.6"
  },
  "peerDependencies": {
    "@prisma/client": "^6",
    "graphql": "^15 || ^16"
  }
}
```

### C. Test Coverage

Tests in `packages/plugins/tests/`:
- `prismaSelect.test.ts` - Unit tests for PrismaSelect
- `server/index.ts` - Test server setup with Apollo

### D. References

- [Prisma 7 Upgrade Guide](https://www.prisma.io/docs/orm/more/upgrade-guides/upgrading-versions/upgrading-to-prisma-7)
- [GitHub Issue: Missing DMMF](https://github.com/prisma/prisma/issues/28166)
- [Pothos Prisma Plugin](https://pothos-graphql.dev/docs/plugins/prisma)
- [PalJS Documentation](https://paljs.com/docs/packages-plugins)
- [graphql-parse-resolve-info](https://www.npmjs.com/package/graphql-parse-resolve-info)

---

*This review is part of the PalJS modernization effort. For questions or updates, please open an issue in the repository.*
