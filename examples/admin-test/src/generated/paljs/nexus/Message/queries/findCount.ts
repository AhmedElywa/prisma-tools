import { queryField, nonNull, list } from 'nexus';

export const MessageFindCountQuery = queryField('findCountMessage', {
  type: nonNull('Int'),
  args: {
    where: 'MessageWhereInput',
    orderBy: list('MessageOrderByWithRelationInput'),
    cursor: 'MessageWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'MessageScalarFieldEnum',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.message.count({ ...args } as any);
  },
});
