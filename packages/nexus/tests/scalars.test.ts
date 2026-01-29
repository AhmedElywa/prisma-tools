import { describe, expect, test } from 'bun:test';
import * as DecimalJs from 'decimal.js';
import { type GraphQLScalarType, Kind } from 'graphql';

import { BigInt as BigIntScalar } from '../src/scalars/BigInt';
import { Bytes } from '../src/scalars/Bytes';
// Import scalars directly from source - these are already GraphQLScalarType instances
import { DateTime } from '../src/scalars/DateTime';
import { Decimal } from '../src/scalars/Decimal';
import { Json } from '../src/scalars/Json';

// Helper to get the underlying GraphQL scalar config
// asNexusMethod returns the scalar directly (it's a GraphQLScalarType)
function getScalarConfig(nexusScalar: any): GraphQLScalarType {
  return nexusScalar as GraphQLScalarType;
}

describe('DateTime Scalar', () => {
  const scalar = getScalarConfig(DateTime);

  test('has correct name', () => {
    expect(scalar.name).toBe('DateTime');
  });

  describe('serialize', () => {
    test('serializes Date object', () => {
      const date = new Date('2024-01-15T10:30:00.000Z');
      const result = scalar.serialize(date);

      // DateTime serializes to Date object (passthrough)
      expect(result).toBeInstanceOf(Date);
    });

    test('passes through Date objects', () => {
      const date = new Date('2024-06-15T15:45:30.123Z');
      const result = scalar.serialize(date);

      expect((result as Date).getFullYear()).toBe(2024);
      expect((result as Date).getMonth()).toBe(5); // June is month 5 (0-indexed)
    });
  });

  describe('parseValue', () => {
    test('parses ISO string to Date', () => {
      const result = scalar.parseValue('2024-01-15T10:30:00.000Z');

      expect(result).toBeInstanceOf(Date);
      expect((result as Date).toISOString()).toBe('2024-01-15T10:30:00.000Z');
    });

    test('parses datetime with timezone offset', () => {
      const result = scalar.parseValue('2024-01-15T10:30:00+05:00');

      expect(result).toBeInstanceOf(Date);
    });

    test('rejects invalid date strings', () => {
      expect(() => scalar.parseValue('not-a-date')).toThrow();
    });

    test('parses Date object', () => {
      const date = new Date('2024-01-15T10:30:00.000Z');
      const result = scalar.parseValue(date);

      expect(result).toBeInstanceOf(Date);
    });
  });

  describe('parseLiteral', () => {
    test('parses string literal', () => {
      const ast = { kind: Kind.STRING, value: '2024-01-15T10:30:00.000Z' };
      const result = scalar.parseLiteral(ast, {});

      expect(result).toBeInstanceOf(Date);
    });
  });
});

describe('Decimal Scalar', () => {
  const scalar = getScalarConfig(Decimal);

  test('has correct name', () => {
    expect(scalar.name).toBe('Decimal');
  });

  test('has correct description', () => {
    expect(scalar.description).toBe('An arbitrary-precision Decimal type');
  });

  describe('serialize', () => {
    test('serializes Decimal.js value to string', () => {
      const decimal = new DecimalJs.Decimal('123.456');
      const result = scalar.serialize(decimal);

      expect(result).toBe('123.456');
    });

    test('serializes large decimal values', () => {
      const decimal = new DecimalJs.Decimal('999999999999999.123456789');
      const result = scalar.serialize(decimal);

      expect(result).toBe('999999999999999.123456789');
    });

    test('serializes negative decimals', () => {
      const decimal = new DecimalJs.Decimal('-42.5');
      const result = scalar.serialize(decimal);

      expect(result).toBe('-42.5');
    });

    test('serializes zero', () => {
      const decimal = new DecimalJs.Decimal('0');
      const result = scalar.serialize(decimal);

      expect(result).toBe('0');
    });

    test('serializes integer Decimals', () => {
      const decimal = new DecimalJs.Decimal('100');
      const result = scalar.serialize(decimal);

      expect(result).toBe('100');
    });
  });

  describe('parseValue', () => {
    test('parses string to Decimal.js', () => {
      const result = scalar.parseValue('123.456') as DecimalJs.Decimal;

      expect(result).toBeInstanceOf(DecimalJs.Decimal);
      expect(result.toString()).toBe('123.456');
    });

    test('parses number to Decimal.js', () => {
      const result = scalar.parseValue(42.5) as DecimalJs.Decimal;

      expect(result).toBeInstanceOf(DecimalJs.Decimal);
      expect(result.toNumber()).toBe(42.5);
    });

    test('parses negative values', () => {
      const result = scalar.parseValue('-100.25') as DecimalJs.Decimal;

      expect(result.toString()).toBe('-100.25');
    });

    test('parses integer string', () => {
      const result = scalar.parseValue('100') as DecimalJs.Decimal;

      expect(result.toString()).toBe('100');
    });
  });

  describe('parseLiteral', () => {
    test('parses INT literal', () => {
      const ast = { kind: Kind.INT, value: '42' };
      const result = scalar.parseLiteral(ast, {}) as DecimalJs.Decimal;

      expect(result).toBeInstanceOf(DecimalJs.Decimal);
      expect(result.toString()).toBe('42');
    });

    test('parses FLOAT literal', () => {
      const ast = { kind: Kind.FLOAT, value: '42.5' };
      const result = scalar.parseLiteral(ast, {}) as DecimalJs.Decimal;

      expect(result).toBeInstanceOf(DecimalJs.Decimal);
      expect(result.toString()).toBe('42.5');
    });

    test('parses STRING literal', () => {
      const ast = { kind: Kind.STRING, value: '123.456' };
      const result = scalar.parseLiteral(ast, {}) as DecimalJs.Decimal;

      expect(result).toBeInstanceOf(DecimalJs.Decimal);
      expect(result.toString()).toBe('123.456');
    });

    test('returns null for invalid AST kind', () => {
      const ast = { kind: Kind.BOOLEAN, value: true };
      const result = scalar.parseLiteral(ast, {});

      expect(result).toBeNull();
    });

    test('returns null for OBJECT kind', () => {
      const ast = { kind: Kind.OBJECT, fields: [] };
      const result = scalar.parseLiteral(ast, {});

      expect(result).toBeNull();
    });
  });

  describe('precision', () => {
    test('maintains precision for high-precision values', () => {
      const highPrecision = '123456789.123456789123456789';
      const result = scalar.parseValue(highPrecision) as DecimalJs.Decimal;

      expect(result.toString()).toBe(highPrecision);
    });
  });
});

