import type React from 'react';
import { useFormContext } from 'react-hook-form';
import { classNames } from 'utils/classes';
import { getFullId } from 'utils/id';
import { useTableContext } from './PrismaTable/Context';
import { inputClasses } from './components/css';
import type { AdminSchemaField, InputProps, ModelTableProps } from './types';

export const getFieldValidation = (field: AdminSchemaField, inputValidation: ModelTableProps['inputValidation']) => {
  const modelName = field.id.split('.')[0];
  return inputValidation ? (inputValidation[modelName] ? inputValidation[modelName][field.name] || {} : {}) : {};
};

const disabledFields: string[] = ['generatedKey'];
const defaultValues: Record<string, string> = {
  generatedKey: getFullId(4),
};

const DefaultInputs: React.FC<InputProps> = ({ field, value, disabled }) => {
  const { lang, inputValidation } = useTableContext();

  const getDefaultValue = () => {
    if (field.name in defaultValues) {
      return defaultValues[field.name];
    }
    return value
      ? field.type === 'Json'
        ? JSON.stringify(value)
        : field.list
          ? (value as string[]).join(',')
          : value
      : value;
  };

  const options: any = {
    disabled: disabled || disabledFields.includes(field.name),
    defaultValue: getDefaultValue(),
  };

  if (field.list) {
    options.type = 'text';
  } else {
    switch (field.type) {
      case 'Int':
      case 'BigInt':
        options.type = 'number';
        break;
      case 'Float':
      case 'Decimal':
        options.type = 'number';
        options.step = 'any';
        break;
      case 'String':
        options.type = 'text';
        break;
    }
  }

  const { register, getFieldState } = useFormContext();
  const { error } = getFieldState(field.name);

  return (
    <div className="flex w-full flex-wrap pr-2 pt-2 sm:w-1/2">
      <div className="w-full text-gray-600">
        {field.title}
        {error && (
          <span className="text-xs text-red-700">
            {typeof error.message === 'string' ? error.message : lang.isRequired}
          </span>
        )}
      </div>
      <input
        className={classNames('w-full', inputClasses, error ? 'border-red-400' : '')}
        {...register(field.name, {
          required: field.required,
          value: options.defaultValue,
          ...getFieldValidation(field, inputValidation),
        })}
        {...options}
      />
    </div>
  );
};

export default DefaultInputs;
