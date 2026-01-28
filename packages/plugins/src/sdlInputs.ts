import { writeFileSync } from 'fs';
import { type GraphQLSchema, printSchema } from 'graphql';

export const generateGraphQlSDLFile = (schema: GraphQLSchema, path = 'schema.graphql') => {
  writeFileSync(path, printSchema(schema));
};
