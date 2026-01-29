import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { createTempDir } from '../../../tests/helpers/temp-dir';
import { ensureDir, getSchemaDir, relativePath, resolveOutputPath } from '../src/utils/paths';

describe('Path Utilities', () => {
  describe('ensureDir', () => {
    let tempDir: { path: string; cleanup: () => void };

    beforeAll(() => {
      tempDir = createTempDir('utils-ensuredir');
    });

    afterAll(() => {
      tempDir.cleanup();
    });

    test('creates a new directory', () => {
      const newDir = join(tempDir.path, 'new-directory');
      expect(existsSync(newDir)).toBe(false);

      ensureDir(newDir);

      expect(existsSync(newDir)).toBe(true);
    });

    test('handles existing directory without error', () => {
      const existingDir = join(tempDir.path, 'existing-directory');
      mkdirSync(existingDir, { recursive: true });
      expect(existsSync(existingDir)).toBe(true);

      // Should not throw
      expect(() => ensureDir(existingDir)).not.toThrow();
      expect(existsSync(existingDir)).toBe(true);
    });

    test('creates nested directories recursively', () => {
      const nestedDir = join(tempDir.path, 'level1', 'level2', 'level3', 'level4');
      expect(existsSync(nestedDir)).toBe(false);

      ensureDir(nestedDir);

      expect(existsSync(nestedDir)).toBe(true);
      expect(existsSync(join(tempDir.path, 'level1'))).toBe(true);
      expect(existsSync(join(tempDir.path, 'level1', 'level2'))).toBe(true);
    });

    test('works with deeply nested paths', () => {
      const deepPath = join(tempDir.path, 'a', 'b', 'c', 'd', 'e', 'f', 'g');

      ensureDir(deepPath);

      expect(existsSync(deepPath)).toBe(true);
    });

    test('handles paths with spaces', () => {
      const pathWithSpaces = join(tempDir.path, 'directory with spaces');

      ensureDir(pathWithSpaces);

      expect(existsSync(pathWithSpaces)).toBe(true);
    });

    test('handles paths with special characters', () => {
      const specialPath = join(tempDir.path, 'dir-with_special.chars');

      ensureDir(specialPath);

      expect(existsSync(specialPath)).toBe(true);
    });

    test('works with absolute paths', () => {
      const absolutePath = resolve(tempDir.path, 'absolute-test');

      ensureDir(absolutePath);

      expect(existsSync(absolutePath)).toBe(true);
    });

    test('multiple calls are idempotent', () => {
      const idempotentDir = join(tempDir.path, 'idempotent-test');

      ensureDir(idempotentDir);
      ensureDir(idempotentDir);
      ensureDir(idempotentDir);

      expect(existsSync(idempotentDir)).toBe(true);
    });
  });

  describe('resolveOutputPath', () => {
    test('resolves path relative to output directory', () => {
      const outputDir = '/home/user/project/generated';
      const result = resolveOutputPath(outputDir, 'types', 'index.ts');

      expect(result).toBe('/home/user/project/generated/types/index.ts');
    });

    test('handles single segment', () => {
      const outputDir = '/home/user/project';
      const result = resolveOutputPath(outputDir, 'file.ts');

      expect(result).toBe('/home/user/project/file.ts');
    });

    test('handles multiple segments', () => {
      const outputDir = '/base';
      const result = resolveOutputPath(outputDir, 'a', 'b', 'c', 'd.ts');

      expect(result).toBe('/base/a/b/c/d.ts');
    });

    test('handles no additional segments', () => {
      const outputDir = '/home/user/project';
      const result = resolveOutputPath(outputDir);

      expect(result).toBe('/home/user/project');
    });

    test('normalizes path separators', () => {
      const outputDir = '/home/user/project';
      const result = resolveOutputPath(outputDir, 'types/models');

      // The path module should normalize this correctly
      expect(result).toContain('types');
      expect(result).toContain('models');
    });

    test('handles relative output directory', () => {
      const outputDir = './generated';
      const result = resolveOutputPath(outputDir, 'nexus');

      expect(result).toContain('generated');
      expect(result).toContain('nexus');
    });
  });

  describe('getSchemaDir', () => {
    test('extracts directory from schema path', () => {
      const schemaPath = '/home/user/project/prisma/schema.prisma';
      const result = getSchemaDir(schemaPath);

      expect(result).toBe('/home/user/project/prisma');
    });

    test('handles schema in root directory', () => {
      const schemaPath = '/schema.prisma';
      const result = getSchemaDir(schemaPath);

      expect(result).toBe('/');
    });

    test('handles nested schema location', () => {
      const schemaPath = '/home/user/project/packages/db/prisma/schema.prisma';
      const result = getSchemaDir(schemaPath);

      expect(result).toBe('/home/user/project/packages/db/prisma');
    });

    test('handles relative paths', () => {
      const schemaPath = 'prisma/schema.prisma';
      const result = getSchemaDir(schemaPath);

      expect(result).toBe('prisma');
    });

    test('handles just filename', () => {
      const schemaPath = 'schema.prisma';
      const result = getSchemaDir(schemaPath);

      expect(result).toBe('.');
    });

    test('handles Windows-style paths (if on Windows)', () => {
      // This test works cross-platform because path module handles conversions
      const schemaPath = '/c/Users/user/project/prisma/schema.prisma';
      const result = getSchemaDir(schemaPath);

      expect(result).toContain('prisma');
    });
  });

  describe('relativePath', () => {
    test('creates relative path between directories', () => {
      const from = '/home/user/project/src';
      const to = '/home/user/project/generated/nexus';
      const result = relativePath(from, to);

      expect(result).toBe('../generated/nexus');
    });

    test('handles same directory', () => {
      const from = '/home/user/project';
      const to = '/home/user/project';
      const result = relativePath(from, to);

      expect(result).toBe('');
    });

    test('handles parent directory traversal', () => {
      const from = '/home/user/project/src/deep/nested';
      const to = '/home/user/project/generated';
      const result = relativePath(from, to);

      expect(result).toBe('../../../generated');
    });

    test('handles child directory', () => {
      const from = '/home/user/project';
      const to = '/home/user/project/src/components';
      const result = relativePath(from, to);

      expect(result).toBe('src/components');
    });

    test('handles sibling directories', () => {
      const from = '/home/user/project/src';
      const to = '/home/user/project/dist';
      const result = relativePath(from, to);

      expect(result).toBe('../dist');
    });

    test('handles deeply nested to shallow', () => {
      const from = '/a/b/c/d/e/f';
      const to = '/a/b';
      const result = relativePath(from, to);

      expect(result).toBe('../../../..');
    });

    test('handles file paths', () => {
      const from = '/home/user/project/src';
      const to = '/home/user/project/dist/index.js';
      const result = relativePath(from, to);

      expect(result).toBe('../dist/index.js');
    });
  });

  describe('integration tests', () => {
    let tempDir: { path: string; cleanup: () => void };

    beforeAll(() => {
      tempDir = createTempDir('utils-integration');
    });

    afterAll(() => {
      tempDir.cleanup();
    });

    test('creates output structure for generator', () => {
      const outputDir = join(tempDir.path, 'generated', 'paljs');

      // Create main output dir
      ensureDir(outputDir);

      // Create subdirectories
      const dmmfDir = resolveOutputPath(outputDir, 'dmmf');
      ensureDir(dmmfDir);

      const typesDir = resolveOutputPath(outputDir, 'types');
      ensureDir(typesDir);

      const nexusDir = resolveOutputPath(outputDir, 'nexus');
      ensureDir(nexusDir);

      // Create model directories
      const userDir = resolveOutputPath(outputDir, 'nexus', 'User');
      ensureDir(userDir);

      const queriesDir = resolveOutputPath(outputDir, 'nexus', 'User', 'queries');
      ensureDir(queriesDir);

      // Verify structure
      expect(existsSync(outputDir)).toBe(true);
      expect(existsSync(dmmfDir)).toBe(true);
      expect(existsSync(typesDir)).toBe(true);
      expect(existsSync(nexusDir)).toBe(true);
      expect(existsSync(userDir)).toBe(true);
      expect(existsSync(queriesDir)).toBe(true);
    });

    test('resolves paths relative to schema directory', () => {
      const schemaPath = join(tempDir.path, 'prisma', 'schema.prisma');

      // Create schema directory and file
      ensureDir(getSchemaDir(schemaPath));
      writeFileSync(schemaPath, 'datasource db { }');

      const schemaDir = getSchemaDir(schemaPath);
      const configPath = resolveOutputPath(schemaDir, 'paljs.config.ts');

      expect(schemaDir).toBe(join(tempDir.path, 'prisma'));
      expect(configPath).toBe(join(tempDir.path, 'prisma', 'paljs.config.ts'));
    });

    test('generates correct import paths between files', () => {
      const outputDir = join(tempDir.path, 'generated');

      // Model type file
      const userTypePath = resolveOutputPath(outputDir, 'nexus', 'User', 'type.ts');

      // Input types file
      const inputTypesPath = resolveOutputPath(outputDir, 'nexus', 'InputTypes.ts');

      // Calculate relative import path from User/type.ts to InputTypes.ts
      const userTypeDir = getSchemaDir(userTypePath);
      const relImport = relativePath(userTypeDir, inputTypesPath);

      expect(relImport).toBe('../InputTypes.ts');
    });
  });
});
