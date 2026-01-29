import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { createTempDir } from '../../../tests/helpers/temp-dir';
import { DEFAULT_CONFIG, findConfigPath, loadConfig, resolveConfig } from '../src/config/loader';
import type { PaljsConfig } from '../src/config/types';

describe('Config Loader', () => {
  describe('resolveConfig', () => {
    test('returns defaults for empty config', () => {
      const config = resolveConfig({});

      expect(config.generateGraphQL).toBe(false);
      expect(config.generateTypes).toBe(true);
      expect(config.prismaName).toBe('prisma');
      expect(config.excludeFields).toEqual([]);
      expect(config.models).toEqual({});
    });

    test('merges custom config with defaults', () => {
      const config = resolveConfig({
        generateGraphQL: true,
        excludeFields: ['password'],
        models: {
          User: { excludeFields: ['secret'] },
        },
      });

      // generateGraphQL: true normalizes to object with nexus enabled
      expect(config.generateGraphQL).toEqual({
        nexus: true,
        nexusOutput: './nexus',
        client: false,
        clientOutput: './graphql',
      });
      expect(config.generateTypes).toBe(true); // default
      expect(config.excludeFields).toEqual(['password']);
      expect(config.models.User?.excludeFields).toEqual(['secret']);
    });

    test('normalizes generateAdmin: true to config object', () => {
      const config = resolveConfig({ generateAdmin: true });

      expect(config.generateAdmin).toEqual({
        enabled: true,
        output: './admin',
        routerType: 'app',
      });
    });

    test('normalizes generateAdmin: false', () => {
      const config = resolveConfig({ generateAdmin: false });

      expect(config.generateAdmin).toBe(false);
    });

    test('normalizes generateAdmin object', () => {
      const config = resolveConfig({
        generateAdmin: {
          enabled: true,
          output: './custom-admin',
          routerType: 'pages',
        },
      });

      expect(config.generateAdmin).toEqual({
        enabled: true,
        output: './custom-admin',
        routerType: 'pages',
      });
    });
  });

  describe('findConfigPath', () => {
    let tempDir: { path: string; cleanup: () => void };

    beforeAll(() => {
      tempDir = createTempDir('config-test');
    });

    afterAll(() => {
      tempDir.cleanup();
    });

    test('returns null when no config file exists', () => {
      const result = findConfigPath(tempDir.path);
      expect(result).toBeNull();
    });

    test('finds paljs.config.ts', () => {
      const configPath = join(tempDir.path, 'paljs.config.ts');
      writeFileSync(configPath, 'export default {}', 'utf-8');

      const result = findConfigPath(tempDir.path);
      expect(result).toBe(configPath);
    });

    test('finds paljs.config.js', () => {
      const tempDir2 = createTempDir('config-test-js');
      const configPath = join(tempDir2.path, 'paljs.config.js');
      writeFileSync(configPath, 'export default {}', 'utf-8');

      const result = findConfigPath(tempDir2.path);
      expect(result).toBe(configPath);

      tempDir2.cleanup();
    });
  });

  describe('loadConfig', () => {
    let tempDir: { path: string; cleanup: () => void };

    beforeAll(() => {
      tempDir = createTempDir('load-config-test');
    });

    afterAll(() => {
      tempDir.cleanup();
    });

    test('throws error for non-existent config', async () => {
      const configPath = join(tempDir.path, 'non-existent.config.ts');

      await expect(loadConfig(configPath)).rejects.toThrow('Configuration file not found');
    });

    test('loads valid TypeScript config', async () => {
      const configPath = join(tempDir.path, 'valid.config.ts');
      writeFileSync(
        configPath,
        `
        export default {
          generateGraphQL: true,
          excludeFields: ['password', 'hash'],
        };
      `,
        'utf-8',
      );

      const config = await loadConfig(configPath);

      // generateGraphQL: true normalizes to object
      expect(config.generateGraphQL).toEqual({
        nexus: true,
        nexusOutput: './nexus',
        client: false,
        clientOutput: './graphql',
      });
      expect(config.excludeFields).toEqual(['password', 'hash']);
    });
  });

  describe('DEFAULT_CONFIG', () => {
    test('has sensible defaults', () => {
      expect(DEFAULT_CONFIG.generateGraphQL).toBe(false);
      expect(DEFAULT_CONFIG.generateTypes).toBe(true);
      expect(DEFAULT_CONFIG.javaScript).toBe(false);
      expect(DEFAULT_CONFIG.prismaName).toBe('prisma');
      expect(DEFAULT_CONFIG.disableQueries).toBe(false);
      expect(DEFAULT_CONFIG.disableMutations).toBe(false);
    });
  });
});
