import { queryField, nonNull, list } from 'nexus'

export const ProductFindCountQuery = queryField('findManyProductCount', {
  type: nonNull('Int'),
  args: {
    where: 'ProductWhereInput',
    orderBy: list('ProductOrderByWithRelationInput'),
    cursor: 'ProductWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ProductScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.product.count(args as any)
  },
})
