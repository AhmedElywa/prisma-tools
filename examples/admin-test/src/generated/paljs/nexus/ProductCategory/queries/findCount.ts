import { queryField, nonNull, list } from 'nexus';

export const ProductCategoryFindCountQuery = queryField('findCountProductCategory', {
  type: nonNull('Int'),
  args: {
    where: 'ProductCategoryWhereInput',
    orderBy: list('ProductCategoryOrderByWithRelationInput'),
    cursor: 'ProductCategoryWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'ProductCategoryScalarFieldEnum',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.productCategory.count({ ...args } as any);
  },
});
