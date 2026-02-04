import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import type { DMMF } from '@prisma/generator-helper';
import { createTempDir } from '../../../tests/helpers/temp-dir';
import { resolveConfig } from '../src/config/loader';
import { writeGraphQL } from '../src/writers/graphql/index';

// Mock DMMF document for GraphQL testing
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
        ],
        primaryKey: null,
        uniqueFields: [],
        uniqueIndexes: [],
        isGenerated: false,
      },
    ],
    enums: [],
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

// Model with no relations for edge case testing
const modelNoRelations: DMMF.Document = {
  datamodel: {
    models: [
      {
        name: 'Tag',
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
            name: 'name',
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
        ],
        primaryKey: null,
        uniqueFields: [],
        uniqueIndexes: [],
        isGenerated: false,
      },
    ],
    enums: [],
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

describe('GraphQL Writer', () => {
  describe('fragment generation', () => {
    let tempDir: { path: string; cleanup: () => void };

    beforeAll(() => {
      tempDir = createTempDir('graphql-writer-fragments');
    });

    afterAll(() => {
      tempDir.cleanup();
    });

    test('generates fragment for scalar fields only', () => {
      const config = resolveConfig({ generateGraphQL: { client: true } });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const content = readFileSync(userPath, 'utf-8');

      // Should have UserFields fragment with scalar fields
      expect(content).toContain('fragment UserFields on User');
      expect(content).toContain('id');
      expect(content).toContain('email');
      expect(content).toContain('name');
      expect(content).toContain('password');

      // UserFields should NOT contain relation fields
      const fieldsFragment = content.match(/fragment UserFields on User \{[\s\S]*?\}/)?.[0] || '';
      expect(fieldsFragment).not.toContain('profile');
      expect(fieldsFragment).not.toContain('posts');
    });

    test('generates model fragment with single relations (excludes lists)', () => {
      const config = resolveConfig({ generateGraphQL: { client: true } });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const content = readFileSync(userPath, 'utf-8');

      // Should have User fragment that includes profile but not posts
      expect(content).toContain('fragment User on User');
      expect(content).toContain('...UserFields');

      // Should include single relation (profile)
      expect(content).toContain('profile {');
      expect(content).toContain('...ProfileFields');

      // Should NOT include list relation (posts)
      const userFragment = content.split('fragment User on User')[1]?.split(/\nquery/)[0] || '';
      expect(userFragment).not.toContain('posts');
    });

    test('handles models with no relations', () => {
      const tempDir2 = createTempDir('graphql-no-relations');
      const config = resolveConfig({ generateGraphQL: { client: true } });
      writeGraphQL({ outputDir: tempDir2.path, dmmf: modelNoRelations, config });

      const tagPath = join(tempDir2.path, 'graphql', 'Tag.graphql');
      const content = readFileSync(tagPath, 'utf-8');

      expect(content).toContain('fragment TagFields on Tag');
      expect(content).toContain('fragment Tag on Tag');
      expect(content).toContain('...TagFields');

      tempDir2.cleanup();
    });

    test('handles models with only list relations', () => {
      const onlyListRelations: DMMF.Document = {
        ...mockDmmf,
        datamodel: {
          ...mockDmmf.datamodel,
          models: [
            {
              name: 'Category',
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
                  name: 'products',
                  kind: 'object',
                  isList: true,
                  isRequired: true,
                  isUnique: false,
                  isId: false,
                  isReadOnly: false,
                  hasDefaultValue: false,
                  type: 'Product',
                  relationName: 'CategoryProducts',
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
          ],
        },
      };

      const tempDir2 = createTempDir('graphql-list-only');
      const config = resolveConfig({ generateGraphQL: { client: true } });
      writeGraphQL({ outputDir: tempDir2.path, dmmf: onlyListRelations, config });

      const categoryPath = join(tempDir2.path, 'graphql', 'Category.graphql');
      const content = readFileSync(categoryPath, 'utf-8');

      // Should have Category fragment without relations
      expect(content).toContain('fragment Category on Category');
      expect(content).not.toContain('products {');

      tempDir2.cleanup();
    });
  });

  describe('field exclusion', () => {
    test('excludes fields per global config', () => {
      const tempDir = createTempDir('graphql-exclude-global');
      const config = resolveConfig({
        generateGraphQL: { client: true },
        excludeFields: ['password'],
      });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const content = readFileSync(userPath, 'utf-8');

      expect(content).toContain('email');
      expect(content).not.toContain('password');

      tempDir.cleanup();
    });

    test('excludes fields per model config', () => {
      const tempDir = createTempDir('graphql-exclude-model');
      const config = resolveConfig({
        generateGraphQL: { client: true },
        models: {
          User: { excludeFields: ['name', 'password'] },
        },
      });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const content = readFileSync(userPath, 'utf-8');

      expect(content).toContain('email');
      expect(content).not.toContain('  name');
      expect(content).not.toContain('password');

      // Post should still have its fields
      const postPath = join(tempDir.path, 'graphql', 'Post.graphql');
      const postContent = readFileSync(postPath, 'utf-8');
      expect(postContent).toContain('title');

      tempDir.cleanup();
    });

    test('combines global and model field exclusions', () => {
      const tempDir = createTempDir('graphql-exclude-combined');
      const config = resolveConfig({
        generateGraphQL: { client: true },
        excludeFields: ['password'],
        models: {
          User: { excludeFields: ['name'] },
        },
      });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const content = readFileSync(userPath, 'utf-8');

      expect(content).toContain('email');
      expect(content).not.toContain('  name');
      expect(content).not.toContain('password');

      tempDir.cleanup();
    });
  });

  describe('query generation', () => {
    test('generates findUnique query', () => {
      const tempDir = createTempDir('graphql-findunique');
      const config = resolveConfig({ generateGraphQL: { client: true } });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const content = readFileSync(userPath, 'utf-8');

      expect(content).toContain('query findUniqueUser($where: UserWhereUniqueInput!)');
      expect(content).toContain('findUniqueUser(where: $where)');
      expect(content).toContain('...User');

      tempDir.cleanup();
    });

    test('generates findFirst query with all args', () => {
      const tempDir = createTempDir('graphql-findfirst');
      const config = resolveConfig({ generateGraphQL: { client: true } });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const content = readFileSync(userPath, 'utf-8');

      expect(content).toContain('query findFirstUser(');
      expect(content).toContain('$where: UserWhereInput');
      expect(content).toContain('$orderBy: [UserOrderByWithRelationInput!]');
      expect(content).toContain('$cursor: UserWhereUniqueInput');
      expect(content).toContain('$take: Int');
      expect(content).toContain('$skip: Int');
      expect(content).toContain('$distinct: [UserScalarFieldEnum!]');

      tempDir.cleanup();
    });

    test('generates findMany query with pagination', () => {
      const tempDir = createTempDir('graphql-findmany');
      const config = resolveConfig({ generateGraphQL: { client: true } });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const content = readFileSync(userPath, 'utf-8');

      expect(content).toContain('query findManyUser(');
      expect(content).toContain('findManyUser(');
      expect(content).toContain('where: $where');
      expect(content).toContain('orderBy: $orderBy');
      expect(content).toContain('cursor: $cursor');
      expect(content).toContain('take: $take');
      expect(content).toContain('skip: $skip');

      tempDir.cleanup();
    });

    test('generates findCount query', () => {
      const tempDir = createTempDir('graphql-findcount');
      const config = resolveConfig({ generateGraphQL: { client: true } });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const content = readFileSync(userPath, 'utf-8');

      // findCount query uses PascalCase model name
      expect(content).toContain('query findCountUser(');
      expect(content).toContain('findCountUser(');

      // Extract just the findCount query to verify it doesn't have cursor/distinct
      const findCountMatch = content.match(/query findCountUser\([^)]*\)/s);
      expect(findCountMatch).toBeTruthy();
      const findCountDef = findCountMatch![0];
      // Verify cursor and distinct are not included (fixed in #238/#237)
      expect(findCountDef).not.toContain('$cursor');
      expect(findCountDef).not.toContain('$distinct');

      tempDir.cleanup();
    });

    test('generates aggregate query', () => {
      const tempDir = createTempDir('graphql-aggregate');
      const config = resolveConfig({ generateGraphQL: { client: true } });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const content = readFileSync(userPath, 'utf-8');

      expect(content).toContain('query aggregateUser($where: UserWhereInput)');
      expect(content).toContain('aggregateUser(where: $where)');
      expect(content).toContain('_count');
      expect(content).toContain('_all');

      tempDir.cleanup();
    });
  });

  describe('mutation generation', () => {
    test('generates createOne mutation', () => {
      const tempDir = createTempDir('graphql-createone');
      const config = resolveConfig({ generateGraphQL: { client: true } });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const content = readFileSync(userPath, 'utf-8');

      expect(content).toContain('mutation createOneUser($data: UserCreateInput!)');
      expect(content).toContain('createOneUser(data: $data)');
      expect(content).toContain('...User');

      tempDir.cleanup();
    });

    test('generates updateOne mutation', () => {
      const tempDir = createTempDir('graphql-updateone');
      const config = resolveConfig({ generateGraphQL: { client: true } });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const content = readFileSync(userPath, 'utf-8');

      expect(content).toContain('mutation updateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!)');
      expect(content).toContain('updateOneUser(data: $data, where: $where)');

      tempDir.cleanup();
    });

    test('generates upsertOne mutation', () => {
      const tempDir = createTempDir('graphql-upsertone');
      const config = resolveConfig({ generateGraphQL: { client: true } });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const content = readFileSync(userPath, 'utf-8');

      expect(content).toContain('mutation upsertOneUser(');
      expect(content).toContain('$where: UserWhereUniqueInput!');
      expect(content).toContain('$create: UserCreateInput!');
      expect(content).toContain('$update: UserUpdateInput!');
      expect(content).toContain('upsertOneUser(where: $where, create: $create, update: $update)');

      tempDir.cleanup();
    });

    test('generates deleteOne mutation', () => {
      const tempDir = createTempDir('graphql-deleteone');
      const config = resolveConfig({ generateGraphQL: { client: true } });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const content = readFileSync(userPath, 'utf-8');

      expect(content).toContain('mutation deleteOneUser($where: UserWhereUniqueInput!)');
      expect(content).toContain('deleteOneUser(where: $where)');

      tempDir.cleanup();
    });

    test('generates updateMany mutation', () => {
      const tempDir = createTempDir('graphql-updatemany');
      const config = resolveConfig({ generateGraphQL: { client: true } });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const content = readFileSync(userPath, 'utf-8');

      expect(content).toContain('mutation updateManyUser($data: UserUpdateManyMutationInput!, $where: UserWhereInput)');
      expect(content).toContain('updateManyUser(data: $data, where: $where)');
      expect(content).toContain('count');

      tempDir.cleanup();
    });

    test('generates deleteMany mutation', () => {
      const tempDir = createTempDir('graphql-deletemany');
      const config = resolveConfig({ generateGraphQL: { client: true } });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const content = readFileSync(userPath, 'utf-8');

      expect(content).toContain('mutation deleteManyUser($where: UserWhereInput)');
      expect(content).toContain('deleteManyUser(where: $where)');
      expect(content).toContain('count');

      tempDir.cleanup();
    });
  });

  describe('operation exclusion', () => {
    test('excludes operations per global config', () => {
      const tempDir = createTempDir('graphql-exclude-ops');
      const config = resolveConfig({
        generateGraphQL: { client: true },
        excludeQueriesAndMutations: ['deleteMany', 'updateMany', 'aggregate'],
      });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const content = readFileSync(userPath, 'utf-8');

      expect(content).not.toContain('deleteManyUser');
      expect(content).not.toContain('updateManyUser');
      expect(content).not.toContain('aggregateUser');
      expect(content).toContain('findUniqueUser');
      expect(content).toContain('createOneUser');

      tempDir.cleanup();
    });

    test('excludes operations per model config', () => {
      const tempDir = createTempDir('graphql-exclude-model-ops');
      const config = resolveConfig({
        generateGraphQL: { client: true },
        models: {
          User: {
            excludeQueriesAndMutations: ['deleteOne', 'deleteMany'],
          },
        },
      });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const userContent = readFileSync(userPath, 'utf-8');

      expect(userContent).not.toContain('deleteOneUser');
      expect(userContent).not.toContain('deleteManyUser');
      expect(userContent).toContain('createOneUser');

      // Post should still have delete operations
      const postPath = join(tempDir.path, 'graphql', 'Post.graphql');
      const postContent = readFileSync(postPath, 'utf-8');
      expect(postContent).toContain('deleteOnePost');

      tempDir.cleanup();
    });
  });

  describe('model exclusion', () => {
    test('excludes model when exclude: true', () => {
      const tempDir = createTempDir('graphql-exclude-model');
      const config = resolveConfig({
        generateGraphQL: { client: true },
        models: {
          Post: { exclude: true },
        },
      });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const graphqlDir = join(tempDir.path, 'graphql');
      const files = readdirSync(graphqlDir);

      expect(files).toContain('User.graphql');
      expect(files).toContain('Profile.graphql');
      expect(files).not.toContain('Post.graphql');

      tempDir.cleanup();
    });
  });

  describe('disable flags', () => {
    test('disables all mutations when disableMutations: true globally', () => {
      const tempDir = createTempDir('graphql-disable-mutations');
      const config = resolveConfig({
        generateGraphQL: { client: true },
        disableMutations: true,
      });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const content = readFileSync(userPath, 'utf-8');

      // Should have queries
      expect(content).toContain('findUniqueUser');
      expect(content).toContain('findManyUser');

      // Should NOT have mutations
      expect(content).not.toContain('createOneUser');
      expect(content).not.toContain('updateOneUser');
      expect(content).not.toContain('deleteOneUser');

      tempDir.cleanup();
    });

    test('disables all queries when disableQueries: true globally', () => {
      const tempDir = createTempDir('graphql-disable-queries');
      const config = resolveConfig({
        generateGraphQL: { client: true },
        disableQueries: true,
      });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const content = readFileSync(userPath, 'utf-8');

      // Should NOT have queries
      expect(content).not.toContain('findUniqueUser');
      expect(content).not.toContain('findManyUser');
      expect(content).not.toContain('aggregateUser');

      // Should have mutations
      expect(content).toContain('createOneUser');
      expect(content).toContain('updateOneUser');

      tempDir.cleanup();
    });

    test('disables queries per model with queries: false', () => {
      const tempDir = createTempDir('graphql-disable-model-queries');
      const config = resolveConfig({
        generateGraphQL: { client: true },
        models: {
          User: { queries: false },
        },
      });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const userContent = readFileSync(userPath, 'utf-8');

      expect(userContent).not.toContain('findUniqueUser');
      expect(userContent).toContain('createOneUser');

      // Post should still have queries
      const postPath = join(tempDir.path, 'graphql', 'Post.graphql');
      const postContent = readFileSync(postPath, 'utf-8');
      expect(postContent).toContain('findUniquePost');

      tempDir.cleanup();
    });

    test('disables mutations per model with mutations: false', () => {
      const tempDir = createTempDir('graphql-disable-model-mutations');
      const config = resolveConfig({
        generateGraphQL: { client: true },
        models: {
          User: { mutations: false },
        },
      });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const userContent = readFileSync(userPath, 'utf-8');

      expect(userContent).toContain('findUniqueUser');
      expect(userContent).not.toContain('createOneUser');

      tempDir.cleanup();
    });

    test('disables mutations per model with disableMutations: true', () => {
      const tempDir = createTempDir('graphql-disable-model-mutations2');
      const config = resolveConfig({
        generateGraphQL: { client: true },
        models: {
          User: { disableMutations: true },
        },
      });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const userPath = join(tempDir.path, 'graphql', 'User.graphql');
      const userContent = readFileSync(userPath, 'utf-8');

      expect(userContent).toContain('findUniqueUser');
      expect(userContent).not.toContain('createOneUser');

      tempDir.cleanup();
    });
  });

  describe('index file generation', () => {
    test('creates index.graphql with imports', () => {
      const tempDir = createTempDir('graphql-index');
      const config = resolveConfig({ generateGraphQL: { client: true } });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const indexPath = join(tempDir.path, 'graphql', 'index.graphql');
      expect(existsSync(indexPath)).toBe(true);

      const content = readFileSync(indexPath, 'utf-8');
      expect(content).toContain("# import UserFields, User from './User.graphql'");
      expect(content).toContain("# import PostFields, Post from './Post.graphql'");
      expect(content).toContain("# import ProfileFields, Profile from './Profile.graphql'");

      tempDir.cleanup();
    });

    test('index only includes non-excluded models', () => {
      const tempDir = createTempDir('graphql-index-excluded');
      const config = resolveConfig({
        generateGraphQL: { client: true },
        models: {
          Post: { exclude: true },
        },
      });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const indexPath = join(tempDir.path, 'graphql', 'index.graphql');
      const content = readFileSync(indexPath, 'utf-8');

      expect(content).toContain("# import UserFields, User from './User.graphql'");
      expect(content).not.toContain('Post.graphql');

      tempDir.cleanup();
    });
  });

  describe('output configuration', () => {
    test('respects custom clientOutput path', () => {
      const tempDir = createTempDir('graphql-custom-output');
      const config = resolveConfig({
        generateGraphQL: {
          client: true,
          clientOutput: 'client-graphql',
        },
      });
      writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      const customDir = join(tempDir.path, 'client-graphql');
      expect(existsSync(customDir)).toBe(true);
      expect(existsSync(join(customDir, 'User.graphql'))).toBe(true);
      expect(existsSync(join(customDir, 'index.graphql'))).toBe(true);

      tempDir.cleanup();
    });

    test('returns list of generated file paths', () => {
      const tempDir = createTempDir('graphql-return-paths');
      const config = resolveConfig({ generateGraphQL: { client: true } });
      const paths = writeGraphQL({ outputDir: tempDir.path, dmmf: mockDmmf, config });

      expect(paths.length).toBe(4); // User, Post, Profile, index
      expect(paths.some((p) => p.endsWith('User.graphql'))).toBe(true);
      expect(paths.some((p) => p.endsWith('Post.graphql'))).toBe(true);
      expect(paths.some((p) => p.endsWith('Profile.graphql'))).toBe(true);
      expect(paths.some((p) => p.endsWith('index.graphql'))).toBe(true);

      tempDir.cleanup();
    });
  });
});
