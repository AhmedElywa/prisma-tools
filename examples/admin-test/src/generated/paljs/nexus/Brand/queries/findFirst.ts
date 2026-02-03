import { queryField, list } from 'nexus';

export const BrandFindFirstQuery = queryField('findFirstBrand', {
  type: 'Brand',
  args: {
    where: 'BrandWhereInput',
    orderBy: list('BrandOrderByWithRelationInput'),
    cursor: 'BrandWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'BrandScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.brand.findFirst({
      ...args,
      ...select,
    });
  },
});
