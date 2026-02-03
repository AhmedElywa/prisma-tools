import { mutationField, nonNull } from 'nexus';

export const ProfileDeleteManyMutation = mutationField('deleteManyProfile', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ProfileWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.profile.deleteMany({ ...args } as any);
  },
});