describe('BigInt Scalar', () => {
  const scalar = getScalarConfig(BigIntScalar);

  test('has correct name', () => {
    expect(scalar.name).toBe('BigInt');
  });

  test('has description', () => {
    expect(scalar.description).toContain('BigInt');
  });

  describe('serialize', () => {
    test('serializes BigInt', () => {
      const bigint = globalThis.BigInt('9007199254740993');
      const result = scalar.serialize(bigint);

      // BigInt serialization behavior from graphql-scalars
      expect(String(result)).toBe('9007199254740993');
    });

    test('serializes negative BigInt', () => {
      const bigint = globalThis.BigInt('-123456789012345678');
      const result = scalar.serialize(bigint);

      expect(String(result)).toBe('-123456789012345678');
    });

    test('serializes very large BigInt', () => {
      const bigint = globalThis.BigInt('999999999999999999999999999999');
      const result = scalar.serialize(bigint);

      expect(String(result)).toBe('999999999999999999999999999999');
    });
  });

  describe('parseValue', () => {
    test('parses string to BigInt', () => {
      const result = scalar.parseValue('9007199254740993');

      expect(typeof result).toBe('bigint');
      expect(result.toString()).toBe('9007199254740993');
    });

    test('parses negative string to BigInt', () => {
      const result = scalar.parseValue('-9007199254740993');

      expect(result.toString()).toBe('-9007199254740993');
    });

    test('handles large BigInt strings', () => {
      const result = scalar.parseValue('999999999999999999999999');

      expect(result.toString()).toBe('999999999999999999999999');
    });
  });

  describe('parseLiteral', () => {
    test('parses INT literal to BigInt', () => {
      const ast = { kind: Kind.INT, value: '9007199254740993' };
      const result = scalar.parseLiteral(ast, {});

      expect(typeof result).toBe('bigint');
      expect(result?.toString()).toBe('9007199254740993');
    });

    test('parses STRING literal to BigInt', () => {
      const ast = { kind: Kind.STRING, value: '123456789012345678' };
      const result = scalar.parseLiteral(ast, {});

      expect(typeof result).toBe('bigint');
    });
  });
});

describe('Bytes Scalar', () => {
  const scalar = getScalarConfig(Bytes);

  test('has correct name "Bytes"', () => {
    expect(scalar.name).toBe('Bytes');
  });

  describe('serialize', () => {
    test('serializes Buffer', () => {
      const buffer = Buffer.from('Hello World');
      const result = scalar.serialize(buffer);

      // The result type depends on the graphql-scalars implementation
      expect(result).toBeDefined();
    });

    test('serializes empty Buffer', () => {
      const buffer = Buffer.from('');
      const result = scalar.serialize(buffer);

      expect(result).toBeDefined();
    });
  });

  describe('parseValue', () => {
    test('parses base64 string', () => {
      const result = scalar.parseValue('SGVsbG8gV29ybGQ=');

      expect(result).toBeDefined();
    });
  });

  describe('parseLiteral', () => {
    test('parses STRING literal', () => {
      const ast = { kind: Kind.STRING, value: 'SGVsbG8=' };
      const result = scalar.parseLiteral(ast, {});

      expect(result).toBeDefined();
    });
  });
});

