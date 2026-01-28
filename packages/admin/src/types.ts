import type { ColumnDef } from '@tanstack/react-table';
import type React from 'react';
import type { RegisterOptions } from 'react-hook-form';
import type { OrderBy } from './PrismaTable/Table/useFilterAndSort';
import type { DynamicTableProps } from './PrismaTable/dynamicTable';
import type Language from './PrismaTable/language';

// Type definitions previously from @paljs/types
export interface AdminSchemaField {
  id: string;
  name: string;
  title: string;
  type: string;
  list: boolean;
  kind: 'scalar' | 'object' | 'enum';
  read: boolean;
  required: boolean;
  isId: boolean;
  unique: boolean;
  create: boolean;
  order: number;
  update: boolean;
  sort: boolean;
  filter: boolean;
  editor?: boolean;
  upload?: boolean;
  relationField?: boolean;
}

export interface AdminSchemaModel {
  id: string;
  name: string;
  create: boolean;
  delete: boolean;
  update: boolean;
  idField: string;
  displayFields: string[];
  fields: AdminSchemaField[];
}

export interface AdminSchemaEnum {
  name: string;
  fields: string[];
}

export interface AdminSchema {
  models: AdminSchemaModel[];
  enums: AdminSchemaEnum[];
}

// Generic type for Prisma model data
export type PrismaRecord = Record<string, unknown>;

// Type for column definitions
export type Columns = Record<
  'boolean' | 'number' | 'enum' | 'DateTime' | 'object' | 'string' | 'list' | 'json',
  ColumnDef<PrismaRecord>
>;

// Type for field values based on field kind and type
export type FieldValue = any;

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
export type CreateSaveHandler = (args: {
  model: string;
  setCreateModal: (value: boolean) => void;
  refetchTable: () => void;
}) => void | Promise<void>;
export type UpdateSaveHandler = (args: { model: string; refetchTable: () => void }) => void | Promise<void>;
export type CancelHandler = (args: { model: string; setCreateModal?: (value: boolean) => void }) => void;
export type ValueHandler = (value: FieldValue, field?: AdminSchemaField, isCreate?: boolean) => FieldValue;
export type SelectHandler = (values: string[]) => void;

interface SameProps {
  actions?: ('create' | 'update' | 'delete')[];
  useSet?: boolean;
  tableColumns?: GetColumnsPartial;
  formInputs?: Partial<FormInputs>;
  inputValidation?: Record<string, Record<string, RegisterOptions>>;
  push: (url: string) => void;
  query: QueryParams;
  onSelect?: SelectHandler;
  actionButtons?: ActionButton;
  onCancelCreate?: CancelHandler;
  onSaveCreate?: CreateSaveHandler;
  onSaveUpdate?: UpdateSaveHandler;
  onCancelUpdate?: CancelHandler;
  defaultOrderBy?: Record<string, OrderBy[]>;
  valueHandler?: ValueHandler;
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
    data?: any;
    loading: boolean;
    error?: Error;
    getData: () => void;
  };
}) => React.ReactNode;

export interface ModelTableProps extends SameProps, Partial<Omit<RequireContextProps, 'lang'>> {
  model: string;
  children?: DynamicTableChildrenFunction;
  language?: Partial<typeof Language>;
}
