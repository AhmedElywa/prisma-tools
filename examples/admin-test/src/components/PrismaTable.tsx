'use client';

import React from 'react';
import { PrismaTable } from '@paljs/admin';
import { useRouter, useSearchParams } from 'next/navigation';

interface TableProps {
  model: string;
}

const Table: React.FC<TableProps> = ({ model }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Convert searchParams to object
  const query = Object.fromEntries(searchParams.entries());

  return (
    <PrismaTable
      model={model}
      push={router.push}
      query={query}
      pagesPath="/admin/"
    />
  );
};

export default Table;
