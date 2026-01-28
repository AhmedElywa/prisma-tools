import fs from 'fs-extra';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createDistPackageJson() {
  const rootPackageJson = await fs.readJson(path.join(__dirname, '../package.json'));
  
  // Create a modified package.json for the dist folder
  const distPackageJson = {
    ...rootPackageJson,
    // Update paths to be relative to dist folder
    main: './index.cjs',
    module: './index.js',
    types: './index.d.ts',
    exports: {
      '.': {
        import: {
          types: './index.d.ts',
          default: './index.js'
        },
        require: {
          types: './index.d.cts',
          default: './index.cjs'
        }
      },
      './style.css': './style.css'
    },
    // Remove scripts and devDependencies
    scripts: undefined,
    devDependencies: undefined,
    // Remove publishConfig since we're already in dist
    publishConfig: undefined,
    files: undefined
  };

  // Write the modified package.json to dist
  await fs.writeJson(path.join(__dirname, '../dist/package.json'), distPackageJson, { spaces: 2 });
  
  // Copy necessary files
  const filesToCopy = ['README.md', 'LICENSE'];
  for (const file of filesToCopy) {
    const srcPath = path.join(__dirname, '..', file);
    const destPath = path.join(__dirname, '../dist', file);
    if (await fs.pathExists(srcPath)) {
      await fs.copy(srcPath, destPath);
    }
  }
}

createDistPackageJson().catch(console.error);