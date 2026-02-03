/**
 * Admin schema types
 * Copied from @paljs/types for self-contained package
 */

export interface Field {
  name: string;
  type: string;
  list: boolean;
  required: boolean;
  isId: boolean;
  unique: boolean;
  kind: 'object' | 'enum' | 'scalar';
  defaultValue?: string;
  map?: string;
  relationField?: boolean;
  documentation?: string;
  relation?: { name?: string; fields?: string[]; references?: string[] };
}

export interface Model {
  name: string;
  documentation?: string;
  map?: string;
  fields: Field[];
}

export interface Enums {
  name: string;
  fields: string[];
}

export interface AdminSchemaField extends Omit<Field, 'relation' | 'documentation' | 'map'> {
  id: string;
  title: string;
  read: boolean;
  create: boolean;
  update: boolean;
  filter: boolean;
  sort: boolean;
  order: number;
  editor: boolean;
  upload: boolean;
}

export interface AdminSchemaModel extends Omit<Model, 'documentation' | 'map'> {
  id: string;
  idField: string;
  displayFields: string[];
  update: boolean;
  delete: boolean;
  create: boolean;
  fields: AdminSchemaField[];
}

export interface AdminSchema {
  models: AdminSchemaModel[];
  enums: Enums[];
}
