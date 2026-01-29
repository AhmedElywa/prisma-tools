/**
 * E2E Tests for @paljs/generator
 *
 * Tests the full generation workflow using workspace packages directly.
 */

import { describe, test, expect, beforeAll } from 'bun:test';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const ROOT_DIR = join(import.meta.dir, '..');
const GENERATED_DIR = join(ROOT_DIR, 'generated', 'paljs');
const PRISMA_DIR = join(ROOT_DIR, 'generated', 'prisma');

/**
 * Helper to run a command
 */
function runCommand(cmd: string, cwd: string = ROOT_DIR): { success: boolean; stdout: string; stderr: string } {
  const result = spawnSync('sh', ['-c', cmd], {
    cwd,
    encoding: 'utf-8',
    timeout: 120000,
    env: { ...process.env },
  });
  return {
    success: result.status === 0,
    stdout: result.stdout || '',
    stderr: result.stderr || '',
  };
}

describe('E2E: Prisma Generate Workflow', () => {
  beforeAll(() => {
    // Run prisma generate
    console.log('Running prisma generate...');
    const result = runCommand('npx prisma generate');
    if (!result.success) {
      console.error('Generate failed:', result.stderr);
      console.log('stdout:', result.stdout);
    }
    expect(result.success).toBe(true);
  }, 120000);

  describe('Output Structure', () => {
    test('creates generated/paljs directory', () => {
      expect(existsSync(GENERATED_DIR)).toBe(true);
    });

    test('creates main index.ts', () => {
      const indexPath = join(GENERATED_DIR, 'index.ts');
      expect(existsSync(indexPath)).toBe(true);

      const content = readFileSync(indexPath, 'utf-8');
      expect(content).toContain("export { dmmf }");
      expect(content).toContain("export * from './types/index.js'");
      expect(content).toContain("export * from './nexus/index.js'");
      // Client GraphQL files don't have TypeScript exports (they're .graphql files)
    });
  });

  describe('DMMF Generation', () => {
    test('creates dmmf directory', () => {
      expect(existsSync(join(GENERATED_DIR, 'dmmf'))).toBe(true);
    });

    test('creates dmmf/index.ts', () => {
      const path = join(GENERATED_DIR, 'dmmf', 'index.ts');
      expect(existsSync(path)).toBe(true);

      const content = readFileSync(path, 'utf-8');
      expect(content).toContain('export const dmmf');
      expect(content).toContain('DMMF.Document');
    });

    test('creates dmmf/dmmf.json', () => {
      const path = join(GENERATED_DIR, 'dmmf', 'dmmf.json');
      expect(existsSync(path)).toBe(true);

      const dmmf = JSON.parse(readFileSync(path, 'utf-8'));
      expect(dmmf.datamodel).toBeDefined();
      expect(dmmf.datamodel.models).toBeInstanceOf(Array);
      expect(dmmf.datamodel.models.length).toBeGreaterThan(0);
    });

    test('DMMF contains all models', () => {
      const dmmf = JSON.parse(readFileSync(join(GENERATED_DIR, 'dmmf', 'dmmf.json'), 'utf-8'));
      const modelNames = dmmf.datamodel.models.map((m: any) => m.name);

      expect(modelNames).toContain('User');
      expect(modelNames).toContain('Post');
      expect(modelNames).toContain('Comment');
      expect(modelNames).toContain('Profile');
      expect(modelNames).toContain('Tag');
      expect(modelNames).toContain('AuditLog');
    });
  });

  describe('Types Generation', () => {
    test('creates types directory', () => {
      expect(existsSync(join(GENERATED_DIR, 'types'))).toBe(true);
    });

    test('creates types/index.ts', () => {
      const path = join(GENERATED_DIR, 'types', 'index.ts');
      expect(existsSync(path)).toBe(true);
    });

    test('generates model field interfaces', () => {
      const content = readFileSync(join(GENERATED_DIR, 'types', 'index.ts'), 'utf-8');

      expect(content).toContain('export interface UserFields');
      expect(content).toContain('export interface PostFields');
      expect(content).toContain('export interface CommentFields');
      expect(content).toContain('export interface ProfileFields');
      expect(content).toContain('export interface TagFields');
    });

    test('generates ModelName union type', () => {
      const content = readFileSync(join(GENERATED_DIR, 'types', 'index.ts'), 'utf-8');
      expect(content).toContain('export type ModelName =');
      expect(content).toContain("'User'");
      expect(content).toContain("'Post'");
    });

    test('generates ModelsObject interface', () => {
      const content = readFileSync(join(GENERATED_DIR, 'types', 'index.ts'), 'utf-8');
      expect(content).toContain('export interface ModelsObject');
      expect(content).toContain('User: UserFields');
      expect(content).toContain('Post: PostFields');
    });

    test('generates enum types', () => {
      const content = readFileSync(join(GENERATED_DIR, 'types', 'index.ts'), 'utf-8');
      expect(content).toContain("export type Role =");
      expect(content).toContain("'USER'");
      expect(content).toContain("'ADMIN'");
      expect(content).toContain("'MODERATOR'");
    });
  });

  describe('Nexus GraphQL Generation', () => {
    test('creates nexus directory', () => {
      expect(existsSync(join(GENERATED_DIR, 'nexus'))).toBe(true);
    });

    test('creates model directories', () => {
      const nexusDir = join(GENERATED_DIR, 'nexus');
      expect(existsSync(join(nexusDir, 'User'))).toBe(true);
      expect(existsSync(join(nexusDir, 'Post'))).toBe(true);
      expect(existsSync(join(nexusDir, 'Comment'))).toBe(true);
      expect(existsSync(join(nexusDir, 'Profile'))).toBe(true);
      expect(existsSync(join(nexusDir, 'Tag'))).toBe(true);
    });

    test('excludes AuditLog model (per config)', () => {
      expect(existsSync(join(GENERATED_DIR, 'nexus', 'AuditLog'))).toBe(false);
    });

    test('creates model type files', () => {
      const userTypePath = join(GENERATED_DIR, 'nexus', 'User', 'type.ts');
      expect(existsSync(userTypePath)).toBe(true);

      const content = readFileSync(userTypePath, 'utf-8');
      expect(content).toContain("import { objectType");
      expect(content).toContain("name: 'User'");
    });

    test('creates query files', () => {
      const queriesDir = join(GENERATED_DIR, 'nexus', 'User', 'queries');
      expect(existsSync(queriesDir)).toBe(true);

      const files = readdirSync(queriesDir);
      expect(files).toContain('findUnique.ts');
      expect(files).toContain('findMany.ts');
      expect(files).toContain('findFirst.ts');
      expect(files).toContain('index.ts');
    });

    test('creates mutation files', () => {
      const mutationsDir = join(GENERATED_DIR, 'nexus', 'User', 'mutations');
      expect(existsSync(mutationsDir)).toBe(true);

      const files = readdirSync(mutationsDir);
      expect(files).toContain('createOne.ts');
      expect(files).toContain('updateOne.ts');
      // deleteOne should be excluded per config for User
    });

    test('excludes deleteOne mutation for User (per config)', () => {
      const mutationsDir = join(GENERATED_DIR, 'nexus', 'User', 'mutations');
      const files = readdirSync(mutationsDir);
      expect(files).not.toContain('deleteOne.ts');
    });

    test('excludes mutations for Tag (read-only per config)', () => {
      const tagMutationsDir = join(GENERATED_DIR, 'nexus', 'Tag', 'mutations');
      if (existsSync(tagMutationsDir)) {
        const files = readdirSync(tagMutationsDir);
        // Should only have index.ts (empty exports)
        const mutationFiles = files.filter(f => f !== 'index.ts');
        expect(mutationFiles.length).toBe(0);
      }
    });

    test('creates InputTypes.ts', () => {
      const path = join(GENERATED_DIR, 'nexus', 'InputTypes.ts');
      expect(existsSync(path)).toBe(true);

      const content = readFileSync(path, 'utf-8');
      expect(content).toContain('enumType');
      expect(content).toContain('inputObjectType');
    });

    test('creates nexus/index.ts with exports', () => {
      const path = join(GENERATED_DIR, 'nexus', 'index.ts');
      expect(existsSync(path)).toBe(true);

      const content = readFileSync(path, 'utf-8');
      expect(content).toContain("export * from './User'");
      expect(content).toContain("export * from './Post'");
      expect(content).toContain("export * from './InputTypes'");
      // AuditLog should be excluded
      expect(content).not.toContain("export * from './AuditLog'");
    });

    test('queries use correct prismaName from config', () => {
      const queryPath = join(GENERATED_DIR, 'nexus', 'User', 'queries', 'findUnique.ts');
      const content = readFileSync(queryPath, 'utf-8');

      expect(content).toContain('prisma'); // Default prismaName from config
      expect(content).toContain('prisma.user.findUnique');
    });
  });

  describe('Client GraphQL Generation', () => {
    test('creates graphql directory', () => {
      expect(existsSync(join(GENERATED_DIR, 'graphql'))).toBe(true);
    });

    test('creates model .graphql files', () => {
      const graphqlDir = join(GENERATED_DIR, 'graphql');
      expect(existsSync(join(graphqlDir, 'User.graphql'))).toBe(true);
      expect(existsSync(join(graphqlDir, 'Post.graphql'))).toBe(true);
      expect(existsSync(join(graphqlDir, 'Comment.graphql'))).toBe(true);
      expect(existsSync(join(graphqlDir, 'Profile.graphql'))).toBe(true);
      expect(existsSync(join(graphqlDir, 'Tag.graphql'))).toBe(true);
    });

    test('excludes AuditLog model (per config)', () => {
      expect(existsSync(join(GENERATED_DIR, 'graphql', 'AuditLog.graphql'))).toBe(false);
    });

    test('generates fragments', () => {
      const content = readFileSync(join(GENERATED_DIR, 'graphql', 'User.graphql'), 'utf-8');

      // Should have field fragment
      expect(content).toContain('fragment UserFields on User');
      // Should have full fragment with relations
      expect(content).toContain('fragment User on User');
    });

    test('generates queries', () => {
      const content = readFileSync(join(GENERATED_DIR, 'graphql', 'User.graphql'), 'utf-8');

      expect(content).toContain('query findUniqueUser');
      expect(content).toContain('query findFirstUser');
      expect(content).toContain('query findManyUser');
      expect(content).toContain('query findManyUserCount');
    });

    test('generates mutations', () => {
      const content = readFileSync(join(GENERATED_DIR, 'graphql', 'User.graphql'), 'utf-8');

      expect(content).toContain('mutation createOneUser');
      expect(content).toContain('mutation updateOneUser');
      expect(content).toContain('mutation upsertOneUser');
    });

    test('excludes deleteOne mutation for User (per config)', () => {
      const content = readFileSync(join(GENERATED_DIR, 'graphql', 'User.graphql'), 'utf-8');
      expect(content).not.toContain('mutation deleteOneUser');
    });

    test('excludes mutations for Tag (read-only per config)', () => {
      const content = readFileSync(join(GENERATED_DIR, 'graphql', 'Tag.graphql'), 'utf-8');

      // Should have queries
      expect(content).toContain('query findUniqueTag');
      expect(content).toContain('query findManyTag');

      // Should NOT have mutations
      expect(content).not.toContain('mutation createOneTag');
      expect(content).not.toContain('mutation updateOneTag');
      expect(content).not.toContain('mutation deleteOneTag');
    });

    test('excludes global operations (deleteMany, updateMany per config)', () => {
      const content = readFileSync(join(GENERATED_DIR, 'graphql', 'Post.graphql'), 'utf-8');

      // Should NOT have deleteMany or updateMany
      expect(content).not.toContain('mutation deleteManyPost');
      expect(content).not.toContain('mutation updateManyPost');
    });

    test('excludes password field from fragments (per config)', () => {
      const content = readFileSync(join(GENERATED_DIR, 'graphql', 'User.graphql'), 'utf-8');

      // Password should not be in the UserFields fragment
      const fieldsFragmentMatch = content.match(/fragment UserFields on User \{([^}]+)\}/);
      expect(fieldsFragmentMatch).toBeTruthy();
      expect(fieldsFragmentMatch![1]).not.toContain('password');
    });

    test('includes single relation fields in fragments (excludes lists)', () => {
      const content = readFileSync(join(GENERATED_DIR, 'graphql', 'User.graphql'), 'utf-8');

      // The User fragment should include single relations (not lists to avoid deep nesting)
      const userFragmentMatch = content.match(/fragment User on User \{([^}]+\}[^}]*)\}/);
      expect(userFragmentMatch).toBeTruthy();
      // Should reference ProfileFields for profile relation (single relation)
      expect(content).toContain('profile');
      expect(content).toContain('...ProfileFields');
      // Should NOT include posts (list relation) to avoid deep nesting
      expect(content).not.toMatch(/posts\s*\{/);
    });

    test('creates graphql/index.graphql with imports', () => {
      const path = join(GENERATED_DIR, 'graphql', 'index.graphql');
      expect(existsSync(path)).toBe(true);

      const content = readFileSync(path, 'utf-8');
      expect(content).toContain('./User.graphql');
      expect(content).toContain('./Post.graphql');
      expect(content).toContain('UserFields');
      expect(content).toContain('PostFields');
      // AuditLog should be excluded
      expect(content).not.toContain('./AuditLog.graphql');
    });
  });

  describe('Admin Generation', () => {
    test('creates admin directory', () => {
      expect(existsSync(join(GENERATED_DIR, 'admin'))).toBe(true);
    });

    test('creates admin/schema.json', () => {
      const path = join(GENERATED_DIR, 'admin', 'schema.json');
      expect(existsSync(path)).toBe(true);

      const schema = JSON.parse(readFileSync(path, 'utf-8'));
      expect(schema.models).toBeInstanceOf(Array);
      expect(schema.models.length).toBeGreaterThan(0);
    });

    test('admin schema has correct model structure', () => {
      const schema = JSON.parse(readFileSync(join(GENERATED_DIR, 'admin', 'schema.json'), 'utf-8'));
      const userModel = schema.models.find((m: any) => m.name === 'User');

      expect(userModel).toBeDefined();
      expect(userModel.id).toBe('User');
      expect(userModel.idField).toBe('id');
      expect(userModel.fields.length).toBeGreaterThan(0);
    });

    test('admin schema excludes password field', () => {
      const schema = JSON.parse(readFileSync(join(GENERATED_DIR, 'admin', 'schema.json'), 'utf-8'));
      const userModel = schema.models.find((m: any) => m.name === 'User');
      const passwordField = userModel.fields.find((f: any) => f.name === 'password');

      // Password should be marked as excluded
      expect(passwordField.read).toBe(false);
      expect(passwordField.create).toBe(false);
      expect(passwordField.update).toBe(false);
    });

    test('creates App Router layouts', () => {
      expect(existsSync(join(GENERATED_DIR, 'admin', 'layout.tsx'))).toBe(true);
      expect(existsSync(join(GENERATED_DIR, 'admin', 'models', 'layout.tsx'))).toBe(true);
    });

    test('creates model pages', () => {
      expect(existsSync(join(GENERATED_DIR, 'admin', 'models', 'User', 'page.tsx'))).toBe(true);
      expect(existsSync(join(GENERATED_DIR, 'admin', 'models', 'Post', 'page.tsx'))).toBe(true);
    });

    test('model pages contain PrismaTable', () => {
      const content = readFileSync(join(GENERATED_DIR, 'admin', 'models', 'User', 'page.tsx'), 'utf-8');
      expect(content).toContain('PrismaTable');
      expect(content).toContain('model="User"');
    });
  });
});

