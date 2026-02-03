import { mutationField, nonNull } from 'nexus';

export const OrderItemDeleteManyMutation = mutationField('deleteManyOrderItem', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'OrderItemWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.orderItem.deleteMany({ ...args } as any);
  },
});
