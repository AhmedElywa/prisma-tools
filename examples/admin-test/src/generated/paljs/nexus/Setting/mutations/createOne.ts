import { mutationField, nonNull } from 'nexus';

export const SettingCreateOneMutation = mutationField('createOneSetting', {
  type: nonNull('Setting'),
  args: {
    data: nonNull('SettingCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.setting.create({
      data,
      ...select,
    });
  },
});
