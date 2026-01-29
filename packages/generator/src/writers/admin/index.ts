/**
 * Admin generator module
 * Exports admin schema and page generators
 */

export {
  writeAdminSchema,
  generateAdminSchema,
  type AdminSchema,
  type AdminSchemaModel,
  type AdminSchemaField,
  type AdminSchemaEnum,
  type AdminSchemaGeneratorOptions,
} from './schema.js';

export {
  writeAdminPages,
  generateAdminPageContent,
  type AdminPagesGeneratorOptions,
} from './pages.js';

import type { DMMF } from '@prisma/generator-helper';
import type { ResolvedConfig } from '../../config/types.js';
import { writeAdminPages } from './pages.js';
import { writeAdminSchema } from './schema.js';

export interface AdminGeneratorOptions {
  outputDir: string;
  dmmf: DMMF.Document;
  config: ResolvedConfig;
}

/**
 * Write all admin files (schema and pages)
 */
export function writeAdmin(options: AdminGeneratorOptions): string[] {
  const paths: string[] = [];

  // Always write schema
  const schemaPath = writeAdminSchema(options);
  paths.push(schemaPath);

  // Write pages if enabled
  const pagePaths = writeAdminPages(options);
  paths.push(...pagePaths);

  return paths;
}
