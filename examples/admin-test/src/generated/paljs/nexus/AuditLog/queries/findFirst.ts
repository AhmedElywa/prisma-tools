import { queryField, list } from 'nexus';

export const AuditLogFindFirstQuery = queryField('findFirstAuditLog', {
  type: 'AuditLog',
  args: {
    where: 'AuditLogWhereInput',
    orderBy: list('AuditLogOrderByWithRelationInput'),
    cursor: 'AuditLogWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'AuditLogScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.auditLog.findFirst({
      ...args,
      ...select,
    });
  },
});
