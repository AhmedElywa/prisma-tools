import { queryField, nonNull } from 'nexus';

export const ProjectFindUniqueQuery = queryField('findUniqueProject', {
  type: 'Project',
  args: {
    where: nonNull('ProjectWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.project.findUnique({
      where,
      ...select,
    });
  },
});
