import { queryField, list } from 'nexus';

export const CommentAggregateQuery = queryField('aggregateComment', {
  type: 'AggregateComment',
  args: {
    where: 'CommentWhereInput',
    orderBy: list('CommentOrderByWithRelationInput'),
    cursor: 'CommentWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.comment.aggregate({ ...args } as any);
  },
});
