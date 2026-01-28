import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { EyeIcon, PencilSquareIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassCircleIcon,
} from '@heroicons/react/24/solid';
import {
  type ColumnFiltersState,
  type PaginationState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React, { useContext, useMemo, useState } from 'react';
import Checkbox from '../../components/Checkbox';
import Spinner from '../../components/Spinner';
import { buttonClasses, classNames } from '../../components/css';
import type { TableParentRecord } from '../../types';
import { TableContext } from '../Context';
import { type ContextValues, columns } from './Columns';
import { Filter } from './Filters';
import { ListConnect } from './ListConnect';
import { initPages } from './utils';

interface TableProps {
  getData: () => void;
  inEdit?: boolean;
  model: string;
  data: any[];
  fetchMore: (pageSize: number, pageIndex: number) => void;
  loading: boolean;
  pageCount: number;
  headerActions?: any;
  initialFilter: { id: string; value: any }[];
  sortByHandler: (sortBy: { id: string; desc: boolean }[]) => void;
  filterHandler: (filters: { id: string; value: any }[]) => void;
  onAction: (action: 'create' | 'delete' | 'connect', value?: unknown) => void;
  connect?: any;
  parent?: TableParentRecord;
}

export const Table: React.FC<TableProps> = ({
  initialFilter,
  model: modelName,
  data,
  fetchMore,
  loading,
  pageCount: controlledPageCount,
  sortByHandler,
  filterHandler,
  onAction,
  inEdit,
  connect,
  parent,
  getData,
  headerActions,
}) => {
  const {
    schema: { models },
    push,
    pagesPath,
    pageSize: defaultPageSize,
    pageSizeOptions,
    paginationOptions,
    tableColumns,
    onSelect,
    actions: userActions,
    actionButtons,
    lang,
    dir,
  } = useContext(TableContext);
  const model = models.find((item) => item.id === modelName);

  const contextValues: ContextValues = useMemo(
    () => ({
      lang,
      schema: { models },
      push,
      pagesPath,
    }),
    [lang, models, push, pagesPath],
  );

  const columnList = useMemo(() => columns(model, tableColumns, contextValues), [model, tableColumns, contextValues]);

  // State for pagination
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: defaultPageSize,
  });

  // State for sorting
  const [sorting, setSorting] = useState<SortingState>([]);

  // State for filtering (not used directly by the table, but managed externally)
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    initialFilter.map((f) => ({ id: f.id, value: f.value })),
  );

  const tableInstance = useReactTable({
    data,
    columns: columnList,
    state: {
      pagination,
      sorting,
      columnFilters,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
    pageCount: controlledPageCount,
  });

  const [selected, setSelected] = useState<any[]>([]);
  const [filters, setFilters] = useState(initialFilter);
  // Listen for changes in pagination and use the state to fetch our new data

  const onSelectHandler = (state: boolean, id?: any) => {
    let newValues: any[];
    if (!state && !id) {
      newValues = [];
      setSelected(newValues);
    } else if (state && !id && model) {
      newValues = data.map((row) => row[model.idField]);
      setSelected(newValues);
    } else if (!state && id) {
      newValues = selected.filter((value) => value !== id);
      setSelected(newValues);
    } else {
      newValues = [...selected, id];
      setSelected(newValues);
    }
    void onSelect?.(newValues);
  };

  React.useEffect(() => {
    fetchMore(pagination.pageSize, pagination.pageIndex);
  }, [fetchMore, pagination.pageIndex, pagination.pageSize]);

  React.useEffect(() => {
    sortByHandler(sorting.map((s) => ({ id: s.id, desc: s.desc })));
  }, [sorting, sortByHandler]);

  const setAllFilters = (filters: { id: string; value: any }[]) => {
    filterHandler(filters);
    setFilters(filters);
  };

  const actions = userActions
    ? {
        create: userActions.includes('create'),
        update: userActions.includes('update'),
        delete: userActions.includes('delete'),
      }
    : {
        create: model?.create,
        update: model?.update,
        delete: model?.delete,
      };

  const ActionButtons = {
    Add: () => (
      <button
        type="button"
        className={classNames(
          buttonClasses,
          ' h-full rounded-md py-2 px-2 bg-blue-500 text-white active:bg-blue-600 shadow hover:bg-blue-800',
        )}
        onClick={() => onAction('create')}
      >
        <PlusIcon className="h-5 w-5" />
      </button>
    ),
    Update: ({ id }: { id: any }) => (
      <button
        type="button"
        className={classNames(buttonClasses, 'bg-transparent text-blue-600 hover:bg-blue-100 hover:bg-opacity-25')}
        onClick={() => model && push(`${pagesPath}${modelName}?${actions.update ? 'update' : 'view'}=${id}`)}
      >
        {actions.update ? <PencilSquareIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
      </button>
    ),
    Delete: ({ id }: { id: any }) => (
      <button
        type="button"
        className={classNames(buttonClasses, 'bg-transparent text-red-600 hover:bg-red-100 hover:bg-opacity-25')}
        onClick={() => {
          const confirm = window.confirm(lang.deleteConfirm);
          if (confirm && model) onAction('delete', id);
        }}
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    ),
    ...actionButtons,
  };

  const isSelect = onSelect && !inEdit;

  const hasFilters = filters.length > 0;

  const parentModel = models.find((item) => item.id === parent?.name);
  const fieldUpdate = parentModel?.fields.find((f) => f.name === parent?.field)?.update;
  // Render the UI for your table

  const thClasses =
    'px-4 py-2 text-center text-sm font-medium text-gray-500 whitespace-nowrap tracking-wider overflow-hidden overflow-ellipsis';
  const tdClasses = 'px-4 py-2 text-center whitespace-nowrap overflow-hidden overflow-ellipsis text-gray-500';
  return (
    <>
      <div className="flex flex-col rounded-lg shadow bg-white">
        {headerActions}
        <div className="w-full inline-flex space-x-4 my-4 rtl:pr-4 rtl:space-x-reverse ltr:pl-4">
          {actions.create && !connect && (
            <div>
              <ActionButtons.Add />
            </div>
          )}
          <Popover className="relative w-full">
            <PopoverButton
              className={classNames(
                buttonClasses,
                'flex items-center rounded-md py-2 px-2 bg-blue-500 text-white active:bg-blue-600 shadow hover:bg-blue-800',
              )}
            >
              {lang.filter}
              {!!filters.length && (
                <span className="rounded-full bg-yellow-400 px-2 rtl:mr-2 ltr:ml-2">{filters.length}</span>
              )}
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute z-10 mt-1 transition duration-200 ease-out data-[closed]:translate-y-1 data-[closed]:opacity-0"
            >
              {model && <Filter filters={filters} setAllFilters={setAllFilters} model={model} />}
            </PopoverPanel>
          </Popover>
        </div>
        <div className="overflow-hidden">
          <div className="-my-2 overflow-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden relative">
                {loading && <Spinner />}
                <table className="min-w-full divide-y divide-gray-200 border-b border-t border-gray-200">
                  <thead className="bg-gray-100">
                    {tableInstance.getHeaderGroups().map((headerGroup) => (
                      <React.Fragment key={headerGroup.id}>
                        <tr>
                          {isSelect && (
                            <th scope="col" className={thClasses}>
                              <Checkbox
                                onChange={(e) => onSelectHandler(e.target.checked)}
                                checked={data.length > 0 && selected.length === data.length}
                                indeterminate={selected.length > 0 && selected.length !== data.length}
                              />
                            </th>
                          )}
                          <th scope="col" className={thClasses} colSpan={2}>
                            {lang.actions}
                          </th>
                          {fieldUpdate && parent && (
                            <th scope="col" className={thClasses}>
                              <button
                                className={classNames(
                                  buttonClasses,
                                  'bg-transparent text-blue-600 hover:bg-blue-100 hover:bg-opacity-25',
                                )}
                                onClick={() => {
                                  if (hasFilters) {
                                    setAllFilters([]);
                                  } else {
                                    setAllFilters(initialFilter);
                                  }
                                }}
                              >
                                {hasFilters ? lang.viewAll : lang.viewRelated}
                              </button>
                            </th>
                          )}
                          {headerGroup.headers.map((header) => {
                            return (
                              <th
                                scope="col"
                                className={thClasses}
                                key={header.id}
                                {...(header.column.getCanSort()
                                  ? {
                                      onClick: header.column.getToggleSortingHandler(),
                                      style: { cursor: 'pointer' },
                                    }
                                  : {})}
                              >
                                <div className="flex justify-center items-center">
                                  {header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.header, header.getContext())}
                                  <span>
                                    {header.column.getIsSorted() ? (
                                      header.column.getIsSorted() === 'desc' ? (
                                        <ArrowDownIcon className="h-5 w-5" />
                                      ) : (
                                        <ArrowUpIcon className="h-5 w-5" />
                                      )
                                    ) : (
                                      ''
                                    )}
                                  </span>
                                  {filters.filter(Boolean).find((item) => item.id === header.column.id) ? (
                                    <MagnifyingGlassCircleIcon className="h-5 w-5 text-green-500" />
                                  ) : (
                                    ''
                                  )}
                                </div>
                              </th>
                            );
                          })}
                        </tr>
                      </React.Fragment>
                    ))}
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {tableInstance.getRowModel().rows.map((row) => {
                      return (
                        <tr className="hover:bg-gray-100 even:bg-gray-50" key={row.id}>
                          {isSelect && (
                            <td className={tdClasses}>
                              <Checkbox
                                onChange={(e) =>
                                  onSelectHandler(e.target.checked, model && row.original[model.idField])
                                }
                                checked={!!(model && selected.includes(row.original[model.idField]))}
                              />
                            </td>
                          )}
                          {connect && (
                            <td colSpan={2} className={tdClasses}>
                              <button
                                type="button"
                                className={classNames(
                                  buttonClasses,
                                  'bg-transparent text-green-600 hover:bg-green-100 hover:bg-opacity-25',
                                )}
                                disabled={model && connect[model.idField] === row.original[model.idField]}
                                onClick={() =>
                                  onAction(
                                    'connect',
                                    data.find((item) => model && item[model.idField] === row.original[model.idField]),
                                  )
                                }
                              >
                                {model && connect[model.idField] === row.original[model.idField]
                                  ? lang.connected
                                  : lang.connect}
                              </button>
                            </td>
                          )}
                          {!connect && (
                            <td
                              className={tdClasses}
                              title={actions.update ? lang.editRow : lang.viewRow}
                              colSpan={actions.delete ? 1 : 2}
                            >
                              <ActionButtons.Update id={model ? row.original[model.idField] : 0} />
                            </td>
                          )}
                          {actions.delete && !connect && (
                            <td className={tdClasses} title={lang.deleteRow} colSpan={1}>
                              <ActionButtons.Delete id={model ? row.original[model.idField] : 0} />
                            </td>
                          )}
                          {parent && model && fieldUpdate && (
                            <ListConnect getData={getData} parent={parent} row={row} model={model} />
                          )}
                          {row.getVisibleCells().map((cell) => {
                            return (
                              <td style={{ maxWidth: '9rem' }} className={tdClasses} key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                    <tr>
                      <td className={tdClasses} colSpan={10000}>
                        {lang.showing} {tableInstance.getRowModel().rows.length} {lang.of} ~
                        {controlledPageCount * pagination.pageSize} {lang.results}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames('flex flex-wrap md:justify-between justify-center w-full', tdClasses)}>
          <nav
            className="w-full md:w-auto  mb-4 md:mb-0 inline-flex -space-x-px rtl:space-x-reverse"
            aria-label="Pagination"
          >
            <button
              type="button"
              onClick={() => tableInstance.setPageIndex(0)}
              disabled={!tableInstance.getCanPreviousPage()}
              className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rtl:rounded-r-md ltr:rounded-l-md"
            >
              <ChevronDoubleRightIcon className={classNames('h-4 w-4', dir === 'rtl' ? '' : 'transform rotate-180')} />
            </button>
            <button
              type="button"
              onClick={() => tableInstance.previousPage()}
              disabled={!tableInstance.getCanPreviousPage()}
              className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <ChevronRightIcon className="h-4 w-4 ltr:transform ltr:rotate-180" />
            </button>
            {initPages(tableInstance.getPageCount(), pagination.pageIndex + 1, paginationOptions).map((item) => (
              <button
                type="button"
                className={classNames(
                  item === pagination.pageIndex + 1
                    ? 'bg-blue-500 text-white hover:bg-blue-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100',
                  'relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium',
                )}
                key={item}
                onClick={() => tableInstance.setPageIndex(item - 1)}
              >
                {item}
              </button>
            ))}
            <button
              type="button"
              onClick={() => tableInstance.nextPage()}
              disabled={!tableInstance.getCanNextPage()}
              className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <ChevronLeftIcon className="h-4 w-4 ltr:transform ltr:rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => tableInstance.setPageIndex(tableInstance.getPageCount() - 1)}
              disabled={!tableInstance.getCanNextPage()}
              className={classNames(
                'relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50',
                dir === 'rtl' ? 'rounded-l-md' : 'rounded-r-md',
              )}
            >
              <ChevronDoubleLeftIcon className={classNames('h-4 w-4', dir === 'rtl' ? '' : 'transform rotate-180')} />
            </button>
          </nav>
          <div className="inline-flex justify-center -space-x-px w-full md:w-auto rtl:space-x-reverse">
            {pageSizeOptions.map((item, index) => (
              <button
                type="button"
                key={index}
                className={classNames(
                  index === 0
                    ? 'rtl:rounded-r-md ltr:rounded-l-md'
                    : index === pageSizeOptions.length - 1
                      ? 'rtl:rounded-l-md ltr:rounded-r-md'
                      : '',
                  item === pagination.pageSize
                    ? 'bg-blue-500 text-white hover:bg-blue-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100',
                  'relative inline-flex items-center px-2 py-1 border border-gray-300  text-sm font-medium',
                )}
                onClick={() => tableInstance.setPageSize(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
