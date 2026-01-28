import { queryField, nonNull, list } from 'nexus'

export const ProfileFindManyQuery = queryField('findManyProfile', {
  type: nonNull(list(nonNull('Profile'))),
  args: {
    where: 'ProfileWhereInput',
    orderBy: list('ProfileOrderByWithRelationInput'),
    cursor: 'ProfileWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ProfileScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.profile.findMany({
      ...args,
      ...select,
    })
  },
})
