// Full configuration with all options
export default {
  // GraphQL generation
  generateGraphQL: true,
  nexusOutput: './nexus',

  // Type generation
  generateTypes: true,

  // Admin generation
  generateAdmin: {
    enabled: true,
    output: './admin',
    routerType: 'app' as const,
  },

  // Prisma client
  prismaName: 'prisma',

  // Global exclusions
  excludeFields: ['password', 'hash'],
  excludeInputFields: ['createdAt', 'updatedAt'],
  excludeQueriesAndMutations: ['deleteMany', 'updateMany'],

  // Per-model configuration
  models: {
    User: {
      excludeFields: ['internalNotes'],
      excludeQueriesAndMutations: ['deleteOne'],
    },
    Migration: {
      exclude: true,
    },
  },
};
