/**
 * Client GraphQL generator
 * Generates .graphql files with fragments, queries, and mutations for client-side use
 */

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { DMMF } from '@prisma/generator-helper';
import type { ResolvedConfig } from '../../config/types.js';
import { ensureDir } from '../../utils/paths.js';

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

export interface GraphQLWriterOptions {
  outputDir: string;
  dmmf: DMMF.Document;
  config: ResolvedConfig;
}

/**
 * Standard queries that can be generated
 */
const QUERIES = ['findUnique', 'findFirst', 'findMany', 'findCount', 'aggregate'] as const;

/**
 * Standard mutations that can be generated
 */
const MUTATIONS = ['createOne', 'updateOne', 'upsertOne', 'deleteOne', 'updateMany', 'deleteMany'] as const;

/**
 * Check if a query/mutation should be excluded
 */
function isExcluded(operation: string, modelName: string, config: ResolvedConfig): boolean {
  // Global exclusions
  if (config.excludeQueriesAndMutations.includes(operation)) {
    return true;
  }

  // Per-model exclusions
  const modelConfig = config.models?.[modelName];
  if (modelConfig?.excludeQueriesAndMutations?.includes(operation)) {
    return true;
  }

  return false;
}

/**
 * Check if queries are disabled for a model
 */
function areQueriesDisabled(modelName: string, config: ResolvedConfig): boolean {
  if (config.disableQueries) return true;

  const modelConfig = config.models?.[modelName];
  if (modelConfig?.disableQueries) return true;
  if (modelConfig?.queries === false) return true;

  return false;
}

/**
 * Check if mutations are disabled for a model
 */
function areMutationsDisabled(modelName: string, config: ResolvedConfig): boolean {
  if (config.disableMutations) return true;

  const modelConfig = config.models?.[modelName];
  if (modelConfig?.disableMutations) return true;
  if (modelConfig?.mutations === false) return true;

  return false;
}

/**
 * Get excluded fields for a model
 */
function getExcludedFields(modelName: string, config: ResolvedConfig): string[] {
  const globalExcluded = config.excludeFields || [];
  const modelExcluded = config.models?.[modelName]?.excludeFields || [];
  return [...globalExcluded, ...modelExcluded];
}

/**
 * Generate fragment for scalar fields only
 */
function generateFieldsFragment(model: DMMF.Model, excludedFields: string[]): string {
  const scalarFields = model.fields
    .filter((f) => f.kind !== 'object' && !excludedFields.includes(f.name))
    .map((f) => `  ${f.name}`)
    .join('\n');

  return `fragment ${model.name}Fields on ${model.name} {
${scalarFields}
}`;
}

/**
 * Generate fragment with relations (one level deep)
 */
function generateModelFragment(model: DMMF.Model, excludedFields: string[]): string {
  const relations = model.fields
    .filter((f) => f.kind === 'object' && !f.isList && !excludedFields.includes(f.name))
    .map((f) => `  ${f.name} {\n    ...${f.type}Fields\n  }`)
    .join('\n');

  const relationsPart = relations ? `\n${relations}` : '';

  return `fragment ${model.name} on ${model.name} {
  ...${model.name}Fields${relationsPart}
}`;
}

/**
 * Generate findUnique query
 */
function generateFindUniqueQuery(modelName: string): string {
  const model = toPascalCase(modelName);
  return `query findUnique${model}($where: ${modelName}WhereUniqueInput!) {
  findUnique${model}(where: $where) {
    ...${modelName}
  }
}`;
}

/**
 * Generate findFirst query
 */
function generateFindFirstQuery(modelName: string): string {
  const model = toPascalCase(modelName);
  return `query findFirst${model}(
  $where: ${modelName}WhereInput
  $orderBy: [${modelName}OrderByWithRelationInput!]
  $cursor: ${modelName}WhereUniqueInput
  $take: Int
  $skip: Int
  $distinct: [${modelName}ScalarFieldEnum!]
) {
  findFirst${model}(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    ...${modelName}
  }
}`;
}

/**
 * Generate findMany query
 */
function generateFindManyQuery(modelName: string): string {
  const model = toPascalCase(modelName);
  return `query findMany${model}(
  $where: ${modelName}WhereInput
  $orderBy: [${modelName}OrderByWithRelationInput!]
  $cursor: ${modelName}WhereUniqueInput
  $take: Int
  $skip: Int
  $distinct: [${modelName}ScalarFieldEnum!]
) {
  findMany${model}(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    ...${modelName}
  }
}`;
}

/**
 * Generate findCount query
 * Note: Prisma's count() doesn't support cursor or distinct arguments
 */
function generateFindCountQuery(modelName: string): string {
  const model = toPascalCase(modelName);
  return `query findCount${model}(
  $where: ${modelName}WhereInput
  $orderBy: [${modelName}OrderByWithRelationInput!]
  $take: Int
  $skip: Int
) {
  findCount${model}(
    where: $where
    orderBy: $orderBy
    take: $take
    skip: $skip
  )
}`;
}

/**
 * Generate aggregate query
 */
function generateAggregateQuery(modelName: string): string {
  const model = toPascalCase(modelName);
  return `query aggregate${model}($where: ${modelName}WhereInput) {
  aggregate${model}(where: $where) {
    _count {
      _all
    }
  }
}`;
}

/**
 * Generate createOne mutation
 */
function generateCreateOneMutation(modelName: string): string {
  const model = toPascalCase(modelName);
  return `mutation createOne${model}($data: ${modelName}CreateInput!) {
  createOne${model}(data: $data) {
    ...${modelName}
  }
}`;
}

