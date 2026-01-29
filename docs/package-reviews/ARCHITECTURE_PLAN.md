# PalJS v9 Architecture Plan

## Overview

Consolidate PalJS into a unified Prisma generator that runs during `prisma generate`, replacing the separate CLI workflow.

---

## Package Changes

### Remove
| Package | Action | Reason |
|---------|--------|--------|
| `@paljs/cli` | Delete | Replaced by Prisma generator |
| `@paljs/create` | Delete | Outdated, use `create-t3-app` instead |

### Rename
| Current | New Name | Reason |
|---------|----------|--------|
| `@paljs/generator` | `@paljs/nexus-codegen` | Free up name for true Prisma generator, Nexus only |

### Keep (with updates)
| Package | Updates Needed |
|---------|----------------|
| `@paljs/plugins` | Use generated types instead of `any` |
| `@paljs/nexus` | Continue support, update peer deps |
| `@paljs/admin` | No changes |
| `@paljs/types` | Add generated type definitions |
| `@paljs/schema` | Keep for schema manipulation utilities |
| `@paljs/utils` | Keep DMMF utilities |
| `@paljs/display` | Keep for styled output |

### New
| Package | Purpose |
|---------|---------|
| `@paljs/generator` | True Prisma generator using `@prisma/generator-helper` |

---

## Configuration System

### Single TypeScript Config File

PalJS v9 uses a single TypeScript configuration file, similar to the old `pal.config.js` but with full type safety and IDE support.

### schema.prisma Generator Block

```prisma
datasource db {
  provider = "postgresql"
}

generator client {
  provider = "prisma-client"
  output   = "../src/generated/prisma"
}

generator paljs {
  provider = "paljs-generator"
  output   = "../src/generated/paljs"
  config   = "./paljs.config.ts"    // Required config file
}
```

### paljs.config.ts

```typescript
import { defineConfig } from '@paljs/generator';
import type { DMMF } from '@paljs/types';

export default defineConfig({
  // ============================================
  // GRAPHQL GENERATION
  // ============================================

  /**
   * Which GraphQL generator to use
   * @default false (disabled)
   */
  generateGraphQL: true, // boolean - generates Nexus GraphQL (or false to disable)

  /**
   * Output directory for Nexus files (relative to generator output)
   * @default './nexus'
   */
  nexusOutput: './nexus',

  // ============================================
  // TYPE GENERATION
  // ============================================

  /**
   * Generate typed helpers for PrismaSelect
   * @default true
   */
  generateTypes: true,

  /**
   * Generate JavaScript instead of TypeScript
   * @default false
   */
  javaScript: false,

  // ============================================
  // ADMIN GENERATION
  // ============================================

  /**
   * Generate admin UI pages and schema
   * @default false
   */
  generateAdmin: {
    enabled: true,
    output: './admin',
    routerType: 'app',        // 'app' | 'pages'
    models: ['User', 'Post'], // undefined = all models
    pageContent: undefined,   // Custom page template
  },

  // Or simply: generateAdmin: true (uses defaults)

  // ============================================
  // PRISMA CLIENT
  // ============================================

  /**
   * Name of the Prisma client instance in your code
   * Used for generating resolver code
   * @default 'prisma'
   */
  prismaName: 'prisma',

  // ============================================
  // GLOBAL EXCLUSIONS
  // ============================================

  /**
   * Fields to exclude from all models
   */
  excludeFields: ['password', 'hash', 'salt'],

  /**
   * Fields to exclude from input types only
   */
  excludeInputFields: ['createdAt', 'updatedAt'],

  /**
   * Queries/mutations to disable globally
   */
  excludeQueriesAndMutations: ['deleteMany', 'updateMany'],

  /**
   * Disable all queries globally
   * @default false
   */
  disableQueries: false,

  /**
   * Disable all mutations globally
   * @default false
   */
  disableMutations: false,

  // ============================================
  // PER-MODEL CONFIGURATION
  // ============================================

  models: {
    // Exclude model entirely
    Migration: {
      exclude: true,
    },

    // Partial exclusions
    User: {
      // Exclude specific fields for this model
      excludeFields: ['internalNotes', 'adminComments'],

      // Exclude specific operations
      excludeQueriesAndMutations: ['deleteOne', 'deleteMany'],

      // Or disable all mutations (read-only)
      // disableMutations: true,
    },

    Post: {
      // Only disable queries (write-only, rare use case)
      disableQueries: false,
      disableMutations: false,

      // Exclude only queries or only mutations
      queries: true,    // Enable queries
      mutations: false, // Disable mutations
    },

    AuditLog: {
      // Read-only model
      disableMutations: true,

      // Admin config per model
      admin: {
        hide: false,
        displayField: 'action',
        listFields: ['action', 'userId', 'createdAt'],
      },
    },
  },

  // ============================================
  // ADVANCED OPTIONS
  // ============================================

  /**
   * Filter input fields with custom logic
   * Only available in config file (not schema.prisma)
   */
  filterInputs: (input: DMMF.InputType): DMMF.SchemaArg[] => {
    return input.fields.filter(field => {
      // Exclude fields starting with underscore
      if (field.name.startsWith('_')) return false;
      // Exclude internal fields
      if (['createdAt', 'updatedAt', 'deletedAt'].includes(field.name)) return false;
      return true;
    });
  },

  /**
   * Don't use Prisma's FieldUpdateOperationsInput
   * Generates simpler update inputs
   * @default false
   */
  doNotUseFieldUpdateOperationsInput: false,

  /**
   * Path to admin settings JSON file
   * Used for runtime admin schema modifications
   */
  adminSettingsPath: './prisma/admin-settings.json',
});
```

