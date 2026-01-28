import React from 'react';
import type { ContextProps } from '../index';
import defaultLanguage from './language';

export const defaultSettings = {
  pagesPath: '/admin/models/',
  pageSize: 10,
  pageSizeOptions: [10, 20, 30, 40, 50, 100],
  paginationOptions: 4,
  push: typeof window !== 'undefined' ? window.location.replace : () => '',
  query: {},
};

const initialContext: ContextProps = {
  dir: 'ltr',
  lang: defaultLanguage,
  schema: {
    models: [],
    enums: [],
  },
  ...defaultSettings,
};

export const TableContext = React.createContext<ContextProps>(initialContext);

export const useTableContext = () => {
  const context = React.useContext(TableContext);
  if (!context) {
    throw new Error('useTableContext must be used within a TableContext');
  }
  return context;
};
