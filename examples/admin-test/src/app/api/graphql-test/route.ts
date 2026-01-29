import { createYoga } from 'graphql-yoga';
import { makeSchema } from 'nexus';
import prisma from '@/lib/prisma';
import { DateTime, Json, BigInt, Decimal, Bytes, Null } from '@/graphql/scalars';
import { BatchPayload } from '@/graphql/types';

// Import ALL generated types (InputTypes + all model types)
import * as generatedTypes from '@/generated/paljs/nexus';

const schema = makeSchema({
  types: [DateTime, Json, BigInt, Decimal, Bytes, Null, BatchPayload, generatedTypes],
  outputs: false,
});

const yoga = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql-test',
  context: () => ({ prisma, select: {} }),
  fetchAPI: { Response },
});

export const GET = yoga;
export const POST = yoga;
