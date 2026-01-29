import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import type { DMMF } from '@prisma/generator-helper';
import { createTempDir } from '../../../tests/helpers/temp-dir';
import { resolveConfig } from '../src/config/loader';
import {
  generateAdminPageContent,
  generateAdminSchema,
  writeAdminPages,
  writeAdminSchema,
} from '../src/writers/admin/index';
import { writeAdmin } from '../src/writers/admin/index';

// Mock DMMF document for admin testing
const mockDmmf: DMMF.Document = {
  datamodel: {
    models: [
      {
        name: 'User',
        dbName: null,
        fields: [
          {
            name: 'id',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: true,
            isReadOnly: false,
            hasDefaultValue: true,
            type: 'Int',
            default: { name: 'autoincrement', args: [] },
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'email',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: true,
            isId: false,
            isReadOnly: false,
            hasDefaultValue: false,
            type: 'String',
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'name',
            kind: 'scalar',
            isList: false,
            isRequired: false,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            hasDefaultValue: false,
            type: 'String',
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'password',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            hasDefaultValue: false,
            type: 'String',
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'createdAt',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            hasDefaultValue: true,
            type: 'DateTime',
            default: { name: 'now', args: [] },
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'posts',
            kind: 'object',
            isList: true,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            hasDefaultValue: false,
            type: 'Post',
            relationName: 'UserPosts',
            relationFromFields: [],
            relationToFields: [],
            isGenerated: false,
            isUpdatedAt: false,
          },
        ],
        primaryKey: null,
        uniqueFields: [],
        uniqueIndexes: [],
        isGenerated: false,
      },
      {
        name: 'Post',
        dbName: null,
        fields: [
          {
            name: 'id',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: true,
            isReadOnly: false,
            hasDefaultValue: true,
            type: 'Int',
            default: { name: 'autoincrement', args: [] },
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'title',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            hasDefaultValue: false,
            type: 'String',
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'published',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            hasDefaultValue: true,
            type: 'Boolean',
            default: false,
            isGenerated: false,
            isUpdatedAt: false,
          },
        ],
        primaryKey: null,
        uniqueFields: [],
        uniqueIndexes: [],
        isGenerated: false,
      },
    ],
    enums: [
      {
        name: 'Role',
        values: [
          { name: 'USER', dbName: null },
          { name: 'ADMIN', dbName: null },
        ],
        dbName: null,
      },
    ],
    types: [],
  },
  schema: {
    inputObjectTypes: { prisma: [] },
    outputObjectTypes: { prisma: [], model: [] },
    enumTypes: { prisma: [] },
    fieldRefTypes: { prisma: [] },
  },
  mappings: {
    modelOperations: [],
    otherOperations: { read: [], write: [] },
  },
};

