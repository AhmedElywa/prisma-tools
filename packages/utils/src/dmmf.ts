import { readFileSync } from 'fs';
import type { DMMF } from '@paljs/types';
import { getDMMF, getSchemaWithPath } from '@prisma/internals';

export const getSchemaPath = async (path?: string): Promise<string> => {
  const schema = await getSchemaWithPath(path);
  if (!schema) {
    throw new Error(
      `Could not find a 'schema.prisma' file that is required for this command.\n` +
        `You can either provide it with --schema, set it as 'prisma.schema' in your package.json ` +
        `or put it into the default location ./prisma/schema.prisma https://pris.ly/d/prisma-schema-location`,
    );
  }

  return schema?.schemaPath;
};

export const getDMMFBySchemaPath = async (schemaPath?: string): Promise<DMMF.Document> => {
  const schemaPathFromPrisma = await getSchemaPath(schemaPath);
  const schemaString = readFileSync(schemaPathFromPrisma, 'utf-8');
  return await getDMMF({ datamodel: schemaString });
};
