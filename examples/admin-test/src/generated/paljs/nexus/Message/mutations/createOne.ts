import { mutationField, nonNull } from 'nexus';

export const MessageCreateOneMutation = mutationField('createOneMessage', {
  type: nonNull('Message'),
  args: {
    data: nonNull('MessageCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.message.create({
      data,
      ...select,
    });
  },
});
