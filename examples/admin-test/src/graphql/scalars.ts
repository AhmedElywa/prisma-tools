import { scalarType } from 'nexus';

export const DateTime = scalarType({
  name: 'DateTime',
  asNexusMethod: 'dateTime',
  parseValue(value: unknown): Date {
    if (typeof value === 'string' || typeof value === 'number') {
      return new Date(value);
    }
    throw new Error('Invalid DateTime value');
  },
  serialize(value: unknown): string {
    if (value instanceof Date) {
      return value.toISOString();
    }
    if (typeof value === 'string') {
      return value;
    }
    throw new Error('Invalid DateTime value');
  },
});

export const Json = scalarType({
  name: 'Json',
  asNexusMethod: 'json',
  parseValue(value: unknown) {
    return value;
  },
  serialize(value: unknown) {
    return value;
  },
});

export const BigInt = scalarType({
  name: 'BigInt',
  asNexusMethod: 'bigInt',
  parseValue(value: unknown) {
    if (typeof value === 'string' || typeof value === 'number') {
      return globalThis.BigInt(value);
    }
    throw new Error('Invalid BigInt value');
  },
  serialize(value: unknown): string {
    return String(value);
  },
});

export const Decimal = scalarType({
  name: 'Decimal',
  asNexusMethod: 'decimal',
  parseValue(value: unknown) {
    if (typeof value === 'string' || typeof value === 'number') {
      return parseFloat(String(value));
    }
    throw new Error('Invalid Decimal value');
  },
  serialize(value: unknown): string {
    return String(value);
  },
});

export const Bytes = scalarType({
  name: 'Bytes',
  asNexusMethod: 'bytes',
  parseValue(value: unknown) {
    if (typeof value === 'string') {
      return Buffer.from(value, 'base64');
    }
    throw new Error('Invalid Bytes value');
  },
  serialize(value: unknown): string {
    if (Buffer.isBuffer(value)) {
      return value.toString('base64');
    }
    throw new Error('Invalid Bytes value');
  },
});