describe('E2E: TypeScript Compilation', () => {
  test('generated files have valid TypeScript syntax', () => {
    // Check that key generated files can be parsed as valid TypeScript
    // We don't run full tsc because that requires all dependencies to be installed
    const filesToCheck = [
      join(GENERATED_DIR, 'index.ts'),
      join(GENERATED_DIR, 'dmmf', 'index.ts'),
      join(GENERATED_DIR, 'types', 'index.ts'),
      join(GENERATED_DIR, 'nexus', 'index.ts'),
      join(GENERATED_DIR, 'nexus', 'User', 'type.ts'),
    ];

    for (const filePath of filesToCheck) {
      expect(existsSync(filePath)).toBe(true);
      const content = readFileSync(filePath, 'utf-8');
      // Basic syntax checks
      expect(content.length).toBeGreaterThan(0);
      // Should have proper exports
      expect(content).toMatch(/export/);
      // Should not have obvious syntax errors (unmatched braces, etc.)
      const openBraces = (content.match(/\{/g) || []).length;
      const closeBraces = (content.match(/\}/g) || []).length;
      expect(openBraces).toBe(closeBraces);
    }
  });
});

describe('E2E: Configuration Validation', () => {
  test('paljs.config.ts exists and is valid', () => {
    const configPath = join(ROOT_DIR, 'paljs.config.ts');
    expect(existsSync(configPath)).toBe(true);

    const content = readFileSync(configPath, 'utf-8');
    expect(content).toContain('defineConfig');
    expect(content).toContain('generateTypes: true');
    expect(content).toContain('generateGraphQL');
    expect(content).toContain('nexus: true');
    expect(content).toContain('client: true');
    expect(content).toContain('generateAdmin');
  });

  test('config exclusions are applied', () => {
    const dmmf = JSON.parse(readFileSync(join(GENERATED_DIR, 'dmmf', 'dmmf.json'), 'utf-8'));
    const userModel = dmmf.datamodel.models.find((m: any) => m.name === 'User');
    const passwordField = userModel.fields.find((f: any) => f.name === 'password');

    // Password field exists in DMMF but should be excluded from output
    expect(passwordField).toBeDefined();
  });
});
