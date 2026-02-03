import { queryField, nonNull, list } from 'nexus';

export const ReviewFindManyQuery = queryField('findManyReview', {
  type: nonNull(list(nonNull('Review'))),
  args: {
    where: 'ReviewWhereInput',
    orderBy: list('ReviewOrderByWithRelationInput'),
    cursor: 'ReviewWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'ReviewScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.review.findMany({
      ...args,
      ...select,
    });
  },
});
