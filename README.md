<div align="center">
  <img src="./header.png" alt="PalJS Header" width="100%" />

  <h1>PalJS - Your Prisma GraphQL Toolkit</h1>

  <p><strong>A comprehensive toolkit for building modern GraphQL APIs with Prisma</strong></p>

  <p>
    <a href="https://www.npmjs.com/org/paljs"><img src="https://img.shields.io/npm/v/@paljs/generator?label=stable&style=flat-square" alt="Stable Version" /></a>
    <a href="https://www.npmjs.com/package/@paljs/generator/v/beta"><img src="https://img.shields.io/npm/v/@paljs/generator/beta?label=beta&style=flat-square&color=orange" alt="Beta Version" /></a>
    <a href="https://github.com/paljs/prisma-tools/blob/main/LICENSE"><img src="https://img.shields.io/github/license/paljs/prisma-tools?style=flat-square" alt="License" /></a>
    <a href="https://github.com/paljs/prisma-tools/stargazers"><img src="https://img.shields.io/github/stars/paljs/prisma-tools?style=flat-square" alt="Stars" /></a>
    <a href="https://discord.gg/X7yWXrM"><img src="https://img.shields.io/discord/768907308789235752?style=flat-square&logo=discord" alt="Discord" /></a>
  </p>
</div>

