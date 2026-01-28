import { makeSchema } from 'nexus'
import { paljs } from '@paljs/nexus'
import * as types from './index'
import { join } from 'node:path'
import { Prisma } from '@/prisma-client'
import type { NexusGenObjects } from '@/generated/nexus'

export const schema = makeSchema({
  types,
  plugins: [
    paljs<Prisma.ModelName, NexusGenObjects>({
      prismaSelectOptions: {
        dmmf: [Prisma.dmmf as any],
      },
      includeAdmin: true,
      adminSchemaPath: join(process.cwd(), 'src/adminSettings.json'),
    }),
  ],
  outputs: {
    typegen: join(process.cwd(), 'src/generated/nexus.ts'),
    schema: join(process.cwd(), 'src/generated/schema.graphql'),
  },
  contextType: {
    module: join(process.cwd(), 'src/graphql/context.ts'),
    export: 'Context',
  },
})
