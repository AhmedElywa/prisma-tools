import { mutationField, nonNull } from 'nexus';

export const PostDeleteManyMutation = mutationField('deleteManyPost', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'PostWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.post.deleteMany({ ...args } as any);
  },
});