---

## Generated Output Structure

```
src/generated/paljs/
├── index.ts                    # Main exports
│
├── dmmf/
│   ├── index.ts                # DMMF TypeScript export
│   └── dmmf.json               # DMMF as JSON (for runtime)
│
├── types/
│   ├── index.ts                # All type exports
│   ├── models.ts               # Model types (User, Post, etc.)
│   ├── select.ts               # Select/Include input types
│   ├── args.ts                 # Resolver argument types
│   └── prisma-select.ts        # Typed PrismaSelect helpers
│
├── nexus/                      # If generateGraphQL enabled
│   ├── index.ts
│   ├── User/
│   │   ├── type.ts
│   │   ├── queries.ts
│   │   └── mutations.ts
│   ├── Post/
│   │   └── ...
│   └── inputs.ts
│
└── admin/                      # If generateAdmin enabled
    ├── schema.json             # Admin schema for runtime
    └── pages/                  # Next.js pages (optional)
        ├── User/
        │   ├── page.tsx        # List page
        │   └── [id]/
        │       └── page.tsx    # Edit page
        └── Post/
            └── ...
```

---

## Type Generation for PrismaSelect

### The Problem (Current v8)

```typescript
import { PrismaSelect } from '@paljs/plugins';

// Everything is `any` - no type safety!
const select = new PrismaSelect(info).value;
const users = await prisma.user.findMany(select as any);
// users is any, select is any
```

### The Solution (v9)

```typescript
import { PrismaSelect } from '@paljs/plugins';
import type {
  UserSelect,
  UserResult,
  TypedPrismaSelect
} from './generated/paljs';

// Option 1: Generic type parameter
const select = new PrismaSelect<'User'>(info);
const users = await prisma.user.findMany(select.value);
// users is User[], select.value is Prisma.UserFindManyArgs

// Option 2: Model-specific helper
import { createUserSelect } from './generated/paljs';
const select = createUserSelect(info);
const users = await prisma.user.findMany(select.value);
// Fully typed!

// Option 3: Typed wrapper
const typedSelect: TypedPrismaSelect<'User'> = new PrismaSelect(info);
```

### Generated Type Examples

