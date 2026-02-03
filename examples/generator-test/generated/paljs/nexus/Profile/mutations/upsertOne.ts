import { mutationField, nonNull } from 'nexus';

export const ProfileUpsertOneMutation = mutationField('upsertOneProfile', {
  type: nonNull('Profile'),
  args: {
    where: nonNull('ProfileWhereUniqueInput'),
    create: nonNull('ProfileCreateInput'),
    update: nonNull('ProfileUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.profile.upsert({
      ...args,
      ...select,
    });
  },
});
