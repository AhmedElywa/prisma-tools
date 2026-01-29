/**
 * Type generator - generates TypeScript types from DMMF for PrismaSelect
 *
 * This generates:
 * 1. Model field types (e.g., UserFields, PostFields)
 * 2. Model select types (e.g., UserSelect, PostSelect)
 * 3. Model include types for relations
 * 4. ModelsObject type for PrismaSelect generics
 * 5. ModelName union type
 */

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { DMMF } from '@prisma/generator-helper';
import type { ResolvedConfig } from '../config/types.js';
import { ensureDir } from '../utils/paths.js';

export interface TypeGeneratorOptions {
  outputDir: string;
  dmmf: DMMF.Document;
  config: ResolvedConfig;
}

/**
 * Map Prisma scalar types to TypeScript types
 */
function mapScalarType(type: string): string {
  const typeMap: Record<string, string> = {
    String: 'string',
    Int: 'number',
    Float: 'number',
    Boolean: 'boolean',
    DateTime: 'Date',
    Json: 'unknown',
    Decimal: 'string',
    BigInt: 'bigint',
    Bytes: 'Buffer',
  };
  return typeMap[type] || type;
}

/**
 * Check if a field should be excluded based on config
 */
function shouldExcludeField(field: DMMF.Field, modelName: string, config: ResolvedConfig): boolean {
  // Check global excludeFields
  if (config.excludeFields?.includes(field.name)) {
    return true;
  }

  // Check model-specific excludeFields
  const modelConfig = config.models?.[modelName];
  if (modelConfig?.excludeFields?.includes(field.name)) {
    return true;
  }

  return false;
}

/**
 * Generate type for a single field
 */
function generateFieldType(field: DMMF.Field): string {
  let type: string;

  if (field.kind === 'scalar') {
    type = mapScalarType(field.type);
  } else if (field.kind === 'enum') {
    type = field.type; // Will reference generated enum type
  } else if (field.kind === 'object') {
    type = `${field.type}Fields`; // Reference to related model's fields type
  } else {
    type = 'unknown';
  }

  if (field.isList) {
    type = `${type}[]`;
  }

  if (!field.isRequired) {
    type = `${type} | null`;
  }

  return type;
}

/**
 * Generate the fields interface for a model
 */
function generateModelFieldsInterface(model: DMMF.Model, config: ResolvedConfig): string {
  const lines: string[] = [];
  lines.push(`export interface ${model.name}Fields {`);

  for (const field of model.fields) {
    if (shouldExcludeField(field, model.name, config)) {
      continue;
    }

    const fieldType = generateFieldType(field);
    const comment = field.documentation ? ` /** ${field.documentation} */\n  ` : '';
    lines.push(`  ${comment}${field.name}: ${fieldType};`);
  }

  lines.push('}');
  return lines.join('\n');
}

/**
 * Generate select type for a model (for Prisma select operations)
 */
function generateModelSelectType(model: DMMF.Model, config: ResolvedConfig): string {
  const lines: string[] = [];
  lines.push(`export interface ${model.name}Select {`);

  for (const field of model.fields) {
    if (shouldExcludeField(field, model.name, config)) {
      continue;
    }

    if (field.kind === 'object') {
      // Relation field - can be boolean or nested select
      lines.push(`  ${field.name}?: boolean | ${field.type}SelectNested;`);
    } else {
      // Scalar/enum field
      lines.push(`  ${field.name}?: boolean;`);
    }
  }

  lines.push('}');
  return lines.join('\n');
}

/**
 * Generate nested select type for relations
 */
function generateNestedSelectType(model: DMMF.Model): string {
  const lines: string[] = [];
  lines.push(`export interface ${model.name}SelectNested {`);
  lines.push(`  select?: ${model.name}Select;`);
  lines.push('  where?: Record<string, unknown>;');
  lines.push('  orderBy?: Record<string, unknown>;');
  lines.push('  take?: number;');
  lines.push('  skip?: number;');
  lines.push('  cursor?: Record<string, unknown>;');
  lines.push('  distinct?: string | string[];');
  lines.push('}');
  return lines.join('\n');
}

/**
 * Generate include type for a model (for Prisma include operations)
 */
function generateModelIncludeType(model: DMMF.Model, config: ResolvedConfig): string {
  const relationFields = model.fields.filter((f) => f.kind === 'object');

  if (relationFields.length === 0) {
    return `export type ${model.name}Include = Record<string, never>;`;
  }

  const lines: string[] = [];
  lines.push(`export interface ${model.name}Include {`);

  for (const field of relationFields) {
    if (shouldExcludeField(field, model.name, config)) {
      continue;
    }
    lines.push(`  ${field.name}?: boolean | ${field.type}SelectNested;`);
  }

  lines.push('}');
  return lines.join('\n');
}

