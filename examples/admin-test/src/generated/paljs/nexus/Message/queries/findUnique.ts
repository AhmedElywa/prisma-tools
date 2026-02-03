import { queryField, nonNull } from 'nexus';

export const MessageFindUniqueQuery = queryField('findUniqueMessage', {
  type: 'Message',
  args: {
    where: nonNull('MessageWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.message.findUnique({
      where,
      ...select,
    });
  },
});
