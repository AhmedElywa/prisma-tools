import { printSchema } from 'graphql';
import { makeSchema } from 'nexus';
import { type Settings, paljs } from '../src';

export const generateSchema = <
  ModelName extends string = '',
  ModelsObject extends Record<ModelName, Record<string, any>> = Record<ModelName, Record<string, any>>,
>(
  settings?: Settings<ModelName, ModelsObject>,
) =>
  printSchema(
    makeSchema({
      types: [],
      plugins: [paljs(settings)],
      outputs: false,
    }),
  );
