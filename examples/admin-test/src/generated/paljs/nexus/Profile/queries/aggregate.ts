import { queryField, list } from 'nexus';

export const ProfileAggregateQuery = queryField('aggregateProfile', {
  type: 'AggregateProfile',
  args: {
    where: 'ProfileWhereInput',
    orderBy: list('ProfileOrderByWithRelationInput'),
    cursor: 'ProfileWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.profile.aggregate({ ...args } as any);
  },
});
