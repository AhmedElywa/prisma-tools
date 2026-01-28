import { queryField, list } from 'nexus'

export const ProductFindFirstQuery = queryField('findFirstProduct', {
  type: 'Product',
  args: {
    where: 'ProductWhereInput',
    orderBy: list('ProductOrderByWithRelationInput'),
    cursor: 'ProductWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ProductScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.product.findFirst({
      ...args,
      ...select,
    })
  },
})
