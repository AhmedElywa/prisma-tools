import { mutationField, nonNull } from 'nexus';

export const ReviewDeleteManyMutation = mutationField('deleteManyReview', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ReviewWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.review.deleteMany({ ...args } as any);
  },
});
