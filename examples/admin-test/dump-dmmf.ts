import { writeFileSync } from 'fs';
import { join } from 'path';

// Import the generated DMMF
import dmmf from './src/generated/paljs/dmmf';

// Write to temp file
const outputPath = join(import.meta.dirname, 'dmmf-dump.json');
writeFileSync(outputPath, JSON.stringify(dmmf, null, 2), 'utf-8');
console.log(`DMMF dumped to: ${outputPath}`);

// Also search for fields with Null type
const schema = dmmf.schema;
const nullFields: any[] = [];

const inputTypes = [...schema.inputObjectTypes.prisma];
if (schema.inputObjectTypes.model) {
  inputTypes.push(...schema.inputObjectTypes.model);
}

for (const input of inputTypes) {
  for (const field of input.fields) {
    const hasNull = field.inputTypes.some((t: any) => t.type === 'Null');
    if (hasNull) {
      nullFields.push({
        inputName: input.name,
        fieldName: field.name,
        inputTypes: field.inputTypes,
      });
    }
  }
}

console.log('\n=== Fields with Null type ===');
console.log(JSON.stringify(nullFields.slice(0, 5), null, 2));
console.log(`\nTotal fields with Null: ${nullFields.length}`);
