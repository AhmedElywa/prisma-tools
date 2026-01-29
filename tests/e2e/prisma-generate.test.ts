/**
 * E2E tests for the PalJS Prisma Generator
 * Tests the full prisma generate workflow
 */

import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT_DIR = resolve(import.meta.dir, '../..');
const GENERATOR_BIN = join(ROOT_DIR, 'packages/generator/bin/cli.js');
const TEST_DIR = join(import.meta.dir, '.test-project');
const PRISMA_DIR = join(TEST_DIR, 'prisma');
const OUTPUT_DIR = join(TEST_DIR, 'generated', 'paljs');

// Test Prisma schema with paljs generator
const testSchema = `
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

// Test paljs.config.ts
const testConfig = `
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
});
`;

// Package.json for test project
const testPackageJson = `{
  "name": "test-project",
  "type": "module",
  "dependencies": {
    "@paljs/generator": "workspace:*",
    "prisma": "^7.3.0",
    "@prisma/client": "^7.3.0"
  }
}`;

describe('E2E: Prisma Generate Workflow', () => {
  beforeAll(() => {
    // Clean up any previous test run
    if (existsSync(TEST_DIR)) {
      rmSync(TEST_DIR, { recursive: true, force: true });
    }

    // Create test directory structure
    mkdirSync(PRISMA_DIR, { recursive: true });

    // Write test files
    writeFileSync(join(PRISMA_DIR, 'schema.prisma'), testSchema);
    writeFileSync(join(PRISMA_DIR, 'paljs.config.ts'), testConfig);
    writeFileSync(join(TEST_DIR, 'package.json'), testPackageJson);

    // Symlink node_modules from root so deps resolve
    const rootNodeModules = join(ROOT_DIR, 'node_modules');
    const testNodeModules = join(TEST_DIR, 'node_modules');
    if (!existsSync(testNodeModules)) {
      symlinkSync(rootNodeModules, testNodeModules, 'junction');
    }

    // Generate
    try {
      execSync('npx prisma generate', { cwd: TEST_DIR, stdio: 'pipe' });
    } catch (error: any) {
      console.error('Setup error:', error.message);
      if (error.stdout) console.log('stdout:', error.stdout.toString());
      if (error.stderr) console.log('stderr:', error.stderr.toString());
    }
  });

  afterAll(() => {
    // Clean up test directory
    if (existsSync(TEST_DIR)) {
      rmSync(TEST_DIR, { recursive: true, force: true });
    }
  });

  describe('DMMF Output', () => {
    test('generates dmmf/index.ts', () => {
      const dmmfPath = join(OUTPUT_DIR, 'dmmf', 'index.ts');
      expect(existsSync(dmmfPath)).toBe(true);
    });

    test('generates dmmf/dmmf.json', () => {
      const jsonPath = join(OUTPUT_DIR, 'dmmf', 'dmmf.json');
      expect(existsSync(jsonPath)).toBe(true);

      const content = JSON.parse(readFileSync(jsonPath, 'utf-8'));
      expect(content.datamodel).toBeDefined();
      expect(content.datamodel.models).toHaveLength(4); // User, Post, Comment, Profile
    });
  });

  describe('Type Generation', () => {
    test('generates types/index.ts', () => {
      const typesPath = join(OUTPUT_DIR, 'types', 'index.ts');
      expect(existsSync(typesPath)).toBe(true);
    });

    test('generates model types', () => {
      const typesPath = join(OUTPUT_DIR, 'types', 'index.ts');
      const content = readFileSync(typesPath, 'utf-8');

      expect(content).toContain('interface UserFields');
      expect(content).toContain('interface PostFields');
      expect(content).toContain('interface CommentFields');
      expect(content).toContain('interface ProfileFields');
    });

    test('generates ModelName union type', () => {
      const typesPath = join(OUTPUT_DIR, 'types', 'index.ts');
      const content = readFileSync(typesPath, 'utf-8');

      expect(content).toContain("type ModelName = 'User' | 'Post' | 'Comment' | 'Profile'");
    });

    test('excludes password field based on config', () => {
      const typesPath = join(OUTPUT_DIR, 'types', 'index.ts');
      const content = readFileSync(typesPath, 'utf-8');

      // Password should not be in UserFields or UserSelect
      // (the field is excluded globally in config)
      const userFieldsMatch = content.match(/interface UserFields \{[\s\S]*?\}/);
      if (userFieldsMatch) {
        expect(userFieldsMatch[0]).not.toContain('password');
      }
    });
  });

  describe('Nexus GraphQL Generation', () => {
    test('generates nexus directory', () => {
      const nexusDir = join(OUTPUT_DIR, 'nexus');
      expect(existsSync(nexusDir)).toBe(true);
    });

    test('generates model directories', () => {
      expect(existsSync(join(OUTPUT_DIR, 'nexus', 'User'))).toBe(true);
      expect(existsSync(join(OUTPUT_DIR, 'nexus', 'Post'))).toBe(true);
      expect(existsSync(join(OUTPUT_DIR, 'nexus', 'Comment'))).toBe(true);
      expect(existsSync(join(OUTPUT_DIR, 'nexus', 'Profile'))).toBe(true);
    });

    test('generates model type files', () => {
      const userTypePath = join(OUTPUT_DIR, 'nexus', 'User', 'type.ts');
      expect(existsSync(userTypePath)).toBe(true);

      const content = readFileSync(userTypePath, 'utf-8');
      expect(content).toContain('objectType({');
      expect(content).toContain("name: 'User'");
    });

    test('generates query files', () => {
      const queriesDir = join(OUTPUT_DIR, 'nexus', 'User', 'queries');
      expect(existsSync(queriesDir)).toBe(true);
      expect(existsSync(join(queriesDir, 'findUnique.ts'))).toBe(true);
      expect(existsSync(join(queriesDir, 'findMany.ts'))).toBe(true);
      expect(existsSync(join(queriesDir, 'findFirst.ts'))).toBe(true);
    });

    test('generates mutation files', () => {
      const mutationsDir = join(OUTPUT_DIR, 'nexus', 'User', 'mutations');
      expect(existsSync(mutationsDir)).toBe(true);
      expect(existsSync(join(mutationsDir, 'createOne.ts'))).toBe(true);
      expect(existsSync(join(mutationsDir, 'updateOne.ts'))).toBe(true);
      expect(existsSync(join(mutationsDir, 'deleteOne.ts'))).toBe(true);
    });

    test('generates InputTypes.ts', () => {
      const inputTypesPath = join(OUTPUT_DIR, 'nexus', 'InputTypes.ts');
      expect(existsSync(inputTypesPath)).toBe(true);

      const content = readFileSync(inputTypesPath, 'utf-8');
      expect(content).toContain('enumType');
      expect(content).toContain('inputObjectType');
    });

    test('generates index.ts with exports', () => {
      const indexPath = join(OUTPUT_DIR, 'nexus', 'index.ts');
      expect(existsSync(indexPath)).toBe(true);

      const content = readFileSync(indexPath, 'utf-8');
      expect(content).toContain("export * from './User'");
      expect(content).toContain("export * from './Post'");
      expect(content).toContain("export * from './InputTypes'");
    });
  });

  describe('Admin Generation', () => {
    test('generates admin directory', () => {
      const adminDir = join(OUTPUT_DIR, 'admin');
      expect(existsSync(adminDir)).toBe(true);
    });

    test('generates admin schema.json', () => {
      const schemaPath = join(OUTPUT_DIR, 'admin', 'schema.json');
      expect(existsSync(schemaPath)).toBe(true);

      const content = JSON.parse(readFileSync(schemaPath, 'utf-8'));
      expect(content.models).toHaveLength(4);
      expect(content.enums).toHaveLength(1);
      expect(content.enums[0].name).toBe('Role');
    });

    test('generates admin pages for App Router', () => {
      const layoutPath = join(OUTPUT_DIR, 'admin', 'layout.tsx');
      expect(existsSync(layoutPath)).toBe(true);

      const userPagePath = join(OUTPUT_DIR, 'admin', 'models', 'User', 'page.tsx');
      expect(existsSync(userPagePath)).toBe(true);

      const content = readFileSync(userPagePath, 'utf-8');
      expect(content).toContain('PrismaTable');
      expect(content).toContain('model="User"');
    });

    test('admin schema excludes password field', () => {
      const schemaPath = join(OUTPUT_DIR, 'admin', 'schema.json');
      const content = JSON.parse(readFileSync(schemaPath, 'utf-8'));

      const userModel = content.models.find((m: any) => m.name === 'User');
      const passwordField = userModel.fields.find((f: any) => f.name === 'password');

      // Password should have read: false due to global exclusion
      expect(passwordField.read).toBe(false);
      expect(passwordField.create).toBe(false);
      expect(passwordField.update).toBe(false);
    });
  });

  describe('Main Index', () => {
    test('generates index.ts with all exports', () => {
      const indexPath = join(OUTPUT_DIR, 'index.ts');
      expect(existsSync(indexPath)).toBe(true);

      const content = readFileSync(indexPath, 'utf-8');
      expect(content).toContain("export { dmmf } from './dmmf/index.js'");
      expect(content).toContain("export * from './types/index.js'");
      expect(content).toContain("export * from './nexus/index.js'");
    });
  });
});
