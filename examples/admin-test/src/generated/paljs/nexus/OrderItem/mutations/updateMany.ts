import { mutationField, nonNull } from 'nexus';

export const OrderItemUpdateManyMutation = mutationField('updateManyOrderItem', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('OrderItemUpdateManyMutationInput'),
    where: 'OrderItemWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.orderItem.updateMany({ ...args } as any);
  },
});
