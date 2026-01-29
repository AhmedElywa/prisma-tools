import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { DMMF } from '@prisma/generator-helper';
import { createTempDir } from '../../../tests/helpers/temp-dir';
import { resolveConfig } from '../src/config/loader';
import { generateTypes, writeTypes } from '../src/writers/types';

// Mock DMMF document for testing
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

describe('Type Generator', () => {
  describe('generateTypes', () => {
    test('generates DO NOT EDIT header', () => {
      const config = resolveConfig({});
      const content = generateTypes(mockDmmf, config);

      expect(content).toContain('Generated by @paljs/generator - DO NOT EDIT');
    });

    test('generates enum types', () => {
      const config = resolveConfig({});
      const content = generateTypes(mockDmmf, config);

      expect(content).toContain("export type Role = 'USER' | 'ADMIN' | 'MODERATOR';");
    });

    test('generates model field interfaces', () => {
      const config = resolveConfig({});
      const content = generateTypes(mockDmmf, config);

      expect(content).toContain('export interface UserFields {');
      expect(content).toContain('id: number;');
      expect(content).toContain('email: string;');
      expect(content).toContain('name: string | null;'); // nullable field
      expect(content).toContain('role: Role;'); // enum field
      expect(content).toContain('posts: PostFields[];'); // relation list
    });

    test('generates model select types', () => {
      const config = resolveConfig({});
      const content = generateTypes(mockDmmf, config);

      expect(content).toContain('export interface UserSelect {');
      expect(content).toContain('id?: boolean;');
      expect(content).toContain('email?: boolean;');
      expect(content).toContain('posts?: boolean | PostSelectNested;'); // relation
    });

    test('generates nested select types', () => {
      const config = resolveConfig({});
      const content = generateTypes(mockDmmf, config);

      expect(content).toContain('export interface UserSelectNested {');
      expect(content).toContain('select?: UserSelect;');
      expect(content).toContain('where?: Record<string, unknown>;');
      expect(content).toContain('orderBy?: Record<string, unknown>;');
      expect(content).toContain('take?: number;');
      expect(content).toContain('skip?: number;');
    });

    test('generates model include types', () => {
      const config = resolveConfig({});
      const content = generateTypes(mockDmmf, config);

      expect(content).toContain('export interface UserInclude {');
      expect(content).toContain('posts?: boolean | PostSelectNested;');
    });

    test('generates ModelsObject type', () => {
      const config = resolveConfig({});
      const content = generateTypes(mockDmmf, config);

      expect(content).toContain('export interface ModelsObject {');
      expect(content).toContain('User: UserFields;');
      expect(content).toContain('Post: PostFields;');
    });

    test('generates ModelName union type', () => {
      const config = resolveConfig({});
      const content = generateTypes(mockDmmf, config);

      expect(content).toContain("export type ModelName = 'User' | 'Post';");
    });

    test('generates helper types', () => {
      const config = resolveConfig({});
      const content = generateTypes(mockDmmf, config);

      expect(content).toContain('export type SelectObject<M extends ModelName> = ModelsObject[M];');
      expect(content).toContain('export interface PrismaSelectValue<M extends ModelName> {');
    });
  });

  describe('field exclusion', () => {
    test('excludes globally excluded fields', () => {
      const config = resolveConfig({
        excludeFields: ['password'],
      });
      const content = generateTypes(mockDmmf, config);

      // password should not be in UserFields
      expect(content).not.toMatch(/password:\s*string;/);
    });

    test('excludes model-specific excluded fields', () => {
      const config = resolveConfig({
        models: {
          User: { excludeFields: ['name'] },
        },
      });
      const content = generateTypes(mockDmmf, config);

      // name should not be in UserFields
      expect(content).not.toMatch(/name:\s*string \| null;/);
      // but email should still be there
      expect(content).toContain('email: string;');
    });
  });

  describe('writeTypes', () => {
    let tempDir: { path: string; cleanup: () => void };

    beforeAll(() => {
      tempDir = createTempDir('types-writer-test');
    });

    afterAll(() => {
      tempDir.cleanup();
    });

    test('creates types directory and index.ts', () => {
      const config = resolveConfig({});
      const typesPath = writeTypes({
        outputDir: tempDir.path,
        dmmf: mockDmmf,
        config,
      });

      expect(existsSync(typesPath)).toBe(true);
      expect(typesPath).toContain('types/index.ts');
    });

    test('writes valid TypeScript content', () => {
      const tempDir2 = createTempDir('types-ts-content');
      const config = resolveConfig({});

      const typesPath = writeTypes({
        outputDir: tempDir2.path,
        dmmf: mockDmmf,
        config,
      });

      const content = readFileSync(typesPath, 'utf-8');

      // Should have proper TypeScript syntax
      expect(content).toContain('export interface');
      expect(content).toContain('export type');

      // All interfaces should be properly closed
      const openBraces = (content.match(/\{/g) || []).length;
      const closeBraces = (content.match(/\}/g) || []).length;
      expect(openBraces).toBe(closeBraces);

      tempDir2.cleanup();
    });
  });

  describe('scalar type mapping', () => {
    test('maps Prisma types to TypeScript types correctly', () => {
      const dmmfWithAllTypes: DMMF.Document = {
        ...mockDmmf,
        datamodel: {
          ...mockDmmf.datamodel,
          models: [
            {
              name: 'TypeTest',
              dbName: null,
              fields: [
                {
                  name: 'intField',
                  kind: 'scalar',
                  type: 'Int',
                  isList: false,
                  isRequired: true,
                  isUnique: false,
                  isId: false,
                  isReadOnly: false,
                  hasDefaultValue: false,
                  isGenerated: false,
                  isUpdatedAt: false,
                },
                {
                  name: 'floatField',
                  kind: 'scalar',
                  type: 'Float',
                  isList: false,
                  isRequired: true,
                  isUnique: false,
                  isId: false,
                  isReadOnly: false,
                  hasDefaultValue: false,
                  isGenerated: false,
                  isUpdatedAt: false,
                },
                {
                  name: 'stringField',
                  kind: 'scalar',
                  type: 'String',
                  isList: false,
                  isRequired: true,
                  isUnique: false,
                  isId: false,
                  isReadOnly: false,
                  hasDefaultValue: false,
                  isGenerated: false,
                  isUpdatedAt: false,
                },
                {
                  name: 'boolField',
                  kind: 'scalar',
                  type: 'Boolean',
                  isList: false,
                  isRequired: true,
                  isUnique: false,
                  isId: false,
                  isReadOnly: false,
                  hasDefaultValue: false,
                  isGenerated: false,
                  isUpdatedAt: false,
                },
                {
                  name: 'dateField',
                  kind: 'scalar',
                  type: 'DateTime',
                  isList: false,
                  isRequired: true,
                  isUnique: false,
                  isId: false,
                  isReadOnly: false,
                  hasDefaultValue: false,
                  isGenerated: false,
                  isUpdatedAt: false,
                },
                {
                  name: 'jsonField',
                  kind: 'scalar',
                  type: 'Json',
                  isList: false,
                  isRequired: true,
                  isUnique: false,
                  isId: false,
                  isReadOnly: false,
                  hasDefaultValue: false,
                  isGenerated: false,
                  isUpdatedAt: false,
                },
                {
                  name: 'decimalField',
                  kind: 'scalar',
                  type: 'Decimal',
                  isList: false,
                  isRequired: true,
                  isUnique: false,
                  isId: false,
                  isReadOnly: false,
                  hasDefaultValue: false,
                  isGenerated: false,
                  isUpdatedAt: false,
                },
                {
                  name: 'bigIntField',
                  kind: 'scalar',
                  type: 'BigInt',
                  isList: false,
                  isRequired: true,
                  isUnique: false,
                  isId: false,
                  isReadOnly: false,
                  hasDefaultValue: false,
                  isGenerated: false,
                  isUpdatedAt: false,
                },
                {
                  name: 'bytesField',
                  kind: 'scalar',
                  type: 'Bytes',
                  isList: false,
                  isRequired: true,
                  isUnique: false,
                  isId: false,
                  isReadOnly: false,
                  hasDefaultValue: false,
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
          enums: [],
        },
      };

      const config = resolveConfig({});
      const content = generateTypes(dmmfWithAllTypes, config);

      expect(content).toContain('intField: number;');
      expect(content).toContain('floatField: number;');
      expect(content).toContain('stringField: string;');
      expect(content).toContain('boolField: boolean;');
      expect(content).toContain('dateField: Date;');
      expect(content).toContain('jsonField: unknown;');
      expect(content).toContain('decimalField: string;');
      expect(content).toContain('bigIntField: bigint;');
      expect(content).toContain('bytesField: Buffer;');
    });

    test('handles list types correctly', () => {
      const dmmfWithLists: DMMF.Document = {
        ...mockDmmf,
        datamodel: {
          ...mockDmmf.datamodel,
          models: [
            {
              name: 'ListTest',
              dbName: null,
              fields: [
                {
                  name: 'tags',
                  kind: 'scalar',
                  type: 'String',
                  isList: true,
                  isRequired: true,
                  isUnique: false,
                  isId: false,
                  isReadOnly: false,
                  hasDefaultValue: false,
                  isGenerated: false,
                  isUpdatedAt: false,
                },
                {
                  name: 'scores',
                  kind: 'scalar',
                  type: 'Int',
                  isList: true,
                  isRequired: false,
                  isUnique: false,
                  isId: false,
                  isReadOnly: false,
                  hasDefaultValue: false,
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
          enums: [],
        },
      };

      const config = resolveConfig({});
      const content = generateTypes(dmmfWithLists, config);

      expect(content).toContain('tags: string[];');
      expect(content).toContain('scores: number[] | null;');
    });
  });
});
