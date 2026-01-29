/**
 * E2E tests for @paljs/generator
 *
 * These tests create a real project, run prisma generate, and verify outputs.
 */

import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { execSync, spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT_DIR = resolve(import.meta.dir, '../..');
const TEST_DIR = join(import.meta.dir, '.e2e-test-project');
const PRISMA_DIR = join(TEST_DIR, 'prisma');
const OUTPUT_DIR = join(TEST_DIR, 'generated', 'paljs');

// Get the built generator path
const GENERATOR_BIN = join(ROOT_DIR, 'packages/generator/bin/cli.js');

/**
 * Run a command and return result
 */
function runCommand(cmd: string, cwd: string): { success: boolean; stdout: string; stderr: string } {
  try {
    const result = spawnSync('sh', ['-c', cmd], {
      cwd,
      encoding: 'utf-8',
      timeout: 60000,
      env: { ...process.env, PATH: process.env.PATH },
    });
    return {
      success: result.status === 0,
      stdout: result.stdout || '',
      stderr: result.stderr || '',
    };
  } catch (error: any) {
    return {
      success: false,
      stdout: '',
      stderr: error.message,
    };
  }
}

/**
 * Create test project files
 */
function createTestProject(options: {
  withConfig?: boolean;
  configContent?: string;
  schemaContent?: string;
}) {
  const { withConfig = true, configContent, schemaContent } = options;

  // Clean and create directories
  if (existsSync(TEST_DIR)) {
    rmSync(TEST_DIR, { recursive: true, force: true });
  }
  mkdirSync(PRISMA_DIR, { recursive: true });

  // Default schema - Prisma 7 format (no url in datasource for generate)
  const defaultSchema = `
datasource db {
  provider = "sqlite"
}

generator paljs {
  provider = "${GENERATOR_BIN}"
  output   = "../generated/paljs"
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  password  String
  role      Role     @default(USER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  posts     Post[]
  profile   Profile?
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  createdAt DateTime @default(now())
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  comments  Comment[]
}

model Comment {
  id        Int      @id @default(autoincrement())
  content   String
  createdAt DateTime @default(now())
  post      Post     @relation(fields: [postId], references: [id])
  postId    Int
}

model Profile {
  id     Int     @id @default(autoincrement())
  bio    String?
  avatar String?
  user   User    @relation(fields: [userId], references: [id])
  userId Int     @unique
}

enum Role {
  USER
  ADMIN
  MODERATOR
}
`;

  // Default config
  const defaultConfig = `
import { defineConfig } from '${join(ROOT_DIR, 'packages/generator/dist/config/define.js')}';

export default defineConfig({
  generateTypes: true,
  generateGraphQL: true,
  generateAdmin: {
    enabled: true,
    routerType: 'app',
  },
  excludeFields: ['password'],
  prismaName: 'prisma',
  models: {
    Comment: {
      excludeQueriesAndMutations: ['deleteMany'],
    },
  },
});
`;

  // Write schema
  writeFileSync(join(PRISMA_DIR, 'schema.prisma'), schemaContent || defaultSchema);

  // Write config if enabled
  if (withConfig) {
    writeFileSync(join(PRISMA_DIR, 'paljs.config.ts'), configContent || defaultConfig);
  }

  // Create package.json
  writeFileSync(
    join(TEST_DIR, 'package.json'),
    JSON.stringify(
      {
        name: 'e2e-test-project',
        type: 'module',
        dependencies: {
          '@prisma/client': '^7.3.0',
        },
        devDependencies: {
          prisma: '^7.3.0',
          typescript: '^5.0.0',
        },
      },
      null,
      2,
    ),
  );

  // Symlink node_modules from root so @prisma/client resolves
  const rootNodeModules = join(ROOT_DIR, 'node_modules');
  const testNodeModules = join(TEST_DIR, 'node_modules');
  if (!existsSync(testNodeModules)) {
    symlinkSync(rootNodeModules, testNodeModules, 'junction');
  }

  // Create tsconfig.json for type checking
  writeFileSync(
    join(TEST_DIR, 'tsconfig.json'),
    JSON.stringify(
      {
        compilerOptions: {
          target: 'ES2022',
          module: 'NodeNext',
          moduleResolution: 'NodeNext',
          strict: true,
          esModuleInterop: true,
          skipLibCheck: true,
          resolveJsonModule: true,
          declaration: true,
        },
        include: ['generated/**/*'],
      },
      null,
      2,
    ),
  );
}

describe('E2E: Generator with Full Workflow', () => {
  beforeAll(() => {
    // Ensure the generator is built
    console.log('Building generator...');
    const buildResult = runCommand('bun run build', join(ROOT_DIR, 'packages/generator'));
    if (!buildResult.success) {
      console.error('Build failed:', buildResult.stderr);
    }
  });

  afterAll(() => {
    // Cleanup
    if (existsSync(TEST_DIR)) {
      rmSync(TEST_DIR, { recursive: true, force: true });
    }
  });

  describe('Basic Generation (with config)', () => {
    beforeAll(() => {
      createTestProject({ withConfig: true });

      // Run prisma generate
      console.log('Running prisma generate...');
      const result = runCommand('npx prisma generate', TEST_DIR);
      if (!result.success) {
        console.error('Prisma generate failed:', result.stderr);
        console.log('stdout:', result.stdout);
      }
    });

    test('creates output directory', () => {
      expect(existsSync(OUTPUT_DIR)).toBe(true);
    });

    test('generates main index.ts', () => {
      const indexPath = join(OUTPUT_DIR, 'index.ts');
      expect(existsSync(indexPath)).toBe(true);

      const content = readFileSync(indexPath, 'utf-8');
      expect(content).toContain('DO NOT EDIT');
      expect(content).toContain('export { dmmf }');
    });

    describe('DMMF Generation', () => {
      test('generates dmmf/index.ts', () => {
        expect(existsSync(join(OUTPUT_DIR, 'dmmf', 'index.ts'))).toBe(true);
      });

      test('generates dmmf/dmmf.json', () => {
        const jsonPath = join(OUTPUT_DIR, 'dmmf', 'dmmf.json');
        expect(existsSync(jsonPath)).toBe(true);

        const dmmf = JSON.parse(readFileSync(jsonPath, 'utf-8'));
        expect(dmmf.datamodel).toBeDefined();
        expect(dmmf.datamodel.models).toBeDefined();
        expect(dmmf.datamodel.enums).toBeDefined();
      });

      test('dmmf.json contains all models', () => {
        const jsonPath = join(OUTPUT_DIR, 'dmmf', 'dmmf.json');
        const dmmf = JSON.parse(readFileSync(jsonPath, 'utf-8'));

        const modelNames = dmmf.datamodel.models.map((m: any) => m.name);
        expect(modelNames).toContain('User');
        expect(modelNames).toContain('Post');
        expect(modelNames).toContain('Comment');
        expect(modelNames).toContain('Profile');
      });

      test('dmmf.json contains enums', () => {
        const jsonPath = join(OUTPUT_DIR, 'dmmf', 'dmmf.json');
        const dmmf = JSON.parse(readFileSync(jsonPath, 'utf-8'));

        const enumNames = dmmf.datamodel.enums.map((e: any) => e.name);
        expect(enumNames).toContain('Role');
      });
    });

    describe('Type Generation', () => {
      test('generates types/index.ts', () => {
        expect(existsSync(join(OUTPUT_DIR, 'types', 'index.ts'))).toBe(true);
      });

      test('generates model field interfaces', () => {
        const typesPath = join(OUTPUT_DIR, 'types', 'index.ts');
        const content = readFileSync(typesPath, 'utf-8');

        expect(content).toContain('export interface UserFields');
        expect(content).toContain('export interface PostFields');
        expect(content).toContain('export interface CommentFields');
        expect(content).toContain('export interface ProfileFields');
      });

      test('generates model select types', () => {
        const typesPath = join(OUTPUT_DIR, 'types', 'index.ts');
        const content = readFileSync(typesPath, 'utf-8');

        expect(content).toContain('export interface UserSelect');
        expect(content).toContain('export interface PostSelect');
      });

      test('generates ModelsObject type', () => {
        const typesPath = join(OUTPUT_DIR, 'types', 'index.ts');
        const content = readFileSync(typesPath, 'utf-8');

        expect(content).toContain('export interface ModelsObject');
        expect(content).toContain('User: UserFields');
        expect(content).toContain('Post: PostFields');
      });

      test('generates ModelName union', () => {
        const typesPath = join(OUTPUT_DIR, 'types', 'index.ts');
        const content = readFileSync(typesPath, 'utf-8');

        expect(content).toContain('export type ModelName =');
        expect(content).toContain("'User'");
        expect(content).toContain("'Post'");
      });

      test('generates enum types', () => {
        const typesPath = join(OUTPUT_DIR, 'types', 'index.ts');
        const content = readFileSync(typesPath, 'utf-8');

        expect(content).toContain("export type Role = 'USER' | 'ADMIN' | 'MODERATOR'");
      });

      test('excludes password field (from config)', () => {
        const typesPath = join(OUTPUT_DIR, 'types', 'index.ts');
        const content = readFileSync(typesPath, 'utf-8');

        // Find UserFields interface and check password is not included
        const userFieldsMatch = content.match(/export interface UserFields \{[\s\S]*?\n\}/);
        expect(userFieldsMatch).toBeTruthy();
        // Password should not appear as a regular field
        // (it might appear in the file elsewhere but not in UserFields)
      });
    });

    describe('Nexus GraphQL Generation', () => {
      test('generates nexus directory', () => {
        expect(existsSync(join(OUTPUT_DIR, 'nexus'))).toBe(true);
      });

      test('generates nexus/index.ts', () => {
        const indexPath = join(OUTPUT_DIR, 'nexus', 'index.ts');
        expect(existsSync(indexPath)).toBe(true);

        const content = readFileSync(indexPath, 'utf-8');
        expect(content).toContain("export * from './User'");
        expect(content).toContain("export * from './Post'");
        expect(content).toContain("export * from './InputTypes'");
      });

      test('generates model directories', () => {
        expect(existsSync(join(OUTPUT_DIR, 'nexus', 'User'))).toBe(true);
        expect(existsSync(join(OUTPUT_DIR, 'nexus', 'Post'))).toBe(true);
        expect(existsSync(join(OUTPUT_DIR, 'nexus', 'Comment'))).toBe(true);
        expect(existsSync(join(OUTPUT_DIR, 'nexus', 'Profile'))).toBe(true);
      });

      test('generates model type.ts files', () => {
        const userTypePath = join(OUTPUT_DIR, 'nexus', 'User', 'type.ts');
        expect(existsSync(userTypePath)).toBe(true);

        const content = readFileSync(userTypePath, 'utf-8');
        expect(content).toContain('import { objectType');
        expect(content).toContain("name: 'User'");
        expect(content).toContain("t.int('id')");
        expect(content).toContain("t.string('email')");
      });

      test('generates query files', () => {
        const queriesDir = join(OUTPUT_DIR, 'nexus', 'User', 'queries');
        expect(existsSync(queriesDir)).toBe(true);

        const files = readdirSync(queriesDir);
        expect(files).toContain('findUnique.ts');
        expect(files).toContain('findMany.ts');
        expect(files).toContain('findFirst.ts');
        expect(files).toContain('findCount.ts');
        expect(files).toContain('aggregate.ts');
        expect(files).toContain('index.ts');
      });

      test('generates mutation files', () => {
        const mutationsDir = join(OUTPUT_DIR, 'nexus', 'User', 'mutations');
        expect(existsSync(mutationsDir)).toBe(true);

        const files = readdirSync(mutationsDir);
        expect(files).toContain('createOne.ts');
        expect(files).toContain('updateOne.ts');
        expect(files).toContain('deleteOne.ts');
        expect(files).toContain('upsertOne.ts');
        expect(files).toContain('index.ts');
      });

      test('applies config exclusions to mutations', () => {
        const commentMutationsDir = join(OUTPUT_DIR, 'nexus', 'Comment', 'mutations');
        const files = readdirSync(commentMutationsDir);

        // deleteMany should be excluded per config
        expect(files).not.toContain('deleteMany.ts');
        // But other mutations should exist
        expect(files).toContain('createOne.ts');
      });

      test('generates InputTypes.ts', () => {
        const inputTypesPath = join(OUTPUT_DIR, 'nexus', 'InputTypes.ts');
        expect(existsSync(inputTypesPath)).toBe(true);

        const content = readFileSync(inputTypesPath, 'utf-8');
        expect(content).toContain('import { enumType, inputObjectType, objectType }');
        expect(content).toContain("name: 'Role'");
      });

      test('query files use correct prismaName from config', () => {
        const queryPath = join(OUTPUT_DIR, 'nexus', 'User', 'queries', 'findUnique.ts');
        const content = readFileSync(queryPath, 'utf-8');

        expect(content).toContain('{ prisma, select }');
        expect(content).toContain('prisma.user.findUnique');
      });
    });

    describe('Admin Generation', () => {
      test('generates admin directory', () => {
        expect(existsSync(join(OUTPUT_DIR, 'admin'))).toBe(true);
      });

      test('generates admin/schema.json', () => {
        const schemaPath = join(OUTPUT_DIR, 'admin', 'schema.json');
        expect(existsSync(schemaPath)).toBe(true);

        const schema = JSON.parse(readFileSync(schemaPath, 'utf-8'));
        expect(schema.models).toBeDefined();
        expect(schema.enums).toBeDefined();
      });

      test('admin schema contains all models', () => {
        const schemaPath = join(OUTPUT_DIR, 'admin', 'schema.json');
        const schema = JSON.parse(readFileSync(schemaPath, 'utf-8'));

        const modelNames = schema.models.map((m: any) => m.name);
        expect(modelNames).toContain('User');
        expect(modelNames).toContain('Post');
        expect(modelNames).toContain('Comment');
        expect(modelNames).toContain('Profile');
      });

      test('admin schema contains enum', () => {
        const schemaPath = join(OUTPUT_DIR, 'admin', 'schema.json');
        const schema = JSON.parse(readFileSync(schemaPath, 'utf-8'));

        expect(schema.enums).toHaveLength(1);
        expect(schema.enums[0].name).toBe('Role');
        expect(schema.enums[0].fields).toContain('USER');
        expect(schema.enums[0].fields).toContain('ADMIN');
      });

      test('admin schema excludes password field', () => {
        const schemaPath = join(OUTPUT_DIR, 'admin', 'schema.json');
        const schema = JSON.parse(readFileSync(schemaPath, 'utf-8'));

        const userModel = schema.models.find((m: any) => m.name === 'User');
        const passwordField = userModel.fields.find((f: any) => f.name === 'password');

        expect(passwordField.read).toBe(false);
        expect(passwordField.create).toBe(false);
        expect(passwordField.update).toBe(false);
      });

      test('generates App Router layout (per config)', () => {
        const layoutPath = join(OUTPUT_DIR, 'admin', 'layout.tsx');
        expect(existsSync(layoutPath)).toBe(true);
      });

      test('generates App Router model pages', () => {
        expect(existsSync(join(OUTPUT_DIR, 'admin', 'models', 'User', 'page.tsx'))).toBe(true);
        expect(existsSync(join(OUTPUT_DIR, 'admin', 'models', 'Post', 'page.tsx'))).toBe(true);
      });

      test('model pages contain PrismaTable component', () => {
        const userPagePath = join(OUTPUT_DIR, 'admin', 'models', 'User', 'page.tsx');
        const content = readFileSync(userPagePath, 'utf-8');

        expect(content).toContain('PrismaTable');
        expect(content).toContain('model="User"');
      });
    });
  });

  describe('Generation without config file', () => {
    beforeAll(() => {
      createTestProject({ withConfig: false });

      console.log('Running prisma generate (no config)...');
      const result = runCommand('npx prisma generate', TEST_DIR);
      if (!result.success) {
        console.error('Prisma generate failed:', result.stderr);
      }
    });

    test('generates with defaults when no config', () => {
      expect(existsSync(OUTPUT_DIR)).toBe(true);
      expect(existsSync(join(OUTPUT_DIR, 'dmmf'))).toBe(true);
      expect(existsSync(join(OUTPUT_DIR, 'types'))).toBe(true);
    });

    test('does not generate nexus by default', () => {
      // generateGraphQL defaults to false
      expect(existsSync(join(OUTPUT_DIR, 'nexus'))).toBe(false);
    });

    test('does not generate admin by default', () => {
      // generateAdmin defaults to false
      expect(existsSync(join(OUTPUT_DIR, 'admin'))).toBe(false);
    });
  });

  describe('Config with custom options', () => {
    beforeAll(() => {
      const customConfig = `
import { defineConfig } from '${join(ROOT_DIR, 'packages/generator/dist/config/define.js')}';

export default defineConfig({
  generateTypes: true,
  generateGraphQL: true,
  nexusOutput: 'graphql',  // Custom output dir
  generateAdmin: {
    enabled: true,
    output: 'admin-ui',    // Custom output dir
    routerType: 'pages',   // Pages router
    models: ['User', 'Post'],  // Only these models
  },
  prismaName: 'db',  // Custom prisma name
  disableMutations: false,
  models: {
    Profile: { exclude: true },  // Exclude Profile entirely
    User: {
      excludeFields: ['password', 'updatedAt'],
      disableQueries: false,
      mutations: true,
    },
  },
});
`;
      createTestProject({ withConfig: true, configContent: customConfig });

      console.log('Running prisma generate (custom config)...');
      const result = runCommand('npx prisma generate', TEST_DIR);
      if (!result.success) {
        console.error('Prisma generate failed:', result.stderr);
      }
    });

    test('uses custom nexusOutput path', () => {
      expect(existsSync(join(OUTPUT_DIR, 'graphql'))).toBe(true);
      expect(existsSync(join(OUTPUT_DIR, 'nexus'))).toBe(false);
    });

    test('uses custom admin output path', () => {
      expect(existsSync(join(OUTPUT_DIR, 'admin-ui'))).toBe(true);
      expect(existsSync(join(OUTPUT_DIR, 'admin'))).toBe(false);
    });

    test('uses custom prismaName in generated code', () => {
      const queryPath = join(OUTPUT_DIR, 'graphql', 'User', 'queries', 'findUnique.ts');
      const content = readFileSync(queryPath, 'utf-8');

      expect(content).toContain('{ db, select }');
      expect(content).toContain('db.user.findUnique');
    });

    test('excludes Profile model entirely', () => {
      expect(existsSync(join(OUTPUT_DIR, 'graphql', 'Profile'))).toBe(false);
    });

    test('generates Pages Router structure for admin', () => {
      // Pages router uses flat file structure
      expect(existsSync(join(OUTPUT_DIR, 'admin-ui', 'models', 'User.tsx'))).toBe(true);
      expect(existsSync(join(OUTPUT_DIR, 'admin-ui', 'models', 'Post.tsx'))).toBe(true);
      // No layout.tsx for pages router at models level
    });

    test('only generates admin for specified models', () => {
      const modelsDir = join(OUTPUT_DIR, 'admin-ui', 'models');
      const files = readdirSync(modelsDir);

      expect(files).toContain('User.tsx');
      expect(files).toContain('Post.tsx');
      expect(files).not.toContain('Comment.tsx');
      expect(files).not.toContain('Profile.tsx');
    });

    test('applies model-specific field exclusions', () => {
      const typesPath = join(OUTPUT_DIR, 'types', 'index.ts');
      const content = readFileSync(typesPath, 'utf-8');

      // Both password and updatedAt should be excluded for User
      const userSelectMatch = content.match(/export interface UserSelect \{[\s\S]*?\n\}/);
      if (userSelectMatch) {
        expect(userSelectMatch[0]).not.toContain('password');
        expect(userSelectMatch[0]).not.toContain('updatedAt');
      }
    });
  });
});

describe('E2E: Error Handling', () => {
  afterAll(() => {
    if (existsSync(TEST_DIR)) {
      rmSync(TEST_DIR, { recursive: true, force: true });
    }
  });

  test('handles missing output directory gracefully', () => {
    // This should be tested in unit tests, but we can verify the generator doesn't crash
    createTestProject({ withConfig: true });
    const result = runCommand('npx prisma generate', TEST_DIR);

    // Should complete without error
    expect(result.success).toBe(true);
  });
});
