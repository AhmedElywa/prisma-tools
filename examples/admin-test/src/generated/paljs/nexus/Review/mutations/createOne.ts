import { mutationField, nonNull } from 'nexus';

export const ReviewCreateOneMutation = mutationField('createOneReview', {
  type: nonNull('Review'),
  args: {
    data: nonNull('ReviewCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.review.create({
      data,
      ...select,
    });
  },
});
