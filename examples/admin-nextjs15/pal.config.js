const pageContent = `
import React from 'react';
import PrismaTable from '@/components/PrismaTable';

const #{id}: React.FC = () => {
  return <PrismaTable model="#{id}" />;
};

export default #{id};
`

// @ts-check

/**
 * @type {import('@paljs/types').Config}
 **/

module.exports = {
  schema: './prisma/schema.prisma',
  backend: {
    generator: 'nexus',
    output: './src/graphql/',
    // Exclude sensitive fields from GraphQL API
    excludeFields: ['password'],
    // Configure admin-specific models
    excludeModels: [],
    // Disable specific queries/mutations if needed
    excludeQueriesAndMutations: ['deleteMany', 'updateMany'],
  },
  frontend: {
    admin: {
      output: './src/app/admin/',
      routerType: 'app',
      pageContent,
    },
  },
}
