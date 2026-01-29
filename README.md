<div align="center">
  <img src="./header.png" alt="PalJS Header" width="100%" />

  <h1>PalJS - Your Prisma GraphQL Toolkit</h1>

  <p><strong>A comprehensive toolkit for building modern GraphQL APIs with Prisma</strong></p>

  <p>
    <a href="https://www.npmjs.com/org/paljs"><img src="https://img.shields.io/npm/v/@paljs/generator?label=version&style=flat-square" alt="Version" /></a>
    <a href="https://github.com/paljs/prisma-tools/blob/main/LICENSE"><img src="https://img.shields.io/github/license/paljs/prisma-tools?style=flat-square" alt="License" /></a>
    <a href="https://github.com/paljs/prisma-tools/stargazers"><img src="https://img.shields.io/github/stars/paljs/prisma-tools?style=flat-square" alt="Stars" /></a>
    <a href="https://discord.gg/X7yWXrM"><img src="https://img.shields.io/discord/768907308789235752?style=flat-square&logo=discord" alt="Discord" /></a>
  </p>
</div>

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Packages](#packages)
- [Configuration](#configuration)
- [AI-Powered Code Generation](#-ai-powered-code-generation-with-mdc-templates)
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

## Utility Packages

<table>
  <tr>
    <td><strong><a href="./packages/schema">@paljs/schema</a></strong></td>
    <td>Prisma schema manipulation and conversion tools</td>
  </tr>
  <tr>
    <td><strong><a href="./packages/utils">@paljs/utils</a></strong></td>
    <td>Common utilities for DMMF processing</td>
  </tr>
  <tr>
    <td><strong><a href="./packages/types">@paljs/types</a></strong></td>
    <td>TypeScript type definitions</td>
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

# AI-Powered Code Generation with MDC Templates

**Transform 5 years of code generation expertise into AI-compatible instructions**

PalJS also offers **MDC (Model Data Context) Templates** - comprehensive AI instructions that preserve all the power of our generators while being maintenance-free.

## Available MDC Templates

<table>
  <tr>
    <td><strong><a href="./mdc-templates/prisma-graphql-generator.md">GraphQL Operations</a></strong></td>
    <td>Generate client-side GraphQL fragments, queries, and mutations</td>
  </tr>
  <tr>
    <td><strong><a href="./mdc-templates/prisma-admin-pages-generator.md">Admin Pages</a></strong></td>
    <td>Create React admin interfaces with Next.js support</td>
  </tr>
  <tr>
    <td><strong><a href="./mdc-templates/prisma-nexus-generator.md">Nexus Backend</a></strong></td>
    <td>Build type-safe GraphQL APIs with Nexus framework</td>
  </tr>
  <tr>
    <td><strong><a href="./mdc-templates/prisma-sdl-generator.md">SDL Backend</a></strong></td>
    <td>Generate SDL-first GraphQL schemas and resolvers</td>
  </tr>
</table>

See the [MDC Templates Documentation](./mdc-templates/README.md) for more details.

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
