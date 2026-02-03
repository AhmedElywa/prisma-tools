import { mutationField, nonNull } from 'nexus';

export const ProjectDeleteOneMutation = mutationField('deleteOneProject', {
  type: 'Project',
  args: {
    where: nonNull('ProjectWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.project.delete({
      where,
      ...select,
    });
  },
});
