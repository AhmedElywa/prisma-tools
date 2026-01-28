import { useMutation, useQuery } from '@apollo/client';
import { DndContext, type DragEndEvent, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Bars3Icon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import React, { useRef, useState } from 'react';
import { GET_SCHEMA, UPDATE_MODEL } from '../SchemaQueries';
import Select from '../components/Select';
import { classNames } from '../components/css';
import { useDndSensors } from '../lib/dnd';
import type { AdminSchemaField, AdminSchemaModel, ContextProps } from '../types';
import UpdateField from './UpdateField';
import UpdateModel from './UpdateModel';

const defaultLanguage = {
  dir: 'ltr',
  header: 'Update models Tables',
  dbName: 'Database Name',
  displayName: 'Display Name',
  modelName: 'Model Name',
  idField: 'Id Field',
  displayFields: 'Display Fields',
  fieldName: 'Field Name',
  actions: 'Actions',
  create: 'Create',
  update: 'Update',
  delete: 'Delete',
  read: 'Read',
  filter: 'Filter',
  sort: 'Sort',
  editor: 'Editor',
  upload: 'Upload',
  tableView: 'Table View',
  inputType: 'Input Type',
};

export type SettingLanguage = typeof defaultLanguage;

// Error boundary for drag and drop operations
class DragDropErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Drag and drop error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-red-600 p-4">Something went wrong with drag and drop. Please refresh the page.</div>;
    }

    return this.props.children;
  }
}

interface SortableItemProps {
  field: AdminSchemaField;
  model: string;
  isOpen: boolean;
  onToggle: () => void;
  language: SettingLanguage;
  accordionRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
  index: number;
  dir: string;
}

const SortableItem: React.FC<SortableItemProps> = ({
  field,
  model,
  isOpen,
  onToggle,
  language,
  accordionRef,
  index,
  dir,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: field.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <li ref={setNodeRef} style={style} className="flex flex-col w-full bg-white relative mb-2 rounded-md shadow-lg">
      <div
        className={classNames(
          'flex items-center justify-between text-gray-700 w-full px-8 py-6 cursor-pointer',
          isOpen ? 'border-b border-gray-200' : '',
        )}
        onClick={onToggle}
      >
        <div className={classNames('flex items-center space-x-2.5', dir === 'rtl' ? 'space-x-reverse' : '')}>
          <button
            type="button"
            {...attributes}
            {...listeners}
            className="cursor-grab"
            aria-label="Drag to reorder"
            aria-pressed={isDragging}
          >
            <Bars3Icon className="h-5 w-5 text-blue-700" />
          </button>
          <span>{field.title}</span>
        </div>
        {isOpen ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
      </div>

      <div
        ref={(r) => {
          accordionRef.current[index] = r;
        }}
        className="relative overflow-hidden transition-all max-h-0 duration-500"
        style={
          isOpen
            ? {
                maxHeight: `${accordionRef.current[index]?.scrollHeight}px`,
              }
            : {}
        }
      >
        <div className="p-6">
          <UpdateField field={field} model={model} language={language} />
        </div>
      </div>
    </li>
  );
};

export const Settings: React.FC<{
  language?: Partial<SettingLanguage>;
}> = ({ language }) => {
  const { data } = useQuery<{ getSchema: ContextProps['schema'] }>(GET_SCHEMA);
  const models = data?.getSchema.models ?? [];
  const [updateModel] = useMutation(UPDATE_MODEL);
  const [currentModel, setCurrentModel] = useState<AdminSchemaModel>();
  const dataRef = useRef(models);
  const accordionRef = useRef<(HTMLDivElement | null)[]>([]);
  const [openedField, setOpenedField] = useState('');

  const sensors = useDndSensors();

  if (!currentModel && models.length > 0) setCurrentModel(models[0]);

  if (dataRef.current !== models && models.length > 0 && currentModel) {
    dataRef.current = models;
    setCurrentModel(models.find((model) => model.id === currentModel.id));
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id && currentModel && over) {
      const sortedFields = currentModel.fields.slice().sort((a, b) => a.order - b.order);
      const oldIndex = sortedFields.findIndex((field) => field.id === active.id);
      const newIndex = sortedFields.findIndex((field) => field.id === over?.id);

      const newFieldsOrder = arrayMove(sortedFields, oldIndex, newIndex).map((field, index) => {
        const fieldCopy: any = { ...field };
        delete fieldCopy.__typename;
        return { ...fieldCopy, order: index + 1 };
      });

      updateModel({
        variables: {
          id: currentModel.id,
          data: {
            fields: newFieldsOrder,
          },
        },
      });

      setCurrentModel({
        ...currentModel,
        fields: newFieldsOrder,
      });
    }
  };

  const mergeLanguage = { ...defaultLanguage, ...language };
  const dir = mergeLanguage.dir;
  const sortedFields = currentModel?.fields.slice().sort((a, b) => a.order - b.order) || [];

  return (
    <div className="flex w-full flex-wrap">
      <div className={classNames('lg:w-1/2 w-full', dir === 'rtl' ? 'lg:pl-4' : 'lg:pr-4')}>
        <div className="flex flex-col bg-white rounded shadow-lg text-gray-800 mb-5">
          <header className="p-4 rounded-t border-b border-gray-100">{mergeLanguage.header}</header>
          <div className="relative p-4 flex-auto overflow-auto" style={{ overflow: 'visible' }}>
            <div className="w-full" style={{ marginBottom: '20px' }}>
              {currentModel && (
                <Select
                  value={{ id: currentModel.id, name: currentModel.name }}
                  onChange={(option: any) => setCurrentModel(models.find((model) => model.id === option.id))}
                  options={models.map((model) => ({
                    id: model.id,
                    name: model.name,
                  }))}
                  dir={dir}
                  popupFullWidth
                />
              )}
            </div>
            <div className="flex w-full flex-wrap space-y-4">
              {currentModel && <UpdateModel models={models} modelObject={currentModel} language={mergeLanguage} />}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        {currentModel && (
          <DragDropErrorBoundary>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={sortedFields.map((f) => f.id)} strategy={verticalListSortingStrategy}>
                <ul className="shadow-box">
                  {sortedFields.map((field, index) => (
                    <SortableItem
                      key={field.id}
                      field={field}
                      model={currentModel.id}
                      isOpen={field.id === openedField}
                      onToggle={() => setOpenedField(field.id === openedField ? '' : field.id)}
                      language={mergeLanguage}
                      accordionRef={accordionRef}
                      index={index}
                      dir={dir}
                    />
                  ))}
                </ul>
              </SortableContext>
            </DndContext>
          </DragDropErrorBoundary>
        )}
      </div>
    </div>
  );
};
