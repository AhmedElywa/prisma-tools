import { queryField, list } from 'nexus'

export const ProfileFindFirstQuery = queryField('findFirstProfile', {
  type: 'Profile',
  args: {
    where: 'ProfileWhereInput',
    orderBy: list('ProfileOrderByWithRelationInput'),
    cursor: 'ProfileWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ProfileScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.profile.findFirst({
      ...args,
      ...select,
    })
  },
})
