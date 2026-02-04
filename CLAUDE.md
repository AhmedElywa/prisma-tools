# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PalJS is a comprehensive toolkit for building NodeJS, Prisma, GraphQL, and React applications. It's organized as a monorepo using bun workspaces, providing code generation, admin interfaces, and query optimization tools.

**Current version**: v9 (beta) — Prisma 7 compatible, native Prisma generator.

## Commands

### Development Commands

```bash
# Install dependencies (using bun)
bun install

# Add new packages
bun add [package-name]
bun add -D [dev-package-name]

# Add packages to specific workspace
bun add [package-name] --filter @paljs/[workspace-name]

# Build all v9 packages in dependency order
bun run build

# Run tests (excludes Playwright E2E specs)
bun run test

# Lint and format code with biome
bun run check        # Check for issues
bun run check:fix    # Auto-fix issues
bun run lint         # Lint only
bun run format       # Format code
bun run format:ci    # Check formatting (CI)

# Generate documentation
bun run docs:gen
```

### Package-Specific Build

Individual packages can be built using:
```bash
bun run --filter @paljs/[package-name] build
```

### Testing

- Run all tests: `bun run test`
- Tests use bun's built-in test runner (`bun:test`)
- Admin package uses Vitest
- Test files follow the pattern `*.test.ts`
- Playwright E2E specs (`*.spec.ts`) in `examples/admin-test/e2e/` are excluded from `bun run test` — run them with `npx playwright test` from `examples/admin-test/`
- Snapshots are used extensively for generator output validation
- E2E generator tests create temp projects with symlinked `node_modules` from the monorepo root

### Publishing

- Uses **Changesets** (`@changesets/cli@2.29.8`) for versioning and publishing
- Currently in **pre-release mode** (`beta` tag) — see `.changeset/pre.json`
- Publishing workflow:
  1. Add changeset: `bunx changeset` (select packages and bump type)
  2. Version bump: `bunx changeset version`
  3. **Build packages**: `bun run build` (required before publish!)
  4. Publish: `expect -c 'spawn bunx changeset publish; expect "one-time password:"; send "<otp>\r"; expect eof'`
- **Important**: The `@paljs/admin` package has `publishConfig.directory: "./dist"` — it publishes from `dist/package.json`. You MUST run `bun run build` after version bump to update the version in `dist/package.json`, otherwise npm will reject the publish.
- **Important**: Changesets resolves `workspace:*` references to real versions during publish. Do NOT use `npm publish` directly — it won't resolve workspace protocol refs.
- To exit pre-release mode for stable release: `bunx changeset pre exit`

## Code Architecture

### Monorepo Structure

The project uses bun workspaces with packages in `/packages` directory:

1. **Code Generation** (`packages/generator`)
   - Prisma 7 native generator using `@prisma/generator-helper`
   - Binary: `paljs-generator` (via `bin/cli.js`)
   - Generates Nexus GraphQL types, queries, and mutations
   - Generates client-side `.graphql` files with fragments
   - Generates Admin UI pages and schema
   - Configured via `paljs.config.ts` with `defineConfig()`
   - Writers: DMMF (`writers/dmmf.ts`), types (`writers/types.ts`), Nexus (`writers/nexus/`), GraphQL (`writers/graphql/`), Admin (`writers/admin/`)
   - Config system: `config/define.ts` (defineConfig), `config/loader.ts` (resolution), `config/types.ts` (types)

2. **GraphQL Runtime**
   - `nexus` - Nexus plugin for Prisma integration (PrismaSelect)
   - `plugins` - GraphQL plugins for query optimization (typed PrismaSelect)

3. **UI Components**
   - `admin` - React 19 admin UI components with Tailwind CSS 4, @tanstack/react-table v8, @dnd-kit/sortable
   - Use `bunx shadcn add [component-name]` to add shadcn components

### Key Architectural Patterns

1. **Generator Architecture** (`packages/generator`)
   - Native Prisma generator with `generatorHandler({ onManifest, onGenerate })`
   - Config normalization: `generateGraphQL: true` resolves to `{ nexus: true, nexusOutput: './nexus', client: false, clientOutput: './graphql' }`
   - `generateAdmin: true` resolves to `{ enabled: true, output: 'admin', routerType: 'app' }`
   - Admin schema writer: relation fields (`kind === 'object'`) get `create: false` and `update: false`
   - Per-model configuration for exclusions and customization

2. **Plugin System** (`packages/plugins`)
   - Field selection optimization for GraphQL queries
   - Extensible plugin architecture

3. **Admin UI** (`packages/admin`)
   - React 19 components with TypeScript
   - Tailwind CSS 4 for styling
   - GraphQL integration for CRUD operations
   - Form generation based on Prisma schema

### Prisma 7 Compatibility

- Prisma 7 removes `url` from `datasource` block in `schema.prisma` — connection config goes in `prisma.config.ts`
- Generator gets DMMF directly from `@prisma/generator-helper`, not from `@paljs/schema`
- `@paljs/utils` dist must be rebuilt if it still references deleted packages (e.g., `@paljs/display`)

### Build Configuration

- TypeScript configurations:
  - `tsconfig.json` - Base configuration
  - `tsconfig.build.bundle.json` - Bundle builds
  - `tsconfig.build.regular.json` - Regular builds
  - Individual `tsconfig.build.json` in each package

- Each package has its own build process defined in `package.json`
- Build order is managed through bun workspace dependencies
- `bunfig.toml` configures test exclusions

### Code Style

- **Biome** for linting and formatting (`biome.json`)
- **Lefthook** for pre-commit hooks (`lefthook.yml`)
- Single-quote strings, trailing commas, 120 char line width

### Testing Strategy

- Unit tests for generators with snapshot testing
- E2E tests in `tests/e2e/` create temp projects, symlink root `node_modules`, and run `prisma generate`
- E2E tests in `examples/generator-test/` test the full workspace generation flow
- Playwright E2E tests in `examples/admin-test/e2e/` test the admin UI (run separately)
- Test utilities in `tests/helpers`
- Mock Prisma schemas in test directories

## Development Workflow

1. Create feature branch from main
2. Make changes in appropriate package(s)
3. Run tests: `bun run test`
4. Check code: `bun run check:fix`
5. Add changeset if needed: `bunx changeset`
6. Create pull request to main branch

## Important Notes

- Never push directly to main branch
- Fix all lint errors before committing
- Use snapshot testing for generator output validation
- Follow existing code patterns and conventions
- Docs site is at `../prisma-tools-docs/` (Next.js 16, auto-deploys to Hetzner via GitHub Actions on push to main)
- Release plan: `docs/V9-RELEASE-PLAN.md`
- Migration guide: `docs/MIGRATION-v9.md`
- Prisma 7 notes: `docs/prisma-7-compatibility.md`
