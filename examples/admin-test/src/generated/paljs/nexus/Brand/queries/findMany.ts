import { queryField, nonNull, list } from 'nexus';

export const BrandFindManyQuery = queryField('findManyBrand', {
  type: nonNull(list(nonNull('Brand'))),
  args: {
    where: 'BrandWhereInput',
    orderBy: list('BrandOrderByWithRelationInput'),
    cursor: 'BrandWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'BrandScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.brand.findMany({
      ...args,
      ...select,
    });
  },
});
