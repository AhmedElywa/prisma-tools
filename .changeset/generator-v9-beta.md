---
"@paljs/generator": major
---

Major update: Native Prisma generator for v9

- **BREAKING**: Rewritten as a native Prisma generator using `@prisma/generator-helper`
- **BREAKING**: Configuration via `paljs.config.ts` with `defineConfig()`
- **BREAKING**: Removed SDL, GraphQL Modules, and legacy generator modes
- Generates DMMF, TypeScript types, Nexus GraphQL, client `.graphql` files, and Admin UI
- Per-model configuration for exclusions and customization
- Prisma 7 compatibility
