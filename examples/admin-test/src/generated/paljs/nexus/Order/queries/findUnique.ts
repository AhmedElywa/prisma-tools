import { queryField, nonNull } from 'nexus';

export const OrderFindUniqueQuery = queryField('findUniqueOrder', {
  type: 'Order',
  args: {
    where: nonNull('OrderWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.order.findUnique({
      where,
      ...select,
    });
  },
});
