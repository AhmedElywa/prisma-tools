import { existsSync } from 'fs';
import { join } from 'path';
import { LowSync } from 'lowdb';
import { JSONFileSync } from 'lowdb/node';
import { enumType, extendType, inputObjectType, nonNull, objectType, stringArg } from 'nexus';

interface AdminSchema {
  models: any[];
  enums: any[];
}

const schemaPath = join(process.cwd(), 'src', 'generated', 'paljs', 'admin', 'schema.json');

function getDb() {
  const adapter = new JSONFileSync<AdminSchema>(schemaPath);
  const defaultData: AdminSchema = { models: [], enums: [] };
  const db = new LowSync<AdminSchema>(adapter, defaultData);
  db.read();
  if (!db.data) {
    db.data = defaultData;
  }
  if (!db.data.models) {
    db.data.models = [];
  }
  if (!db.data.enums) {
    db.data.enums = [];
  }
  return db;
}

// Admin Types
export const AdminEnum = objectType({
  nonNullDefaults: { output: true },
  name: 'AdminEnum',
  definition(t) {
    t.string('name');
    t.list.string('fields');
  },
});

export const AdminSchema = objectType({
  nonNullDefaults: { output: true },
  name: 'AdminSchema',
  definition(t) {
    t.list.field('models', { type: 'AdminModel' });
    t.list.field('enums', { type: 'AdminEnum' });
  },
});

export const AdminModel = objectType({
  nonNullDefaults: { output: true },
  name: 'AdminModel',
  definition(t) {
    t.string('id');
    t.string('name');
    t.string('idField');
    t.list.string('displayFields');
    t.boolean('create');
    t.boolean('update');
    t.boolean('delete');
    t.list.field('fields', { type: 'AdminField' });
  },
});

export const AdminField = objectType({
  nonNullDefaults: { output: true },
  name: 'AdminField',
  definition(t) {
    t.string('id');
    t.string('name');
    t.string('title');
    t.string('type');
    t.boolean('list');
    t.boolean('required');
    t.boolean('isId');
    t.boolean('unique');
    t.boolean('create');
    t.boolean('update');
    t.boolean('read');
    t.boolean('filter');
    t.boolean('sort');
    t.boolean('editor');
    t.boolean('upload');
    t.nullable.boolean('relationField');
    t.int('order');
    t.field('kind', { type: 'AdminKindEnum' });
  },
});

export const AdminKindEnum = enumType({
  name: 'AdminKindEnum',
  members: ['object', 'enum', 'scalar'],
});

export const UpdateModelInput = inputObjectType({
  nonNullDefaults: { input: false },
  name: 'UpdateModelInput',
  definition(t) {
    t.string('name');
    t.string('idField');
    t.list.string('displayFields');
    t.boolean('create');
    t.boolean('update');
    t.boolean('delete');
    t.list.field('fields', { type: 'UpdateFieldInput' });
  },
});

export const UpdateFieldInput = inputObjectType({
  nonNullDefaults: { input: false },
  name: 'UpdateFieldInput',
  definition(t) {
    t.string('id');
    t.string('name');
    t.string('title');
    t.string('type');
    t.boolean('list');
    t.boolean('required');
    t.boolean('isId');
    t.boolean('unique');
    t.boolean('create');
    t.boolean('update');
    t.boolean('read');
    t.boolean('filter');
    t.boolean('sort');
    t.boolean('editor');
    t.boolean('upload');
    t.nullable.boolean('relationField');
    t.int('order');
    t.field('kind', { type: 'AdminKindEnum' });
  },
});

// Admin Queries
export const AdminQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('getSchema', {
      type: nonNull('AdminSchema'),
      resolve() {
        if (!existsSync(schemaPath)) {
          return { models: [], enums: [] };
        }
        const db = getDb();
        return {
          models: db.data?.models || [],
          enums: db.data?.enums || [],
        };
      },
    });
  },
});

export const AdminMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('updateField', {
      type: nonNull('AdminField'),
      args: {
        id: nonNull(stringArg()),
        modelId: nonNull(stringArg()),
        data: nonNull('UpdateFieldInput'),
      },
      resolve(_, { id, modelId, data }) {
        const db = getDb();
        const model = db.data.models?.find((m) => m.id === modelId);
        if (!model) {
          throw new Error(`Model with id ${modelId} not found`);
        }
        const field = model.fields?.find((f: any) => f.id === id);
        if (!field) {
          throw new Error(`Field with id ${id} not found in model ${modelId}`);
        }
        Object.assign(field, data);
        db.write();
        return field;
      },
    });
    t.field('updateModel', {
      type: nonNull('AdminModel'),
      args: {
        id: nonNull(stringArg()),
        data: nonNull('UpdateModelInput'),
      },
      resolve(_, { id, data }) {
        const db = getDb();
        const model = db.data.models?.find((m) => m.id === id);
        if (!model) {
          throw new Error(`Model with id ${id} not found`);
        }
        Object.assign(model, data);
        db.write();
        return model;
      },
    });
  },
});
