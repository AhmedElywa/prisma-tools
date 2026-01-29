# PalJS v9 Release Plan

## Current State

- **463 tests pass, 63 fail** (E2E generator tests + a few unit tests)
- **Beta packages partially published**: `@paljs/admin@9.0.0-beta.1` on npm, `@paljs/generator@9.0.0-beta.1` NOT on npm yet
- **Changeset pre-release mode**: active (`beta` tag)
- **Docs site**: fully rewritten for v9 at `../prisma-tools-docs/`, builds successfully
- **Packages at v9 beta**: generator, admin, nexus, plugins
- **Packages still at v8.2.1**: types, utils, schema (schema is legacy-only)

---

## Phase 1: Fix Tests (CRITICAL — Do First)

### 1.1 Fix E2E Generator Tests (57 failures)

Files:
- `packages/generator/tests/generator.test.ts` — E2E full workflow tests
- `examples/generator-test/tests/generate.test.ts` — Prisma generate workflow

These tests run `prisma generate` and check outputs. Likely fail because:
- Prisma CLI not available in test env
- Schema fixture missing or path wrong
- Output expectations don't match actual writer output

**Action:** Run these tests individually, read the actual error messages, fix one by one.

```bash
bun test packages/generator/tests/generator.test.ts
bun test examples/generator-test/tests/generate.test.ts
```

### 1.2 Fix Unit Test Failures (6 failures)

- `packages/generator/tests/admin-writer.test.ts` — "marks relation fields as non-editable" assertion: expects `postsField.create` to be `false`, got `true`. Fix the test expectation or the admin writer.
- `packages/generator/tests/config-comprehensive.test.ts` — "resolveConfig merges custom options" — config resolution logic mismatch.

**Action:** Run each individually, check expected vs actual, fix.

```bash
bun test packages/generator/tests/admin-writer.test.ts
bun test packages/generator/tests/config-comprehensive.test.ts
```

### 1.3 Verify All Pass

```bash
bun run test
# Target: 526 pass, 0 fail
```

---

## Phase 2: Build & Verify All Packages

### 2.1 Build all packages

```bash
bun run build
```

Confirm no TypeScript errors, all packages compile.

### 2.2 Manually verify generator

```bash
cd examples/generator-test
npx prisma generate
# Check: generated/paljs/ has dmmf/, types/, nexus/, graphql/, admin/
ls -la prisma/generated/paljs/
```

### 2.3 Verify admin-test app

```bash
cd examples/admin-test
bun run dev
# Open http://localhost:3800, click through admin pages
# Verify: table loads, sorting works, filtering works, pagination works
```

### 2.4 Run E2E Playwright tests

```bash
cd examples/admin-test
npx playwright test
# Target: 31 pass (all existing tests)
```

---

## Phase 3: Publish Beta to npm

### 3.1 Add changesets for types and utils

These packages are dependencies of v9 packages but haven't been bumped yet.

```bash
bunx changeset
# Select: @paljs/types, @paljs/utils
# Bump type: major
# Summary: "Bump to v9 for Prisma 7 compatibility"
```

### 3.2 Version bump

```bash
bunx changeset version
# This bumps all packages in pre-release mode to 9.0.0-beta.X
```

### 3.3 Review versions

Check that all package.json files have correct `9.0.0-beta.X` versions.

### 3.4 Publish to npm

```bash
bunx changeset publish
```

### 3.5 Verify on npm

```bash
npm view @paljs/generator@beta version
npm view @paljs/nexus@beta version
npm view @paljs/plugins@beta version
npm view @paljs/admin@beta version
npm view @paljs/types@beta version
npm view @paljs/utils@beta version
```

---

## Phase 4: Test in a Fresh Project

### 4.1 Create fresh Next.js app

```bash
npx create-next-app@latest test-paljs-v9 --typescript --app
cd test-paljs-v9
```

### 4.2 Install beta packages

```bash
npm install -D @paljs/generator@beta prisma@latest
npm install @paljs/nexus@beta @paljs/plugins@beta @paljs/admin@beta @prisma/client@latest @apollo/client graphql nexus react-hook-form
```

### 4.3 Set up Prisma schema

Create `prisma/schema.prisma` with a basic model (User, Post) plus the paljs generator block.

### 4.4 Create paljs.config.ts

```typescript
import { defineConfig } from '@paljs/generator/config';

export default defineConfig({
  generateGraphQL: true,
  generateTypes: true,
  generateAdmin: { enabled: true, output: './admin', routerType: 'app' },
});
```

