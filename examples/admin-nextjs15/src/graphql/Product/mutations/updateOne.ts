import { mutationField, nonNull } from 'nexus'

export const ProductUpdateOneMutation = mutationField('updateOneProduct', {
  type: nonNull('Product'),
  args: {
    data: nonNull('ProductUpdateInput'),
    where: nonNull('ProductWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.product.update({
      where,
      data,
      ...select,
    })
  },
})
