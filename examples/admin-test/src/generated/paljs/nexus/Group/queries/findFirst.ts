import { queryField, list } from 'nexus';

export const GroupFindFirstQuery = queryField('findFirstGroup', {
  type: 'Group',
  args: {
    where: 'GroupWhereInput',
    orderBy: list('GroupOrderByWithRelationInput'),
    cursor: 'GroupWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'GroupScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.group.findFirst({
      ...args,
      ...select,
    });
  },
});
