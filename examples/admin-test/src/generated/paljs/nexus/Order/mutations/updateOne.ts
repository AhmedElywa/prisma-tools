import { mutationField, nonNull } from 'nexus';

export const OrderUpdateOneMutation = mutationField('updateOneOrder', {
  type: nonNull('Order'),
  args: {
    data: nonNull('OrderUpdateInput'),
    where: nonNull('OrderWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.order.update({
      where,
      data,
      ...select,
    });
  },
});
