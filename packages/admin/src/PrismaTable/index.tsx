import { useQuery } from '@apollo/client';
import type React from 'react';

import { GET_SCHEMA } from '../SchemaQueries';
import Spinner from '../components/Spinner';
import type { ContextProps, ModelTableProps } from '../types';
import { TableContext, defaultSettings, useTableContext } from './Context';
import DynamicTable from './dynamicTable';
import defaultLanguage from './language';

const PrismaTable: React.FC<ModelTableProps> = ({ children, language, model, ...rest }) => {
  const { data, loading } = useQuery<{ getSchema: ContextProps['schema'] }>(GET_SCHEMA);
  if (loading) return <Spinner />;
  const mergedLanguage = { ...defaultLanguage, ...language };
  return (
    <TableContext.Provider
      value={{
        schema: data?.getSchema ?? {
          models: [],
          enums: [],
        },
        ...({ ...defaultSettings, ...rest } as any),
        lang: mergedLanguage,
      }}
    >
      <DynamicTable model={model}>{children}</DynamicTable>
    </TableContext.Provider>
  );
};

export { PrismaTable, TableContext, useTableContext };
export * from './Form/Inputs';
export * from './Table/Filters';
