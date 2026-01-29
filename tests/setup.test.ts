import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { existsSync, readFileSync } from 'node:fs';
import { createTempDir, getFixturePath } from './helpers';

describe('Test Infrastructure', () => {
  describe('Fixtures', () => {
    test('basic.prisma fixture exists', () => {
      const schemaPath = getFixturePath('schemas', 'basic.prisma');
      expect(existsSync(schemaPath)).toBe(true);
    });

    test('basic.prisma contains expected models', () => {
      const schemaPath = getFixturePath('schemas', 'basic.prisma');
      const content = readFileSync(schemaPath, 'utf-8');

      expect(content).toContain('model User');
      expect(content).toContain('model Post');
      expect(content).toContain('model Comment');
      expect(content).toContain('model Profile');
      expect(content).toContain('model Tag');
      expect(content).toContain('enum Role');
    });

    test('config fixtures exist', () => {
      expect(existsSync(getFixturePath('configs', 'minimal.config.ts'))).toBe(true);
      expect(existsSync(getFixturePath('configs', 'full.config.ts'))).toBe(true);
    });
  });

  describe('Temp Directory Helper', () => {
    let tempDir: { path: string; cleanup: () => void };

    beforeAll(() => {
      tempDir = createTempDir('test-setup');
    });

    afterAll(() => {
      tempDir.cleanup();
    });

    test('creates a temporary directory', () => {
      expect(existsSync(tempDir.path)).toBe(true);
    });

    test('temp directory path includes prefix', () => {
      expect(tempDir.path).toContain('test-setup');
    });
  });
});
