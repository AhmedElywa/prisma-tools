# @paljs/generator

## 9.0.0

### Major Changes

- 31b8fd6: Major update: Native Prisma generator for v9

  - **BREAKING**: Rewritten as a native Prisma generator using `@prisma/generator-helper`
  - **BREAKING**: Configuration via `paljs.config.ts` with `defineConfig()`
  - **BREAKING**: Removed SDL, GraphQL Modules, and legacy generator modes
  - Generates DMMF, TypeScript types, Nexus GraphQL, client `.graphql` files, and Admin UI
  - Per-model configuration for exclusions and customization
  - Prisma 7 compatibility

- PalJS v9.0.0 Stable Release

  ## Breaking Changes

  - **Native Prisma 7 Generator**: Now runs as part of `prisma generate`, replacing the CLI
  - **React 19 Admin UI**: Rebuilt with Tailwind CSS 4, @tanstack/react-table v8, @dnd-kit/sortable
  - **Typed PrismaSelect**: Generated `ModelsObject` type eliminates `any` casts
  - **New Config API**: Use `defineConfig()` in `paljs.config.ts`

  ## Removed Packages

  - `@paljs/cli` - Replaced by native Prisma generator
  - `@paljs/create` - Use create-next-app instead
  - `@paljs/display` - No longer needed
  - `@paljs/types` - Inlined into consuming packages
  - `@paljs/utils` - Inlined into consuming packages
  - `@paljs/schema` - No longer needed with Prisma 7

  ## New Features

  - Config file discovery in project root (not just prisma/ directory)
  - Version string read from package.json
  - Full Prisma 7 compatibility

### Patch Changes

- 505ea30: Remove deprecated @paljs/types, @paljs/utils, and @paljs/schema packages

  - Inlined necessary utilities directly into consuming packages
  - Removed unused dependencies
  - Simplified package structure

## 9.0.0-beta.3

### Patch Changes

- Remove deprecated @paljs/types, @paljs/utils, and @paljs/schema packages

  - Inlined necessary utilities directly into consuming packages
  - Removed unused dependencies
  - Simplified package structure

## 9.0.0-beta.2

### Major Changes

- Major update: Native Prisma generator for v9

  - **BREAKING**: Rewritten as a native Prisma generator using `@prisma/generator-helper`
  - **BREAKING**: Configuration via `paljs.config.ts` with `defineConfig()`
  - **BREAKING**: Removed SDL, GraphQL Modules, and legacy generator modes
  - Generates DMMF, TypeScript types, Nexus GraphQL, client `.graphql` files, and Admin UI
  - Per-model configuration for exclusions and customization
  - Prisma 7 compatibility

### Patch Changes

- Updated dependencies
  - @paljs/utils@9.0.0-beta.0
