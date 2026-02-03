import { mutationField, nonNull } from 'nexus';

export const MessageDeleteOneMutation = mutationField('deleteOneMessage', {
  type: 'Message',
  args: {
    where: nonNull('MessageWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.message.delete({
      where,
      ...select,
    });
  },
});
