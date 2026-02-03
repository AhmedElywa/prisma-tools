import React from 'react';
import PrismaTable from 'components/PrismaTable';

export default function AuditLogPage() {
  return <PrismaTable model="AuditLog" />;
}
