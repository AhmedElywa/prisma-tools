import { mutationField, nonNull } from 'nexus'

export const CategoryUpsertOneMutation = mutationField('upsertOneCategory', {
  type: nonNull('Category'),
  args: {
    where: nonNull('CategoryWhereUniqueInput'),
    create: nonNull('CategoryCreateInput'),
    update: nonNull('CategoryUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.category.upsert({
      ...args,
      ...select,
    })
  },
})
