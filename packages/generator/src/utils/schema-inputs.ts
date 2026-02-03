/**
 * Schema input utilities
 * Copied from @paljs/utils for self-contained package
 */

import type { DMMF } from '@prisma/generator-helper';

export const getInputType = (
  field: DMMF.SchemaArg,
  options?: { doNotUseFieldUpdateOperationsInput?: boolean },
): DMMF.InputTypeRef => {
  let index = 0;
  if (
    options?.doNotUseFieldUpdateOperationsInput &&
    field.inputTypes.length > 1 &&
    field.inputTypes[1].type.endsWith('FieldUpdateOperationsInput')
  ) {
    return field.inputTypes[index];
  }
  if (field.inputTypes.length > 1) {
    if (field.inputTypes.some((item) => item.isList && item.location === 'inputObjectTypes')) {
      index = field.inputTypes.findIndex((item) => item.isList && item.location === 'inputObjectTypes');
    } else if (field.inputTypes.some((item) => item.isList)) {
      index = field.inputTypes.findIndex((item) => item.isList);
    } else if (field.inputTypes.some((item) => item.location === 'inputObjectTypes')) {
      index = field.inputTypes.findIndex((item) => item.location === 'inputObjectTypes');
    } else if (field.inputTypes.some((item) => item.type === 'Json')) {
      index = field.inputTypes.findIndex((item) => item.type === 'Json');
    }
  }
  return field.inputTypes[index];
};
