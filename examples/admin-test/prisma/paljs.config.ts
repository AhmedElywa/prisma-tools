import { defineConfig } from '@paljs/generator';

export default defineConfig({
  // Generate TypeScript types for PrismaSelect
  generateTypes: true,

  // Generate Nexus GraphQL types
  generateGraphQL: {
    nexus: true,
    nexusOutput: './nexus',
    client: true,
    clientOutput: './graphql',
  },

  // Generate admin schema
  generateAdmin: {
    enabled: true,
    output: './admin',
    routerType: 'app',
  },

  // Prisma client name
  prismaName: 'prisma',

  // Exclude sensitive fields globally
  excludeFields: ['password'],

  // Exclude specific operations
  excludeQueriesAndMutations: [],

  // Model-specific configuration
  models: {
    // Audit logs should be read-only
    AuditLog: {
      mutations: false,
    },
    // Settings might need restricted access
    Setting: {
      excludeQueriesAndMutations: ['deleteMany'],
    },
  },
});
