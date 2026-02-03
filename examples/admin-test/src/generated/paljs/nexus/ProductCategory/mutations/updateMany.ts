import { mutationField, nonNull } from 'nexus';

export const ProductCategoryUpdateManyMutation = mutationField('updateManyProductCategory', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('ProductCategoryUpdateManyMutationInput'),
    where: 'ProductCategoryWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.productCategory.updateMany({ ...args } as any);
  },
});
