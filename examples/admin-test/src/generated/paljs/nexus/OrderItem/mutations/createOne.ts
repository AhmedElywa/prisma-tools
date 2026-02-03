import { mutationField, nonNull } from 'nexus';

export const OrderItemCreateOneMutation = mutationField('createOneOrderItem', {
  type: nonNull('OrderItem'),
  args: {
    data: nonNull('OrderItemCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.orderItem.create({
      data,
      ...select,
    });
  },
});
