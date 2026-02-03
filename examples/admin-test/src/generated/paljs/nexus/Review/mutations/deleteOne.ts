import { mutationField, nonNull } from 'nexus';

export const ReviewDeleteOneMutation = mutationField('deleteOneReview', {
  type: 'Review',
  args: {
    where: nonNull('ReviewWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.review.delete({
      where,
      ...select,
    });
  },
});
