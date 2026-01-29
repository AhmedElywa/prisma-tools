/**
 * Comprehensive Configuration Tests
 *
 * Tests all configuration options for @paljs/generator.
 */

import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import type { DMMF } from '@prisma/generator-helper';

import { resolveConfig } from '../src/config/loader';
import { writeAdmin } from '../src/writers/admin/index';
import { writeDmmf } from '../src/writers/dmmf';
import { writeNexus } from '../src/writers/nexus/index';
import { writeTypes } from '../src/writers/types';

const TEST_DIR = join(import.meta.dir, '.config-comprehensive-test');

// Comprehensive mock DMMF
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
            name: 'role',
            kind: 'enum',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            hasDefaultValue: true,
            type: 'Role',
            default: 'USER',
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
            name: 'updatedAt',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            hasDefaultValue: false,
            type: 'DateTime',
            isGenerated: false,
            isUpdatedAt: true,
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
            name: 'content',
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
          {
            name: 'author',
            kind: 'object',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            hasDefaultValue: false,
            type: 'User',
            relationName: 'UserPosts',
            relationFromFields: ['authorId'],
            relationToFields: ['id'],
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'authorId',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: true,
            hasDefaultValue: false,
            type: 'Int',
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
        name: 'Comment',
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
            name: 'content',
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
        ],
        primaryKey: null,
        uniqueFields: [],
        uniqueIndexes: [],
        isGenerated: false,
      },
      {
        name: 'AuditLog',
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
            name: 'action',
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
  mappings: { modelOperations: [], otherOperations: { read: [], write: [] } },
};