/**
 * Generate updateOne mutation
 */
function generateUpdateOneMutation(modelName: string): string {
  const model = toPascalCase(modelName);
  return `mutation updateOne${model}($data: ${modelName}UpdateInput!, $where: ${modelName}WhereUniqueInput!) {
  updateOne${model}(data: $data, where: $where) {
    ...${modelName}
  }
}`;
}

/**
 * Generate upsertOne mutation
 */
function generateUpsertOneMutation(modelName: string): string {
  const model = toPascalCase(modelName);
  return `mutation upsertOne${model}(
  $where: ${modelName}WhereUniqueInput!
  $create: ${modelName}CreateInput!
  $update: ${modelName}UpdateInput!
) {
  upsertOne${model}(where: $where, create: $create, update: $update) {
    ...${modelName}
  }
}`;
}

/**
 * Generate deleteOne mutation
 */
function generateDeleteOneMutation(modelName: string): string {
  const model = toPascalCase(modelName);
  return `mutation deleteOne${model}($where: ${modelName}WhereUniqueInput!) {
  deleteOne${model}(where: $where) {
    ...${modelName}
  }
}`;
}

/**
 * Generate updateMany mutation
 */
function generateUpdateManyMutation(modelName: string): string {
  const model = toPascalCase(modelName);
  return `mutation updateMany${model}($data: ${modelName}UpdateManyMutationInput!, $where: ${modelName}WhereInput) {
  updateMany${model}(data: $data, where: $where) {
    count
  }
}`;
}

/**
 * Generate deleteMany mutation
 */
function generateDeleteManyMutation(modelName: string): string {
  const model = toPascalCase(modelName);
  return `mutation deleteMany${model}($where: ${modelName}WhereInput) {
  deleteMany${model}(where: $where) {
    count
  }
}`;
}

/**
 * Generate complete GraphQL file for a model
 */
function generateModelGraphQL(model: DMMF.Model, config: ResolvedConfig): string {
  const modelName = model.name;
  const excludedFields = getExcludedFields(modelName, config);
  const parts: string[] = [];

  // Fragments
  parts.push(generateFieldsFragment(model, excludedFields));
  parts.push('');
  parts.push(generateModelFragment(model, excludedFields));

  // Queries
  if (!areQueriesDisabled(modelName, config)) {
    if (!isExcluded('findUnique', modelName, config)) {
      parts.push('');
      parts.push(generateFindUniqueQuery(modelName));
    }

    if (!isExcluded('findFirst', modelName, config)) {
      parts.push('');
      parts.push(generateFindFirstQuery(modelName));
    }

    if (!isExcluded('findMany', modelName, config)) {
      parts.push('');
      parts.push(generateFindManyQuery(modelName));
    }

    if (!isExcluded('findCount', modelName, config)) {
      parts.push('');
      parts.push(generateFindCountQuery(modelName));
    }

    if (!isExcluded('aggregate', modelName, config)) {
      parts.push('');
      parts.push(generateAggregateQuery(modelName));
    }
  }

  // Mutations
  if (!areMutationsDisabled(modelName, config)) {
    if (!isExcluded('createOne', modelName, config)) {
      parts.push('');
      parts.push(generateCreateOneMutation(modelName));
    }

    if (!isExcluded('updateOne', modelName, config)) {
      parts.push('');
      parts.push(generateUpdateOneMutation(modelName));
    }

    if (!isExcluded('upsertOne', modelName, config)) {
      parts.push('');
      parts.push(generateUpsertOneMutation(modelName));
    }

    if (!isExcluded('deleteOne', modelName, config)) {
      parts.push('');
      parts.push(generateDeleteOneMutation(modelName));
    }

    if (!isExcluded('updateMany', modelName, config)) {
      parts.push('');
      parts.push(generateUpdateManyMutation(modelName));
    }

    if (!isExcluded('deleteMany', modelName, config)) {
      parts.push('');
      parts.push(generateDeleteManyMutation(modelName));
    }
  }

  return parts.join('\n') + '\n';
}

/**
 * Check if model should be excluded
 */
function isModelExcluded(modelName: string, config: ResolvedConfig): boolean {
  const modelConfig = config.models?.[modelName];
  return modelConfig?.exclude === true;
}

/**
 * Write client GraphQL files
 */
export function writeGraphQL(options: GraphQLWriterOptions): string[] {
  const { outputDir, dmmf, config } = options;

  const graphqlConfig = typeof config.generateGraphQL === 'object' ? config.generateGraphQL : null;
  const graphqlOutput = graphqlConfig?.clientOutput || 'graphql';
  const graphqlDir = join(outputDir, graphqlOutput);
  ensureDir(graphqlDir);

  const generatedPaths: string[] = [];

  // Filter models
  const models = dmmf.datamodel.models.filter((model) => !isModelExcluded(model.name, config));

  // Generate file for each model
  for (const model of models) {
    const content = generateModelGraphQL(model, config);
    const filePath = join(graphqlDir, `${model.name}.graphql`);
    writeFileSync(filePath, content, 'utf-8');
    generatedPaths.push(filePath);
  }

  // Generate index file that imports all fragments
  const indexContent =
    models.map((model) => `# import ${model.name}Fields, ${model.name} from './${model.name}.graphql'`).join('\n') +
    '\n';

  const indexPath = join(graphqlDir, 'index.graphql');
  writeFileSync(indexPath, indexContent, 'utf-8');
  generatedPaths.push(indexPath);

  return generatedPaths;
}
