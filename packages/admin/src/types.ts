import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { AdminSchema, AdminSchemaField, AdminSchemaModel } from '@paljs/types';
import Language from './PrismaTable/language';
import { DynamicTableProps } from './PrismaTable/dynamicTable';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';
import type { OrderBy } from './PrismaTable/Table/useFilterAndSort';

export type { AdminSchema, AdminSchemaField, AdminSchemaModel };

// Generic type for Prisma model data
export type PrismaRecord = Record<string, unknown>;

// Type for column definitions
export type Columns = Record<
  'boolean' | 'number' | 'enum' | 'DateTime' | 'object' | 'string' | 'list' | 'json',
  ColumnDef<PrismaRecord>
>;

// Type for field values based on field kind and type
export type FieldValue =
  | string
  | number
  | boolean
  | Date
  | null
  | undefined
  | PrismaRecord // for object relations
  | PrismaRecord[] // for list relations
  | string[] // for scalar lists
  | number[] // for number lists
  | boolean[]; // for boolean lists

export interface InputProps {
  field: AdminSchemaField;
  value: FieldValue;
  data: PrismaRecord;
  disabled: boolean;
}

export type GetColumns = (field: AdminSchemaField, model?: AdminSchemaModel) => Columns;
export type GetColumnsPartial = (field: AdminSchemaField, model?: AdminSchemaModel) => Partial<Columns>;
export type FormInputs = Record<
  'Default' | 'Editor' | 'Enum' | 'Object' | 'Date' | 'Boolean' | 'Upload',
  React.FC<InputProps>
>;

export interface ContextProps extends RequireContextProps, SameProps {
  schema: AdminSchema;
  children?: React.ReactNode;
}

interface RequireContextProps {
  pagesPath: string;
  pageSize: number;
  pageSizeOptions: number[];
  paginationOptions: number;
  lang: typeof Language;
  dir: 'rtl' | 'ltr';
}

// Type for action buttons
export type ActionButton = Record<string, React.FC<{ id: string | number }>>;

// Type for query parameters
export type QueryParams = Record<string, string | number | boolean | undefined>;

// Type for orderBy in GraphQL
export type OrderByInput = Record<string, 'asc' | 'desc'>;

// Type for handler functions
export type SaveHandler = (data: PrismaRecord) => void | Promise<void>;
export type CancelHandler = (args?: { model: string; setCreateModal?: (value: boolean) => void }) => void;
export type ValueHandler = (value: FieldValue, field?: AdminSchemaField, isCreate?: boolean) => FieldValue;
export type SelectHandler = (values: (string | number)[]) => void;

// Legacy callback types for backward compatibility
export type LegacyOnSaveCreate = (options: {
  model: string;
  setCreateModal: (state: boolean) => void;
  refetchTable: (options?: any) => void;
}) => void;

export type LegacyOnSaveUpdate = (options: { 
  model: string; 
  refetchTable: (options?: any) => void;
}) => void;

export type LegacyOnCancelUpdate = (options: { model: string }) => void;

export type LegacyValueHandler = (value: string, field?: AdminSchemaField, create?: boolean) => any;

interface SameProps {
  actions?: ('create' | 'update' | 'delete')[];
  useSet?: boolean;
  tableColumns?: GetColumnsPartial;
  formInputs?: Partial<FormInputs>;
  inputValidation?: Record<string, Record<string, RegisterOptions>>;
  push: (url: string) => void;
  query: QueryParams;
  onSelect?: SelectHandler | ((values: any[]) => void);
  actionButtons?: ActionButton | {
    Add?: React.FC;
    Update?: React.FC<{ id: any }>;
    Delete?: React.FC<{ id: any }>;
  };
  onCancelCreate?: CancelHandler;
  onSaveCreate?: SaveHandler | LegacyOnSaveCreate;
  onSaveUpdate?: SaveHandler | LegacyOnSaveUpdate;
  onCancelUpdate?: CancelHandler | LegacyOnCancelUpdate;
  defaultOrderBy?: Record<string, OrderBy[]> | Record<string, Record<string, 'asc' | 'desc' | { sort: 'asc' | 'desc'; nulls: 'last' | 'first' }>[]>;
  valueHandler?: ValueHandler | LegacyValueHandler;
}

export interface EditPageProps extends SameProps {
  model: string;
  update?: boolean;
  view?: boolean;
  create?: boolean;
}

// Type for form field errors
export interface FieldError {
  message?: string;
  type?: string;
  ref?: React.Ref<HTMLElement>;
}

export interface InputPropsWithoutForm extends Omit<InputProps, 'formState' | 'register' | 'setValue' | 'watch'> {
  name: string;
  value: FieldValue;
  error?: FieldError;
  register?: RegisterOptions;
  setValue?: (name: string, value: FieldValue) => void;
  watch?: (name: string) => FieldValue;
  defaultValue?: FieldValue;
  disabled: boolean;
}

export type QueryModel = (DynamicTableProps['parent'] | undefined)[];

// Type for table parent record update function
export type UpdateRecordFunction = () => void | Promise<void>;

export interface TableParentRecord {
  name: string;
  field: string;
  value: PrismaRecord;
  updateRecord?: UpdateRecordFunction;
}

// Type for dynamic table children render prop
export type DynamicTableChildrenFunction = (options: {
  context: ContextProps;
  query: {
    variables: {
      where: PrismaRecord;
      orderBy?: OrderByInput[];
      take: number;
      skip: number;
    };
    data?: PrismaRecord;
    loading: boolean;
    error?: Error;
    getData: () => void;
  };
}) => React.ReactNode;

export interface ModelTableProps extends Partial<Omit<RequireContextProps, 'lang'>>, SameProps {
  model: string;
  children?: DynamicTableChildrenFunction;
  language?: Partial<typeof Language>;
}
