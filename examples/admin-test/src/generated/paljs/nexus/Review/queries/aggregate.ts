import { queryField, list } from 'nexus';

export const ReviewAggregateQuery = queryField('aggregateReview', {
  type: 'AggregateReview',
  args: {
    where: 'ReviewWhereInput',
    orderBy: list('ReviewOrderByWithRelationInput'),
    cursor: 'ReviewWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.review.aggregate({ ...args } as any);
  },
});
