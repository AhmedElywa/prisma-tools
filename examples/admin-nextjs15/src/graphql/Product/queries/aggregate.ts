import { queryField, list } from 'nexus'

export const ProductAggregateQuery = queryField('aggregateProduct', {
  type: 'AggregateProduct',
  args: {
    where: 'ProductWhereInput',
    orderBy: list('ProductOrderByWithRelationInput'),
    cursor: 'ProductWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.product.aggregate({ ...args, ...select }) as any
  },
})
