
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ShortURL
 * 
 */
export type ShortURL = $Result.DefaultSelection<Prisma.$ShortURLPayload>
/**
 * Model ClickAnalytics
 * 
 */
export type ClickAnalytics = $Result.DefaultSelection<Prisma.$ClickAnalyticsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shortURL`: Exposes CRUD operations for the **ShortURL** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShortURLS
    * const shortURLS = await prisma.shortURL.findMany()
    * ```
    */
  get shortURL(): Prisma.ShortURLDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clickAnalytics`: Exposes CRUD operations for the **ClickAnalytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClickAnalytics
    * const clickAnalytics = await prisma.clickAnalytics.findMany()
    * ```
    */
  get clickAnalytics(): Prisma.ClickAnalyticsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ShortURL: 'ShortURL',
    ClickAnalytics: 'ClickAnalytics'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "shortURL" | "clickAnalytics"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ShortURL: {
        payload: Prisma.$ShortURLPayload<ExtArgs>
        fields: Prisma.ShortURLFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShortURLFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortURLPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShortURLFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortURLPayload>
          }
          findFirst: {
            args: Prisma.ShortURLFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortURLPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShortURLFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortURLPayload>
          }
          findMany: {
            args: Prisma.ShortURLFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortURLPayload>[]
          }
          create: {
            args: Prisma.ShortURLCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortURLPayload>
          }
          createMany: {
            args: Prisma.ShortURLCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShortURLCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortURLPayload>[]
          }
          delete: {
            args: Prisma.ShortURLDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortURLPayload>
          }
          update: {
            args: Prisma.ShortURLUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortURLPayload>
          }
          deleteMany: {
            args: Prisma.ShortURLDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShortURLUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShortURLUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortURLPayload>[]
          }
          upsert: {
            args: Prisma.ShortURLUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortURLPayload>
          }
          aggregate: {
            args: Prisma.ShortURLAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShortURL>
          }
          groupBy: {
            args: Prisma.ShortURLGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShortURLGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShortURLCountArgs<ExtArgs>
            result: $Utils.Optional<ShortURLCountAggregateOutputType> | number
          }
        }
      }
      ClickAnalytics: {
        payload: Prisma.$ClickAnalyticsPayload<ExtArgs>
        fields: Prisma.ClickAnalyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClickAnalyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickAnalyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClickAnalyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickAnalyticsPayload>
          }
          findFirst: {
            args: Prisma.ClickAnalyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickAnalyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClickAnalyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickAnalyticsPayload>
          }
          findMany: {
            args: Prisma.ClickAnalyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickAnalyticsPayload>[]
          }
          create: {
            args: Prisma.ClickAnalyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickAnalyticsPayload>
          }
          createMany: {
            args: Prisma.ClickAnalyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClickAnalyticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickAnalyticsPayload>[]
          }
          delete: {
            args: Prisma.ClickAnalyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickAnalyticsPayload>
          }
          update: {
            args: Prisma.ClickAnalyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickAnalyticsPayload>
          }
          deleteMany: {
            args: Prisma.ClickAnalyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClickAnalyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClickAnalyticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickAnalyticsPayload>[]
          }
          upsert: {
            args: Prisma.ClickAnalyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickAnalyticsPayload>
          }
          aggregate: {
            args: Prisma.ClickAnalyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClickAnalytics>
          }
          groupBy: {
            args: Prisma.ClickAnalyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClickAnalyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClickAnalyticsCountArgs<ExtArgs>
            result: $Utils.Optional<ClickAnalyticsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    shortURL?: ShortURLOmit
    clickAnalytics?: ClickAnalyticsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    shortUrls: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shortUrls?: boolean | UserCountOutputTypeCountShortUrlsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShortUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShortURLWhereInput
  }


  /**
   * Count Type ShortURLCountOutputType
   */

  export type ShortURLCountOutputType = {
    analytics: number
  }

  export type ShortURLCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analytics?: boolean | ShortURLCountOutputTypeCountAnalyticsArgs
  }

  // Custom InputTypes
  /**
   * ShortURLCountOutputType without action
   */
  export type ShortURLCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortURLCountOutputType
     */
    select?: ShortURLCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShortURLCountOutputType without action
   */
  export type ShortURLCountOutputTypeCountAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClickAnalyticsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shortUrls?: boolean | User$shortUrlsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shortUrls?: boolean | User$shortUrlsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      shortUrls: Prisma.$ShortURLPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shortUrls<T extends User$shortUrlsArgs<ExtArgs> = {}>(args?: Subset<T, User$shortUrlsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortURLPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.shortUrls
   */
  export type User$shortUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortURL
     */
    select?: ShortURLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortURL
     */
    omit?: ShortURLOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortURLInclude<ExtArgs> | null
    where?: ShortURLWhereInput
    orderBy?: ShortURLOrderByWithRelationInput | ShortURLOrderByWithRelationInput[]
    cursor?: ShortURLWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShortURLScalarFieldEnum | ShortURLScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ShortURL
   */

  export type AggregateShortURL = {
    _count: ShortURLCountAggregateOutputType | null
    _avg: ShortURLAvgAggregateOutputType | null
    _sum: ShortURLSumAggregateOutputType | null
    _min: ShortURLMinAggregateOutputType | null
    _max: ShortURLMaxAggregateOutputType | null
  }

  export type ShortURLAvgAggregateOutputType = {
    clickCount: number | null
  }

  export type ShortURLSumAggregateOutputType = {
    clickCount: number | null
  }

  export type ShortURLMinAggregateOutputType = {
    id: string | null
    userId: string | null
    originalUrl: string | null
    shortCode: string | null
    clickCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShortURLMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    originalUrl: string | null
    shortCode: string | null
    clickCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShortURLCountAggregateOutputType = {
    id: number
    userId: number
    originalUrl: number
    shortCode: number
    clickCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShortURLAvgAggregateInputType = {
    clickCount?: true
  }

  export type ShortURLSumAggregateInputType = {
    clickCount?: true
  }

  export type ShortURLMinAggregateInputType = {
    id?: true
    userId?: true
    originalUrl?: true
    shortCode?: true
    clickCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShortURLMaxAggregateInputType = {
    id?: true
    userId?: true
    originalUrl?: true
    shortCode?: true
    clickCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShortURLCountAggregateInputType = {
    id?: true
    userId?: true
    originalUrl?: true
    shortCode?: true
    clickCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShortURLAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShortURL to aggregate.
     */
    where?: ShortURLWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortURLS to fetch.
     */
    orderBy?: ShortURLOrderByWithRelationInput | ShortURLOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShortURLWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortURLS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortURLS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShortURLS
    **/
    _count?: true | ShortURLCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShortURLAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShortURLSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShortURLMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShortURLMaxAggregateInputType
  }

  export type GetShortURLAggregateType<T extends ShortURLAggregateArgs> = {
        [P in keyof T & keyof AggregateShortURL]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShortURL[P]>
      : GetScalarType<T[P], AggregateShortURL[P]>
  }




  export type ShortURLGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShortURLWhereInput
    orderBy?: ShortURLOrderByWithAggregationInput | ShortURLOrderByWithAggregationInput[]
    by: ShortURLScalarFieldEnum[] | ShortURLScalarFieldEnum
    having?: ShortURLScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShortURLCountAggregateInputType | true
    _avg?: ShortURLAvgAggregateInputType
    _sum?: ShortURLSumAggregateInputType
    _min?: ShortURLMinAggregateInputType
    _max?: ShortURLMaxAggregateInputType
  }

  export type ShortURLGroupByOutputType = {
    id: string
    userId: string
    originalUrl: string
    shortCode: string
    clickCount: number
    createdAt: Date
    updatedAt: Date
    _count: ShortURLCountAggregateOutputType | null
    _avg: ShortURLAvgAggregateOutputType | null
    _sum: ShortURLSumAggregateOutputType | null
    _min: ShortURLMinAggregateOutputType | null
    _max: ShortURLMaxAggregateOutputType | null
  }

  type GetShortURLGroupByPayload<T extends ShortURLGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShortURLGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShortURLGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShortURLGroupByOutputType[P]>
            : GetScalarType<T[P], ShortURLGroupByOutputType[P]>
        }
      >
    >


  export type ShortURLSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    originalUrl?: boolean
    shortCode?: boolean
    clickCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    analytics?: boolean | ShortURL$analyticsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ShortURLCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shortURL"]>

  export type ShortURLSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    originalUrl?: boolean
    shortCode?: boolean
    clickCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shortURL"]>

  export type ShortURLSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    originalUrl?: boolean
    shortCode?: boolean
    clickCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shortURL"]>

  export type ShortURLSelectScalar = {
    id?: boolean
    userId?: boolean
    originalUrl?: boolean
    shortCode?: boolean
    clickCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShortURLOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "originalUrl" | "shortCode" | "clickCount" | "createdAt" | "updatedAt", ExtArgs["result"]["shortURL"]>
  export type ShortURLInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analytics?: boolean | ShortURL$analyticsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ShortURLCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShortURLIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShortURLIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ShortURLPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShortURL"
    objects: {
      analytics: Prisma.$ClickAnalyticsPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      originalUrl: string
      shortCode: string
      clickCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shortURL"]>
    composites: {}
  }

  type ShortURLGetPayload<S extends boolean | null | undefined | ShortURLDefaultArgs> = $Result.GetResult<Prisma.$ShortURLPayload, S>

  type ShortURLCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShortURLFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShortURLCountAggregateInputType | true
    }

  export interface ShortURLDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShortURL'], meta: { name: 'ShortURL' } }
    /**
     * Find zero or one ShortURL that matches the filter.
     * @param {ShortURLFindUniqueArgs} args - Arguments to find a ShortURL
     * @example
     * // Get one ShortURL
     * const shortURL = await prisma.shortURL.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShortURLFindUniqueArgs>(args: SelectSubset<T, ShortURLFindUniqueArgs<ExtArgs>>): Prisma__ShortURLClient<$Result.GetResult<Prisma.$ShortURLPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShortURL that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShortURLFindUniqueOrThrowArgs} args - Arguments to find a ShortURL
     * @example
     * // Get one ShortURL
     * const shortURL = await prisma.shortURL.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShortURLFindUniqueOrThrowArgs>(args: SelectSubset<T, ShortURLFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShortURLClient<$Result.GetResult<Prisma.$ShortURLPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShortURL that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortURLFindFirstArgs} args - Arguments to find a ShortURL
     * @example
     * // Get one ShortURL
     * const shortURL = await prisma.shortURL.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShortURLFindFirstArgs>(args?: SelectSubset<T, ShortURLFindFirstArgs<ExtArgs>>): Prisma__ShortURLClient<$Result.GetResult<Prisma.$ShortURLPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShortURL that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortURLFindFirstOrThrowArgs} args - Arguments to find a ShortURL
     * @example
     * // Get one ShortURL
     * const shortURL = await prisma.shortURL.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShortURLFindFirstOrThrowArgs>(args?: SelectSubset<T, ShortURLFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShortURLClient<$Result.GetResult<Prisma.$ShortURLPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShortURLS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortURLFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShortURLS
     * const shortURLS = await prisma.shortURL.findMany()
     * 
     * // Get first 10 ShortURLS
     * const shortURLS = await prisma.shortURL.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shortURLWithIdOnly = await prisma.shortURL.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShortURLFindManyArgs>(args?: SelectSubset<T, ShortURLFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortURLPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShortURL.
     * @param {ShortURLCreateArgs} args - Arguments to create a ShortURL.
     * @example
     * // Create one ShortURL
     * const ShortURL = await prisma.shortURL.create({
     *   data: {
     *     // ... data to create a ShortURL
     *   }
     * })
     * 
     */
    create<T extends ShortURLCreateArgs>(args: SelectSubset<T, ShortURLCreateArgs<ExtArgs>>): Prisma__ShortURLClient<$Result.GetResult<Prisma.$ShortURLPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShortURLS.
     * @param {ShortURLCreateManyArgs} args - Arguments to create many ShortURLS.
     * @example
     * // Create many ShortURLS
     * const shortURL = await prisma.shortURL.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShortURLCreateManyArgs>(args?: SelectSubset<T, ShortURLCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShortURLS and returns the data saved in the database.
     * @param {ShortURLCreateManyAndReturnArgs} args - Arguments to create many ShortURLS.
     * @example
     * // Create many ShortURLS
     * const shortURL = await prisma.shortURL.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShortURLS and only return the `id`
     * const shortURLWithIdOnly = await prisma.shortURL.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShortURLCreateManyAndReturnArgs>(args?: SelectSubset<T, ShortURLCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortURLPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShortURL.
     * @param {ShortURLDeleteArgs} args - Arguments to delete one ShortURL.
     * @example
     * // Delete one ShortURL
     * const ShortURL = await prisma.shortURL.delete({
     *   where: {
     *     // ... filter to delete one ShortURL
     *   }
     * })
     * 
     */
    delete<T extends ShortURLDeleteArgs>(args: SelectSubset<T, ShortURLDeleteArgs<ExtArgs>>): Prisma__ShortURLClient<$Result.GetResult<Prisma.$ShortURLPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShortURL.
     * @param {ShortURLUpdateArgs} args - Arguments to update one ShortURL.
     * @example
     * // Update one ShortURL
     * const shortURL = await prisma.shortURL.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShortURLUpdateArgs>(args: SelectSubset<T, ShortURLUpdateArgs<ExtArgs>>): Prisma__ShortURLClient<$Result.GetResult<Prisma.$ShortURLPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShortURLS.
     * @param {ShortURLDeleteManyArgs} args - Arguments to filter ShortURLS to delete.
     * @example
     * // Delete a few ShortURLS
     * const { count } = await prisma.shortURL.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShortURLDeleteManyArgs>(args?: SelectSubset<T, ShortURLDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShortURLS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortURLUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShortURLS
     * const shortURL = await prisma.shortURL.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShortURLUpdateManyArgs>(args: SelectSubset<T, ShortURLUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShortURLS and returns the data updated in the database.
     * @param {ShortURLUpdateManyAndReturnArgs} args - Arguments to update many ShortURLS.
     * @example
     * // Update many ShortURLS
     * const shortURL = await prisma.shortURL.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShortURLS and only return the `id`
     * const shortURLWithIdOnly = await prisma.shortURL.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShortURLUpdateManyAndReturnArgs>(args: SelectSubset<T, ShortURLUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortURLPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShortURL.
     * @param {ShortURLUpsertArgs} args - Arguments to update or create a ShortURL.
     * @example
     * // Update or create a ShortURL
     * const shortURL = await prisma.shortURL.upsert({
     *   create: {
     *     // ... data to create a ShortURL
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShortURL we want to update
     *   }
     * })
     */
    upsert<T extends ShortURLUpsertArgs>(args: SelectSubset<T, ShortURLUpsertArgs<ExtArgs>>): Prisma__ShortURLClient<$Result.GetResult<Prisma.$ShortURLPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShortURLS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortURLCountArgs} args - Arguments to filter ShortURLS to count.
     * @example
     * // Count the number of ShortURLS
     * const count = await prisma.shortURL.count({
     *   where: {
     *     // ... the filter for the ShortURLS we want to count
     *   }
     * })
    **/
    count<T extends ShortURLCountArgs>(
      args?: Subset<T, ShortURLCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShortURLCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShortURL.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortURLAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShortURLAggregateArgs>(args: Subset<T, ShortURLAggregateArgs>): Prisma.PrismaPromise<GetShortURLAggregateType<T>>

    /**
     * Group by ShortURL.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortURLGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShortURLGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShortURLGroupByArgs['orderBy'] }
        : { orderBy?: ShortURLGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShortURLGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShortURLGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShortURL model
   */
  readonly fields: ShortURLFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShortURL.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShortURLClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    analytics<T extends ShortURL$analyticsArgs<ExtArgs> = {}>(args?: Subset<T, ShortURL$analyticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClickAnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShortURL model
   */
  interface ShortURLFieldRefs {
    readonly id: FieldRef<"ShortURL", 'String'>
    readonly userId: FieldRef<"ShortURL", 'String'>
    readonly originalUrl: FieldRef<"ShortURL", 'String'>
    readonly shortCode: FieldRef<"ShortURL", 'String'>
    readonly clickCount: FieldRef<"ShortURL", 'Int'>
    readonly createdAt: FieldRef<"ShortURL", 'DateTime'>
    readonly updatedAt: FieldRef<"ShortURL", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShortURL findUnique
   */
  export type ShortURLFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortURL
     */
    select?: ShortURLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortURL
     */
    omit?: ShortURLOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortURLInclude<ExtArgs> | null
    /**
     * Filter, which ShortURL to fetch.
     */
    where: ShortURLWhereUniqueInput
  }

  /**
   * ShortURL findUniqueOrThrow
   */
  export type ShortURLFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortURL
     */
    select?: ShortURLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortURL
     */
    omit?: ShortURLOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortURLInclude<ExtArgs> | null
    /**
     * Filter, which ShortURL to fetch.
     */
    where: ShortURLWhereUniqueInput
  }

  /**
   * ShortURL findFirst
   */
  export type ShortURLFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortURL
     */
    select?: ShortURLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortURL
     */
    omit?: ShortURLOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortURLInclude<ExtArgs> | null
    /**
     * Filter, which ShortURL to fetch.
     */
    where?: ShortURLWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortURLS to fetch.
     */
    orderBy?: ShortURLOrderByWithRelationInput | ShortURLOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShortURLS.
     */
    cursor?: ShortURLWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortURLS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortURLS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShortURLS.
     */
    distinct?: ShortURLScalarFieldEnum | ShortURLScalarFieldEnum[]
  }

  /**
   * ShortURL findFirstOrThrow
   */
  export type ShortURLFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortURL
     */
    select?: ShortURLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortURL
     */
    omit?: ShortURLOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortURLInclude<ExtArgs> | null
    /**
     * Filter, which ShortURL to fetch.
     */
    where?: ShortURLWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortURLS to fetch.
     */
    orderBy?: ShortURLOrderByWithRelationInput | ShortURLOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShortURLS.
     */
    cursor?: ShortURLWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortURLS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortURLS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShortURLS.
     */
    distinct?: ShortURLScalarFieldEnum | ShortURLScalarFieldEnum[]
  }

  /**
   * ShortURL findMany
   */
  export type ShortURLFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortURL
     */
    select?: ShortURLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortURL
     */
    omit?: ShortURLOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortURLInclude<ExtArgs> | null
    /**
     * Filter, which ShortURLS to fetch.
     */
    where?: ShortURLWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortURLS to fetch.
     */
    orderBy?: ShortURLOrderByWithRelationInput | ShortURLOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShortURLS.
     */
    cursor?: ShortURLWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortURLS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortURLS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShortURLS.
     */
    distinct?: ShortURLScalarFieldEnum | ShortURLScalarFieldEnum[]
  }

  /**
   * ShortURL create
   */
  export type ShortURLCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortURL
     */
    select?: ShortURLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortURL
     */
    omit?: ShortURLOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortURLInclude<ExtArgs> | null
    /**
     * The data needed to create a ShortURL.
     */
    data: XOR<ShortURLCreateInput, ShortURLUncheckedCreateInput>
  }

  /**
   * ShortURL createMany
   */
  export type ShortURLCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShortURLS.
     */
    data: ShortURLCreateManyInput | ShortURLCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShortURL createManyAndReturn
   */
  export type ShortURLCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortURL
     */
    select?: ShortURLSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShortURL
     */
    omit?: ShortURLOmit<ExtArgs> | null
    /**
     * The data used to create many ShortURLS.
     */
    data: ShortURLCreateManyInput | ShortURLCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortURLIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShortURL update
   */
  export type ShortURLUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortURL
     */
    select?: ShortURLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortURL
     */
    omit?: ShortURLOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortURLInclude<ExtArgs> | null
    /**
     * The data needed to update a ShortURL.
     */
    data: XOR<ShortURLUpdateInput, ShortURLUncheckedUpdateInput>
    /**
     * Choose, which ShortURL to update.
     */
    where: ShortURLWhereUniqueInput
  }

  /**
   * ShortURL updateMany
   */
  export type ShortURLUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShortURLS.
     */
    data: XOR<ShortURLUpdateManyMutationInput, ShortURLUncheckedUpdateManyInput>
    /**
     * Filter which ShortURLS to update
     */
    where?: ShortURLWhereInput
    /**
     * Limit how many ShortURLS to update.
     */
    limit?: number
  }

  /**
   * ShortURL updateManyAndReturn
   */
  export type ShortURLUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortURL
     */
    select?: ShortURLSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShortURL
     */
    omit?: ShortURLOmit<ExtArgs> | null
    /**
     * The data used to update ShortURLS.
     */
    data: XOR<ShortURLUpdateManyMutationInput, ShortURLUncheckedUpdateManyInput>
    /**
     * Filter which ShortURLS to update
     */
    where?: ShortURLWhereInput
    /**
     * Limit how many ShortURLS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortURLIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShortURL upsert
   */
  export type ShortURLUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortURL
     */
    select?: ShortURLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortURL
     */
    omit?: ShortURLOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortURLInclude<ExtArgs> | null
    /**
     * The filter to search for the ShortURL to update in case it exists.
     */
    where: ShortURLWhereUniqueInput
    /**
     * In case the ShortURL found by the `where` argument doesn't exist, create a new ShortURL with this data.
     */
    create: XOR<ShortURLCreateInput, ShortURLUncheckedCreateInput>
    /**
     * In case the ShortURL was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShortURLUpdateInput, ShortURLUncheckedUpdateInput>
  }

  /**
   * ShortURL delete
   */
  export type ShortURLDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortURL
     */
    select?: ShortURLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortURL
     */
    omit?: ShortURLOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortURLInclude<ExtArgs> | null
    /**
     * Filter which ShortURL to delete.
     */
    where: ShortURLWhereUniqueInput
  }

  /**
   * ShortURL deleteMany
   */
  export type ShortURLDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShortURLS to delete
     */
    where?: ShortURLWhereInput
    /**
     * Limit how many ShortURLS to delete.
     */
    limit?: number
  }

  /**
   * ShortURL.analytics
   */
  export type ShortURL$analyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickAnalytics
     */
    select?: ClickAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickAnalytics
     */
    omit?: ClickAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickAnalyticsInclude<ExtArgs> | null
    where?: ClickAnalyticsWhereInput
    orderBy?: ClickAnalyticsOrderByWithRelationInput | ClickAnalyticsOrderByWithRelationInput[]
    cursor?: ClickAnalyticsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClickAnalyticsScalarFieldEnum | ClickAnalyticsScalarFieldEnum[]
  }

  /**
   * ShortURL without action
   */
  export type ShortURLDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortURL
     */
    select?: ShortURLSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortURL
     */
    omit?: ShortURLOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortURLInclude<ExtArgs> | null
  }


  /**
   * Model ClickAnalytics
   */

  export type AggregateClickAnalytics = {
    _count: ClickAnalyticsCountAggregateOutputType | null
    _min: ClickAnalyticsMinAggregateOutputType | null
    _max: ClickAnalyticsMaxAggregateOutputType | null
  }

  export type ClickAnalyticsMinAggregateOutputType = {
    id: string | null
    shortUrlId: string | null
    clickedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    referrer: string | null
    country: string | null
  }

  export type ClickAnalyticsMaxAggregateOutputType = {
    id: string | null
    shortUrlId: string | null
    clickedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    referrer: string | null
    country: string | null
  }

  export type ClickAnalyticsCountAggregateOutputType = {
    id: number
    shortUrlId: number
    clickedAt: number
    ipAddress: number
    userAgent: number
    referrer: number
    country: number
    _all: number
  }


  export type ClickAnalyticsMinAggregateInputType = {
    id?: true
    shortUrlId?: true
    clickedAt?: true
    ipAddress?: true
    userAgent?: true
    referrer?: true
    country?: true
  }

  export type ClickAnalyticsMaxAggregateInputType = {
    id?: true
    shortUrlId?: true
    clickedAt?: true
    ipAddress?: true
    userAgent?: true
    referrer?: true
    country?: true
  }

  export type ClickAnalyticsCountAggregateInputType = {
    id?: true
    shortUrlId?: true
    clickedAt?: true
    ipAddress?: true
    userAgent?: true
    referrer?: true
    country?: true
    _all?: true
  }

  export type ClickAnalyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClickAnalytics to aggregate.
     */
    where?: ClickAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClickAnalytics to fetch.
     */
    orderBy?: ClickAnalyticsOrderByWithRelationInput | ClickAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClickAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClickAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClickAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClickAnalytics
    **/
    _count?: true | ClickAnalyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClickAnalyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClickAnalyticsMaxAggregateInputType
  }

  export type GetClickAnalyticsAggregateType<T extends ClickAnalyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateClickAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClickAnalytics[P]>
      : GetScalarType<T[P], AggregateClickAnalytics[P]>
  }




  export type ClickAnalyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClickAnalyticsWhereInput
    orderBy?: ClickAnalyticsOrderByWithAggregationInput | ClickAnalyticsOrderByWithAggregationInput[]
    by: ClickAnalyticsScalarFieldEnum[] | ClickAnalyticsScalarFieldEnum
    having?: ClickAnalyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClickAnalyticsCountAggregateInputType | true
    _min?: ClickAnalyticsMinAggregateInputType
    _max?: ClickAnalyticsMaxAggregateInputType
  }

  export type ClickAnalyticsGroupByOutputType = {
    id: string
    shortUrlId: string
    clickedAt: Date
    ipAddress: string | null
    userAgent: string | null
    referrer: string | null
    country: string | null
    _count: ClickAnalyticsCountAggregateOutputType | null
    _min: ClickAnalyticsMinAggregateOutputType | null
    _max: ClickAnalyticsMaxAggregateOutputType | null
  }

  type GetClickAnalyticsGroupByPayload<T extends ClickAnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClickAnalyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClickAnalyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClickAnalyticsGroupByOutputType[P]>
            : GetScalarType<T[P], ClickAnalyticsGroupByOutputType[P]>
        }
      >
    >


  export type ClickAnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortUrlId?: boolean
    clickedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    referrer?: boolean
    country?: boolean
    shortUrl?: boolean | ShortURLDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clickAnalytics"]>

  export type ClickAnalyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortUrlId?: boolean
    clickedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    referrer?: boolean
    country?: boolean
    shortUrl?: boolean | ShortURLDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clickAnalytics"]>

  export type ClickAnalyticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortUrlId?: boolean
    clickedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    referrer?: boolean
    country?: boolean
    shortUrl?: boolean | ShortURLDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clickAnalytics"]>

  export type ClickAnalyticsSelectScalar = {
    id?: boolean
    shortUrlId?: boolean
    clickedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    referrer?: boolean
    country?: boolean
  }

  export type ClickAnalyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shortUrlId" | "clickedAt" | "ipAddress" | "userAgent" | "referrer" | "country", ExtArgs["result"]["clickAnalytics"]>
  export type ClickAnalyticsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shortUrl?: boolean | ShortURLDefaultArgs<ExtArgs>
  }
  export type ClickAnalyticsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shortUrl?: boolean | ShortURLDefaultArgs<ExtArgs>
  }
  export type ClickAnalyticsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shortUrl?: boolean | ShortURLDefaultArgs<ExtArgs>
  }

  export type $ClickAnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClickAnalytics"
    objects: {
      shortUrl: Prisma.$ShortURLPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shortUrlId: string
      clickedAt: Date
      ipAddress: string | null
      userAgent: string | null
      referrer: string | null
      country: string | null
    }, ExtArgs["result"]["clickAnalytics"]>
    composites: {}
  }

  type ClickAnalyticsGetPayload<S extends boolean | null | undefined | ClickAnalyticsDefaultArgs> = $Result.GetResult<Prisma.$ClickAnalyticsPayload, S>

  type ClickAnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClickAnalyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClickAnalyticsCountAggregateInputType | true
    }

  export interface ClickAnalyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClickAnalytics'], meta: { name: 'ClickAnalytics' } }
    /**
     * Find zero or one ClickAnalytics that matches the filter.
     * @param {ClickAnalyticsFindUniqueArgs} args - Arguments to find a ClickAnalytics
     * @example
     * // Get one ClickAnalytics
     * const clickAnalytics = await prisma.clickAnalytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClickAnalyticsFindUniqueArgs>(args: SelectSubset<T, ClickAnalyticsFindUniqueArgs<ExtArgs>>): Prisma__ClickAnalyticsClient<$Result.GetResult<Prisma.$ClickAnalyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClickAnalytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClickAnalyticsFindUniqueOrThrowArgs} args - Arguments to find a ClickAnalytics
     * @example
     * // Get one ClickAnalytics
     * const clickAnalytics = await prisma.clickAnalytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClickAnalyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, ClickAnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClickAnalyticsClient<$Result.GetResult<Prisma.$ClickAnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClickAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickAnalyticsFindFirstArgs} args - Arguments to find a ClickAnalytics
     * @example
     * // Get one ClickAnalytics
     * const clickAnalytics = await prisma.clickAnalytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClickAnalyticsFindFirstArgs>(args?: SelectSubset<T, ClickAnalyticsFindFirstArgs<ExtArgs>>): Prisma__ClickAnalyticsClient<$Result.GetResult<Prisma.$ClickAnalyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClickAnalytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickAnalyticsFindFirstOrThrowArgs} args - Arguments to find a ClickAnalytics
     * @example
     * // Get one ClickAnalytics
     * const clickAnalytics = await prisma.clickAnalytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClickAnalyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, ClickAnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClickAnalyticsClient<$Result.GetResult<Prisma.$ClickAnalyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClickAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickAnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClickAnalytics
     * const clickAnalytics = await prisma.clickAnalytics.findMany()
     * 
     * // Get first 10 ClickAnalytics
     * const clickAnalytics = await prisma.clickAnalytics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clickAnalyticsWithIdOnly = await prisma.clickAnalytics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClickAnalyticsFindManyArgs>(args?: SelectSubset<T, ClickAnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClickAnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClickAnalytics.
     * @param {ClickAnalyticsCreateArgs} args - Arguments to create a ClickAnalytics.
     * @example
     * // Create one ClickAnalytics
     * const ClickAnalytics = await prisma.clickAnalytics.create({
     *   data: {
     *     // ... data to create a ClickAnalytics
     *   }
     * })
     * 
     */
    create<T extends ClickAnalyticsCreateArgs>(args: SelectSubset<T, ClickAnalyticsCreateArgs<ExtArgs>>): Prisma__ClickAnalyticsClient<$Result.GetResult<Prisma.$ClickAnalyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClickAnalytics.
     * @param {ClickAnalyticsCreateManyArgs} args - Arguments to create many ClickAnalytics.
     * @example
     * // Create many ClickAnalytics
     * const clickAnalytics = await prisma.clickAnalytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClickAnalyticsCreateManyArgs>(args?: SelectSubset<T, ClickAnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClickAnalytics and returns the data saved in the database.
     * @param {ClickAnalyticsCreateManyAndReturnArgs} args - Arguments to create many ClickAnalytics.
     * @example
     * // Create many ClickAnalytics
     * const clickAnalytics = await prisma.clickAnalytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClickAnalytics and only return the `id`
     * const clickAnalyticsWithIdOnly = await prisma.clickAnalytics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClickAnalyticsCreateManyAndReturnArgs>(args?: SelectSubset<T, ClickAnalyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClickAnalyticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClickAnalytics.
     * @param {ClickAnalyticsDeleteArgs} args - Arguments to delete one ClickAnalytics.
     * @example
     * // Delete one ClickAnalytics
     * const ClickAnalytics = await prisma.clickAnalytics.delete({
     *   where: {
     *     // ... filter to delete one ClickAnalytics
     *   }
     * })
     * 
     */
    delete<T extends ClickAnalyticsDeleteArgs>(args: SelectSubset<T, ClickAnalyticsDeleteArgs<ExtArgs>>): Prisma__ClickAnalyticsClient<$Result.GetResult<Prisma.$ClickAnalyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClickAnalytics.
     * @param {ClickAnalyticsUpdateArgs} args - Arguments to update one ClickAnalytics.
     * @example
     * // Update one ClickAnalytics
     * const clickAnalytics = await prisma.clickAnalytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClickAnalyticsUpdateArgs>(args: SelectSubset<T, ClickAnalyticsUpdateArgs<ExtArgs>>): Prisma__ClickAnalyticsClient<$Result.GetResult<Prisma.$ClickAnalyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClickAnalytics.
     * @param {ClickAnalyticsDeleteManyArgs} args - Arguments to filter ClickAnalytics to delete.
     * @example
     * // Delete a few ClickAnalytics
     * const { count } = await prisma.clickAnalytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClickAnalyticsDeleteManyArgs>(args?: SelectSubset<T, ClickAnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClickAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickAnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClickAnalytics
     * const clickAnalytics = await prisma.clickAnalytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClickAnalyticsUpdateManyArgs>(args: SelectSubset<T, ClickAnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClickAnalytics and returns the data updated in the database.
     * @param {ClickAnalyticsUpdateManyAndReturnArgs} args - Arguments to update many ClickAnalytics.
     * @example
     * // Update many ClickAnalytics
     * const clickAnalytics = await prisma.clickAnalytics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClickAnalytics and only return the `id`
     * const clickAnalyticsWithIdOnly = await prisma.clickAnalytics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClickAnalyticsUpdateManyAndReturnArgs>(args: SelectSubset<T, ClickAnalyticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClickAnalyticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClickAnalytics.
     * @param {ClickAnalyticsUpsertArgs} args - Arguments to update or create a ClickAnalytics.
     * @example
     * // Update or create a ClickAnalytics
     * const clickAnalytics = await prisma.clickAnalytics.upsert({
     *   create: {
     *     // ... data to create a ClickAnalytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClickAnalytics we want to update
     *   }
     * })
     */
    upsert<T extends ClickAnalyticsUpsertArgs>(args: SelectSubset<T, ClickAnalyticsUpsertArgs<ExtArgs>>): Prisma__ClickAnalyticsClient<$Result.GetResult<Prisma.$ClickAnalyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClickAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickAnalyticsCountArgs} args - Arguments to filter ClickAnalytics to count.
     * @example
     * // Count the number of ClickAnalytics
     * const count = await prisma.clickAnalytics.count({
     *   where: {
     *     // ... the filter for the ClickAnalytics we want to count
     *   }
     * })
    **/
    count<T extends ClickAnalyticsCountArgs>(
      args?: Subset<T, ClickAnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClickAnalyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClickAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickAnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClickAnalyticsAggregateArgs>(args: Subset<T, ClickAnalyticsAggregateArgs>): Prisma.PrismaPromise<GetClickAnalyticsAggregateType<T>>

    /**
     * Group by ClickAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickAnalyticsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClickAnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClickAnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: ClickAnalyticsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClickAnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClickAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClickAnalytics model
   */
  readonly fields: ClickAnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClickAnalytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClickAnalyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shortUrl<T extends ShortURLDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShortURLDefaultArgs<ExtArgs>>): Prisma__ShortURLClient<$Result.GetResult<Prisma.$ShortURLPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClickAnalytics model
   */
  interface ClickAnalyticsFieldRefs {
    readonly id: FieldRef<"ClickAnalytics", 'String'>
    readonly shortUrlId: FieldRef<"ClickAnalytics", 'String'>
    readonly clickedAt: FieldRef<"ClickAnalytics", 'DateTime'>
    readonly ipAddress: FieldRef<"ClickAnalytics", 'String'>
    readonly userAgent: FieldRef<"ClickAnalytics", 'String'>
    readonly referrer: FieldRef<"ClickAnalytics", 'String'>
    readonly country: FieldRef<"ClickAnalytics", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClickAnalytics findUnique
   */
  export type ClickAnalyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickAnalytics
     */
    select?: ClickAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickAnalytics
     */
    omit?: ClickAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which ClickAnalytics to fetch.
     */
    where: ClickAnalyticsWhereUniqueInput
  }

  /**
   * ClickAnalytics findUniqueOrThrow
   */
  export type ClickAnalyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickAnalytics
     */
    select?: ClickAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickAnalytics
     */
    omit?: ClickAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which ClickAnalytics to fetch.
     */
    where: ClickAnalyticsWhereUniqueInput
  }

  /**
   * ClickAnalytics findFirst
   */
  export type ClickAnalyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickAnalytics
     */
    select?: ClickAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickAnalytics
     */
    omit?: ClickAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which ClickAnalytics to fetch.
     */
    where?: ClickAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClickAnalytics to fetch.
     */
    orderBy?: ClickAnalyticsOrderByWithRelationInput | ClickAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClickAnalytics.
     */
    cursor?: ClickAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClickAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClickAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClickAnalytics.
     */
    distinct?: ClickAnalyticsScalarFieldEnum | ClickAnalyticsScalarFieldEnum[]
  }

  /**
   * ClickAnalytics findFirstOrThrow
   */
  export type ClickAnalyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickAnalytics
     */
    select?: ClickAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickAnalytics
     */
    omit?: ClickAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which ClickAnalytics to fetch.
     */
    where?: ClickAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClickAnalytics to fetch.
     */
    orderBy?: ClickAnalyticsOrderByWithRelationInput | ClickAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClickAnalytics.
     */
    cursor?: ClickAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClickAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClickAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClickAnalytics.
     */
    distinct?: ClickAnalyticsScalarFieldEnum | ClickAnalyticsScalarFieldEnum[]
  }

  /**
   * ClickAnalytics findMany
   */
  export type ClickAnalyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickAnalytics
     */
    select?: ClickAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickAnalytics
     */
    omit?: ClickAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which ClickAnalytics to fetch.
     */
    where?: ClickAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClickAnalytics to fetch.
     */
    orderBy?: ClickAnalyticsOrderByWithRelationInput | ClickAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClickAnalytics.
     */
    cursor?: ClickAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClickAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClickAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClickAnalytics.
     */
    distinct?: ClickAnalyticsScalarFieldEnum | ClickAnalyticsScalarFieldEnum[]
  }

  /**
   * ClickAnalytics create
   */
  export type ClickAnalyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickAnalytics
     */
    select?: ClickAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickAnalytics
     */
    omit?: ClickAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickAnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to create a ClickAnalytics.
     */
    data: XOR<ClickAnalyticsCreateInput, ClickAnalyticsUncheckedCreateInput>
  }

  /**
   * ClickAnalytics createMany
   */
  export type ClickAnalyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClickAnalytics.
     */
    data: ClickAnalyticsCreateManyInput | ClickAnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClickAnalytics createManyAndReturn
   */
  export type ClickAnalyticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickAnalytics
     */
    select?: ClickAnalyticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClickAnalytics
     */
    omit?: ClickAnalyticsOmit<ExtArgs> | null
    /**
     * The data used to create many ClickAnalytics.
     */
    data: ClickAnalyticsCreateManyInput | ClickAnalyticsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickAnalyticsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClickAnalytics update
   */
  export type ClickAnalyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickAnalytics
     */
    select?: ClickAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickAnalytics
     */
    omit?: ClickAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickAnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to update a ClickAnalytics.
     */
    data: XOR<ClickAnalyticsUpdateInput, ClickAnalyticsUncheckedUpdateInput>
    /**
     * Choose, which ClickAnalytics to update.
     */
    where: ClickAnalyticsWhereUniqueInput
  }

  /**
   * ClickAnalytics updateMany
   */
  export type ClickAnalyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClickAnalytics.
     */
    data: XOR<ClickAnalyticsUpdateManyMutationInput, ClickAnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which ClickAnalytics to update
     */
    where?: ClickAnalyticsWhereInput
    /**
     * Limit how many ClickAnalytics to update.
     */
    limit?: number
  }

  /**
   * ClickAnalytics updateManyAndReturn
   */
  export type ClickAnalyticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickAnalytics
     */
    select?: ClickAnalyticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClickAnalytics
     */
    omit?: ClickAnalyticsOmit<ExtArgs> | null
    /**
     * The data used to update ClickAnalytics.
     */
    data: XOR<ClickAnalyticsUpdateManyMutationInput, ClickAnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which ClickAnalytics to update
     */
    where?: ClickAnalyticsWhereInput
    /**
     * Limit how many ClickAnalytics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickAnalyticsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClickAnalytics upsert
   */
  export type ClickAnalyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickAnalytics
     */
    select?: ClickAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickAnalytics
     */
    omit?: ClickAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickAnalyticsInclude<ExtArgs> | null
    /**
     * The filter to search for the ClickAnalytics to update in case it exists.
     */
    where: ClickAnalyticsWhereUniqueInput
    /**
     * In case the ClickAnalytics found by the `where` argument doesn't exist, create a new ClickAnalytics with this data.
     */
    create: XOR<ClickAnalyticsCreateInput, ClickAnalyticsUncheckedCreateInput>
    /**
     * In case the ClickAnalytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClickAnalyticsUpdateInput, ClickAnalyticsUncheckedUpdateInput>
  }

  /**
   * ClickAnalytics delete
   */
  export type ClickAnalyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickAnalytics
     */
    select?: ClickAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickAnalytics
     */
    omit?: ClickAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickAnalyticsInclude<ExtArgs> | null
    /**
     * Filter which ClickAnalytics to delete.
     */
    where: ClickAnalyticsWhereUniqueInput
  }

  /**
   * ClickAnalytics deleteMany
   */
  export type ClickAnalyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClickAnalytics to delete
     */
    where?: ClickAnalyticsWhereInput
    /**
     * Limit how many ClickAnalytics to delete.
     */
    limit?: number
  }

  /**
   * ClickAnalytics without action
   */
  export type ClickAnalyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickAnalytics
     */
    select?: ClickAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickAnalytics
     */
    omit?: ClickAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickAnalyticsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ShortURLScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    originalUrl: 'originalUrl',
    shortCode: 'shortCode',
    clickCount: 'clickCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShortURLScalarFieldEnum = (typeof ShortURLScalarFieldEnum)[keyof typeof ShortURLScalarFieldEnum]


  export const ClickAnalyticsScalarFieldEnum: {
    id: 'id',
    shortUrlId: 'shortUrlId',
    clickedAt: 'clickedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    referrer: 'referrer',
    country: 'country'
  };

  export type ClickAnalyticsScalarFieldEnum = (typeof ClickAnalyticsScalarFieldEnum)[keyof typeof ClickAnalyticsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    shortUrls?: ShortURLListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shortUrls?: ShortURLOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    shortUrls?: ShortURLListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ShortURLWhereInput = {
    AND?: ShortURLWhereInput | ShortURLWhereInput[]
    OR?: ShortURLWhereInput[]
    NOT?: ShortURLWhereInput | ShortURLWhereInput[]
    id?: StringFilter<"ShortURL"> | string
    userId?: StringFilter<"ShortURL"> | string
    originalUrl?: StringFilter<"ShortURL"> | string
    shortCode?: StringFilter<"ShortURL"> | string
    clickCount?: IntFilter<"ShortURL"> | number
    createdAt?: DateTimeFilter<"ShortURL"> | Date | string
    updatedAt?: DateTimeFilter<"ShortURL"> | Date | string
    analytics?: ClickAnalyticsListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ShortURLOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    originalUrl?: SortOrder
    shortCode?: SortOrder
    clickCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    analytics?: ClickAnalyticsOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ShortURLWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shortCode?: string
    AND?: ShortURLWhereInput | ShortURLWhereInput[]
    OR?: ShortURLWhereInput[]
    NOT?: ShortURLWhereInput | ShortURLWhereInput[]
    userId?: StringFilter<"ShortURL"> | string
    originalUrl?: StringFilter<"ShortURL"> | string
    clickCount?: IntFilter<"ShortURL"> | number
    createdAt?: DateTimeFilter<"ShortURL"> | Date | string
    updatedAt?: DateTimeFilter<"ShortURL"> | Date | string
    analytics?: ClickAnalyticsListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "shortCode">

  export type ShortURLOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    originalUrl?: SortOrder
    shortCode?: SortOrder
    clickCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShortURLCountOrderByAggregateInput
    _avg?: ShortURLAvgOrderByAggregateInput
    _max?: ShortURLMaxOrderByAggregateInput
    _min?: ShortURLMinOrderByAggregateInput
    _sum?: ShortURLSumOrderByAggregateInput
  }

  export type ShortURLScalarWhereWithAggregatesInput = {
    AND?: ShortURLScalarWhereWithAggregatesInput | ShortURLScalarWhereWithAggregatesInput[]
    OR?: ShortURLScalarWhereWithAggregatesInput[]
    NOT?: ShortURLScalarWhereWithAggregatesInput | ShortURLScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShortURL"> | string
    userId?: StringWithAggregatesFilter<"ShortURL"> | string
    originalUrl?: StringWithAggregatesFilter<"ShortURL"> | string
    shortCode?: StringWithAggregatesFilter<"ShortURL"> | string
    clickCount?: IntWithAggregatesFilter<"ShortURL"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ShortURL"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShortURL"> | Date | string
  }

  export type ClickAnalyticsWhereInput = {
    AND?: ClickAnalyticsWhereInput | ClickAnalyticsWhereInput[]
    OR?: ClickAnalyticsWhereInput[]
    NOT?: ClickAnalyticsWhereInput | ClickAnalyticsWhereInput[]
    id?: StringFilter<"ClickAnalytics"> | string
    shortUrlId?: StringFilter<"ClickAnalytics"> | string
    clickedAt?: DateTimeFilter<"ClickAnalytics"> | Date | string
    ipAddress?: StringNullableFilter<"ClickAnalytics"> | string | null
    userAgent?: StringNullableFilter<"ClickAnalytics"> | string | null
    referrer?: StringNullableFilter<"ClickAnalytics"> | string | null
    country?: StringNullableFilter<"ClickAnalytics"> | string | null
    shortUrl?: XOR<ShortURLScalarRelationFilter, ShortURLWhereInput>
  }

  export type ClickAnalyticsOrderByWithRelationInput = {
    id?: SortOrder
    shortUrlId?: SortOrder
    clickedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    referrer?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    shortUrl?: ShortURLOrderByWithRelationInput
  }

  export type ClickAnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClickAnalyticsWhereInput | ClickAnalyticsWhereInput[]
    OR?: ClickAnalyticsWhereInput[]
    NOT?: ClickAnalyticsWhereInput | ClickAnalyticsWhereInput[]
    shortUrlId?: StringFilter<"ClickAnalytics"> | string
    clickedAt?: DateTimeFilter<"ClickAnalytics"> | Date | string
    ipAddress?: StringNullableFilter<"ClickAnalytics"> | string | null
    userAgent?: StringNullableFilter<"ClickAnalytics"> | string | null
    referrer?: StringNullableFilter<"ClickAnalytics"> | string | null
    country?: StringNullableFilter<"ClickAnalytics"> | string | null
    shortUrl?: XOR<ShortURLScalarRelationFilter, ShortURLWhereInput>
  }, "id">

  export type ClickAnalyticsOrderByWithAggregationInput = {
    id?: SortOrder
    shortUrlId?: SortOrder
    clickedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    referrer?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    _count?: ClickAnalyticsCountOrderByAggregateInput
    _max?: ClickAnalyticsMaxOrderByAggregateInput
    _min?: ClickAnalyticsMinOrderByAggregateInput
  }

  export type ClickAnalyticsScalarWhereWithAggregatesInput = {
    AND?: ClickAnalyticsScalarWhereWithAggregatesInput | ClickAnalyticsScalarWhereWithAggregatesInput[]
    OR?: ClickAnalyticsScalarWhereWithAggregatesInput[]
    NOT?: ClickAnalyticsScalarWhereWithAggregatesInput | ClickAnalyticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClickAnalytics"> | string
    shortUrlId?: StringWithAggregatesFilter<"ClickAnalytics"> | string
    clickedAt?: DateTimeWithAggregatesFilter<"ClickAnalytics"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"ClickAnalytics"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ClickAnalytics"> | string | null
    referrer?: StringNullableWithAggregatesFilter<"ClickAnalytics"> | string | null
    country?: StringNullableWithAggregatesFilter<"ClickAnalytics"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shortUrls?: ShortURLCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shortUrls?: ShortURLUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortUrls?: ShortURLUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shortUrls?: ShortURLUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShortURLCreateInput = {
    id?: string
    originalUrl: string
    shortCode: string
    clickCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    analytics?: ClickAnalyticsCreateNestedManyWithoutShortUrlInput
    user: UserCreateNestedOneWithoutShortUrlsInput
  }

  export type ShortURLUncheckedCreateInput = {
    id?: string
    userId: string
    originalUrl: string
    shortCode: string
    clickCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    analytics?: ClickAnalyticsUncheckedCreateNestedManyWithoutShortUrlInput
  }

  export type ShortURLUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    shortCode?: StringFieldUpdateOperationsInput | string
    clickCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analytics?: ClickAnalyticsUpdateManyWithoutShortUrlNestedInput
    user?: UserUpdateOneRequiredWithoutShortUrlsNestedInput
  }

  export type ShortURLUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    shortCode?: StringFieldUpdateOperationsInput | string
    clickCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analytics?: ClickAnalyticsUncheckedUpdateManyWithoutShortUrlNestedInput
  }

  export type ShortURLCreateManyInput = {
    id?: string
    userId: string
    originalUrl: string
    shortCode: string
    clickCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShortURLUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    shortCode?: StringFieldUpdateOperationsInput | string
    clickCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShortURLUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    shortCode?: StringFieldUpdateOperationsInput | string
    clickCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickAnalyticsCreateInput = {
    id?: string
    clickedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    referrer?: string | null
    country?: string | null
    shortUrl: ShortURLCreateNestedOneWithoutAnalyticsInput
  }

  export type ClickAnalyticsUncheckedCreateInput = {
    id?: string
    shortUrlId: string
    clickedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    referrer?: string | null
    country?: string | null
  }

  export type ClickAnalyticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    shortUrl?: ShortURLUpdateOneRequiredWithoutAnalyticsNestedInput
  }

  export type ClickAnalyticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortUrlId?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClickAnalyticsCreateManyInput = {
    id?: string
    shortUrlId: string
    clickedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    referrer?: string | null
    country?: string | null
  }

  export type ClickAnalyticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClickAnalyticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortUrlId?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ShortURLListRelationFilter = {
    every?: ShortURLWhereInput
    some?: ShortURLWhereInput
    none?: ShortURLWhereInput
  }

  export type ShortURLOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ClickAnalyticsListRelationFilter = {
    every?: ClickAnalyticsWhereInput
    some?: ClickAnalyticsWhereInput
    none?: ClickAnalyticsWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClickAnalyticsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShortURLCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    originalUrl?: SortOrder
    shortCode?: SortOrder
    clickCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShortURLAvgOrderByAggregateInput = {
    clickCount?: SortOrder
  }

  export type ShortURLMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    originalUrl?: SortOrder
    shortCode?: SortOrder
    clickCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShortURLMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    originalUrl?: SortOrder
    shortCode?: SortOrder
    clickCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShortURLSumOrderByAggregateInput = {
    clickCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ShortURLScalarRelationFilter = {
    is?: ShortURLWhereInput
    isNot?: ShortURLWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClickAnalyticsCountOrderByAggregateInput = {
    id?: SortOrder
    shortUrlId?: SortOrder
    clickedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    referrer?: SortOrder
    country?: SortOrder
  }

  export type ClickAnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    shortUrlId?: SortOrder
    clickedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    referrer?: SortOrder
    country?: SortOrder
  }

  export type ClickAnalyticsMinOrderByAggregateInput = {
    id?: SortOrder
    shortUrlId?: SortOrder
    clickedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    referrer?: SortOrder
    country?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ShortURLCreateNestedManyWithoutUserInput = {
    create?: XOR<ShortURLCreateWithoutUserInput, ShortURLUncheckedCreateWithoutUserInput> | ShortURLCreateWithoutUserInput[] | ShortURLUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShortURLCreateOrConnectWithoutUserInput | ShortURLCreateOrConnectWithoutUserInput[]
    createMany?: ShortURLCreateManyUserInputEnvelope
    connect?: ShortURLWhereUniqueInput | ShortURLWhereUniqueInput[]
  }

  export type ShortURLUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShortURLCreateWithoutUserInput, ShortURLUncheckedCreateWithoutUserInput> | ShortURLCreateWithoutUserInput[] | ShortURLUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShortURLCreateOrConnectWithoutUserInput | ShortURLCreateOrConnectWithoutUserInput[]
    createMany?: ShortURLCreateManyUserInputEnvelope
    connect?: ShortURLWhereUniqueInput | ShortURLWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ShortURLUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShortURLCreateWithoutUserInput, ShortURLUncheckedCreateWithoutUserInput> | ShortURLCreateWithoutUserInput[] | ShortURLUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShortURLCreateOrConnectWithoutUserInput | ShortURLCreateOrConnectWithoutUserInput[]
    upsert?: ShortURLUpsertWithWhereUniqueWithoutUserInput | ShortURLUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShortURLCreateManyUserInputEnvelope
    set?: ShortURLWhereUniqueInput | ShortURLWhereUniqueInput[]
    disconnect?: ShortURLWhereUniqueInput | ShortURLWhereUniqueInput[]
    delete?: ShortURLWhereUniqueInput | ShortURLWhereUniqueInput[]
    connect?: ShortURLWhereUniqueInput | ShortURLWhereUniqueInput[]
    update?: ShortURLUpdateWithWhereUniqueWithoutUserInput | ShortURLUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShortURLUpdateManyWithWhereWithoutUserInput | ShortURLUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShortURLScalarWhereInput | ShortURLScalarWhereInput[]
  }

  export type ShortURLUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShortURLCreateWithoutUserInput, ShortURLUncheckedCreateWithoutUserInput> | ShortURLCreateWithoutUserInput[] | ShortURLUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShortURLCreateOrConnectWithoutUserInput | ShortURLCreateOrConnectWithoutUserInput[]
    upsert?: ShortURLUpsertWithWhereUniqueWithoutUserInput | ShortURLUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShortURLCreateManyUserInputEnvelope
    set?: ShortURLWhereUniqueInput | ShortURLWhereUniqueInput[]
    disconnect?: ShortURLWhereUniqueInput | ShortURLWhereUniqueInput[]
    delete?: ShortURLWhereUniqueInput | ShortURLWhereUniqueInput[]
    connect?: ShortURLWhereUniqueInput | ShortURLWhereUniqueInput[]
    update?: ShortURLUpdateWithWhereUniqueWithoutUserInput | ShortURLUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShortURLUpdateManyWithWhereWithoutUserInput | ShortURLUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShortURLScalarWhereInput | ShortURLScalarWhereInput[]
  }

  export type ClickAnalyticsCreateNestedManyWithoutShortUrlInput = {
    create?: XOR<ClickAnalyticsCreateWithoutShortUrlInput, ClickAnalyticsUncheckedCreateWithoutShortUrlInput> | ClickAnalyticsCreateWithoutShortUrlInput[] | ClickAnalyticsUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: ClickAnalyticsCreateOrConnectWithoutShortUrlInput | ClickAnalyticsCreateOrConnectWithoutShortUrlInput[]
    createMany?: ClickAnalyticsCreateManyShortUrlInputEnvelope
    connect?: ClickAnalyticsWhereUniqueInput | ClickAnalyticsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutShortUrlsInput = {
    create?: XOR<UserCreateWithoutShortUrlsInput, UserUncheckedCreateWithoutShortUrlsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShortUrlsInput
    connect?: UserWhereUniqueInput
  }

  export type ClickAnalyticsUncheckedCreateNestedManyWithoutShortUrlInput = {
    create?: XOR<ClickAnalyticsCreateWithoutShortUrlInput, ClickAnalyticsUncheckedCreateWithoutShortUrlInput> | ClickAnalyticsCreateWithoutShortUrlInput[] | ClickAnalyticsUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: ClickAnalyticsCreateOrConnectWithoutShortUrlInput | ClickAnalyticsCreateOrConnectWithoutShortUrlInput[]
    createMany?: ClickAnalyticsCreateManyShortUrlInputEnvelope
    connect?: ClickAnalyticsWhereUniqueInput | ClickAnalyticsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClickAnalyticsUpdateManyWithoutShortUrlNestedInput = {
    create?: XOR<ClickAnalyticsCreateWithoutShortUrlInput, ClickAnalyticsUncheckedCreateWithoutShortUrlInput> | ClickAnalyticsCreateWithoutShortUrlInput[] | ClickAnalyticsUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: ClickAnalyticsCreateOrConnectWithoutShortUrlInput | ClickAnalyticsCreateOrConnectWithoutShortUrlInput[]
    upsert?: ClickAnalyticsUpsertWithWhereUniqueWithoutShortUrlInput | ClickAnalyticsUpsertWithWhereUniqueWithoutShortUrlInput[]
    createMany?: ClickAnalyticsCreateManyShortUrlInputEnvelope
    set?: ClickAnalyticsWhereUniqueInput | ClickAnalyticsWhereUniqueInput[]
    disconnect?: ClickAnalyticsWhereUniqueInput | ClickAnalyticsWhereUniqueInput[]
    delete?: ClickAnalyticsWhereUniqueInput | ClickAnalyticsWhereUniqueInput[]
    connect?: ClickAnalyticsWhereUniqueInput | ClickAnalyticsWhereUniqueInput[]
    update?: ClickAnalyticsUpdateWithWhereUniqueWithoutShortUrlInput | ClickAnalyticsUpdateWithWhereUniqueWithoutShortUrlInput[]
    updateMany?: ClickAnalyticsUpdateManyWithWhereWithoutShortUrlInput | ClickAnalyticsUpdateManyWithWhereWithoutShortUrlInput[]
    deleteMany?: ClickAnalyticsScalarWhereInput | ClickAnalyticsScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutShortUrlsNestedInput = {
    create?: XOR<UserCreateWithoutShortUrlsInput, UserUncheckedCreateWithoutShortUrlsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShortUrlsInput
    upsert?: UserUpsertWithoutShortUrlsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShortUrlsInput, UserUpdateWithoutShortUrlsInput>, UserUncheckedUpdateWithoutShortUrlsInput>
  }

  export type ClickAnalyticsUncheckedUpdateManyWithoutShortUrlNestedInput = {
    create?: XOR<ClickAnalyticsCreateWithoutShortUrlInput, ClickAnalyticsUncheckedCreateWithoutShortUrlInput> | ClickAnalyticsCreateWithoutShortUrlInput[] | ClickAnalyticsUncheckedCreateWithoutShortUrlInput[]
    connectOrCreate?: ClickAnalyticsCreateOrConnectWithoutShortUrlInput | ClickAnalyticsCreateOrConnectWithoutShortUrlInput[]
    upsert?: ClickAnalyticsUpsertWithWhereUniqueWithoutShortUrlInput | ClickAnalyticsUpsertWithWhereUniqueWithoutShortUrlInput[]
    createMany?: ClickAnalyticsCreateManyShortUrlInputEnvelope
    set?: ClickAnalyticsWhereUniqueInput | ClickAnalyticsWhereUniqueInput[]
    disconnect?: ClickAnalyticsWhereUniqueInput | ClickAnalyticsWhereUniqueInput[]
    delete?: ClickAnalyticsWhereUniqueInput | ClickAnalyticsWhereUniqueInput[]
    connect?: ClickAnalyticsWhereUniqueInput | ClickAnalyticsWhereUniqueInput[]
    update?: ClickAnalyticsUpdateWithWhereUniqueWithoutShortUrlInput | ClickAnalyticsUpdateWithWhereUniqueWithoutShortUrlInput[]
    updateMany?: ClickAnalyticsUpdateManyWithWhereWithoutShortUrlInput | ClickAnalyticsUpdateManyWithWhereWithoutShortUrlInput[]
    deleteMany?: ClickAnalyticsScalarWhereInput | ClickAnalyticsScalarWhereInput[]
  }

  export type ShortURLCreateNestedOneWithoutAnalyticsInput = {
    create?: XOR<ShortURLCreateWithoutAnalyticsInput, ShortURLUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: ShortURLCreateOrConnectWithoutAnalyticsInput
    connect?: ShortURLWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ShortURLUpdateOneRequiredWithoutAnalyticsNestedInput = {
    create?: XOR<ShortURLCreateWithoutAnalyticsInput, ShortURLUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: ShortURLCreateOrConnectWithoutAnalyticsInput
    upsert?: ShortURLUpsertWithoutAnalyticsInput
    connect?: ShortURLWhereUniqueInput
    update?: XOR<XOR<ShortURLUpdateToOneWithWhereWithoutAnalyticsInput, ShortURLUpdateWithoutAnalyticsInput>, ShortURLUncheckedUpdateWithoutAnalyticsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ShortURLCreateWithoutUserInput = {
    id?: string
    originalUrl: string
    shortCode: string
    clickCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    analytics?: ClickAnalyticsCreateNestedManyWithoutShortUrlInput
  }

  export type ShortURLUncheckedCreateWithoutUserInput = {
    id?: string
    originalUrl: string
    shortCode: string
    clickCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    analytics?: ClickAnalyticsUncheckedCreateNestedManyWithoutShortUrlInput
  }

  export type ShortURLCreateOrConnectWithoutUserInput = {
    where: ShortURLWhereUniqueInput
    create: XOR<ShortURLCreateWithoutUserInput, ShortURLUncheckedCreateWithoutUserInput>
  }

  export type ShortURLCreateManyUserInputEnvelope = {
    data: ShortURLCreateManyUserInput | ShortURLCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShortURLUpsertWithWhereUniqueWithoutUserInput = {
    where: ShortURLWhereUniqueInput
    update: XOR<ShortURLUpdateWithoutUserInput, ShortURLUncheckedUpdateWithoutUserInput>
    create: XOR<ShortURLCreateWithoutUserInput, ShortURLUncheckedCreateWithoutUserInput>
  }

  export type ShortURLUpdateWithWhereUniqueWithoutUserInput = {
    where: ShortURLWhereUniqueInput
    data: XOR<ShortURLUpdateWithoutUserInput, ShortURLUncheckedUpdateWithoutUserInput>
  }

  export type ShortURLUpdateManyWithWhereWithoutUserInput = {
    where: ShortURLScalarWhereInput
    data: XOR<ShortURLUpdateManyMutationInput, ShortURLUncheckedUpdateManyWithoutUserInput>
  }

  export type ShortURLScalarWhereInput = {
    AND?: ShortURLScalarWhereInput | ShortURLScalarWhereInput[]
    OR?: ShortURLScalarWhereInput[]
    NOT?: ShortURLScalarWhereInput | ShortURLScalarWhereInput[]
    id?: StringFilter<"ShortURL"> | string
    userId?: StringFilter<"ShortURL"> | string
    originalUrl?: StringFilter<"ShortURL"> | string
    shortCode?: StringFilter<"ShortURL"> | string
    clickCount?: IntFilter<"ShortURL"> | number
    createdAt?: DateTimeFilter<"ShortURL"> | Date | string
    updatedAt?: DateTimeFilter<"ShortURL"> | Date | string
  }

  export type ClickAnalyticsCreateWithoutShortUrlInput = {
    id?: string
    clickedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    referrer?: string | null
    country?: string | null
  }

  export type ClickAnalyticsUncheckedCreateWithoutShortUrlInput = {
    id?: string
    clickedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    referrer?: string | null
    country?: string | null
  }

  export type ClickAnalyticsCreateOrConnectWithoutShortUrlInput = {
    where: ClickAnalyticsWhereUniqueInput
    create: XOR<ClickAnalyticsCreateWithoutShortUrlInput, ClickAnalyticsUncheckedCreateWithoutShortUrlInput>
  }

  export type ClickAnalyticsCreateManyShortUrlInputEnvelope = {
    data: ClickAnalyticsCreateManyShortUrlInput | ClickAnalyticsCreateManyShortUrlInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutShortUrlsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutShortUrlsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutShortUrlsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShortUrlsInput, UserUncheckedCreateWithoutShortUrlsInput>
  }

  export type ClickAnalyticsUpsertWithWhereUniqueWithoutShortUrlInput = {
    where: ClickAnalyticsWhereUniqueInput
    update: XOR<ClickAnalyticsUpdateWithoutShortUrlInput, ClickAnalyticsUncheckedUpdateWithoutShortUrlInput>
    create: XOR<ClickAnalyticsCreateWithoutShortUrlInput, ClickAnalyticsUncheckedCreateWithoutShortUrlInput>
  }

  export type ClickAnalyticsUpdateWithWhereUniqueWithoutShortUrlInput = {
    where: ClickAnalyticsWhereUniqueInput
    data: XOR<ClickAnalyticsUpdateWithoutShortUrlInput, ClickAnalyticsUncheckedUpdateWithoutShortUrlInput>
  }

  export type ClickAnalyticsUpdateManyWithWhereWithoutShortUrlInput = {
    where: ClickAnalyticsScalarWhereInput
    data: XOR<ClickAnalyticsUpdateManyMutationInput, ClickAnalyticsUncheckedUpdateManyWithoutShortUrlInput>
  }

  export type ClickAnalyticsScalarWhereInput = {
    AND?: ClickAnalyticsScalarWhereInput | ClickAnalyticsScalarWhereInput[]
    OR?: ClickAnalyticsScalarWhereInput[]
    NOT?: ClickAnalyticsScalarWhereInput | ClickAnalyticsScalarWhereInput[]
    id?: StringFilter<"ClickAnalytics"> | string
    shortUrlId?: StringFilter<"ClickAnalytics"> | string
    clickedAt?: DateTimeFilter<"ClickAnalytics"> | Date | string
    ipAddress?: StringNullableFilter<"ClickAnalytics"> | string | null
    userAgent?: StringNullableFilter<"ClickAnalytics"> | string | null
    referrer?: StringNullableFilter<"ClickAnalytics"> | string | null
    country?: StringNullableFilter<"ClickAnalytics"> | string | null
  }

  export type UserUpsertWithoutShortUrlsInput = {
    update: XOR<UserUpdateWithoutShortUrlsInput, UserUncheckedUpdateWithoutShortUrlsInput>
    create: XOR<UserCreateWithoutShortUrlsInput, UserUncheckedCreateWithoutShortUrlsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShortUrlsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShortUrlsInput, UserUncheckedUpdateWithoutShortUrlsInput>
  }

  export type UserUpdateWithoutShortUrlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutShortUrlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShortURLCreateWithoutAnalyticsInput = {
    id?: string
    originalUrl: string
    shortCode: string
    clickCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutShortUrlsInput
  }

  export type ShortURLUncheckedCreateWithoutAnalyticsInput = {
    id?: string
    userId: string
    originalUrl: string
    shortCode: string
    clickCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShortURLCreateOrConnectWithoutAnalyticsInput = {
    where: ShortURLWhereUniqueInput
    create: XOR<ShortURLCreateWithoutAnalyticsInput, ShortURLUncheckedCreateWithoutAnalyticsInput>
  }

  export type ShortURLUpsertWithoutAnalyticsInput = {
    update: XOR<ShortURLUpdateWithoutAnalyticsInput, ShortURLUncheckedUpdateWithoutAnalyticsInput>
    create: XOR<ShortURLCreateWithoutAnalyticsInput, ShortURLUncheckedCreateWithoutAnalyticsInput>
    where?: ShortURLWhereInput
  }

  export type ShortURLUpdateToOneWithWhereWithoutAnalyticsInput = {
    where?: ShortURLWhereInput
    data: XOR<ShortURLUpdateWithoutAnalyticsInput, ShortURLUncheckedUpdateWithoutAnalyticsInput>
  }

  export type ShortURLUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    shortCode?: StringFieldUpdateOperationsInput | string
    clickCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutShortUrlsNestedInput
  }

  export type ShortURLUncheckedUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    shortCode?: StringFieldUpdateOperationsInput | string
    clickCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShortURLCreateManyUserInput = {
    id?: string
    originalUrl: string
    shortCode: string
    clickCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShortURLUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    shortCode?: StringFieldUpdateOperationsInput | string
    clickCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analytics?: ClickAnalyticsUpdateManyWithoutShortUrlNestedInput
  }

  export type ShortURLUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    shortCode?: StringFieldUpdateOperationsInput | string
    clickCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analytics?: ClickAnalyticsUncheckedUpdateManyWithoutShortUrlNestedInput
  }

  export type ShortURLUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    shortCode?: StringFieldUpdateOperationsInput | string
    clickCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickAnalyticsCreateManyShortUrlInput = {
    id?: string
    clickedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    referrer?: string | null
    country?: string | null
  }

  export type ClickAnalyticsUpdateWithoutShortUrlInput = {
    id?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClickAnalyticsUncheckedUpdateWithoutShortUrlInput = {
    id?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClickAnalyticsUncheckedUpdateManyWithoutShortUrlInput = {
    id?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}