describe('Json Scalar', () => {
  const scalar = getScalarConfig(Json);

  test('has correct name "Json"', () => {
    expect(scalar.name).toBe('Json');
  });

  describe('serialize', () => {
    test('serializes object', () => {
      const obj = { foo: 'bar', count: 42 };
      const result = scalar.serialize(obj);

      expect(result).toEqual(obj);
    });

    test('serializes array', () => {
      const arr = [1, 2, 3, 'a', 'b'];
      const result = scalar.serialize(arr);

      expect(result).toEqual(arr);
    });

    test('serializes nested object', () => {
      const nested = { a: { b: { c: 1 } } };
      const result = scalar.serialize(nested);

      expect(result).toEqual(nested);
    });

    test('serializes null', () => {
      const result = scalar.serialize(null);

      expect(result).toBeNull();
    });

    test('serializes primitives', () => {
      expect(scalar.serialize('string')).toBe('string');
      expect(scalar.serialize(42)).toBe(42);
      expect(scalar.serialize(true)).toBe(true);
    });
  });

  describe('parseValue', () => {
    test('parses object', () => {
      const obj = { foo: 'bar' };
      const result = scalar.parseValue(obj);

      expect(result).toEqual(obj);
    });

    test('parses array', () => {
      const arr = [1, 2, 3];
      const result = scalar.parseValue(arr);

      expect(result).toEqual(arr);
    });

    test('parses nested JSON', () => {
      const nested = { level1: { level2: { value: 'deep' } } };
      const result = scalar.parseValue(nested);

      expect(result).toEqual(nested);
    });

    test('parses null', () => {
      const result = scalar.parseValue(null);

      expect(result).toBeNull();
    });
  });

  describe('parseLiteral', () => {
    test('parses OBJECT literal', () => {
      const ast = {
        kind: Kind.OBJECT,
        fields: [
          {
            kind: Kind.OBJECT_FIELD,
            name: { kind: Kind.NAME, value: 'key' },
            value: { kind: Kind.STRING, value: 'value' },
          },
        ],
      };
      const result = scalar.parseLiteral(ast, {});

      expect(result).toEqual({ key: 'value' });
    });

    test('parses LIST literal', () => {
      const ast = {
        kind: Kind.LIST,
        values: [
          { kind: Kind.INT, value: '1' },
          { kind: Kind.INT, value: '2' },
          { kind: Kind.INT, value: '3' },
        ],
      };
      const result = scalar.parseLiteral(ast, {});

      expect(result).toEqual([1, 2, 3]);
    });

    test('parses STRING literal', () => {
      const ast = { kind: Kind.STRING, value: 'hello' };
      const result = scalar.parseLiteral(ast, {});

      expect(result).toBe('hello');
    });

    test('parses INT literal', () => {
      const ast = { kind: Kind.INT, value: '42' };
      const result = scalar.parseLiteral(ast, {});

      expect(result).toBe(42);
    });

    test('parses BOOLEAN literal', () => {
      const ast = { kind: Kind.BOOLEAN, value: true };
      const result = scalar.parseLiteral(ast, {});

      expect(result).toBe(true);
    });

    test('parses NULL literal', () => {
      const ast = { kind: Kind.NULL };
      const result = scalar.parseLiteral(ast, {});

      expect(result).toBeNull();
    });
  });
});

describe('Scalar Integration', () => {
  test('all scalars have required methods', () => {
    const scalars = [
      getScalarConfig(DateTime),
      getScalarConfig(Decimal),
      getScalarConfig(BigIntScalar),
      getScalarConfig(Bytes),
      getScalarConfig(Json),
    ];

    for (const scalar of scalars) {
      expect(scalar.name).toBeDefined();
      expect(typeof scalar.serialize).toBe('function');
      expect(typeof scalar.parseValue).toBe('function');
      expect(typeof scalar.parseLiteral).toBe('function');
    }
  });

  test('all scalars are valid GraphQLScalarType', () => {
    const scalars = [DateTime, Decimal, BigIntScalar, Bytes, Json];

    for (const scalar of scalars) {
      expect(scalar).toBeDefined();
      expect(typeof scalar).toBe('object');
    }
  });

  test('Decimal round-trip serialization works', () => {
    const decimalScalar = getScalarConfig(Decimal);

    // Original value
    const original = new DecimalJs.Decimal('123.456789');

    // Serialize
    const serialized = decimalScalar.serialize(original);

    // Parse back
    const parsed = decimalScalar.parseValue(serialized) as DecimalJs.Decimal;

    expect(parsed.toString()).toBe(original.toString());
  });

  test('Json round-trip serialization works', () => {
    const jsonScalar = getScalarConfig(Json);

    const original = { nested: { value: [1, 2, 3] } };

    const serialized = jsonScalar.serialize(original);
    const parsed = jsonScalar.parseValue(serialized);

    expect(parsed).toEqual(original);
  });
});
