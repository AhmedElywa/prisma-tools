import { queryField, nonNull, list } from 'nexus';

export const ReviewFindCountQuery = queryField('findCountReview', {
  type: nonNull('Int'),
  args: {
    where: 'ReviewWhereInput',
    orderBy: list('ReviewOrderByWithRelationInput'),
    cursor: 'ReviewWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'ReviewScalarFieldEnum',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.review.count({ ...args } as any);
  },
});
