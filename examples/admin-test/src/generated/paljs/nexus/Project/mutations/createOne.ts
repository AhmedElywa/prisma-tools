import { mutationField, nonNull } from 'nexus';

export const ProjectCreateOneMutation = mutationField('createOneProject', {
  type: nonNull('Project'),
  args: {
    data: nonNull('ProjectCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.project.create({
      data,
      ...select,
    });
  },
});
