import { mutationField, nonNull } from 'nexus';

export const ProjectUpdateOneMutation = mutationField('updateOneProject', {
  type: nonNull('Project'),
  args: {
    data: nonNull('ProjectUpdateInput'),
    where: nonNull('ProjectWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.project.update({
      where,
      data,
      ...select,
    });
  },
});
