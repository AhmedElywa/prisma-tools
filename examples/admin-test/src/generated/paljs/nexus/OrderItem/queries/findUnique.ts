import { queryField, nonNull } from 'nexus';

export const OrderItemFindUniqueQuery = queryField('findUniqueOrderItem', {
  type: 'OrderItem',
  args: {
    where: nonNull('OrderItemWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.orderItem.findUnique({
      where,
      ...select,
    });
  },
});
