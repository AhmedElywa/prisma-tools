import { mutationField, nonNull } from 'nexus';

export const ProductCategoryDeleteManyMutation = mutationField('deleteManyProductCategory', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ProductCategoryWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.productCategory.deleteMany({ ...args } as any);
  },
});
