import { mutationField, nonNull } from 'nexus';

export const ProductCategoryUpsertOneMutation = mutationField('upsertOneProductCategory', {
  type: nonNull('ProductCategory'),
  args: {
    where: nonNull('ProductCategoryWhereUniqueInput'),
    create: nonNull('ProductCategoryCreateInput'),
    update: nonNull('ProductCategoryUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.productCategory.upsert({
      ...args,
      ...select,
    });
  },
});
