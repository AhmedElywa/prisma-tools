import { mutationField, nonNull } from 'nexus'

export const TagUpsertOneMutation = mutationField('upsertOneTag', {
  type: nonNull('Tag'),
  args: {
    where: nonNull('TagWhereUniqueInput'),
    create: nonNull('TagCreateInput'),
    update: nonNull('TagUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.tag.upsert({
      ...args,
      ...select,
    })
  },
})
