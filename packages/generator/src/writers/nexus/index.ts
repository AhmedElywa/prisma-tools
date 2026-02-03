/**
 * Nexus GraphQL generator
 * Generates Nexus type definitions, queries, mutations, and input types from DMMF
 */

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { DMMF } from '@prisma/generator-helper';
import type { ResolvedConfig } from '../../config/types.js';
import { ensureDir } from '../../utils/paths.js';
import { getInputType } from '../../utils/schema-inputs.js';
import {
  type MutationType,
  type QueryType,
  allMutations,
  allQueries,
  mutationTemplates,
  queryTemplates,
} from './templates.js';

export interface NexusGeneratorOptions {
  outputDir: string;
  dmmf: DMMF.Document;
  config: ResolvedConfig;
}

interface GeneratedFiles {
  modelTypes: Map<string, string>;
  queries: Map<string, Map<string, string>>;
  mutations: Map<string, Map<string, string>>;
  inputTypes: string;
  indexes: Map<string, string>;
}

/**
 * Generate Nexus files from DMMF
 */
export function writeNexus(options: NexusGeneratorOptions): string[] {
  const { outputDir, dmmf, config } = options;

  // Create output directory
  const nexusOutput = typeof config.generateGraphQL === 'object' ? config.generateGraphQL.nexusOutput : 'nexus';
  const nexusDir = join(outputDir, nexusOutput || 'nexus');
  ensureDir(nexusDir);

  const generatedPaths: string[] = [];
  const prismaName = config.prismaName || 'prisma';

  // Get models to generate
  const models = getModelsToGenerate(dmmf, config);

  // Generate each model
  for (const model of models) {
    const modelDir = join(nexusDir, model.name);
    ensureDir(modelDir);

    // Generate model type
    const typePath = join(modelDir, 'type.ts');
    const typeContent = generateModelType(model, dmmf.datamodel, config);
    writeFileSync(typePath, typeContent, 'utf-8');
    generatedPaths.push(typePath);

    // Generate queries
    const queriesDir = join(modelDir, 'queries');
    ensureDir(queriesDir);
    const queryFiles = generateQueries(model.name, dmmf.schema, config, prismaName);
    for (const [filename, content] of queryFiles) {
      const queryPath = join(queriesDir, `${filename}.ts`);
      writeFileSync(queryPath, content, 'utf-8');
      generatedPaths.push(queryPath);
    }

    // Generate queries index
    const queryIndexPath = join(queriesDir, 'index.ts');
    const queryIndexContent = generateIndexFile(Array.from(queryFiles.keys()));
    writeFileSync(queryIndexPath, queryIndexContent, 'utf-8');
    generatedPaths.push(queryIndexPath);

    // Generate mutations
    const mutationsDir = join(modelDir, 'mutations');
    ensureDir(mutationsDir);
    const mutationFiles = generateMutations(model.name, dmmf.schema, config, prismaName);
    for (const [filename, content] of mutationFiles) {
      const mutationPath = join(mutationsDir, `${filename}.ts`);
      writeFileSync(mutationPath, content, 'utf-8');
      generatedPaths.push(mutationPath);
    }

    // Generate mutations index
    const mutationIndexPath = join(mutationsDir, 'index.ts');
    const mutationIndexContent = generateIndexFile(Array.from(mutationFiles.keys()));
    writeFileSync(mutationIndexPath, mutationIndexContent, 'utf-8');
    generatedPaths.push(mutationIndexPath);

    // Generate model index
    const modelIndexContent = generateModelIndex(queryFiles.size > 0, mutationFiles.size > 0);
    const modelIndexPath = join(modelDir, 'index.ts');
    writeFileSync(modelIndexPath, modelIndexContent, 'utf-8');
    generatedPaths.push(modelIndexPath);
  }

  // Generate input types
  const inputTypesPath = join(nexusDir, 'InputTypes.ts');
  const inputTypesContent = generateInputTypes(dmmf.schema, config);
  writeFileSync(inputTypesPath, inputTypesContent, 'utf-8');
  generatedPaths.push(inputTypesPath);

  // Generate main index
  const mainIndexPath = join(nexusDir, 'index.ts');
  const mainIndexContent = generateMainIndex(models.map((m) => m.name));
  writeFileSync(mainIndexPath, mainIndexContent, 'utf-8');
  generatedPaths.push(mainIndexPath);

  return generatedPaths;
}

/**
 * Get models to generate based on config
 */
function getModelsToGenerate(dmmf: DMMF.Document, config: ResolvedConfig): readonly DMMF.Model[] {
  return dmmf.datamodel.models.filter((model) => {
    // Check if model is excluded
    const modelConfig = config.models?.[model.name];
    if (modelConfig?.exclude) {
      return false;
    }
    return true;
  });
}

/**
 * Get excluded fields for a model
 */
function getExcludedFields(modelName: string, config: ResolvedConfig): string[] {
  const globalExcludes = config.excludeFields || [];
  const modelExcludes = config.models?.[modelName]?.excludeFields || [];
  return [...globalExcludes, ...modelExcludes];
}

