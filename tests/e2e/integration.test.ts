/**
 * Integration tests for @paljs/generator
 *
 * Tests the full generation pipeline using the generator module directly.
 * This avoids the complexity of Prisma CLI while still testing end-to-end functionality.
 */

import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import type { DMMF } from '@prisma/generator-helper';

import { findConfigPath, loadConfig, resolveConfig } from '../../packages/generator/src/config/loader';
import { ensureDir } from '../../packages/generator/src/utils/paths';
import { writeAdmin } from '../../packages/generator/src/writers/admin/index';
// Import generator modules directly
import { writeDmmf } from '../../packages/generator/src/writers/dmmf';
import { writeNexus } from '../../packages/generator/src/writers/nexus/index';
import { writeTypes } from '../../packages/generator/src/writers/types';

const TEST_DIR = join(import.meta.dir, '.integration-test');
const OUTPUT_DIR = join(TEST_DIR, 'generated');

// Comprehensive mock DMMF representing a real Prisma schema
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
          {
            name: 'profile',
            kind: 'object',
            isList: false,
            isRequired: false,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            hasDefaultValue: false,
            type: 'Profile',
            relationName: 'UserProfile',
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
          {
            name: 'comments',
            kind: 'object',
            isList: true,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            hasDefaultValue: false,
            type: 'Comment',
            relationName: 'PostComments',
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
            name: 'post',
            kind: 'object',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            hasDefaultValue: false,
            type: 'Post',
            relationName: 'PostComments',
            relationFromFields: ['postId'],
            relationToFields: ['id'],
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'postId',
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
        name: 'Profile',
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
            name: 'bio',
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
            name: 'avatar',
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
            name: 'user',
            kind: 'object',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            isReadOnly: false,
            hasDefaultValue: false,
            type: 'User',
            relationName: 'UserProfile',
            relationFromFields: ['userId'],
            relationToFields: ['id'],
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'userId',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: true,
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
    ],
    enums: [
      {
        name: 'Role',
        values: [
          { name: 'USER', dbName: null },
          { name: 'ADMIN', dbName: null },
          { name: 'MODERATOR', dbName: null },
        ],
        dbName: null,
      },
    ],
    types: [],
  },
  schema: {
    inputObjectTypes: {
      prisma: [
        {
          name: 'UserWhereInput',
          constraints: { maxNumFields: null, minNumFields: null },
          fields: [
            {
              name: 'id',
              isRequired: false,
              isNullable: false,
              inputTypes: [{ type: 'Int', isList: false, location: 'scalar' }],
            },
            {
              name: 'email',
              isRequired: false,
              isNullable: false,
              inputTypes: [{ type: 'String', isList: false, location: 'scalar' }],
            },
          ],
        },
        {
          name: 'UserWhereUniqueInput',
          constraints: { maxNumFields: null, minNumFields: null },
          fields: [
            {
              name: 'id',
              isRequired: false,
              isNullable: false,
              inputTypes: [{ type: 'Int', isList: false, location: 'scalar' }],
            },
            {
              name: 'email',
              isRequired: false,
              isNullable: false,
              inputTypes: [{ type: 'String', isList: false, location: 'scalar' }],
            },
          ],
        },
        {
          name: 'UserCreateInput',
          constraints: { maxNumFields: null, minNumFields: null },
          fields: [
            {
              name: 'email',
              isRequired: true,
              isNullable: false,
              inputTypes: [{ type: 'String', isList: false, location: 'scalar' }],
            },
            {
              name: 'name',
              isRequired: false,
              isNullable: true,
              inputTypes: [{ type: 'String', isList: false, location: 'scalar' }],
            },
            {
              name: 'password',
              isRequired: true,
              isNullable: false,
              inputTypes: [{ type: 'String', isList: false, location: 'scalar' }],
            },
          ],
        },
        {
          name: 'UserUpdateInput',
          constraints: { maxNumFields: null, minNumFields: null },
          fields: [
            {
              name: 'email',
              isRequired: false,
              isNullable: false,
              inputTypes: [{ type: 'String', isList: false, location: 'scalar' }],
            },
            {
              name: 'name',
              isRequired: false,
              isNullable: true,
              inputTypes: [{ type: 'String', isList: false, location: 'scalar' }],
            },
          ],
        },
        {
          name: 'PostWhereInput',
          constraints: { maxNumFields: null, minNumFields: null },
          fields: [
            {
              name: 'id',
              isRequired: false,
              isNullable: false,
              inputTypes: [{ type: 'Int', isList: false, location: 'scalar' }],
            },
            {
              name: 'title',
              isRequired: false,
              isNullable: false,
              inputTypes: [{ type: 'String', isList: false, location: 'scalar' }],
            },
          ],
        },
      ],
    },
    outputObjectTypes: {
      prisma: [
        {
          name: 'Query',
          fields: [
            {
              name: 'findUniqueUser',
              args: [
                {
                  name: 'where',
                  isRequired: true,
                  isNullable: false,
                  inputTypes: [{ type: 'UserWhereUniqueInput', isList: false, location: 'inputObjectTypes' }],
                },
              ],
              isNullable: true,
              outputType: { type: 'User', isList: false, location: 'outputObjectTypes' },
            },
            {
              name: 'findManyUser',
              args: [
                {
                  name: 'where',
                  isRequired: false,
                  isNullable: false,
                  inputTypes: [{ type: 'UserWhereInput', isList: false, location: 'inputObjectTypes' }],
                },
              ],
              isNullable: false,
              outputType: { type: 'User', isList: true, location: 'outputObjectTypes' },
            },
            {
              name: 'findFirstUser',
              args: [
                {
                  name: 'where',
                  isRequired: false,
                  isNullable: false,
                  inputTypes: [{ type: 'UserWhereInput', isList: false, location: 'inputObjectTypes' }],
                },
              ],
              isNullable: true,
              outputType: { type: 'User', isList: false, location: 'outputObjectTypes' },
            },
            {
              name: 'findUniquePost',
              args: [
                {
                  name: 'where',
                  isRequired: true,
                  isNullable: false,
                  inputTypes: [{ type: 'PostWhereUniqueInput', isList: false, location: 'inputObjectTypes' }],
                },
              ],
              isNullable: true,
              outputType: { type: 'Post', isList: false, location: 'outputObjectTypes' },
            },
            {
              name: 'findManyPost',
              args: [
                {
                  name: 'where',
                  isRequired: false,
                  isNullable: false,
                  inputTypes: [{ type: 'PostWhereInput', isList: false, location: 'inputObjectTypes' }],
                },
              ],
              isNullable: false,
              outputType: { type: 'Post', isList: true, location: 'outputObjectTypes' },
            },
          ],
        },
        {
          name: 'Mutation',
          fields: [
            {
              name: 'createOneUser',
              args: [
                {
                  name: 'data',
                  isRequired: true,
                  isNullable: false,
                  inputTypes: [{ type: 'UserCreateInput', isList: false, location: 'inputObjectTypes' }],
                },
              ],
              isNullable: false,
              outputType: { type: 'User', isList: false, location: 'outputObjectTypes' },
            },
            {
              name: 'updateOneUser',
              args: [
                {
                  name: 'data',
                  isRequired: true,
                  isNullable: false,
                  inputTypes: [{ type: 'UserUpdateInput', isList: false, location: 'inputObjectTypes' }],
                },
                {
                  name: 'where',
                  isRequired: true,
                  isNullable: false,
                  inputTypes: [{ type: 'UserWhereUniqueInput', isList: false, location: 'inputObjectTypes' }],
                },
              ],
              isNullable: false,
              outputType: { type: 'User', isList: false, location: 'outputObjectTypes' },
            },
            {
              name: 'deleteOneUser',
              args: [
                {
                  name: 'where',
                  isRequired: true,
                  isNullable: false,
                  inputTypes: [{ type: 'UserWhereUniqueInput', isList: false, location: 'inputObjectTypes' }],
                },
              ],
              isNullable: true,
              outputType: { type: 'User', isList: false, location: 'outputObjectTypes' },
            },
          ],
        },
        {
          name: 'AggregateUser',
          fields: [
            {
              name: '_count',
              args: [],
              isNullable: true,
              outputType: { type: 'UserCountAggregateOutputType', isList: false, location: 'outputObjectTypes' },
            },
          ],
        },
      ],
      model: [],
    },
    enumTypes: {
      prisma: [{ name: 'SortOrder', values: ['asc', 'desc'] }],
    },
    fieldRefTypes: { prisma: [] },
  },
  mappings: { modelOperations: [], otherOperations: { read: [], write: [] } },
};

