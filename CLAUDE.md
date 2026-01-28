# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Available Slash Commands

- `/admin-architecture` - Loads comprehensive admin tool architecture documentation from `examples/admin-nextjs15/docs/architecture/`

## Project Overview

PalJS is a comprehensive toolkit for building NodeJS, Prisma, GraphQL, and React applications. It's organized as a monorepo using bun workspaces, providing code generation, admin interfaces, and query optimization tools.

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

# Build all packages in dependency order
bun run build

# Run tests with coverage
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
- Tests use Jest with TypeScript support
- Admin package uses Vitest
- Test files follow the pattern `*.test.ts`
- Snapshots are used extensively for generator output validation

## Code Architecture

### Monorepo Structure

The project uses bun workspaces with packages in `/packages` directory:

1. **GraphQL Integration**
   - `nexus` - Nexus plugin for Prisma integration
   - `plugins` - GraphQL plugins for query optimization
   - `generator` - Code generation engine for Nexus GraphQL schemas

2. **UI Components**
   - `admin` - React admin UI components with Tailwind CSS

3. **Schema & Utilities**
   - `schema` - Prisma schema manipulation and TypeScript generation
   - `utils` - Common utilities for DMMF processing
   - `types` - TypeScript type definitions
   - `display` - Styled console output utilities

### Key Architectural Patterns

1. **Generator Architecture** (`packages/generator`)
   - Nexus code generation for Prisma models
   - Template-based code generation using TypeScript template literals
   - DMMF (Data Model Meta Format) processing for Prisma schema analysis

2. **Plugin System** (`packages/plugins`)
   - Field selection optimization for GraphQL queries
   - Extensible plugin architecture

3. **Admin UI** (`packages/admin`)
   - React components with TypeScript
   - Tailwind CSS for styling
   - GraphQL integration for CRUD operations
   - Form generation based on Prisma schema
   - Use `bunx shadcn add [component-name]` to add shadcn components

### Build Configuration

- TypeScript configurations:
  - `tsconfig.json` - Base configuration
  - `tsconfig.build.bundle.json` - Bundle builds
  - `tsconfig.build.regular.json` - Regular builds
  - Individual `tsconfig.build.json` in each package

- Each package has its own build process defined in `package.json`
- Build order is managed through bun workspace dependencies

### Code Style

- **Biome** for linting and formatting (`biome.json`)
- **Lefthook** for pre-commit hooks (`lefthook.yml`)
- Single-quote strings, trailing commas, 120 char line width

### Testing Strategy

- Unit tests for generators with snapshot testing
- Test utilities in `tests/helpers`
- Mock Prisma schemas in test directories

## Development Workflow

1. Create feature branch from main
2. Make changes in appropriate package(s)
3. Run tests: `bun run test`
4. Check code: `bun run check:fix`
5. Add changeset if needed (for versioning)
6. Create pull request to main branch

## Important Notes

- Never push directly to main branch
- Fix all lint errors before committing
- Use snapshot testing for generator output validation
- Maintain backward compatibility in public APIs
- Follow existing code patterns and conventions
- MDC templates in `/mdc-templates` provide AI-compatible instructions for code generation
