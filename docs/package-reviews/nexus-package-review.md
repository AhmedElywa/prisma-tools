# @paljs/nexus Package Review

**Date:** January 2026
**Package Version:** 8.2.1
**Reviewer:** Claude Code
**Purpose:** Comprehensive review for Prisma 7 modernization effort

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Current Functionality](#current-functionality)
3. [Nexus Framework Status](#nexus-framework-status)
4. [Dependencies Analysis](#dependencies-analysis)
5. [DMMF Dependency Problem](#dmmf-dependency-problem)
6. [Modern Alternatives](#modern-alternatives)
7. [Recommendation](#recommendation)
8. [Upgrade Plan (If Keeping)](#upgrade-plan-if-keeping)
9. [Sources](#sources)

---

## Executive Summary

**Recommendation: DEPRECATE and provide migration guide to Pothos**

The `@paljs/nexus` package provides Nexus GraphQL integration with Prisma, offering automatic field selection, admin schema generation, and GraphQL scalar types. However, the underlying Nexus framework is effectively **dead** with no releases since March 2022 and no meaningful commits since March 2023. Even Nexus maintainers recommend migrating to Pothos.

The combination of:
1. Nexus being abandoned
2. Prisma 7's DMMF breaking changes
3. Modern alternatives (Pothos) offering superior type-safety and active maintenance
4. The maintenance burden of supporting deprecated infrastructure

...makes deprecation the pragmatic choice.

---

## Current Functionality

### Package Structure

The `@paljs/nexus` package (`/home/dev/projects/prisma-tools/packages/nexus/src/`) consists of:

```
src/
├── index.ts          # Main plugin export
├── settings.ts       # Configuration types
├── admin.ts          # Admin schema generation (uses lowdb)
├── defaultScalar.ts  # Scalar type aggregator
└── scalars/
    ├── DateTime.ts   # DateTime scalar (graphql-scalars)
    ├── Json.ts       # JSON scalar (graphql-scalars)
    ├── Decimal.ts    # Decimal scalar (decimal.js)
    ├── BigInt.ts     # BigInt scalar (graphql-scalars)
    └── Bytes.ts      # Bytes scalar (graphql-scalars)
```

### Core Features

#### 1. Nexus Plugin (`paljs`)
The main export is a Nexus plugin that:
- Adds `PrismaSelect` to the GraphQL context for automatic field selection optimization
- Registers GraphQL scalar types for Prisma data types
- Optionally generates admin schema queries/mutations

```typescript
export const paljs = (settings?: Settings) =>
  plugin({
    name: 'paljs',
    onInstall(builder) {
      // Adds BatchPayload, scalar types, and optional admin types
    },
    onCreateFieldResolver() {
      return async (root, args, ctx, info, next) => {
        ctx.select = new PrismaSelect(info, settings?.prismaSelectOptions).value;
        return await next(root, args, ctx, info);
      };
    },
  });
```

#### 2. PrismaSelect Integration
Uses `@paljs/plugins` to automatically generate Prisma `select` objects from GraphQL queries:
- Converts GraphQL query info to optimized Prisma select statements
- Supports default fields configuration
- Supports field exclusion
- Handles nested relations automatically

#### 3. Admin Schema Generation
When `includeAdmin: true`, generates:
- `getSchema` query - Returns schema configuration from JSON file
- `updateField` mutation - Updates field settings
- `updateModel` mutation - Updates model settings
- Uses **lowdb** for JSON file persistence

#### 4. GraphQL Scalars
Provides Prisma-compatible scalars:
- `DateTime` - ISO 8601 date/time
- `Json` - JSON objects
- `Decimal` - Arbitrary-precision decimals
- `BigInt` - Large integers
- `Bytes` - Binary data

### Dependencies

```json
{
  "peerDependencies": {
    "@prisma/client": "^6",
    "graphql": "^15 || ^16",
    "nexus": "^1"
  },
  "dependencies": {
    "@paljs/plugins": "workspace:*",
    "@paljs/types": "workspace:*",
    "@paljs/utils": "workspace:*",
    "decimal.js": "^10.4.3",
    "fs-extra": "^10.1.0",
    "graphql-scalars": "^1.22.1",
    "lowdb": "^7.0.1"
  }
}
```

---

## Nexus Framework Status

### Repository Activity Analysis

| Metric | Nexus Core | nexus-prisma | Pothos (Comparison) |
|--------|------------|--------------|---------------------|
| Last Release | March 7, 2022 (v1.3.0) | Dec 9, 2024 (v2.0.8) | Jan 16, 2026 |
| Last Commit | March 16, 2023 | Dec 9, 2024 | Jan 16, 2026 |
| Last Push | Nov 19, 2023 | Jan 27, 2026 | Jan 27, 2026 |
| Open Issues | 255 | 50 | 58 |
| Stars | 3,425 | 560 | 2,567 |
| Archived | No | No | N/A |

### Maintenance Status: **INACTIVE/ABANDONED**

Key findings from [GitHub Issue #1139](https://github.com/graphql-nexus/nexus/issues/1139):

1. **No new releases in 3+ years** - Last stable release (v1.3.0) was March 2022
2. **No code commits since March 2023** - Only documentation fixes
3. **255 open issues** - Many remain unresolved
4. **Maintainer recommendation**:
   > "If I had a project running on nexus, I would migrate to pothos sooner rather than later."

The nexus-prisma plugin receives dependency updates but no feature development.

### Community Consensus

From [nexus-prisma Discussion #228](https://github.com/graphql-nexus/nexus-prisma/discussions/228):
> "The general conclusion is to use Pothos instead of Nexus from now on."

### NPM Download Trends

According to [npm trends](https://npmtrends.com/@pothos/core-vs-nexus-vs-type-graphql):
- Nexus: ~126,594 weekly downloads
- @pothos/core: ~108,436 weekly downloads (catching up rapidly)
- TypeGraphQL: Similar range

Nexus downloads likely include legacy maintenance rather than new adoptions.

---

## Dependencies Analysis

### lowdb (Currently v7.0.1)

The package uses lowdb for admin settings persistence. The current version (v7.0.1) is modern, but this was likely recently upgraded.

**lowdb v7 Key Changes:**
- Pure ESM module (no CommonJS support)
- Simplified API with `db.update()` for writes
- Renamed presets: `JSONPreset` -> `JSONFilePreset`
- Node 16+ required
- Async/sync class split: `Low` and `LowSync`

**Current Usage Review (`admin.ts`):**
```typescript
import { LowSync } from 'lowdb';
import { JSONFileSync } from 'lowdb/node';

const adapter = new JSONFileSync<AdminSchema>(path);
const defaultData: AdminSchema = { models: [], enums: [] };
const db = new LowSync<AdminSchema>(adapter, defaultData);
db.read();
// ... operations
db.write();
```

This code is **already compatible with lowdb v7** - the implementation uses the correct `LowSync` class and `JSONFileSync` adapter.

**Assessment:** lowdb dependency is NOT a blocker.

### graphql-scalars (v1.22.1)

Well-maintained package from The Guild. No issues expected.

### decimal.js (v10.4.3)

Stable, actively maintained. No issues expected.

### nexus (^1) - **CRITICAL ISSUE**

- Framework is effectively abandoned
- No Prisma 7 support likely
- No bug fixes or security updates expected

---

## DMMF Dependency Problem

### How DMMF is Used

The `@paljs/nexus` package relies on DMMF through `@paljs/plugins`:

```typescript
// @paljs/plugins/src/select.ts
import { DMMF } from '@paljs/types';

// @paljs/types/src/dmmf.ts
export type { DMMF } from '@prisma/generator-helper';
```

The `PrismaSelect` class uses DMMF to:
1. Resolve model names and map GraphQL types to Prisma models
2. Identify field kinds (scalar, object, enum)
3. Navigate nested relations for query optimization

### Prisma 7 DMMF Changes

From [Prisma 7 Upgrade Guide](https://www.prisma.io/docs/orm/more/upgrade-guides/upgrading-versions/upgrading-to-prisma-7):

1. **DMMF no longer exposed on client**
   > Users upgrading from `prisma-client-js` to `prisma-client` have noticed that the `dmmf` property is no longer exposed in the generated client.

2. **New package structure** ([PR #26660](https://github.com/prisma/prisma/pull/26660))
   - New `@prisma/dmmf` package extracted
   - New `@prisma/generator` package
   - `@prisma/generator-helper` remains for backward compatibility

3. **Warning about generator-helper**
   > "The `@prisma/generator-helper` package is intended for Prisma's internal use. Its release cycle does not follow SemVer."

### Impact Assessment

| Component | Impact | Severity |
|-----------|--------|----------|
| `@paljs/types` | Must update DMMF import source | Medium |
| `@paljs/plugins` | PrismaSelect needs DMMF from new location | Medium |
| `@paljs/nexus` | Indirect - depends on plugins | Low (if plugins fixed) |
| User Configuration | May need to pass DMMF differently | High (API change) |

### Current DMMF Configuration

Users currently pass DMMF like this:
```typescript
const plugin = paljs({
  prismaSelectOptions: {
    dmmf: [Prisma.dmmf, Prisma2.dmmf],
  },
});
```

In Prisma 7, `Prisma.dmmf` may not exist on the client. Users would need to:
```typescript
import { getDMMF } from '@prisma/internals';
// or
import { dmmf } from '@prisma/dmmf';
```

---

## Modern Alternatives

### 1. Pothos GraphQL (Recommended)

**Repository:** [github.com/hayes/pothos](https://github.com/hayes/pothos)

**Key Advantages:**
- **Active development** - Commits from January 2026
- **Native Prisma plugin** - `@pothos/plugin-prisma` with type generation
- **Superior type safety** - No code generation or decorators needed
- **N+1 query handling** - Built into Prisma plugin
- **Relay support** - First-class connections and node interfaces
- **Migration path exists** - [Codemod available](https://pothos-graphql.dev/docs/migrations)

**Prisma Integration:**
```typescript
import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';

const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
});

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    email: t.exposeString('email'),
    posts: t.relation('posts'),
  }),
});
```

**Maintainer Quote:**
> "I've been very very impressed with the approach [Pothos] takes to schema construction, type safety, modularity, and plugins."

### 2. TypeGraphQL

**Repository:** [github.com/MichalLytek/type-graphql](https://github.com/MichalLytek/type-graphql)

**Characteristics:**
- Decorator-based, class-centric approach
- `typegraphql-prisma` generator for CRUD resolvers
- Good if team prefers OOP/decorator patterns
- Active maintenance

**Consideration:** Decorator approach may not align well with Prisma's schema-first philosophy.

### 3. SDL-First with graphql-tools

For simpler needs, a raw SDL approach:
```typescript
import { makeExecutableSchema } from '@graphql-tools/schema';
import { PrismaClient } from '@prisma/client';

const typeDefs = `
  type User {
    id: ID!
    email: String!
  }
  type Query {
    users: [User!]!
  }
`;

const resolvers = {
  Query: {
    users: (_, __, { prisma }) => prisma.user.findMany(),
  },
};
```

### Comparison Matrix

| Feature | @paljs/nexus | Pothos | TypeGraphQL | SDL-first |
|---------|-------------|--------|-------------|-----------|
| Active Maintenance | No (Nexus dead) | Yes | Yes | N/A |
| Prisma 7 Support | Unlikely | Yes | Via generator | Manual |
| Type Safety | Good | Excellent | Good | Poor |
| N+1 Handling | Via PrismaSelect | Built-in | Manual | Manual |
| Migration Effort | N/A | Medium | High | High |
| Learning Curve | Low (existing) | Medium | Medium | Low |

---

## Recommendation

### Primary Recommendation: **DEPRECATE**

**Rationale:**

1. **Framework is dead** - Nexus has been abandoned for 3+ years with maintainers recommending migration
2. **Prisma 7 incompatibility** - DMMF changes require work on a dying platform
3. **Maintenance burden** - Continuing to support adds technical debt
4. **Better alternatives exist** - Pothos offers superior functionality with active support
5. **Community consensus** - GraphQL/Prisma community has moved to Pothos

### Deprecation Strategy

1. **Mark as deprecated** in README and package.json
2. **Document migration path** to Pothos with `@pothos/plugin-prisma`
3. **Feature freeze** - Only critical security fixes
4. **Sunset timeline** - 6-12 months of maintenance mode

### What to Preserve

The valuable parts that should be preserved or migrated:

| Component | Recommendation |
|-----------|----------------|
| PrismaSelect logic | Port to standalone package or document Pothos equivalent |
| Admin schema generation | Move to `@paljs/admin` as server-agnostic feature |
| GraphQL scalars | Document standard alternatives (graphql-scalars) |

---

## Upgrade Plan (If Keeping)

**Note:** This plan is provided for completeness but is **not recommended** due to the Nexus framework's abandoned status.

### Phase 1: DMMF Compatibility (Prisma 7)

1. **Update `@paljs/types`:**
   ```typescript
   // Option A: Import from new package
   export type { DMMF } from '@prisma/dmmf';

   // Option B: Keep generator-helper (deprecated)
   export type { DMMF } from '@prisma/generator-helper';
   ```

2. **Update PrismaSelect configuration:**
   ```typescript
   // New pattern for Prisma 7
   import { getDMMF } from '@prisma/internals';

   const dmmf = await getDMMF({ datamodelPath: './prisma/schema.prisma' });

   const plugin = paljs({
     prismaSelectOptions: {
       dmmf: [dmmf],
     },
   });
   ```

3. **Update documentation** for new DMMF sourcing patterns

### Phase 2: Nexus Compatibility

Monitor for any Nexus updates (unlikely). Current nexus ^1 peer dependency may work but:
- No guarantee of GraphQL 17 support
- No guarantee of future Node.js support
- No bug fixes

### Phase 3: Testing

1. Add integration tests with Prisma 7
2. Test DMMF parsing with new structure
3. Verify admin schema continues working

### Phase 4: lowdb (Already Done)

The current code already uses lowdb v7 patterns correctly:
- `LowSync` class
- `JSONFileSync` adapter
- Modern read/write patterns

**No changes needed for lowdb.**

### Estimated Effort

| Task | Effort | Risk |
|------|--------|------|
| DMMF type updates | 2-4 hours | Low |
| PrismaSelect DMMF sourcing | 4-8 hours | Medium |
| Documentation updates | 2-4 hours | Low |
| Integration testing | 8-16 hours | Medium |
| **Total** | **16-32 hours** | **Medium** |

### Risk Assessment

- **High Risk:** Nexus may break with future GraphQL/Node versions
- **Medium Risk:** DMMF changes may have edge cases
- **Ongoing Risk:** Every Prisma release may introduce compatibility issues

---

## Sources

### Nexus Framework Status
- [Is this package still maintained? - GitHub Issue #1139](https://github.com/graphql-nexus/nexus/issues/1139)
- [Nexus GitHub Repository](https://github.com/graphql-nexus/nexus)
- [nexus-prisma Discussion #228](https://github.com/graphql-nexus/nexus-prisma/discussions/228)

### Pothos GraphQL
- [Pothos GraphQL Official Site](https://pothos-graphql.dev/)
- [Pothos GitHub Repository](https://github.com/hayes/pothos)
- [Pothos Prisma Plugin](https://pothos-graphql.dev/docs/plugins/prisma)
- [Pothos Migration Guide](https://pothos-graphql.dev/docs/migrations)

### Prisma 7 Changes
- [Upgrade to Prisma ORM 7](https://www.prisma.io/docs/orm/more/upgrade-guides/upgrading-versions/upgrading-to-prisma-7)
- [DMMF extraction PR #26660](https://github.com/prisma/prisma/pull/26660)
- [Missing DMMF in generated output - Issue #28166](https://github.com/prisma/prisma/issues/28166)

### Framework Comparisons
- [Revisiting GraphQL in 2025 - DEV.to](https://dev.to/tigawanna/revisiting-graphql-in-2025-a-type-safe-stack-with-pothos-and-relay-ka8)
- [Pothos vs TypeGraphQL - LogRocket](https://blog.logrocket.com/pothos-vs-typegraphql-for-typescript-schema-building/)
- [NPM Trends Comparison](https://npmtrends.com/@pothos/core-vs-nexus-vs-type-graphql)

### lowdb
- [lowdb GitHub Repository](https://github.com/typicode/lowdb)
- [lowdb Releases](https://github.com/typicode/lowdb/releases)

### Prisma GraphQL Integration
- [Prisma GraphQL Documentation](https://www.prisma.io/docs/orm/overview/prisma-in-your-stack/graphql)
- [Prisma + GraphQL Overview](https://www.prisma.io/graphql)

---

## Appendix: File Locations

Key files reviewed for this analysis:

| File | Purpose |
|------|---------|
| `/home/dev/projects/prisma-tools/packages/nexus/package.json` | Package configuration |
| `/home/dev/projects/prisma-tools/packages/nexus/README.md` | Documentation |
| `/home/dev/projects/prisma-tools/packages/nexus/src/index.ts` | Main plugin export |
| `/home/dev/projects/prisma-tools/packages/nexus/src/settings.ts` | Configuration types |
| `/home/dev/projects/prisma-tools/packages/nexus/src/admin.ts` | Admin schema + lowdb usage |
| `/home/dev/projects/prisma-tools/packages/nexus/src/defaultScalar.ts` | Scalar aggregation |
| `/home/dev/projects/prisma-tools/packages/nexus/src/scalars/*.ts` | Individual scalar definitions |
| `/home/dev/projects/prisma-tools/packages/plugins/src/select.ts` | PrismaSelect implementation |
| `/home/dev/projects/prisma-tools/packages/types/src/dmmf.ts` | DMMF type exports |
