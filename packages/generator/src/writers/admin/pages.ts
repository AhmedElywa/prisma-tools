/**
 * Admin pages generator
 * Generates Next.js admin pages for the PalJS Admin UI
 */

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { DMMF } from '@prisma/generator-helper';
import type { AdminConfig, ResolvedConfig } from '../../config/types.js';
import { ensureDir } from '../../utils/paths.js';

export interface AdminPagesGeneratorOptions {
  outputDir: string;
  dmmf: DMMF.Document;
  config: ResolvedConfig;
}

/**
 * App Router page template
 */
function generateAppRouterPage(modelName: string): string {
  return `import React from 'react';
import PrismaTable from 'components/PrismaTable';

export default function ${modelName}Page() {
  return <PrismaTable model="${modelName}" />;
}
`;
}

/**
 * Pages Router page template
 */
function generatePagesRouterPage(modelName: string): string {
  return `import React from 'react';
import PrismaTable from 'components/PrismaTable';

const ${modelName}: React.FC = () => {
  return <PrismaTable model="${modelName}" />;
};

export default ${modelName};
`;
}

/**
 * App Router layout template
 */
function generateAppRouterLayout(): string {
  return `export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
`;
}

/**
 * App Router models layout template
 */
function generateAppRouterModelsLayout(): string {
  return `export default function ModelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
`;
}

/**
 * Generate admin pages for App Router
 */
function generateAppRouterPages(models: DMMF.Model[], adminDir: string, adminConfig: AdminConfig | null): string[] {
  const generatedPaths: string[] = [];
  const modelsDir = join(adminDir, 'models');
  ensureDir(modelsDir);

  // Generate root layout
  const layoutPath = join(adminDir, 'layout.tsx');
  writeFileSync(layoutPath, generateAppRouterLayout(), 'utf-8');
  generatedPaths.push(layoutPath);

  // Generate models layout
  const modelsLayoutPath = join(modelsDir, 'layout.tsx');
  writeFileSync(modelsLayoutPath, generateAppRouterModelsLayout(), 'utf-8');
  generatedPaths.push(modelsLayoutPath);

  // Generate page for each model
  for (const model of models) {
    const modelDir = join(modelsDir, model.name);
    ensureDir(modelDir);

    const pageContent = adminConfig?.pageContent || generateAppRouterPage(model.name);
    const pagePath = join(modelDir, 'page.tsx');
    writeFileSync(pagePath, pageContent, 'utf-8');
    generatedPaths.push(pagePath);
  }

  return generatedPaths;
}

/**
 * Generate admin pages for Pages Router
 */
function generatePagesRouterPages(models: DMMF.Model[], adminDir: string, adminConfig: AdminConfig | null): string[] {
  const generatedPaths: string[] = [];
  const modelsDir = join(adminDir, 'models');
  ensureDir(modelsDir);

  // Generate page for each model
  for (const model of models) {
    const pageContent = adminConfig?.pageContent || generatePagesRouterPage(model.name);
    const pagePath = join(modelsDir, `${model.name}.tsx`);
    writeFileSync(pagePath, pageContent, 'utf-8');
    generatedPaths.push(pagePath);
  }

  return generatedPaths;
}

/**
 * Write admin pages to output directory
 */
export function writeAdminPages(options: AdminPagesGeneratorOptions): string[] {
  const { outputDir, dmmf, config } = options;

  const adminConfig = typeof config.generateAdmin === 'object' ? config.generateAdmin : null;
  if (!adminConfig?.enabled) {
    return [];
  }

  const adminDir = join(outputDir, adminConfig.output || 'admin');
  ensureDir(adminDir);

  // Filter models if specific ones are requested
  let models = [...dmmf.datamodel.models];
  if (adminConfig.models) {
    models = models.filter((m) => adminConfig.models!.includes(m.name));
  }

  // Exclude models that are marked as excluded or hidden
  models = models.filter((m) => {
    const modelConfig = config.models?.[m.name];
    if (modelConfig?.exclude) return false;
    if (modelConfig?.admin?.hide) return false;
    return true;
  });

  // Generate pages based on router type
  const routerType = adminConfig.routerType || 'app';

  if (routerType === 'app') {
    return generateAppRouterPages(models, adminDir, adminConfig);
  } else {
    return generatePagesRouterPages(models, adminDir, adminConfig);
  }
}

/**
 * Generate page content for testing without writing files
 */
export function generateAdminPageContent(modelName: string, routerType: 'app' | 'pages'): string {
  if (routerType === 'app') {
    return generateAppRouterPage(modelName);
  }
  return generatePagesRouterPage(modelName);
}
