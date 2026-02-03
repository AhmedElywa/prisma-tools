import { queryField, list } from 'nexus';

export const ReviewFindFirstQuery = queryField('findFirstReview', {
  type: 'Review',
  args: {
    where: 'ReviewWhereInput',
    orderBy: list('ReviewOrderByWithRelationInput'),
    cursor: 'ReviewWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'ReviewScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.review.findFirst({
      ...args,
      ...select,
    });
  },
});
