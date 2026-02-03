import { mutationField, nonNull } from 'nexus';

export const BrandDeleteManyMutation = mutationField('deleteManyBrand', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'BrandWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.brand.deleteMany({ ...args } as any);
  },
});
