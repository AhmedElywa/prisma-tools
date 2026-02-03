import { mutationField, nonNull } from 'nexus';

export const CategoryDeleteManyMutation = mutationField('deleteManyCategory', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'CategoryWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.category.deleteMany({ ...args } as any);
  },
});
