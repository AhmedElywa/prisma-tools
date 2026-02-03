import { mutationField, nonNull } from 'nexus';

export const ProfileUpdateOneMutation = mutationField('updateOneProfile', {
  type: nonNull('Profile'),
  args: {
    data: nonNull('ProfileUpdateInput'),
    where: nonNull('ProfileWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.profile.update({
      where,
      data,
      ...select,
    });
  },
});
