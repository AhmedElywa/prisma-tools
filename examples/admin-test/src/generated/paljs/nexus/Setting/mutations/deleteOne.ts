import { mutationField, nonNull } from 'nexus';

export const SettingDeleteOneMutation = mutationField('deleteOneSetting', {
  type: 'Setting',
  args: {
    where: nonNull('SettingWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.setting.delete({
      where,
      ...select,
    });
  },
});
