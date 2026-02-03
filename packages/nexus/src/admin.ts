import { existsSync } from 'fs';
import { join } from 'path';
import { LowSync } from 'lowdb';
import { JSONFileSync } from 'lowdb/node';
import { enumType, extendType, inputObjectType, nonNull, objectType, stringArg } from 'nexus';
import type { NexusAcceptedTypeDef } from 'nexus/dist/builder';
import type { AdminSchema } from './types/admin-schema.js';

export function adminNexusSchemaSettings(path = 'adminSettings.json') {
  if (existsSync(join(process.cwd(), path)) || existsSync(path)) {
    const adapter = new JSONFileSync<AdminSchema>(path);
    const defaultData: AdminSchema = { models: [], enums: [] };
    const db = new LowSync<AdminSchema>(adapter, defaultData);

    // Read the data
    db.read();

    // Ensure data has models and enums arrays
    if (!db.data) {
      db.data = defaultData;
    }
    if (!db.data.models) {
      db.data.models = [];
    }
    if (!db.data.enums) {
      db.data.enums = [];
    }
    const nexusSchemaInputs: NexusAcceptedTypeDef[] = [
      extendType({
        type: 'Query',
        definition(t) {
          t.field('getSchema', {
            type: nonNull('Schema'),
            resolve() {
              // Read fresh data
              db.read();
              // Ensure we always return data with models and enums arrays
              return {
                models: db.data?.models || [],
                enums: db.data?.enums || [],
              };
            },
          });
        },
      }),
      extendType({
        type: 'Mutation',
        definition(t) {
          t.field('updateField', {
            type: nonNull('Field'),
            args: {
              id: nonNull(stringArg()),
              modelId: nonNull(stringArg()),
              data: nonNull('UpdateFieldInput'),
            },
            resolve(_, { id, modelId, data }) {
              // Read current data
              db.read();

              // Find the model
              const model = db.data.models?.find((m) => m.id === modelId);
              if (!model) {
                throw new Error(`Model with id ${modelId} not found`);
              }

              // Find the field
              const field = model.fields?.find((f) => f.id === id);
              if (!field) {
                throw new Error(`Field with id ${id} not found in model ${modelId}`);
              }

              // Update the field
              Object.assign(field, data);

              // Write the changes
              db.write();

              return field;
            },
          });
          t.field('updateModel', {
            type: nonNull('Model'),
            args: {
              id: nonNull(stringArg()),
              data: nonNull('UpdateModelInput'),
            },
            resolve(_, { id, data }) {
              // Read current data
              db.read();

              // Find the model
              const model = db.data.models?.find((m) => m.id === id);
              if (!model) {
                throw new Error(`Model with id ${id} not found`);
              }

              // Update the model
              Object.assign(model, data);

              // Write the changes
              db.write();

              return model;
            },
          });
        },
      }),
      objectType({
        nonNullDefaults: {
          output: true,
        },
        name: 'Enum',
        definition(t) {
          t.string('name');
          t.list.string('fields');
        },
      }),
      objectType({
        nonNullDefaults: {
          output: true,
        },
        name: 'Schema',
        definition(t) {
          t.list.field('models', { type: 'Model' });
          t.list.field('enums', { type: 'Enum' });
        },
      }),
      objectType({
        nonNullDefaults: {
          output: true,
        },
        name: 'Model',
        definition(t) {
          t.string('id');
          t.string('name');
          t.string('idField');
          t.list.string('displayFields');
          t.boolean('create');
          t.boolean('update');
          t.boolean('delete');
          t.list.field('fields', {
            type: 'Field',
          });
        },
      }),
      objectType({
        nonNullDefaults: {
          output: true,
        },
        name: 'Field',
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
          t.field('kind', { type: 'KindEnum' });
        },
      }),
      enumType({
        name: 'KindEnum',
        members: ['object', 'enum', 'scalar'],
      }),
      inputObjectType({
        nonNullDefaults: {
          input: false,
        },
        name: 'UpdateModelInput',
        definition(t) {
          t.string('name');
          t.string('idField');
          t.list.string('displayFields');
          t.boolean('create');
          t.boolean('update');
          t.boolean('delete');
          t.list.field('fields', {
            type: 'UpdateFieldInput',
          });
        },
      }),
      inputObjectType({
        nonNullDefaults: {
          input: false,
        },
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
          t.field('kind', { type: 'KindEnum' });
        },
      }),
    ];
    return nexusSchemaInputs;
  }
  return [];
}
