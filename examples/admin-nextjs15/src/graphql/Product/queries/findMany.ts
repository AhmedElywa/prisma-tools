import { queryField, nonNull, list } from 'nexus'

export const ProductFindManyQuery = queryField('findManyProduct', {
  type: nonNull(list(nonNull('Product'))),
  args: {
    where: 'ProductWhereInput',
    orderBy: list('ProductOrderByWithRelationInput'),
    cursor: 'ProductWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ProductScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.product.findMany({
      ...args,
      ...select,
    })
  },
})
