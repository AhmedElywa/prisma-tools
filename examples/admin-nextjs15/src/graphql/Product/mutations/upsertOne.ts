import { mutationField, nonNull } from 'nexus'

export const ProductUpsertOneMutation = mutationField('upsertOneProduct', {
  type: nonNull('Product'),
  args: {
    where: nonNull('ProductWhereUniqueInput'),
    create: nonNull('ProductCreateInput'),
    update: nonNull('ProductUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.product.upsert({
      ...args,
      ...select,
    })
  },
})
