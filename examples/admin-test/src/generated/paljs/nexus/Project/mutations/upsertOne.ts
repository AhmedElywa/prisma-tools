import { mutationField, nonNull } from 'nexus';

export const ProjectUpsertOneMutation = mutationField('upsertOneProject', {
  type: nonNull('Project'),
  args: {
    where: nonNull('ProjectWhereUniqueInput'),
    create: nonNull('ProjectCreateInput'),
    update: nonNull('ProjectUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.project.upsert({
      ...args,
      ...select,
    });
  },
});
