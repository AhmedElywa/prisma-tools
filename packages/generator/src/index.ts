// Public API exports for @paljs/generator

// Config types and helpers
export { defineConfig } from './config/define.js';
export type {
  PaljsConfig,
  AdminConfig,
  ModelConfig,
  ResolvedConfig,
} from './config/types.js';

// Config utilities
export { loadConfig, findConfigPath, resolveConfig, DEFAULT_CONFIG } from './config/loader.js';

// Writers (for advanced usage)
export { writeDmmf, writeDmmfJson, writeDmmfTs } from './writers/dmmf.js';

// Utils
export { ensureDir, resolveOutputPath, getSchemaDir, relativePath } from './utils/paths.js';
