import { mutationField, nonNull } from 'nexus';

export const OrderItemUpsertOneMutation = mutationField('upsertOneOrderItem', {
  type: nonNull('OrderItem'),
  args: {
    where: nonNull('OrderItemWhereUniqueInput'),
    create: nonNull('OrderItemCreateInput'),
    update: nonNull('OrderItemUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.orderItem.upsert({
      ...args,
      ...select,
    });
  },
});
