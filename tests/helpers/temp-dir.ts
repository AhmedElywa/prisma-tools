import { randomUUID } from 'node:crypto';
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

/**
 * Create a temporary directory for testing
 * Returns the path and a cleanup function
 */
export function createTempDir(prefix = 'paljs-test'): {
  path: string;
  cleanup: () => void;
} {
  const dirName = `${prefix}-${randomUUID().slice(0, 8)}`;
  const tempPath = join(tmpdir(), dirName);

  mkdirSync(tempPath, { recursive: true });

  return {
    path: tempPath,
    cleanup: () => {
      if (existsSync(tempPath)) {
        rmSync(tempPath, { recursive: true, force: true });
      }
    },
  };
}

/**
 * Copy a fixture to a temporary directory
 */
export function copyFixtureToTemp(
  fixturePath: string,
  prefix = 'paljs-test',
): {
  path: string;
  cleanup: () => void;
} {
  const { path: tempPath, cleanup } = createTempDir(prefix);

  cpSync(fixturePath, tempPath, { recursive: true });

  return { path: tempPath, cleanup };
}

/**
 * Get the path to a fixture file
 */
export function getFixturePath(...segments: string[]): string {
  return join(__dirname, '..', 'fixtures', ...segments);
}