### 4.5 Generate and verify

```bash
npx prisma generate
# Check generated output exists and looks correct
```

### 4.6 Wire up GraphQL + Admin

- Create API route with Apollo Server + Nexus
- Create admin page with PrismaTable
- Verify CRUD works in browser

### 4.7 Document any issues

Note anything that doesn't work — these become bugs to fix before stable release.

---

## Phase 5: Deploy Docs

### 5.1 Final review of docs content

Review all pages in `../prisma-tools-docs/`:
- `/docs/introduction` — v9 quick start
- `/docs/packages-generator` — native generator docs
- `/docs/packages-admin` — React 19 + Tailwind 4
- `/docs/packages-nexus` — Prisma 7 DMMF
- `/docs/packages-plugins` — typed PrismaSelect
- `/docs/packages-cli` — deprecation notice
- `/docs/packages-schema` — legacy notice
- `/docs/upgrade-guide` — v8→v9 migration
- `/docs/configuration` — defineConfig() reference
- `/docs/prisma-7` — Prisma 7 compatibility

### 5.2 Build and deploy

```bash
cd ../prisma-tools-docs
bun run build
# Deploy to hosting (Vercel, GitHub Pages, etc.)
```

### 5.3 Verify deployed site

Check all links work, navigation is correct, code examples render properly.

---

## Phase 6: Announce Beta

### 6.1 Create GitHub release

```bash
gh release create v9.0.0-beta.1 --prerelease --title "PalJS v9.0.0 Beta" --notes "..."
```

### 6.2 Write announcement

Cover:
- What's new (native Prisma generator, typed PrismaSelect, React 19 admin)
- What's removed (CLI, create, SDL, GraphQL Modules)
- Link to upgrade guide
- Link to docs
- How to install beta
- How to report issues

### 6.3 Post in channels

- GitHub Discussions
- Discord (if active)
- Twitter/X

---

## Phase 7: Stable Release

After collecting beta feedback and fixing reported issues:

### 7.1 Exit pre-release mode

```bash
bunx changeset pre exit
```

### 7.2 Final version bump

```bash
bunx changeset version
# All packages go to 9.0.0 stable
```

### 7.3 Final test run

```bash
bun run test
bun run build
```

### 7.4 Publish stable

```bash
bunx changeset publish
```

### 7.5 Create GitHub release

```bash
gh release create v9.0.0 --title "PalJS v9.0.0" --notes "..."
```

### 7.6 Update docs

Remove "beta" references from docs if any.

### 7.7 Deprecate old packages

```bash
npm deprecate @paljs/cli "Removed in v9. Use @paljs/generator with prisma generate instead."
npm deprecate @paljs/create "Removed in v9. Use create-next-app and add PalJS packages manually."
npm deprecate @paljs/display "Removed in v9."
```

---

## Quick Reference: What's Where

| Item | Location |
|---|---|
| Prisma-tools monorepo | `/home/dev/projects/prisma-tools/` |
| Docs site | `/home/dev/projects/prisma-tools-docs/` |
| Migration guide (internal) | `docs/MIGRATION-v9.md` |
| Prisma 7 notes (internal) | `docs/prisma-7-compatibility.md` |
| This release plan | `docs/V9-RELEASE-PLAN.md` |
| Changeset config | `.changeset/pre.json` |
| Generator source | `packages/generator/src/` |
| Generator tests | `packages/generator/tests/` |
| Admin test app | `examples/admin-test/` |
| Generator test app | `examples/generator-test/` |
| E2E Playwright tests | `examples/admin-test/e2e/prisma-table.spec.ts` |

## Known Issues

1. **Turbopack duplicate `graphql` module bug** — All GraphQL mutations fail in admin-test dev server due to Turbopack loading duplicate `graphql` modules. Error: `Cannot use GraphQLNonNull "TagCreateInput!" from another module or realm`. Workaround: use webpack instead of Turbopack, or fix bun's `overrides` (currently uses npm syntax which bun ignores).

2. **E2E Create/Delete tests** — Admin E2E tests for Create and Delete verify UI flow only (not mutation persistence) due to the Turbopack bug above.

3. **`@paljs/utils` depends on `@prisma/internals ^6.11.1`** — This package may need updating if `@prisma/internals` is removed in Prisma 7. Check if any v9 code path actually uses it at runtime.
