import { queryField, list } from 'nexus';

export const ProjectFindFirstQuery = queryField('findFirstProject', {
  type: 'Project',
  args: {
    where: 'ProjectWhereInput',
    orderBy: list('ProjectOrderByWithRelationInput'),
    cursor: 'ProjectWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'ProjectScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.project.findFirst({
      ...args,
      ...select,
    });
  },
});
