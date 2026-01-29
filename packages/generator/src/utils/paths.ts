import { existsSync, mkdirSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';

/**
 * Ensure a directory exists, creating it if necessary
 */
export function ensureDir(dirPath: string): void {
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Resolve a path relative to the generator output directory
 */
export function resolveOutputPath(outputDir: string, ...segments: string[]): string {
  return resolve(outputDir, ...segments);
}

/**
 * Get the directory containing the Prisma schema
 */
export function getSchemaDir(schemaPath: string): string {
  return dirname(schemaPath);
}

/**
 * Make a path relative to a base directory
 */
export function relativePath(from: string, to: string): string {
  return relative(from, to);
}
