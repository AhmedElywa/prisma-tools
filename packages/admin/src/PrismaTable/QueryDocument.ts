import tag from 'graphql-tag';
import type { AdminSchemaModel } from '../types';

/**
 * Convert string to PascalCase
 * Handles snake_case, kebab-case, and already PascalCase strings
 */
function toPascalCase(str: string): string {
  return str
    .split(/[_-]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

const getFields = (models: AdminSchemaModel[], modelName: string, update = false) => {
  const model = models.find((item) => item.id === modelName);
  if (!model) {
    return 'id';
  }
  let fieldsString = `${model.idField} `;
  model?.fields.forEach((field) => {
    if ((field.read && field.name !== model.idField) || (update && field.update)) {
      if (field.kind !== 'object') {
        fieldsString += `${field.name} `;
      } else if (!(field.list && !update)) {
        const fieldModel = models.find((item) => item.id === field.type);
        if (fieldModel) {
          fieldsString += `${field.name} {`;
          if (fieldModel.idField) {
            fieldsString += `${fieldModel.idField} `;
          } else {
            fieldModel.fields
              .filter((item) => item.kind === 'scalar')
              .forEach((field) => {
                fieldsString += `${field.name} `;
              });
          }
          if (!field.list) {
            fieldModel.displayFields.forEach((item) => {
              const splitItems = item.split('.');
              for (let i = 0; i < splitItems.length; i++) {
                if (i + 1 < splitItems.length) {
                  fieldsString += `${splitItems[i]} { `;
                } else if (!(splitItems.length === 1 && splitItems[i] === fieldModel.idField)) {
                  fieldsString += `${splitItems[i]} `;
                }
              }
              for (let i = 1; i < splitItems.length; i++) {
                fieldsString += `} `;
              }
            });
          }
          fieldsString += '} ';
        }
      }
    }
  });

  return fieldsString;
};

const allScalar = (model?: AdminSchemaModel) => {
  return model?.fields
    .filter((item) => item.kind === 'scalar')
    .map((item) => item.name)
    .join(' ');
};
export const queryDocument = (models: AdminSchemaModel[], modelName: string, findUnique = false, update = false) => {
  const fields = getFields(models, modelName, update);
  const model = toPascalCase(modelName);
  if (findUnique) {
    return tag`
query findUnique${model}($where: ${modelName}WhereUniqueInput!) {
  findUnique${model}(where: $where) {
    ${fields}
  }
}
`;
  } else {
    return tag`
query findMany${model}(
  $where: ${modelName}WhereInput
  $orderBy: [${modelName}OrderByWithRelationInput!]
  $cursor: ${modelName}WhereUniqueInput
  $skip: Int
  $take: Int
) {
  findMany${model}(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ${fields}
  }
  findCount${model}(where: $where)
}
`;
  }
};

export const mutationDocument = (
  models: AdminSchemaModel[],
  modelName: string,
  mutation: 'create' | 'update' | 'delete',
) => {
  const fields = getFields(models, modelName, true);
  const modelObject = models.find((item) => item.id === modelName);
  const model = toPascalCase(modelName);
  switch (mutation) {
    case 'create':
      return tag`mutation createOne${model}($data: ${modelName}CreateInput!) {
  createOne${model}(data: $data) {
    ${modelObject?.idField || allScalar(modelObject)}
  }
}`;
    case 'delete':
      return tag`mutation deleteOne${model} ($where: ${modelName}WhereUniqueInput!) {
  deleteOne${model} (where: $where) {
    ${modelObject?.idField || allScalar(modelObject)}
  }
}`;
    case 'update':
      return tag`mutation updateOne${model} ($where: ${modelName}WhereUniqueInput!, $data: ${modelName}UpdateInput!) {
  updateOne${model} (where: $where, data: $data) {
    ${fields}
  }
}`;
  }
};
