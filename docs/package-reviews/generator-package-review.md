# @paljs/generator Package Review

**Date:** 2026-01-28
**Package Version:** 8.2.1
**Reviewer:** Package Modernization Team

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Current Functionality](#current-functionality)
3. [Architecture Analysis](#architecture-analysis)
4. [What Works Well](#what-works-well)
5. [What's Outdated or Could Be Improved](#whats-outdated-or-could-be-improved)
6. [Modern Alternatives & Competitors](#modern-alternatives--competitors)
7. [Naming Conflict Analysis](#naming-conflict-analysis)
8. [Recommendation](#recommendation)
9. [Modernization Plan](#modernization-plan)

---

## Executive Summary

The `@paljs/generator` package is a multi-purpose code generation tool that creates GraphQL schemas, resolvers, and admin interfaces from Prisma schema definitions. It supports three main GraphQL architectures (Nexus, SDL-first, and GraphQL Modules) plus admin UI page generation.

**Key Finding:** The package name `@paljs/generator` creates a significant naming conflict if we need a new package for DMMF/Prisma generator functionality using `@prisma/generator-helper`. This package should be **renamed** to better reflect its actual purpose: GraphQL code generation.

---

## Current Functionality

### What It Generates

#### 1. Nexus GraphQL Schema (`GenerateNexus`)
- **Object types** from Prisma models
- **Input types** for all operations
- **Query fields**: `findUnique`, `findFirst`, `findMany`, `findCount`, `aggregate`
- **Mutation fields**: `createOne`, `updateOne`, `upsertOne`, `deleteOne`, `updateMany`, `deleteMany`
- **Index files** for exports

**Output Structure:**
```
src/graphql/
├── User/
│   ├── type.ts
│   ├── queries/
│   │   ├── findUnique.ts
│   │   ├── findMany.ts
│   │   └── index.ts
│   ├── mutations/
│   │   ├── createOne.ts
│   │   └── index.ts
│   └── index.ts
├── InputTypes.ts
└── index.ts
```

#### 2. SDL-First GraphQL (`GenerateSdl`)
- **GraphQL type definitions** as SDL strings wrapped in `gql` tags
- **Resolver implementations** with TypeScript types
- **Type definitions file** for TypeScript (`resolversTypes.ts`)
- **Merged typeDefs and resolvers** exports

#### 3. GraphQL Modules (`GenerateModules`)
- **Module-per-model** architecture
- **typeDefs.ts** with SDL definitions
- **resolvers.ts** with resolver functions
- **[Model].module.ts** with `createModule` setup
- **application.ts** for the GraphQL Modules application

#### 4. Admin UI Pages (`UIGenerator`)
- **React page components** for each Prisma model
- **Support for Pages Router** (`pages/admin/models/[Model].tsx`)
- **Support for App Router** (`app/admin/models/[Model]/page.tsx`)
- **Layout files** for App Router
- **GraphQL queries** for frontend
- **Admin settings schema** (`adminSettings.json`)

### Key Dependencies

| Dependency | Purpose |
|------------|---------|
| `@paljs/types` | Type definitions including DMMF types |
| `@paljs/schema` | Prisma schema parsing (`ConvertSchemaToObject`) |
| `@paljs/utils` | DMMF utilities (`getDMMF`, `getInputType`) |
| `prettier` | Code formatting (v2.8.8 - outdated) |
| `pkg-dir` | Finding project root |
| `pluralize` | Model name pluralization |

---

## Architecture Analysis

### Generation Approach: Template-Based String Concatenation

The package uses **template-based code generation** with string concatenation and template literals. Example from `/home/dev/projects/prisma-tools/packages/generator/src/nexus/templates/findMany.ts`:

```typescript
export default `
#{import}

#{exportTs}const #{Model}FindManyQuery = queryField('findMany#{Model}', {
  type: nonNull(list(nonNull('#{ModelName}'))),
  #{args}
  resolve(_parent, args, {#{prisma}, select}) {
    return #{prisma}.#{model}.findMany({
      ...args,
      ...select,
    })
  },
});
#{exportJs}
`;
```

**Placeholders used:**
- `#{ModelName}` - Original model name
- `#{Model}` - Capitalized model name
- `#{model}` - Lowercase model name
- `#{import}` - Import statements
- `#{args}` - Generated arguments
- `#{prisma}` - Prisma client name
- `#{exportTs}` / `#{exportJs}` - Language-specific exports

### Class Hierarchy

```
Generators (base class)
├── GenerateNexus
├── GenerateSdl
│   └── GenerateTypes
└── GenerateModules

UIGenerator (standalone)
```

### DMMF Processing

The package uses `@paljs/utils` which wraps `@prisma/internals` for DMMF access:

```typescript
// From @paljs/utils/src/dmmf.ts
import { getDMMF, getSchemaWithPath } from '@prisma/internals';
```

**Note:** Uses `@prisma/internals` (internal package) rather than `@prisma/generator-helper` (official generator protocol).

---

## What Works Well

### 1. Comprehensive Coverage
- Supports all major Prisma CRUD operations
- Generates complete GraphQL schema with types, queries, and mutations
- Multiple output formats (Nexus, SDL, GraphQL Modules)

### 2. Flexible Configuration
```typescript
interface GeneratorOptions {
  excludeFields: string[];
  excludeModels: { name: string; queries?: boolean; mutations?: boolean }[];
  excludeFieldsByModel: Record<string, string[]>;
  excludeQueriesAndMutations: QueriesAndMutations[];
  excludeQueriesAndMutationsByModel: Record<string, QueriesAndMutations[]>;
  filterInputs?: (input: DMMF.InputType) => DMMF.SchemaArg[];
  // ...
}
```

### 3. Documentation Comments Support
- Preserves Prisma schema documentation as GraphQL descriptions
- Supports `@Pal.omit` directive for field exclusion
- Filters internal directives from output

### 4. Multi-Schema Support
```typescript
const schemas = ['./prisma/user.prisma', './prisma/blog.prisma'];
const uiGenerator = new UIGenerator(schemas);
```

### 5. Return as Text Option
- `backAsText: true` returns generated code as strings instead of writing files
- Useful for programmatic consumption and testing

### 6. Both JavaScript and TypeScript Support
- `javaScript: true` option generates `.js` files with CommonJS exports
- TypeScript generation includes proper type imports

---

## What's Outdated or Could Be Improved

### 1. Outdated Dependencies
| Dependency | Current | Latest | Issue |
|------------|---------|--------|-------|
| `prettier` | 2.8.8 | 3.x | Breaking changes, new parser options |
| `pkg-dir` | 5.0.0 | 7.x (ESM-only) | Module system compatibility |

### 2. Not a True Prisma Generator
- Does NOT integrate with `prisma generate` command
- Does NOT use `@prisma/generator-helper` protocol
- Requires manual invocation via CLI or API
- Cannot be added to `schema.prisma` as a generator

**Comparison with proper Prisma generators:**
```prisma
// This pattern is NOT supported:
generator paljs {
  provider = "paljs-generator"
  output   = "./generated"
}
```

### 3. Template-Based Generation Limitations
- String concatenation is error-prone
- No AST validation - can generate syntactically invalid code
- Difficult to maintain complex templates
- No incremental updates - rewrites entire files

### 4. Nexus Framework Concerns
- [Nexus Prisma was handed over to community maintenance](https://github.com/graphql-nexus/nexus-prisma/issues/279)
- No longer officially maintained by Prisma
- Pothos has become the preferred code-first GraphQL solution

### 5. No Plugin System
- Hard-coded generators without extension points
- Cannot add custom operations or types
- No middleware or transformation hooks

### 6. File System Operations
- Direct `writeFileSync` calls without proper error handling
- No dry-run mode
- No diff preview before writing
- Synchronous operations block the event loop

### 7. Missing Modern Features
- No support for Prisma Client extensions
- No support for Prisma 5/6 features (typed JSON, etc.)
- No relation load strategies configuration
- No support for composite types
- No integration with GraphQL subscriptions

### 8. Code Quality Issues
- Mixed TypeScript patterns (type assertions, `any` usage)
- Inconsistent error handling
- No input validation for options
- Some commented-out code (`//tryLoadEnvs(getEnvPaths());`)

---

## Modern Alternatives & Competitors

### 1. Pothos with Prisma Plugin
**Website:** [pothos-graphql.dev](https://pothos-graphql.dev/docs/plugins/prisma)

**Advantages:**
- Code-first with full type inference
- Built-in N+1 query optimization
- Excellent Relay support
- Active maintenance by the community
- Plugin ecosystem for additional functionality

**Example:**
```typescript
builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    email: t.exposeString('email'),
    posts: t.relation('posts'),
  }),
});
```

### 2. TypeGraphQL Prisma
**Repository:** [typegraphql-prisma](https://github.com/MichalLytek/typegraphql-prisma)

**Advantages:**
- True Prisma generator (integrates with `prisma generate`)
- Decorator-based approach familiar to NestJS users
- Generates full CRUD resolvers automatically
- Active development

**Configuration:**
```prisma
generator typegraphql {
  provider = "typegraphql-prisma"
  output   = "../generated/typegraphql-prisma"
}
```

### 3. Prisma-generated GraphQL (Various)
- **prisma-appsync** - AWS AppSync integration
- **prisma-nestjs-graphql** - NestJS-specific generation
- **create-graphql-server** - Full server scaffolding

### 4. Comparison Matrix

| Feature | @paljs/generator | Pothos | TypeGraphQL-Prisma |
|---------|------------------|--------|-------------------|
| Prisma `generate` integration | No | N/A (runtime) | Yes |
| Type safety | Partial | Full | Full |
| N+1 prevention | Manual | Built-in | Manual |
| Relay support | No | Excellent | Limited |
| Code-first | Yes | Yes | Yes |
| SDL generation | Yes | Via export | No |
| Active maintenance | Limited | Active | Active |
| Learning curve | Low | Medium | Medium |

---

## Naming Conflict Analysis

### The Problem

The name `@paljs/generator` is **too generic** and creates conflicts:

1. **Semantic confusion** - "Generator" doesn't specify what is generated
2. **Future conflict** - If we create a DMMF/Prisma generator using `@prisma/generator-helper`, it would naturally be called "generator"
3. **Package discovery** - Users searching for "paljs generator" might expect different functionality

### Current Package Purpose

The package generates:
- GraphQL schemas
- GraphQL resolvers
- Admin UI pages

It does NOT:
- Generate Prisma Client
- Generate DMMF transformations
- Integrate with `prisma generate` command

### Recommended New Names

| Option | Pros | Cons |
|--------|------|------|
| `@paljs/graphql-generator` | Clear, descriptive | Long |
| `@paljs/codegen` | Short, modern | Too generic |
| `@paljs/graphql-codegen` | Descriptive, follows graphql-codegen naming | Could be confused with GraphQL Code Generator |
| `@paljs/schema-generator` | Indicates schema focus | Doesn't mention GraphQL |
| `@paljs/crud-generator` | Describes main function | Too narrow |

**Recommendation:** `@paljs/graphql-generator` or `@paljs/graphql-codegen`

### Migration Path for Renaming

1. Create new package with new name
2. Re-export everything from old package name (deprecated)
3. Add deprecation warning to old package
4. Update all documentation and examples
5. After 2 major versions, archive old package

---

## Recommendation

### Overall Assessment: **Rename and Restructure**

The package provides valuable functionality but needs modernization to remain competitive. The recommended approach is a **phased restructuring**:

### Phase 1: Rename Package (Immediate)
- Rename to `@paljs/graphql-codegen`
- Create deprecation shim at old name
- Reserve `@paljs/generator` for future true Prisma generator

### Phase 2: Modernize Internals (Short-term)
- Upgrade dependencies (Prettier 3, etc.)
- Add proper error handling
- Implement dry-run mode
- Add incremental generation

### Phase 3: Create True Prisma Generator (Medium-term)
- New `@paljs/generator` package using `@prisma/generator-helper`
- Integrates with `prisma generate`
- Can replace `@paljs/graphql-codegen` functionality
- Supports new Prisma features automatically

### Phase 4: Consider Deprecation Path (Long-term)
- Evaluate whether to maintain custom generators
- Consider recommending Pothos for new projects
- Focus on unique value-add (admin UI, specific patterns)

---

## Modernization Plan

### Immediate Actions (1-2 weeks)

1. **Update dependencies**
   ```json
   {
     "prettier": "^3.2.0",
     "pkg-dir": "^8.0.0"
   }
   ```

2. **Add proper TypeScript configuration**
   - Enable strict mode
   - Remove `any` type usage
   - Add proper error types

3. **Improve file operations**
   ```typescript
   // Add dry-run support
   interface GeneratorOptions {
     dryRun?: boolean;
     verbose?: boolean;
   }
   ```

### Short-term Improvements (1-2 months)

1. **Create generator interface**
   ```typescript
   interface CodeGenerator {
     name: string;
     generate(options: GeneratorOptions): Promise<GeneratedFile[]>;
     validate(options: GeneratorOptions): ValidationResult;
   }
   ```

2. **Add plugin system**
   ```typescript
   interface GeneratorPlugin {
     name: string;
     beforeGenerate?(context: GeneratorContext): void;
     afterGenerate?(context: GeneratorContext, files: GeneratedFile[]): void;
     transformTemplate?(template: string, context: TemplateContext): string;
   }
   ```

3. **Implement AST-based generation option**
   - Use `ts-morph` for TypeScript generation
   - Ensures syntactically valid output
   - Enables better code transformations

### Medium-term Goals (3-6 months)

1. **Create true Prisma generator**
   ```typescript
   // New @paljs/generator package
   import { generatorHandler } from '@prisma/generator-helper';

   generatorHandler({
     onManifest() {
       return {
         defaultOutput: './generated',
         prettyName: 'PalJS Generator',
       };
     },
     onGenerate(options) {
       // Generate GraphQL from DMMF
     },
   });
   ```

2. **Add GraphQL schema validation**
   - Validate generated SDL with graphql-js
   - Type-check generated resolvers
   - Ensure Prisma-GraphQL type alignment

3. **Support new Prisma features**
   - Client extensions
   - Typed JSON fields
   - Composite types
   - Multi-schema (schema groups)

### Package Restructure Proposal

```
@paljs/graphql-codegen (renamed from @paljs/generator)
├── nexus/          # Nexus GraphQL generation
├── sdl/            # SDL-first generation
├── modules/        # GraphQL Modules generation
└── admin/          # Admin UI generation

@paljs/generator (new)
├── core/           # Generator helper integration
├── graphql/        # GraphQL from DMMF
├── typescript/     # TypeScript types from DMMF
└── json/           # JSON schema from DMMF
```

---

## File Inventory

### Core Files

| File | Purpose | Lines |
|------|---------|-------|
| `/packages/generator/src/Generator.ts` | Main entry point, orchestrates generators | 30 |
| `/packages/generator/src/Generators.ts` | Base class with shared utilities | 290 |
| `/packages/generator/src/index.ts` | Package exports | 2 |

### Nexus Generator

| File | Purpose |
|------|---------|
| `/packages/generator/src/nexus/index.ts` | Nexus schema generation |
| `/packages/generator/src/nexus/templates/*.ts` | CRUD operation templates |

### SDL Generator

| File | Purpose |
|------|---------|
| `/packages/generator/src/sdl/index.ts` | SDL-first generation |
| `/packages/generator/src/sdl/GenerateTypes.ts` | TypeScript types for resolvers |
| `/packages/generator/src/sdl/CreateQueriesAndMutations.ts` | Query/mutation SDL |

### GraphQL Modules Generator

| File | Purpose |
|------|---------|
| `/packages/generator/src/graphql-modules/index.ts` | Module generation |
| `/packages/generator/src/graphql-modules/CreateQueriesAndMutations.ts` | Module query/mutations |

### Admin UI Generator

| File | Purpose |
|------|---------|
| `/packages/generator/src/admin/index.ts` | Page generation |
| `/packages/generator/src/admin/createFile.ts` | File writing utility |
| `/packages/generator/src/admin/mergeSchema.ts` | Schema merging for multi-DB |
| `/packages/generator/src/admin/createGraphql.ts` | GraphQL query generation |

---

## References

### Web Sources

- [Prisma Generators Documentation](https://www.prisma.io/docs/orm/prisma-schema/overview/generators)
- [Prisma Ecosystem](https://www.prisma.io/ecosystem)
- [How to build a custom Prisma generator](https://lhowsam.com/blog/how-to-build-a-custom-prisma-generator)
- [Pothos GraphQL Prisma Plugin](https://pothos-graphql.dev/docs/plugins/prisma)
- [Pothos vs TypeGraphQL Comparison](https://blog.logrocket.com/pothos-vs-typegraphql-for-typescript-schema-building/)
- [nexus-prisma Community Handover](https://github.com/graphql-nexus/nexus-prisma/issues/279)
- [Schema-First vs Code-First GraphQL](https://www.apollographql.com/blog/schema-first-vs-code-only-graphql)
- [Template vs AST Code Generation](https://medium.com/singapore-gds/writing-a-typescript-code-generator-templates-vs-ast-ab391e5d1f5e)
- [@prisma/generator-helper NPM](https://www.npmjs.com/package/@prisma/generator-helper)

### Internal Files Reviewed

- `/home/dev/projects/prisma-tools/packages/generator/package.json`
- `/home/dev/projects/prisma-tools/packages/generator/README.md`
- `/home/dev/projects/prisma-tools/packages/generator/src/*.ts`
- `/home/dev/projects/prisma-tools/packages/types/src/generator.ts`
- `/home/dev/projects/prisma-tools/packages/utils/src/dmmf.ts`

---

## Conclusion

The `@paljs/generator` package provides solid GraphQL code generation functionality but needs modernization to remain competitive in the evolving Prisma ecosystem. The primary recommendations are:

1. **Rename** to `@paljs/graphql-codegen` to avoid naming conflicts
2. **Reserve** `@paljs/generator` for a future true Prisma generator using `@prisma/generator-helper`
3. **Modernize** the codebase with updated dependencies and better architecture
4. **Consider** recommending Pothos for new projects while maintaining PalJS for existing users

The unique value proposition of this package lies in its admin UI generation and multi-architecture support - these should be the focus areas for differentiation rather than competing directly with Pothos or TypeGraphQL-Prisma on GraphQL schema generation.
