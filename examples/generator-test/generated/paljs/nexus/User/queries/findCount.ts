import { queryField, nonNull, list } from 'nexus';

export const UserFindCountQuery = queryField('findCountUser', {
  type: nonNull('Int'),
  args: {
    where: 'UserWhereInput',
    orderBy: list('UserOrderByWithRelationInput'),
    cursor: 'UserWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'UserScalarFieldEnum',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.user.count({ ...args } as any);
  },
});
