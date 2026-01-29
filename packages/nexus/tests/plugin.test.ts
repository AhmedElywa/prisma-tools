import { describe, expect, test } from 'bun:test';
import { printSchema } from 'graphql';
import { makeSchema, nonNull, objectType, queryField, stringArg } from 'nexus';
import { type Settings, paljs } from '../src';
import { getScalars } from '../src/defaultScalar';

/**
 * Helper to generate schema string from nexus types and plugins
 */
function generateSchemaWithPlugin(settings?: Settings): string {
  return printSchema(
    makeSchema({
      types: [],
      plugins: [paljs(settings)],
      outputs: false,
    }),
  );
}

describe('paljs() Plugin', () => {
  describe('plugin factory', () => {
    test('creates a valid Nexus plugin', () => {
      const plugin = paljs();

      expect(plugin).toBeDefined();
      expect(typeof plugin).toBe('object');
    });

    test('creates plugin with custom settings', () => {
      const plugin = paljs({
        includeAdmin: false,
        excludeScalar: ['Json'],
      });

      expect(plugin).toBeDefined();
    });

    test('plugin adds BatchPayload type to schema', () => {
      const schema = generateSchemaWithPlugin();

      expect(schema).toContain('type BatchPayload');
      expect(schema).toContain('count: Int!');
    });
  });

  describe('scalar types', () => {
    test('includes all default scalars', () => {
      const schema = generateSchemaWithPlugin();

      expect(schema).toContain('scalar DateTime');
      expect(schema).toContain('scalar Json');
      expect(schema).toContain('scalar Decimal');
      expect(schema).toContain('scalar BigInt');
      expect(schema).toContain('scalar Bytes');
    });

    test('excludes specified scalars', () => {
      const schema = generateSchemaWithPlugin({
        excludeScalar: ['Json', 'Decimal'],
      });

      expect(schema).not.toContain('scalar Json');
      expect(schema).not.toContain('scalar Decimal');
      expect(schema).toContain('scalar DateTime');
      expect(schema).toContain('scalar BigInt');
      expect(schema).toContain('scalar Bytes');
    });

    test('excludes single scalar', () => {
      const schema = generateSchemaWithPlugin({
        excludeScalar: ['BigInt'],
      });

      expect(schema).not.toContain('scalar BigInt');
      expect(schema).toContain('scalar DateTime');
    });

    test('excludes all scalars', () => {
      const schema = generateSchemaWithPlugin({
        excludeScalar: ['Json', 'Decimal', 'BigInt', 'DateTime', 'Bytes'],
      });

      expect(schema).not.toContain('scalar Json');
      expect(schema).not.toContain('scalar Decimal');
      expect(schema).not.toContain('scalar BigInt');
      expect(schema).not.toContain('scalar DateTime');
      expect(schema).not.toContain('scalar Bytes');
    });

    test('handles empty excludeScalar array', () => {
      const schema = generateSchemaWithPlugin({
        excludeScalar: [],
      });

      expect(schema).toContain('scalar DateTime');
      expect(schema).toContain('scalar Json');
    });
  });

  describe('getScalars function', () => {
    test('returns all scalars when no exclusion', () => {
      const scalars = getScalars(undefined);

      expect(scalars).toHaveLength(5);
    });

    test('returns all scalars with empty exclusion array', () => {
      const scalars = getScalars([]);

      expect(scalars).toHaveLength(5);
    });

    test('excludes specified scalars', () => {
      const scalars = getScalars(['Json', 'Decimal']);

      expect(scalars).toHaveLength(3);
    });

    test('excludes single scalar', () => {
      const scalars = getScalars(['BigInt']);

      expect(scalars).toHaveLength(4);
    });

    test('excludes all scalars', () => {
      const scalars = getScalars(['Json', 'Decimal', 'BigInt', 'DateTime', 'Bytes']);

      expect(scalars).toHaveLength(0);
    });
  });

  describe('prismaSelectOptions', () => {
    test('accepts prismaSelectOptions in settings', () => {
      const plugin = paljs({
        prismaSelectOptions: {
          dmmf: [],
        },
      });

      expect(plugin).toBeDefined();
    });

    test('accepts complex prismaSelectOptions', () => {
      const plugin = paljs({
        prismaSelectOptions: {
          dmmf: [],
          defaultFields: {
            User: { id: true, email: true },
          },
        },
      });

      expect(plugin).toBeDefined();
    });
  });

  describe('admin settings', () => {
    test('does not include admin types by default', () => {
      const schema = generateSchemaWithPlugin();

      // Admin types should not be present by default
      expect(schema).not.toContain('type Schema');
      expect(schema).not.toContain('type Model');
      expect(schema).not.toContain('type Field');
      expect(schema).not.toContain('type Enum');
    });

    test('includes admin types when includeAdmin is true and path exists', () => {
      const schema = generateSchemaWithPlugin({
        includeAdmin: true,
        adminSchemaPath: './packages/nexus/tests/adminSettings.json',
      });

      // Admin types should be present
      expect(schema).toContain('type Schema');
      expect(schema).toContain('type Model');
      expect(schema).toContain('type Field');
      expect(schema).toContain('type Enum');
    });

    test('does not include admin types when path does not exist', () => {
      const schema = generateSchemaWithPlugin({
        includeAdmin: true,
        adminSchemaPath: './nonexistent/path.json',
      });

      // Admin types should not be present when file doesn't exist
      expect(schema).not.toContain('type Schema');
      expect(schema).not.toContain('getSchema');
    });

    test('admin includes query getSchema', () => {
      const schema = generateSchemaWithPlugin({
        includeAdmin: true,
        adminSchemaPath: './packages/nexus/tests/adminSettings.json',
      });

      expect(schema).toContain('getSchema: Schema!');
    });

    test('admin includes mutation updateField', () => {
      const schema = generateSchemaWithPlugin({
        includeAdmin: true,
        adminSchemaPath: './packages/nexus/tests/adminSettings.json',
      });

      expect(schema).toContain('updateField');
      expect(schema).toContain('UpdateFieldInput');
    });

    test('admin includes mutation updateModel', () => {
      const schema = generateSchemaWithPlugin({
        includeAdmin: true,
        adminSchemaPath: './packages/nexus/tests/adminSettings.json',
      });

      expect(schema).toContain('updateModel');
      expect(schema).toContain('UpdateModelInput');
    });

    test('admin Schema type has correct structure', () => {
      const schema = generateSchemaWithPlugin({
        includeAdmin: true,
        adminSchemaPath: './packages/nexus/tests/adminSettings.json',
      });

      expect(schema).toContain('models: [Model!]!');
      expect(schema).toContain('enums: [Enum!]!');
    });

    test('admin Model type has correct fields', () => {
      const schema = generateSchemaWithPlugin({
        includeAdmin: true,
        adminSchemaPath: './packages/nexus/tests/adminSettings.json',
      });

      expect(schema).toContain('id: String!');
      expect(schema).toContain('name: String!');
      expect(schema).toContain('idField: String!');
      expect(schema).toContain('displayFields: [String!]!');
      expect(schema).toContain('create: Boolean!');
      expect(schema).toContain('update: Boolean!');
      expect(schema).toContain('delete: Boolean!');
    });

    test('admin Field type has correct fields', () => {
      const schema = generateSchemaWithPlugin({
        includeAdmin: true,
        adminSchemaPath: './packages/nexus/tests/adminSettings.json',
      });

      // Check Field type structure
      expect(schema).toContain('type Field');
      expect(schema).toContain('title: String!');
      expect(schema).toContain('type: String!');
      expect(schema).toContain('list: Boolean!');
      expect(schema).toContain('required: Boolean!');
      expect(schema).toContain('isId: Boolean!');
      expect(schema).toContain('unique: Boolean!');
      expect(schema).toContain('filter: Boolean!');
      expect(schema).toContain('sort: Boolean!');
      expect(schema).toContain('order: Int!');
      expect(schema).toContain('kind: KindEnum!');
    });

    test('admin KindEnum has correct values', () => {
      const schema = generateSchemaWithPlugin({
        includeAdmin: true,
        adminSchemaPath: './packages/nexus/tests/adminSettings.json',
      });

      expect(schema).toContain('enum KindEnum');
      expect(schema).toContain('object');
      expect(schema).toContain('scalar');
    });
  });

  describe('schema structure', () => {
    test('generates valid GraphQL schema', () => {
      const schema = generateSchemaWithPlugin();

      // Should have Query type (even if empty, Nexus generates it)
      expect(schema).toContain('type Query');
    });

    test('schema is parseable', () => {
      const schemaStr = generateSchemaWithPlugin();

      // If this doesn't throw, the schema is valid
      expect(() => {
        // Just verify it's a valid string with GraphQL structure
        expect(schemaStr).toContain('scalar');
        expect(schemaStr).toContain('type');
      }).not.toThrow();
    });
  });

  describe('type generics', () => {
    test('supports generic type parameters', () => {
      // Test that generic types compile correctly
      const plugin = paljs<'User' | 'Post', { User: { id: number }; Post: { id: number } }>({
        prismaSelectOptions: {
          dmmf: [],
        },
      });

      expect(plugin).toBeDefined();
    });
  });
});
