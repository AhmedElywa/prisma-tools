/**
 * Example usage of @paljs/generator with Prisma 7
 *
 * This file demonstrates how to use the generated types and DMMF.
 */

// Import generated types and DMMF
// These will be available after running `prisma generate`

/*
import { dmmf, type ModelsObject, type ModelName } from '../generated/paljs';
import { PrismaSelect } from '@paljs/plugins';
import type { GraphQLResolveInfo } from 'graphql';

// Example: Using typed PrismaSelect
function userResolver(info: GraphQLResolveInfo) {
  const select = new PrismaSelect<ModelName, ModelsObject>(info, {
    dmmf: [dmmf],
    defaultFields: {
      User: { id: true, email: true },
    },
    excludeFields: {
      User: ['password'],
    },
  });

  return select.value;
}

// Example: Using the generated DMMF
function getModelNames(): string[] {
  return dmmf.datamodel.models.map(m => m.name);
}

// Example: Using with Nexus
import { paljs } from '@paljs/nexus';

const nexusPlugin = paljs<ModelName, ModelsObject>({
  prismaSelectOptions: {
    dmmf: [dmmf],
  },
  includeAdmin: true,
  adminSchemaPath: './generated/paljs/admin/schema.json',
});
*/

export const placeholder = 'Run `prisma generate` to generate the paljs output';
