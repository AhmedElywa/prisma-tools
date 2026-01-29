/**
 * Client GraphQL generator
 * Generates .graphql files with fragments, queries, and mutations for client-side use
 */

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { DMMF } from '@prisma/generator-helper';
import type { ResolvedConfig } from '../../config/types.js';
import { ensureDir } from '../../utils/paths.js';

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
  return `query findUnique${modelName}($where: ${modelName}WhereUniqueInput!) {
  findUnique${modelName}(where: $where) {
    ...${modelName}
  }
}`;
}

/**
 * Generate findFirst query
 */
function generateFindFirstQuery(modelName: string): string {
  return `query findFirst${modelName}(
  $where: ${modelName}WhereInput
  $orderBy: [${modelName}OrderByWithRelationInput!]
  $cursor: ${modelName}WhereUniqueInput
  $take: Int
  $skip: Int
  $distinct: [${modelName}ScalarFieldEnum!]
) {
  findFirst${modelName}(
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
  return `query findMany${modelName}(
  $where: ${modelName}WhereInput
  $orderBy: [${modelName}OrderByWithRelationInput!]
  $cursor: ${modelName}WhereUniqueInput
  $take: Int
  $skip: Int
  $distinct: [${modelName}ScalarFieldEnum!]
) {
  findMany${modelName}(
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
 */
function generateFindCountQuery(modelName: string): string {
  return `query findMany${modelName}Count(
  $where: ${modelName}WhereInput
  $orderBy: [${modelName}OrderByWithRelationInput!]
  $cursor: ${modelName}WhereUniqueInput
  $take: Int
  $skip: Int
) {
  findMany${modelName}Count(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
  )
}`;
}

/**
 * Generate aggregate query
 */
function generateAggregateQuery(modelName: string): string {
  return `query aggregate${modelName}($where: ${modelName}WhereInput) {
  aggregate${modelName}(where: $where) {
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
  return `mutation createOne${modelName}($data: ${modelName}CreateInput!) {
  createOne${modelName}(data: $data) {
    ...${modelName}
  }
}`;
}

/**
 * Generate updateOne mutation
 */
function generateUpdateOneMutation(modelName: string): string {
  return `mutation updateOne${modelName}($data: ${modelName}UpdateInput!, $where: ${modelName}WhereUniqueInput!) {
  updateOne${modelName}(data: $data, where: $where) {
    ...${modelName}
  }
}`;
}

/**
 * Generate upsertOne mutation
 */
function generateUpsertOneMutation(modelName: string): string {
  return `mutation upsertOne${modelName}(
  $where: ${modelName}WhereUniqueInput!
  $create: ${modelName}CreateInput!
  $update: ${modelName}UpdateInput!
) {
  upsertOne${modelName}(where: $where, create: $create, update: $update) {
    ...${modelName}
  }
}`;
}

/**
 * Generate deleteOne mutation
 */
function generateDeleteOneMutation(modelName: string): string {
  return `mutation deleteOne${modelName}($where: ${modelName}WhereUniqueInput!) {
  deleteOne${modelName}(where: $where) {
    ...${modelName}
  }
}`;
}

/**
 * Generate updateMany mutation
 */
function generateUpdateManyMutation(modelName: string): string {
  return `mutation updateMany${modelName}($data: ${modelName}UpdateManyMutationInput!, $where: ${modelName}WhereInput) {
  updateMany${modelName}(data: $data, where: $where) {
    count
  }
}`;
}

/**
 * Generate deleteMany mutation
 */
function generateDeleteManyMutation(modelName: string): string {
  return `mutation deleteMany${modelName}($where: ${modelName}WhereInput) {
  deleteMany${modelName}(where: $where) {
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
