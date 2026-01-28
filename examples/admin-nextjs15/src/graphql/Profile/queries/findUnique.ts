import { queryField, nonNull } from 'nexus'

export const ProfileFindUniqueQuery = queryField('findUniqueProfile', {
  type: 'Profile',
  args: {
    where: nonNull('ProfileWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.profile.findUnique({
      where,
      ...select,
    })
  },
})
