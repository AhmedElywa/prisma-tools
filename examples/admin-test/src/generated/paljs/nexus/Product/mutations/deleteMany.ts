import { mutationField, nonNull } from 'nexus';

export const ProductDeleteManyMutation = mutationField('deleteManyProduct', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ProductWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.product.deleteMany({ ...args } as any);
  },
});