```typescript
// src/generated/paljs/types/select.ts

// Per-model select input types
export interface UserSelectInput {
  select?: {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    password?: never;  // Excluded field - TypeScript error if used!
    posts?: boolean | PostSelectInput;
    profile?: boolean | ProfileSelectInput;
  };
  include?: {
    posts?: boolean | PostIncludeInput;
    profile?: boolean | ProfileIncludeInput;
  };
}

// Per-model result types (based on default selection)
export interface UserResult {
  id: number;
  email: string;
  name: string | null;
  // password not included (excluded)
}

// With relations
export interface UserWithRelationsResult extends UserResult {
  posts?: PostResult[];
  profile?: ProfileResult | null;
}

// Typed select helper
export type TypedPrismaSelect<T extends ModelName> = {
  value: ModelSelectArgs[T];
  valueOf(field: string): ModelSelectArgs[T];
  valueWithError(): ModelSelectArgs[T];
  mergeDeep<S>(select: S): S & ModelSelectArgs[T];
};

// Model registry for generic access
export interface ModelSelectArgs {
  User: Prisma.UserFindManyArgs;
  Post: Prisma.PostFindManyArgs;
  // ... all models
}

export type ModelName = keyof ModelSelectArgs;
```

### Generated Helper Functions

```typescript
// src/generated/paljs/types/prisma-select.ts

import { PrismaSelect } from '@paljs/plugins';
import type { GraphQLResolveInfo } from 'graphql';

/**
 * Create a typed PrismaSelect for User model
 */
export function createUserSelect(info: GraphQLResolveInfo) {
  return new PrismaSelect(info) as TypedPrismaSelect<'User'>;
}

/**
 * Create a typed PrismaSelect for Post model
 */
export function createPostSelect(info: GraphQLResolveInfo) {
  return new PrismaSelect(info) as TypedPrismaSelect<'Post'>;
}

// ... generated for all models

/**
 * Generic typed select creator
 */
export function createSelect<T extends ModelName>(
  model: T,
  info: GraphQLResolveInfo
): TypedPrismaSelect<T> {
  return new PrismaSelect(info) as TypedPrismaSelect<T>;
}
```

---

## Testing Strategy

### Goals
- **Confidence:** Ensure v9 is stable before release - no regressions, no breaking changes beyond documented ones
- **Coverage:** Every new feature must have tests before it's considered complete
- **Modern tooling:** Migrate from Jest to Bun's native test runner for speed and simplicity

### Test Migration: Jest → Bun

**Why Bun tests?**
- Native TypeScript support (no ts-jest needed)
- 10-20x faster than Jest
- Built-in coverage reporting
- Compatible Jest-like API (`describe`, `it`, `expect`)
- Already using Bun for package management

**Migration approach:**
1. Keep existing Jest tests working during transition
2. Write all new tests using Bun's test runner
3. Gradually migrate existing tests package by package
4. Remove Jest dependencies once migration complete

### Test Categories

| Category | Purpose | Location |
|----------|---------|----------|
| Unit tests | Test individual functions/classes | `packages/*/tests/unit/` |
| Integration tests | Test package interactions | `packages/*/tests/integration/` |
| Snapshot tests | Verify generated code output | `packages/*/tests/snapshots/` |
| E2E tests | Full prisma generate workflow | `tests/e2e/` |

### Coverage Requirements

| Package | Minimum Coverage | Critical Paths |
|---------|------------------|----------------|
| `@paljs/generator` (new) | 90% | Config loading, DMMF output, all generators |
| `@paljs/nexus-codegen` | 80% | Type generation, query/mutation generation |
| `@paljs/plugins` | 85% | PrismaSelect, field selection |
| `@paljs/nexus` | 75% | Admin settings, scalars |
| `@paljs/schema` | 80% | Schema parsing, camelCase conversion |
| `@paljs/admin` | 70% | Component rendering, form handling |

---

## Implementation Plan

### Phase 0: Test Infrastructure Setup

**Goal:** Set up Bun test runner and establish testing patterns

