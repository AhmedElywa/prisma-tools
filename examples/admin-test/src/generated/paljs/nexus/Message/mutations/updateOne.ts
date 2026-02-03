import { mutationField, nonNull } from 'nexus';

export const MessageUpdateOneMutation = mutationField('updateOneMessage', {
  type: nonNull('Message'),
  args: {
    data: nonNull('MessageUpdateInput'),
    where: nonNull('MessageWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.message.update({
      where,
      data,
      ...select,
    });
  },
});
