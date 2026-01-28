import { mutationField, nonNull } from 'nexus'

export const TagCreateOneMutation = mutationField('createOneTag', {
  type: nonNull('Tag'),
  args: {
    data: nonNull('TagCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.tag.create({
      data,
      ...select,
    })
  },
})