**Tasks:**
1. Configure Bun test runner in root package.json
2. Create test utilities and helpers (`tests/helpers/`)
3. Set up test fixtures (sample Prisma schemas, configs)
4. Create snapshot testing utilities for generated code
5. Set up CI workflow for running tests
6. Document testing conventions

**Files:**
```
tests/
├── helpers/
│   ├── fixtures.ts          # Load test fixtures
│   ├── prisma-mock.ts       # Mock Prisma client
│   ├── snapshot.ts          # Snapshot comparison utilities
│   └── temp-dir.ts          # Temporary directory management
├── fixtures/
│   ├── schemas/
│   │   ├── basic.prisma     # Simple User/Post schema
│   │   ├── complex.prisma   # Many models, relations
│   │   └── edge-cases.prisma # Enums, Json, composite types
│   └── configs/
│       ├── minimal.config.ts
│       ├── full.config.ts
│       └── exclusions.config.ts
└── e2e/
    └── generate.test.ts     # Full prisma generate tests
```

**Root package.json updates:**
```json
{
  "scripts": {
    "test": "bun test",
    "test:watch": "bun test --watch",
    "test:coverage": "bun test --coverage",
    "test:ci": "bun test --coverage --bail"
  }
}
```

### Phase 1: Generator Foundation

**Goal:** Create the new generator package with basic DMMF capture

**Tasks:**
1. Create `packages/generator-prisma/` directory structure
2. Implement `@prisma/generator-helper` integration
3. Parse generator config from schema.prisma (get config path)
4. Load and parse `paljs.config.ts` using esbuild-register
5. Output DMMF files

**Tests Required:**
- Config loader: valid config, missing config, invalid config, TypeScript errors
- Generator: DMMF capture, output file creation, error handling
- Integration: Full `prisma generate` with paljs generator
- Snapshots: DMMF output structure

**Files:**
```
packages/generator-prisma/
├── package.json
├── tsconfig.build.json
├── bin/
│   └── cli.ts                 # CLI entry point
├── src/
│   ├── index.ts               # Main generator
│   ├── generator.ts           # Generator handler
│   ├── config/
│   │   ├── index.ts           # Config loading
│   │   ├── loader.ts          # paljs.config.ts loading
│   │   ├── types.ts           # Config type definitions
│   │   └── define.ts          # defineConfig helper
│   ├── writers/
│   │   └── dmmf.ts            # DMMF file writer
│   └── utils/
│       └── paths.ts           # Path utilities
└── tests/
    ├── config.test.ts
    └── generator.test.ts
```

**package.json:**
```json
{
  "name": "@paljs/generator",
  "version": "9.0.0",
  "bin": {
    "paljs-generator": "./bin/cli.js"
  },
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "default": "./dist/index.js"
    },
    "./config": {
      "types": "./dist/config/define.d.ts",
      "default": "./dist/config/define.js"
    }
  },
  "dependencies": {
    "@prisma/generator-helper": "^6.0.0",
    "@paljs/types": "workspace:*",
    "esbuild-register": "^3.5.0"
  },
  "peerDependencies": {
    "prisma": "^6.0.0 || ^7.0.0"
  }
}
```

### Phase 2: Type Generation

**Goal:** Generate typed helpers for PrismaSelect

**Tasks:**
1. Create type generator from DMMF
2. Generate model select/include types
3. Generate model result types
4. Generate TypedPrismaSelect interface
5. Generate per-model helper functions
6. Handle excluded fields in types

**Tests Required:**
- Unit: Type string generation for each model type
- Unit: Excluded fields are correctly omitted from types
- Unit: Relation types are properly nested
- Snapshot: Generated type files for basic schema
- Snapshot: Generated type files for complex schema
- Integration: Generated types compile without errors
- Integration: PrismaSelect with generated types works correctly

**Files:**
```
packages/generator-prisma/src/
├── generators/
│   ├── index.ts
│   └── types/
│       ├── index.ts
│       ├── select-types.ts     # Select/Include types
│       ├── result-types.ts     # Output types
│       ├── args-types.ts       # Resolver args
│       └── helpers.ts          # createXxxSelect functions
```

