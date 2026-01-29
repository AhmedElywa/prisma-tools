import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { createTempDir } from '../../../tests/helpers/temp-dir';
import { DEFAULT_CONFIG, findConfigPath, loadConfig, resolveConfig } from '../src/config/loader';
import type { PaljsConfig } from '../src/config/types';

describe('Config Edge Cases', () => {
  describe('resolveConfig', () => {
    test('returns default config for empty object', () => {
      const config = resolveConfig({});

      expect(config.generateTypes).toBe(true);
      expect(config.generateGraphQL).toBe(false);
      expect(config.generateAdmin).toBe(false);
      expect(config.prismaName).toBe('prisma');
      expect(config.excludeFields).toEqual([]);
      expect(config.excludeQueriesAndMutations).toEqual([]);
    });

    test('handles null-ish values by using defaults', () => {
      const config = resolveConfig({
        generateTypes: undefined,
        prismaName: undefined,
      } as any);

      expect(config.generateTypes).toBe(true);
      expect(config.prismaName).toBe('prisma');
    });

    test('handles explicit false values', () => {
      const config = resolveConfig({
        generateTypes: false,
        disableQueries: false,
        disableMutations: false,
      });

      expect(config.generateTypes).toBe(false);
      expect(config.disableQueries).toBe(false);
      expect(config.disableMutations).toBe(false);
    });

    test('handles explicit true values', () => {
      const config = resolveConfig({
        generateTypes: true,
        disableQueries: true,
        disableMutations: true,
      });

      expect(config.generateTypes).toBe(true);
      expect(config.disableQueries).toBe(true);
      expect(config.disableMutations).toBe(true);
    });

    test('preserves custom prismaName', () => {
      const config = resolveConfig({
        prismaName: 'db',
      });

      expect(config.prismaName).toBe('db');
    });

    test('preserves excludeFields array', () => {
      const config = resolveConfig({
        excludeFields: ['password', 'secret', 'token'],
      });

      expect(config.excludeFields).toEqual(['password', 'secret', 'token']);
    });

    test('preserves excludeQueriesAndMutations array', () => {
      const config = resolveConfig({
        excludeQueriesAndMutations: ['deleteMany', 'updateMany'],
      });

      expect(config.excludeQueriesAndMutations).toEqual(['deleteMany', 'updateMany']);
    });

    test('preserves excludeInputFields array', () => {
      const config = resolveConfig({
        excludeInputFields: ['createdAt', 'updatedAt'],
      });

      expect(config.excludeInputFields).toEqual(['createdAt', 'updatedAt']);
    });
  });

  describe('generateGraphQL normalization', () => {
    test('normalizes true to object with nexus enabled', () => {
      const config = resolveConfig({ generateGraphQL: true });

      expect(typeof config.generateGraphQL).toBe('object');
      expect((config.generateGraphQL as any).nexus).toBe(true);
      expect((config.generateGraphQL as any).client).toBe(false);
    });

    test('normalizes false to false', () => {
      const config = resolveConfig({ generateGraphQL: false });

      expect(config.generateGraphQL).toBe(false);
    });

    test('handles partial object config', () => {
      const config = resolveConfig({
        generateGraphQL: { client: true },
      });

      expect((config.generateGraphQL as any).nexus).toBe(true); // default
      expect((config.generateGraphQL as any).client).toBe(true);
    });

    test('handles explicit nexus: false', () => {
      const config = resolveConfig({
        generateGraphQL: { nexus: false, client: true },
      });

      expect((config.generateGraphQL as any).nexus).toBe(false);
      expect((config.generateGraphQL as any).client).toBe(true);
    });

    test('uses custom nexusOutput path', () => {
      const config = resolveConfig({
        generateGraphQL: { nexusOutput: './graphql/generated' },
      });

      expect((config.generateGraphQL as any).nexusOutput).toBe('./graphql/generated');
    });

    test('uses custom clientOutput path', () => {
      const config = resolveConfig({
        generateGraphQL: { client: true, clientOutput: './src/graphql' },
      });

      expect((config.generateGraphQL as any).clientOutput).toBe('./src/graphql');
    });

    test('uses legacy nexusOutput from root config', () => {
      const config = resolveConfig({
        generateGraphQL: true,
        nexusOutput: './legacy-nexus',
      });

      expect((config.generateGraphQL as any).nexusOutput).toBe('./legacy-nexus');
    });
  });

  describe('generateAdmin normalization', () => {
    test('normalizes true to object with enabled', () => {
      const config = resolveConfig({ generateAdmin: true });

      expect(typeof config.generateAdmin).toBe('object');
      expect((config.generateAdmin as any).enabled).toBe(true);
      expect((config.generateAdmin as any).output).toBe('./admin');
      expect((config.generateAdmin as any).routerType).toBe('app');
    });

    test('normalizes false to false', () => {
      const config = resolveConfig({ generateAdmin: false });

      expect(config.generateAdmin).toBe(false);
    });

    test('handles partial object config', () => {
      const config = resolveConfig({
        generateAdmin: { output: './my-admin' },
      });

      expect((config.generateAdmin as any).enabled).toBe(true); // default
      expect((config.generateAdmin as any).output).toBe('./my-admin');
    });

    test('handles explicit enabled: false', () => {
      const config = resolveConfig({
        generateAdmin: { enabled: false },
      });

      expect((config.generateAdmin as any).enabled).toBe(false);
    });

    test('uses pages router type', () => {
      const config = resolveConfig({
        generateAdmin: { routerType: 'pages' },
      });

      expect((config.generateAdmin as any).routerType).toBe('pages');
    });

    test('preserves models config', () => {
      const config = resolveConfig({
        generateAdmin: {
          models: {
            User: { exclude: true },
          },
        },
      });

      expect((config.generateAdmin as any).models).toBeDefined();
      expect((config.generateAdmin as any).models.User.exclude).toBe(true);
    });
  });

  describe('model configuration', () => {
    test('preserves per-model exclude', () => {
      const config = resolveConfig({
        models: {
          User: { exclude: true },
          Post: { exclude: false },
        },
      });

      expect(config.models?.User?.exclude).toBe(true);
      expect(config.models?.Post?.exclude).toBe(false);
    });

    test('preserves per-model excludeFields', () => {
      const config = resolveConfig({
        models: {
          User: { excludeFields: ['password', 'token'] },
        },
      });

      expect(config.models?.User?.excludeFields).toEqual(['password', 'token']);
    });

    test('preserves per-model excludeQueriesAndMutations', () => {
      const config = resolveConfig({
        models: {
          User: { excludeQueriesAndMutations: ['deleteOne', 'deleteMany'] },
        },
      });

      expect(config.models?.User?.excludeQueriesAndMutations).toEqual(['deleteOne', 'deleteMany']);
    });

    test('handles per-model queries and mutations flags', () => {
      const config = resolveConfig({
        models: {
          User: { queries: false, mutations: true },
          Post: { queries: true, mutations: false },
        },
      });

      expect(config.models?.User?.queries).toBe(false);
      expect(config.models?.User?.mutations).toBe(true);
      expect(config.models?.Post?.queries).toBe(true);
      expect(config.models?.Post?.mutations).toBe(false);
    });

    test('handles per-model disable flags', () => {
      const config = resolveConfig({
        models: {
          User: { disableQueries: true, disableMutations: false },
        },
      });

      expect(config.models?.User?.disableQueries).toBe(true);
      expect(config.models?.User?.disableMutations).toBe(false);
    });

    test('handles multiple models', () => {
      const config = resolveConfig({
        models: {
          User: { exclude: true },
          Post: { excludeFields: ['content'] },
          Comment: { mutations: false },
          Tag: { queries: false },
        },
      });

      expect(config.models?.User?.exclude).toBe(true);
      expect(config.models?.Post?.excludeFields).toEqual(['content']);
      expect(config.models?.Comment?.mutations).toBe(false);
      expect(config.models?.Tag?.queries).toBe(false);
    });
  });

  describe('doNotUseFieldUpdateOperationsInput', () => {
    test('defaults to false', () => {
      const config = resolveConfig({});

      expect(config.doNotUseFieldUpdateOperationsInput).toBe(false);
    });

    test('preserves true value', () => {
      const config = resolveConfig({
        doNotUseFieldUpdateOperationsInput: true,
      });

      expect(config.doNotUseFieldUpdateOperationsInput).toBe(true);
    });
  });

  describe('filterInputs function', () => {
    test('preserves filterInputs function', () => {
      const filterFn = (input: string) => !input.includes('Unchecked');
      const config = resolveConfig({
        filterInputs: filterFn,
      });

      expect(config.filterInputs).toBe(filterFn);
    });

    test('handles undefined filterInputs', () => {
      const config = resolveConfig({});

      expect(config.filterInputs).toBeUndefined();
    });
  });

  describe('adminSettingsPath', () => {
    test('uses default path', () => {
      const config = resolveConfig({});

      expect(config.adminSettingsPath).toBe('./prisma/admin-settings.json');
    });

    test('uses custom path', () => {
      const config = resolveConfig({
        adminSettingsPath: './config/admin.json',
      });

      expect(config.adminSettingsPath).toBe('./config/admin.json');
    });
  });

  describe('javaScript flag', () => {
    test('defaults to false', () => {
      const config = resolveConfig({});

      expect(config.javaScript).toBe(false);
    });

    test('preserves true value', () => {
      const config = resolveConfig({
        javaScript: true,
      });

      expect(config.javaScript).toBe(true);
    });
  });
});

