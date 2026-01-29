import type { PaljsConfig } from './types.js';

/**
 * Define PalJS generator configuration with full type support
 *
 * @example
 * ```typescript
 * // paljs.config.ts
 * import { defineConfig } from '@paljs/generator/config';
 *
 * export default defineConfig({
 *   generateGraphQL: true,
 *   generateTypes: true,
 *   excludeFields: ['password'],
 * });
 * ```
 */
export function defineConfig(config: PaljsConfig): PaljsConfig {
  return config;
}

export type { PaljsConfig, AdminConfig, ModelConfig, ResolvedConfig } from './types.js';
