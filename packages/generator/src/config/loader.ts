import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import type { AdminConfig, GraphQLConfig, PaljsConfig, ResolvedConfig, ResolvedGraphQLConfig } from './types.js';

/**
 * Default configuration values
 */
const DEFAULT_CONFIG: ResolvedConfig = {
  generateGraphQL: false,
  generateTypes: true,
  javaScript: false,
  generateAdmin: false,
  prismaName: 'prisma',
  excludeFields: [],
  excludeInputFields: [],
  excludeQueriesAndMutations: [],
  disableQueries: false,
  disableMutations: false,
  models: {},
  doNotUseFieldUpdateOperationsInput: false,
  adminSettingsPath: './prisma/admin-settings.json',
};

/**
 * Normalize admin config from boolean or object
 */
function normalizeAdminConfig(config: boolean | AdminConfig | undefined): AdminConfig | false {
  if (config === true) {
    return {
      enabled: true,
      output: './admin',
      routerType: 'app',
    };
  }
  if (config && typeof config === 'object') {
    return {
      enabled: config.enabled ?? true,
      output: config.output ?? './admin',
      routerType: config.routerType ?? 'app',
      models: config.models,
      pageContent: config.pageContent,
    };
  }
  return false;
}

/**
 * Normalize GraphQL config from boolean or object
 */
function normalizeGraphQLConfig(
  config: boolean | GraphQLConfig | undefined,
  nexusOutput?: string,
): ResolvedGraphQLConfig | false {
  if (config === true) {
    // Simple boolean true = enable Nexus only (backwards compatible)
    return {
      nexus: true,
      nexusOutput: nexusOutput ?? './nexus',
      client: false,
      clientOutput: './graphql',
    };
  }
  if (config && typeof config === 'object') {
    return {
      nexus: config.nexus ?? true,
      nexusOutput: config.nexusOutput ?? nexusOutput ?? './nexus',
      client: config.client ?? false,
      clientOutput: config.clientOutput ?? './graphql',
    };
  }
  return false;
}

/**
 * Resolve configuration with defaults
 */
export function resolveConfig(config: PaljsConfig): ResolvedConfig {
  return {
    generateGraphQL: normalizeGraphQLConfig(config.generateGraphQL, config.nexusOutput),
    generateTypes: config.generateTypes ?? DEFAULT_CONFIG.generateTypes,
    javaScript: config.javaScript ?? DEFAULT_CONFIG.javaScript,
    generateAdmin: normalizeAdminConfig(config.generateAdmin),
    prismaName: config.prismaName ?? DEFAULT_CONFIG.prismaName,
    excludeFields: config.excludeFields ?? DEFAULT_CONFIG.excludeFields,
    excludeInputFields: config.excludeInputFields ?? DEFAULT_CONFIG.excludeInputFields,
    excludeQueriesAndMutations: config.excludeQueriesAndMutations ?? DEFAULT_CONFIG.excludeQueriesAndMutations,
    disableQueries: config.disableQueries ?? DEFAULT_CONFIG.disableQueries,
    disableMutations: config.disableMutations ?? DEFAULT_CONFIG.disableMutations,
    models: config.models ?? DEFAULT_CONFIG.models,
    filterInputs: config.filterInputs,
    doNotUseFieldUpdateOperationsInput:
      config.doNotUseFieldUpdateOperationsInput ?? DEFAULT_CONFIG.doNotUseFieldUpdateOperationsInput,
    adminSettingsPath: config.adminSettingsPath ?? DEFAULT_CONFIG.adminSettingsPath,
  };
}

/**
 * Load configuration from a TypeScript/JavaScript file
 */
export async function loadConfig(configPath: string): Promise<ResolvedConfig> {
  const absolutePath = resolve(configPath);

  if (!existsSync(absolutePath)) {
    throw new Error(`Configuration file not found: ${absolutePath}`);
  }

  try {
    // Use dynamic import with file URL for ESM compatibility
    const fileUrl = pathToFileURL(absolutePath).href;

    // Add cache-busting query param to force reload
    const urlWithCacheBust = `${fileUrl}?t=${Date.now()}`;

    const module = await import(urlWithCacheBust);
    const config: PaljsConfig = module.default ?? module;

    return resolveConfig(config);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to load configuration from ${absolutePath}: ${error.message}`);
    }
    throw error;
  }
}

/**
 * Find configuration file in common locations
 */
export function findConfigPath(baseDir: string): string | null {
  const candidates = ['paljs.config.ts', 'paljs.config.js', 'paljs.config.mjs', 'paljs.config.mts'];

  for (const candidate of candidates) {
    const fullPath = resolve(baseDir, candidate);
    if (existsSync(fullPath)) {
      return fullPath;
    }
  }

  return null;
}

export { DEFAULT_CONFIG };
