import { queryField, nonNull, list } from 'nexus';

export const CommentFindManyQuery = queryField('findManyComment', {
  type: nonNull(list(nonNull('Comment'))),
  args: {
    where: 'CommentWhereInput',
    orderBy: list('CommentOrderByWithRelationInput'),
    cursor: 'CommentWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'CommentScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.comment.findMany({
      ...args,
      ...select,
    });
  },
});