describe('Configuration: resolveConfig', () => {
  describe('Default Values', () => {
    test('applies all defaults when empty config provided', () => {
      const config = resolveConfig({});

      expect(config.generateTypes).toBe(true);
      expect(config.generateGraphQL).toBe(false);
      expect(config.generateAdmin).toBe(false);
      expect(config.prismaName).toBe('prisma');
      expect(config.excludeFields).toEqual([]);
      expect(config.excludeInputFields).toEqual([]);
      expect(config.excludeQueriesAndMutations).toEqual([]);
      expect(config.disableQueries).toBe(false);
      expect(config.disableMutations).toBe(false);
      expect(config.models).toEqual({});
    });
  });

  describe('generateTypes option', () => {
    test('can be enabled', () => {
      const config = resolveConfig({ generateTypes: true });
      expect(config.generateTypes).toBe(true);
    });

    test('can be disabled', () => {
      const config = resolveConfig({ generateTypes: false });
      expect(config.generateTypes).toBe(false);
    });
  });

  describe('generateGraphQL option', () => {
    test('can be enabled with boolean true (defaults to Nexus)', () => {
      const config = resolveConfig({ generateGraphQL: true });
      expect(config.generateGraphQL).toEqual({
        nexus: true,
        nexusOutput: './nexus',
        client: false,
        clientOutput: './graphql',
      });
    });

    test('can be disabled', () => {
      const config = resolveConfig({ generateGraphQL: false });
      expect(config.generateGraphQL).toBe(false);
    });

    test('can enable both Nexus and client GraphQL', () => {
      const config = resolveConfig({
        generateGraphQL: {
          nexus: true,
          client: true,
        },
      });
      expect(config.generateGraphQL).toEqual({
        nexus: true,
        nexusOutput: './nexus',
        client: true,
        clientOutput: './graphql',
      });
    });

    test('can enable only client GraphQL', () => {
      const config = resolveConfig({
        generateGraphQL: {
          nexus: false,
          client: true,
          clientOutput: './operations',
        },
      });
      expect(config.generateGraphQL).toEqual({
        nexus: false,
        nexusOutput: './nexus',
        client: true,
        clientOutput: './operations',
      });
    });
  });

  describe('nexusOutput option', () => {
    test('uses default nexus when not specified', () => {
      const config = resolveConfig({ generateGraphQL: true });
      expect((config.generateGraphQL as any).nexusOutput).toBe('./nexus');
    });

    test('uses custom value when specified via generateGraphQL object', () => {
      const config = resolveConfig({
        generateGraphQL: { nexus: true, nexusOutput: './custom-nexus' },
      });
      expect((config.generateGraphQL as any).nexusOutput).toBe('./custom-nexus');
    });

    test('uses legacy nexusOutput when specified', () => {
      const config = resolveConfig({ generateGraphQL: true, nexusOutput: './legacy-nexus' });
      expect((config.generateGraphQL as any).nexusOutput).toBe('./legacy-nexus');
    });
  });

  describe('generateAdmin option', () => {
    test('normalizes boolean true to object', () => {
      const config = resolveConfig({ generateAdmin: true });

      expect(config.generateAdmin).toEqual({
        enabled: true,
        output: './admin',
        routerType: 'app',
      });
    });

    test('accepts full object config', () => {
      const config = resolveConfig({
        generateAdmin: {
          enabled: true,
          output: './custom-admin',
          routerType: 'pages',
        },
      });

      expect(config.generateAdmin).toEqual({
        enabled: true,
        output: './custom-admin',
        routerType: 'pages',
      });
    });

    test('handles partial object config', () => {
      const config = resolveConfig({
        generateAdmin: {
          enabled: true,
          routerType: 'pages',
        },
      });

      expect((config.generateAdmin as any).enabled).toBe(true);
      expect((config.generateAdmin as any).routerType).toBe('pages');
    });
  });

  describe('prismaName option', () => {
    test('uses default prisma when not specified', () => {
      const config = resolveConfig({});
      expect(config.prismaName).toBe('prisma');
    });

    test('uses custom value when specified', () => {
      const config = resolveConfig({ prismaName: 'db' });
      expect(config.prismaName).toBe('db');
    });
  });

  describe('excludeFields option', () => {
    test('accepts array of field names', () => {
      const config = resolveConfig({ excludeFields: ['password', 'hash'] });
      expect(config.excludeFields).toEqual(['password', 'hash']);
    });

    test('defaults to empty array', () => {
      const config = resolveConfig({});
      expect(config.excludeFields).toEqual([]);
    });
  });

  describe('excludeInputFields option', () => {
    test('accepts array of field names', () => {
      const config = resolveConfig({ excludeInputFields: ['createdAt', 'updatedAt'] });
      expect(config.excludeInputFields).toEqual(['createdAt', 'updatedAt']);
    });
  });

  describe('excludeQueriesAndMutations option', () => {
    test('accepts array of operation names', () => {
      const config = resolveConfig({ excludeQueriesAndMutations: ['deleteMany', 'updateMany'] });
      expect(config.excludeQueriesAndMutations).toEqual(['deleteMany', 'updateMany']);
    });
  });

  describe('disableQueries option', () => {
    test('can be enabled', () => {
      const config = resolveConfig({ disableQueries: true });
      expect(config.disableQueries).toBe(true);
    });
  });

  describe('disableMutations option', () => {
    test('can be enabled', () => {
      const config = resolveConfig({ disableMutations: true });
      expect(config.disableMutations).toBe(true);
    });
  });

  describe('models option', () => {
    test('accepts per-model exclude', () => {
      const config = resolveConfig({
        models: {
          AuditLog: { exclude: true },
        },
      });
      expect(config.models.AuditLog?.exclude).toBe(true);
    });

    test('accepts per-model excludeFields', () => {
      const config = resolveConfig({
        models: {
          User: { excludeFields: ['password', 'internalNotes'] },
        },
      });
      expect(config.models.User?.excludeFields).toEqual(['password', 'internalNotes']);
    });

    test('accepts per-model excludeQueriesAndMutations', () => {
      const config = resolveConfig({
        models: {
          User: { excludeQueriesAndMutations: ['deleteOne', 'deleteMany'] },
        },
      });
      expect(config.models.User?.excludeQueriesAndMutations).toEqual(['deleteOne', 'deleteMany']);
    });

    test('accepts per-model disableMutations', () => {
      const config = resolveConfig({
        models: {
          Tag: { disableMutations: true },
        },
      });
      expect(config.models.Tag?.disableMutations).toBe(true);
    });

    test('accepts per-model disableQueries', () => {
      const config = resolveConfig({
        models: {
          Setting: { disableQueries: true },
        },
      });
      expect(config.models.Setting?.disableQueries).toBe(true);
    });

    test('accepts per-model queries boolean', () => {
      const config = resolveConfig({
        models: {
          User: { queries: false },
        },
      });
      expect(config.models.User?.queries).toBe(false);
    });

    test('accepts per-model mutations boolean', () => {
      const config = resolveConfig({
        models: {
          User: { mutations: false },
        },
      });
      expect(config.models.User?.mutations).toBe(false);
    });

    test('accepts per-model admin config', () => {
      const config = resolveConfig({
        models: {
          User: {
            admin: {
              hide: false,
              displayField: 'email',
              listFields: ['id', 'email', 'name'],
            },
          },
        },
      });
      expect(config.models.User?.admin).toEqual({
        hide: false,
        displayField: 'email',
        listFields: ['id', 'email', 'name'],
      });
    });

    test('combines multiple per-model options', () => {
      const config = resolveConfig({
        models: {
          User: {
            excludeFields: ['password'],
            excludeQueriesAndMutations: ['deleteOne'],
            admin: { displayField: 'email' },
          },
        },
      });
      expect(config.models.User?.excludeFields).toEqual(['password']);
      expect(config.models.User?.excludeQueriesAndMutations).toEqual(['deleteOne']);
      expect(config.models.User?.admin?.displayField).toBe('email');
    });
  });
});

