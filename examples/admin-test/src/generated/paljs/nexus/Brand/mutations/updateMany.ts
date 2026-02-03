import { mutationField, nonNull } from 'nexus';

export const BrandUpdateManyMutation = mutationField('updateManyBrand', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('BrandUpdateManyMutationInput'),
    where: 'BrandWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.brand.updateMany({ ...args } as any);
  },
});
