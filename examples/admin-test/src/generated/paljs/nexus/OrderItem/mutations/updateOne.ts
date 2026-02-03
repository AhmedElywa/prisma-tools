import { mutationField, nonNull } from 'nexus';

export const OrderItemUpdateOneMutation = mutationField('updateOneOrderItem', {
  type: nonNull('OrderItem'),
  args: {
    data: nonNull('OrderItemUpdateInput'),
    where: nonNull('OrderItemWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.orderItem.update({
      where,
      data,
      ...select,
    });
  },
});
