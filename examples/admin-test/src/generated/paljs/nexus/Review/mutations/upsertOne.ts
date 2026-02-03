import { mutationField, nonNull } from 'nexus';

export const ReviewUpsertOneMutation = mutationField('upsertOneReview', {
  type: nonNull('Review'),
  args: {
    where: nonNull('ReviewWhereUniqueInput'),
    create: nonNull('ReviewCreateInput'),
    update: nonNull('ReviewUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.review.upsert({
      ...args,
      ...select,
    });
  },
});
