import { defineConfig } from '@paljs/generator/config';

export default defineConfig({
  // Generate typed helpers for PrismaSelect
  generateTypes: true,

  // Generate GraphQL
  generateGraphQL: {
    // Server-side Nexus types
    nexus: true,
    nexusOutput: './nexus',
    // Client-side .graphql files
    client: true,
    clientOutput: './graphql',
  },

  // Generate Admin UI configuration
  generateAdmin: {
    enabled: true,
    output: './admin',
    routerType: 'app',
  },

  // Prisma client instance name
  prismaName: 'prisma',

  // Global exclusions
  excludeFields: ['password'],
  excludeInputFields: ['createdAt', 'updatedAt'],
  excludeQueriesAndMutations: ['deleteMany', 'updateMany'],

  // Per-model configuration
  models: {
    // Exclude AuditLog entirely from GraphQL (read-only internal model)
    AuditLog: {
      exclude: true,
    },

    // User-specific exclusions
    User: {
      excludeQueriesAndMutations: ['deleteOne'],
    },

    // Tag is read-only (no mutations)
    Tag: {
      disableMutations: true,
    },
  },
});
