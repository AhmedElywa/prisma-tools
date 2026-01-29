/**
 * PrismaSelect Integration Tests
 *
 * Tests that the generated types work correctly with PrismaSelect.
 */

import { describe, test, expect, beforeAll } from 'bun:test';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT_DIR = join(import.meta.dir, '..');
const GENERATED_DIR = join(ROOT_DIR, 'generated', 'paljs');

describe('PrismaSelect Type Integration', () => {
  beforeAll(() => {
    // Ensure generation has completed
    expect(existsSync(GENERATED_DIR)).toBe(true);
  });

  describe('Generated Types Structure', () => {
    test('ModelsObject contains all non-excluded models', () => {
      const content = readFileSync(join(GENERATED_DIR, 'types', 'index.ts'), 'utf-8');

      // Should contain all models except AuditLog (excluded)
      expect(content).toContain('User: UserFields');
      expect(content).toContain('Post: PostFields');
      expect(content).toContain('Comment: CommentFields');
      expect(content).toContain('Profile: ProfileFields');
      expect(content).toContain('Tag: TagFields');
    });

    test('UserFields interface has correct properties', () => {
      const content = readFileSync(join(GENERATED_DIR, 'types', 'index.ts'), 'utf-8');

      // Check UserFields contains expected fields
      expect(content).toMatch(/interface UserFields[^}]*id[^}]*email/s);
    });

    test('ModelName type is a union of all model names', () => {
      const content = readFileSync(join(GENERATED_DIR, 'types', 'index.ts'), 'utf-8');

      expect(content).toContain("export type ModelName =");
      expect(content).toContain("'User'");
      expect(content).toContain("'Post'");
      expect(content).toContain("'Comment'");
      expect(content).toContain("'Profile'");
      expect(content).toContain("'Tag'");
    });
  });

  describe('DMMF Compatibility', () => {
    test('DMMF export is compatible with PrismaSelect', () => {
      const dmmfContent = readFileSync(join(GENERATED_DIR, 'dmmf', 'index.ts'), 'utf-8');

      // Should export dmmf as DMMF.Document
      expect(dmmfContent).toContain('export const dmmf');
      expect(dmmfContent).toContain('DMMF.Document');
    });

    test('DMMF JSON contains datamodel with models', () => {
      const dmmf = JSON.parse(readFileSync(join(GENERATED_DIR, 'dmmf', 'dmmf.json'), 'utf-8'));

      expect(dmmf.datamodel).toBeDefined();
      expect(dmmf.datamodel.models).toBeInstanceOf(Array);

      // Each model should have name and fields
      for (const model of dmmf.datamodel.models) {
        expect(model.name).toBeDefined();
        expect(model.fields).toBeInstanceOf(Array);
      }
    });
  });

  describe('Field Types', () => {
    test('scalar fields have correct types', () => {
      const dmmf = JSON.parse(readFileSync(join(GENERATED_DIR, 'dmmf', 'dmmf.json'), 'utf-8'));
      const userModel = dmmf.datamodel.models.find((m: any) => m.name === 'User');

      const idField = userModel.fields.find((f: any) => f.name === 'id');
      expect(idField.type).toBe('Int');
      expect(idField.kind).toBe('scalar');

      const emailField = userModel.fields.find((f: any) => f.name === 'email');
      expect(emailField.type).toBe('String');
      expect(emailField.isUnique).toBe(true);

      const roleField = userModel.fields.find((f: any) => f.name === 'role');
      expect(roleField.type).toBe('Role');
      expect(roleField.kind).toBe('enum');
    });

    test('relation fields have correct types', () => {
      const dmmf = JSON.parse(readFileSync(join(GENERATED_DIR, 'dmmf', 'dmmf.json'), 'utf-8'));
      const userModel = dmmf.datamodel.models.find((m: any) => m.name === 'User');

      const postsField = userModel.fields.find((f: any) => f.name === 'posts');
      expect(postsField.type).toBe('Post');
      expect(postsField.kind).toBe('object');
      expect(postsField.isList).toBe(true);

      const profileField = userModel.fields.find((f: any) => f.name === 'profile');
      expect(profileField.type).toBe('Profile');
      expect(profileField.kind).toBe('object');
      expect(profileField.isList).toBe(false);
    });
  });

  describe('Enum Types', () => {
    test('enums are correctly exported', () => {
      const content = readFileSync(join(GENERATED_DIR, 'types', 'index.ts'), 'utf-8');

      expect(content).toContain("export type Role =");
      expect(content).toContain("'USER'");
      expect(content).toContain("'ADMIN'");
      expect(content).toContain("'MODERATOR'");
    });

    test('DMMF contains enum definitions', () => {
      const dmmf = JSON.parse(readFileSync(join(GENERATED_DIR, 'dmmf', 'dmmf.json'), 'utf-8'));

      expect(dmmf.datamodel.enums).toBeInstanceOf(Array);
      const roleEnum = dmmf.datamodel.enums.find((e: any) => e.name === 'Role');
      expect(roleEnum).toBeDefined();
      expect(roleEnum.values).toBeInstanceOf(Array);
      expect(roleEnum.values.map((v: any) => v.name)).toContain('USER');
      expect(roleEnum.values.map((v: any) => v.name)).toContain('ADMIN');
    });
  });
});

describe('Index File Exports', () => {
  test('main index.ts exports dmmf', () => {
    const content = readFileSync(join(GENERATED_DIR, 'index.ts'), 'utf-8');
    expect(content).toContain("export { dmmf }");
  });

  test('main index.ts exports types', () => {
    const content = readFileSync(join(GENERATED_DIR, 'index.ts'), 'utf-8');
    expect(content).toContain("export * from './types/index.js'");
  });

  test('main index.ts exports nexus', () => {
    const content = readFileSync(join(GENERATED_DIR, 'index.ts'), 'utf-8');
    expect(content).toContain("export * from './nexus/index.js'");
  });

  test('main index.ts exports admin schema', () => {
    const content = readFileSync(join(GENERATED_DIR, 'index.ts'), 'utf-8');
    expect(content).toContain("adminSchema");
  });
});