describe('Config Loading', () => {
  let tempDir: { path: string; cleanup: () => void };

  beforeAll(() => {
    tempDir = createTempDir('config-loading');
  });

  afterAll(() => {
    tempDir.cleanup();
  });

  describe('findConfigPath', () => {
    test('finds paljs.config.ts', () => {
      const configPath = join(tempDir.path, 'paljs.config.ts');
      writeFileSync(configPath, 'export default {}');

      const found = findConfigPath(tempDir.path);

      expect(found).toBe(configPath);
      rmSync(configPath);
    });

    test('finds paljs.config.js', () => {
      const configPath = join(tempDir.path, 'paljs.config.js');
      writeFileSync(configPath, 'module.exports = {}');

      const found = findConfigPath(tempDir.path);

      expect(found).toBe(configPath);
      rmSync(configPath);
    });

    test('finds paljs.config.mjs', () => {
      const configPath = join(tempDir.path, 'paljs.config.mjs');
      writeFileSync(configPath, 'export default {}');

      const found = findConfigPath(tempDir.path);

      expect(found).toBe(configPath);
      rmSync(configPath);
    });

    test('prioritizes .ts over .js', () => {
      const tsPath = join(tempDir.path, 'paljs.config.ts');
      const jsPath = join(tempDir.path, 'paljs.config.js');
      writeFileSync(tsPath, 'export default {}');
      writeFileSync(jsPath, 'module.exports = {}');

      const found = findConfigPath(tempDir.path);

      expect(found).toBe(tsPath);
      rmSync(tsPath);
      rmSync(jsPath);
    });

    test('returns null when no config found', () => {
      const emptyDir = join(tempDir.path, 'empty');
      mkdirSync(emptyDir, { recursive: true });

      const found = findConfigPath(emptyDir);

      expect(found).toBeNull();
    });
  });

  describe('loadConfig', () => {
    test('loads valid ESM config', async () => {
      const configPath = join(tempDir.path, 'valid.config.mjs');
      writeFileSync(
        configPath,
        `
        export default {
          generateTypes: true,
          generateGraphQL: true,
          prismaName: 'db'
        }
      `,
      );

      const config = await loadConfig(configPath);

      expect(config.generateTypes).toBe(true);
      expect(typeof config.generateGraphQL).toBe('object');
      expect(config.prismaName).toBe('db');

      rmSync(configPath);
    });

    test('throws for non-existent config', async () => {
      const configPath = join(tempDir.path, 'non-existent.config.ts');

      await expect(loadConfig(configPath)).rejects.toThrow('Configuration file not found');
    });
  });
});

describe('DEFAULT_CONFIG', () => {
  test('has expected default values', () => {
    expect(DEFAULT_CONFIG.generateGraphQL).toBe(false);
    expect(DEFAULT_CONFIG.generateTypes).toBe(true);
    expect(DEFAULT_CONFIG.javaScript).toBe(false);
    expect(DEFAULT_CONFIG.generateAdmin).toBe(false);
    expect(DEFAULT_CONFIG.prismaName).toBe('prisma');
    expect(DEFAULT_CONFIG.excludeFields).toEqual([]);
    expect(DEFAULT_CONFIG.excludeInputFields).toEqual([]);
    expect(DEFAULT_CONFIG.excludeQueriesAndMutations).toEqual([]);
    expect(DEFAULT_CONFIG.disableQueries).toBe(false);
    expect(DEFAULT_CONFIG.disableMutations).toBe(false);
    expect(DEFAULT_CONFIG.models).toEqual({});
    expect(DEFAULT_CONFIG.doNotUseFieldUpdateOperationsInput).toBe(false);
    expect(DEFAULT_CONFIG.adminSettingsPath).toBe('./prisma/admin-settings.json');
  });
});
