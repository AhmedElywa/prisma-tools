import { queryField, nonNull, list } from 'nexus';

export const ProfileFindCountQuery = queryField('findCountProfile', {
  type: nonNull('Int'),
  args: {
    where: 'ProfileWhereInput',
    orderBy: list('ProfileOrderByWithRelationInput'),
    cursor: 'ProfileWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'ProfileScalarFieldEnum',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.profile.count({ ...args } as any);
  },
});
