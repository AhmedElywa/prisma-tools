import { queryField, nonNull, list } from 'nexus';

export const ProjectFindCountQuery = queryField('findCountProject', {
  type: nonNull('Int'),
  args: {
    where: 'ProjectWhereInput',
    orderBy: list('ProjectOrderByWithRelationInput'),
    cursor: 'ProjectWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'ProjectScalarFieldEnum',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.project.count({ ...args } as any);
  },
});
