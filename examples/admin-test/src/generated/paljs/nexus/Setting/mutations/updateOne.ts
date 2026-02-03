import { mutationField, nonNull } from 'nexus';

export const SettingUpdateOneMutation = mutationField('updateOneSetting', {
  type: nonNull('Setting'),
  args: {
    data: nonNull('SettingUpdateInput'),
    where: nonNull('SettingWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.setting.update({
      where,
      data,
      ...select,
    });
  },
});
