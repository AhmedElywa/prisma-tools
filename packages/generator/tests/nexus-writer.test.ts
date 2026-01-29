import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import type { DMMF } from '@prisma/generator-helper';
import { createTempDir } from '../../../tests/helpers/temp-dir';
import { resolveConfig } from '../src/config/loader';
import { generateNexusContent, writeNexus } from '../src/writers/nexus/index';

// Mock DMMF document with complete schema for Nexus testing
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
                {
                  name: 'orderBy',
                  isRequired: false,
                  isNullable: false,
                  inputTypes: [{ type: 'UserOrderByInput', isList: true, location: 'inputObjectTypes' }],
                },
              ],
              isNullable: false,
              outputType: { type: 'User', isList: true, location: 'outputObjectTypes' },
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
      prisma: [
        {
          name: 'SortOrder',
          values: ['asc', 'desc'],
        },
      ],
    },
    fieldRefTypes: {
      prisma: [],
    },
  },
  mappings: {
    modelOperations: [],
    otherOperations: { read: [], write: [] },
  },
};

describe('Nexus Generator', () => {
  describe('generateNexusContent', () => {
    test('generates model types', () => {
      const config = resolveConfig({ generateGraphQL: true });
      const content = generateNexusContent(mockDmmf, config);

      expect(content.modelTypes.has('User')).toBe(true);
      expect(content.modelTypes.has('Post')).toBe(true);

      const userType = content.modelTypes.get('User')!;
      expect(userType).toContain('objectType({');
      expect(userType).toContain("name: 'User'");
      expect(userType).toContain("t.int('id')");
      expect(userType).toContain("t.string('email')");
    });

    test('generates queries for models', () => {
      const config = resolveConfig({ generateGraphQL: true });
      const content = generateNexusContent(mockDmmf, config);

      expect(content.queries.has('User')).toBe(true);

      const userQueries = content.queries.get('User')!;
      expect(userQueries.has('findUnique')).toBe(true);
      expect(userQueries.has('findMany')).toBe(true);
      expect(userQueries.has('findFirst')).toBe(true);
      expect(userQueries.has('findCount')).toBe(true);
      expect(userQueries.has('aggregate')).toBe(true);
    });

    test('generates mutations for models', () => {
      const config = resolveConfig({ generateGraphQL: true });
      const content = generateNexusContent(mockDmmf, config);

      expect(content.mutations.has('User')).toBe(true);

      const userMutations = content.mutations.get('User')!;
      expect(userMutations.has('createOne')).toBe(true);
      expect(userMutations.has('updateOne')).toBe(true);
      expect(userMutations.has('deleteOne')).toBe(true);
      expect(userMutations.has('upsertOne')).toBe(true);
      expect(userMutations.has('updateMany')).toBe(true);
      expect(userMutations.has('deleteMany')).toBe(true);
    });

    test('generates input types', () => {
      const config = resolveConfig({ generateGraphQL: true });
      const content = generateNexusContent(mockDmmf, config);

      expect(content.inputTypes).toContain('enumType');
      expect(content.inputTypes).toContain('inputObjectType');
      expect(content.inputTypes).toContain("name: 'SortOrder'");
      expect(content.inputTypes).toContain("name: 'UserWhereInput'");
    });
  });

  describe('model exclusion', () => {
    test('excludes models based on config', () => {
      const config = resolveConfig({
        generateGraphQL: true,
        models: {
          Post: { exclude: true },
        },
      });
      const content = generateNexusContent(mockDmmf, config);

      expect(content.modelTypes.has('User')).toBe(true);
      expect(content.modelTypes.has('Post')).toBe(false);
    });

    test('excludes fields from model types', () => {
      const config = resolveConfig({
        generateGraphQL: true,
        excludeFields: ['password'],
      });
      const content = generateNexusContent(mockDmmf, config);

      const userType = content.modelTypes.get('User')!;
      expect(userType).not.toContain("'password'");
      expect(userType).toContain("'email'");
    });
  });

  describe('query/mutation exclusion', () => {
    test('disables queries globally', () => {
      const config = resolveConfig({
        generateGraphQL: true,
        disableQueries: true,
      });
      const content = generateNexusContent(mockDmmf, config);

      const userQueries = content.queries.get('User')!;
      expect(userQueries.size).toBe(0);
    });

    test('disables mutations globally', () => {
      const config = resolveConfig({
        generateGraphQL: true,
        disableMutations: true,
      });
      const content = generateNexusContent(mockDmmf, config);

      const userMutations = content.mutations.get('User')!;
      expect(userMutations.size).toBe(0);
    });

    test('excludes specific operations', () => {
      const config = resolveConfig({
        generateGraphQL: true,
        excludeQueriesAndMutations: ['deleteMany', 'updateMany'],
      });
      const content = generateNexusContent(mockDmmf, config);

      const userMutations = content.mutations.get('User')!;
      expect(userMutations.has('deleteMany')).toBe(false);
      expect(userMutations.has('updateMany')).toBe(false);
      expect(userMutations.has('createOne')).toBe(true);
    });

    test('excludes operations per model', () => {
      const config = resolveConfig({
        generateGraphQL: true,
        models: {
          User: {
            excludeQueriesAndMutations: ['deleteOne'],
          },
        },
      });
      const content = generateNexusContent(mockDmmf, config);

      const userMutations = content.mutations.get('User')!;
      expect(userMutations.has('deleteOne')).toBe(false);
      expect(userMutations.has('createOne')).toBe(true);

      // Post should still have deleteOne
      const postMutations = content.mutations.get('Post')!;
      expect(postMutations.has('deleteOne')).toBe(true);
    });

    test('respects queries: false in model config', () => {
      const config = resolveConfig({
        generateGraphQL: true,
        models: {
          User: { queries: false },
        },
      });
      const content = generateNexusContent(mockDmmf, config);

      const userQueries = content.queries.get('User')!;
      expect(userQueries.size).toBe(0);

      const userMutations = content.mutations.get('User')!;
      expect(userMutations.size).toBeGreaterThan(0);
    });

    test('respects mutations: false in model config', () => {
      const config = resolveConfig({
        generateGraphQL: true,
        models: {
          User: { mutations: false },
        },
      });
      const content = generateNexusContent(mockDmmf, config);

      const userMutations = content.mutations.get('User')!;
      expect(userMutations.size).toBe(0);

      const userQueries = content.queries.get('User')!;
      expect(userQueries.size).toBeGreaterThan(0);
    });
  });

  describe('writeNexus', () => {
    let tempDir: { path: string; cleanup: () => void };

    beforeAll(() => {
      tempDir = createTempDir('nexus-writer-test');
    });

    afterAll(() => {
      tempDir.cleanup();
    });

    test('creates nexus directory structure', () => {
      const config = resolveConfig({ generateGraphQL: true });
      const paths = writeNexus({
        outputDir: tempDir.path,
        dmmf: mockDmmf,
        config,
      });

      expect(paths.length).toBeGreaterThan(0);

      // Check directory structure
      const nexusDir = join(tempDir.path, 'nexus');
      expect(existsSync(nexusDir)).toBe(true);
      expect(existsSync(join(nexusDir, 'User'))).toBe(true);
      expect(existsSync(join(nexusDir, 'Post'))).toBe(true);
      expect(existsSync(join(nexusDir, 'InputTypes.ts'))).toBe(true);
      expect(existsSync(join(nexusDir, 'index.ts'))).toBe(true);
    });

    test('creates model type files', () => {
      const tempDir2 = createTempDir('nexus-model-types');
      const config = resolveConfig({ generateGraphQL: true });

      writeNexus({
        outputDir: tempDir2.path,
        dmmf: mockDmmf,
        config,
      });

      const userTypePath = join(tempDir2.path, 'nexus', 'User', 'type.ts');
      expect(existsSync(userTypePath)).toBe(true);

      const content = readFileSync(userTypePath, 'utf-8');
      expect(content).toContain('import { objectType');
      expect(content).toContain("name: 'User'");

      tempDir2.cleanup();
    });

    test('creates query and mutation directories', () => {
      const tempDir2 = createTempDir('nexus-queries-mutations');
      const config = resolveConfig({ generateGraphQL: true });

      writeNexus({
        outputDir: tempDir2.path,
        dmmf: mockDmmf,
        config,
      });

      const queriesDir = join(tempDir2.path, 'nexus', 'User', 'queries');
      const mutationsDir = join(tempDir2.path, 'nexus', 'User', 'mutations');

      expect(existsSync(queriesDir)).toBe(true);
      expect(existsSync(mutationsDir)).toBe(true);

      // Check for query files
      const queryFiles = readdirSync(queriesDir);
      expect(queryFiles).toContain('findUnique.ts');
      expect(queryFiles).toContain('findMany.ts');
      expect(queryFiles).toContain('index.ts');

      // Check for mutation files
      const mutationFiles = readdirSync(mutationsDir);
      expect(mutationFiles).toContain('createOne.ts');
      expect(mutationFiles).toContain('deleteOne.ts');
      expect(mutationFiles).toContain('index.ts');

      tempDir2.cleanup();
    });

    test('respects custom nexusOutput path', () => {
      const tempDir2 = createTempDir('nexus-custom-output');
      const config = resolveConfig({
        generateGraphQL: true,
        nexusOutput: 'graphql',
      });

      writeNexus({
        outputDir: tempDir2.path,
        dmmf: mockDmmf,
        config,
      });

      const graphqlDir = join(tempDir2.path, 'graphql');
      expect(existsSync(graphqlDir)).toBe(true);
      expect(existsSync(join(graphqlDir, 'User'))).toBe(true);

      tempDir2.cleanup();
    });

    test('uses custom prismaName in templates', () => {
      const tempDir2 = createTempDir('nexus-prisma-name');
      const config = resolveConfig({
        generateGraphQL: true,
        prismaName: 'db',
      });

      writeNexus({
        outputDir: tempDir2.path,
        dmmf: mockDmmf,
        config,
      });

      const queryPath = join(tempDir2.path, 'nexus', 'User', 'queries', 'findUnique.ts');
      const content = readFileSync(queryPath, 'utf-8');
      expect(content).toContain('{ db, select }');
      expect(content).toContain('db.user.findUnique');

      tempDir2.cleanup();
    });
  });

  describe('template content', () => {
    test('findUnique query has correct structure', () => {
      const config = resolveConfig({ generateGraphQL: true });
      const content = generateNexusContent(mockDmmf, config);

      const findUniqueQuery = content.queries.get('User')!.get('findUnique')!;
      expect(findUniqueQuery).toContain("queryField('findUniqueUser'");
      expect(findUniqueQuery).toContain("type: 'User'");
      expect(findUniqueQuery).toContain('prisma.user.findUnique');
    });

    test('createOne mutation has correct structure', () => {
      const config = resolveConfig({ generateGraphQL: true });
      const content = generateNexusContent(mockDmmf, config);

      const createMutation = content.mutations.get('User')!.get('createOne')!;
      expect(createMutation).toContain("mutationField('createOneUser'");
      expect(createMutation).toContain("nonNull('User')");
      expect(createMutation).toContain('prisma.user.create');
    });
  });
});
