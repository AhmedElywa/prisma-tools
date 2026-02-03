import { mutationField, nonNull } from 'nexus';

export const OrderCreateOneMutation = mutationField('createOneOrder', {
  type: nonNull('Order'),
  args: {
    data: nonNull('OrderCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.order.create({
      data,
      ...select,
    });
  },
});