> **v9 Released!** PalJS v9 is a major rewrite featuring a native Prisma 7 generator, React 19 admin UI with Tailwind CSS 4, and typed PrismaSelect. [What's New](#whats-new-in-v9) | [Migration Guide](./docs/MIGRATION-v9.md)

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Packages](#packages)
- [Configuration](#configuration)
- [License](#license)

---

# Introduction

PalJS is a powerful toolkit that accelerates GraphQL API development with Prisma. Starting with v9, PalJS integrates directly with **Prisma 7+** as a native generator, providing code generation, admin interfaces, and query optimization that runs automatically during `prisma generate`.

## Why Choose PalJS?

- **Native Prisma Integration**: Runs as part of `prisma generate` - no separate CLI needed
- **Type-Safe Code Generation**: Generate GraphQL schemas, resolvers, and TypeScript types
- **Admin UI Ready**: Automatic admin schema generation for the PalJS Admin UI
- **Query Optimization**: PrismaSelect plugin for efficient field selection
- **Enterprise Ready**: Built with type safety, security, and scalability in mind

---

# Installation

```bash
# Install the generator (dev dependency)
npm install -D @paljs/generator prisma

# Install runtime dependencies
npm install @paljs/plugins @paljs/nexus
```

---

# Quick Start

## 1. Add PalJS Generator to Your Prisma Schema

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

generator paljs {
  provider = "paljs-generator"
  output   = "../generated/paljs"
  config   = "../paljs.config.ts"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  password  String
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

## 2. Create Configuration File

```typescript
// paljs.config.ts
import { defineConfig } from '@paljs/generator';

export default defineConfig({
  // Generate TypeScript types for PrismaSelect
  generateTypes: true,

  // Generate Nexus GraphQL types
  generateGraphQL: true,

  // Generate Admin UI schema and pages
  generateAdmin: {
    enabled: true,
    output: './admin',
    routerType: 'app', // 'app' for Next.js App Router, 'pages' for Pages Router
  },

  // Global field exclusions (e.g., sensitive fields)
  excludeFields: ['password'],

  // Per-model configuration
  models: {
    User: {
      // Exclude specific mutations
      excludeQueriesAndMutations: ['deleteMany'],
    },
  },
});
```

## 3. Generate Code

```bash
npx prisma generate
```

This generates:
- `generated/paljs/dmmf/` - DMMF data for runtime use
- `generated/paljs/types/` - TypeScript types for PrismaSelect
- `generated/paljs/nexus/` - Nexus GraphQL types, queries, and mutations
- `generated/paljs/admin/` - Admin UI schema and pages

## 4. Use in Your GraphQL Server

```typescript
// src/graphql/schema.ts
import { makeSchema } from 'nexus';
import * as types from '../generated/paljs/nexus';

export const schema = makeSchema({
  types,
  outputs: {
    typegen: './generated/nexus-typegen.ts',
    schema: './generated/schema.graphql',
  },
});
```

## 5. Use PrismaSelect for Query Optimization

```typescript
import { PrismaSelect } from '@paljs/plugins';
import { dmmf, type ModelsObject } from '../generated/paljs';

// In your resolver
const select = new PrismaSelect<'User', ModelsObject>(info, {
  dmmf: [dmmf],
  defaultFields: {
    User: { id: true, email: true },
  },
  excludeFields: {
    User: ['password'],
  },
});

const users = await prisma.user.findMany(select.value);
```

---

# Packages

## Core Packages

<table>
  <tr>
    <td><strong><a href="./packages/generator">@paljs/generator</a></strong></td>
    <td>Prisma 7+ native generator for GraphQL schemas, types, and admin UI</td>
  </tr>
  <tr>
    <td><strong><a href="./packages/plugins">@paljs/plugins</a></strong></td>
    <td>PrismaSelect and other GraphQL plugins for query optimization</td>
  </tr>
  <tr>
    <td><strong><a href="./packages/nexus">@paljs/nexus</a></strong></td>
    <td>Nexus plugin for Prisma integration with automatic field selection</td>
  </tr>
  <tr>
    <td><strong><a href="./packages/admin">@paljs/admin</a></strong></td>
    <td>React admin UI components with Tailwind CSS</td>
  </tr>
</table>


---

# Configuration

## Full Configuration Reference

```typescript
// paljs.config.ts
import { defineConfig } from '@paljs/generator';

export default defineConfig({
  // === Type Generation ===
  generateTypes: true,  // Generate TypeScript types for PrismaSelect

  // === GraphQL Generation ===
  generateGraphQL: true,  // Generate Nexus GraphQL types
  nexusOutput: './nexus', // Output directory for Nexus files (relative to generator output)

  // === Admin Generation ===
  generateAdmin: {
    enabled: true,
    output: './admin',      // Output directory
    routerType: 'app',      // 'app' | 'pages'
    models: ['User', 'Post'], // Optional: limit to specific models
  },

  // === Global Options ===
  prismaName: 'prisma',     // Name of Prisma client in context

  // Fields to exclude from all models
  excludeFields: ['password', 'hash'],

  // Fields to exclude from GraphQL inputs
  excludeInputFields: ['createdAt', 'updatedAt'],

  // Queries/mutations to exclude globally
  excludeQueriesAndMutations: ['deleteMany', 'updateMany'],

  // Disable all queries or mutations globally
  disableQueries: false,
  disableMutations: false,

  // === Per-Model Configuration ===
  models: {
    User: {
      // Exclude this model entirely from generation
      exclude: false,

      // Model-specific field exclusions
      excludeFields: ['internalNotes'],

      // Model-specific query/mutation exclusions
      excludeQueriesAndMutations: ['deleteMany'],

      // Disable queries or mutations for this model
      disableQueries: false,
      disableMutations: false,

      // Admin-specific settings
      admin: {
        hide: false,           // Hide from admin UI
        displayField: 'email', // Field to display in relationships
        listFields: ['id', 'email', 'name'], // Fields to show in list view
      },
    },

    AuditLog: {
      // Exclude model from GraphQL generation but keep in admin
      exclude: true,
    },

    Tag: {
      // Read-only model (no mutations)
      disableMutations: true,
    },
  },
});
```

---

# Migration from v8

## From CLI Workflow to Prisma Generator

**Before (v8):**
```bash
npm install -g @paljs/cli
pal generate
```

**After (v9):**
```bash
npm install -D @paljs/generator
npx prisma generate
```

The new approach:
- Runs automatically with `prisma generate`
- No separate CLI installation needed
- Configuration via `paljs.config.ts` instead of `pal.config.js`
- Same output, better integration

---

# What's New in v9

PalJS v9 is a ground-up rewrite with major improvements.

- **Native Prisma 7 Generator** — Runs as part of `prisma generate`, no separate CLI
- **Typed PrismaSelect** — Generated `ModelsObject` type eliminates `any` casts
- **React 19 Admin UI** — Rebuilt with Tailwind CSS 4 and modern React patterns
- **`defineConfig()` API** — Type-safe configuration with `paljs.config.ts`
- **Unified Output** — All generated code in one directory (`dmmf/`, `types/`, `nexus/`, `admin/`)

## What's Removed

- `@paljs/cli` — Replaced by the native Prisma generator
- `@paljs/create` — Use `create-next-app` and add PalJS packages manually
- `@paljs/display` — No longer needed
- SDL and GraphQL Modules generators — Nexus code-first only

## Installation

```bash
# Install the generator
npm install -D @paljs/generator prisma

# Install runtime packages
npm install @paljs/plugins @paljs/nexus @paljs/admin
```

## Quick Setup

1. Add the generator to your Prisma schema:

```prisma
generator paljs {
  provider = "paljs-generator"
  output   = "../generated/paljs"
}
```

2. Create `paljs.config.ts` next to your schema:

```typescript
import { defineConfig } from '@paljs/generator/config';

export default defineConfig({
  generateGraphQL: true,
  generateTypes: true,
  generateAdmin: { enabled: true, output: './admin', routerType: 'app' },
  excludeFields: ['password'],
});
```

3. Run generation:

```bash
npx prisma generate
```

See the full [Migration Guide](./docs/MIGRATION-v9.md) for upgrading from v8.

---

# Community & Support

- **[Discord](https://discord.gg/X7yWXrM)** - Join our community for help and discussions
- **[GitHub Issues](https://github.com/paljs/prisma-tools/issues)** - Report bugs and request features
- **[Discussions](https://github.com/paljs/prisma-tools/discussions)** - Ask questions and share ideas

---

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p><strong>Built with love by the PalJS team</strong></p>
  <p>
    <a href="https://github.com/paljs/prisma-tools">Star on GitHub</a> •
    <a href="https://discord.gg/X7yWXrM">Join Discord</a>
  </p>
</div>
