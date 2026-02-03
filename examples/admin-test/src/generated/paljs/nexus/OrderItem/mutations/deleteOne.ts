import { mutationField, nonNull } from 'nexus';

export const OrderItemDeleteOneMutation = mutationField('deleteOneOrderItem', {
  type: 'OrderItem',
  args: {
    where: nonNull('OrderItemWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.orderItem.delete({
      where,
      ...select,
    });
  },
});
