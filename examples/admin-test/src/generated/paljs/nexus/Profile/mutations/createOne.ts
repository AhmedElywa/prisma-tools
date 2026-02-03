import { mutationField, nonNull } from 'nexus';

export const ProfileCreateOneMutation = mutationField('createOneProfile', {
  type: nonNull('Profile'),
  args: {
    data: nonNull('ProfileCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.profile.create({
      data,
      ...select,
    });
  },
});
