import type { CellContext, ColumnDef } from '@tanstack/react-table';
import { buttonClasses, classNames } from '../../components/css';
import type { AdminSchemaField, AdminSchemaModel, Columns, GetColumnsPartial, PrismaRecord } from '../../types';
import { getDisplayName } from './utils';

export interface ContextValues {
  lang: any;
  schema: { models: AdminSchemaModel[] };
  push: (path: string) => void;
  pagesPath: string;
}

const columnsObject = (
  field: AdminSchemaField,
  model: AdminSchemaModel | undefined,
  context: ContextValues,
): Columns => ({
  boolean: {
    header: field.title,
    accessorKey: field.name,
    enableColumnFilter: field.filter && !field.list,
    enableSorting: field.sort,
    cell: ({ getValue }: CellContext<PrismaRecord, unknown>) => {
      const value = getValue() as boolean | boolean[];
      return field.list ? (value as boolean[]).join(',') : value ? context.lang.yes : context.lang.no;
    },
  },
  number: {
    header: field.title,
    accessorKey: field.name,
    enableColumnFilter: field.filter && !field.list,
    enableSorting: field.sort,
    cell: ({ getValue }: CellContext<PrismaRecord, unknown>) => {
      const value = getValue() as number | number[];
      return field.list ? (value as number[]).join(',') : value;
    },
  },
  enum: {
    header: field.title,
    accessorKey: field.name,
    enableColumnFilter: field.filter && !field.list,
    enableSorting: field.sort,
    cell: ({ getValue }: CellContext<PrismaRecord, unknown>) => {
      const value = getValue() as string | string[];
      return field.list ? (value as string[]).join(',') : value;
    },
  },
  DateTime: {
    header: field.title,
    accessorKey: field.name,
    minSize: 200,
    enableColumnFilter: false,
    enableSorting: field.sort,
    cell: ({ getValue }: CellContext<PrismaRecord, unknown>) => {
      const value = getValue() as string;
      return value ? new Date(value).toLocaleString() : '';
    },
  },
  object: {
    header: field.title,
    accessorKey: field.name,
    enableColumnFilter: false,
    enableSorting: false,
    cell: ({ getValue }: CellContext<PrismaRecord, unknown>) => {
      const value = getValue() as Record<string, any>;
      const objectModel = context.schema.models.find((item) => item.id === field.type);
      if (!objectModel || !value) return <></>;
      return (
        <button
          onClick={() =>
            context.push(`${context.pagesPath}${field.type}?${objectModel.idField}=${value[objectModel.idField]}`)
          }
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            padding: 0,
            textTransform: 'none',
          }}
          className={classNames(
            buttonClasses,
            'rounded-md py-2 px-4 bg-transparent text-blue-600 hover:bg-blue-100 hover:bg-opacity-25',
          )}
        >
          {getDisplayName(value, objectModel)}
        </button>
      );
    },
  },
  string: {
    header: field.title,
    accessorKey: field.name,
    enableColumnFilter: field.filter && !field.list,
    enableSorting: field.sort,
    cell: ({ getValue }: CellContext<PrismaRecord, unknown>) => {
      const value = getValue() as string | string[];
      return field.list ? (value as string[]).join(',') : value;
    },
  },
  json: {
    header: field.title,
    accessorKey: field.name,
    enableColumnFilter: false,
    enableSorting: false,
    cell: ({ getValue }: CellContext<PrismaRecord, unknown>) => {
      const value = getValue();
      return value ? JSON.stringify(value) : value;
    },
  },
  list: {
    header: field.title,
    accessorKey: field.name,
    enableColumnFilter: false,
    enableSorting: false,
    cell: ({ row }: CellContext<PrismaRecord, unknown>) => {
      if (!model) return <></>;
      const id = row.original[model.idField];
      return (
        <button
          className={classNames(
            buttonClasses,
            'rounded-md py-2 px-4 bg-transparent text-blue-600 hover:bg-blue-100 hover:bg-opacity-25',
          )}
          onClick={() => context.push(`${context.pagesPath}${field.type}?${model.id}=${id}`)}
        >
          {context.lang.show}
        </button>
      );
    },
  },
});

export const columns = (
  model?: AdminSchemaModel,
  customColumns?: GetColumnsPartial,
  context?: ContextValues,
): ColumnDef<PrismaRecord>[] => {
  if (!context) {
    throw new Error('Context is required for columns function');
  }

  const getColumn = (field: AdminSchemaField) => {
    const baseColumns = columnsObject(field, model, context);
    return typeof customColumns !== 'undefined'
      ? {
          ...baseColumns,
          ...customColumns(field, model),
        }
      : baseColumns;
  };

  return model
    ? model.fields
        .slice()
        .sort((a, b) => a.order - b.order)
        .filter((field) => field.read)
        .map((field) => {
          const column = getColumn(field);
          if (field.list && field.kind === 'object') {
            return column.list;
          }
          if (field.kind !== 'scalar') {
            return column[field.kind] || column.string;
          }
          switch (field.type) {
            case 'Int':
            case 'Float':
              return column.number || column.string;
            case 'Boolean':
              return column.boolean || column.string;
            case 'DateTime':
              return column.DateTime || column.string;
            case 'String':
              return column.string;
            case 'Json':
              return column.json || column.string;
            default:
              return column.string;
          }
        })
    : [];
};
