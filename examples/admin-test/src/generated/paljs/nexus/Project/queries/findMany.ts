import { queryField, nonNull, list } from 'nexus';

export const ProjectFindManyQuery = queryField('findManyProject', {
  type: nonNull(list(nonNull('Project'))),
  args: {
    where: 'ProjectWhereInput',
    orderBy: list('ProjectOrderByWithRelationInput'),
    cursor: 'ProjectWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'ProjectScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.project.findMany({
      ...args,
      ...select,
    });
  },
});