### Phase 3: Nexus GraphQL Generation

**Goal:** Integrate Nexus code generation

**Tasks:**
1. Move Nexus code from `@paljs/generator` (to be renamed)
2. Create adapter for DMMF from generator context
3. Implement Nexus generator integration
4. Apply configuration (exclusions, etc.)

**Tests Required:**
- Unit: Object type generation for each model
- Unit: Query generation (findUnique, findMany, etc.)
- Unit: Mutation generation (create, update, delete)
- Unit: Input type generation
- Unit: Field exclusion works correctly
- Unit: Model exclusion works correctly
- Unit: Query/mutation exclusion works correctly
- Snapshot: Generated Nexus files for basic schema
- Snapshot: Generated Nexus files with exclusions
- Integration: Generated schema compiles
- Integration: Generated resolvers execute correctly

**Files:**
```
packages/generator-prisma/src/
├── generators/
│   └── nexus/
│       ├── index.ts
│       ├── types.ts
│       ├── queries.ts
│       ├── mutations.ts
│       └── inputs.ts
```

### Phase 4: Admin Generation

**Goal:** Generate admin schema and pages

**Tasks:**
1. Integrate admin schema generation
2. Generate admin JSON schema
3. Generate Next.js pages (optional)
4. Support App Router and Pages Router
5. Apply admin-specific configuration

**Tests Required:**
- Unit: Admin schema JSON structure
- Unit: Model field mapping
- Unit: Admin exclusions work correctly
- Snapshot: Generated admin schema for basic schema
- Snapshot: Generated pages for App Router
- Snapshot: Generated pages for Pages Router
- Integration: Admin schema loads in @paljs/admin
- Integration: Generated pages render correctly

**Files:**
```
packages/generator-prisma/src/
├── generators/
│   └── admin/
│       ├── index.ts
│       ├── schema.ts
│       └── pages.ts
```

### Phase 5: Test Migration & Existing Package Tests

**Goal:** Migrate all existing tests to Bun and add comprehensive tests

**Tasks:**
1. Migrate `@paljs/schema` tests to Bun
2. Migrate `@paljs/utils` tests to Bun
3. Migrate `@paljs/plugins` tests to Bun
4. Migrate `@paljs/nexus` tests to Bun
5. Migrate `@paljs/nexus-codegen` tests to Bun
6. Add missing tests for edge cases
7. Remove Jest dependencies
8. Update CI workflow

**Test additions per package:**

**@paljs/plugins:**
- PrismaSelect with various GraphQL info structures
- Nested relation selection
- Field exclusion edge cases
- Error handling for invalid inputs

**@paljs/nexus:**
- Admin settings CRUD operations
- Scalar type handling (BigInt, Decimal, Json, Bytes)
- Settings persistence (lowdb)

**@paljs/schema:**
- Schema parsing edge cases
- CamelCase conversion edge cases
- JSON schema generation
- TypeScript generation

**@paljs/admin:**
- Component rendering tests (using @testing-library/react)
- Form submission handling
- Table filtering and sorting
- Modal interactions

### Phase 6: Package Restructuring

**Goal:** Rename, remove, and update packages

**Tasks:**
1. Rename `@paljs/generator` to `@paljs/nexus-codegen`
   - Update package.json name
   - Remove SDL generator code (`src/sdl/`)
   - Remove GraphQL Modules generator code (`src/graphql-modules/`)
   - Keep only Nexus generator code
   - Update all internal imports
   - Update README
2. Delete `@paljs/cli` package
   - Remove from workspace
   - Update root package.json
3. Delete `@paljs/create` package
   - Remove from workspace
   - Update root package.json
4. Update `@paljs/plugins`
   - Add optional generic types to PrismaSelect
   - Maintain backward compatibility
5. Update `@paljs/nexus`
   - Use new DMMF from generated files
   - Update peer dependencies
6. Update workspace dependencies

