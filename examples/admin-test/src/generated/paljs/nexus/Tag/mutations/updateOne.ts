import { mutationField, nonNull } from 'nexus';

export const TagUpdateOneMutation = mutationField('updateOneTag', {
  type: nonNull('Tag'),
  args: {
    data: nonNull('TagUpdateInput'),
    where: nonNull('TagWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.tag.update({
      where,
      data,
      ...select,
    });
  },
});
