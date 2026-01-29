import { makeSchema } from 'nexus';
import { paljs } from '@paljs/nexus';
import { join } from 'path';

// Import generated types - will be created after prisma generate
let types: any[] = [];

try {
  // Dynamic import of generated nexus types
  const nexusTypes = require('@/generated/paljs/nexus');
  types = Object.values(nexusTypes);
} catch {
  console.warn('Generated nexus types not found. Run `bun run db:generate` first.');
}

export const schema = makeSchema({
  types,
  plugins: [
    paljs({
      // Options for PrismaSelect
      prismaSelectOptions: {
        // DMMF will be loaded from generated files
      },
      // Include admin mutations for settings
      includeAdmin: true,
      adminSchemaPath: './src/generated/paljs/admin/schema.json',
    }),
  ],
  outputs: {
    schema: join(process.cwd(), 'src/generated/schema.graphql'),
    typegen: join(process.cwd(), 'src/generated/nexus-typegen.d.ts'),
  },
  contextType: {
    module: join(process.cwd(), 'src/graphql/context.ts'),
    export: 'Context',
  },
});
