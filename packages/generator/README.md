# @paljs/generator

A true Prisma generator that runs during `prisma generate` to generate types, Nexus GraphQL schemas, and admin UI configurations. Supports Prisma 6 and 7.

## Installation

```bash
npm install @paljs/generator --save-dev
# or
pnpm add @paljs/generator -D
# or
bun add @paljs/generator -d
```

## Quick Start

### 1. Add generator to schema.prisma

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

generator paljs {
  provider = "paljs-generator"
  output   = "./generated/paljs"
}
```

### 2. Create paljs.config.ts (optional)

```typescript
import { defineConfig } from '@paljs/generator/config';

export default defineConfig({
  generateTypes: true,
  generateGraphQL: true,
  generateAdmin: {
    enabled: true,
    routerType: 'app',
  },
  excludeFields: ['password', 'hash'],
  prismaName: 'prisma',
});
```

### 3. Run prisma generate

```bash
npx prisma generate
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `generateTypes` | `boolean` | `true` | Generate typed helpers for PrismaSelect |
| `generateGraphQL` | `boolean` | `false` | Generate Nexus GraphQL types |
| `nexusOutput` | `string` | `'./nexus'` | Output directory for Nexus files |
| `generateAdmin` | `boolean \| AdminConfig` | `false` | Generate admin UI configuration |
| `prismaName` | `string` | `'prisma'` | Name of Prisma client variable |
| `excludeFields` | `string[]` | `[]` | Fields to exclude globally |
| `excludeInputFields` | `string[]` | `[]` | Fields to exclude from inputs |
| `excludeQueriesAndMutations` | `string[]` | `[]` | Operations to exclude |
| `disableQueries` | `boolean` | `false` | Disable all queries |
| `disableMutations` | `boolean` | `false` | Disable all mutations |
| `models` | `Record<string, ModelConfig>` | `{}` | Per-model configuration |

### Admin Configuration

```typescript
generateAdmin: {
  enabled: true,
  output: './admin',
  routerType: 'app', // 'app' | 'pages'
  models: ['User', 'Post'], // undefined = all models
}
```

### Per-Model Configuration

```typescript
models: {
  User: {
    excludeFields: ['internalNotes'],
    excludeQueriesAndMutations: ['deleteOne'],
    disableMutations: false,
    queries: true,
    mutations: true,
    admin: {
      hide: false,
      displayField: 'email',
      listFields: ['email', 'name', 'createdAt'],
    },
  },
  AuditLog: {
    exclude: true, // Exclude entirely
  },
}
```

## Generated Output

```
generated/paljs/
├── index.ts                  # Main exports
├── dmmf/
│   ├── index.ts              # DMMF TypeScript export
│   └── dmmf.json             # DMMF as JSON
├── types/
│   └── index.ts              # Typed helpers for PrismaSelect
├── nexus/                    # If generateGraphQL enabled
│   ├── index.ts
│   ├── InputTypes.ts
│   ├── User/
│   │   ├── type.ts
│   │   ├── queries/
│   │   └── mutations/
│   └── Post/
└── admin/                    # If generateAdmin enabled
    ├── schema.json           # Admin UI configuration
    └── models/               # Next.js pages
```

## Usage

### Using Generated Types with PrismaSelect

```typescript
import { PrismaSelect } from '@paljs/plugins';
import type { UserFields, ModelsObject, ModelName } from './generated/paljs';

// Typed PrismaSelect
const select = new PrismaSelect<'User', ModelsObject>(info);
const users = await prisma.user.findMany(select.value);
```

### Using Generated Nexus Types

```typescript
import { makeSchema } from 'nexus';
import * as types from './generated/paljs/nexus';

const schema = makeSchema({
  types,
  outputs: {
    schema: './schema.graphql',
    typegen: './nexus-typegen.ts',
  },
});
```

### Using Admin Schema

```typescript
import adminSchema from './generated/paljs/admin/schema.json';
import { PrismaTable } from '@paljs/admin';

function UserAdmin() {
  return <PrismaTable model="User" />;
}
```

## Requirements

- Prisma 7.x
- Node.js 18+
- TypeScript 5+

## License

MIT
