import { queryField, nonNull } from 'nexus';

export const ReviewFindUniqueQuery = queryField('findUniqueReview', {
  type: 'Review',
  args: {
    where: nonNull('ReviewWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.review.findUnique({
      where,
      ...select,
    });
  },
});
