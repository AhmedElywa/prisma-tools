import { queryField, list } from 'nexus'

export const CategoryAggregateQuery = queryField('aggregateCategory', {
  type: 'AggregateCategory',
  args: {
    where: 'CategoryWhereInput',
    orderBy: list('CategoryOrderByWithRelationInput'),
    cursor: 'CategoryWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.category.aggregate({ ...args, ...select }) as any
  },
})
