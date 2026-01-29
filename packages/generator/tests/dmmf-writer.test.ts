import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { DMMF } from '@prisma/generator-helper';
import { createTempDir } from '../../../tests/helpers/temp-dir';
import { writeDmmf, writeDmmfJson, writeDmmfTs } from '../src/writers/dmmf';

// Mock DMMF document for testing
const mockDmmf: DMMF.Document = {
  datamodel: {
    models: [
      {
        name: 'User',
        dbName: null,
        fields: [
          {
            name: 'id',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: true,
            isReadOnly: false,
            hasDefaultValue: true,
            type: 'Int',
            default: { name: 'autoincrement', args: [] },
            isGenerated: false,
            isUpdatedAt: false,
          },
          {
            name: 'email',
            kind: 'scalar',
            isList: false,
            isRequired: true,
            isUnique: true,
            isId: false,
            isReadOnly: false,
            hasDefaultValue: false,
            type: 'String',
            isGenerated: false,
            isUpdatedAt: false,
          },
        ],
        primaryKey: null,
        uniqueFields: [],
        uniqueIndexes: [],
        isGenerated: false,
      },
    ],
    enums: [],
    types: [],
  },
  schema: {
    inputObjectTypes: {
      prisma: [],
    },
    outputObjectTypes: {
      prisma: [],
      model: [],
    },
    enumTypes: {
      prisma: [],
    },
    fieldRefTypes: {
      prisma: [],
    },
  },
  mappings: {
    modelOperations: [],
    otherOperations: {
      read: [],
      write: [],
    },
  },
};

describe('DMMF Writer', () => {
  let tempDir: { path: string; cleanup: () => void };

  beforeAll(() => {
    tempDir = createTempDir('dmmf-writer-test');
  });

  afterAll(() => {
    tempDir.cleanup();
  });

  describe('writeDmmfJson', () => {
    test('creates dmmf.json file', () => {
      const jsonPath = writeDmmfJson(tempDir.path, mockDmmf);

      expect(existsSync(jsonPath)).toBe(true);
      expect(jsonPath).toContain('dmmf.json');
    });

    test('writes valid JSON', () => {
      const jsonPath = writeDmmfJson(tempDir.path, mockDmmf);
      const content = readFileSync(jsonPath, 'utf-8');
      const parsed = JSON.parse(content);

      expect(parsed.datamodel.models).toHaveLength(1);
      expect(parsed.datamodel.models[0].name).toBe('User');
    });
  });

  describe('writeDmmfTs', () => {
    test('creates index.ts file', () => {
      const tempDir2 = createTempDir('dmmf-ts-test');
      const tsPath = writeDmmfTs(tempDir2.path, mockDmmf);

      expect(existsSync(tsPath)).toBe(true);
      expect(tsPath).toContain('index.ts');

      tempDir2.cleanup();
    });

    test('writes TypeScript with DMMF export', () => {
      const tempDir2 = createTempDir('dmmf-ts-content');
      const tsPath = writeDmmfTs(tempDir2.path, mockDmmf);
      const content = readFileSync(tsPath, 'utf-8');

      expect(content).toContain('export const dmmf');
      expect(content).toContain('DMMF.Document');
      expect(content).toContain('DO NOT EDIT');

      tempDir2.cleanup();
    });
  });

  describe('writeDmmf', () => {
    test('creates both JSON and TS files', () => {
      const tempDir2 = createTempDir('dmmf-both');
      const { jsonPath, tsPath } = writeDmmf(tempDir2.path, mockDmmf);

      expect(existsSync(jsonPath)).toBe(true);
      expect(existsSync(tsPath)).toBe(true);

      tempDir2.cleanup();
    });

    test('creates dmmf directory', () => {
      const tempDir2 = createTempDir('dmmf-dir');
      writeDmmf(tempDir2.path, mockDmmf);

      const dmmfDir = join(tempDir2.path, 'dmmf');
      expect(existsSync(dmmfDir)).toBe(true);

      tempDir2.cleanup();
    });
  });
});
