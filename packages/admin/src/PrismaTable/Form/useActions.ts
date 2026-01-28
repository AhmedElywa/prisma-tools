import { useMutation } from '@apollo/client';
import { useContext } from 'react';
import type { AdminSchemaField, AdminSchemaModel } from '../../types';
import { TableContext } from '../Context';
import { mutationDocument } from '../QueryDocument';
import type { FormProps } from './index';

interface GetValueOptions {
  value: string;
  field?: AdminSchemaField;
  useSet?: boolean;
  useEquals?: boolean;
}

export const getValueByType = ({ value, field, useSet = true, useEquals }: GetValueOptions) => {
  if (!field) {
    return value;
  }
  if (field.type === 'Json') {
    return value ? JSON.parse(value) : field.list ? [] : {};
  }
  if (field.list) {
    if (!value) return [];
    const result: any[] = value.split(',');
    switch (field.type) {
      case 'Int':
        result.forEach((value1, index) => {
          result[index] = Number.parseInt(value1, 10);
        });
        break;
      case 'Float':
        result.forEach((value1, index) => {
          result[index] = Number.parseFloat(value1);
        });
        break;
      case 'Boolean':
        result.forEach((value1, index) => {
          result[index] = value1 === 'true';
        });
        break;
    }
    return result;
  } else {
    const result = ['BigInt', 'Int'].includes(field.type)
      ? Number.parseInt(value, 10)
      : ['Float', 'Decimal'].includes(field.type)
        ? Number.parseFloat(value)
        : value;
    return !useSet || useEquals ? (useEquals ? { equals: result } : result) : { set: result };
  }
};

const useActions = (model: AdminSchemaModel, data: any, action: FormProps['action'], onSave: () => void) => {
  const {
    schema: { models },
    valueHandler,
    useSet,
  } = useContext(TableContext);
  const [updateModel, { loading: updateLoading }] = useMutation(mutationDocument(models, model.id, 'update'));
  const [createModel, { loading: createLoading }] = useMutation(mutationDocument(models, model.id, 'create'));
  const getField = (name: string) => {
    return model.fields.find((item) => item.name === name);
  };

  const onUpdateHandler = (newData: any) => {
    const updateData: any = {};

    Object.keys(newData).forEach((key) => {
      const field = getField(key);
      if (field?.update) {
        if (field.kind === 'object') {
          const fieldModel = models.find((item) => item.id === field.type);
          if (!fieldModel) {
            return;
          }
          const editField = fieldModel.fields.find((item) => item.name === fieldModel.idField);
          if (!editField) {
            return;
          }
          if ((newData[key] && !data[key]) || (newData[key] && newData[key] !== data[key][fieldModel.idField])) {
            updateData[key] = {
              connect: {
                [fieldModel.idField]: getValueByType({
                  value: newData[key],
                  field: editField,
                  useSet: false,
                }),
              },
            };
          } else if (!newData[key] && data[key]) {
            updateData[key] = {
              disconnect: {
                [fieldModel.idField]: getValueByType({
                  value: data[key][fieldModel.idField],
                  field: editField,
                  useSet: false,
                  useEquals: !field.required,
                }),
              },
            };
          }
        } else if (newData[key] !== data[key]) {
          updateData[key] = valueHandler
            ? valueHandler(newData[key], field)
            : getValueByType({ value: newData[key], field, useSet });
        }
      }
    });
    if (Object.keys(updateData).length > 0) {
      updateModel({
        variables: {
          where: {
            [model.idField]: data[model.idField],
          },
          data: updateData,
        },
      }).then(() => {
        onSave();
      });
    }
  };

  const onCreateHandler = (newData: any) => {
    const createData: any = {};
    Object.keys(newData).forEach((key) => {
      const field = getField(key);
      if (field?.kind === 'object') {
        const fieldModel = models.find((item) => item.id === field.type);
        if (!fieldModel) {
          return;
        }
        const editField = fieldModel.fields.find((item) => item.name === fieldModel.idField);
        if (!editField) {
          return;
        }
        if (newData[key] && typeof newData[key] !== 'object') {
          createData[key] = {
            connect: {
              [fieldModel.idField]: getValueByType({
                value: newData[key],
                field: editField,
                useSet: false,
              }),
            },
          };
        }
      } else {
        createData[key] = valueHandler
          ? valueHandler(newData[key], field, true)
          : getValueByType({
              value: newData[key],
              field,
              useSet: false,
            });
      }
    });
    createModel({
      variables: {
        data: createData,
      },
    }).then(() => {
      onSave();
    });
  };

  const onSubmit = (newData: any) => {
    void (action === 'create' ? onCreateHandler(newData) : onUpdateHandler(newData));
  };

  return {
    onSubmit,
    loading: updateLoading || createLoading,
  };
};

export default useActions;