describe('Integration: Full Generation Pipeline', () => {
  beforeAll(() => {
    // Clean and create test directory
    if (existsSync(TEST_DIR)) {
      rmSync(TEST_DIR, { recursive: true, force: true });
    }
    mkdirSync(OUTPUT_DIR, { recursive: true });
  });

  afterAll(() => {
    // Cleanup
    if (existsSync(TEST_DIR)) {
      rmSync(TEST_DIR, { recursive: true, force: true });
    }
  });

  describe('Complete Generation with All Features', () => {
    const config = resolveConfig({
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
          excludeQueriesAndMutations: ['deleteMany', 'updateMany'],
        },
      },
    });

    beforeAll(() => {
      // Run all generators
      writeDmmf(OUTPUT_DIR, mockDmmf);
      writeTypes({ outputDir: OUTPUT_DIR, dmmf: mockDmmf, config });
      writeNexus({ outputDir: OUTPUT_DIR, dmmf: mockDmmf, config });
      writeAdmin({ outputDir: OUTPUT_DIR, dmmf: mockDmmf, config });
    });

    describe('DMMF Output', () => {
      test('creates dmmf directory', () => {
        expect(existsSync(join(OUTPUT_DIR, 'dmmf'))).toBe(true);
      });

      test('creates dmmf/index.ts', () => {
        const path = join(OUTPUT_DIR, 'dmmf', 'index.ts');
        expect(existsSync(path)).toBe(true);

        const content = readFileSync(path, 'utf-8');
        expect(content).toContain('export const dmmf');
        expect(content).toContain('DMMF.Document');
      });

      test('creates dmmf/dmmf.json', () => {
        const path = join(OUTPUT_DIR, 'dmmf', 'dmmf.json');
        expect(existsSync(path)).toBe(true);

        const dmmf = JSON.parse(readFileSync(path, 'utf-8'));
        expect(dmmf.datamodel.models).toHaveLength(4);
        expect(dmmf.datamodel.enums).toHaveLength(1);
      });
    });

    describe('Types Output', () => {
      test('creates types directory', () => {
        expect(existsSync(join(OUTPUT_DIR, 'types'))).toBe(true);
      });

      test('creates types/index.ts with model types', () => {
        const path = join(OUTPUT_DIR, 'types', 'index.ts');
        expect(existsSync(path)).toBe(true);

        const content = readFileSync(path, 'utf-8');
        expect(content).toContain('export interface UserFields');
        expect(content).toContain('export interface PostFields');
        expect(content).toContain('export interface CommentFields');
        expect(content).toContain('export interface ProfileFields');
      });

      test('generates ModelName union', () => {
        const content = readFileSync(join(OUTPUT_DIR, 'types', 'index.ts'), 'utf-8');
        expect(content).toContain("export type ModelName = 'User' | 'Post' | 'Comment' | 'Profile'");
      });

      test('generates ModelsObject interface', () => {
        const content = readFileSync(join(OUTPUT_DIR, 'types', 'index.ts'), 'utf-8');
        expect(content).toContain('export interface ModelsObject');
        expect(content).toContain('User: UserFields');
      });

      test('generates enum types', () => {
        const content = readFileSync(join(OUTPUT_DIR, 'types', 'index.ts'), 'utf-8');
        expect(content).toContain("export type Role = 'USER' | 'ADMIN' | 'MODERATOR'");
      });
    });

    describe('Nexus Output', () => {
      test('creates nexus directory', () => {
        expect(existsSync(join(OUTPUT_DIR, 'nexus'))).toBe(true);
      });

      test('creates model directories', () => {
        expect(existsSync(join(OUTPUT_DIR, 'nexus', 'User'))).toBe(true);
        expect(existsSync(join(OUTPUT_DIR, 'nexus', 'Post'))).toBe(true);
        expect(existsSync(join(OUTPUT_DIR, 'nexus', 'Comment'))).toBe(true);
        expect(existsSync(join(OUTPUT_DIR, 'nexus', 'Profile'))).toBe(true);
      });

      test('creates model type files', () => {
        const userTypePath = join(OUTPUT_DIR, 'nexus', 'User', 'type.ts');
        expect(existsSync(userTypePath)).toBe(true);

        const content = readFileSync(userTypePath, 'utf-8');
        expect(content).toContain('import { objectType');
        expect(content).toContain("name: 'User'");
      });

      test('creates query files', () => {
        const queriesDir = join(OUTPUT_DIR, 'nexus', 'User', 'queries');
        expect(existsSync(queriesDir)).toBe(true);

        const files = readdirSync(queriesDir);
        expect(files).toContain('findUnique.ts');
        expect(files).toContain('findMany.ts');
        expect(files).toContain('findFirst.ts');
        expect(files).toContain('index.ts');
      });

      test('creates mutation files', () => {
        const mutationsDir = join(OUTPUT_DIR, 'nexus', 'User', 'mutations');
        expect(existsSync(mutationsDir)).toBe(true);

        const files = readdirSync(mutationsDir);
        expect(files).toContain('createOne.ts');
        expect(files).toContain('updateOne.ts');
        expect(files).toContain('deleteOne.ts');
      });

      test('applies operation exclusions from config', () => {
        const commentMutationsDir = join(OUTPUT_DIR, 'nexus', 'Comment', 'mutations');
        const files = readdirSync(commentMutationsDir);

        // deleteMany and updateMany should be excluded per config
        expect(files).not.toContain('deleteMany.ts');
        expect(files).not.toContain('updateMany.ts');
        // Other mutations should exist
        expect(files).toContain('createOne.ts');
      });

      test('creates InputTypes.ts', () => {
        const path = join(OUTPUT_DIR, 'nexus', 'InputTypes.ts');
        expect(existsSync(path)).toBe(true);

        const content = readFileSync(path, 'utf-8');
        expect(content).toContain('enumType');
        expect(content).toContain('inputObjectType');
      });

      test('creates nexus/index.ts with exports', () => {
        const path = join(OUTPUT_DIR, 'nexus', 'index.ts');
        expect(existsSync(path)).toBe(true);

        const content = readFileSync(path, 'utf-8');
        expect(content).toContain("export * from './User'");
        expect(content).toContain("export * from './Post'");
        expect(content).toContain("export * from './InputTypes'");
      });

      test('queries use correct prismaName', () => {
        const queryPath = join(OUTPUT_DIR, 'nexus', 'User', 'queries', 'findUnique.ts');
        const content = readFileSync(queryPath, 'utf-8');

        expect(content).toContain('{ prisma, select }');
        expect(content).toContain('prisma.user.findUnique');
      });
    });

    describe('Admin Output', () => {
      test('creates admin directory', () => {
        expect(existsSync(join(OUTPUT_DIR, 'admin'))).toBe(true);
      });

      test('creates admin/schema.json', () => {
        const path = join(OUTPUT_DIR, 'admin', 'schema.json');
        expect(existsSync(path)).toBe(true);

        const schema = JSON.parse(readFileSync(path, 'utf-8'));
        expect(schema.models).toHaveLength(4);
        expect(schema.enums).toHaveLength(1);
      });

      test('admin schema has correct model structure', () => {
        const schema = JSON.parse(readFileSync(join(OUTPUT_DIR, 'admin', 'schema.json'), 'utf-8'));
        const userModel = schema.models.find((m: any) => m.name === 'User');

        expect(userModel.id).toBe('User');
        expect(userModel.idField).toBe('id');
        expect(userModel.create).toBe(true);
        expect(userModel.update).toBe(true);
        expect(userModel.delete).toBe(true);
        expect(userModel.fields.length).toBeGreaterThan(0);
      });

      test('admin schema excludes password field', () => {
        const schema = JSON.parse(readFileSync(join(OUTPUT_DIR, 'admin', 'schema.json'), 'utf-8'));
        const userModel = schema.models.find((m: any) => m.name === 'User');
        const passwordField = userModel.fields.find((f: any) => f.name === 'password');

        expect(passwordField.read).toBe(false);
        expect(passwordField.create).toBe(false);
        expect(passwordField.update).toBe(false);
      });

      test('creates App Router layouts', () => {
        expect(existsSync(join(OUTPUT_DIR, 'admin', 'layout.tsx'))).toBe(true);
        expect(existsSync(join(OUTPUT_DIR, 'admin', 'models', 'layout.tsx'))).toBe(true);
      });

      test('creates model pages', () => {
        expect(existsSync(join(OUTPUT_DIR, 'admin', 'models', 'User', 'page.tsx'))).toBe(true);
        expect(existsSync(join(OUTPUT_DIR, 'admin', 'models', 'Post', 'page.tsx'))).toBe(true);
        expect(existsSync(join(OUTPUT_DIR, 'admin', 'models', 'Comment', 'page.tsx'))).toBe(true);
      });

      test('model pages contain PrismaTable', () => {
        const content = readFileSync(join(OUTPUT_DIR, 'admin', 'models', 'User', 'page.tsx'), 'utf-8');
        expect(content).toContain('PrismaTable');
        expect(content).toContain('model="User"');
      });
    });
  });

  describe('Config Loading', () => {
    test('resolveConfig applies defaults', () => {
      const config = resolveConfig({});

      expect(config.generateTypes).toBe(true);
      expect(config.generateGraphQL).toBe(false);
      expect(config.generateAdmin).toBe(false);
      expect(config.prismaName).toBe('prisma');
      expect(config.excludeFields).toEqual([]);
    });

    test('resolveConfig merges custom options', () => {
      const config = resolveConfig({
        generateGraphQL: true,
        excludeFields: ['password', 'hash'],
        models: {
          User: { excludeFields: ['secret'] },
        },
      });

      expect(config.generateGraphQL).toEqual({
        nexus: true,
        nexusOutput: './nexus',
        client: false,
        clientOutput: './graphql',
      });
      expect(config.excludeFields).toEqual(['password', 'hash']);
      expect(config.models.User?.excludeFields).toEqual(['secret']);
    });

    test('resolveConfig normalizes generateAdmin: true', () => {
      const config = resolveConfig({ generateAdmin: true });

      expect(config.generateAdmin).toEqual({
        enabled: true,
        output: './admin',
        routerType: 'app',
      });
    });

    test('findConfigPath returns null when no config', () => {
      const result = findConfigPath(TEST_DIR);
      expect(result).toBeNull();
    });

    test('findConfigPath finds paljs.config.ts', () => {
      const configDir = join(TEST_DIR, 'config-test');
      mkdirSync(configDir, { recursive: true });
      writeFileSync(join(configDir, 'paljs.config.ts'), 'export default {}');

      const result = findConfigPath(configDir);
      expect(result).toBe(join(configDir, 'paljs.config.ts'));

      rmSync(configDir, { recursive: true });
    });
  });

  describe('Custom Configuration Scenarios', () => {
    test('generates with custom nexusOutput', () => {
      const customOutput = join(TEST_DIR, 'custom-nexus-test');
      mkdirSync(customOutput, { recursive: true });

      const config = resolveConfig({
        generateGraphQL: true,
        nexusOutput: 'graphql',
      });

      writeNexus({ outputDir: customOutput, dmmf: mockDmmf, config });

      expect(existsSync(join(customOutput, 'graphql'))).toBe(true);
      expect(existsSync(join(customOutput, 'graphql', 'User'))).toBe(true);

      rmSync(customOutput, { recursive: true });
    });

    test('generates Pages Router admin', () => {
      const pagesOutput = join(TEST_DIR, 'pages-admin-test');
      mkdirSync(pagesOutput, { recursive: true });

      const config = resolveConfig({
        generateAdmin: {
          enabled: true,
          routerType: 'pages',
        },
      });

      writeAdmin({ outputDir: pagesOutput, dmmf: mockDmmf, config });

      // Pages Router uses flat file structure
      expect(existsSync(join(pagesOutput, 'admin', 'models', 'User.tsx'))).toBe(true);
      expect(existsSync(join(pagesOutput, 'admin', 'models', 'Post.tsx'))).toBe(true);

      rmSync(pagesOutput, { recursive: true });
    });

    test('excludes models entirely', () => {
      const excludeOutput = join(TEST_DIR, 'exclude-model-test');
      mkdirSync(excludeOutput, { recursive: true });

      const config = resolveConfig({
        generateGraphQL: true,
        models: {
          Profile: { exclude: true },
        },
      });

      writeNexus({ outputDir: excludeOutput, dmmf: mockDmmf, config });

      expect(existsSync(join(excludeOutput, 'nexus', 'User'))).toBe(true);
      expect(existsSync(join(excludeOutput, 'nexus', 'Profile'))).toBe(false);

      rmSync(excludeOutput, { recursive: true });
    });

    test('disables all mutations', () => {
      const noMutationsOutput = join(TEST_DIR, 'no-mutations-test');
      mkdirSync(noMutationsOutput, { recursive: true });

      const config = resolveConfig({
        generateGraphQL: true,
        disableMutations: true,
      });

      writeNexus({ outputDir: noMutationsOutput, dmmf: mockDmmf, config });

      // Mutations directory should exist but be empty (except index)
      const mutationsDir = join(noMutationsOutput, 'nexus', 'User', 'mutations');
      expect(existsSync(mutationsDir)).toBe(true);
      const files = readdirSync(mutationsDir);
      expect(files).toEqual(['index.ts']); // Only index, no mutation files

      rmSync(noMutationsOutput, { recursive: true });
    });

    test('uses custom prismaName', () => {
      const customPrismaOutput = join(TEST_DIR, 'custom-prisma-test');
      mkdirSync(customPrismaOutput, { recursive: true });

      const config = resolveConfig({
        generateGraphQL: true,
        prismaName: 'db',
      });

      writeNexus({ outputDir: customPrismaOutput, dmmf: mockDmmf, config });

      const queryPath = join(customPrismaOutput, 'nexus', 'User', 'queries', 'findUnique.ts');
      const content = readFileSync(queryPath, 'utf-8');

      expect(content).toContain('{ db, select }');
      expect(content).toContain('db.user.findUnique');

      rmSync(customPrismaOutput, { recursive: true });
    });
  });
});