/**
 * Generate enum type
 */
function generateEnumType(enumType: DMMF.DatamodelEnum): string {
  const values = enumType.values.map((v) => `'${v.name}'`).join(' | ');
  return `export type ${enumType.name} = ${values};`;
}

/**
 * Generate the ModelsObject type for PrismaSelect generics
 */
function generateModelsObjectType(models: readonly DMMF.Model[]): string {
  const lines: string[] = [];
  lines.push('export interface ModelsObject {');

  for (const model of models) {
    lines.push(`  ${model.name}: ${model.name}Fields;`);
  }

  lines.push('}');
  return lines.join('\n');
}

/**
 * Generate ModelName union type
 */
function generateModelNameType(models: readonly DMMF.Model[]): string {
  const names = models.map((m) => `'${m.name}'`).join(' | ');
  return `export type ModelName = ${names};`;
}

/**
 * Generate the complete types file content
 */
function generateTypesContent(dmmf: DMMF.Document, config: ResolvedConfig): string {
  const lines: string[] = [];
  const { models, enums } = dmmf.datamodel;

  // Header
  lines.push('// Generated by @paljs/generator - DO NOT EDIT');
  lines.push('// This file provides typed helpers for PrismaSelect');
  lines.push('');

  // Generate enum types
  if (enums.length > 0) {
    lines.push('// Enum types');
    for (const enumType of enums) {
      lines.push(generateEnumType(enumType));
    }
    lines.push('');
  }

  // Generate model field interfaces
  lines.push('// Model field types');
  for (const model of models) {
    lines.push(generateModelFieldsInterface(model, config));
    lines.push('');
  }

  // Generate nested select types (needed before select types)
  lines.push('// Nested select types for relations');
  for (const model of models) {
    lines.push(generateNestedSelectType(model));
    lines.push('');
  }

  // Generate model select types
  lines.push('// Model select types');
  for (const model of models) {
    lines.push(generateModelSelectType(model, config));
    lines.push('');
  }

  // Generate model include types
  lines.push('// Model include types');
  for (const model of models) {
    lines.push(generateModelIncludeType(model, config));
    lines.push('');
  }

  // Generate ModelsObject type
  lines.push('// ModelsObject type for PrismaSelect generics');
  lines.push(generateModelsObjectType(models));
  lines.push('');

  // Generate ModelName type
  lines.push('// ModelName union type');
  lines.push(generateModelNameType(models));
  lines.push('');

  // Generate helper type for PrismaSelect callback parameters
  lines.push('// Helper type for PrismaSelect callback parameters');
  lines.push('export type SelectObject<M extends ModelName> = ModelsObject[M];');
  lines.push('');

  // Generate PrismaSelectValue type
  lines.push('// Type for PrismaSelect.value return type');
  lines.push('export interface PrismaSelectValue<M extends ModelName> {');
  lines.push('  select?: Partial<Record<keyof ModelsObject[M], boolean | Record<string, unknown>>>;');
  lines.push('}');
  lines.push('');

  // Re-export for convenience
  lines.push('// Re-export types for convenience');
  lines.push('export type {');
  for (let i = 0; i < models.length; i++) {
    const model = models[i];
    const comma = i < models.length - 1 ? ',' : '';
    lines.push(`  ${model.name}Fields,`);
    lines.push(`  ${model.name}Select,`);
    lines.push(`  ${model.name}SelectNested,`);
    lines.push(`  ${model.name}Include${comma}`);
  }
  lines.push('};');
  lines.push('');

  return lines.join('\n');
}

/**
 * Write types to output directory
 */
export function writeTypes(options: TypeGeneratorOptions): string {
  const { outputDir, dmmf, config } = options;

  // Ensure types directory exists
  const typesDir = join(outputDir, 'types');
  ensureDir(typesDir);

  // Generate content
  const content = generateTypesContent(dmmf, config);

  // Write file
  const outputPath = join(typesDir, 'index.ts');
  writeFileSync(outputPath, content, 'utf-8');

  return outputPath;
}

/**
 * Generate types content without writing (for testing)
 */
export function generateTypes(dmmf: DMMF.Document, config: ResolvedConfig): string {
  return generateTypesContent(dmmf, config);
}
