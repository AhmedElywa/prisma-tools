import { queryField, nonNull } from 'nexus';

export const SettingFindUniqueQuery = queryField('findUniqueSetting', {
  type: 'Setting',
  args: {
    where: nonNull('SettingWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.setting.findUnique({
      where,
      ...select,
    });
  },
});
