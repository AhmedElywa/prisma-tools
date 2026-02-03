import { queryField, nonNull, list } from 'nexus';

export const MessageFindManyQuery = queryField('findManyMessage', {
  type: nonNull(list(nonNull('Message'))),
  args: {
    where: 'MessageWhereInput',
    orderBy: list('MessageOrderByWithRelationInput'),
    cursor: 'MessageWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'MessageScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.message.findMany({
      ...args,
      ...select,
    });
  },
});
