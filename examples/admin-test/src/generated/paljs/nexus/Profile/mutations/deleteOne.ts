import { mutationField, nonNull } from 'nexus';

export const ProfileDeleteOneMutation = mutationField('deleteOneProfile', {
  type: 'Profile',
  args: {
    where: nonNull('ProfileWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.profile.delete({
      where,
      ...select,
    });
  },
});
