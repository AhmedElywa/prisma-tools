import { createYoga } from 'graphql-yoga';
import { makeSchema } from 'nexus';
import { paljs } from '@paljs/nexus';
import prisma from '@/lib/prisma';
import * as adminTypes from '@/graphql/admin';
import * as generatedTypes from '@/generated/paljs/nexus';
import { dmmf, type ModelName, type ModelsObject } from '@/generated/paljs';
import { join } from 'path';

// Create schema with paljs plugin for PrismaSelect
// paljs() provides BatchPayload + scalars (DateTime, Json, BigInt, Decimal, Bytes)
const schema = makeSchema({
  types: [
    generatedTypes,
    adminTypes,
  ],
  plugins: [
    paljs<ModelName, ModelsObject>({
      prismaSelectOptions: {
        dmmf: [dmmf],
      },
      includeAdmin: true,
    }),
  ],
  outputs: {
    typegen: join(process.cwd(), 'src', 'generated', 'nexus-typegen.ts'),
    schema: join(process.cwd(), 'src', 'generated', 'schema.graphql'),
  },
});

// Create Yoga instance
const yoga = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  context: () => ({
    prisma,
  }),
  fetchAPI: { Response },
});

// Export handlers
export const GET = yoga;
export const POST = yoga;
