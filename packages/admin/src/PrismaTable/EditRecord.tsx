import { useLazyQuery } from '@apollo/client';
import type React from 'react';
import { useState } from 'react';
import type { Option } from '../components/Select';
import Spinner from '../components/Spinner';
import { classNames } from '../components/css';
import { useTableContext } from './Context';
import Form from './Form';
import { queryDocument } from './QueryDocument';
import DynamicTable from './dynamicTable';

interface EditRecordProps {
  model: string;
  update: any;
  view?: any;
  onSave: () => void;
}

const EditRecord: React.FC<EditRecordProps> = ({ model, update, onSave, view }) => {
  const {
    schema: { models },
    push,
    pagesPath,
    onCancelUpdate,
    actions,
  } = useTableContext();
  const modelObject = models.find((item) => item.id === model);
  const isField = modelObject?.fields.find((field) => field.name === modelObject?.idField);
  const [getRecord, { data, loading, error, refetch }] = useLazyQuery(queryDocument(models, model, true, true), {
    variables: modelObject
      ? {
          where: {
            [modelObject.idField]: isField?.type === 'String' ? update || view : Number.parseInt(update || view, 10),
          },
        }
      : undefined,
    fetchPolicy: 'network-only',
  });

  const tabs = modelObject?.fields.filter((field) => field.kind === 'object' && field.list && field.read);
  const options: Option[] = tabs?.map((t) => ({ id: t.id, name: t.title })) || [];
  const [option, setOption] = useState(options[0]);
  const relationField = tabs?.find((t) => t.id === option.id);

  if (modelObject && !data && !loading && !error) {
    getRecord();
  }

  const record = data ? data[`findUnique${model}`] : {};

  if (
    (!loading && data && !data[`findUnique${model}`] && modelObject) ||
    (modelObject && !modelObject.update && !actions && !view) ||
    (actions && !actions.includes('update') && !view)
  )
    push(pagesPath + model);

  const onUpdateCancel =
    onCancelUpdate ||
    (({ model }: { model: string }) => {
      push(pagesPath + model);
    });

  return loading || !modelObject || !data ? (
    <Spinner />
  ) : (
    <div className="flex flex-wrap w-full">
      <div className="w-full">
        <Form
          model={model}
          action={view ? 'view' : 'update'}
          data={record}
          onCancel={() => onUpdateCancel({ model })}
          onSave={onSave}
        />
      </div>
      {!!tabs?.length && !!Object.keys(record).length && (
        <div className="w-full">
          {relationField && (
            <DynamicTable
              headerActions={
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex overflow-auto" aria-label="Tabs">
                    {options.map((item) => (
                      <a
                        key={item.id}
                        onClick={() => setOption(item)}
                        className={classNames(
                          item.id === option.id
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                          'whitespace-nowrap p-4 border-b-2 font-medium text-sm cursor-pointer',
                        )}
                        aria-current={item.id === option.id ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
              }
              key={relationField.type}
              model={relationField.type}
              inEdit
              filter={{ [model]: record[modelObject.idField] }}
              parent={{
                name: model,
                value: record,
                field: relationField.name,
                updateRecord: async () => {
                  await refetch();
                },
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default EditRecord;
