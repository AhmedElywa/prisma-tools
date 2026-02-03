import { mutationField, nonNull } from 'nexus';

export const OrderDeleteManyMutation = mutationField('deleteManyOrder', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'OrderWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.order.deleteMany({ ...args } as any);
  },
});