/**
 * Get excluded operations for a model
 */
function getExcludedOperations(modelName: string, config: ResolvedConfig): string[] {
  const globalExcludes = config.excludeQueriesAndMutations || [];
  const modelExcludes = config.models?.[modelName]?.excludeQueriesAndMutations || [];
  return [...globalExcludes, ...modelExcludes];
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
 * Generate Nexus objectType for a model
 */
function generateModelType(model: DMMF.Model, datamodel: DMMF.Datamodel, config: ResolvedConfig): string {
  const excludedFields = getExcludedFields(model.name, config);
  const fields = model.fields.filter((f) => !excludedFields.includes(f.name));

  const hasList = fields.some((f) => f.isList);
  const imports = hasList ? "import { objectType, list } from 'nexus';" : "import { objectType } from 'nexus';";

  const fieldDefinitions = fields.map((field) => generateFieldDefinition(field)).join('\n    ');

  const description = model.documentation ? `\n  description: \`${escapeBackticks(model.documentation)}\`,` : '';

  return `${imports}

export const ${model.name} = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: '${model.name}',${description}
  definition(t) {
    ${fieldDefinitions}
  },
});
`;
}

/**
 * Generate field definition for Nexus objectType
 */
function generateFieldDefinition(field: DMMF.Field): string {
  const modifier = field.isList ? '.list' : !field.isRequired ? '.nullable' : '';
  const description = field.documentation ? `, { description: \`${escapeBackticks(field.documentation)}\` }` : '';

  if (field.kind === 'scalar') {
    const scalarType = field.type.toLowerCase();
    if (field.type === 'DateTime') {
      return `t${modifier}.field('${field.name}', { type: 'DateTime'${description ? description.slice(0, -2) + ' }' : ' }'});`;
    }
    return `t${modifier}.${scalarType}('${field.name}'${description});`;
  }

  // Object or enum type
  const options: string[] = [`type: '${field.type}'`];
  if (field.documentation) {
    options.push(`description: \`${escapeBackticks(field.documentation)}\``);
  }
  if (field.kind === 'object') {
    options.push(`resolve(root: any) { return root.${field.name}; }`);
  }

  return `t${modifier}.field('${field.name}', { ${options.join(', ')} });`;
}

/**
 * Generate query files for a model
 */
function generateQueries(
  modelName: string,
  schema: DMMF.Schema,
  config: ResolvedConfig,
  prismaName: string,
): Map<string, string> {
  const files = new Map<string, string>();

  if (areQueriesDisabled(modelName, config)) {
    return files;
  }

  const excludedOps = getExcludedOperations(modelName, config);

  for (const queryType of allQueries) {
    if (excludedOps.includes(queryType)) continue;

    const args = getInputArgs(
      schema,
      'Query',
      queryType === 'findCount' ? `findMany${modelName}` : `${queryType}${modelName}`,
    );
    const content = applyTemplate(queryTemplates[queryType], modelName, prismaName, args);
    files.set(queryType, content);
  }

  return files;
}

/**
 * Generate mutation files for a model
 */
function generateMutations(
  modelName: string,
  schema: DMMF.Schema,
  config: ResolvedConfig,
  prismaName: string,
): Map<string, string> {
  const files = new Map<string, string>();

  if (areMutationsDisabled(modelName, config)) {
    return files;
  }

  const excludedOps = getExcludedOperations(modelName, config);

  for (const mutationType of allMutations) {
    if (excludedOps.includes(mutationType)) continue;

    const args = getInputArgs(schema, 'Mutation', `${mutationType}${modelName}`);
    const content = applyTemplate(mutationTemplates[mutationType], modelName, prismaName, args);
    files.set(mutationType, content);
  }

  return files;
}

/**
 * Get input arguments for a query/mutation
 */
function getInputArgs(schema: DMMF.Schema, typeName: string, fieldName: string): string {
  const outputType = schema.outputObjectTypes.prisma.find((t) => t.name === typeName);
  const field = outputType?.fields.find((f) => f.name === fieldName);

  if (!field?.args.length) {
    return '';
  }

  const argsLines = field.args.map((arg) => {
    let type = `'${getArgType(arg)}'`;

    if (arg.inputTypes[0]?.isList) {
      type = `list(${type})`;
    }

    if (arg.isRequired) {
      type = `nonNull(${type})`;
    }

    return `    ${arg.name}: ${type},`;
  });

  return `args: {\n${argsLines.join('\n')}\n  },`;
}

/**
 * Get the type name for an argument
 */
function getArgType(arg: DMMF.SchemaArg): string {
  // Prefer non-null, non-list types
  const inputType = arg.inputTypes.find((t) => !t.isList) || arg.inputTypes[0];
  return (inputType?.type as string) || 'String';
}

/**
 * Apply template replacements
 */
function applyTemplate(template: string, modelName: string, prismaName: string, args: string): string {
  const modelLower = modelName.charAt(0).toLowerCase() + modelName.slice(1);
  const modelUpper = modelName.charAt(0).toUpperCase() + modelName.slice(1);

  return (
    template
      .replace(/#{ModelName}/g, modelName)
      .replace(/#{Model}/g, modelUpper)
      .replace(/#{model}/g, modelLower)
      .replace(/#{prisma}/g, prismaName)
      .replace(/#{args}/g, args)
      .trim() + '\n'
  );
}

/**
 * Generate input types file
 */
function generateInputTypes(schema: DMMF.Schema, config: ResolvedConfig): string {
  const lines: string[] = ["import { enumType, inputObjectType, objectType } from 'nexus';", ''];

  // Generate enums
  const enums = [...schema.enumTypes.prisma];
  if (schema.enumTypes.model) {
    enums.push(...schema.enumTypes.model);
  }

  for (const enumDef of enums) {
    lines.push(`export const ${enumDef.name} = enumType({`);
    lines.push(`  name: '${enumDef.name}',`);
    lines.push(`  members: ${JSON.stringify(enumDef.values)},`);
    lines.push('});');
    lines.push('');
  }

  // Generate input object types
  const inputTypes: DMMF.InputType[] = [...(schema.inputObjectTypes.prisma as DMMF.InputType[])];
  if (schema.inputObjectTypes.model) {
    inputTypes.push(...(schema.inputObjectTypes.model as DMMF.InputType[]));
  }

  for (const input of inputTypes) {
    const excludedInputFields = config.excludeInputFields || [];
    const fields = input.fields.filter((f: DMMF.SchemaArg) => !excludedInputFields.includes(f.name));

    if (fields.length === 0) continue;

    lines.push(`export const ${input.name} = inputObjectType({`);
    lines.push('  nonNullDefaults: {');
    lines.push('    input: false,');
    lines.push('  },');
    lines.push(`  name: '${input.name}',`);
    lines.push('  definition(t) {');

    for (const field of fields) {
      const inputType = getInputType(field);
      const type = (inputType?.type ?? 'String') as string;
      const modifier = field.isRequired ? '.nonNull' : inputType?.isList ? '.list' : '';
      lines.push(`    t${modifier}.field('${field.name}', { type: '${type}' });`);
    }

    lines.push('  },');
    lines.push('});');
    lines.push('');
  }

  // Generate output object types (for aggregates)
  const outputTypes = [...schema.outputObjectTypes.prisma, ...schema.outputObjectTypes.model];

  for (const output of outputTypes) {
    if (!output.name.includes('Aggregate') && !output.name.endsWith('OutputType')) {
      continue;
    }

    lines.push(`export const ${output.name} = objectType({`);
    lines.push('  nonNullDefaults: {');
    lines.push('    output: true,');
    lines.push('  },');
    lines.push(`  name: '${output.name}',`);
    lines.push('  definition(t) {');

    for (const field of output.fields) {
      const type = field.outputType.type as string;
      const modifier = field.isNullable ? '.nullable' : field.outputType.isList ? '.list' : '';
      lines.push(`    t${modifier}.field('${field.name}', { type: '${type}' });`);
    }

    lines.push('  },');
    lines.push('});');
    lines.push('');
  }

  return lines.join('\n');
}

/**
 * Generate index file for a directory
 */
function generateIndexFile(files: string[]): string {
  return files.map((f) => `export * from './${f}';`).join('\n') + '\n';
}

/**
 * Generate model index file
 */
function generateModelIndex(hasQueries: boolean, hasMutations: boolean): string {
  const exports = ["export * from './type';"];
  if (hasQueries) exports.push("export * from './queries';");
  if (hasMutations) exports.push("export * from './mutations';");
  return exports.join('\n') + '\n';
}

/**
 * Generate main index file
 */
function generateMainIndex(modelNames: string[]): string {
  const lines = modelNames.map((name) => `export * from './${name}';`);
  lines.push("export * from './InputTypes';");
  return lines.join('\n') + '\n';
}

/**
 * Escape backticks in strings
 */
function escapeBackticks(str: string): string {
  return str.replace(/`/g, '\\`');
}

/**
 * Generate Nexus content without writing (for testing)
 */
export function generateNexusContent(dmmf: DMMF.Document, config: ResolvedConfig): GeneratedFiles {
  const result: GeneratedFiles = {
    modelTypes: new Map(),
    queries: new Map(),
    mutations: new Map(),
    inputTypes: '',
    indexes: new Map(),
  };

  const prismaName = config.prismaName || 'prisma';
  const models = getModelsToGenerate(dmmf, config);

  for (const model of models) {
    // Model type
    result.modelTypes.set(model.name, generateModelType(model, dmmf.datamodel, config));

    // Queries
    const queries = generateQueries(model.name, dmmf.schema, config, prismaName);
    result.queries.set(model.name, queries);

    // Mutations
    const mutations = generateMutations(model.name, dmmf.schema, config, prismaName);
    result.mutations.set(model.name, mutations);
  }

  // Input types
  result.inputTypes = generateInputTypes(dmmf.schema, config);

  return result;
}
