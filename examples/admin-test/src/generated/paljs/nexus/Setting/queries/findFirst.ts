import { queryField, list } from 'nexus';

export const SettingFindFirstQuery = queryField('findFirstSetting', {
  type: 'Setting',
  args: {
    where: 'SettingWhereInput',
    orderBy: list('SettingOrderByWithRelationInput'),
    cursor: 'SettingWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'SettingScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.setting.findFirst({
      ...args,
      ...select,
    });
  },
});