**Tests Required:**
- All existing tests pass after restructuring
- Import paths work correctly
- No circular dependencies
- Package exports are correct

### Phase 7: E2E Testing & Regression Suite

**Goal:** Comprehensive end-to-end testing

**Tasks:**
1. Create E2E test suite for full workflow
2. Test migration from v8 to v9
3. Test all configuration options
4. Test error scenarios
5. Performance benchmarks

**E2E Test Scenarios:**
```
tests/e2e/
├── basic-workflow.test.ts      # Simple prisma generate
├── nexus-generation.test.ts    # Full Nexus setup
├── admin-generation.test.ts    # Admin pages generation
├── type-safety.test.ts         # TypeScript compilation
├── exclusions.test.ts          # All exclusion options
├── migration-v8-v9.test.ts     # Upgrade path testing
├── error-handling.test.ts      # Invalid configs, missing files
└── performance.test.ts         # Generation time benchmarks
```

### Phase 8: Documentation & Release

**Goal:** Document everything and release

**Tasks:**
1. Write comprehensive migration guide
2. Update all package READMEs
3. Update paljs.com documentation
4. Create example projects with E2E tests
5. Final test run with coverage report
6. Release v9.0.0

**Example Projects with E2E Tests:**
```
examples/
├── basic-nextjs/
│   ├── prisma/
│   │   ├── schema.prisma       # With paljs generator
│   │   └── paljs.config.ts
│   ├── src/
│   │   └── generated/paljs/    # Generated output
│   ├── tests/
│   │   ├── e2e/
│   │   │   ├── generate.test.ts      # Test prisma generate works
│   │   │   ├── types.test.ts         # Test generated types compile
│   │   │   └── prisma-select.test.ts # Test PrismaSelect integration
│   │   └── setup.ts
│   └── package.json
│
├── nexus-apollo/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── paljs.config.ts
│   ├── src/
│   │   ├── generated/paljs/
│   │   └── graphql/
│   ├── tests/
│   │   ├── e2e/
│   │   │   ├── generate.test.ts      # Test code generation
│   │   │   ├── schema.test.ts        # Test GraphQL schema builds
│   │   │   ├── queries.test.ts       # Test queries work
│   │   │   └── mutations.test.ts     # Test mutations work
│   │   └── setup.ts
│   └── package.json
│
└── admin-nextjs/
    ├── prisma/
    │   ├── schema.prisma
    │   └── paljs.config.ts
    ├── src/
    │   ├── generated/paljs/
    │   ├── app/
    │   │   └── admin/            # Generated admin pages
    │   └── components/
    ├── tests/
    │   ├── e2e/
    │   │   ├── generate.test.ts      # Test admin generation
    │   │   ├── admin-table.test.ts   # Test admin table renders
    │   │   ├── admin-form.test.ts    # Test CRUD forms work
    │   │   └── admin-schema.test.ts  # Test schema loads correctly
    │   └── setup.ts
    └── package.json
```

**CI Integration:**
- Example projects are part of CI pipeline
- E2E tests run on every PR
- Tests use real Prisma schema and database (SQLite for speed)
- Coverage reports aggregated across all examples
5. Write CHANGELOG
6. Release v9.0.0

---

## Migration Guide for Users

### Before (v8.x)

**Installation:**
```bash
npm install @paljs/cli -g
npm install @paljs/generator @paljs/plugins
```

**Configuration (pal.config.js):**
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

**Usage:**
```bash
prisma generate    # Generate Prisma Client
pal g              # Generate PalJS code (separate command!)
```

**Code:**
```typescript
import { PrismaSelect } from '@paljs/plugins';

// No type safety
const select = new PrismaSelect(info).value;
const users = await prisma.user.findMany(select as any);
```

### After (v9.0)

**Installation:**
```bash
npm install @paljs/generator @paljs/plugins --save-dev
```

**Configuration (schema.prisma):**
```prisma
generator paljs {
  provider = "paljs-generator"
  output   = "../src/generated/paljs"
  config   = "./paljs.config.ts"
}
```

