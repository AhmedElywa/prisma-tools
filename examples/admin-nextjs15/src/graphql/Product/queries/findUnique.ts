import { queryField, nonNull } from 'nexus'

export const ProductFindUniqueQuery = queryField('findUniqueProduct', {
  type: 'Product',
  args: {
    where: nonNull('ProductWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.product.findUnique({
      where,
      ...select,
    })
  },
})
