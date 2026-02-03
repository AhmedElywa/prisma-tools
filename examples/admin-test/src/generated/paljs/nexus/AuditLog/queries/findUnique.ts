import { queryField, nonNull } from 'nexus';

export const AuditLogFindUniqueQuery = queryField('findUniqueAuditLog', {
  type: 'AuditLog',
  args: {
    where: nonNull('AuditLogWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.auditLog.findUnique({
      where,
      ...select,
    });
  },
});
