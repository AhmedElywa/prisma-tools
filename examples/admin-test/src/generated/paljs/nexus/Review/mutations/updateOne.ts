import { mutationField, nonNull } from 'nexus';

export const ReviewUpdateOneMutation = mutationField('updateOneReview', {
  type: nonNull('Review'),
  args: {
    data: nonNull('ReviewUpdateInput'),
    where: nonNull('ReviewWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.review.update({
      where,
      data,
      ...select,
    });
  },
});
