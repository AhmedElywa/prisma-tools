import { mutationField, nonNull } from 'nexus';

export const OrderUpsertOneMutation = mutationField('upsertOneOrder', {
  type: nonNull('Order'),
  args: {
    where: nonNull('OrderWhereUniqueInput'),
    create: nonNull('OrderCreateInput'),
    update: nonNull('OrderUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.order.upsert({
      ...args,
      ...select,
    });
  },
});
