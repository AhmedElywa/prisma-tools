import { defineConfig } from 'prisma/config';
import path from 'path';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: `file:${path.join(__dirname, 'prisma', 'dev.db')}`,
  },
});
