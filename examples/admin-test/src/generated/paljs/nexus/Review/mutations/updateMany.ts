import { mutationField, nonNull } from 'nexus';

export const ReviewUpdateManyMutation = mutationField('updateManyReview', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('ReviewUpdateManyMutationInput'),
    where: 'ReviewWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.review.updateMany({ ...args } as any);
  },
});
