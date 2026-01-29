/**
 * Admin schema generator
 * Generates adminSettings.json for the PalJS Admin UI
 */

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { DMMF } from '@prisma/generator-helper';
import type { ResolvedConfig } from '../../config/types.js';
import { ensureDir } from '../../utils/paths.js';

/**
 * Admin schema field
 */
export interface AdminSchemaField {
  id: string;
  name: string;
  title: string;
  type: string;
  list: boolean;
  required: boolean;
  isId: boolean;
  unique: boolean;
  kind: 'object' | 'enum' | 'scalar';
  read: boolean;
  create: boolean;
  update: boolean;
  filter: boolean;
  sort: boolean;
  order: number;
  editor: boolean;
  upload: boolean;
  relationField?: boolean;
}

/**
 * Admin schema model
 */
export interface AdminSchemaModel {
  id: string;
  name: string;
  idField: string;
  displayFields: string[];
  update: boolean;
  delete: boolean;
  create: boolean;
  fields: AdminSchemaField[];
}

/**
 * Admin schema enums
 */
export interface AdminSchemaEnum {
  name: string;
  fields: string[];
}

/**
 * Complete admin schema
 */
export interface AdminSchema {
  models: AdminSchemaModel[];
  enums: AdminSchemaEnum[];
}

export interface AdminSchemaGeneratorOptions {
  outputDir: string;
  dmmf: DMMF.Document;
  config: ResolvedConfig;
}

/**
 * Default fields that should be read-only
 */
const defaultReadOnlyFields = ['id', 'createdAt', 'updatedAt'];

/**
 * Generate human-readable title from field name
 */
function generateTitle(name: string): string {
  // Convert camelCase to Title Case
  return name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}

/**
 * Get the ID field for a model
 */
function getIdField(model: DMMF.Model): string {
  const idField = model.fields.find((f) => f.isId);
  return idField?.name || 'id';
}

/**
 * Get display fields for a model
 */
function getDisplayFields(model: DMMF.Model): string[] {
  // Return first 3 non-relation scalar fields
  return model.fields
    .filter((f) => f.kind === 'scalar' && !f.isId)
    .slice(0, 3)
    .map((f) => f.name);
}

/**
 * Generate admin schema field from DMMF field
 */
function generateAdminField(
  field: DMMF.Field,
  modelName: string,
  order: number,
  config: ResolvedConfig,
): AdminSchemaField {
  const isDefaultReadOnly = defaultReadOnlyFields.includes(field.name);
  const isRelation = field.kind === 'object';
  const isRelationField = field.kind === 'scalar' && (field as any).isReadOnly === true;

  // Check if field should be excluded
  const excludedFields = [...(config.excludeFields || []), ...(config.models?.[modelName]?.excludeFields || [])];
  const isExcluded = excludedFields.includes(field.name);

  return {
    id: `${modelName}.${field.name}`,
    name: field.name,
    title: generateTitle(field.name),
    type: field.type,
    list: field.isList,
    required: field.isRequired,
    isId: field.isId,
    unique: field.isUnique,
    kind: field.kind as 'object' | 'enum' | 'scalar',
    read: !isExcluded,
    create: !isExcluded && !isDefaultReadOnly && !isRelation && !isRelationField,
    update: !isExcluded && !isDefaultReadOnly && !isRelation && !isRelationField,
    filter: !isExcluded && !isRelation && field.kind === 'scalar',
    sort: !isExcluded && !isRelation && field.kind === 'scalar',
    relationField: isRelationField,
    order,
    editor: false,
    upload: false,
  };
}

/**
 * Generate admin schema model from DMMF model
 */
function generateAdminModel(model: DMMF.Model, config: ResolvedConfig): AdminSchemaModel {
  const modelConfig = config.models?.[model.name];
  const adminConfig = modelConfig?.admin;

  // Check if model should be excluded from admin
  if (modelConfig?.exclude || adminConfig?.hide) {
    return null as unknown as AdminSchemaModel; // Will be filtered out
  }

  const fields = model.fields.map((field, index) => generateAdminField(field, model.name, index, config));

  // Determine displayFields
  let displayFields = adminConfig?.listFields || getDisplayFields(model);
  if (adminConfig?.displayField) {
    displayFields = [adminConfig.displayField, ...displayFields.filter((f) => f !== adminConfig.displayField)];
  }

  // Check mutation permissions
  const canCreate = !config.disableMutations && !modelConfig?.disableMutations;
  const canUpdate = !config.disableMutations && !modelConfig?.disableMutations;
  const canDelete = !config.disableMutations && !modelConfig?.disableMutations;

  return {
    id: model.name,
    name: model.name,
    idField: getIdField(model),
    displayFields,
    create: canCreate,
    update: canUpdate,
    delete: canDelete,
    fields,
  };
}

/**
 * Generate admin schema enums from DMMF
 */
function generateAdminEnums(dmmf: DMMF.Document): AdminSchemaEnum[] {
  return dmmf.datamodel.enums.map((e) => ({
    name: e.name,
    fields: e.values.map((v) => v.name),
  }));
}

/**
 * Generate the complete admin schema
 */
export function generateAdminSchema(dmmf: DMMF.Document, config: ResolvedConfig): AdminSchema {
  const adminConfig = typeof config.generateAdmin === 'object' ? config.generateAdmin : null;

  // Filter models if specific ones are requested
  let models = [...dmmf.datamodel.models];
  if (adminConfig?.models) {
    models = models.filter((m) => adminConfig.models!.includes(m.name));
  }

  const adminModels = models.map((model) => generateAdminModel(model, config)).filter(Boolean); // Remove nulls (excluded models)

  const enums = generateAdminEnums(dmmf);

  return {
    models: adminModels,
    enums,
  };
}

/**
 * Write admin schema to file
 */
export function writeAdminSchema(options: AdminSchemaGeneratorOptions): string {
  const { outputDir, dmmf, config } = options;

  const adminConfig = typeof config.generateAdmin === 'object' ? config.generateAdmin : null;
  const adminDir = join(outputDir, adminConfig?.output || 'admin');
  ensureDir(adminDir);

  const schema = generateAdminSchema(dmmf, config);
  const content = JSON.stringify(schema, null, 2);

  const outputPath = join(adminDir, 'schema.json');
  writeFileSync(outputPath, content, 'utf-8');

  return outputPath;
}
