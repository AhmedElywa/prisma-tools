import { AnyNull } from '@prisma/client-runtime-utils';
import { DbNull } from '@prisma/client-runtime-utils';
import { Decimal } from '@prisma/client-runtime-utils';
import { isAnyNull } from '@prisma/client-runtime-utils';
import { isDbNull } from '@prisma/client-runtime-utils';
import { isJsonNull } from '@prisma/client-runtime-utils';
import { JsonNull } from '@prisma/client-runtime-utils';
import { NullTypes } from '@prisma/client-runtime-utils';

export { AnyNull }

declare type Args<T, F extends Operation> = T extends {
    [K: symbol]: {
        types: {
            operations: {
                [K in F]: {
                    args: any;
                };
            };
        };
    };
} ? T[symbol]['types']['operations'][F]['args'] : any;

export { DbNull }

export { Decimal }

declare type Exact<A, W> = (A extends unknown ? (W extends A ? {
    [K in keyof A]: Exact<A[K], W[K]>;
} : W) : never) | (A extends Narrowable ? A : never);

export declare function getRuntime(): GetRuntimeOutput;

declare type GetRuntimeOutput = {
    id: RuntimeName;
    prettyName: string;
    isEdge: boolean;
};

export { isAnyNull }

export { isDbNull }

export { isJsonNull }

export { JsonNull }

/**
 * Generates more strict variant of an enum which, unlike regular enum,
 * throws on non-existing property access. This can be useful in following situations:
 * - we have an API, that accepts both `undefined` and `SomeEnumType` as an input
 * - enum values are generated dynamically from DMMF.
 *
 * In that case, if using normal enums and no compile-time typechecking, using non-existing property
 * will result in `undefined` value being used, which will be accepted. Using strict enum
 * in this case will help to have a runtime exception, telling you that you are probably doing something wrong.
 *
 * Note: if you need to check for existence of a value in the enum you can still use either
 * `in` operator or `hasOwnProperty` function.
 *
 * @param definition
 * @returns
 */
export declare function makeStrictEnum<T extends Record<PropertyKey, string | number>>(definition: T): T;

declare type Narrowable = string | number | bigint | boolean | [];

export { NullTypes }

declare type Operation = 'findFirst' | 'findFirstOrThrow' | 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'aggregate' | 'count' | 'groupBy' | '$queryRaw' | '$executeRaw' | '$queryRawUnsafe' | '$executeRawUnsafe' | 'findRaw' | 'aggregateRaw' | '$runCommandRaw';

declare namespace Public {
    export {
        validator
    }
}
export { Public }

declare type RuntimeName = 'workerd' | 'deno' | 'netlify' | 'node' | 'bun' | 'edge-light' | '';

declare function validator<V>(): <S>(select: Exact<S, V>) => S;

declare function validator<C, M extends Exclude<keyof C, `$${string}`>, O extends keyof C[M] & Operation>(client: C, model: M, operation: O): <S>(select: Exact<S, Args<C[M], O>>) => S;

declare function validator<C, M extends Exclude<keyof C, `$${string}`>, O extends keyof C[M] & Operation, P extends keyof Args<C[M], O>>(client: C, model: M, operation: O, prop: P): <S>(select: Exact<S, Args<C[M], O>[P]>) => S;

export { }
