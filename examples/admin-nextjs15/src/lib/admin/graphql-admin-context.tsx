'use client';

import React, { createContext, useContext } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { AdminSchemaModel } from '@paljs/admin';
import { queryDocument, mutationDocument } from '@paljs/admin';

interface AdminContextType {
  models: AdminSchemaModel[];
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children, models }: { children: React.ReactNode; models: AdminSchemaModel[] }) {
  return <AdminContext.Provider value={{ models }}>{children}</AdminContext.Provider>;
}

export function useAdminContext() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdminContext must be used within AdminProvider');
  }
  return context;
}