**Configuration (paljs.config.ts):**
```typescript
import { defineConfig } from '@paljs/generator';

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

**Usage:**
```bash
prisma generate    # Generates EVERYTHING in one command!
```

**Code:**
```typescript
import { PrismaSelect } from '@paljs/plugins';
import { createUserSelect } from './generated/paljs';

// Fully typed!
const select = createUserSelect(info);
const users = await prisma.user.findMany(select.value);
// users is properly typed as User[]
```

### Migration Checklist

- [ ] Install `@paljs/generator` as dev dependency
- [ ] Uninstall `@paljs/cli` (global)
- [ ] Update `@paljs/generator` to `@paljs/nexus-codegen` if using directly
- [ ] Add `generator paljs` block to schema.prisma
- [ ] Convert `pal.config.js` to `paljs.config.ts`
- [ ] Remove `pal g` from build scripts
- [ ] Update imports to use generated types
- [ ] Run `prisma generate` to test

---

## Breaking Changes in v9.0

1. **@paljs/cli removed**
   - Use `prisma generate` with paljs generator instead
   - No more `pal g`, `pal c`, `pal s` commands

2. **@paljs/create removed**
   - Use `create-t3-app` or `create-next-app` instead
   - Add `@paljs/admin` manually to your project

3. **@paljs/generator renamed to @paljs/nexus-codegen**
   - Update imports if using directly
   - The new `@paljs/generator` is the Prisma generator
   - Only Nexus code generation (SDL and GraphQL Modules removed)

4. **pal.config.js replaced by paljs.config.ts**
   - New TypeScript configuration with full IDE support
   - Same approach, better types

5. **Configuration structure changed**
   - `backend.generator` → `generateGraphQL` (boolean, Nexus only)
   - `backend.output` → `nexusOutput`
   - `excludeFieldsByModel` → `models.X.excludeFields`
   - `frontend.admin` → `generateAdmin`

6. **SDL and GraphQL Modules generators removed**
   - Only Nexus code-first is supported
   - Users needing SDL can use `printSchema()` from graphql-js
   - PrismaSelect still works with any GraphQL framework

7. **New peer dependency**
   - Requires Prisma 6.x or 7.x

---

## Package Dependency Graph (After v9)

```
@paljs/generator (NEW - Prisma generator entry point)
├── @prisma/generator-helper
├── @paljs/nexus-codegen (renamed from generator, Nexus only)
├── @paljs/types
└── @paljs/utils

@paljs/nexus-codegen (renamed from @paljs/generator)
├── @paljs/types
└── @paljs/utils
└── nexus (peer dep)

@paljs/plugins
├── @paljs/types
├── @paljs/utils
└── (optional) Generated types from @paljs/generator

@paljs/nexus
├── @paljs/plugins
├── @paljs/types
├── @paljs/utils
└── lowdb

@paljs/admin
└── @paljs/types

@paljs/schema
└── (minimal deps, utility functions)

@paljs/utils
└── @prisma/internals (for DMMF utilities)

@paljs/types
└── (no deps, pure types)

@paljs/display
└── (styling utilities)
```

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Single command | `prisma generate` does everything |
| Type safety | No `any` in PrismaSelect usage |
| Prisma 7 ready | DMMF captured during generation |
| Config DX | Full TypeScript support with autocomplete |
| Packages removed | -2 (cli, create) |
| Migration effort | < 30 minutes for typical project |

---

## Future Considerations

### Potential v9.1+ Features

1. **Pothos Support**
   - Add Pothos as alternative to Nexus
   - Create `@paljs/pothos-codegen` package

2. **Watch Mode**
   - Integrate with `prisma generate --watch`
   - Hot reload generated files

3. **Custom Templates**
   - Allow users to provide custom templates
   - Template override system

4. **Multi-Schema Support**
   - Support multiple Prisma schemas
   - Per-schema configuration

5. **Plugin System**
   - Allow custom generators as plugins
   - Community extensions