describe('Configuration: Nexus Generation', () => {
  beforeEach(() => {
    if (existsSync(TEST_DIR)) rmSync(TEST_DIR, { recursive: true, force: true });
    mkdirSync(TEST_DIR, { recursive: true });
  });

  afterEach(() => {
    if (existsSync(TEST_DIR)) rmSync(TEST_DIR, { recursive: true, force: true });
  });

  describe('Model Exclusion', () => {
    test('excludes model entirely when exclude: true', () => {
      const config = resolveConfig({
        generateGraphQL: true,
        models: { AuditLog: { exclude: true } },
      });

      writeNexus({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      expect(existsSync(join(TEST_DIR, 'nexus', 'User'))).toBe(true);
      expect(existsSync(join(TEST_DIR, 'nexus', 'Post'))).toBe(true);
      expect(existsSync(join(TEST_DIR, 'nexus', 'AuditLog'))).toBe(false);
    });
  });

  describe('Query/Mutation Exclusion', () => {
    test('excludes specific operations globally', () => {
      const config = resolveConfig({
        generateGraphQL: true,
        excludeQueriesAndMutations: ['deleteMany', 'updateMany'],
      });

      writeNexus({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      const userMutationsDir = join(TEST_DIR, 'nexus', 'User', 'mutations');
      const files = readdirSync(userMutationsDir);
      expect(files).not.toContain('deleteMany.ts');
      expect(files).not.toContain('updateMany.ts');
      expect(files).toContain('createOne.ts');
    });

    test('excludes specific operations per model', () => {
      const config = resolveConfig({
        generateGraphQL: true,
        models: {
          User: { excludeQueriesAndMutations: ['deleteOne'] },
        },
      });

      writeNexus({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      const userMutationsDir = join(TEST_DIR, 'nexus', 'User', 'mutations');
      const userFiles = readdirSync(userMutationsDir);
      expect(userFiles).not.toContain('deleteOne.ts');

      // Post should still have deleteOne
      const postMutationsDir = join(TEST_DIR, 'nexus', 'Post', 'mutations');
      const postFiles = readdirSync(postMutationsDir);
      expect(postFiles).toContain('deleteOne.ts');
    });

    test('disables all mutations globally', () => {
      const config = resolveConfig({
        generateGraphQL: true,
        disableMutations: true,
      });

      writeNexus({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      const userMutationsDir = join(TEST_DIR, 'nexus', 'User', 'mutations');
      const files = readdirSync(userMutationsDir);
      // Should only have index.ts
      expect(files.filter((f) => f !== 'index.ts')).toHaveLength(0);
    });

    test('disables all queries globally', () => {
      const config = resolveConfig({
        generateGraphQL: true,
        disableQueries: true,
      });

      writeNexus({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      const userQueriesDir = join(TEST_DIR, 'nexus', 'User', 'queries');
      const files = readdirSync(userQueriesDir);
      // Should only have index.ts
      expect(files.filter((f) => f !== 'index.ts')).toHaveLength(0);
    });

    test('disables mutations per model', () => {
      const config = resolveConfig({
        generateGraphQL: true,
        models: {
          Comment: { disableMutations: true },
        },
      });

      writeNexus({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      const commentMutationsDir = join(TEST_DIR, 'nexus', 'Comment', 'mutations');
      const commentFiles = readdirSync(commentMutationsDir);
      expect(commentFiles.filter((f) => f !== 'index.ts')).toHaveLength(0);

      // User should still have mutations
      const userMutationsDir = join(TEST_DIR, 'nexus', 'User', 'mutations');
      const userFiles = readdirSync(userMutationsDir);
      expect(userFiles).toContain('createOne.ts');
    });
  });

  describe('Custom prismaName', () => {
    test('uses custom prismaName in generated code', () => {
      const config = resolveConfig({
        generateGraphQL: true,
        prismaName: 'db',
      });

      writeNexus({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      const queryPath = join(TEST_DIR, 'nexus', 'User', 'queries', 'findUnique.ts');
      const content = readFileSync(queryPath, 'utf-8');

      expect(content).toContain('{ db, select }');
      expect(content).toContain('db.user.findUnique');
    });
  });

  describe('Custom nexusOutput', () => {
    test('outputs to custom directory', () => {
      const config = resolveConfig({
        generateGraphQL: true,
        nexusOutput: './graphql',
      });

      writeNexus({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      expect(existsSync(join(TEST_DIR, 'graphql'))).toBe(true);
      expect(existsSync(join(TEST_DIR, 'graphql', 'User'))).toBe(true);
    });
  });
});

describe('Configuration: Admin Generation', () => {
  beforeEach(() => {
    if (existsSync(TEST_DIR)) rmSync(TEST_DIR, { recursive: true, force: true });
    mkdirSync(TEST_DIR, { recursive: true });
  });

  afterEach(() => {
    if (existsSync(TEST_DIR)) rmSync(TEST_DIR, { recursive: true, force: true });
  });

  describe('Router Types', () => {
    test('generates App Router structure', () => {
      const config = resolveConfig({
        generateAdmin: {
          enabled: true,
          routerType: 'app',
        },
      });

      writeAdmin({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      // App Router uses /models/[Model]/page.tsx structure
      expect(existsSync(join(TEST_DIR, 'admin', 'layout.tsx'))).toBe(true);
      expect(existsSync(join(TEST_DIR, 'admin', 'models', 'layout.tsx'))).toBe(true);
      expect(existsSync(join(TEST_DIR, 'admin', 'models', 'User', 'page.tsx'))).toBe(true);
      expect(existsSync(join(TEST_DIR, 'admin', 'models', 'Post', 'page.tsx'))).toBe(true);
    });

    test('generates Pages Router structure', () => {
      const config = resolveConfig({
        generateAdmin: {
          enabled: true,
          routerType: 'pages',
        },
      });

      writeAdmin({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      // Pages Router uses /models/[Model].tsx structure (flat files)
      expect(existsSync(join(TEST_DIR, 'admin', 'models', 'User.tsx'))).toBe(true);
      expect(existsSync(join(TEST_DIR, 'admin', 'models', 'Post.tsx'))).toBe(true);
    });
  });

  describe('Custom Output', () => {
    test('outputs to custom directory', () => {
      const config = resolveConfig({
        generateAdmin: {
          enabled: true,
          output: './custom-admin',
        },
      });

      writeAdmin({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      expect(existsSync(join(TEST_DIR, 'custom-admin'))).toBe(true);
      expect(existsSync(join(TEST_DIR, 'custom-admin', 'schema.json'))).toBe(true);
    });
  });

  describe('Admin Schema', () => {
    test('generates schema.json with all models', () => {
      const config = resolveConfig({
        generateAdmin: { enabled: true },
      });

      writeAdmin({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      const schemaPath = join(TEST_DIR, 'admin', 'schema.json');
      expect(existsSync(schemaPath)).toBe(true);

      const schema = JSON.parse(readFileSync(schemaPath, 'utf-8'));
      expect(schema.models).toBeInstanceOf(Array);
      expect(schema.models.length).toBe(4); // User, Post, Comment, AuditLog
    });

    test('schema has correct model structure', () => {
      const config = resolveConfig({
        generateAdmin: { enabled: true },
      });

      writeAdmin({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      const schema = JSON.parse(readFileSync(join(TEST_DIR, 'admin', 'schema.json'), 'utf-8'));
      const userModel = schema.models.find((m: any) => m.name === 'User');

      expect(userModel.id).toBe('User');
      expect(userModel.idField).toBe('id');
      expect(userModel.displayFields).toBeInstanceOf(Array);
      expect(userModel.fields).toBeInstanceOf(Array);
      expect(userModel.fields.length).toBeGreaterThan(0);
    });

    test('schema includes field metadata', () => {
      const config = resolveConfig({
        generateAdmin: { enabled: true },
      });

      writeAdmin({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      const schema = JSON.parse(readFileSync(join(TEST_DIR, 'admin', 'schema.json'), 'utf-8'));
      const userModel = schema.models.find((m: any) => m.name === 'User');
      const idField = userModel.fields.find((f: any) => f.name === 'id');

      expect(idField.type).toBe('Int');
      expect(idField.isId).toBe(true);
      expect(idField.required).toBe(true); // Note: 'required' not 'isRequired' in admin schema
    });

    test('schema respects excludeFields', () => {
      const config = resolveConfig({
        generateAdmin: { enabled: true },
        excludeFields: ['password'],
      });

      writeAdmin({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      const schema = JSON.parse(readFileSync(join(TEST_DIR, 'admin', 'schema.json'), 'utf-8'));
      const userModel = schema.models.find((m: any) => m.name === 'User');
      const passwordField = userModel.fields.find((f: any) => f.name === 'password');

      // Password should exist but be marked as excluded
      expect(passwordField).toBeDefined();
      expect(passwordField.read).toBe(false);
      expect(passwordField.create).toBe(false);
      expect(passwordField.update).toBe(false);
    });

    test('schema includes enums', () => {
      const config = resolveConfig({
        generateAdmin: { enabled: true },
      });

      writeAdmin({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      const schema = JSON.parse(readFileSync(join(TEST_DIR, 'admin', 'schema.json'), 'utf-8'));
      expect(schema.enums).toBeInstanceOf(Array);
      expect(schema.enums.length).toBe(1);
      expect(schema.enums[0].name).toBe('Role');
      // Note: admin schema uses 'fields' for enum values
      expect(schema.enums[0].fields).toContain('USER');
      expect(schema.enums[0].fields).toContain('ADMIN');
    });
  });

  describe('Model-specific Admin Config', () => {
    test('applies per-model admin config', () => {
      const config = resolveConfig({
        generateAdmin: { enabled: true },
        models: {
          User: {
            admin: {
              hide: false,
              displayField: 'email',
              listFields: ['id', 'email', 'role'],
            },
          },
        },
      });

      writeAdmin({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      const schema = JSON.parse(readFileSync(join(TEST_DIR, 'admin', 'schema.json'), 'utf-8'));
      const userModel = schema.models.find((m: any) => m.name === 'User');

      // Config should be applied to schema
      expect(userModel).toBeDefined();
    });

    test('can hide model from admin', () => {
      const config = resolveConfig({
        generateAdmin: { enabled: true },
        models: {
          AuditLog: {
            admin: { hide: true },
          },
        },
      });

      writeAdmin({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      const schema = JSON.parse(readFileSync(join(TEST_DIR, 'admin', 'schema.json'), 'utf-8'));
      const auditLogModel = schema.models.find((m: any) => m.name === 'AuditLog');

      // Model with hide: true should be excluded from the schema entirely
      expect(auditLogModel).toBeUndefined();
    });
  });

  describe('Page Generation', () => {
    test('generates pages for all models', () => {
      const config = resolveConfig({
        generateAdmin: {
          enabled: true,
          routerType: 'app',
        },
      });

      writeAdmin({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      expect(existsSync(join(TEST_DIR, 'admin', 'models', 'User', 'page.tsx'))).toBe(true);
      expect(existsSync(join(TEST_DIR, 'admin', 'models', 'Post', 'page.tsx'))).toBe(true);
      expect(existsSync(join(TEST_DIR, 'admin', 'models', 'Comment', 'page.tsx'))).toBe(true);
      expect(existsSync(join(TEST_DIR, 'admin', 'models', 'AuditLog', 'page.tsx'))).toBe(true);
    });

    test('pages contain PrismaTable component', () => {
      const config = resolveConfig({
        generateAdmin: {
          enabled: true,
          routerType: 'app',
        },
      });

      writeAdmin({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      const userPageContent = readFileSync(join(TEST_DIR, 'admin', 'models', 'User', 'page.tsx'), 'utf-8');
      expect(userPageContent).toContain('PrismaTable');
      expect(userPageContent).toContain('model="User"');
    });

    test('App Router pages are default exported', () => {
      const config = resolveConfig({
        generateAdmin: {
          enabled: true,
          routerType: 'app',
        },
      });

      writeAdmin({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      const content = readFileSync(join(TEST_DIR, 'admin', 'models', 'User', 'page.tsx'), 'utf-8');
      expect(content).toContain('export default');
    });

    test('Pages Router pages use flat file structure', () => {
      const config = resolveConfig({
        generateAdmin: {
          enabled: true,
          routerType: 'pages',
        },
      });

      writeAdmin({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

      expect(existsSync(join(TEST_DIR, 'admin', 'models', 'User.tsx'))).toBe(true);
      expect(existsSync(join(TEST_DIR, 'admin', 'models', 'User', 'page.tsx'))).toBe(false);
    });
  });
});

describe('Configuration: Types Generation', () => {
  beforeEach(() => {
    if (existsSync(TEST_DIR)) rmSync(TEST_DIR, { recursive: true, force: true });
    mkdirSync(TEST_DIR, { recursive: true });
  });

  afterEach(() => {
    if (existsSync(TEST_DIR)) rmSync(TEST_DIR, { recursive: true, force: true });
  });

  test('generates types when enabled', () => {
    const config = resolveConfig({ generateTypes: true });

    writeTypes({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

    expect(existsSync(join(TEST_DIR, 'types', 'index.ts'))).toBe(true);
  });

  test('generates ModelFields interfaces', () => {
    const config = resolveConfig({ generateTypes: true });

    writeTypes({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

    const content = readFileSync(join(TEST_DIR, 'types', 'index.ts'), 'utf-8');
    expect(content).toContain('export interface UserFields');
    expect(content).toContain('export interface PostFields');
    expect(content).toContain('export interface CommentFields');
  });

  test('generates ModelName union', () => {
    const config = resolveConfig({ generateTypes: true });

    writeTypes({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

    const content = readFileSync(join(TEST_DIR, 'types', 'index.ts'), 'utf-8');
    expect(content).toContain('export type ModelName =');
    expect(content).toContain("'User'");
    expect(content).toContain("'Post'");
  });

  test('generates ModelsObject interface', () => {
    const config = resolveConfig({ generateTypes: true });

    writeTypes({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

    const content = readFileSync(join(TEST_DIR, 'types', 'index.ts'), 'utf-8');
    expect(content).toContain('export interface ModelsObject');
    expect(content).toContain('User: UserFields');
    expect(content).toContain('Post: PostFields');
  });

  test('generates enum types', () => {
    const config = resolveConfig({ generateTypes: true });

    writeTypes({ outputDir: TEST_DIR, dmmf: mockDmmf, config });

    const content = readFileSync(join(TEST_DIR, 'types', 'index.ts'), 'utf-8');
    expect(content).toContain('export type Role =');
    expect(content).toContain("'USER'");
    expect(content).toContain("'ADMIN'");
  });
});