describe('Admin Generator', () => {
  describe('generateAdminSchema', () => {
    test('generates schema with models', () => {
      const config = resolveConfig({ generateAdmin: true });
      const schema = generateAdminSchema(mockDmmf, config);

      expect(schema.models).toHaveLength(2);
      expect(schema.models[0].name).toBe('User');
      expect(schema.models[1].name).toBe('Post');
    });

    test('generates schema with enums', () => {
      const config = resolveConfig({ generateAdmin: true });
      const schema = generateAdminSchema(mockDmmf, config);

      expect(schema.enums).toHaveLength(1);
      expect(schema.enums[0].name).toBe('Role');
      expect(schema.enums[0].fields).toEqual(['USER', 'ADMIN']);
    });

    test('generates model fields with correct properties', () => {
      const config = resolveConfig({ generateAdmin: true });
      const schema = generateAdminSchema(mockDmmf, config);

      const userModel = schema.models.find((m) => m.name === 'User')!;
      expect(userModel.idField).toBe('id');
      expect(userModel.fields).toHaveLength(6);

      // Check id field is read-only
      const idField = userModel.fields.find((f) => f.name === 'id')!;
      expect(idField.read).toBe(true);
      expect(idField.create).toBe(false);
      expect(idField.update).toBe(false);
      expect(idField.isId).toBe(true);

      // Check email field is editable
      const emailField = userModel.fields.find((f) => f.name === 'email')!;
      expect(emailField.read).toBe(true);
      expect(emailField.create).toBe(true);
      expect(emailField.update).toBe(true);
      expect(emailField.filter).toBe(true);
      expect(emailField.sort).toBe(true);
    });

    test('marks relation fields as non-editable', () => {
      const config = resolveConfig({ generateAdmin: true });
      const schema = generateAdminSchema(mockDmmf, config);

      const userModel = schema.models.find((m) => m.name === 'User')!;
      const postsField = userModel.fields.find((f) => f.name === 'posts')!;

      expect(postsField.kind).toBe('object');
      expect(postsField.create).toBe(false);
      expect(postsField.update).toBe(false);
      expect(postsField.filter).toBe(false);
      expect(postsField.sort).toBe(false);
    });

    test('marks createdAt as read-only', () => {
      const config = resolveConfig({ generateAdmin: true });
      const schema = generateAdminSchema(mockDmmf, config);

      const userModel = schema.models.find((m) => m.name === 'User')!;
      const createdAtField = userModel.fields.find((f) => f.name === 'createdAt')!;

      expect(createdAtField.create).toBe(false);
      expect(createdAtField.update).toBe(false);
      expect(createdAtField.read).toBe(true);
    });

    test('generates displayFields', () => {
      const config = resolveConfig({ generateAdmin: true });
      const schema = generateAdminSchema(mockDmmf, config);

      const userModel = schema.models.find((m) => m.name === 'User')!;
      expect(userModel.displayFields).toContain('email');
      expect(userModel.displayFields).toContain('name');
    });
  });

  describe('model exclusion', () => {
    test('excludes models based on config', () => {
      const config = resolveConfig({
        generateAdmin: true,
        models: {
          Post: { exclude: true },
        },
      });
      const schema = generateAdminSchema(mockDmmf, config);

      expect(schema.models).toHaveLength(1);
      expect(schema.models[0].name).toBe('User');
    });

    test('excludes models with admin.hide', () => {
      const config = resolveConfig({
        generateAdmin: true,
        models: {
          Post: { admin: { hide: true } },
        },
      });
      const schema = generateAdminSchema(mockDmmf, config);

      expect(schema.models).toHaveLength(1);
      expect(schema.models[0].name).toBe('User');
    });

    test('filters models if specified in generateAdmin.models', () => {
      const config = resolveConfig({
        generateAdmin: {
          enabled: true,
          models: ['User'],
        },
      });
      const schema = generateAdminSchema(mockDmmf, config);

      expect(schema.models).toHaveLength(1);
      expect(schema.models[0].name).toBe('User');
    });
  });

  describe('field exclusion', () => {
    test('excludes fields globally', () => {
      const config = resolveConfig({
        generateAdmin: true,
        excludeFields: ['password'],
      });
      const schema = generateAdminSchema(mockDmmf, config);

      const userModel = schema.models.find((m) => m.name === 'User')!;
      const passwordField = userModel.fields.find((f) => f.name === 'password')!;

      expect(passwordField.read).toBe(false);
      expect(passwordField.create).toBe(false);
      expect(passwordField.update).toBe(false);
    });

    test('excludes fields per model', () => {
      const config = resolveConfig({
        generateAdmin: true,
        models: {
          User: { excludeFields: ['email'] },
        },
      });
      const schema = generateAdminSchema(mockDmmf, config);

      const userModel = schema.models.find((m) => m.name === 'User')!;
      const emailField = userModel.fields.find((f) => f.name === 'email')!;

      expect(emailField.read).toBe(false);

      // Post should not be affected
      const postModel = schema.models.find((m) => m.name === 'Post')!;
      const titleField = postModel.fields.find((f) => f.name === 'title')!;
      expect(titleField.read).toBe(true);
    });
  });

  describe('mutation permissions', () => {
    test('disables mutations when disableMutations is true', () => {
      const config = resolveConfig({
        generateAdmin: true,
        disableMutations: true,
      });
      const schema = generateAdminSchema(mockDmmf, config);

      const userModel = schema.models.find((m) => m.name === 'User')!;
      expect(userModel.create).toBe(false);
      expect(userModel.update).toBe(false);
      expect(userModel.delete).toBe(false);
    });

    test('disables mutations per model', () => {
      const config = resolveConfig({
        generateAdmin: true,
        models: {
          User: { disableMutations: true },
        },
      });
      const schema = generateAdminSchema(mockDmmf, config);

      const userModel = schema.models.find((m) => m.name === 'User')!;
      expect(userModel.create).toBe(false);
      expect(userModel.update).toBe(false);
      expect(userModel.delete).toBe(false);

      const postModel = schema.models.find((m) => m.name === 'Post')!;
      expect(postModel.create).toBe(true);
      expect(postModel.update).toBe(true);
      expect(postModel.delete).toBe(true);
    });
  });

  describe('writeAdminSchema', () => {
    test('writes schema.json file', () => {
      const tempDir = createTempDir('admin-schema-test');
      const config = resolveConfig({ generateAdmin: true });

      const schemaPath = writeAdminSchema({
        outputDir: tempDir.path,
        dmmf: mockDmmf,
        config,
      });

      expect(existsSync(schemaPath)).toBe(true);
      expect(schemaPath).toContain('schema.json');

      const content = JSON.parse(readFileSync(schemaPath, 'utf-8'));
      expect(content.models).toHaveLength(2);

      tempDir.cleanup();
    });

    test('respects custom output path', () => {
      const tempDir = createTempDir('admin-custom-output');
      const config = resolveConfig({
        generateAdmin: {
          enabled: true,
          output: 'custom-admin',
        },
      });

      const schemaPath = writeAdminSchema({
        outputDir: tempDir.path,
        dmmf: mockDmmf,
        config,
      });

      expect(schemaPath).toContain('custom-admin');
      expect(existsSync(schemaPath)).toBe(true);

      tempDir.cleanup();
    });
  });

  describe('generateAdminPageContent', () => {
    test('generates App Router page content', () => {
      const content = generateAdminPageContent('User', 'app');

      expect(content).toContain('export default function UserPage');
      expect(content).toContain('PrismaTable');
      expect(content).toContain('model="User"');
    });

    test('generates Pages Router page content', () => {
      const content = generateAdminPageContent('User', 'pages');

      expect(content).toContain('const User: React.FC');
      expect(content).toContain('PrismaTable');
      expect(content).toContain('model="User"');
      expect(content).toContain('export default User');
    });
  });

  describe('writeAdminPages', () => {
    test('creates App Router page structure', () => {
      const tempDir = createTempDir('admin-pages-app');
      const config = resolveConfig({
        generateAdmin: {
          enabled: true,
          routerType: 'app',
        },
      });

      const paths = writeAdminPages({
        outputDir: tempDir.path,
        dmmf: mockDmmf,
        config,
      });

      expect(paths.length).toBeGreaterThan(0);

      // Check directory structure
      const adminDir = join(tempDir.path, 'admin');
      expect(existsSync(join(adminDir, 'layout.tsx'))).toBe(true);
      expect(existsSync(join(adminDir, 'models', 'layout.tsx'))).toBe(true);
      expect(existsSync(join(adminDir, 'models', 'User', 'page.tsx'))).toBe(true);
      expect(existsSync(join(adminDir, 'models', 'Post', 'page.tsx'))).toBe(true);

      tempDir.cleanup();
    });

    test('creates Pages Router page structure', () => {
      const tempDir = createTempDir('admin-pages-pages');
      const config = resolveConfig({
        generateAdmin: {
          enabled: true,
          routerType: 'pages',
        },
      });

      const paths = writeAdminPages({
        outputDir: tempDir.path,
        dmmf: mockDmmf,
        config,
      });

      expect(paths.length).toBeGreaterThan(0);

      // Check directory structure
      const modelsDir = join(tempDir.path, 'admin', 'models');
      expect(existsSync(join(modelsDir, 'User.tsx'))).toBe(true);
      expect(existsSync(join(modelsDir, 'Post.tsx'))).toBe(true);

      tempDir.cleanup();
    });

    test('returns empty array when admin not enabled', () => {
      const tempDir = createTempDir('admin-disabled');
      const config = resolveConfig({ generateAdmin: false });

      const paths = writeAdminPages({
        outputDir: tempDir.path,
        dmmf: mockDmmf,
        config,
      });

      expect(paths).toHaveLength(0);

      tempDir.cleanup();
    });
  });

  describe('writeAdmin', () => {
    test('writes both schema and pages', () => {
      const tempDir = createTempDir('admin-full');
      const config = resolveConfig({
        generateAdmin: {
          enabled: true,
          routerType: 'app',
        },
      });

      const paths = writeAdmin({
        outputDir: tempDir.path,
        dmmf: mockDmmf,
        config,
      });

      expect(paths.length).toBeGreaterThan(1);

      // Check schema was written
      const hasSchema = paths.some((p) => p.includes('schema.json'));
      expect(hasSchema).toBe(true);

      // Check pages were written
      const hasPages = paths.some((p) => p.includes('page.tsx'));
      expect(hasPages).toBe(true);

      tempDir.cleanup();
    });
  });
});
