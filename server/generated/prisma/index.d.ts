
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Barbershop
 * 
 */
export type Barbershop = $Result.DefaultSelection<Prisma.$BarbershopPayload>
/**
 * Model Barber
 * 
 */
export type Barber = $Result.DefaultSelection<Prisma.$BarberPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Scheduling
 * 
 */
export type Scheduling = $Result.DefaultSelection<Prisma.$SchedulingPayload>
/**
 * Model SchedulingService
 * 
 */
export type SchedulingService = $Result.DefaultSelection<Prisma.$SchedulingServicePayload>
/**
 * Model WorkingHours
 * 
 */
export type WorkingHours = $Result.DefaultSelection<Prisma.$WorkingHoursPayload>
/**
 * Model ClosedDay
 * 
 */
export type ClosedDay = $Result.DefaultSelection<Prisma.$ClosedDayPayload>
/**
 * Model PushToken
 * 
 */
export type PushToken = $Result.DefaultSelection<Prisma.$PushTokenPayload>
/**
 * Model BarbershopSettings
 * 
 */
export type BarbershopSettings = $Result.DefaultSelection<Prisma.$BarbershopSettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Barbershops
 * const barbershops = await prisma.barbershop.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Barbershops
   * const barbershops = await prisma.barbershop.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.barbershop`: Exposes CRUD operations for the **Barbershop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Barbershops
    * const barbershops = await prisma.barbershop.findMany()
    * ```
    */
  get barbershop(): Prisma.BarbershopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.barber`: Exposes CRUD operations for the **Barber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Barbers
    * const barbers = await prisma.barber.findMany()
    * ```
    */
  get barber(): Prisma.BarberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduling`: Exposes CRUD operations for the **Scheduling** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedulings
    * const schedulings = await prisma.scheduling.findMany()
    * ```
    */
  get scheduling(): Prisma.SchedulingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedulingService`: Exposes CRUD operations for the **SchedulingService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SchedulingServices
    * const schedulingServices = await prisma.schedulingService.findMany()
    * ```
    */
  get schedulingService(): Prisma.SchedulingServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workingHours`: Exposes CRUD operations for the **WorkingHours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkingHours
    * const workingHours = await prisma.workingHours.findMany()
    * ```
    */
  get workingHours(): Prisma.WorkingHoursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.closedDay`: Exposes CRUD operations for the **ClosedDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClosedDays
    * const closedDays = await prisma.closedDay.findMany()
    * ```
    */
  get closedDay(): Prisma.ClosedDayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pushToken`: Exposes CRUD operations for the **PushToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PushTokens
    * const pushTokens = await prisma.pushToken.findMany()
    * ```
    */
  get pushToken(): Prisma.PushTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.barbershopSettings`: Exposes CRUD operations for the **BarbershopSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BarbershopSettings
    * const barbershopSettings = await prisma.barbershopSettings.findMany()
    * ```
    */
  get barbershopSettings(): Prisma.BarbershopSettingsDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Barbershop: 'Barbershop',
    Barber: 'Barber',
    Client: 'Client',
    Service: 'Service',
    Scheduling: 'Scheduling',
    SchedulingService: 'SchedulingService',
    WorkingHours: 'WorkingHours',
    ClosedDay: 'ClosedDay',
    PushToken: 'PushToken',
    BarbershopSettings: 'BarbershopSettings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "barbershop" | "barber" | "client" | "service" | "scheduling" | "schedulingService" | "workingHours" | "closedDay" | "pushToken" | "barbershopSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Barbershop: {
        payload: Prisma.$BarbershopPayload<ExtArgs>
        fields: Prisma.BarbershopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarbershopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarbershopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>
          }
          findFirst: {
            args: Prisma.BarbershopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarbershopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>
          }
          findMany: {
            args: Prisma.BarbershopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>[]
          }
          create: {
            args: Prisma.BarbershopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>
          }
          createMany: {
            args: Prisma.BarbershopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarbershopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>[]
          }
          delete: {
            args: Prisma.BarbershopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>
          }
          update: {
            args: Prisma.BarbershopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>
          }
          deleteMany: {
            args: Prisma.BarbershopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarbershopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BarbershopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>[]
          }
          upsert: {
            args: Prisma.BarbershopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>
          }
          aggregate: {
            args: Prisma.BarbershopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarbershop>
          }
          groupBy: {
            args: Prisma.BarbershopGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarbershopGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarbershopCountArgs<ExtArgs>
            result: $Utils.Optional<BarbershopCountAggregateOutputType> | number
          }
        }
      }
      Barber: {
        payload: Prisma.$BarberPayload<ExtArgs>
        fields: Prisma.BarberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload>
          }
          findFirst: {
            args: Prisma.BarberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload>
          }
          findMany: {
            args: Prisma.BarberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload>[]
          }
          create: {
            args: Prisma.BarberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload>
          }
          createMany: {
            args: Prisma.BarberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload>[]
          }
          delete: {
            args: Prisma.BarberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload>
          }
          update: {
            args: Prisma.BarberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload>
          }
          deleteMany: {
            args: Prisma.BarberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BarberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload>[]
          }
          upsert: {
            args: Prisma.BarberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarberPayload>
          }
          aggregate: {
            args: Prisma.BarberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarber>
          }
          groupBy: {
            args: Prisma.BarberGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarberGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarberCountArgs<ExtArgs>
            result: $Utils.Optional<BarberCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Scheduling: {
        payload: Prisma.$SchedulingPayload<ExtArgs>
        fields: Prisma.SchedulingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchedulingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchedulingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          findFirst: {
            args: Prisma.SchedulingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchedulingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          findMany: {
            args: Prisma.SchedulingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>[]
          }
          create: {
            args: Prisma.SchedulingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          createMany: {
            args: Prisma.SchedulingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchedulingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>[]
          }
          delete: {
            args: Prisma.SchedulingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          update: {
            args: Prisma.SchedulingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          deleteMany: {
            args: Prisma.SchedulingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchedulingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchedulingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>[]
          }
          upsert: {
            args: Prisma.SchedulingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          aggregate: {
            args: Prisma.SchedulingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduling>
          }
          groupBy: {
            args: Prisma.SchedulingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchedulingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchedulingCountArgs<ExtArgs>
            result: $Utils.Optional<SchedulingCountAggregateOutputType> | number
          }
        }
      }
      SchedulingService: {
        payload: Prisma.$SchedulingServicePayload<ExtArgs>
        fields: Prisma.SchedulingServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchedulingServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchedulingServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingServicePayload>
          }
          findFirst: {
            args: Prisma.SchedulingServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchedulingServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingServicePayload>
          }
          findMany: {
            args: Prisma.SchedulingServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingServicePayload>[]
          }
          create: {
            args: Prisma.SchedulingServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingServicePayload>
          }
          createMany: {
            args: Prisma.SchedulingServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchedulingServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingServicePayload>[]
          }
          delete: {
            args: Prisma.SchedulingServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingServicePayload>
          }
          update: {
            args: Prisma.SchedulingServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingServicePayload>
          }
          deleteMany: {
            args: Prisma.SchedulingServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchedulingServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchedulingServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingServicePayload>[]
          }
          upsert: {
            args: Prisma.SchedulingServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingServicePayload>
          }
          aggregate: {
            args: Prisma.SchedulingServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedulingService>
          }
          groupBy: {
            args: Prisma.SchedulingServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchedulingServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchedulingServiceCountArgs<ExtArgs>
            result: $Utils.Optional<SchedulingServiceCountAggregateOutputType> | number
          }
        }
      }
      WorkingHours: {
        payload: Prisma.$WorkingHoursPayload<ExtArgs>
        fields: Prisma.WorkingHoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkingHoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkingHoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload>
          }
          findFirst: {
            args: Prisma.WorkingHoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkingHoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload>
          }
          findMany: {
            args: Prisma.WorkingHoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload>[]
          }
          create: {
            args: Prisma.WorkingHoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload>
          }
          createMany: {
            args: Prisma.WorkingHoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkingHoursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload>[]
          }
          delete: {
            args: Prisma.WorkingHoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload>
          }
          update: {
            args: Prisma.WorkingHoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload>
          }
          deleteMany: {
            args: Prisma.WorkingHoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkingHoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkingHoursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload>[]
          }
          upsert: {
            args: Prisma.WorkingHoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload>
          }
          aggregate: {
            args: Prisma.WorkingHoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkingHours>
          }
          groupBy: {
            args: Prisma.WorkingHoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkingHoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkingHoursCountArgs<ExtArgs>
            result: $Utils.Optional<WorkingHoursCountAggregateOutputType> | number
          }
        }
      }
      ClosedDay: {
        payload: Prisma.$ClosedDayPayload<ExtArgs>
        fields: Prisma.ClosedDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClosedDayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClosedDayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedDayPayload>
          }
          findFirst: {
            args: Prisma.ClosedDayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClosedDayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedDayPayload>
          }
          findMany: {
            args: Prisma.ClosedDayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedDayPayload>[]
          }
          create: {
            args: Prisma.ClosedDayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedDayPayload>
          }
          createMany: {
            args: Prisma.ClosedDayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClosedDayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedDayPayload>[]
          }
          delete: {
            args: Prisma.ClosedDayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedDayPayload>
          }
          update: {
            args: Prisma.ClosedDayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedDayPayload>
          }
          deleteMany: {
            args: Prisma.ClosedDayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClosedDayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClosedDayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedDayPayload>[]
          }
          upsert: {
            args: Prisma.ClosedDayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedDayPayload>
          }
          aggregate: {
            args: Prisma.ClosedDayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClosedDay>
          }
          groupBy: {
            args: Prisma.ClosedDayGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClosedDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClosedDayCountArgs<ExtArgs>
            result: $Utils.Optional<ClosedDayCountAggregateOutputType> | number
          }
        }
      }
      PushToken: {
        payload: Prisma.$PushTokenPayload<ExtArgs>
        fields: Prisma.PushTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PushTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PushTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload>
          }
          findFirst: {
            args: Prisma.PushTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PushTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload>
          }
          findMany: {
            args: Prisma.PushTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload>[]
          }
          create: {
            args: Prisma.PushTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload>
          }
          createMany: {
            args: Prisma.PushTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PushTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload>[]
          }
          delete: {
            args: Prisma.PushTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload>
          }
          update: {
            args: Prisma.PushTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload>
          }
          deleteMany: {
            args: Prisma.PushTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PushTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PushTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload>[]
          }
          upsert: {
            args: Prisma.PushTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushTokenPayload>
          }
          aggregate: {
            args: Prisma.PushTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePushToken>
          }
          groupBy: {
            args: Prisma.PushTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PushTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PushTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PushTokenCountAggregateOutputType> | number
          }
        }
      }
      BarbershopSettings: {
        payload: Prisma.$BarbershopSettingsPayload<ExtArgs>
        fields: Prisma.BarbershopSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarbershopSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarbershopSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopSettingsPayload>
          }
          findFirst: {
            args: Prisma.BarbershopSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarbershopSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopSettingsPayload>
          }
          findMany: {
            args: Prisma.BarbershopSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopSettingsPayload>[]
          }
          create: {
            args: Prisma.BarbershopSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopSettingsPayload>
          }
          createMany: {
            args: Prisma.BarbershopSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarbershopSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopSettingsPayload>[]
          }
          delete: {
            args: Prisma.BarbershopSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopSettingsPayload>
          }
          update: {
            args: Prisma.BarbershopSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopSettingsPayload>
          }
          deleteMany: {
            args: Prisma.BarbershopSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarbershopSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BarbershopSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopSettingsPayload>[]
          }
          upsert: {
            args: Prisma.BarbershopSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopSettingsPayload>
          }
          aggregate: {
            args: Prisma.BarbershopSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarbershopSettings>
          }
          groupBy: {
            args: Prisma.BarbershopSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarbershopSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarbershopSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<BarbershopSettingsCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    barbershop?: BarbershopOmit
    barber?: BarberOmit
    client?: ClientOmit
    service?: ServiceOmit
    scheduling?: SchedulingOmit
    schedulingService?: SchedulingServiceOmit
    workingHours?: WorkingHoursOmit
    closedDay?: ClosedDayOmit
    pushToken?: PushTokenOmit
    barbershopSettings?: BarbershopSettingsOmit
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
   * Count Type BarbershopCountOutputType
   */

  export type BarbershopCountOutputType = {
    Barber: number
    Service: number
    Scheduling: number
    WorkingHours: number
    ClosedDay: number
    PushToken: number
    BarbershopSettings: number
  }

  export type BarbershopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Barber?: boolean | BarbershopCountOutputTypeCountBarberArgs
    Service?: boolean | BarbershopCountOutputTypeCountServiceArgs
    Scheduling?: boolean | BarbershopCountOutputTypeCountSchedulingArgs
    WorkingHours?: boolean | BarbershopCountOutputTypeCountWorkingHoursArgs
    ClosedDay?: boolean | BarbershopCountOutputTypeCountClosedDayArgs
    PushToken?: boolean | BarbershopCountOutputTypeCountPushTokenArgs
    BarbershopSettings?: boolean | BarbershopCountOutputTypeCountBarbershopSettingsArgs
  }

  // Custom InputTypes
  /**
   * BarbershopCountOutputType without action
   */
  export type BarbershopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopCountOutputType
     */
    select?: BarbershopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarbershopCountOutputType without action
   */
  export type BarbershopCountOutputTypeCountBarberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarberWhereInput
  }

  /**
   * BarbershopCountOutputType without action
   */
  export type BarbershopCountOutputTypeCountServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * BarbershopCountOutputType without action
   */
  export type BarbershopCountOutputTypeCountSchedulingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingWhereInput
  }

  /**
   * BarbershopCountOutputType without action
   */
  export type BarbershopCountOutputTypeCountWorkingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkingHoursWhereInput
  }

  /**
   * BarbershopCountOutputType without action
   */
  export type BarbershopCountOutputTypeCountClosedDayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClosedDayWhereInput
  }

  /**
   * BarbershopCountOutputType without action
   */
  export type BarbershopCountOutputTypeCountPushTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushTokenWhereInput
  }

  /**
   * BarbershopCountOutputType without action
   */
  export type BarbershopCountOutputTypeCountBarbershopSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarbershopSettingsWhereInput
  }


  /**
   * Count Type BarberCountOutputType
   */

  export type BarberCountOutputType = {
    Scheduling: number
    PushToken: number
  }

  export type BarberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Scheduling?: boolean | BarberCountOutputTypeCountSchedulingArgs
    PushToken?: boolean | BarberCountOutputTypeCountPushTokenArgs
  }

  // Custom InputTypes
  /**
   * BarberCountOutputType without action
   */
  export type BarberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarberCountOutputType
     */
    select?: BarberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarberCountOutputType without action
   */
  export type BarberCountOutputTypeCountSchedulingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingWhereInput
  }

  /**
   * BarberCountOutputType without action
   */
  export type BarberCountOutputTypeCountPushTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushTokenWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    Scheduling: number
    PushToken: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Scheduling?: boolean | ClientCountOutputTypeCountSchedulingArgs
    PushToken?: boolean | ClientCountOutputTypeCountPushTokenArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountSchedulingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountPushTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushTokenWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    SchedulingService: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SchedulingService?: boolean | ServiceCountOutputTypeCountSchedulingServiceArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountSchedulingServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingServiceWhereInput
  }


  /**
   * Count Type SchedulingCountOutputType
   */

  export type SchedulingCountOutputType = {
    SchedulingService: number
  }

  export type SchedulingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SchedulingService?: boolean | SchedulingCountOutputTypeCountSchedulingServiceArgs
  }

  // Custom InputTypes
  /**
   * SchedulingCountOutputType without action
   */
  export type SchedulingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingCountOutputType
     */
    select?: SchedulingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchedulingCountOutputType without action
   */
  export type SchedulingCountOutputTypeCountSchedulingServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingServiceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Barbershop
   */

  export type AggregateBarbershop = {
    _count: BarbershopCountAggregateOutputType | null
    _avg: BarbershopAvgAggregateOutputType | null
    _sum: BarbershopSumAggregateOutputType | null
    _min: BarbershopMinAggregateOutputType | null
    _max: BarbershopMaxAggregateOutputType | null
  }

  export type BarbershopAvgAggregateOutputType = {
    id: number | null
  }

  export type BarbershopSumAggregateOutputType = {
    id: number | null
  }

  export type BarbershopMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    logo: string | null
    address: string | null
    intagram: string | null
    facebook: string | null
    password: string | null
  }

  export type BarbershopMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    logo: string | null
    address: string | null
    intagram: string | null
    facebook: string | null
    password: string | null
  }

  export type BarbershopCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    logo: number
    address: number
    intagram: number
    facebook: number
    password: number
    _all: number
  }


  export type BarbershopAvgAggregateInputType = {
    id?: true
  }

  export type BarbershopSumAggregateInputType = {
    id?: true
  }

  export type BarbershopMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    logo?: true
    address?: true
    intagram?: true
    facebook?: true
    password?: true
  }

  export type BarbershopMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    logo?: true
    address?: true
    intagram?: true
    facebook?: true
    password?: true
  }

  export type BarbershopCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    logo?: true
    address?: true
    intagram?: true
    facebook?: true
    password?: true
    _all?: true
  }

  export type BarbershopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barbershop to aggregate.
     */
    where?: BarbershopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbershops to fetch.
     */
    orderBy?: BarbershopOrderByWithRelationInput | BarbershopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarbershopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbershops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbershops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Barbershops
    **/
    _count?: true | BarbershopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarbershopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarbershopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarbershopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarbershopMaxAggregateInputType
  }

  export type GetBarbershopAggregateType<T extends BarbershopAggregateArgs> = {
        [P in keyof T & keyof AggregateBarbershop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarbershop[P]>
      : GetScalarType<T[P], AggregateBarbershop[P]>
  }




  export type BarbershopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarbershopWhereInput
    orderBy?: BarbershopOrderByWithAggregationInput | BarbershopOrderByWithAggregationInput[]
    by: BarbershopScalarFieldEnum[] | BarbershopScalarFieldEnum
    having?: BarbershopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarbershopCountAggregateInputType | true
    _avg?: BarbershopAvgAggregateInputType
    _sum?: BarbershopSumAggregateInputType
    _min?: BarbershopMinAggregateInputType
    _max?: BarbershopMaxAggregateInputType
  }

  export type BarbershopGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    logo: string | null
    address: string
    intagram: string | null
    facebook: string | null
    password: string
    _count: BarbershopCountAggregateOutputType | null
    _avg: BarbershopAvgAggregateOutputType | null
    _sum: BarbershopSumAggregateOutputType | null
    _min: BarbershopMinAggregateOutputType | null
    _max: BarbershopMaxAggregateOutputType | null
  }

  type GetBarbershopGroupByPayload<T extends BarbershopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarbershopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarbershopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarbershopGroupByOutputType[P]>
            : GetScalarType<T[P], BarbershopGroupByOutputType[P]>
        }
      >
    >


  export type BarbershopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    logo?: boolean
    address?: boolean
    intagram?: boolean
    facebook?: boolean
    password?: boolean
    Barber?: boolean | Barbershop$BarberArgs<ExtArgs>
    Service?: boolean | Barbershop$ServiceArgs<ExtArgs>
    Scheduling?: boolean | Barbershop$SchedulingArgs<ExtArgs>
    WorkingHours?: boolean | Barbershop$WorkingHoursArgs<ExtArgs>
    ClosedDay?: boolean | Barbershop$ClosedDayArgs<ExtArgs>
    PushToken?: boolean | Barbershop$PushTokenArgs<ExtArgs>
    BarbershopSettings?: boolean | Barbershop$BarbershopSettingsArgs<ExtArgs>
    _count?: boolean | BarbershopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barbershop"]>

  export type BarbershopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    logo?: boolean
    address?: boolean
    intagram?: boolean
    facebook?: boolean
    password?: boolean
  }, ExtArgs["result"]["barbershop"]>

  export type BarbershopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    logo?: boolean
    address?: boolean
    intagram?: boolean
    facebook?: boolean
    password?: boolean
  }, ExtArgs["result"]["barbershop"]>

  export type BarbershopSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    logo?: boolean
    address?: boolean
    intagram?: boolean
    facebook?: boolean
    password?: boolean
  }

  export type BarbershopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "logo" | "address" | "intagram" | "facebook" | "password", ExtArgs["result"]["barbershop"]>
  export type BarbershopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Barber?: boolean | Barbershop$BarberArgs<ExtArgs>
    Service?: boolean | Barbershop$ServiceArgs<ExtArgs>
    Scheduling?: boolean | Barbershop$SchedulingArgs<ExtArgs>
    WorkingHours?: boolean | Barbershop$WorkingHoursArgs<ExtArgs>
    ClosedDay?: boolean | Barbershop$ClosedDayArgs<ExtArgs>
    PushToken?: boolean | Barbershop$PushTokenArgs<ExtArgs>
    BarbershopSettings?: boolean | Barbershop$BarbershopSettingsArgs<ExtArgs>
    _count?: boolean | BarbershopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BarbershopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BarbershopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BarbershopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Barbershop"
    objects: {
      Barber: Prisma.$BarberPayload<ExtArgs>[]
      Service: Prisma.$ServicePayload<ExtArgs>[]
      Scheduling: Prisma.$SchedulingPayload<ExtArgs>[]
      WorkingHours: Prisma.$WorkingHoursPayload<ExtArgs>[]
      ClosedDay: Prisma.$ClosedDayPayload<ExtArgs>[]
      PushToken: Prisma.$PushTokenPayload<ExtArgs>[]
      BarbershopSettings: Prisma.$BarbershopSettingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      logo: string | null
      address: string
      intagram: string | null
      facebook: string | null
      password: string
    }, ExtArgs["result"]["barbershop"]>
    composites: {}
  }

  type BarbershopGetPayload<S extends boolean | null | undefined | BarbershopDefaultArgs> = $Result.GetResult<Prisma.$BarbershopPayload, S>

  type BarbershopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BarbershopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarbershopCountAggregateInputType | true
    }

  export interface BarbershopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Barbershop'], meta: { name: 'Barbershop' } }
    /**
     * Find zero or one Barbershop that matches the filter.
     * @param {BarbershopFindUniqueArgs} args - Arguments to find a Barbershop
     * @example
     * // Get one Barbershop
     * const barbershop = await prisma.barbershop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarbershopFindUniqueArgs>(args: SelectSubset<T, BarbershopFindUniqueArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Barbershop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BarbershopFindUniqueOrThrowArgs} args - Arguments to find a Barbershop
     * @example
     * // Get one Barbershop
     * const barbershop = await prisma.barbershop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarbershopFindUniqueOrThrowArgs>(args: SelectSubset<T, BarbershopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barbershop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopFindFirstArgs} args - Arguments to find a Barbershop
     * @example
     * // Get one Barbershop
     * const barbershop = await prisma.barbershop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarbershopFindFirstArgs>(args?: SelectSubset<T, BarbershopFindFirstArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barbershop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopFindFirstOrThrowArgs} args - Arguments to find a Barbershop
     * @example
     * // Get one Barbershop
     * const barbershop = await prisma.barbershop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarbershopFindFirstOrThrowArgs>(args?: SelectSubset<T, BarbershopFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Barbershops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barbershops
     * const barbershops = await prisma.barbershop.findMany()
     * 
     * // Get first 10 Barbershops
     * const barbershops = await prisma.barbershop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barbershopWithIdOnly = await prisma.barbershop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarbershopFindManyArgs>(args?: SelectSubset<T, BarbershopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Barbershop.
     * @param {BarbershopCreateArgs} args - Arguments to create a Barbershop.
     * @example
     * // Create one Barbershop
     * const Barbershop = await prisma.barbershop.create({
     *   data: {
     *     // ... data to create a Barbershop
     *   }
     * })
     * 
     */
    create<T extends BarbershopCreateArgs>(args: SelectSubset<T, BarbershopCreateArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Barbershops.
     * @param {BarbershopCreateManyArgs} args - Arguments to create many Barbershops.
     * @example
     * // Create many Barbershops
     * const barbershop = await prisma.barbershop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarbershopCreateManyArgs>(args?: SelectSubset<T, BarbershopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Barbershops and returns the data saved in the database.
     * @param {BarbershopCreateManyAndReturnArgs} args - Arguments to create many Barbershops.
     * @example
     * // Create many Barbershops
     * const barbershop = await prisma.barbershop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Barbershops and only return the `id`
     * const barbershopWithIdOnly = await prisma.barbershop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarbershopCreateManyAndReturnArgs>(args?: SelectSubset<T, BarbershopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Barbershop.
     * @param {BarbershopDeleteArgs} args - Arguments to delete one Barbershop.
     * @example
     * // Delete one Barbershop
     * const Barbershop = await prisma.barbershop.delete({
     *   where: {
     *     // ... filter to delete one Barbershop
     *   }
     * })
     * 
     */
    delete<T extends BarbershopDeleteArgs>(args: SelectSubset<T, BarbershopDeleteArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Barbershop.
     * @param {BarbershopUpdateArgs} args - Arguments to update one Barbershop.
     * @example
     * // Update one Barbershop
     * const barbershop = await prisma.barbershop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarbershopUpdateArgs>(args: SelectSubset<T, BarbershopUpdateArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Barbershops.
     * @param {BarbershopDeleteManyArgs} args - Arguments to filter Barbershops to delete.
     * @example
     * // Delete a few Barbershops
     * const { count } = await prisma.barbershop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarbershopDeleteManyArgs>(args?: SelectSubset<T, BarbershopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barbershops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barbershops
     * const barbershop = await prisma.barbershop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarbershopUpdateManyArgs>(args: SelectSubset<T, BarbershopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barbershops and returns the data updated in the database.
     * @param {BarbershopUpdateManyAndReturnArgs} args - Arguments to update many Barbershops.
     * @example
     * // Update many Barbershops
     * const barbershop = await prisma.barbershop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Barbershops and only return the `id`
     * const barbershopWithIdOnly = await prisma.barbershop.updateManyAndReturn({
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
    updateManyAndReturn<T extends BarbershopUpdateManyAndReturnArgs>(args: SelectSubset<T, BarbershopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Barbershop.
     * @param {BarbershopUpsertArgs} args - Arguments to update or create a Barbershop.
     * @example
     * // Update or create a Barbershop
     * const barbershop = await prisma.barbershop.upsert({
     *   create: {
     *     // ... data to create a Barbershop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barbershop we want to update
     *   }
     * })
     */
    upsert<T extends BarbershopUpsertArgs>(args: SelectSubset<T, BarbershopUpsertArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Barbershops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopCountArgs} args - Arguments to filter Barbershops to count.
     * @example
     * // Count the number of Barbershops
     * const count = await prisma.barbershop.count({
     *   where: {
     *     // ... the filter for the Barbershops we want to count
     *   }
     * })
    **/
    count<T extends BarbershopCountArgs>(
      args?: Subset<T, BarbershopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarbershopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Barbershop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BarbershopAggregateArgs>(args: Subset<T, BarbershopAggregateArgs>): Prisma.PrismaPromise<GetBarbershopAggregateType<T>>

    /**
     * Group by Barbershop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopGroupByArgs} args - Group by arguments.
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
      T extends BarbershopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarbershopGroupByArgs['orderBy'] }
        : { orderBy?: BarbershopGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BarbershopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarbershopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Barbershop model
   */
  readonly fields: BarbershopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Barbershop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarbershopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Barber<T extends Barbershop$BarberArgs<ExtArgs> = {}>(args?: Subset<T, Barbershop$BarberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Service<T extends Barbershop$ServiceArgs<ExtArgs> = {}>(args?: Subset<T, Barbershop$ServiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Scheduling<T extends Barbershop$SchedulingArgs<ExtArgs> = {}>(args?: Subset<T, Barbershop$SchedulingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    WorkingHours<T extends Barbershop$WorkingHoursArgs<ExtArgs> = {}>(args?: Subset<T, Barbershop$WorkingHoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ClosedDay<T extends Barbershop$ClosedDayArgs<ExtArgs> = {}>(args?: Subset<T, Barbershop$ClosedDayArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClosedDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PushToken<T extends Barbershop$PushTokenArgs<ExtArgs> = {}>(args?: Subset<T, Barbershop$PushTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    BarbershopSettings<T extends Barbershop$BarbershopSettingsArgs<ExtArgs> = {}>(args?: Subset<T, Barbershop$BarbershopSettingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Barbershop model
   */
  interface BarbershopFieldRefs {
    readonly id: FieldRef<"Barbershop", 'Int'>
    readonly name: FieldRef<"Barbershop", 'String'>
    readonly email: FieldRef<"Barbershop", 'String'>
    readonly phone: FieldRef<"Barbershop", 'String'>
    readonly logo: FieldRef<"Barbershop", 'String'>
    readonly address: FieldRef<"Barbershop", 'String'>
    readonly intagram: FieldRef<"Barbershop", 'String'>
    readonly facebook: FieldRef<"Barbershop", 'String'>
    readonly password: FieldRef<"Barbershop", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Barbershop findUnique
   */
  export type BarbershopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * Filter, which Barbershop to fetch.
     */
    where: BarbershopWhereUniqueInput
  }

  /**
   * Barbershop findUniqueOrThrow
   */
  export type BarbershopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * Filter, which Barbershop to fetch.
     */
    where: BarbershopWhereUniqueInput
  }

  /**
   * Barbershop findFirst
   */
  export type BarbershopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * Filter, which Barbershop to fetch.
     */
    where?: BarbershopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbershops to fetch.
     */
    orderBy?: BarbershopOrderByWithRelationInput | BarbershopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barbershops.
     */
    cursor?: BarbershopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbershops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbershops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barbershops.
     */
    distinct?: BarbershopScalarFieldEnum | BarbershopScalarFieldEnum[]
  }

  /**
   * Barbershop findFirstOrThrow
   */
  export type BarbershopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * Filter, which Barbershop to fetch.
     */
    where?: BarbershopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbershops to fetch.
     */
    orderBy?: BarbershopOrderByWithRelationInput | BarbershopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barbershops.
     */
    cursor?: BarbershopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbershops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbershops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barbershops.
     */
    distinct?: BarbershopScalarFieldEnum | BarbershopScalarFieldEnum[]
  }

  /**
   * Barbershop findMany
   */
  export type BarbershopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * Filter, which Barbershops to fetch.
     */
    where?: BarbershopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbershops to fetch.
     */
    orderBy?: BarbershopOrderByWithRelationInput | BarbershopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Barbershops.
     */
    cursor?: BarbershopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbershops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbershops.
     */
    skip?: number
    distinct?: BarbershopScalarFieldEnum | BarbershopScalarFieldEnum[]
  }

  /**
   * Barbershop create
   */
  export type BarbershopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * The data needed to create a Barbershop.
     */
    data: XOR<BarbershopCreateInput, BarbershopUncheckedCreateInput>
  }

  /**
   * Barbershop createMany
   */
  export type BarbershopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Barbershops.
     */
    data: BarbershopCreateManyInput | BarbershopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Barbershop createManyAndReturn
   */
  export type BarbershopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * The data used to create many Barbershops.
     */
    data: BarbershopCreateManyInput | BarbershopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Barbershop update
   */
  export type BarbershopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * The data needed to update a Barbershop.
     */
    data: XOR<BarbershopUpdateInput, BarbershopUncheckedUpdateInput>
    /**
     * Choose, which Barbershop to update.
     */
    where: BarbershopWhereUniqueInput
  }

  /**
   * Barbershop updateMany
   */
  export type BarbershopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Barbershops.
     */
    data: XOR<BarbershopUpdateManyMutationInput, BarbershopUncheckedUpdateManyInput>
    /**
     * Filter which Barbershops to update
     */
    where?: BarbershopWhereInput
    /**
     * Limit how many Barbershops to update.
     */
    limit?: number
  }

  /**
   * Barbershop updateManyAndReturn
   */
  export type BarbershopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * The data used to update Barbershops.
     */
    data: XOR<BarbershopUpdateManyMutationInput, BarbershopUncheckedUpdateManyInput>
    /**
     * Filter which Barbershops to update
     */
    where?: BarbershopWhereInput
    /**
     * Limit how many Barbershops to update.
     */
    limit?: number
  }

  /**
   * Barbershop upsert
   */
  export type BarbershopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * The filter to search for the Barbershop to update in case it exists.
     */
    where: BarbershopWhereUniqueInput
    /**
     * In case the Barbershop found by the `where` argument doesn't exist, create a new Barbershop with this data.
     */
    create: XOR<BarbershopCreateInput, BarbershopUncheckedCreateInput>
    /**
     * In case the Barbershop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarbershopUpdateInput, BarbershopUncheckedUpdateInput>
  }

  /**
   * Barbershop delete
   */
  export type BarbershopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * Filter which Barbershop to delete.
     */
    where: BarbershopWhereUniqueInput
  }

  /**
   * Barbershop deleteMany
   */
  export type BarbershopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barbershops to delete
     */
    where?: BarbershopWhereInput
    /**
     * Limit how many Barbershops to delete.
     */
    limit?: number
  }

  /**
   * Barbershop.Barber
   */
  export type Barbershop$BarberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barber
     */
    omit?: BarberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    where?: BarberWhereInput
    orderBy?: BarberOrderByWithRelationInput | BarberOrderByWithRelationInput[]
    cursor?: BarberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarberScalarFieldEnum | BarberScalarFieldEnum[]
  }

  /**
   * Barbershop.Service
   */
  export type Barbershop$ServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Barbershop.Scheduling
   */
  export type Barbershop$SchedulingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    where?: SchedulingWhereInput
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    cursor?: SchedulingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Barbershop.WorkingHours
   */
  export type Barbershop$WorkingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
    where?: WorkingHoursWhereInput
    orderBy?: WorkingHoursOrderByWithRelationInput | WorkingHoursOrderByWithRelationInput[]
    cursor?: WorkingHoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkingHoursScalarFieldEnum | WorkingHoursScalarFieldEnum[]
  }

  /**
   * Barbershop.ClosedDay
   */
  export type Barbershop$ClosedDayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedDay
     */
    select?: ClosedDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedDay
     */
    omit?: ClosedDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedDayInclude<ExtArgs> | null
    where?: ClosedDayWhereInput
    orderBy?: ClosedDayOrderByWithRelationInput | ClosedDayOrderByWithRelationInput[]
    cursor?: ClosedDayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClosedDayScalarFieldEnum | ClosedDayScalarFieldEnum[]
  }

  /**
   * Barbershop.PushToken
   */
  export type Barbershop$PushTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    where?: PushTokenWhereInput
    orderBy?: PushTokenOrderByWithRelationInput | PushTokenOrderByWithRelationInput[]
    cursor?: PushTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PushTokenScalarFieldEnum | PushTokenScalarFieldEnum[]
  }

  /**
   * Barbershop.BarbershopSettings
   */
  export type Barbershop$BarbershopSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopSettings
     */
    select?: BarbershopSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopSettings
     */
    omit?: BarbershopSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopSettingsInclude<ExtArgs> | null
    where?: BarbershopSettingsWhereInput
    orderBy?: BarbershopSettingsOrderByWithRelationInput | BarbershopSettingsOrderByWithRelationInput[]
    cursor?: BarbershopSettingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarbershopSettingsScalarFieldEnum | BarbershopSettingsScalarFieldEnum[]
  }

  /**
   * Barbershop without action
   */
  export type BarbershopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
  }


  /**
   * Model Barber
   */

  export type AggregateBarber = {
    _count: BarberCountAggregateOutputType | null
    _avg: BarberAvgAggregateOutputType | null
    _sum: BarberSumAggregateOutputType | null
    _min: BarberMinAggregateOutputType | null
    _max: BarberMaxAggregateOutputType | null
  }

  export type BarberAvgAggregateOutputType = {
    id: number | null
    barbershopId: number | null
  }

  export type BarberSumAggregateOutputType = {
    id: number | null
    barbershopId: number | null
  }

  export type BarberMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    password: string | null
    profile: string | null
    barbershopId: number | null
  }

  export type BarberMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    password: string | null
    profile: string | null
    barbershopId: number | null
  }

  export type BarberCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    password: number
    profile: number
    barbershopId: number
    _all: number
  }


  export type BarberAvgAggregateInputType = {
    id?: true
    barbershopId?: true
  }

  export type BarberSumAggregateInputType = {
    id?: true
    barbershopId?: true
  }

  export type BarberMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    password?: true
    profile?: true
    barbershopId?: true
  }

  export type BarberMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    password?: true
    profile?: true
    barbershopId?: true
  }

  export type BarberCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    password?: true
    profile?: true
    barbershopId?: true
    _all?: true
  }

  export type BarberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barber to aggregate.
     */
    where?: BarberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbers to fetch.
     */
    orderBy?: BarberOrderByWithRelationInput | BarberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Barbers
    **/
    _count?: true | BarberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarberMaxAggregateInputType
  }

  export type GetBarberAggregateType<T extends BarberAggregateArgs> = {
        [P in keyof T & keyof AggregateBarber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarber[P]>
      : GetScalarType<T[P], AggregateBarber[P]>
  }




  export type BarberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarberWhereInput
    orderBy?: BarberOrderByWithAggregationInput | BarberOrderByWithAggregationInput[]
    by: BarberScalarFieldEnum[] | BarberScalarFieldEnum
    having?: BarberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarberCountAggregateInputType | true
    _avg?: BarberAvgAggregateInputType
    _sum?: BarberSumAggregateInputType
    _min?: BarberMinAggregateInputType
    _max?: BarberMaxAggregateInputType
  }

  export type BarberGroupByOutputType = {
    id: number
    name: string
    phone: string
    password: string
    profile: string | null
    barbershopId: number
    _count: BarberCountAggregateOutputType | null
    _avg: BarberAvgAggregateOutputType | null
    _sum: BarberSumAggregateOutputType | null
    _min: BarberMinAggregateOutputType | null
    _max: BarberMaxAggregateOutputType | null
  }

  type GetBarberGroupByPayload<T extends BarberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarberGroupByOutputType[P]>
            : GetScalarType<T[P], BarberGroupByOutputType[P]>
        }
      >
    >


  export type BarberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    password?: boolean
    profile?: boolean
    barbershopId?: boolean
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
    Scheduling?: boolean | Barber$SchedulingArgs<ExtArgs>
    PushToken?: boolean | Barber$PushTokenArgs<ExtArgs>
    _count?: boolean | BarberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barber"]>

  export type BarberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    password?: boolean
    profile?: boolean
    barbershopId?: boolean
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barber"]>

  export type BarberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    password?: boolean
    profile?: boolean
    barbershopId?: boolean
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barber"]>

  export type BarberSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    password?: boolean
    profile?: boolean
    barbershopId?: boolean
  }

  export type BarberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "password" | "profile" | "barbershopId", ExtArgs["result"]["barber"]>
  export type BarberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
    Scheduling?: boolean | Barber$SchedulingArgs<ExtArgs>
    PushToken?: boolean | Barber$PushTokenArgs<ExtArgs>
    _count?: boolean | BarberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BarberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }
  export type BarberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }

  export type $BarberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Barber"
    objects: {
      barbershop: Prisma.$BarbershopPayload<ExtArgs>
      Scheduling: Prisma.$SchedulingPayload<ExtArgs>[]
      PushToken: Prisma.$PushTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string
      password: string
      profile: string | null
      barbershopId: number
    }, ExtArgs["result"]["barber"]>
    composites: {}
  }

  type BarberGetPayload<S extends boolean | null | undefined | BarberDefaultArgs> = $Result.GetResult<Prisma.$BarberPayload, S>

  type BarberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BarberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarberCountAggregateInputType | true
    }

  export interface BarberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Barber'], meta: { name: 'Barber' } }
    /**
     * Find zero or one Barber that matches the filter.
     * @param {BarberFindUniqueArgs} args - Arguments to find a Barber
     * @example
     * // Get one Barber
     * const barber = await prisma.barber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarberFindUniqueArgs>(args: SelectSubset<T, BarberFindUniqueArgs<ExtArgs>>): Prisma__BarberClient<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Barber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BarberFindUniqueOrThrowArgs} args - Arguments to find a Barber
     * @example
     * // Get one Barber
     * const barber = await prisma.barber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarberFindUniqueOrThrowArgs>(args: SelectSubset<T, BarberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarberClient<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberFindFirstArgs} args - Arguments to find a Barber
     * @example
     * // Get one Barber
     * const barber = await prisma.barber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarberFindFirstArgs>(args?: SelectSubset<T, BarberFindFirstArgs<ExtArgs>>): Prisma__BarberClient<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberFindFirstOrThrowArgs} args - Arguments to find a Barber
     * @example
     * // Get one Barber
     * const barber = await prisma.barber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarberFindFirstOrThrowArgs>(args?: SelectSubset<T, BarberFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarberClient<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Barbers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barbers
     * const barbers = await prisma.barber.findMany()
     * 
     * // Get first 10 Barbers
     * const barbers = await prisma.barber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barberWithIdOnly = await prisma.barber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarberFindManyArgs>(args?: SelectSubset<T, BarberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Barber.
     * @param {BarberCreateArgs} args - Arguments to create a Barber.
     * @example
     * // Create one Barber
     * const Barber = await prisma.barber.create({
     *   data: {
     *     // ... data to create a Barber
     *   }
     * })
     * 
     */
    create<T extends BarberCreateArgs>(args: SelectSubset<T, BarberCreateArgs<ExtArgs>>): Prisma__BarberClient<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Barbers.
     * @param {BarberCreateManyArgs} args - Arguments to create many Barbers.
     * @example
     * // Create many Barbers
     * const barber = await prisma.barber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarberCreateManyArgs>(args?: SelectSubset<T, BarberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Barbers and returns the data saved in the database.
     * @param {BarberCreateManyAndReturnArgs} args - Arguments to create many Barbers.
     * @example
     * // Create many Barbers
     * const barber = await prisma.barber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Barbers and only return the `id`
     * const barberWithIdOnly = await prisma.barber.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarberCreateManyAndReturnArgs>(args?: SelectSubset<T, BarberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Barber.
     * @param {BarberDeleteArgs} args - Arguments to delete one Barber.
     * @example
     * // Delete one Barber
     * const Barber = await prisma.barber.delete({
     *   where: {
     *     // ... filter to delete one Barber
     *   }
     * })
     * 
     */
    delete<T extends BarberDeleteArgs>(args: SelectSubset<T, BarberDeleteArgs<ExtArgs>>): Prisma__BarberClient<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Barber.
     * @param {BarberUpdateArgs} args - Arguments to update one Barber.
     * @example
     * // Update one Barber
     * const barber = await prisma.barber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarberUpdateArgs>(args: SelectSubset<T, BarberUpdateArgs<ExtArgs>>): Prisma__BarberClient<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Barbers.
     * @param {BarberDeleteManyArgs} args - Arguments to filter Barbers to delete.
     * @example
     * // Delete a few Barbers
     * const { count } = await prisma.barber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarberDeleteManyArgs>(args?: SelectSubset<T, BarberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barbers
     * const barber = await prisma.barber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarberUpdateManyArgs>(args: SelectSubset<T, BarberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barbers and returns the data updated in the database.
     * @param {BarberUpdateManyAndReturnArgs} args - Arguments to update many Barbers.
     * @example
     * // Update many Barbers
     * const barber = await prisma.barber.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Barbers and only return the `id`
     * const barberWithIdOnly = await prisma.barber.updateManyAndReturn({
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
    updateManyAndReturn<T extends BarberUpdateManyAndReturnArgs>(args: SelectSubset<T, BarberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Barber.
     * @param {BarberUpsertArgs} args - Arguments to update or create a Barber.
     * @example
     * // Update or create a Barber
     * const barber = await prisma.barber.upsert({
     *   create: {
     *     // ... data to create a Barber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barber we want to update
     *   }
     * })
     */
    upsert<T extends BarberUpsertArgs>(args: SelectSubset<T, BarberUpsertArgs<ExtArgs>>): Prisma__BarberClient<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Barbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberCountArgs} args - Arguments to filter Barbers to count.
     * @example
     * // Count the number of Barbers
     * const count = await prisma.barber.count({
     *   where: {
     *     // ... the filter for the Barbers we want to count
     *   }
     * })
    **/
    count<T extends BarberCountArgs>(
      args?: Subset<T, BarberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Barber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BarberAggregateArgs>(args: Subset<T, BarberAggregateArgs>): Prisma.PrismaPromise<GetBarberAggregateType<T>>

    /**
     * Group by Barber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarberGroupByArgs} args - Group by arguments.
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
      T extends BarberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarberGroupByArgs['orderBy'] }
        : { orderBy?: BarberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BarberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Barber model
   */
  readonly fields: BarberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Barber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barbershop<T extends BarbershopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarbershopDefaultArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Scheduling<T extends Barber$SchedulingArgs<ExtArgs> = {}>(args?: Subset<T, Barber$SchedulingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PushToken<T extends Barber$PushTokenArgs<ExtArgs> = {}>(args?: Subset<T, Barber$PushTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Barber model
   */
  interface BarberFieldRefs {
    readonly id: FieldRef<"Barber", 'Int'>
    readonly name: FieldRef<"Barber", 'String'>
    readonly phone: FieldRef<"Barber", 'String'>
    readonly password: FieldRef<"Barber", 'String'>
    readonly profile: FieldRef<"Barber", 'String'>
    readonly barbershopId: FieldRef<"Barber", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Barber findUnique
   */
  export type BarberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barber
     */
    omit?: BarberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    /**
     * Filter, which Barber to fetch.
     */
    where: BarberWhereUniqueInput
  }

  /**
   * Barber findUniqueOrThrow
   */
  export type BarberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barber
     */
    omit?: BarberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    /**
     * Filter, which Barber to fetch.
     */
    where: BarberWhereUniqueInput
  }

  /**
   * Barber findFirst
   */
  export type BarberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barber
     */
    omit?: BarberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    /**
     * Filter, which Barber to fetch.
     */
    where?: BarberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbers to fetch.
     */
    orderBy?: BarberOrderByWithRelationInput | BarberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barbers.
     */
    cursor?: BarberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barbers.
     */
    distinct?: BarberScalarFieldEnum | BarberScalarFieldEnum[]
  }

  /**
   * Barber findFirstOrThrow
   */
  export type BarberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barber
     */
    omit?: BarberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    /**
     * Filter, which Barber to fetch.
     */
    where?: BarberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbers to fetch.
     */
    orderBy?: BarberOrderByWithRelationInput | BarberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barbers.
     */
    cursor?: BarberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barbers.
     */
    distinct?: BarberScalarFieldEnum | BarberScalarFieldEnum[]
  }

  /**
   * Barber findMany
   */
  export type BarberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barber
     */
    omit?: BarberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    /**
     * Filter, which Barbers to fetch.
     */
    where?: BarberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbers to fetch.
     */
    orderBy?: BarberOrderByWithRelationInput | BarberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Barbers.
     */
    cursor?: BarberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbers.
     */
    skip?: number
    distinct?: BarberScalarFieldEnum | BarberScalarFieldEnum[]
  }

  /**
   * Barber create
   */
  export type BarberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barber
     */
    omit?: BarberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    /**
     * The data needed to create a Barber.
     */
    data: XOR<BarberCreateInput, BarberUncheckedCreateInput>
  }

  /**
   * Barber createMany
   */
  export type BarberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Barbers.
     */
    data: BarberCreateManyInput | BarberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Barber createManyAndReturn
   */
  export type BarberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Barber
     */
    omit?: BarberOmit<ExtArgs> | null
    /**
     * The data used to create many Barbers.
     */
    data: BarberCreateManyInput | BarberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Barber update
   */
  export type BarberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barber
     */
    omit?: BarberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    /**
     * The data needed to update a Barber.
     */
    data: XOR<BarberUpdateInput, BarberUncheckedUpdateInput>
    /**
     * Choose, which Barber to update.
     */
    where: BarberWhereUniqueInput
  }

  /**
   * Barber updateMany
   */
  export type BarberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Barbers.
     */
    data: XOR<BarberUpdateManyMutationInput, BarberUncheckedUpdateManyInput>
    /**
     * Filter which Barbers to update
     */
    where?: BarberWhereInput
    /**
     * Limit how many Barbers to update.
     */
    limit?: number
  }

  /**
   * Barber updateManyAndReturn
   */
  export type BarberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Barber
     */
    omit?: BarberOmit<ExtArgs> | null
    /**
     * The data used to update Barbers.
     */
    data: XOR<BarberUpdateManyMutationInput, BarberUncheckedUpdateManyInput>
    /**
     * Filter which Barbers to update
     */
    where?: BarberWhereInput
    /**
     * Limit how many Barbers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Barber upsert
   */
  export type BarberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barber
     */
    omit?: BarberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    /**
     * The filter to search for the Barber to update in case it exists.
     */
    where: BarberWhereUniqueInput
    /**
     * In case the Barber found by the `where` argument doesn't exist, create a new Barber with this data.
     */
    create: XOR<BarberCreateInput, BarberUncheckedCreateInput>
    /**
     * In case the Barber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarberUpdateInput, BarberUncheckedUpdateInput>
  }

  /**
   * Barber delete
   */
  export type BarberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barber
     */
    omit?: BarberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    /**
     * Filter which Barber to delete.
     */
    where: BarberWhereUniqueInput
  }

  /**
   * Barber deleteMany
   */
  export type BarberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barbers to delete
     */
    where?: BarberWhereInput
    /**
     * Limit how many Barbers to delete.
     */
    limit?: number
  }

  /**
   * Barber.Scheduling
   */
  export type Barber$SchedulingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    where?: SchedulingWhereInput
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    cursor?: SchedulingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Barber.PushToken
   */
  export type Barber$PushTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    where?: PushTokenWhereInput
    orderBy?: PushTokenOrderByWithRelationInput | PushTokenOrderByWithRelationInput[]
    cursor?: PushTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PushTokenScalarFieldEnum | PushTokenScalarFieldEnum[]
  }

  /**
   * Barber without action
   */
  export type BarberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barber
     */
    omit?: BarberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    name: string
    phone: string
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    Scheduling?: boolean | Client$SchedulingArgs<ExtArgs>
    PushToken?: boolean | Client$PushTokenArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Scheduling?: boolean | Client$SchedulingArgs<ExtArgs>
    PushToken?: boolean | Client$PushTokenArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      Scheduling: Prisma.$SchedulingPayload<ExtArgs>[]
      PushToken: Prisma.$PushTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Scheduling<T extends Client$SchedulingArgs<ExtArgs> = {}>(args?: Subset<T, Client$SchedulingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PushToken<T extends Client$PushTokenArgs<ExtArgs> = {}>(args?: Subset<T, Client$PushTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly name: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.Scheduling
   */
  export type Client$SchedulingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    where?: SchedulingWhereInput
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    cursor?: SchedulingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Client.PushToken
   */
  export type Client$PushTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    where?: PushTokenWhereInput
    orderBy?: PushTokenOrderByWithRelationInput | PushTokenOrderByWithRelationInput[]
    cursor?: PushTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PushTokenScalarFieldEnum | PushTokenScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
    price: number | null
    duration: number | null
    barbershopId: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
    price: number | null
    duration: number | null
    barbershopId: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    duration: number | null
    description: string | null
    photo: string | null
    barbershopId: number | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    duration: number | null
    description: string | null
    photo: string | null
    barbershopId: number | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    price: number
    duration: number
    description: number
    photo: number
    barbershopId: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
    price?: true
    duration?: true
    barbershopId?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
    price?: true
    duration?: true
    barbershopId?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration?: true
    description?: true
    photo?: true
    barbershopId?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration?: true
    description?: true
    photo?: true
    barbershopId?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration?: true
    description?: true
    photo?: true
    barbershopId?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    name: string
    price: number
    duration: number
    description: string | null
    photo: string | null
    barbershopId: number
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    description?: boolean
    photo?: boolean
    barbershopId?: boolean
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
    SchedulingService?: boolean | Service$SchedulingServiceArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    description?: boolean
    photo?: boolean
    barbershopId?: boolean
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    description?: boolean
    photo?: boolean
    barbershopId?: boolean
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    description?: boolean
    photo?: boolean
    barbershopId?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "duration" | "description" | "photo" | "barbershopId", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
    SchedulingService?: boolean | Service$SchedulingServiceArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      barbershop: Prisma.$BarbershopPayload<ExtArgs>
      SchedulingService: Prisma.$SchedulingServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      duration: number
      description: string | null
      photo: string | null
      barbershopId: number
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barbershop<T extends BarbershopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarbershopDefaultArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    SchedulingService<T extends Service$SchedulingServiceArgs<ExtArgs> = {}>(args?: Subset<T, Service$SchedulingServiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly name: FieldRef<"Service", 'String'>
    readonly price: FieldRef<"Service", 'Float'>
    readonly duration: FieldRef<"Service", 'Int'>
    readonly description: FieldRef<"Service", 'String'>
    readonly photo: FieldRef<"Service", 'String'>
    readonly barbershopId: FieldRef<"Service", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.SchedulingService
   */
  export type Service$SchedulingServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingService
     */
    select?: SchedulingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchedulingService
     */
    omit?: SchedulingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingServiceInclude<ExtArgs> | null
    where?: SchedulingServiceWhereInput
    orderBy?: SchedulingServiceOrderByWithRelationInput | SchedulingServiceOrderByWithRelationInput[]
    cursor?: SchedulingServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulingServiceScalarFieldEnum | SchedulingServiceScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Scheduling
   */

  export type AggregateScheduling = {
    _count: SchedulingCountAggregateOutputType | null
    _avg: SchedulingAvgAggregateOutputType | null
    _sum: SchedulingSumAggregateOutputType | null
    _min: SchedulingMinAggregateOutputType | null
    _max: SchedulingMaxAggregateOutputType | null
  }

  export type SchedulingAvgAggregateOutputType = {
    id: number | null
    duaration: number | null
    clientId: number | null
    barberId: number | null
    barbershopId: number | null
    totalPrice: number | null
  }

  export type SchedulingSumAggregateOutputType = {
    id: number | null
    duaration: number | null
    clientId: number | null
    barberId: number | null
    barbershopId: number | null
    totalPrice: number | null
  }

  export type SchedulingMinAggregateOutputType = {
    id: number | null
    date: Date | null
    time: Date | null
    duaration: number | null
    clientId: number | null
    barberId: number | null
    barbershopId: number | null
    totalPrice: number | null
    status: string | null
  }

  export type SchedulingMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    time: Date | null
    duaration: number | null
    clientId: number | null
    barberId: number | null
    barbershopId: number | null
    totalPrice: number | null
    status: string | null
  }

  export type SchedulingCountAggregateOutputType = {
    id: number
    date: number
    time: number
    duaration: number
    clientId: number
    barberId: number
    barbershopId: number
    totalPrice: number
    status: number
    _all: number
  }


  export type SchedulingAvgAggregateInputType = {
    id?: true
    duaration?: true
    clientId?: true
    barberId?: true
    barbershopId?: true
    totalPrice?: true
  }

  export type SchedulingSumAggregateInputType = {
    id?: true
    duaration?: true
    clientId?: true
    barberId?: true
    barbershopId?: true
    totalPrice?: true
  }

  export type SchedulingMinAggregateInputType = {
    id?: true
    date?: true
    time?: true
    duaration?: true
    clientId?: true
    barberId?: true
    barbershopId?: true
    totalPrice?: true
    status?: true
  }

  export type SchedulingMaxAggregateInputType = {
    id?: true
    date?: true
    time?: true
    duaration?: true
    clientId?: true
    barberId?: true
    barbershopId?: true
    totalPrice?: true
    status?: true
  }

  export type SchedulingCountAggregateInputType = {
    id?: true
    date?: true
    time?: true
    duaration?: true
    clientId?: true
    barberId?: true
    barbershopId?: true
    totalPrice?: true
    status?: true
    _all?: true
  }

  export type SchedulingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scheduling to aggregate.
     */
    where?: SchedulingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedulings to fetch.
     */
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchedulingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedulings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedulings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedulings
    **/
    _count?: true | SchedulingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchedulingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchedulingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchedulingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchedulingMaxAggregateInputType
  }

  export type GetSchedulingAggregateType<T extends SchedulingAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduling]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduling[P]>
      : GetScalarType<T[P], AggregateScheduling[P]>
  }




  export type SchedulingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingWhereInput
    orderBy?: SchedulingOrderByWithAggregationInput | SchedulingOrderByWithAggregationInput[]
    by: SchedulingScalarFieldEnum[] | SchedulingScalarFieldEnum
    having?: SchedulingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchedulingCountAggregateInputType | true
    _avg?: SchedulingAvgAggregateInputType
    _sum?: SchedulingSumAggregateInputType
    _min?: SchedulingMinAggregateInputType
    _max?: SchedulingMaxAggregateInputType
  }

  export type SchedulingGroupByOutputType = {
    id: number
    date: Date
    time: Date
    duaration: number
    clientId: number
    barberId: number
    barbershopId: number
    totalPrice: number
    status: string
    _count: SchedulingCountAggregateOutputType | null
    _avg: SchedulingAvgAggregateOutputType | null
    _sum: SchedulingSumAggregateOutputType | null
    _min: SchedulingMinAggregateOutputType | null
    _max: SchedulingMaxAggregateOutputType | null
  }

  type GetSchedulingGroupByPayload<T extends SchedulingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchedulingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchedulingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchedulingGroupByOutputType[P]>
            : GetScalarType<T[P], SchedulingGroupByOutputType[P]>
        }
      >
    >


  export type SchedulingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    time?: boolean
    duaration?: boolean
    clientId?: boolean
    barberId?: boolean
    barbershopId?: boolean
    totalPrice?: boolean
    status?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    barber?: boolean | BarberDefaultArgs<ExtArgs>
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
    SchedulingService?: boolean | Scheduling$SchedulingServiceArgs<ExtArgs>
    _count?: boolean | SchedulingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduling"]>

  export type SchedulingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    time?: boolean
    duaration?: boolean
    clientId?: boolean
    barberId?: boolean
    barbershopId?: boolean
    totalPrice?: boolean
    status?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    barber?: boolean | BarberDefaultArgs<ExtArgs>
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduling"]>

  export type SchedulingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    time?: boolean
    duaration?: boolean
    clientId?: boolean
    barberId?: boolean
    barbershopId?: boolean
    totalPrice?: boolean
    status?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    barber?: boolean | BarberDefaultArgs<ExtArgs>
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduling"]>

  export type SchedulingSelectScalar = {
    id?: boolean
    date?: boolean
    time?: boolean
    duaration?: boolean
    clientId?: boolean
    barberId?: boolean
    barbershopId?: boolean
    totalPrice?: boolean
    status?: boolean
  }

  export type SchedulingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "time" | "duaration" | "clientId" | "barberId" | "barbershopId" | "totalPrice" | "status", ExtArgs["result"]["scheduling"]>
  export type SchedulingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    barber?: boolean | BarberDefaultArgs<ExtArgs>
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
    SchedulingService?: boolean | Scheduling$SchedulingServiceArgs<ExtArgs>
    _count?: boolean | SchedulingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchedulingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    barber?: boolean | BarberDefaultArgs<ExtArgs>
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }
  export type SchedulingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    barber?: boolean | BarberDefaultArgs<ExtArgs>
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }

  export type $SchedulingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scheduling"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      barber: Prisma.$BarberPayload<ExtArgs>
      barbershop: Prisma.$BarbershopPayload<ExtArgs>
      SchedulingService: Prisma.$SchedulingServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      time: Date
      duaration: number
      clientId: number
      barberId: number
      barbershopId: number
      totalPrice: number
      status: string
    }, ExtArgs["result"]["scheduling"]>
    composites: {}
  }

  type SchedulingGetPayload<S extends boolean | null | undefined | SchedulingDefaultArgs> = $Result.GetResult<Prisma.$SchedulingPayload, S>

  type SchedulingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchedulingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchedulingCountAggregateInputType | true
    }

  export interface SchedulingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scheduling'], meta: { name: 'Scheduling' } }
    /**
     * Find zero or one Scheduling that matches the filter.
     * @param {SchedulingFindUniqueArgs} args - Arguments to find a Scheduling
     * @example
     * // Get one Scheduling
     * const scheduling = await prisma.scheduling.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchedulingFindUniqueArgs>(args: SelectSubset<T, SchedulingFindUniqueArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scheduling that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchedulingFindUniqueOrThrowArgs} args - Arguments to find a Scheduling
     * @example
     * // Get one Scheduling
     * const scheduling = await prisma.scheduling.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchedulingFindUniqueOrThrowArgs>(args: SelectSubset<T, SchedulingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scheduling that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingFindFirstArgs} args - Arguments to find a Scheduling
     * @example
     * // Get one Scheduling
     * const scheduling = await prisma.scheduling.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchedulingFindFirstArgs>(args?: SelectSubset<T, SchedulingFindFirstArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scheduling that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingFindFirstOrThrowArgs} args - Arguments to find a Scheduling
     * @example
     * // Get one Scheduling
     * const scheduling = await prisma.scheduling.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchedulingFindFirstOrThrowArgs>(args?: SelectSubset<T, SchedulingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedulings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedulings
     * const schedulings = await prisma.scheduling.findMany()
     * 
     * // Get first 10 Schedulings
     * const schedulings = await prisma.scheduling.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schedulingWithIdOnly = await prisma.scheduling.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchedulingFindManyArgs>(args?: SelectSubset<T, SchedulingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scheduling.
     * @param {SchedulingCreateArgs} args - Arguments to create a Scheduling.
     * @example
     * // Create one Scheduling
     * const Scheduling = await prisma.scheduling.create({
     *   data: {
     *     // ... data to create a Scheduling
     *   }
     * })
     * 
     */
    create<T extends SchedulingCreateArgs>(args: SelectSubset<T, SchedulingCreateArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedulings.
     * @param {SchedulingCreateManyArgs} args - Arguments to create many Schedulings.
     * @example
     * // Create many Schedulings
     * const scheduling = await prisma.scheduling.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchedulingCreateManyArgs>(args?: SelectSubset<T, SchedulingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedulings and returns the data saved in the database.
     * @param {SchedulingCreateManyAndReturnArgs} args - Arguments to create many Schedulings.
     * @example
     * // Create many Schedulings
     * const scheduling = await prisma.scheduling.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedulings and only return the `id`
     * const schedulingWithIdOnly = await prisma.scheduling.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchedulingCreateManyAndReturnArgs>(args?: SelectSubset<T, SchedulingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scheduling.
     * @param {SchedulingDeleteArgs} args - Arguments to delete one Scheduling.
     * @example
     * // Delete one Scheduling
     * const Scheduling = await prisma.scheduling.delete({
     *   where: {
     *     // ... filter to delete one Scheduling
     *   }
     * })
     * 
     */
    delete<T extends SchedulingDeleteArgs>(args: SelectSubset<T, SchedulingDeleteArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scheduling.
     * @param {SchedulingUpdateArgs} args - Arguments to update one Scheduling.
     * @example
     * // Update one Scheduling
     * const scheduling = await prisma.scheduling.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchedulingUpdateArgs>(args: SelectSubset<T, SchedulingUpdateArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedulings.
     * @param {SchedulingDeleteManyArgs} args - Arguments to filter Schedulings to delete.
     * @example
     * // Delete a few Schedulings
     * const { count } = await prisma.scheduling.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchedulingDeleteManyArgs>(args?: SelectSubset<T, SchedulingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedulings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedulings
     * const scheduling = await prisma.scheduling.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchedulingUpdateManyArgs>(args: SelectSubset<T, SchedulingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedulings and returns the data updated in the database.
     * @param {SchedulingUpdateManyAndReturnArgs} args - Arguments to update many Schedulings.
     * @example
     * // Update many Schedulings
     * const scheduling = await prisma.scheduling.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedulings and only return the `id`
     * const schedulingWithIdOnly = await prisma.scheduling.updateManyAndReturn({
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
    updateManyAndReturn<T extends SchedulingUpdateManyAndReturnArgs>(args: SelectSubset<T, SchedulingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scheduling.
     * @param {SchedulingUpsertArgs} args - Arguments to update or create a Scheduling.
     * @example
     * // Update or create a Scheduling
     * const scheduling = await prisma.scheduling.upsert({
     *   create: {
     *     // ... data to create a Scheduling
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scheduling we want to update
     *   }
     * })
     */
    upsert<T extends SchedulingUpsertArgs>(args: SelectSubset<T, SchedulingUpsertArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedulings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingCountArgs} args - Arguments to filter Schedulings to count.
     * @example
     * // Count the number of Schedulings
     * const count = await prisma.scheduling.count({
     *   where: {
     *     // ... the filter for the Schedulings we want to count
     *   }
     * })
    **/
    count<T extends SchedulingCountArgs>(
      args?: Subset<T, SchedulingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchedulingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scheduling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchedulingAggregateArgs>(args: Subset<T, SchedulingAggregateArgs>): Prisma.PrismaPromise<GetSchedulingAggregateType<T>>

    /**
     * Group by Scheduling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingGroupByArgs} args - Group by arguments.
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
      T extends SchedulingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchedulingGroupByArgs['orderBy'] }
        : { orderBy?: SchedulingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchedulingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedulingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scheduling model
   */
  readonly fields: SchedulingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scheduling.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchedulingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    barber<T extends BarberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarberDefaultArgs<ExtArgs>>): Prisma__BarberClient<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    barbershop<T extends BarbershopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarbershopDefaultArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    SchedulingService<T extends Scheduling$SchedulingServiceArgs<ExtArgs> = {}>(args?: Subset<T, Scheduling$SchedulingServiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Scheduling model
   */
  interface SchedulingFieldRefs {
    readonly id: FieldRef<"Scheduling", 'Int'>
    readonly date: FieldRef<"Scheduling", 'DateTime'>
    readonly time: FieldRef<"Scheduling", 'DateTime'>
    readonly duaration: FieldRef<"Scheduling", 'Int'>
    readonly clientId: FieldRef<"Scheduling", 'Int'>
    readonly barberId: FieldRef<"Scheduling", 'Int'>
    readonly barbershopId: FieldRef<"Scheduling", 'Int'>
    readonly totalPrice: FieldRef<"Scheduling", 'Float'>
    readonly status: FieldRef<"Scheduling", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Scheduling findUnique
   */
  export type SchedulingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter, which Scheduling to fetch.
     */
    where: SchedulingWhereUniqueInput
  }

  /**
   * Scheduling findUniqueOrThrow
   */
  export type SchedulingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter, which Scheduling to fetch.
     */
    where: SchedulingWhereUniqueInput
  }

  /**
   * Scheduling findFirst
   */
  export type SchedulingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter, which Scheduling to fetch.
     */
    where?: SchedulingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedulings to fetch.
     */
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedulings.
     */
    cursor?: SchedulingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedulings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedulings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedulings.
     */
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Scheduling findFirstOrThrow
   */
  export type SchedulingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter, which Scheduling to fetch.
     */
    where?: SchedulingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedulings to fetch.
     */
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedulings.
     */
    cursor?: SchedulingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedulings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedulings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedulings.
     */
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Scheduling findMany
   */
  export type SchedulingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter, which Schedulings to fetch.
     */
    where?: SchedulingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedulings to fetch.
     */
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedulings.
     */
    cursor?: SchedulingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedulings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedulings.
     */
    skip?: number
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Scheduling create
   */
  export type SchedulingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * The data needed to create a Scheduling.
     */
    data: XOR<SchedulingCreateInput, SchedulingUncheckedCreateInput>
  }

  /**
   * Scheduling createMany
   */
  export type SchedulingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedulings.
     */
    data: SchedulingCreateManyInput | SchedulingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scheduling createManyAndReturn
   */
  export type SchedulingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * The data used to create many Schedulings.
     */
    data: SchedulingCreateManyInput | SchedulingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scheduling update
   */
  export type SchedulingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * The data needed to update a Scheduling.
     */
    data: XOR<SchedulingUpdateInput, SchedulingUncheckedUpdateInput>
    /**
     * Choose, which Scheduling to update.
     */
    where: SchedulingWhereUniqueInput
  }

  /**
   * Scheduling updateMany
   */
  export type SchedulingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedulings.
     */
    data: XOR<SchedulingUpdateManyMutationInput, SchedulingUncheckedUpdateManyInput>
    /**
     * Filter which Schedulings to update
     */
    where?: SchedulingWhereInput
    /**
     * Limit how many Schedulings to update.
     */
    limit?: number
  }

  /**
   * Scheduling updateManyAndReturn
   */
  export type SchedulingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * The data used to update Schedulings.
     */
    data: XOR<SchedulingUpdateManyMutationInput, SchedulingUncheckedUpdateManyInput>
    /**
     * Filter which Schedulings to update
     */
    where?: SchedulingWhereInput
    /**
     * Limit how many Schedulings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scheduling upsert
   */
  export type SchedulingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * The filter to search for the Scheduling to update in case it exists.
     */
    where: SchedulingWhereUniqueInput
    /**
     * In case the Scheduling found by the `where` argument doesn't exist, create a new Scheduling with this data.
     */
    create: XOR<SchedulingCreateInput, SchedulingUncheckedCreateInput>
    /**
     * In case the Scheduling was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchedulingUpdateInput, SchedulingUncheckedUpdateInput>
  }

  /**
   * Scheduling delete
   */
  export type SchedulingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter which Scheduling to delete.
     */
    where: SchedulingWhereUniqueInput
  }

  /**
   * Scheduling deleteMany
   */
  export type SchedulingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedulings to delete
     */
    where?: SchedulingWhereInput
    /**
     * Limit how many Schedulings to delete.
     */
    limit?: number
  }

  /**
   * Scheduling.SchedulingService
   */
  export type Scheduling$SchedulingServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingService
     */
    select?: SchedulingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchedulingService
     */
    omit?: SchedulingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingServiceInclude<ExtArgs> | null
    where?: SchedulingServiceWhereInput
    orderBy?: SchedulingServiceOrderByWithRelationInput | SchedulingServiceOrderByWithRelationInput[]
    cursor?: SchedulingServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulingServiceScalarFieldEnum | SchedulingServiceScalarFieldEnum[]
  }

  /**
   * Scheduling without action
   */
  export type SchedulingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
  }


  /**
   * Model SchedulingService
   */

  export type AggregateSchedulingService = {
    _count: SchedulingServiceCountAggregateOutputType | null
    _avg: SchedulingServiceAvgAggregateOutputType | null
    _sum: SchedulingServiceSumAggregateOutputType | null
    _min: SchedulingServiceMinAggregateOutputType | null
    _max: SchedulingServiceMaxAggregateOutputType | null
  }

  export type SchedulingServiceAvgAggregateOutputType = {
    id: number | null
    schedulingId: number | null
    serviceId: number | null
  }

  export type SchedulingServiceSumAggregateOutputType = {
    id: number | null
    schedulingId: number | null
    serviceId: number | null
  }

  export type SchedulingServiceMinAggregateOutputType = {
    id: number | null
    schedulingId: number | null
    serviceId: number | null
  }

  export type SchedulingServiceMaxAggregateOutputType = {
    id: number | null
    schedulingId: number | null
    serviceId: number | null
  }

  export type SchedulingServiceCountAggregateOutputType = {
    id: number
    schedulingId: number
    serviceId: number
    _all: number
  }


  export type SchedulingServiceAvgAggregateInputType = {
    id?: true
    schedulingId?: true
    serviceId?: true
  }

  export type SchedulingServiceSumAggregateInputType = {
    id?: true
    schedulingId?: true
    serviceId?: true
  }

  export type SchedulingServiceMinAggregateInputType = {
    id?: true
    schedulingId?: true
    serviceId?: true
  }

  export type SchedulingServiceMaxAggregateInputType = {
    id?: true
    schedulingId?: true
    serviceId?: true
  }

  export type SchedulingServiceCountAggregateInputType = {
    id?: true
    schedulingId?: true
    serviceId?: true
    _all?: true
  }

  export type SchedulingServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchedulingService to aggregate.
     */
    where?: SchedulingServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchedulingServices to fetch.
     */
    orderBy?: SchedulingServiceOrderByWithRelationInput | SchedulingServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchedulingServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchedulingServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchedulingServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SchedulingServices
    **/
    _count?: true | SchedulingServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchedulingServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchedulingServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchedulingServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchedulingServiceMaxAggregateInputType
  }

  export type GetSchedulingServiceAggregateType<T extends SchedulingServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedulingService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedulingService[P]>
      : GetScalarType<T[P], AggregateSchedulingService[P]>
  }




  export type SchedulingServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingServiceWhereInput
    orderBy?: SchedulingServiceOrderByWithAggregationInput | SchedulingServiceOrderByWithAggregationInput[]
    by: SchedulingServiceScalarFieldEnum[] | SchedulingServiceScalarFieldEnum
    having?: SchedulingServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchedulingServiceCountAggregateInputType | true
    _avg?: SchedulingServiceAvgAggregateInputType
    _sum?: SchedulingServiceSumAggregateInputType
    _min?: SchedulingServiceMinAggregateInputType
    _max?: SchedulingServiceMaxAggregateInputType
  }

  export type SchedulingServiceGroupByOutputType = {
    id: number
    schedulingId: number
    serviceId: number
    _count: SchedulingServiceCountAggregateOutputType | null
    _avg: SchedulingServiceAvgAggregateOutputType | null
    _sum: SchedulingServiceSumAggregateOutputType | null
    _min: SchedulingServiceMinAggregateOutputType | null
    _max: SchedulingServiceMaxAggregateOutputType | null
  }

  type GetSchedulingServiceGroupByPayload<T extends SchedulingServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchedulingServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchedulingServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchedulingServiceGroupByOutputType[P]>
            : GetScalarType<T[P], SchedulingServiceGroupByOutputType[P]>
        }
      >
    >


  export type SchedulingServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schedulingId?: boolean
    serviceId?: boolean
    scheduling?: boolean | SchedulingDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedulingService"]>

  export type SchedulingServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schedulingId?: boolean
    serviceId?: boolean
    scheduling?: boolean | SchedulingDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedulingService"]>

  export type SchedulingServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schedulingId?: boolean
    serviceId?: boolean
    scheduling?: boolean | SchedulingDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedulingService"]>

  export type SchedulingServiceSelectScalar = {
    id?: boolean
    schedulingId?: boolean
    serviceId?: boolean
  }

  export type SchedulingServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schedulingId" | "serviceId", ExtArgs["result"]["schedulingService"]>
  export type SchedulingServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduling?: boolean | SchedulingDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type SchedulingServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduling?: boolean | SchedulingDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type SchedulingServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduling?: boolean | SchedulingDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $SchedulingServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SchedulingService"
    objects: {
      scheduling: Prisma.$SchedulingPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schedulingId: number
      serviceId: number
    }, ExtArgs["result"]["schedulingService"]>
    composites: {}
  }

  type SchedulingServiceGetPayload<S extends boolean | null | undefined | SchedulingServiceDefaultArgs> = $Result.GetResult<Prisma.$SchedulingServicePayload, S>

  type SchedulingServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchedulingServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchedulingServiceCountAggregateInputType | true
    }

  export interface SchedulingServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SchedulingService'], meta: { name: 'SchedulingService' } }
    /**
     * Find zero or one SchedulingService that matches the filter.
     * @param {SchedulingServiceFindUniqueArgs} args - Arguments to find a SchedulingService
     * @example
     * // Get one SchedulingService
     * const schedulingService = await prisma.schedulingService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchedulingServiceFindUniqueArgs>(args: SelectSubset<T, SchedulingServiceFindUniqueArgs<ExtArgs>>): Prisma__SchedulingServiceClient<$Result.GetResult<Prisma.$SchedulingServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SchedulingService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchedulingServiceFindUniqueOrThrowArgs} args - Arguments to find a SchedulingService
     * @example
     * // Get one SchedulingService
     * const schedulingService = await prisma.schedulingService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchedulingServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, SchedulingServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchedulingServiceClient<$Result.GetResult<Prisma.$SchedulingServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SchedulingService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingServiceFindFirstArgs} args - Arguments to find a SchedulingService
     * @example
     * // Get one SchedulingService
     * const schedulingService = await prisma.schedulingService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchedulingServiceFindFirstArgs>(args?: SelectSubset<T, SchedulingServiceFindFirstArgs<ExtArgs>>): Prisma__SchedulingServiceClient<$Result.GetResult<Prisma.$SchedulingServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SchedulingService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingServiceFindFirstOrThrowArgs} args - Arguments to find a SchedulingService
     * @example
     * // Get one SchedulingService
     * const schedulingService = await prisma.schedulingService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchedulingServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, SchedulingServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchedulingServiceClient<$Result.GetResult<Prisma.$SchedulingServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SchedulingServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SchedulingServices
     * const schedulingServices = await prisma.schedulingService.findMany()
     * 
     * // Get first 10 SchedulingServices
     * const schedulingServices = await prisma.schedulingService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schedulingServiceWithIdOnly = await prisma.schedulingService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchedulingServiceFindManyArgs>(args?: SelectSubset<T, SchedulingServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SchedulingService.
     * @param {SchedulingServiceCreateArgs} args - Arguments to create a SchedulingService.
     * @example
     * // Create one SchedulingService
     * const SchedulingService = await prisma.schedulingService.create({
     *   data: {
     *     // ... data to create a SchedulingService
     *   }
     * })
     * 
     */
    create<T extends SchedulingServiceCreateArgs>(args: SelectSubset<T, SchedulingServiceCreateArgs<ExtArgs>>): Prisma__SchedulingServiceClient<$Result.GetResult<Prisma.$SchedulingServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SchedulingServices.
     * @param {SchedulingServiceCreateManyArgs} args - Arguments to create many SchedulingServices.
     * @example
     * // Create many SchedulingServices
     * const schedulingService = await prisma.schedulingService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchedulingServiceCreateManyArgs>(args?: SelectSubset<T, SchedulingServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SchedulingServices and returns the data saved in the database.
     * @param {SchedulingServiceCreateManyAndReturnArgs} args - Arguments to create many SchedulingServices.
     * @example
     * // Create many SchedulingServices
     * const schedulingService = await prisma.schedulingService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SchedulingServices and only return the `id`
     * const schedulingServiceWithIdOnly = await prisma.schedulingService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchedulingServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, SchedulingServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SchedulingService.
     * @param {SchedulingServiceDeleteArgs} args - Arguments to delete one SchedulingService.
     * @example
     * // Delete one SchedulingService
     * const SchedulingService = await prisma.schedulingService.delete({
     *   where: {
     *     // ... filter to delete one SchedulingService
     *   }
     * })
     * 
     */
    delete<T extends SchedulingServiceDeleteArgs>(args: SelectSubset<T, SchedulingServiceDeleteArgs<ExtArgs>>): Prisma__SchedulingServiceClient<$Result.GetResult<Prisma.$SchedulingServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SchedulingService.
     * @param {SchedulingServiceUpdateArgs} args - Arguments to update one SchedulingService.
     * @example
     * // Update one SchedulingService
     * const schedulingService = await prisma.schedulingService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchedulingServiceUpdateArgs>(args: SelectSubset<T, SchedulingServiceUpdateArgs<ExtArgs>>): Prisma__SchedulingServiceClient<$Result.GetResult<Prisma.$SchedulingServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SchedulingServices.
     * @param {SchedulingServiceDeleteManyArgs} args - Arguments to filter SchedulingServices to delete.
     * @example
     * // Delete a few SchedulingServices
     * const { count } = await prisma.schedulingService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchedulingServiceDeleteManyArgs>(args?: SelectSubset<T, SchedulingServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchedulingServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SchedulingServices
     * const schedulingService = await prisma.schedulingService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchedulingServiceUpdateManyArgs>(args: SelectSubset<T, SchedulingServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchedulingServices and returns the data updated in the database.
     * @param {SchedulingServiceUpdateManyAndReturnArgs} args - Arguments to update many SchedulingServices.
     * @example
     * // Update many SchedulingServices
     * const schedulingService = await prisma.schedulingService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SchedulingServices and only return the `id`
     * const schedulingServiceWithIdOnly = await prisma.schedulingService.updateManyAndReturn({
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
    updateManyAndReturn<T extends SchedulingServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, SchedulingServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SchedulingService.
     * @param {SchedulingServiceUpsertArgs} args - Arguments to update or create a SchedulingService.
     * @example
     * // Update or create a SchedulingService
     * const schedulingService = await prisma.schedulingService.upsert({
     *   create: {
     *     // ... data to create a SchedulingService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SchedulingService we want to update
     *   }
     * })
     */
    upsert<T extends SchedulingServiceUpsertArgs>(args: SelectSubset<T, SchedulingServiceUpsertArgs<ExtArgs>>): Prisma__SchedulingServiceClient<$Result.GetResult<Prisma.$SchedulingServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SchedulingServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingServiceCountArgs} args - Arguments to filter SchedulingServices to count.
     * @example
     * // Count the number of SchedulingServices
     * const count = await prisma.schedulingService.count({
     *   where: {
     *     // ... the filter for the SchedulingServices we want to count
     *   }
     * })
    **/
    count<T extends SchedulingServiceCountArgs>(
      args?: Subset<T, SchedulingServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchedulingServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SchedulingService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchedulingServiceAggregateArgs>(args: Subset<T, SchedulingServiceAggregateArgs>): Prisma.PrismaPromise<GetSchedulingServiceAggregateType<T>>

    /**
     * Group by SchedulingService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingServiceGroupByArgs} args - Group by arguments.
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
      T extends SchedulingServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchedulingServiceGroupByArgs['orderBy'] }
        : { orderBy?: SchedulingServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchedulingServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedulingServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SchedulingService model
   */
  readonly fields: SchedulingServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SchedulingService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchedulingServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scheduling<T extends SchedulingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchedulingDefaultArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SchedulingService model
   */
  interface SchedulingServiceFieldRefs {
    readonly id: FieldRef<"SchedulingService", 'Int'>
    readonly schedulingId: FieldRef<"SchedulingService", 'Int'>
    readonly serviceId: FieldRef<"SchedulingService", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SchedulingService findUnique
   */
  export type SchedulingServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingService
     */
    select?: SchedulingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchedulingService
     */
    omit?: SchedulingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingServiceInclude<ExtArgs> | null
    /**
     * Filter, which SchedulingService to fetch.
     */
    where: SchedulingServiceWhereUniqueInput
  }

  /**
   * SchedulingService findUniqueOrThrow
   */
  export type SchedulingServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingService
     */
    select?: SchedulingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchedulingService
     */
    omit?: SchedulingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingServiceInclude<ExtArgs> | null
    /**
     * Filter, which SchedulingService to fetch.
     */
    where: SchedulingServiceWhereUniqueInput
  }

  /**
   * SchedulingService findFirst
   */
  export type SchedulingServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingService
     */
    select?: SchedulingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchedulingService
     */
    omit?: SchedulingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingServiceInclude<ExtArgs> | null
    /**
     * Filter, which SchedulingService to fetch.
     */
    where?: SchedulingServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchedulingServices to fetch.
     */
    orderBy?: SchedulingServiceOrderByWithRelationInput | SchedulingServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchedulingServices.
     */
    cursor?: SchedulingServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchedulingServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchedulingServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchedulingServices.
     */
    distinct?: SchedulingServiceScalarFieldEnum | SchedulingServiceScalarFieldEnum[]
  }

  /**
   * SchedulingService findFirstOrThrow
   */
  export type SchedulingServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingService
     */
    select?: SchedulingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchedulingService
     */
    omit?: SchedulingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingServiceInclude<ExtArgs> | null
    /**
     * Filter, which SchedulingService to fetch.
     */
    where?: SchedulingServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchedulingServices to fetch.
     */
    orderBy?: SchedulingServiceOrderByWithRelationInput | SchedulingServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchedulingServices.
     */
    cursor?: SchedulingServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchedulingServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchedulingServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchedulingServices.
     */
    distinct?: SchedulingServiceScalarFieldEnum | SchedulingServiceScalarFieldEnum[]
  }

  /**
   * SchedulingService findMany
   */
  export type SchedulingServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingService
     */
    select?: SchedulingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchedulingService
     */
    omit?: SchedulingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingServiceInclude<ExtArgs> | null
    /**
     * Filter, which SchedulingServices to fetch.
     */
    where?: SchedulingServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchedulingServices to fetch.
     */
    orderBy?: SchedulingServiceOrderByWithRelationInput | SchedulingServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SchedulingServices.
     */
    cursor?: SchedulingServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchedulingServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchedulingServices.
     */
    skip?: number
    distinct?: SchedulingServiceScalarFieldEnum | SchedulingServiceScalarFieldEnum[]
  }

  /**
   * SchedulingService create
   */
  export type SchedulingServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingService
     */
    select?: SchedulingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchedulingService
     */
    omit?: SchedulingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a SchedulingService.
     */
    data: XOR<SchedulingServiceCreateInput, SchedulingServiceUncheckedCreateInput>
  }

  /**
   * SchedulingService createMany
   */
  export type SchedulingServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SchedulingServices.
     */
    data: SchedulingServiceCreateManyInput | SchedulingServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SchedulingService createManyAndReturn
   */
  export type SchedulingServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingService
     */
    select?: SchedulingServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SchedulingService
     */
    omit?: SchedulingServiceOmit<ExtArgs> | null
    /**
     * The data used to create many SchedulingServices.
     */
    data: SchedulingServiceCreateManyInput | SchedulingServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SchedulingService update
   */
  export type SchedulingServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingService
     */
    select?: SchedulingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchedulingService
     */
    omit?: SchedulingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a SchedulingService.
     */
    data: XOR<SchedulingServiceUpdateInput, SchedulingServiceUncheckedUpdateInput>
    /**
     * Choose, which SchedulingService to update.
     */
    where: SchedulingServiceWhereUniqueInput
  }

  /**
   * SchedulingService updateMany
   */
  export type SchedulingServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SchedulingServices.
     */
    data: XOR<SchedulingServiceUpdateManyMutationInput, SchedulingServiceUncheckedUpdateManyInput>
    /**
     * Filter which SchedulingServices to update
     */
    where?: SchedulingServiceWhereInput
    /**
     * Limit how many SchedulingServices to update.
     */
    limit?: number
  }

  /**
   * SchedulingService updateManyAndReturn
   */
  export type SchedulingServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingService
     */
    select?: SchedulingServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SchedulingService
     */
    omit?: SchedulingServiceOmit<ExtArgs> | null
    /**
     * The data used to update SchedulingServices.
     */
    data: XOR<SchedulingServiceUpdateManyMutationInput, SchedulingServiceUncheckedUpdateManyInput>
    /**
     * Filter which SchedulingServices to update
     */
    where?: SchedulingServiceWhereInput
    /**
     * Limit how many SchedulingServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SchedulingService upsert
   */
  export type SchedulingServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingService
     */
    select?: SchedulingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchedulingService
     */
    omit?: SchedulingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the SchedulingService to update in case it exists.
     */
    where: SchedulingServiceWhereUniqueInput
    /**
     * In case the SchedulingService found by the `where` argument doesn't exist, create a new SchedulingService with this data.
     */
    create: XOR<SchedulingServiceCreateInput, SchedulingServiceUncheckedCreateInput>
    /**
     * In case the SchedulingService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchedulingServiceUpdateInput, SchedulingServiceUncheckedUpdateInput>
  }

  /**
   * SchedulingService delete
   */
  export type SchedulingServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingService
     */
    select?: SchedulingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchedulingService
     */
    omit?: SchedulingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingServiceInclude<ExtArgs> | null
    /**
     * Filter which SchedulingService to delete.
     */
    where: SchedulingServiceWhereUniqueInput
  }

  /**
   * SchedulingService deleteMany
   */
  export type SchedulingServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchedulingServices to delete
     */
    where?: SchedulingServiceWhereInput
    /**
     * Limit how many SchedulingServices to delete.
     */
    limit?: number
  }

  /**
   * SchedulingService without action
   */
  export type SchedulingServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingService
     */
    select?: SchedulingServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchedulingService
     */
    omit?: SchedulingServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingServiceInclude<ExtArgs> | null
  }


  /**
   * Model WorkingHours
   */

  export type AggregateWorkingHours = {
    _count: WorkingHoursCountAggregateOutputType | null
    _avg: WorkingHoursAvgAggregateOutputType | null
    _sum: WorkingHoursSumAggregateOutputType | null
    _min: WorkingHoursMinAggregateOutputType | null
    _max: WorkingHoursMaxAggregateOutputType | null
  }

  export type WorkingHoursAvgAggregateOutputType = {
    id: number | null
    dayOfWeek: number | null
    barbershopId: number | null
  }

  export type WorkingHoursSumAggregateOutputType = {
    id: number | null
    dayOfWeek: number | null
    barbershopId: number | null
  }

  export type WorkingHoursMinAggregateOutputType = {
    id: number | null
    dayOfWeek: number | null
    openTime: Date | null
    closeTime: Date | null
    startLunch: Date | null
    endLunch: Date | null
    barbershopId: number | null
    lunch: boolean | null
  }

  export type WorkingHoursMaxAggregateOutputType = {
    id: number | null
    dayOfWeek: number | null
    openTime: Date | null
    closeTime: Date | null
    startLunch: Date | null
    endLunch: Date | null
    barbershopId: number | null
    lunch: boolean | null
  }

  export type WorkingHoursCountAggregateOutputType = {
    id: number
    dayOfWeek: number
    openTime: number
    closeTime: number
    startLunch: number
    endLunch: number
    barbershopId: number
    lunch: number
    _all: number
  }


  export type WorkingHoursAvgAggregateInputType = {
    id?: true
    dayOfWeek?: true
    barbershopId?: true
  }

  export type WorkingHoursSumAggregateInputType = {
    id?: true
    dayOfWeek?: true
    barbershopId?: true
  }

  export type WorkingHoursMinAggregateInputType = {
    id?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    startLunch?: true
    endLunch?: true
    barbershopId?: true
    lunch?: true
  }

  export type WorkingHoursMaxAggregateInputType = {
    id?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    startLunch?: true
    endLunch?: true
    barbershopId?: true
    lunch?: true
  }

  export type WorkingHoursCountAggregateInputType = {
    id?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    startLunch?: true
    endLunch?: true
    barbershopId?: true
    lunch?: true
    _all?: true
  }

  export type WorkingHoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkingHours to aggregate.
     */
    where?: WorkingHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingHours to fetch.
     */
    orderBy?: WorkingHoursOrderByWithRelationInput | WorkingHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkingHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkingHours
    **/
    _count?: true | WorkingHoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkingHoursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkingHoursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkingHoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkingHoursMaxAggregateInputType
  }

  export type GetWorkingHoursAggregateType<T extends WorkingHoursAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkingHours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkingHours[P]>
      : GetScalarType<T[P], AggregateWorkingHours[P]>
  }




  export type WorkingHoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkingHoursWhereInput
    orderBy?: WorkingHoursOrderByWithAggregationInput | WorkingHoursOrderByWithAggregationInput[]
    by: WorkingHoursScalarFieldEnum[] | WorkingHoursScalarFieldEnum
    having?: WorkingHoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkingHoursCountAggregateInputType | true
    _avg?: WorkingHoursAvgAggregateInputType
    _sum?: WorkingHoursSumAggregateInputType
    _min?: WorkingHoursMinAggregateInputType
    _max?: WorkingHoursMaxAggregateInputType
  }

  export type WorkingHoursGroupByOutputType = {
    id: number
    dayOfWeek: number
    openTime: Date
    closeTime: Date
    startLunch: Date | null
    endLunch: Date | null
    barbershopId: number
    lunch: boolean
    _count: WorkingHoursCountAggregateOutputType | null
    _avg: WorkingHoursAvgAggregateOutputType | null
    _sum: WorkingHoursSumAggregateOutputType | null
    _min: WorkingHoursMinAggregateOutputType | null
    _max: WorkingHoursMaxAggregateOutputType | null
  }

  type GetWorkingHoursGroupByPayload<T extends WorkingHoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkingHoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkingHoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkingHoursGroupByOutputType[P]>
            : GetScalarType<T[P], WorkingHoursGroupByOutputType[P]>
        }
      >
    >


  export type WorkingHoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    startLunch?: boolean
    endLunch?: boolean
    barbershopId?: boolean
    lunch?: boolean
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workingHours"]>

  export type WorkingHoursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    startLunch?: boolean
    endLunch?: boolean
    barbershopId?: boolean
    lunch?: boolean
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workingHours"]>

  export type WorkingHoursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    startLunch?: boolean
    endLunch?: boolean
    barbershopId?: boolean
    lunch?: boolean
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workingHours"]>

  export type WorkingHoursSelectScalar = {
    id?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    startLunch?: boolean
    endLunch?: boolean
    barbershopId?: boolean
    lunch?: boolean
  }

  export type WorkingHoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dayOfWeek" | "openTime" | "closeTime" | "startLunch" | "endLunch" | "barbershopId" | "lunch", ExtArgs["result"]["workingHours"]>
  export type WorkingHoursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }
  export type WorkingHoursIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }
  export type WorkingHoursIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }

  export type $WorkingHoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkingHours"
    objects: {
      barbershop: Prisma.$BarbershopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dayOfWeek: number
      openTime: Date
      closeTime: Date
      startLunch: Date | null
      endLunch: Date | null
      barbershopId: number
      lunch: boolean
    }, ExtArgs["result"]["workingHours"]>
    composites: {}
  }

  type WorkingHoursGetPayload<S extends boolean | null | undefined | WorkingHoursDefaultArgs> = $Result.GetResult<Prisma.$WorkingHoursPayload, S>

  type WorkingHoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkingHoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkingHoursCountAggregateInputType | true
    }

  export interface WorkingHoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkingHours'], meta: { name: 'WorkingHours' } }
    /**
     * Find zero or one WorkingHours that matches the filter.
     * @param {WorkingHoursFindUniqueArgs} args - Arguments to find a WorkingHours
     * @example
     * // Get one WorkingHours
     * const workingHours = await prisma.workingHours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkingHoursFindUniqueArgs>(args: SelectSubset<T, WorkingHoursFindUniqueArgs<ExtArgs>>): Prisma__WorkingHoursClient<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkingHours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkingHoursFindUniqueOrThrowArgs} args - Arguments to find a WorkingHours
     * @example
     * // Get one WorkingHours
     * const workingHours = await prisma.workingHours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkingHoursFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkingHoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkingHoursClient<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkingHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHoursFindFirstArgs} args - Arguments to find a WorkingHours
     * @example
     * // Get one WorkingHours
     * const workingHours = await prisma.workingHours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkingHoursFindFirstArgs>(args?: SelectSubset<T, WorkingHoursFindFirstArgs<ExtArgs>>): Prisma__WorkingHoursClient<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkingHours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHoursFindFirstOrThrowArgs} args - Arguments to find a WorkingHours
     * @example
     * // Get one WorkingHours
     * const workingHours = await prisma.workingHours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkingHoursFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkingHoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkingHoursClient<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkingHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkingHours
     * const workingHours = await prisma.workingHours.findMany()
     * 
     * // Get first 10 WorkingHours
     * const workingHours = await prisma.workingHours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workingHoursWithIdOnly = await prisma.workingHours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkingHoursFindManyArgs>(args?: SelectSubset<T, WorkingHoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkingHours.
     * @param {WorkingHoursCreateArgs} args - Arguments to create a WorkingHours.
     * @example
     * // Create one WorkingHours
     * const WorkingHours = await prisma.workingHours.create({
     *   data: {
     *     // ... data to create a WorkingHours
     *   }
     * })
     * 
     */
    create<T extends WorkingHoursCreateArgs>(args: SelectSubset<T, WorkingHoursCreateArgs<ExtArgs>>): Prisma__WorkingHoursClient<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkingHours.
     * @param {WorkingHoursCreateManyArgs} args - Arguments to create many WorkingHours.
     * @example
     * // Create many WorkingHours
     * const workingHours = await prisma.workingHours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkingHoursCreateManyArgs>(args?: SelectSubset<T, WorkingHoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkingHours and returns the data saved in the database.
     * @param {WorkingHoursCreateManyAndReturnArgs} args - Arguments to create many WorkingHours.
     * @example
     * // Create many WorkingHours
     * const workingHours = await prisma.workingHours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkingHours and only return the `id`
     * const workingHoursWithIdOnly = await prisma.workingHours.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkingHoursCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkingHoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkingHours.
     * @param {WorkingHoursDeleteArgs} args - Arguments to delete one WorkingHours.
     * @example
     * // Delete one WorkingHours
     * const WorkingHours = await prisma.workingHours.delete({
     *   where: {
     *     // ... filter to delete one WorkingHours
     *   }
     * })
     * 
     */
    delete<T extends WorkingHoursDeleteArgs>(args: SelectSubset<T, WorkingHoursDeleteArgs<ExtArgs>>): Prisma__WorkingHoursClient<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkingHours.
     * @param {WorkingHoursUpdateArgs} args - Arguments to update one WorkingHours.
     * @example
     * // Update one WorkingHours
     * const workingHours = await prisma.workingHours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkingHoursUpdateArgs>(args: SelectSubset<T, WorkingHoursUpdateArgs<ExtArgs>>): Prisma__WorkingHoursClient<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkingHours.
     * @param {WorkingHoursDeleteManyArgs} args - Arguments to filter WorkingHours to delete.
     * @example
     * // Delete a few WorkingHours
     * const { count } = await prisma.workingHours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkingHoursDeleteManyArgs>(args?: SelectSubset<T, WorkingHoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkingHours
     * const workingHours = await prisma.workingHours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkingHoursUpdateManyArgs>(args: SelectSubset<T, WorkingHoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkingHours and returns the data updated in the database.
     * @param {WorkingHoursUpdateManyAndReturnArgs} args - Arguments to update many WorkingHours.
     * @example
     * // Update many WorkingHours
     * const workingHours = await prisma.workingHours.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkingHours and only return the `id`
     * const workingHoursWithIdOnly = await prisma.workingHours.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkingHoursUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkingHoursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkingHours.
     * @param {WorkingHoursUpsertArgs} args - Arguments to update or create a WorkingHours.
     * @example
     * // Update or create a WorkingHours
     * const workingHours = await prisma.workingHours.upsert({
     *   create: {
     *     // ... data to create a WorkingHours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkingHours we want to update
     *   }
     * })
     */
    upsert<T extends WorkingHoursUpsertArgs>(args: SelectSubset<T, WorkingHoursUpsertArgs<ExtArgs>>): Prisma__WorkingHoursClient<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHoursCountArgs} args - Arguments to filter WorkingHours to count.
     * @example
     * // Count the number of WorkingHours
     * const count = await prisma.workingHours.count({
     *   where: {
     *     // ... the filter for the WorkingHours we want to count
     *   }
     * })
    **/
    count<T extends WorkingHoursCountArgs>(
      args?: Subset<T, WorkingHoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkingHoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkingHoursAggregateArgs>(args: Subset<T, WorkingHoursAggregateArgs>): Prisma.PrismaPromise<GetWorkingHoursAggregateType<T>>

    /**
     * Group by WorkingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHoursGroupByArgs} args - Group by arguments.
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
      T extends WorkingHoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkingHoursGroupByArgs['orderBy'] }
        : { orderBy?: WorkingHoursGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkingHoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkingHoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkingHours model
   */
  readonly fields: WorkingHoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkingHours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkingHoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barbershop<T extends BarbershopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarbershopDefaultArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkingHours model
   */
  interface WorkingHoursFieldRefs {
    readonly id: FieldRef<"WorkingHours", 'Int'>
    readonly dayOfWeek: FieldRef<"WorkingHours", 'Int'>
    readonly openTime: FieldRef<"WorkingHours", 'DateTime'>
    readonly closeTime: FieldRef<"WorkingHours", 'DateTime'>
    readonly startLunch: FieldRef<"WorkingHours", 'DateTime'>
    readonly endLunch: FieldRef<"WorkingHours", 'DateTime'>
    readonly barbershopId: FieldRef<"WorkingHours", 'Int'>
    readonly lunch: FieldRef<"WorkingHours", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * WorkingHours findUnique
   */
  export type WorkingHoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHours to fetch.
     */
    where: WorkingHoursWhereUniqueInput
  }

  /**
   * WorkingHours findUniqueOrThrow
   */
  export type WorkingHoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHours to fetch.
     */
    where: WorkingHoursWhereUniqueInput
  }

  /**
   * WorkingHours findFirst
   */
  export type WorkingHoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHours to fetch.
     */
    where?: WorkingHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingHours to fetch.
     */
    orderBy?: WorkingHoursOrderByWithRelationInput | WorkingHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkingHours.
     */
    cursor?: WorkingHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkingHours.
     */
    distinct?: WorkingHoursScalarFieldEnum | WorkingHoursScalarFieldEnum[]
  }

  /**
   * WorkingHours findFirstOrThrow
   */
  export type WorkingHoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHours to fetch.
     */
    where?: WorkingHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingHours to fetch.
     */
    orderBy?: WorkingHoursOrderByWithRelationInput | WorkingHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkingHours.
     */
    cursor?: WorkingHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkingHours.
     */
    distinct?: WorkingHoursScalarFieldEnum | WorkingHoursScalarFieldEnum[]
  }

  /**
   * WorkingHours findMany
   */
  export type WorkingHoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHours to fetch.
     */
    where?: WorkingHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingHours to fetch.
     */
    orderBy?: WorkingHoursOrderByWithRelationInput | WorkingHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkingHours.
     */
    cursor?: WorkingHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingHours.
     */
    skip?: number
    distinct?: WorkingHoursScalarFieldEnum | WorkingHoursScalarFieldEnum[]
  }

  /**
   * WorkingHours create
   */
  export type WorkingHoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkingHours.
     */
    data: XOR<WorkingHoursCreateInput, WorkingHoursUncheckedCreateInput>
  }

  /**
   * WorkingHours createMany
   */
  export type WorkingHoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkingHours.
     */
    data: WorkingHoursCreateManyInput | WorkingHoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkingHours createManyAndReturn
   */
  export type WorkingHoursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * The data used to create many WorkingHours.
     */
    data: WorkingHoursCreateManyInput | WorkingHoursCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkingHours update
   */
  export type WorkingHoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkingHours.
     */
    data: XOR<WorkingHoursUpdateInput, WorkingHoursUncheckedUpdateInput>
    /**
     * Choose, which WorkingHours to update.
     */
    where: WorkingHoursWhereUniqueInput
  }

  /**
   * WorkingHours updateMany
   */
  export type WorkingHoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkingHours.
     */
    data: XOR<WorkingHoursUpdateManyMutationInput, WorkingHoursUncheckedUpdateManyInput>
    /**
     * Filter which WorkingHours to update
     */
    where?: WorkingHoursWhereInput
    /**
     * Limit how many WorkingHours to update.
     */
    limit?: number
  }

  /**
   * WorkingHours updateManyAndReturn
   */
  export type WorkingHoursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * The data used to update WorkingHours.
     */
    data: XOR<WorkingHoursUpdateManyMutationInput, WorkingHoursUncheckedUpdateManyInput>
    /**
     * Filter which WorkingHours to update
     */
    where?: WorkingHoursWhereInput
    /**
     * Limit how many WorkingHours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkingHours upsert
   */
  export type WorkingHoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkingHours to update in case it exists.
     */
    where: WorkingHoursWhereUniqueInput
    /**
     * In case the WorkingHours found by the `where` argument doesn't exist, create a new WorkingHours with this data.
     */
    create: XOR<WorkingHoursCreateInput, WorkingHoursUncheckedCreateInput>
    /**
     * In case the WorkingHours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkingHoursUpdateInput, WorkingHoursUncheckedUpdateInput>
  }

  /**
   * WorkingHours delete
   */
  export type WorkingHoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
    /**
     * Filter which WorkingHours to delete.
     */
    where: WorkingHoursWhereUniqueInput
  }

  /**
   * WorkingHours deleteMany
   */
  export type WorkingHoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkingHours to delete
     */
    where?: WorkingHoursWhereInput
    /**
     * Limit how many WorkingHours to delete.
     */
    limit?: number
  }

  /**
   * WorkingHours without action
   */
  export type WorkingHoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
  }


  /**
   * Model ClosedDay
   */

  export type AggregateClosedDay = {
    _count: ClosedDayCountAggregateOutputType | null
    _avg: ClosedDayAvgAggregateOutputType | null
    _sum: ClosedDaySumAggregateOutputType | null
    _min: ClosedDayMinAggregateOutputType | null
    _max: ClosedDayMaxAggregateOutputType | null
  }

  export type ClosedDayAvgAggregateOutputType = {
    id: number | null
    barbershopId: number | null
  }

  export type ClosedDaySumAggregateOutputType = {
    id: number | null
    barbershopId: number | null
  }

  export type ClosedDayMinAggregateOutputType = {
    id: number | null
    date: Date | null
    reason: string | null
    barbershopId: number | null
  }

  export type ClosedDayMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    reason: string | null
    barbershopId: number | null
  }

  export type ClosedDayCountAggregateOutputType = {
    id: number
    date: number
    reason: number
    barbershopId: number
    _all: number
  }


  export type ClosedDayAvgAggregateInputType = {
    id?: true
    barbershopId?: true
  }

  export type ClosedDaySumAggregateInputType = {
    id?: true
    barbershopId?: true
  }

  export type ClosedDayMinAggregateInputType = {
    id?: true
    date?: true
    reason?: true
    barbershopId?: true
  }

  export type ClosedDayMaxAggregateInputType = {
    id?: true
    date?: true
    reason?: true
    barbershopId?: true
  }

  export type ClosedDayCountAggregateInputType = {
    id?: true
    date?: true
    reason?: true
    barbershopId?: true
    _all?: true
  }

  export type ClosedDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClosedDay to aggregate.
     */
    where?: ClosedDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClosedDays to fetch.
     */
    orderBy?: ClosedDayOrderByWithRelationInput | ClosedDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClosedDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClosedDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClosedDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClosedDays
    **/
    _count?: true | ClosedDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClosedDayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClosedDaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClosedDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClosedDayMaxAggregateInputType
  }

  export type GetClosedDayAggregateType<T extends ClosedDayAggregateArgs> = {
        [P in keyof T & keyof AggregateClosedDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClosedDay[P]>
      : GetScalarType<T[P], AggregateClosedDay[P]>
  }




  export type ClosedDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClosedDayWhereInput
    orderBy?: ClosedDayOrderByWithAggregationInput | ClosedDayOrderByWithAggregationInput[]
    by: ClosedDayScalarFieldEnum[] | ClosedDayScalarFieldEnum
    having?: ClosedDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClosedDayCountAggregateInputType | true
    _avg?: ClosedDayAvgAggregateInputType
    _sum?: ClosedDaySumAggregateInputType
    _min?: ClosedDayMinAggregateInputType
    _max?: ClosedDayMaxAggregateInputType
  }

  export type ClosedDayGroupByOutputType = {
    id: number
    date: Date
    reason: string | null
    barbershopId: number
    _count: ClosedDayCountAggregateOutputType | null
    _avg: ClosedDayAvgAggregateOutputType | null
    _sum: ClosedDaySumAggregateOutputType | null
    _min: ClosedDayMinAggregateOutputType | null
    _max: ClosedDayMaxAggregateOutputType | null
  }

  type GetClosedDayGroupByPayload<T extends ClosedDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClosedDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClosedDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClosedDayGroupByOutputType[P]>
            : GetScalarType<T[P], ClosedDayGroupByOutputType[P]>
        }
      >
    >


  export type ClosedDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    reason?: boolean
    barbershopId?: boolean
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["closedDay"]>

  export type ClosedDaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    reason?: boolean
    barbershopId?: boolean
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["closedDay"]>

  export type ClosedDaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    reason?: boolean
    barbershopId?: boolean
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["closedDay"]>

  export type ClosedDaySelectScalar = {
    id?: boolean
    date?: boolean
    reason?: boolean
    barbershopId?: boolean
  }

  export type ClosedDayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "reason" | "barbershopId", ExtArgs["result"]["closedDay"]>
  export type ClosedDayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }
  export type ClosedDayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }
  export type ClosedDayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }

  export type $ClosedDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClosedDay"
    objects: {
      barbershop: Prisma.$BarbershopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      reason: string | null
      barbershopId: number
    }, ExtArgs["result"]["closedDay"]>
    composites: {}
  }

  type ClosedDayGetPayload<S extends boolean | null | undefined | ClosedDayDefaultArgs> = $Result.GetResult<Prisma.$ClosedDayPayload, S>

  type ClosedDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClosedDayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClosedDayCountAggregateInputType | true
    }

  export interface ClosedDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClosedDay'], meta: { name: 'ClosedDay' } }
    /**
     * Find zero or one ClosedDay that matches the filter.
     * @param {ClosedDayFindUniqueArgs} args - Arguments to find a ClosedDay
     * @example
     * // Get one ClosedDay
     * const closedDay = await prisma.closedDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClosedDayFindUniqueArgs>(args: SelectSubset<T, ClosedDayFindUniqueArgs<ExtArgs>>): Prisma__ClosedDayClient<$Result.GetResult<Prisma.$ClosedDayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClosedDay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClosedDayFindUniqueOrThrowArgs} args - Arguments to find a ClosedDay
     * @example
     * // Get one ClosedDay
     * const closedDay = await prisma.closedDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClosedDayFindUniqueOrThrowArgs>(args: SelectSubset<T, ClosedDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClosedDayClient<$Result.GetResult<Prisma.$ClosedDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClosedDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedDayFindFirstArgs} args - Arguments to find a ClosedDay
     * @example
     * // Get one ClosedDay
     * const closedDay = await prisma.closedDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClosedDayFindFirstArgs>(args?: SelectSubset<T, ClosedDayFindFirstArgs<ExtArgs>>): Prisma__ClosedDayClient<$Result.GetResult<Prisma.$ClosedDayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClosedDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedDayFindFirstOrThrowArgs} args - Arguments to find a ClosedDay
     * @example
     * // Get one ClosedDay
     * const closedDay = await prisma.closedDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClosedDayFindFirstOrThrowArgs>(args?: SelectSubset<T, ClosedDayFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClosedDayClient<$Result.GetResult<Prisma.$ClosedDayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClosedDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedDayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClosedDays
     * const closedDays = await prisma.closedDay.findMany()
     * 
     * // Get first 10 ClosedDays
     * const closedDays = await prisma.closedDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const closedDayWithIdOnly = await prisma.closedDay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClosedDayFindManyArgs>(args?: SelectSubset<T, ClosedDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClosedDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClosedDay.
     * @param {ClosedDayCreateArgs} args - Arguments to create a ClosedDay.
     * @example
     * // Create one ClosedDay
     * const ClosedDay = await prisma.closedDay.create({
     *   data: {
     *     // ... data to create a ClosedDay
     *   }
     * })
     * 
     */
    create<T extends ClosedDayCreateArgs>(args: SelectSubset<T, ClosedDayCreateArgs<ExtArgs>>): Prisma__ClosedDayClient<$Result.GetResult<Prisma.$ClosedDayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClosedDays.
     * @param {ClosedDayCreateManyArgs} args - Arguments to create many ClosedDays.
     * @example
     * // Create many ClosedDays
     * const closedDay = await prisma.closedDay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClosedDayCreateManyArgs>(args?: SelectSubset<T, ClosedDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClosedDays and returns the data saved in the database.
     * @param {ClosedDayCreateManyAndReturnArgs} args - Arguments to create many ClosedDays.
     * @example
     * // Create many ClosedDays
     * const closedDay = await prisma.closedDay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClosedDays and only return the `id`
     * const closedDayWithIdOnly = await prisma.closedDay.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClosedDayCreateManyAndReturnArgs>(args?: SelectSubset<T, ClosedDayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClosedDayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClosedDay.
     * @param {ClosedDayDeleteArgs} args - Arguments to delete one ClosedDay.
     * @example
     * // Delete one ClosedDay
     * const ClosedDay = await prisma.closedDay.delete({
     *   where: {
     *     // ... filter to delete one ClosedDay
     *   }
     * })
     * 
     */
    delete<T extends ClosedDayDeleteArgs>(args: SelectSubset<T, ClosedDayDeleteArgs<ExtArgs>>): Prisma__ClosedDayClient<$Result.GetResult<Prisma.$ClosedDayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClosedDay.
     * @param {ClosedDayUpdateArgs} args - Arguments to update one ClosedDay.
     * @example
     * // Update one ClosedDay
     * const closedDay = await prisma.closedDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClosedDayUpdateArgs>(args: SelectSubset<T, ClosedDayUpdateArgs<ExtArgs>>): Prisma__ClosedDayClient<$Result.GetResult<Prisma.$ClosedDayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClosedDays.
     * @param {ClosedDayDeleteManyArgs} args - Arguments to filter ClosedDays to delete.
     * @example
     * // Delete a few ClosedDays
     * const { count } = await prisma.closedDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClosedDayDeleteManyArgs>(args?: SelectSubset<T, ClosedDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClosedDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClosedDays
     * const closedDay = await prisma.closedDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClosedDayUpdateManyArgs>(args: SelectSubset<T, ClosedDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClosedDays and returns the data updated in the database.
     * @param {ClosedDayUpdateManyAndReturnArgs} args - Arguments to update many ClosedDays.
     * @example
     * // Update many ClosedDays
     * const closedDay = await prisma.closedDay.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClosedDays and only return the `id`
     * const closedDayWithIdOnly = await prisma.closedDay.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClosedDayUpdateManyAndReturnArgs>(args: SelectSubset<T, ClosedDayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClosedDayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClosedDay.
     * @param {ClosedDayUpsertArgs} args - Arguments to update or create a ClosedDay.
     * @example
     * // Update or create a ClosedDay
     * const closedDay = await prisma.closedDay.upsert({
     *   create: {
     *     // ... data to create a ClosedDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClosedDay we want to update
     *   }
     * })
     */
    upsert<T extends ClosedDayUpsertArgs>(args: SelectSubset<T, ClosedDayUpsertArgs<ExtArgs>>): Prisma__ClosedDayClient<$Result.GetResult<Prisma.$ClosedDayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClosedDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedDayCountArgs} args - Arguments to filter ClosedDays to count.
     * @example
     * // Count the number of ClosedDays
     * const count = await prisma.closedDay.count({
     *   where: {
     *     // ... the filter for the ClosedDays we want to count
     *   }
     * })
    **/
    count<T extends ClosedDayCountArgs>(
      args?: Subset<T, ClosedDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClosedDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClosedDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClosedDayAggregateArgs>(args: Subset<T, ClosedDayAggregateArgs>): Prisma.PrismaPromise<GetClosedDayAggregateType<T>>

    /**
     * Group by ClosedDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedDayGroupByArgs} args - Group by arguments.
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
      T extends ClosedDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClosedDayGroupByArgs['orderBy'] }
        : { orderBy?: ClosedDayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClosedDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClosedDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClosedDay model
   */
  readonly fields: ClosedDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClosedDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClosedDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barbershop<T extends BarbershopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarbershopDefaultArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ClosedDay model
   */
  interface ClosedDayFieldRefs {
    readonly id: FieldRef<"ClosedDay", 'Int'>
    readonly date: FieldRef<"ClosedDay", 'DateTime'>
    readonly reason: FieldRef<"ClosedDay", 'String'>
    readonly barbershopId: FieldRef<"ClosedDay", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ClosedDay findUnique
   */
  export type ClosedDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedDay
     */
    select?: ClosedDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedDay
     */
    omit?: ClosedDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedDayInclude<ExtArgs> | null
    /**
     * Filter, which ClosedDay to fetch.
     */
    where: ClosedDayWhereUniqueInput
  }

  /**
   * ClosedDay findUniqueOrThrow
   */
  export type ClosedDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedDay
     */
    select?: ClosedDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedDay
     */
    omit?: ClosedDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedDayInclude<ExtArgs> | null
    /**
     * Filter, which ClosedDay to fetch.
     */
    where: ClosedDayWhereUniqueInput
  }

  /**
   * ClosedDay findFirst
   */
  export type ClosedDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedDay
     */
    select?: ClosedDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedDay
     */
    omit?: ClosedDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedDayInclude<ExtArgs> | null
    /**
     * Filter, which ClosedDay to fetch.
     */
    where?: ClosedDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClosedDays to fetch.
     */
    orderBy?: ClosedDayOrderByWithRelationInput | ClosedDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClosedDays.
     */
    cursor?: ClosedDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClosedDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClosedDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClosedDays.
     */
    distinct?: ClosedDayScalarFieldEnum | ClosedDayScalarFieldEnum[]
  }

  /**
   * ClosedDay findFirstOrThrow
   */
  export type ClosedDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedDay
     */
    select?: ClosedDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedDay
     */
    omit?: ClosedDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedDayInclude<ExtArgs> | null
    /**
     * Filter, which ClosedDay to fetch.
     */
    where?: ClosedDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClosedDays to fetch.
     */
    orderBy?: ClosedDayOrderByWithRelationInput | ClosedDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClosedDays.
     */
    cursor?: ClosedDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClosedDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClosedDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClosedDays.
     */
    distinct?: ClosedDayScalarFieldEnum | ClosedDayScalarFieldEnum[]
  }

  /**
   * ClosedDay findMany
   */
  export type ClosedDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedDay
     */
    select?: ClosedDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedDay
     */
    omit?: ClosedDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedDayInclude<ExtArgs> | null
    /**
     * Filter, which ClosedDays to fetch.
     */
    where?: ClosedDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClosedDays to fetch.
     */
    orderBy?: ClosedDayOrderByWithRelationInput | ClosedDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClosedDays.
     */
    cursor?: ClosedDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClosedDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClosedDays.
     */
    skip?: number
    distinct?: ClosedDayScalarFieldEnum | ClosedDayScalarFieldEnum[]
  }

  /**
   * ClosedDay create
   */
  export type ClosedDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedDay
     */
    select?: ClosedDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedDay
     */
    omit?: ClosedDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedDayInclude<ExtArgs> | null
    /**
     * The data needed to create a ClosedDay.
     */
    data: XOR<ClosedDayCreateInput, ClosedDayUncheckedCreateInput>
  }

  /**
   * ClosedDay createMany
   */
  export type ClosedDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClosedDays.
     */
    data: ClosedDayCreateManyInput | ClosedDayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClosedDay createManyAndReturn
   */
  export type ClosedDayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedDay
     */
    select?: ClosedDaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedDay
     */
    omit?: ClosedDayOmit<ExtArgs> | null
    /**
     * The data used to create many ClosedDays.
     */
    data: ClosedDayCreateManyInput | ClosedDayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedDayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClosedDay update
   */
  export type ClosedDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedDay
     */
    select?: ClosedDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedDay
     */
    omit?: ClosedDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedDayInclude<ExtArgs> | null
    /**
     * The data needed to update a ClosedDay.
     */
    data: XOR<ClosedDayUpdateInput, ClosedDayUncheckedUpdateInput>
    /**
     * Choose, which ClosedDay to update.
     */
    where: ClosedDayWhereUniqueInput
  }

  /**
   * ClosedDay updateMany
   */
  export type ClosedDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClosedDays.
     */
    data: XOR<ClosedDayUpdateManyMutationInput, ClosedDayUncheckedUpdateManyInput>
    /**
     * Filter which ClosedDays to update
     */
    where?: ClosedDayWhereInput
    /**
     * Limit how many ClosedDays to update.
     */
    limit?: number
  }

  /**
   * ClosedDay updateManyAndReturn
   */
  export type ClosedDayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedDay
     */
    select?: ClosedDaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedDay
     */
    omit?: ClosedDayOmit<ExtArgs> | null
    /**
     * The data used to update ClosedDays.
     */
    data: XOR<ClosedDayUpdateManyMutationInput, ClosedDayUncheckedUpdateManyInput>
    /**
     * Filter which ClosedDays to update
     */
    where?: ClosedDayWhereInput
    /**
     * Limit how many ClosedDays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedDayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClosedDay upsert
   */
  export type ClosedDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedDay
     */
    select?: ClosedDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedDay
     */
    omit?: ClosedDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedDayInclude<ExtArgs> | null
    /**
     * The filter to search for the ClosedDay to update in case it exists.
     */
    where: ClosedDayWhereUniqueInput
    /**
     * In case the ClosedDay found by the `where` argument doesn't exist, create a new ClosedDay with this data.
     */
    create: XOR<ClosedDayCreateInput, ClosedDayUncheckedCreateInput>
    /**
     * In case the ClosedDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClosedDayUpdateInput, ClosedDayUncheckedUpdateInput>
  }

  /**
   * ClosedDay delete
   */
  export type ClosedDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedDay
     */
    select?: ClosedDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedDay
     */
    omit?: ClosedDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedDayInclude<ExtArgs> | null
    /**
     * Filter which ClosedDay to delete.
     */
    where: ClosedDayWhereUniqueInput
  }

  /**
   * ClosedDay deleteMany
   */
  export type ClosedDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClosedDays to delete
     */
    where?: ClosedDayWhereInput
    /**
     * Limit how many ClosedDays to delete.
     */
    limit?: number
  }

  /**
   * ClosedDay without action
   */
  export type ClosedDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedDay
     */
    select?: ClosedDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedDay
     */
    omit?: ClosedDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedDayInclude<ExtArgs> | null
  }


  /**
   * Model PushToken
   */

  export type AggregatePushToken = {
    _count: PushTokenCountAggregateOutputType | null
    _avg: PushTokenAvgAggregateOutputType | null
    _sum: PushTokenSumAggregateOutputType | null
    _min: PushTokenMinAggregateOutputType | null
    _max: PushTokenMaxAggregateOutputType | null
  }

  export type PushTokenAvgAggregateOutputType = {
    id: number | null
    barberId: number | null
    clientId: number | null
    barbershopId: number | null
  }

  export type PushTokenSumAggregateOutputType = {
    id: number | null
    barberId: number | null
    clientId: number | null
    barbershopId: number | null
  }

  export type PushTokenMinAggregateOutputType = {
    id: number | null
    userType: string | null
    barberId: number | null
    clientId: number | null
    barbershopId: number | null
    token: string | null
  }

  export type PushTokenMaxAggregateOutputType = {
    id: number | null
    userType: string | null
    barberId: number | null
    clientId: number | null
    barbershopId: number | null
    token: string | null
  }

  export type PushTokenCountAggregateOutputType = {
    id: number
    userType: number
    barberId: number
    clientId: number
    barbershopId: number
    token: number
    _all: number
  }


  export type PushTokenAvgAggregateInputType = {
    id?: true
    barberId?: true
    clientId?: true
    barbershopId?: true
  }

  export type PushTokenSumAggregateInputType = {
    id?: true
    barberId?: true
    clientId?: true
    barbershopId?: true
  }

  export type PushTokenMinAggregateInputType = {
    id?: true
    userType?: true
    barberId?: true
    clientId?: true
    barbershopId?: true
    token?: true
  }

  export type PushTokenMaxAggregateInputType = {
    id?: true
    userType?: true
    barberId?: true
    clientId?: true
    barbershopId?: true
    token?: true
  }

  export type PushTokenCountAggregateInputType = {
    id?: true
    userType?: true
    barberId?: true
    clientId?: true
    barbershopId?: true
    token?: true
    _all?: true
  }

  export type PushTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushToken to aggregate.
     */
    where?: PushTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushTokens to fetch.
     */
    orderBy?: PushTokenOrderByWithRelationInput | PushTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PushTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PushTokens
    **/
    _count?: true | PushTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PushTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PushTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PushTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PushTokenMaxAggregateInputType
  }

  export type GetPushTokenAggregateType<T extends PushTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePushToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePushToken[P]>
      : GetScalarType<T[P], AggregatePushToken[P]>
  }




  export type PushTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushTokenWhereInput
    orderBy?: PushTokenOrderByWithAggregationInput | PushTokenOrderByWithAggregationInput[]
    by: PushTokenScalarFieldEnum[] | PushTokenScalarFieldEnum
    having?: PushTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PushTokenCountAggregateInputType | true
    _avg?: PushTokenAvgAggregateInputType
    _sum?: PushTokenSumAggregateInputType
    _min?: PushTokenMinAggregateInputType
    _max?: PushTokenMaxAggregateInputType
  }

  export type PushTokenGroupByOutputType = {
    id: number
    userType: string
    barberId: number
    clientId: number
    barbershopId: number
    token: string
    _count: PushTokenCountAggregateOutputType | null
    _avg: PushTokenAvgAggregateOutputType | null
    _sum: PushTokenSumAggregateOutputType | null
    _min: PushTokenMinAggregateOutputType | null
    _max: PushTokenMaxAggregateOutputType | null
  }

  type GetPushTokenGroupByPayload<T extends PushTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PushTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PushTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PushTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PushTokenGroupByOutputType[P]>
        }
      >
    >


  export type PushTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userType?: boolean
    barberId?: boolean
    clientId?: boolean
    barbershopId?: boolean
    token?: boolean
    barber?: boolean | PushToken$barberArgs<ExtArgs>
    client?: boolean | PushToken$clientArgs<ExtArgs>
    barbershop?: boolean | PushToken$barbershopArgs<ExtArgs>
  }, ExtArgs["result"]["pushToken"]>

  export type PushTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userType?: boolean
    barberId?: boolean
    clientId?: boolean
    barbershopId?: boolean
    token?: boolean
    barber?: boolean | PushToken$barberArgs<ExtArgs>
    client?: boolean | PushToken$clientArgs<ExtArgs>
    barbershop?: boolean | PushToken$barbershopArgs<ExtArgs>
  }, ExtArgs["result"]["pushToken"]>

  export type PushTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userType?: boolean
    barberId?: boolean
    clientId?: boolean
    barbershopId?: boolean
    token?: boolean
    barber?: boolean | PushToken$barberArgs<ExtArgs>
    client?: boolean | PushToken$clientArgs<ExtArgs>
    barbershop?: boolean | PushToken$barbershopArgs<ExtArgs>
  }, ExtArgs["result"]["pushToken"]>

  export type PushTokenSelectScalar = {
    id?: boolean
    userType?: boolean
    barberId?: boolean
    clientId?: boolean
    barbershopId?: boolean
    token?: boolean
  }

  export type PushTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userType" | "barberId" | "clientId" | "barbershopId" | "token", ExtArgs["result"]["pushToken"]>
  export type PushTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barber?: boolean | PushToken$barberArgs<ExtArgs>
    client?: boolean | PushToken$clientArgs<ExtArgs>
    barbershop?: boolean | PushToken$barbershopArgs<ExtArgs>
  }
  export type PushTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barber?: boolean | PushToken$barberArgs<ExtArgs>
    client?: boolean | PushToken$clientArgs<ExtArgs>
    barbershop?: boolean | PushToken$barbershopArgs<ExtArgs>
  }
  export type PushTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barber?: boolean | PushToken$barberArgs<ExtArgs>
    client?: boolean | PushToken$clientArgs<ExtArgs>
    barbershop?: boolean | PushToken$barbershopArgs<ExtArgs>
  }

  export type $PushTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PushToken"
    objects: {
      barber: Prisma.$BarberPayload<ExtArgs> | null
      client: Prisma.$ClientPayload<ExtArgs> | null
      barbershop: Prisma.$BarbershopPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userType: string
      barberId: number
      clientId: number
      barbershopId: number
      token: string
    }, ExtArgs["result"]["pushToken"]>
    composites: {}
  }

  type PushTokenGetPayload<S extends boolean | null | undefined | PushTokenDefaultArgs> = $Result.GetResult<Prisma.$PushTokenPayload, S>

  type PushTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PushTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PushTokenCountAggregateInputType | true
    }

  export interface PushTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PushToken'], meta: { name: 'PushToken' } }
    /**
     * Find zero or one PushToken that matches the filter.
     * @param {PushTokenFindUniqueArgs} args - Arguments to find a PushToken
     * @example
     * // Get one PushToken
     * const pushToken = await prisma.pushToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PushTokenFindUniqueArgs>(args: SelectSubset<T, PushTokenFindUniqueArgs<ExtArgs>>): Prisma__PushTokenClient<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PushToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PushTokenFindUniqueOrThrowArgs} args - Arguments to find a PushToken
     * @example
     * // Get one PushToken
     * const pushToken = await prisma.pushToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PushTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PushTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PushTokenClient<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PushToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushTokenFindFirstArgs} args - Arguments to find a PushToken
     * @example
     * // Get one PushToken
     * const pushToken = await prisma.pushToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PushTokenFindFirstArgs>(args?: SelectSubset<T, PushTokenFindFirstArgs<ExtArgs>>): Prisma__PushTokenClient<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PushToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushTokenFindFirstOrThrowArgs} args - Arguments to find a PushToken
     * @example
     * // Get one PushToken
     * const pushToken = await prisma.pushToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PushTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PushTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PushTokenClient<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PushTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PushTokens
     * const pushTokens = await prisma.pushToken.findMany()
     * 
     * // Get first 10 PushTokens
     * const pushTokens = await prisma.pushToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pushTokenWithIdOnly = await prisma.pushToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PushTokenFindManyArgs>(args?: SelectSubset<T, PushTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PushToken.
     * @param {PushTokenCreateArgs} args - Arguments to create a PushToken.
     * @example
     * // Create one PushToken
     * const PushToken = await prisma.pushToken.create({
     *   data: {
     *     // ... data to create a PushToken
     *   }
     * })
     * 
     */
    create<T extends PushTokenCreateArgs>(args: SelectSubset<T, PushTokenCreateArgs<ExtArgs>>): Prisma__PushTokenClient<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PushTokens.
     * @param {PushTokenCreateManyArgs} args - Arguments to create many PushTokens.
     * @example
     * // Create many PushTokens
     * const pushToken = await prisma.pushToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PushTokenCreateManyArgs>(args?: SelectSubset<T, PushTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PushTokens and returns the data saved in the database.
     * @param {PushTokenCreateManyAndReturnArgs} args - Arguments to create many PushTokens.
     * @example
     * // Create many PushTokens
     * const pushToken = await prisma.pushToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PushTokens and only return the `id`
     * const pushTokenWithIdOnly = await prisma.pushToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PushTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PushTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PushToken.
     * @param {PushTokenDeleteArgs} args - Arguments to delete one PushToken.
     * @example
     * // Delete one PushToken
     * const PushToken = await prisma.pushToken.delete({
     *   where: {
     *     // ... filter to delete one PushToken
     *   }
     * })
     * 
     */
    delete<T extends PushTokenDeleteArgs>(args: SelectSubset<T, PushTokenDeleteArgs<ExtArgs>>): Prisma__PushTokenClient<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PushToken.
     * @param {PushTokenUpdateArgs} args - Arguments to update one PushToken.
     * @example
     * // Update one PushToken
     * const pushToken = await prisma.pushToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PushTokenUpdateArgs>(args: SelectSubset<T, PushTokenUpdateArgs<ExtArgs>>): Prisma__PushTokenClient<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PushTokens.
     * @param {PushTokenDeleteManyArgs} args - Arguments to filter PushTokens to delete.
     * @example
     * // Delete a few PushTokens
     * const { count } = await prisma.pushToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PushTokenDeleteManyArgs>(args?: SelectSubset<T, PushTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PushTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PushTokens
     * const pushToken = await prisma.pushToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PushTokenUpdateManyArgs>(args: SelectSubset<T, PushTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PushTokens and returns the data updated in the database.
     * @param {PushTokenUpdateManyAndReturnArgs} args - Arguments to update many PushTokens.
     * @example
     * // Update many PushTokens
     * const pushToken = await prisma.pushToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PushTokens and only return the `id`
     * const pushTokenWithIdOnly = await prisma.pushToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends PushTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PushTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PushToken.
     * @param {PushTokenUpsertArgs} args - Arguments to update or create a PushToken.
     * @example
     * // Update or create a PushToken
     * const pushToken = await prisma.pushToken.upsert({
     *   create: {
     *     // ... data to create a PushToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PushToken we want to update
     *   }
     * })
     */
    upsert<T extends PushTokenUpsertArgs>(args: SelectSubset<T, PushTokenUpsertArgs<ExtArgs>>): Prisma__PushTokenClient<$Result.GetResult<Prisma.$PushTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PushTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushTokenCountArgs} args - Arguments to filter PushTokens to count.
     * @example
     * // Count the number of PushTokens
     * const count = await prisma.pushToken.count({
     *   where: {
     *     // ... the filter for the PushTokens we want to count
     *   }
     * })
    **/
    count<T extends PushTokenCountArgs>(
      args?: Subset<T, PushTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PushTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PushToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PushTokenAggregateArgs>(args: Subset<T, PushTokenAggregateArgs>): Prisma.PrismaPromise<GetPushTokenAggregateType<T>>

    /**
     * Group by PushToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushTokenGroupByArgs} args - Group by arguments.
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
      T extends PushTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PushTokenGroupByArgs['orderBy'] }
        : { orderBy?: PushTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PushTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPushTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PushToken model
   */
  readonly fields: PushTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PushToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PushTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barber<T extends PushToken$barberArgs<ExtArgs> = {}>(args?: Subset<T, PushToken$barberArgs<ExtArgs>>): Prisma__BarberClient<$Result.GetResult<Prisma.$BarberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    client<T extends PushToken$clientArgs<ExtArgs> = {}>(args?: Subset<T, PushToken$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    barbershop<T extends PushToken$barbershopArgs<ExtArgs> = {}>(args?: Subset<T, PushToken$barbershopArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PushToken model
   */
  interface PushTokenFieldRefs {
    readonly id: FieldRef<"PushToken", 'Int'>
    readonly userType: FieldRef<"PushToken", 'String'>
    readonly barberId: FieldRef<"PushToken", 'Int'>
    readonly clientId: FieldRef<"PushToken", 'Int'>
    readonly barbershopId: FieldRef<"PushToken", 'Int'>
    readonly token: FieldRef<"PushToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PushToken findUnique
   */
  export type PushTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    /**
     * Filter, which PushToken to fetch.
     */
    where: PushTokenWhereUniqueInput
  }

  /**
   * PushToken findUniqueOrThrow
   */
  export type PushTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    /**
     * Filter, which PushToken to fetch.
     */
    where: PushTokenWhereUniqueInput
  }

  /**
   * PushToken findFirst
   */
  export type PushTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    /**
     * Filter, which PushToken to fetch.
     */
    where?: PushTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushTokens to fetch.
     */
    orderBy?: PushTokenOrderByWithRelationInput | PushTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushTokens.
     */
    cursor?: PushTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushTokens.
     */
    distinct?: PushTokenScalarFieldEnum | PushTokenScalarFieldEnum[]
  }

  /**
   * PushToken findFirstOrThrow
   */
  export type PushTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    /**
     * Filter, which PushToken to fetch.
     */
    where?: PushTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushTokens to fetch.
     */
    orderBy?: PushTokenOrderByWithRelationInput | PushTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushTokens.
     */
    cursor?: PushTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushTokens.
     */
    distinct?: PushTokenScalarFieldEnum | PushTokenScalarFieldEnum[]
  }

  /**
   * PushToken findMany
   */
  export type PushTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    /**
     * Filter, which PushTokens to fetch.
     */
    where?: PushTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushTokens to fetch.
     */
    orderBy?: PushTokenOrderByWithRelationInput | PushTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PushTokens.
     */
    cursor?: PushTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushTokens.
     */
    skip?: number
    distinct?: PushTokenScalarFieldEnum | PushTokenScalarFieldEnum[]
  }

  /**
   * PushToken create
   */
  export type PushTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a PushToken.
     */
    data: XOR<PushTokenCreateInput, PushTokenUncheckedCreateInput>
  }

  /**
   * PushToken createMany
   */
  export type PushTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PushTokens.
     */
    data: PushTokenCreateManyInput | PushTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PushToken createManyAndReturn
   */
  export type PushTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PushTokens.
     */
    data: PushTokenCreateManyInput | PushTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PushToken update
   */
  export type PushTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a PushToken.
     */
    data: XOR<PushTokenUpdateInput, PushTokenUncheckedUpdateInput>
    /**
     * Choose, which PushToken to update.
     */
    where: PushTokenWhereUniqueInput
  }

  /**
   * PushToken updateMany
   */
  export type PushTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PushTokens.
     */
    data: XOR<PushTokenUpdateManyMutationInput, PushTokenUncheckedUpdateManyInput>
    /**
     * Filter which PushTokens to update
     */
    where?: PushTokenWhereInput
    /**
     * Limit how many PushTokens to update.
     */
    limit?: number
  }

  /**
   * PushToken updateManyAndReturn
   */
  export type PushTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * The data used to update PushTokens.
     */
    data: XOR<PushTokenUpdateManyMutationInput, PushTokenUncheckedUpdateManyInput>
    /**
     * Filter which PushTokens to update
     */
    where?: PushTokenWhereInput
    /**
     * Limit how many PushTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PushToken upsert
   */
  export type PushTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the PushToken to update in case it exists.
     */
    where: PushTokenWhereUniqueInput
    /**
     * In case the PushToken found by the `where` argument doesn't exist, create a new PushToken with this data.
     */
    create: XOR<PushTokenCreateInput, PushTokenUncheckedCreateInput>
    /**
     * In case the PushToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PushTokenUpdateInput, PushTokenUncheckedUpdateInput>
  }

  /**
   * PushToken delete
   */
  export type PushTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
    /**
     * Filter which PushToken to delete.
     */
    where: PushTokenWhereUniqueInput
  }

  /**
   * PushToken deleteMany
   */
  export type PushTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushTokens to delete
     */
    where?: PushTokenWhereInput
    /**
     * Limit how many PushTokens to delete.
     */
    limit?: number
  }

  /**
   * PushToken.barber
   */
  export type PushToken$barberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barber
     */
    select?: BarberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barber
     */
    omit?: BarberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarberInclude<ExtArgs> | null
    where?: BarberWhereInput
  }

  /**
   * PushToken.client
   */
  export type PushToken$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * PushToken.barbershop
   */
  export type PushToken$barbershopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    where?: BarbershopWhereInput
  }

  /**
   * PushToken without action
   */
  export type PushTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushToken
     */
    select?: PushTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushToken
     */
    omit?: PushTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushTokenInclude<ExtArgs> | null
  }


  /**
   * Model BarbershopSettings
   */

  export type AggregateBarbershopSettings = {
    _count: BarbershopSettingsCountAggregateOutputType | null
    _avg: BarbershopSettingsAvgAggregateOutputType | null
    _sum: BarbershopSettingsSumAggregateOutputType | null
    _min: BarbershopSettingsMinAggregateOutputType | null
    _max: BarbershopSettingsMaxAggregateOutputType | null
  }

  export type BarbershopSettingsAvgAggregateOutputType = {
    id: number | null
    reminderTime: number | null
    barbershopId: number | null
  }

  export type BarbershopSettingsSumAggregateOutputType = {
    id: number | null
    reminderTime: number | null
    barbershopId: number | null
  }

  export type BarbershopSettingsMinAggregateOutputType = {
    id: number | null
    autoConfirm: boolean | null
    reminderTime: number | null
    notifyClient: boolean | null
    notifyBarber: boolean | null
    barbershopId: number | null
  }

  export type BarbershopSettingsMaxAggregateOutputType = {
    id: number | null
    autoConfirm: boolean | null
    reminderTime: number | null
    notifyClient: boolean | null
    notifyBarber: boolean | null
    barbershopId: number | null
  }

  export type BarbershopSettingsCountAggregateOutputType = {
    id: number
    autoConfirm: number
    reminderTime: number
    notifyClient: number
    notifyBarber: number
    barbershopId: number
    _all: number
  }


  export type BarbershopSettingsAvgAggregateInputType = {
    id?: true
    reminderTime?: true
    barbershopId?: true
  }

  export type BarbershopSettingsSumAggregateInputType = {
    id?: true
    reminderTime?: true
    barbershopId?: true
  }

  export type BarbershopSettingsMinAggregateInputType = {
    id?: true
    autoConfirm?: true
    reminderTime?: true
    notifyClient?: true
    notifyBarber?: true
    barbershopId?: true
  }

  export type BarbershopSettingsMaxAggregateInputType = {
    id?: true
    autoConfirm?: true
    reminderTime?: true
    notifyClient?: true
    notifyBarber?: true
    barbershopId?: true
  }

  export type BarbershopSettingsCountAggregateInputType = {
    id?: true
    autoConfirm?: true
    reminderTime?: true
    notifyClient?: true
    notifyBarber?: true
    barbershopId?: true
    _all?: true
  }

  export type BarbershopSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarbershopSettings to aggregate.
     */
    where?: BarbershopSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarbershopSettings to fetch.
     */
    orderBy?: BarbershopSettingsOrderByWithRelationInput | BarbershopSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarbershopSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarbershopSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarbershopSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BarbershopSettings
    **/
    _count?: true | BarbershopSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarbershopSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarbershopSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarbershopSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarbershopSettingsMaxAggregateInputType
  }

  export type GetBarbershopSettingsAggregateType<T extends BarbershopSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBarbershopSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarbershopSettings[P]>
      : GetScalarType<T[P], AggregateBarbershopSettings[P]>
  }




  export type BarbershopSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarbershopSettingsWhereInput
    orderBy?: BarbershopSettingsOrderByWithAggregationInput | BarbershopSettingsOrderByWithAggregationInput[]
    by: BarbershopSettingsScalarFieldEnum[] | BarbershopSettingsScalarFieldEnum
    having?: BarbershopSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarbershopSettingsCountAggregateInputType | true
    _avg?: BarbershopSettingsAvgAggregateInputType
    _sum?: BarbershopSettingsSumAggregateInputType
    _min?: BarbershopSettingsMinAggregateInputType
    _max?: BarbershopSettingsMaxAggregateInputType
  }

  export type BarbershopSettingsGroupByOutputType = {
    id: number
    autoConfirm: boolean
    reminderTime: number
    notifyClient: boolean
    notifyBarber: boolean
    barbershopId: number
    _count: BarbershopSettingsCountAggregateOutputType | null
    _avg: BarbershopSettingsAvgAggregateOutputType | null
    _sum: BarbershopSettingsSumAggregateOutputType | null
    _min: BarbershopSettingsMinAggregateOutputType | null
    _max: BarbershopSettingsMaxAggregateOutputType | null
  }

  type GetBarbershopSettingsGroupByPayload<T extends BarbershopSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarbershopSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarbershopSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarbershopSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], BarbershopSettingsGroupByOutputType[P]>
        }
      >
    >


  export type BarbershopSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autoConfirm?: boolean
    reminderTime?: boolean
    notifyClient?: boolean
    notifyBarber?: boolean
    barbershopId?: boolean
    barbershop?: boolean | BarbershopSettings$barbershopArgs<ExtArgs>
  }, ExtArgs["result"]["barbershopSettings"]>

  export type BarbershopSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autoConfirm?: boolean
    reminderTime?: boolean
    notifyClient?: boolean
    notifyBarber?: boolean
    barbershopId?: boolean
    barbershop?: boolean | BarbershopSettings$barbershopArgs<ExtArgs>
  }, ExtArgs["result"]["barbershopSettings"]>

  export type BarbershopSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autoConfirm?: boolean
    reminderTime?: boolean
    notifyClient?: boolean
    notifyBarber?: boolean
    barbershopId?: boolean
    barbershop?: boolean | BarbershopSettings$barbershopArgs<ExtArgs>
  }, ExtArgs["result"]["barbershopSettings"]>

  export type BarbershopSettingsSelectScalar = {
    id?: boolean
    autoConfirm?: boolean
    reminderTime?: boolean
    notifyClient?: boolean
    notifyBarber?: boolean
    barbershopId?: boolean
  }

  export type BarbershopSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "autoConfirm" | "reminderTime" | "notifyClient" | "notifyBarber" | "barbershopId", ExtArgs["result"]["barbershopSettings"]>
  export type BarbershopSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopSettings$barbershopArgs<ExtArgs>
  }
  export type BarbershopSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopSettings$barbershopArgs<ExtArgs>
  }
  export type BarbershopSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopSettings$barbershopArgs<ExtArgs>
  }

  export type $BarbershopSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BarbershopSettings"
    objects: {
      barbershop: Prisma.$BarbershopPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      autoConfirm: boolean
      reminderTime: number
      notifyClient: boolean
      notifyBarber: boolean
      barbershopId: number
    }, ExtArgs["result"]["barbershopSettings"]>
    composites: {}
  }

  type BarbershopSettingsGetPayload<S extends boolean | null | undefined | BarbershopSettingsDefaultArgs> = $Result.GetResult<Prisma.$BarbershopSettingsPayload, S>

  type BarbershopSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BarbershopSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarbershopSettingsCountAggregateInputType | true
    }

  export interface BarbershopSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BarbershopSettings'], meta: { name: 'BarbershopSettings' } }
    /**
     * Find zero or one BarbershopSettings that matches the filter.
     * @param {BarbershopSettingsFindUniqueArgs} args - Arguments to find a BarbershopSettings
     * @example
     * // Get one BarbershopSettings
     * const barbershopSettings = await prisma.barbershopSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarbershopSettingsFindUniqueArgs>(args: SelectSubset<T, BarbershopSettingsFindUniqueArgs<ExtArgs>>): Prisma__BarbershopSettingsClient<$Result.GetResult<Prisma.$BarbershopSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BarbershopSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BarbershopSettingsFindUniqueOrThrowArgs} args - Arguments to find a BarbershopSettings
     * @example
     * // Get one BarbershopSettings
     * const barbershopSettings = await prisma.barbershopSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarbershopSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, BarbershopSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarbershopSettingsClient<$Result.GetResult<Prisma.$BarbershopSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarbershopSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopSettingsFindFirstArgs} args - Arguments to find a BarbershopSettings
     * @example
     * // Get one BarbershopSettings
     * const barbershopSettings = await prisma.barbershopSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarbershopSettingsFindFirstArgs>(args?: SelectSubset<T, BarbershopSettingsFindFirstArgs<ExtArgs>>): Prisma__BarbershopSettingsClient<$Result.GetResult<Prisma.$BarbershopSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarbershopSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopSettingsFindFirstOrThrowArgs} args - Arguments to find a BarbershopSettings
     * @example
     * // Get one BarbershopSettings
     * const barbershopSettings = await prisma.barbershopSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarbershopSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, BarbershopSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarbershopSettingsClient<$Result.GetResult<Prisma.$BarbershopSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BarbershopSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BarbershopSettings
     * const barbershopSettings = await prisma.barbershopSettings.findMany()
     * 
     * // Get first 10 BarbershopSettings
     * const barbershopSettings = await prisma.barbershopSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barbershopSettingsWithIdOnly = await prisma.barbershopSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarbershopSettingsFindManyArgs>(args?: SelectSubset<T, BarbershopSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BarbershopSettings.
     * @param {BarbershopSettingsCreateArgs} args - Arguments to create a BarbershopSettings.
     * @example
     * // Create one BarbershopSettings
     * const BarbershopSettings = await prisma.barbershopSettings.create({
     *   data: {
     *     // ... data to create a BarbershopSettings
     *   }
     * })
     * 
     */
    create<T extends BarbershopSettingsCreateArgs>(args: SelectSubset<T, BarbershopSettingsCreateArgs<ExtArgs>>): Prisma__BarbershopSettingsClient<$Result.GetResult<Prisma.$BarbershopSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BarbershopSettings.
     * @param {BarbershopSettingsCreateManyArgs} args - Arguments to create many BarbershopSettings.
     * @example
     * // Create many BarbershopSettings
     * const barbershopSettings = await prisma.barbershopSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarbershopSettingsCreateManyArgs>(args?: SelectSubset<T, BarbershopSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BarbershopSettings and returns the data saved in the database.
     * @param {BarbershopSettingsCreateManyAndReturnArgs} args - Arguments to create many BarbershopSettings.
     * @example
     * // Create many BarbershopSettings
     * const barbershopSettings = await prisma.barbershopSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BarbershopSettings and only return the `id`
     * const barbershopSettingsWithIdOnly = await prisma.barbershopSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarbershopSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, BarbershopSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BarbershopSettings.
     * @param {BarbershopSettingsDeleteArgs} args - Arguments to delete one BarbershopSettings.
     * @example
     * // Delete one BarbershopSettings
     * const BarbershopSettings = await prisma.barbershopSettings.delete({
     *   where: {
     *     // ... filter to delete one BarbershopSettings
     *   }
     * })
     * 
     */
    delete<T extends BarbershopSettingsDeleteArgs>(args: SelectSubset<T, BarbershopSettingsDeleteArgs<ExtArgs>>): Prisma__BarbershopSettingsClient<$Result.GetResult<Prisma.$BarbershopSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BarbershopSettings.
     * @param {BarbershopSettingsUpdateArgs} args - Arguments to update one BarbershopSettings.
     * @example
     * // Update one BarbershopSettings
     * const barbershopSettings = await prisma.barbershopSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarbershopSettingsUpdateArgs>(args: SelectSubset<T, BarbershopSettingsUpdateArgs<ExtArgs>>): Prisma__BarbershopSettingsClient<$Result.GetResult<Prisma.$BarbershopSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BarbershopSettings.
     * @param {BarbershopSettingsDeleteManyArgs} args - Arguments to filter BarbershopSettings to delete.
     * @example
     * // Delete a few BarbershopSettings
     * const { count } = await prisma.barbershopSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarbershopSettingsDeleteManyArgs>(args?: SelectSubset<T, BarbershopSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarbershopSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BarbershopSettings
     * const barbershopSettings = await prisma.barbershopSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarbershopSettingsUpdateManyArgs>(args: SelectSubset<T, BarbershopSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarbershopSettings and returns the data updated in the database.
     * @param {BarbershopSettingsUpdateManyAndReturnArgs} args - Arguments to update many BarbershopSettings.
     * @example
     * // Update many BarbershopSettings
     * const barbershopSettings = await prisma.barbershopSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BarbershopSettings and only return the `id`
     * const barbershopSettingsWithIdOnly = await prisma.barbershopSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends BarbershopSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, BarbershopSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BarbershopSettings.
     * @param {BarbershopSettingsUpsertArgs} args - Arguments to update or create a BarbershopSettings.
     * @example
     * // Update or create a BarbershopSettings
     * const barbershopSettings = await prisma.barbershopSettings.upsert({
     *   create: {
     *     // ... data to create a BarbershopSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BarbershopSettings we want to update
     *   }
     * })
     */
    upsert<T extends BarbershopSettingsUpsertArgs>(args: SelectSubset<T, BarbershopSettingsUpsertArgs<ExtArgs>>): Prisma__BarbershopSettingsClient<$Result.GetResult<Prisma.$BarbershopSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BarbershopSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopSettingsCountArgs} args - Arguments to filter BarbershopSettings to count.
     * @example
     * // Count the number of BarbershopSettings
     * const count = await prisma.barbershopSettings.count({
     *   where: {
     *     // ... the filter for the BarbershopSettings we want to count
     *   }
     * })
    **/
    count<T extends BarbershopSettingsCountArgs>(
      args?: Subset<T, BarbershopSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarbershopSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BarbershopSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BarbershopSettingsAggregateArgs>(args: Subset<T, BarbershopSettingsAggregateArgs>): Prisma.PrismaPromise<GetBarbershopSettingsAggregateType<T>>

    /**
     * Group by BarbershopSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopSettingsGroupByArgs} args - Group by arguments.
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
      T extends BarbershopSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarbershopSettingsGroupByArgs['orderBy'] }
        : { orderBy?: BarbershopSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BarbershopSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarbershopSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BarbershopSettings model
   */
  readonly fields: BarbershopSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BarbershopSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarbershopSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barbershop<T extends BarbershopSettings$barbershopArgs<ExtArgs> = {}>(args?: Subset<T, BarbershopSettings$barbershopArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BarbershopSettings model
   */
  interface BarbershopSettingsFieldRefs {
    readonly id: FieldRef<"BarbershopSettings", 'Int'>
    readonly autoConfirm: FieldRef<"BarbershopSettings", 'Boolean'>
    readonly reminderTime: FieldRef<"BarbershopSettings", 'Int'>
    readonly notifyClient: FieldRef<"BarbershopSettings", 'Boolean'>
    readonly notifyBarber: FieldRef<"BarbershopSettings", 'Boolean'>
    readonly barbershopId: FieldRef<"BarbershopSettings", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BarbershopSettings findUnique
   */
  export type BarbershopSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopSettings
     */
    select?: BarbershopSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopSettings
     */
    omit?: BarbershopSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopSettingsInclude<ExtArgs> | null
    /**
     * Filter, which BarbershopSettings to fetch.
     */
    where: BarbershopSettingsWhereUniqueInput
  }

  /**
   * BarbershopSettings findUniqueOrThrow
   */
  export type BarbershopSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopSettings
     */
    select?: BarbershopSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopSettings
     */
    omit?: BarbershopSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopSettingsInclude<ExtArgs> | null
    /**
     * Filter, which BarbershopSettings to fetch.
     */
    where: BarbershopSettingsWhereUniqueInput
  }

  /**
   * BarbershopSettings findFirst
   */
  export type BarbershopSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopSettings
     */
    select?: BarbershopSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopSettings
     */
    omit?: BarbershopSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopSettingsInclude<ExtArgs> | null
    /**
     * Filter, which BarbershopSettings to fetch.
     */
    where?: BarbershopSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarbershopSettings to fetch.
     */
    orderBy?: BarbershopSettingsOrderByWithRelationInput | BarbershopSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarbershopSettings.
     */
    cursor?: BarbershopSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarbershopSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarbershopSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarbershopSettings.
     */
    distinct?: BarbershopSettingsScalarFieldEnum | BarbershopSettingsScalarFieldEnum[]
  }

  /**
   * BarbershopSettings findFirstOrThrow
   */
  export type BarbershopSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopSettings
     */
    select?: BarbershopSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopSettings
     */
    omit?: BarbershopSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopSettingsInclude<ExtArgs> | null
    /**
     * Filter, which BarbershopSettings to fetch.
     */
    where?: BarbershopSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarbershopSettings to fetch.
     */
    orderBy?: BarbershopSettingsOrderByWithRelationInput | BarbershopSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarbershopSettings.
     */
    cursor?: BarbershopSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarbershopSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarbershopSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarbershopSettings.
     */
    distinct?: BarbershopSettingsScalarFieldEnum | BarbershopSettingsScalarFieldEnum[]
  }

  /**
   * BarbershopSettings findMany
   */
  export type BarbershopSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopSettings
     */
    select?: BarbershopSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopSettings
     */
    omit?: BarbershopSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopSettingsInclude<ExtArgs> | null
    /**
     * Filter, which BarbershopSettings to fetch.
     */
    where?: BarbershopSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarbershopSettings to fetch.
     */
    orderBy?: BarbershopSettingsOrderByWithRelationInput | BarbershopSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BarbershopSettings.
     */
    cursor?: BarbershopSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarbershopSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarbershopSettings.
     */
    skip?: number
    distinct?: BarbershopSettingsScalarFieldEnum | BarbershopSettingsScalarFieldEnum[]
  }

  /**
   * BarbershopSettings create
   */
  export type BarbershopSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopSettings
     */
    select?: BarbershopSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopSettings
     */
    omit?: BarbershopSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a BarbershopSettings.
     */
    data: XOR<BarbershopSettingsCreateInput, BarbershopSettingsUncheckedCreateInput>
  }

  /**
   * BarbershopSettings createMany
   */
  export type BarbershopSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BarbershopSettings.
     */
    data: BarbershopSettingsCreateManyInput | BarbershopSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BarbershopSettings createManyAndReturn
   */
  export type BarbershopSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopSettings
     */
    select?: BarbershopSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopSettings
     */
    omit?: BarbershopSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many BarbershopSettings.
     */
    data: BarbershopSettingsCreateManyInput | BarbershopSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BarbershopSettings update
   */
  export type BarbershopSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopSettings
     */
    select?: BarbershopSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopSettings
     */
    omit?: BarbershopSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a BarbershopSettings.
     */
    data: XOR<BarbershopSettingsUpdateInput, BarbershopSettingsUncheckedUpdateInput>
    /**
     * Choose, which BarbershopSettings to update.
     */
    where: BarbershopSettingsWhereUniqueInput
  }

  /**
   * BarbershopSettings updateMany
   */
  export type BarbershopSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BarbershopSettings.
     */
    data: XOR<BarbershopSettingsUpdateManyMutationInput, BarbershopSettingsUncheckedUpdateManyInput>
    /**
     * Filter which BarbershopSettings to update
     */
    where?: BarbershopSettingsWhereInput
    /**
     * Limit how many BarbershopSettings to update.
     */
    limit?: number
  }

  /**
   * BarbershopSettings updateManyAndReturn
   */
  export type BarbershopSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopSettings
     */
    select?: BarbershopSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopSettings
     */
    omit?: BarbershopSettingsOmit<ExtArgs> | null
    /**
     * The data used to update BarbershopSettings.
     */
    data: XOR<BarbershopSettingsUpdateManyMutationInput, BarbershopSettingsUncheckedUpdateManyInput>
    /**
     * Filter which BarbershopSettings to update
     */
    where?: BarbershopSettingsWhereInput
    /**
     * Limit how many BarbershopSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BarbershopSettings upsert
   */
  export type BarbershopSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopSettings
     */
    select?: BarbershopSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopSettings
     */
    omit?: BarbershopSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the BarbershopSettings to update in case it exists.
     */
    where: BarbershopSettingsWhereUniqueInput
    /**
     * In case the BarbershopSettings found by the `where` argument doesn't exist, create a new BarbershopSettings with this data.
     */
    create: XOR<BarbershopSettingsCreateInput, BarbershopSettingsUncheckedCreateInput>
    /**
     * In case the BarbershopSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarbershopSettingsUpdateInput, BarbershopSettingsUncheckedUpdateInput>
  }

  /**
   * BarbershopSettings delete
   */
  export type BarbershopSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopSettings
     */
    select?: BarbershopSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopSettings
     */
    omit?: BarbershopSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopSettingsInclude<ExtArgs> | null
    /**
     * Filter which BarbershopSettings to delete.
     */
    where: BarbershopSettingsWhereUniqueInput
  }

  /**
   * BarbershopSettings deleteMany
   */
  export type BarbershopSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarbershopSettings to delete
     */
    where?: BarbershopSettingsWhereInput
    /**
     * Limit how many BarbershopSettings to delete.
     */
    limit?: number
  }

  /**
   * BarbershopSettings.barbershop
   */
  export type BarbershopSettings$barbershopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    where?: BarbershopWhereInput
  }

  /**
   * BarbershopSettings without action
   */
  export type BarbershopSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopSettings
     */
    select?: BarbershopSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopSettings
     */
    omit?: BarbershopSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopSettingsInclude<ExtArgs> | null
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


  export const BarbershopScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    logo: 'logo',
    address: 'address',
    intagram: 'intagram',
    facebook: 'facebook',
    password: 'password'
  };

  export type BarbershopScalarFieldEnum = (typeof BarbershopScalarFieldEnum)[keyof typeof BarbershopScalarFieldEnum]


  export const BarberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    password: 'password',
    profile: 'profile',
    barbershopId: 'barbershopId'
  };

  export type BarberScalarFieldEnum = (typeof BarberScalarFieldEnum)[keyof typeof BarberScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    duration: 'duration',
    description: 'description',
    photo: 'photo',
    barbershopId: 'barbershopId'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const SchedulingScalarFieldEnum: {
    id: 'id',
    date: 'date',
    time: 'time',
    duaration: 'duaration',
    clientId: 'clientId',
    barberId: 'barberId',
    barbershopId: 'barbershopId',
    totalPrice: 'totalPrice',
    status: 'status'
  };

  export type SchedulingScalarFieldEnum = (typeof SchedulingScalarFieldEnum)[keyof typeof SchedulingScalarFieldEnum]


  export const SchedulingServiceScalarFieldEnum: {
    id: 'id',
    schedulingId: 'schedulingId',
    serviceId: 'serviceId'
  };

  export type SchedulingServiceScalarFieldEnum = (typeof SchedulingServiceScalarFieldEnum)[keyof typeof SchedulingServiceScalarFieldEnum]


  export const WorkingHoursScalarFieldEnum: {
    id: 'id',
    dayOfWeek: 'dayOfWeek',
    openTime: 'openTime',
    closeTime: 'closeTime',
    startLunch: 'startLunch',
    endLunch: 'endLunch',
    barbershopId: 'barbershopId',
    lunch: 'lunch'
  };

  export type WorkingHoursScalarFieldEnum = (typeof WorkingHoursScalarFieldEnum)[keyof typeof WorkingHoursScalarFieldEnum]


  export const ClosedDayScalarFieldEnum: {
    id: 'id',
    date: 'date',
    reason: 'reason',
    barbershopId: 'barbershopId'
  };

  export type ClosedDayScalarFieldEnum = (typeof ClosedDayScalarFieldEnum)[keyof typeof ClosedDayScalarFieldEnum]


  export const PushTokenScalarFieldEnum: {
    id: 'id',
    userType: 'userType',
    barberId: 'barberId',
    clientId: 'clientId',
    barbershopId: 'barbershopId',
    token: 'token'
  };

  export type PushTokenScalarFieldEnum = (typeof PushTokenScalarFieldEnum)[keyof typeof PushTokenScalarFieldEnum]


  export const BarbershopSettingsScalarFieldEnum: {
    id: 'id',
    autoConfirm: 'autoConfirm',
    reminderTime: 'reminderTime',
    notifyClient: 'notifyClient',
    notifyBarber: 'notifyBarber',
    barbershopId: 'barbershopId'
  };

  export type BarbershopSettingsScalarFieldEnum = (typeof BarbershopSettingsScalarFieldEnum)[keyof typeof BarbershopSettingsScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type BarbershopWhereInput = {
    AND?: BarbershopWhereInput | BarbershopWhereInput[]
    OR?: BarbershopWhereInput[]
    NOT?: BarbershopWhereInput | BarbershopWhereInput[]
    id?: IntFilter<"Barbershop"> | number
    name?: StringFilter<"Barbershop"> | string
    email?: StringFilter<"Barbershop"> | string
    phone?: StringFilter<"Barbershop"> | string
    logo?: StringNullableFilter<"Barbershop"> | string | null
    address?: StringFilter<"Barbershop"> | string
    intagram?: StringNullableFilter<"Barbershop"> | string | null
    facebook?: StringNullableFilter<"Barbershop"> | string | null
    password?: StringFilter<"Barbershop"> | string
    Barber?: BarberListRelationFilter
    Service?: ServiceListRelationFilter
    Scheduling?: SchedulingListRelationFilter
    WorkingHours?: WorkingHoursListRelationFilter
    ClosedDay?: ClosedDayListRelationFilter
    PushToken?: PushTokenListRelationFilter
    BarbershopSettings?: BarbershopSettingsListRelationFilter
  }

  export type BarbershopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    logo?: SortOrderInput | SortOrder
    address?: SortOrder
    intagram?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    password?: SortOrder
    Barber?: BarberOrderByRelationAggregateInput
    Service?: ServiceOrderByRelationAggregateInput
    Scheduling?: SchedulingOrderByRelationAggregateInput
    WorkingHours?: WorkingHoursOrderByRelationAggregateInput
    ClosedDay?: ClosedDayOrderByRelationAggregateInput
    PushToken?: PushTokenOrderByRelationAggregateInput
    BarbershopSettings?: BarbershopSettingsOrderByRelationAggregateInput
  }

  export type BarbershopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: BarbershopWhereInput | BarbershopWhereInput[]
    OR?: BarbershopWhereInput[]
    NOT?: BarbershopWhereInput | BarbershopWhereInput[]
    name?: StringFilter<"Barbershop"> | string
    phone?: StringFilter<"Barbershop"> | string
    logo?: StringNullableFilter<"Barbershop"> | string | null
    address?: StringFilter<"Barbershop"> | string
    intagram?: StringNullableFilter<"Barbershop"> | string | null
    facebook?: StringNullableFilter<"Barbershop"> | string | null
    password?: StringFilter<"Barbershop"> | string
    Barber?: BarberListRelationFilter
    Service?: ServiceListRelationFilter
    Scheduling?: SchedulingListRelationFilter
    WorkingHours?: WorkingHoursListRelationFilter
    ClosedDay?: ClosedDayListRelationFilter
    PushToken?: PushTokenListRelationFilter
    BarbershopSettings?: BarbershopSettingsListRelationFilter
  }, "id" | "email">

  export type BarbershopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    logo?: SortOrderInput | SortOrder
    address?: SortOrder
    intagram?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    password?: SortOrder
    _count?: BarbershopCountOrderByAggregateInput
    _avg?: BarbershopAvgOrderByAggregateInput
    _max?: BarbershopMaxOrderByAggregateInput
    _min?: BarbershopMinOrderByAggregateInput
    _sum?: BarbershopSumOrderByAggregateInput
  }

  export type BarbershopScalarWhereWithAggregatesInput = {
    AND?: BarbershopScalarWhereWithAggregatesInput | BarbershopScalarWhereWithAggregatesInput[]
    OR?: BarbershopScalarWhereWithAggregatesInput[]
    NOT?: BarbershopScalarWhereWithAggregatesInput | BarbershopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Barbershop"> | number
    name?: StringWithAggregatesFilter<"Barbershop"> | string
    email?: StringWithAggregatesFilter<"Barbershop"> | string
    phone?: StringWithAggregatesFilter<"Barbershop"> | string
    logo?: StringNullableWithAggregatesFilter<"Barbershop"> | string | null
    address?: StringWithAggregatesFilter<"Barbershop"> | string
    intagram?: StringNullableWithAggregatesFilter<"Barbershop"> | string | null
    facebook?: StringNullableWithAggregatesFilter<"Barbershop"> | string | null
    password?: StringWithAggregatesFilter<"Barbershop"> | string
  }

  export type BarberWhereInput = {
    AND?: BarberWhereInput | BarberWhereInput[]
    OR?: BarberWhereInput[]
    NOT?: BarberWhereInput | BarberWhereInput[]
    id?: IntFilter<"Barber"> | number
    name?: StringFilter<"Barber"> | string
    phone?: StringFilter<"Barber"> | string
    password?: StringFilter<"Barber"> | string
    profile?: StringNullableFilter<"Barber"> | string | null
    barbershopId?: IntFilter<"Barber"> | number
    barbershop?: XOR<BarbershopScalarRelationFilter, BarbershopWhereInput>
    Scheduling?: SchedulingListRelationFilter
    PushToken?: PushTokenListRelationFilter
  }

  export type BarberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    profile?: SortOrderInput | SortOrder
    barbershopId?: SortOrder
    barbershop?: BarbershopOrderByWithRelationInput
    Scheduling?: SchedulingOrderByRelationAggregateInput
    PushToken?: PushTokenOrderByRelationAggregateInput
  }

  export type BarberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    AND?: BarberWhereInput | BarberWhereInput[]
    OR?: BarberWhereInput[]
    NOT?: BarberWhereInput | BarberWhereInput[]
    name?: StringFilter<"Barber"> | string
    password?: StringFilter<"Barber"> | string
    profile?: StringNullableFilter<"Barber"> | string | null
    barbershopId?: IntFilter<"Barber"> | number
    barbershop?: XOR<BarbershopScalarRelationFilter, BarbershopWhereInput>
    Scheduling?: SchedulingListRelationFilter
    PushToken?: PushTokenListRelationFilter
  }, "id" | "phone">

  export type BarberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    profile?: SortOrderInput | SortOrder
    barbershopId?: SortOrder
    _count?: BarberCountOrderByAggregateInput
    _avg?: BarberAvgOrderByAggregateInput
    _max?: BarberMaxOrderByAggregateInput
    _min?: BarberMinOrderByAggregateInput
    _sum?: BarberSumOrderByAggregateInput
  }

  export type BarberScalarWhereWithAggregatesInput = {
    AND?: BarberScalarWhereWithAggregatesInput | BarberScalarWhereWithAggregatesInput[]
    OR?: BarberScalarWhereWithAggregatesInput[]
    NOT?: BarberScalarWhereWithAggregatesInput | BarberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Barber"> | number
    name?: StringWithAggregatesFilter<"Barber"> | string
    phone?: StringWithAggregatesFilter<"Barber"> | string
    password?: StringWithAggregatesFilter<"Barber"> | string
    profile?: StringNullableWithAggregatesFilter<"Barber"> | string | null
    barbershopId?: IntWithAggregatesFilter<"Barber"> | number
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    Scheduling?: SchedulingListRelationFilter
    PushToken?: PushTokenListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    Scheduling?: SchedulingOrderByRelationAggregateInput
    PushToken?: PushTokenOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    Scheduling?: SchedulingListRelationFilter
    PushToken?: PushTokenListRelationFilter
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    name?: StringWithAggregatesFilter<"Client"> | string
    phone?: StringWithAggregatesFilter<"Client"> | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    price?: FloatFilter<"Service"> | number
    duration?: IntFilter<"Service"> | number
    description?: StringNullableFilter<"Service"> | string | null
    photo?: StringNullableFilter<"Service"> | string | null
    barbershopId?: IntFilter<"Service"> | number
    barbershop?: XOR<BarbershopScalarRelationFilter, BarbershopWhereInput>
    SchedulingService?: SchedulingServiceListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    description?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    barbershopId?: SortOrder
    barbershop?: BarbershopOrderByWithRelationInput
    SchedulingService?: SchedulingServiceOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    price?: FloatFilter<"Service"> | number
    duration?: IntFilter<"Service"> | number
    description?: StringNullableFilter<"Service"> | string | null
    photo?: StringNullableFilter<"Service"> | string | null
    barbershopId?: IntFilter<"Service"> | number
    barbershop?: XOR<BarbershopScalarRelationFilter, BarbershopWhereInput>
    SchedulingService?: SchedulingServiceListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    description?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    barbershopId?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    name?: StringWithAggregatesFilter<"Service"> | string
    price?: FloatWithAggregatesFilter<"Service"> | number
    duration?: IntWithAggregatesFilter<"Service"> | number
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    photo?: StringNullableWithAggregatesFilter<"Service"> | string | null
    barbershopId?: IntWithAggregatesFilter<"Service"> | number
  }

  export type SchedulingWhereInput = {
    AND?: SchedulingWhereInput | SchedulingWhereInput[]
    OR?: SchedulingWhereInput[]
    NOT?: SchedulingWhereInput | SchedulingWhereInput[]
    id?: IntFilter<"Scheduling"> | number
    date?: DateTimeFilter<"Scheduling"> | Date | string
    time?: DateTimeFilter<"Scheduling"> | Date | string
    duaration?: IntFilter<"Scheduling"> | number
    clientId?: IntFilter<"Scheduling"> | number
    barberId?: IntFilter<"Scheduling"> | number
    barbershopId?: IntFilter<"Scheduling"> | number
    totalPrice?: FloatFilter<"Scheduling"> | number
    status?: StringFilter<"Scheduling"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    barber?: XOR<BarberScalarRelationFilter, BarberWhereInput>
    barbershop?: XOR<BarbershopScalarRelationFilter, BarbershopWhereInput>
    SchedulingService?: SchedulingServiceListRelationFilter
  }

  export type SchedulingOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    time?: SortOrder
    duaration?: SortOrder
    clientId?: SortOrder
    barberId?: SortOrder
    barbershopId?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    client?: ClientOrderByWithRelationInput
    barber?: BarberOrderByWithRelationInput
    barbershop?: BarbershopOrderByWithRelationInput
    SchedulingService?: SchedulingServiceOrderByRelationAggregateInput
  }

  export type SchedulingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SchedulingWhereInput | SchedulingWhereInput[]
    OR?: SchedulingWhereInput[]
    NOT?: SchedulingWhereInput | SchedulingWhereInput[]
    date?: DateTimeFilter<"Scheduling"> | Date | string
    time?: DateTimeFilter<"Scheduling"> | Date | string
    duaration?: IntFilter<"Scheduling"> | number
    clientId?: IntFilter<"Scheduling"> | number
    barberId?: IntFilter<"Scheduling"> | number
    barbershopId?: IntFilter<"Scheduling"> | number
    totalPrice?: FloatFilter<"Scheduling"> | number
    status?: StringFilter<"Scheduling"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    barber?: XOR<BarberScalarRelationFilter, BarberWhereInput>
    barbershop?: XOR<BarbershopScalarRelationFilter, BarbershopWhereInput>
    SchedulingService?: SchedulingServiceListRelationFilter
  }, "id">

  export type SchedulingOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    time?: SortOrder
    duaration?: SortOrder
    clientId?: SortOrder
    barberId?: SortOrder
    barbershopId?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    _count?: SchedulingCountOrderByAggregateInput
    _avg?: SchedulingAvgOrderByAggregateInput
    _max?: SchedulingMaxOrderByAggregateInput
    _min?: SchedulingMinOrderByAggregateInput
    _sum?: SchedulingSumOrderByAggregateInput
  }

  export type SchedulingScalarWhereWithAggregatesInput = {
    AND?: SchedulingScalarWhereWithAggregatesInput | SchedulingScalarWhereWithAggregatesInput[]
    OR?: SchedulingScalarWhereWithAggregatesInput[]
    NOT?: SchedulingScalarWhereWithAggregatesInput | SchedulingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Scheduling"> | number
    date?: DateTimeWithAggregatesFilter<"Scheduling"> | Date | string
    time?: DateTimeWithAggregatesFilter<"Scheduling"> | Date | string
    duaration?: IntWithAggregatesFilter<"Scheduling"> | number
    clientId?: IntWithAggregatesFilter<"Scheduling"> | number
    barberId?: IntWithAggregatesFilter<"Scheduling"> | number
    barbershopId?: IntWithAggregatesFilter<"Scheduling"> | number
    totalPrice?: FloatWithAggregatesFilter<"Scheduling"> | number
    status?: StringWithAggregatesFilter<"Scheduling"> | string
  }

  export type SchedulingServiceWhereInput = {
    AND?: SchedulingServiceWhereInput | SchedulingServiceWhereInput[]
    OR?: SchedulingServiceWhereInput[]
    NOT?: SchedulingServiceWhereInput | SchedulingServiceWhereInput[]
    id?: IntFilter<"SchedulingService"> | number
    schedulingId?: IntFilter<"SchedulingService"> | number
    serviceId?: IntFilter<"SchedulingService"> | number
    scheduling?: XOR<SchedulingScalarRelationFilter, SchedulingWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type SchedulingServiceOrderByWithRelationInput = {
    id?: SortOrder
    schedulingId?: SortOrder
    serviceId?: SortOrder
    scheduling?: SchedulingOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type SchedulingServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SchedulingServiceWhereInput | SchedulingServiceWhereInput[]
    OR?: SchedulingServiceWhereInput[]
    NOT?: SchedulingServiceWhereInput | SchedulingServiceWhereInput[]
    schedulingId?: IntFilter<"SchedulingService"> | number
    serviceId?: IntFilter<"SchedulingService"> | number
    scheduling?: XOR<SchedulingScalarRelationFilter, SchedulingWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id">

  export type SchedulingServiceOrderByWithAggregationInput = {
    id?: SortOrder
    schedulingId?: SortOrder
    serviceId?: SortOrder
    _count?: SchedulingServiceCountOrderByAggregateInput
    _avg?: SchedulingServiceAvgOrderByAggregateInput
    _max?: SchedulingServiceMaxOrderByAggregateInput
    _min?: SchedulingServiceMinOrderByAggregateInput
    _sum?: SchedulingServiceSumOrderByAggregateInput
  }

  export type SchedulingServiceScalarWhereWithAggregatesInput = {
    AND?: SchedulingServiceScalarWhereWithAggregatesInput | SchedulingServiceScalarWhereWithAggregatesInput[]
    OR?: SchedulingServiceScalarWhereWithAggregatesInput[]
    NOT?: SchedulingServiceScalarWhereWithAggregatesInput | SchedulingServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SchedulingService"> | number
    schedulingId?: IntWithAggregatesFilter<"SchedulingService"> | number
    serviceId?: IntWithAggregatesFilter<"SchedulingService"> | number
  }

  export type WorkingHoursWhereInput = {
    AND?: WorkingHoursWhereInput | WorkingHoursWhereInput[]
    OR?: WorkingHoursWhereInput[]
    NOT?: WorkingHoursWhereInput | WorkingHoursWhereInput[]
    id?: IntFilter<"WorkingHours"> | number
    dayOfWeek?: IntFilter<"WorkingHours"> | number
    openTime?: DateTimeFilter<"WorkingHours"> | Date | string
    closeTime?: DateTimeFilter<"WorkingHours"> | Date | string
    startLunch?: DateTimeNullableFilter<"WorkingHours"> | Date | string | null
    endLunch?: DateTimeNullableFilter<"WorkingHours"> | Date | string | null
    barbershopId?: IntFilter<"WorkingHours"> | number
    lunch?: BoolFilter<"WorkingHours"> | boolean
    barbershop?: XOR<BarbershopScalarRelationFilter, BarbershopWhereInput>
  }

  export type WorkingHoursOrderByWithRelationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    startLunch?: SortOrderInput | SortOrder
    endLunch?: SortOrderInput | SortOrder
    barbershopId?: SortOrder
    lunch?: SortOrder
    barbershop?: BarbershopOrderByWithRelationInput
  }

  export type WorkingHoursWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkingHoursWhereInput | WorkingHoursWhereInput[]
    OR?: WorkingHoursWhereInput[]
    NOT?: WorkingHoursWhereInput | WorkingHoursWhereInput[]
    dayOfWeek?: IntFilter<"WorkingHours"> | number
    openTime?: DateTimeFilter<"WorkingHours"> | Date | string
    closeTime?: DateTimeFilter<"WorkingHours"> | Date | string
    startLunch?: DateTimeNullableFilter<"WorkingHours"> | Date | string | null
    endLunch?: DateTimeNullableFilter<"WorkingHours"> | Date | string | null
    barbershopId?: IntFilter<"WorkingHours"> | number
    lunch?: BoolFilter<"WorkingHours"> | boolean
    barbershop?: XOR<BarbershopScalarRelationFilter, BarbershopWhereInput>
  }, "id">

  export type WorkingHoursOrderByWithAggregationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    startLunch?: SortOrderInput | SortOrder
    endLunch?: SortOrderInput | SortOrder
    barbershopId?: SortOrder
    lunch?: SortOrder
    _count?: WorkingHoursCountOrderByAggregateInput
    _avg?: WorkingHoursAvgOrderByAggregateInput
    _max?: WorkingHoursMaxOrderByAggregateInput
    _min?: WorkingHoursMinOrderByAggregateInput
    _sum?: WorkingHoursSumOrderByAggregateInput
  }

  export type WorkingHoursScalarWhereWithAggregatesInput = {
    AND?: WorkingHoursScalarWhereWithAggregatesInput | WorkingHoursScalarWhereWithAggregatesInput[]
    OR?: WorkingHoursScalarWhereWithAggregatesInput[]
    NOT?: WorkingHoursScalarWhereWithAggregatesInput | WorkingHoursScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkingHours"> | number
    dayOfWeek?: IntWithAggregatesFilter<"WorkingHours"> | number
    openTime?: DateTimeWithAggregatesFilter<"WorkingHours"> | Date | string
    closeTime?: DateTimeWithAggregatesFilter<"WorkingHours"> | Date | string
    startLunch?: DateTimeNullableWithAggregatesFilter<"WorkingHours"> | Date | string | null
    endLunch?: DateTimeNullableWithAggregatesFilter<"WorkingHours"> | Date | string | null
    barbershopId?: IntWithAggregatesFilter<"WorkingHours"> | number
    lunch?: BoolWithAggregatesFilter<"WorkingHours"> | boolean
  }

  export type ClosedDayWhereInput = {
    AND?: ClosedDayWhereInput | ClosedDayWhereInput[]
    OR?: ClosedDayWhereInput[]
    NOT?: ClosedDayWhereInput | ClosedDayWhereInput[]
    id?: IntFilter<"ClosedDay"> | number
    date?: DateTimeFilter<"ClosedDay"> | Date | string
    reason?: StringNullableFilter<"ClosedDay"> | string | null
    barbershopId?: IntFilter<"ClosedDay"> | number
    barbershop?: XOR<BarbershopScalarRelationFilter, BarbershopWhereInput>
  }

  export type ClosedDayOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    reason?: SortOrderInput | SortOrder
    barbershopId?: SortOrder
    barbershop?: BarbershopOrderByWithRelationInput
  }

  export type ClosedDayWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClosedDayWhereInput | ClosedDayWhereInput[]
    OR?: ClosedDayWhereInput[]
    NOT?: ClosedDayWhereInput | ClosedDayWhereInput[]
    date?: DateTimeFilter<"ClosedDay"> | Date | string
    reason?: StringNullableFilter<"ClosedDay"> | string | null
    barbershopId?: IntFilter<"ClosedDay"> | number
    barbershop?: XOR<BarbershopScalarRelationFilter, BarbershopWhereInput>
  }, "id">

  export type ClosedDayOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    reason?: SortOrderInput | SortOrder
    barbershopId?: SortOrder
    _count?: ClosedDayCountOrderByAggregateInput
    _avg?: ClosedDayAvgOrderByAggregateInput
    _max?: ClosedDayMaxOrderByAggregateInput
    _min?: ClosedDayMinOrderByAggregateInput
    _sum?: ClosedDaySumOrderByAggregateInput
  }

  export type ClosedDayScalarWhereWithAggregatesInput = {
    AND?: ClosedDayScalarWhereWithAggregatesInput | ClosedDayScalarWhereWithAggregatesInput[]
    OR?: ClosedDayScalarWhereWithAggregatesInput[]
    NOT?: ClosedDayScalarWhereWithAggregatesInput | ClosedDayScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClosedDay"> | number
    date?: DateTimeWithAggregatesFilter<"ClosedDay"> | Date | string
    reason?: StringNullableWithAggregatesFilter<"ClosedDay"> | string | null
    barbershopId?: IntWithAggregatesFilter<"ClosedDay"> | number
  }

  export type PushTokenWhereInput = {
    AND?: PushTokenWhereInput | PushTokenWhereInput[]
    OR?: PushTokenWhereInput[]
    NOT?: PushTokenWhereInput | PushTokenWhereInput[]
    id?: IntFilter<"PushToken"> | number
    userType?: StringFilter<"PushToken"> | string
    barberId?: IntFilter<"PushToken"> | number
    clientId?: IntFilter<"PushToken"> | number
    barbershopId?: IntFilter<"PushToken"> | number
    token?: StringFilter<"PushToken"> | string
    barber?: XOR<BarberNullableScalarRelationFilter, BarberWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    barbershop?: XOR<BarbershopNullableScalarRelationFilter, BarbershopWhereInput> | null
  }

  export type PushTokenOrderByWithRelationInput = {
    id?: SortOrder
    userType?: SortOrder
    barberId?: SortOrder
    clientId?: SortOrder
    barbershopId?: SortOrder
    token?: SortOrder
    barber?: BarberOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    barbershop?: BarbershopOrderByWithRelationInput
  }

  export type PushTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PushTokenWhereInput | PushTokenWhereInput[]
    OR?: PushTokenWhereInput[]
    NOT?: PushTokenWhereInput | PushTokenWhereInput[]
    userType?: StringFilter<"PushToken"> | string
    barberId?: IntFilter<"PushToken"> | number
    clientId?: IntFilter<"PushToken"> | number
    barbershopId?: IntFilter<"PushToken"> | number
    token?: StringFilter<"PushToken"> | string
    barber?: XOR<BarberNullableScalarRelationFilter, BarberWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    barbershop?: XOR<BarbershopNullableScalarRelationFilter, BarbershopWhereInput> | null
  }, "id">

  export type PushTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userType?: SortOrder
    barberId?: SortOrder
    clientId?: SortOrder
    barbershopId?: SortOrder
    token?: SortOrder
    _count?: PushTokenCountOrderByAggregateInput
    _avg?: PushTokenAvgOrderByAggregateInput
    _max?: PushTokenMaxOrderByAggregateInput
    _min?: PushTokenMinOrderByAggregateInput
    _sum?: PushTokenSumOrderByAggregateInput
  }

  export type PushTokenScalarWhereWithAggregatesInput = {
    AND?: PushTokenScalarWhereWithAggregatesInput | PushTokenScalarWhereWithAggregatesInput[]
    OR?: PushTokenScalarWhereWithAggregatesInput[]
    NOT?: PushTokenScalarWhereWithAggregatesInput | PushTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PushToken"> | number
    userType?: StringWithAggregatesFilter<"PushToken"> | string
    barberId?: IntWithAggregatesFilter<"PushToken"> | number
    clientId?: IntWithAggregatesFilter<"PushToken"> | number
    barbershopId?: IntWithAggregatesFilter<"PushToken"> | number
    token?: StringWithAggregatesFilter<"PushToken"> | string
  }

  export type BarbershopSettingsWhereInput = {
    AND?: BarbershopSettingsWhereInput | BarbershopSettingsWhereInput[]
    OR?: BarbershopSettingsWhereInput[]
    NOT?: BarbershopSettingsWhereInput | BarbershopSettingsWhereInput[]
    id?: IntFilter<"BarbershopSettings"> | number
    autoConfirm?: BoolFilter<"BarbershopSettings"> | boolean
    reminderTime?: IntFilter<"BarbershopSettings"> | number
    notifyClient?: BoolFilter<"BarbershopSettings"> | boolean
    notifyBarber?: BoolFilter<"BarbershopSettings"> | boolean
    barbershopId?: IntFilter<"BarbershopSettings"> | number
    barbershop?: XOR<BarbershopNullableScalarRelationFilter, BarbershopWhereInput> | null
  }

  export type BarbershopSettingsOrderByWithRelationInput = {
    id?: SortOrder
    autoConfirm?: SortOrder
    reminderTime?: SortOrder
    notifyClient?: SortOrder
    notifyBarber?: SortOrder
    barbershopId?: SortOrder
    barbershop?: BarbershopOrderByWithRelationInput
  }

  export type BarbershopSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BarbershopSettingsWhereInput | BarbershopSettingsWhereInput[]
    OR?: BarbershopSettingsWhereInput[]
    NOT?: BarbershopSettingsWhereInput | BarbershopSettingsWhereInput[]
    autoConfirm?: BoolFilter<"BarbershopSettings"> | boolean
    reminderTime?: IntFilter<"BarbershopSettings"> | number
    notifyClient?: BoolFilter<"BarbershopSettings"> | boolean
    notifyBarber?: BoolFilter<"BarbershopSettings"> | boolean
    barbershopId?: IntFilter<"BarbershopSettings"> | number
    barbershop?: XOR<BarbershopNullableScalarRelationFilter, BarbershopWhereInput> | null
  }, "id">

  export type BarbershopSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    autoConfirm?: SortOrder
    reminderTime?: SortOrder
    notifyClient?: SortOrder
    notifyBarber?: SortOrder
    barbershopId?: SortOrder
    _count?: BarbershopSettingsCountOrderByAggregateInput
    _avg?: BarbershopSettingsAvgOrderByAggregateInput
    _max?: BarbershopSettingsMaxOrderByAggregateInput
    _min?: BarbershopSettingsMinOrderByAggregateInput
    _sum?: BarbershopSettingsSumOrderByAggregateInput
  }

  export type BarbershopSettingsScalarWhereWithAggregatesInput = {
    AND?: BarbershopSettingsScalarWhereWithAggregatesInput | BarbershopSettingsScalarWhereWithAggregatesInput[]
    OR?: BarbershopSettingsScalarWhereWithAggregatesInput[]
    NOT?: BarbershopSettingsScalarWhereWithAggregatesInput | BarbershopSettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BarbershopSettings"> | number
    autoConfirm?: BoolWithAggregatesFilter<"BarbershopSettings"> | boolean
    reminderTime?: IntWithAggregatesFilter<"BarbershopSettings"> | number
    notifyClient?: BoolWithAggregatesFilter<"BarbershopSettings"> | boolean
    notifyBarber?: BoolWithAggregatesFilter<"BarbershopSettings"> | boolean
    barbershopId?: IntWithAggregatesFilter<"BarbershopSettings"> | number
  }

  export type BarbershopCreateInput = {
    name: string
    email: string
    phone: string
    logo?: string | null
    address: string
    intagram?: string | null
    facebook?: string | null
    password: string
    Barber?: BarberCreateNestedManyWithoutBarbershopInput
    Service?: ServiceCreateNestedManyWithoutBarbershopInput
    Scheduling?: SchedulingCreateNestedManyWithoutBarbershopInput
    WorkingHours?: WorkingHoursCreateNestedManyWithoutBarbershopInput
    ClosedDay?: ClosedDayCreateNestedManyWithoutBarbershopInput
    PushToken?: PushTokenCreateNestedManyWithoutBarbershopInput
    BarbershopSettings?: BarbershopSettingsCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    logo?: string | null
    address: string
    intagram?: string | null
    facebook?: string | null
    password: string
    Barber?: BarberUncheckedCreateNestedManyWithoutBarbershopInput
    Service?: ServiceUncheckedCreateNestedManyWithoutBarbershopInput
    Scheduling?: SchedulingUncheckedCreateNestedManyWithoutBarbershopInput
    WorkingHours?: WorkingHoursUncheckedCreateNestedManyWithoutBarbershopInput
    ClosedDay?: ClosedDayUncheckedCreateNestedManyWithoutBarbershopInput
    PushToken?: PushTokenUncheckedCreateNestedManyWithoutBarbershopInput
    BarbershopSettings?: BarbershopSettingsUncheckedCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    intagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Barber?: BarberUpdateManyWithoutBarbershopNestedInput
    Service?: ServiceUpdateManyWithoutBarbershopNestedInput
    Scheduling?: SchedulingUpdateManyWithoutBarbershopNestedInput
    WorkingHours?: WorkingHoursUpdateManyWithoutBarbershopNestedInput
    ClosedDay?: ClosedDayUpdateManyWithoutBarbershopNestedInput
    PushToken?: PushTokenUpdateManyWithoutBarbershopNestedInput
    BarbershopSettings?: BarbershopSettingsUpdateManyWithoutBarbershopNestedInput
  }

  export type BarbershopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    intagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Barber?: BarberUncheckedUpdateManyWithoutBarbershopNestedInput
    Service?: ServiceUncheckedUpdateManyWithoutBarbershopNestedInput
    Scheduling?: SchedulingUncheckedUpdateManyWithoutBarbershopNestedInput
    WorkingHours?: WorkingHoursUncheckedUpdateManyWithoutBarbershopNestedInput
    ClosedDay?: ClosedDayUncheckedUpdateManyWithoutBarbershopNestedInput
    PushToken?: PushTokenUncheckedUpdateManyWithoutBarbershopNestedInput
    BarbershopSettings?: BarbershopSettingsUncheckedUpdateManyWithoutBarbershopNestedInput
  }

  export type BarbershopCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    logo?: string | null
    address: string
    intagram?: string | null
    facebook?: string | null
    password: string
  }

  export type BarbershopUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    intagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type BarbershopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    intagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type BarberCreateInput = {
    name: string
    phone: string
    password: string
    profile?: string | null
    barbershop: BarbershopCreateNestedOneWithoutBarberInput
    Scheduling?: SchedulingCreateNestedManyWithoutBarberInput
    PushToken?: PushTokenCreateNestedManyWithoutBarberInput
  }

  export type BarberUncheckedCreateInput = {
    id?: number
    name: string
    phone: string
    password: string
    profile?: string | null
    barbershopId: number
    Scheduling?: SchedulingUncheckedCreateNestedManyWithoutBarberInput
    PushToken?: PushTokenUncheckedCreateNestedManyWithoutBarberInput
  }

  export type BarberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    barbershop?: BarbershopUpdateOneRequiredWithoutBarberNestedInput
    Scheduling?: SchedulingUpdateManyWithoutBarberNestedInput
    PushToken?: PushTokenUpdateManyWithoutBarberNestedInput
  }

  export type BarberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    barbershopId?: IntFieldUpdateOperationsInput | number
    Scheduling?: SchedulingUncheckedUpdateManyWithoutBarberNestedInput
    PushToken?: PushTokenUncheckedUpdateManyWithoutBarberNestedInput
  }

  export type BarberCreateManyInput = {
    id?: number
    name: string
    phone: string
    password: string
    profile?: string | null
    barbershopId: number
  }

  export type BarberUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BarberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    barbershopId?: IntFieldUpdateOperationsInput | number
  }

  export type ClientCreateInput = {
    name: string
    phone: string
    Scheduling?: SchedulingCreateNestedManyWithoutClientInput
    PushToken?: PushTokenCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    name: string
    phone: string
    Scheduling?: SchedulingUncheckedCreateNestedManyWithoutClientInput
    PushToken?: PushTokenUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    Scheduling?: SchedulingUpdateManyWithoutClientNestedInput
    PushToken?: PushTokenUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    Scheduling?: SchedulingUncheckedUpdateManyWithoutClientNestedInput
    PushToken?: PushTokenUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: number
    name: string
    phone: string
  }

  export type ClientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCreateInput = {
    name: string
    price: number
    duration: number
    description?: string | null
    photo?: string | null
    barbershop: BarbershopCreateNestedOneWithoutServiceInput
    SchedulingService?: SchedulingServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    duration: number
    description?: string | null
    photo?: string | null
    barbershopId: number
    SchedulingService?: SchedulingServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    barbershop?: BarbershopUpdateOneRequiredWithoutServiceNestedInput
    SchedulingService?: SchedulingServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    barbershopId?: IntFieldUpdateOperationsInput | number
    SchedulingService?: SchedulingServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: number
    name: string
    price: number
    duration: number
    description?: string | null
    photo?: string | null
    barbershopId: number
  }

  export type ServiceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    barbershopId?: IntFieldUpdateOperationsInput | number
  }

  export type SchedulingCreateInput = {
    date: Date | string
    time: Date | string
    duaration: number
    totalPrice: number
    status: string
    client: ClientCreateNestedOneWithoutSchedulingInput
    barber: BarberCreateNestedOneWithoutSchedulingInput
    barbershop: BarbershopCreateNestedOneWithoutSchedulingInput
    SchedulingService?: SchedulingServiceCreateNestedManyWithoutSchedulingInput
  }

  export type SchedulingUncheckedCreateInput = {
    id?: number
    date: Date | string
    time: Date | string
    duaration: number
    clientId: number
    barberId: number
    barbershopId: number
    totalPrice: number
    status: string
    SchedulingService?: SchedulingServiceUncheckedCreateNestedManyWithoutSchedulingInput
  }

  export type SchedulingUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    duaration?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutSchedulingNestedInput
    barber?: BarberUpdateOneRequiredWithoutSchedulingNestedInput
    barbershop?: BarbershopUpdateOneRequiredWithoutSchedulingNestedInput
    SchedulingService?: SchedulingServiceUpdateManyWithoutSchedulingNestedInput
  }

  export type SchedulingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    duaration?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    barberId?: IntFieldUpdateOperationsInput | number
    barbershopId?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    SchedulingService?: SchedulingServiceUncheckedUpdateManyWithoutSchedulingNestedInput
  }

  export type SchedulingCreateManyInput = {
    id?: number
    date: Date | string
    time: Date | string
    duaration: number
    clientId: number
    barberId: number
    barbershopId: number
    totalPrice: number
    status: string
  }

  export type SchedulingUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    duaration?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SchedulingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    duaration?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    barberId?: IntFieldUpdateOperationsInput | number
    barbershopId?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SchedulingServiceCreateInput = {
    scheduling: SchedulingCreateNestedOneWithoutSchedulingServiceInput
    service: ServiceCreateNestedOneWithoutSchedulingServiceInput
  }

  export type SchedulingServiceUncheckedCreateInput = {
    id?: number
    schedulingId: number
    serviceId: number
  }

  export type SchedulingServiceUpdateInput = {
    scheduling?: SchedulingUpdateOneRequiredWithoutSchedulingServiceNestedInput
    service?: ServiceUpdateOneRequiredWithoutSchedulingServiceNestedInput
  }

  export type SchedulingServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schedulingId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
  }

  export type SchedulingServiceCreateManyInput = {
    id?: number
    schedulingId: number
    serviceId: number
  }

  export type SchedulingServiceUpdateManyMutationInput = {

  }

  export type SchedulingServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schedulingId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkingHoursCreateInput = {
    dayOfWeek: number
    openTime: Date | string
    closeTime: Date | string
    startLunch?: Date | string | null
    endLunch?: Date | string | null
    lunch?: boolean
    barbershop: BarbershopCreateNestedOneWithoutWorkingHoursInput
  }

  export type WorkingHoursUncheckedCreateInput = {
    id?: number
    dayOfWeek: number
    openTime: Date | string
    closeTime: Date | string
    startLunch?: Date | string | null
    endLunch?: Date | string | null
    barbershopId: number
    lunch?: boolean
  }

  export type WorkingHoursUpdateInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    openTime?: DateTimeFieldUpdateOperationsInput | Date | string
    closeTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startLunch?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endLunch?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lunch?: BoolFieldUpdateOperationsInput | boolean
    barbershop?: BarbershopUpdateOneRequiredWithoutWorkingHoursNestedInput
  }

  export type WorkingHoursUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    openTime?: DateTimeFieldUpdateOperationsInput | Date | string
    closeTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startLunch?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endLunch?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    barbershopId?: IntFieldUpdateOperationsInput | number
    lunch?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkingHoursCreateManyInput = {
    id?: number
    dayOfWeek: number
    openTime: Date | string
    closeTime: Date | string
    startLunch?: Date | string | null
    endLunch?: Date | string | null
    barbershopId: number
    lunch?: boolean
  }

  export type WorkingHoursUpdateManyMutationInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    openTime?: DateTimeFieldUpdateOperationsInput | Date | string
    closeTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startLunch?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endLunch?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lunch?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkingHoursUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    openTime?: DateTimeFieldUpdateOperationsInput | Date | string
    closeTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startLunch?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endLunch?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    barbershopId?: IntFieldUpdateOperationsInput | number
    lunch?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClosedDayCreateInput = {
    date: Date | string
    reason?: string | null
    barbershop: BarbershopCreateNestedOneWithoutClosedDayInput
  }

  export type ClosedDayUncheckedCreateInput = {
    id?: number
    date: Date | string
    reason?: string | null
    barbershopId: number
  }

  export type ClosedDayUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    barbershop?: BarbershopUpdateOneRequiredWithoutClosedDayNestedInput
  }

  export type ClosedDayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    barbershopId?: IntFieldUpdateOperationsInput | number
  }

  export type ClosedDayCreateManyInput = {
    id?: number
    date: Date | string
    reason?: string | null
    barbershopId: number
  }

  export type ClosedDayUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClosedDayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    barbershopId?: IntFieldUpdateOperationsInput | number
  }

  export type PushTokenCreateInput = {
    userType: string
    token: string
    barber?: BarberCreateNestedOneWithoutPushTokenInput
    client?: ClientCreateNestedOneWithoutPushTokenInput
    barbershop?: BarbershopCreateNestedOneWithoutPushTokenInput
  }

  export type PushTokenUncheckedCreateInput = {
    id?: number
    userType: string
    barberId: number
    clientId: number
    barbershopId: number
    token: string
  }

  export type PushTokenUpdateInput = {
    userType?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    barber?: BarberUpdateOneWithoutPushTokenNestedInput
    client?: ClientUpdateOneWithoutPushTokenNestedInput
    barbershop?: BarbershopUpdateOneWithoutPushTokenNestedInput
  }

  export type PushTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userType?: StringFieldUpdateOperationsInput | string
    barberId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    barbershopId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type PushTokenCreateManyInput = {
    id?: number
    userType: string
    barberId: number
    clientId: number
    barbershopId: number
    token: string
  }

  export type PushTokenUpdateManyMutationInput = {
    userType?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type PushTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userType?: StringFieldUpdateOperationsInput | string
    barberId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    barbershopId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type BarbershopSettingsCreateInput = {
    autoConfirm?: boolean
    reminderTime?: number
    notifyClient?: boolean
    notifyBarber?: boolean
    barbershop?: BarbershopCreateNestedOneWithoutBarbershopSettingsInput
  }

  export type BarbershopSettingsUncheckedCreateInput = {
    id?: number
    autoConfirm?: boolean
    reminderTime?: number
    notifyClient?: boolean
    notifyBarber?: boolean
    barbershopId: number
  }

  export type BarbershopSettingsUpdateInput = {
    autoConfirm?: BoolFieldUpdateOperationsInput | boolean
    reminderTime?: IntFieldUpdateOperationsInput | number
    notifyClient?: BoolFieldUpdateOperationsInput | boolean
    notifyBarber?: BoolFieldUpdateOperationsInput | boolean
    barbershop?: BarbershopUpdateOneWithoutBarbershopSettingsNestedInput
  }

  export type BarbershopSettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    autoConfirm?: BoolFieldUpdateOperationsInput | boolean
    reminderTime?: IntFieldUpdateOperationsInput | number
    notifyClient?: BoolFieldUpdateOperationsInput | boolean
    notifyBarber?: BoolFieldUpdateOperationsInput | boolean
    barbershopId?: IntFieldUpdateOperationsInput | number
  }

  export type BarbershopSettingsCreateManyInput = {
    id?: number
    autoConfirm?: boolean
    reminderTime?: number
    notifyClient?: boolean
    notifyBarber?: boolean
    barbershopId: number
  }

  export type BarbershopSettingsUpdateManyMutationInput = {
    autoConfirm?: BoolFieldUpdateOperationsInput | boolean
    reminderTime?: IntFieldUpdateOperationsInput | number
    notifyClient?: BoolFieldUpdateOperationsInput | boolean
    notifyBarber?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BarbershopSettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    autoConfirm?: BoolFieldUpdateOperationsInput | boolean
    reminderTime?: IntFieldUpdateOperationsInput | number
    notifyClient?: BoolFieldUpdateOperationsInput | boolean
    notifyBarber?: BoolFieldUpdateOperationsInput | boolean
    barbershopId?: IntFieldUpdateOperationsInput | number
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

  export type BarberListRelationFilter = {
    every?: BarberWhereInput
    some?: BarberWhereInput
    none?: BarberWhereInput
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type SchedulingListRelationFilter = {
    every?: SchedulingWhereInput
    some?: SchedulingWhereInput
    none?: SchedulingWhereInput
  }

  export type WorkingHoursListRelationFilter = {
    every?: WorkingHoursWhereInput
    some?: WorkingHoursWhereInput
    none?: WorkingHoursWhereInput
  }

  export type ClosedDayListRelationFilter = {
    every?: ClosedDayWhereInput
    some?: ClosedDayWhereInput
    none?: ClosedDayWhereInput
  }

  export type PushTokenListRelationFilter = {
    every?: PushTokenWhereInput
    some?: PushTokenWhereInput
    none?: PushTokenWhereInput
  }

  export type BarbershopSettingsListRelationFilter = {
    every?: BarbershopSettingsWhereInput
    some?: BarbershopSettingsWhereInput
    none?: BarbershopSettingsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BarberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchedulingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkingHoursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClosedDayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PushTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BarbershopSettingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BarbershopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    logo?: SortOrder
    address?: SortOrder
    intagram?: SortOrder
    facebook?: SortOrder
    password?: SortOrder
  }

  export type BarbershopAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BarbershopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    logo?: SortOrder
    address?: SortOrder
    intagram?: SortOrder
    facebook?: SortOrder
    password?: SortOrder
  }

  export type BarbershopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    logo?: SortOrder
    address?: SortOrder
    intagram?: SortOrder
    facebook?: SortOrder
    password?: SortOrder
  }

  export type BarbershopSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BarbershopScalarRelationFilter = {
    is?: BarbershopWhereInput
    isNot?: BarbershopWhereInput
  }

  export type BarberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    profile?: SortOrder
    barbershopId?: SortOrder
  }

  export type BarberAvgOrderByAggregateInput = {
    id?: SortOrder
    barbershopId?: SortOrder
  }

  export type BarberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    profile?: SortOrder
    barbershopId?: SortOrder
  }

  export type BarberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    profile?: SortOrder
    barbershopId?: SortOrder
  }

  export type BarberSumOrderByAggregateInput = {
    id?: SortOrder
    barbershopId?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SchedulingServiceListRelationFilter = {
    every?: SchedulingServiceWhereInput
    some?: SchedulingServiceWhereInput
    none?: SchedulingServiceWhereInput
  }

  export type SchedulingServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    description?: SortOrder
    photo?: SortOrder
    barbershopId?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    barbershopId?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    description?: SortOrder
    photo?: SortOrder
    barbershopId?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    description?: SortOrder
    photo?: SortOrder
    barbershopId?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    barbershopId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type BarberScalarRelationFilter = {
    is?: BarberWhereInput
    isNot?: BarberWhereInput
  }

  export type SchedulingCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    time?: SortOrder
    duaration?: SortOrder
    clientId?: SortOrder
    barberId?: SortOrder
    barbershopId?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
  }

  export type SchedulingAvgOrderByAggregateInput = {
    id?: SortOrder
    duaration?: SortOrder
    clientId?: SortOrder
    barberId?: SortOrder
    barbershopId?: SortOrder
    totalPrice?: SortOrder
  }

  export type SchedulingMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    time?: SortOrder
    duaration?: SortOrder
    clientId?: SortOrder
    barberId?: SortOrder
    barbershopId?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
  }

  export type SchedulingMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    time?: SortOrder
    duaration?: SortOrder
    clientId?: SortOrder
    barberId?: SortOrder
    barbershopId?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
  }

  export type SchedulingSumOrderByAggregateInput = {
    id?: SortOrder
    duaration?: SortOrder
    clientId?: SortOrder
    barberId?: SortOrder
    barbershopId?: SortOrder
    totalPrice?: SortOrder
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

  export type SchedulingScalarRelationFilter = {
    is?: SchedulingWhereInput
    isNot?: SchedulingWhereInput
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type SchedulingServiceCountOrderByAggregateInput = {
    id?: SortOrder
    schedulingId?: SortOrder
    serviceId?: SortOrder
  }

  export type SchedulingServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    schedulingId?: SortOrder
    serviceId?: SortOrder
  }

  export type SchedulingServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    schedulingId?: SortOrder
    serviceId?: SortOrder
  }

  export type SchedulingServiceMinOrderByAggregateInput = {
    id?: SortOrder
    schedulingId?: SortOrder
    serviceId?: SortOrder
  }

  export type SchedulingServiceSumOrderByAggregateInput = {
    id?: SortOrder
    schedulingId?: SortOrder
    serviceId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WorkingHoursCountOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    startLunch?: SortOrder
    endLunch?: SortOrder
    barbershopId?: SortOrder
    lunch?: SortOrder
  }

  export type WorkingHoursAvgOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    barbershopId?: SortOrder
  }

  export type WorkingHoursMaxOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    startLunch?: SortOrder
    endLunch?: SortOrder
    barbershopId?: SortOrder
    lunch?: SortOrder
  }

  export type WorkingHoursMinOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    startLunch?: SortOrder
    endLunch?: SortOrder
    barbershopId?: SortOrder
    lunch?: SortOrder
  }

  export type WorkingHoursSumOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    barbershopId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ClosedDayCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    reason?: SortOrder
    barbershopId?: SortOrder
  }

  export type ClosedDayAvgOrderByAggregateInput = {
    id?: SortOrder
    barbershopId?: SortOrder
  }

  export type ClosedDayMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    reason?: SortOrder
    barbershopId?: SortOrder
  }

  export type ClosedDayMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    reason?: SortOrder
    barbershopId?: SortOrder
  }

  export type ClosedDaySumOrderByAggregateInput = {
    id?: SortOrder
    barbershopId?: SortOrder
  }

  export type BarberNullableScalarRelationFilter = {
    is?: BarberWhereInput | null
    isNot?: BarberWhereInput | null
  }

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type BarbershopNullableScalarRelationFilter = {
    is?: BarbershopWhereInput | null
    isNot?: BarbershopWhereInput | null
  }

  export type PushTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userType?: SortOrder
    barberId?: SortOrder
    clientId?: SortOrder
    barbershopId?: SortOrder
    token?: SortOrder
  }

  export type PushTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    barberId?: SortOrder
    clientId?: SortOrder
    barbershopId?: SortOrder
  }

  export type PushTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userType?: SortOrder
    barberId?: SortOrder
    clientId?: SortOrder
    barbershopId?: SortOrder
    token?: SortOrder
  }

  export type PushTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userType?: SortOrder
    barberId?: SortOrder
    clientId?: SortOrder
    barbershopId?: SortOrder
    token?: SortOrder
  }

  export type PushTokenSumOrderByAggregateInput = {
    id?: SortOrder
    barberId?: SortOrder
    clientId?: SortOrder
    barbershopId?: SortOrder
  }

  export type BarbershopSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    autoConfirm?: SortOrder
    reminderTime?: SortOrder
    notifyClient?: SortOrder
    notifyBarber?: SortOrder
    barbershopId?: SortOrder
  }

  export type BarbershopSettingsAvgOrderByAggregateInput = {
    id?: SortOrder
    reminderTime?: SortOrder
    barbershopId?: SortOrder
  }

  export type BarbershopSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    autoConfirm?: SortOrder
    reminderTime?: SortOrder
    notifyClient?: SortOrder
    notifyBarber?: SortOrder
    barbershopId?: SortOrder
  }

  export type BarbershopSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    autoConfirm?: SortOrder
    reminderTime?: SortOrder
    notifyClient?: SortOrder
    notifyBarber?: SortOrder
    barbershopId?: SortOrder
  }

  export type BarbershopSettingsSumOrderByAggregateInput = {
    id?: SortOrder
    reminderTime?: SortOrder
    barbershopId?: SortOrder
  }

  export type BarberCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<BarberCreateWithoutBarbershopInput, BarberUncheckedCreateWithoutBarbershopInput> | BarberCreateWithoutBarbershopInput[] | BarberUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: BarberCreateOrConnectWithoutBarbershopInput | BarberCreateOrConnectWithoutBarbershopInput[]
    createMany?: BarberCreateManyBarbershopInputEnvelope
    connect?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
  }

  export type ServiceCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<ServiceCreateWithoutBarbershopInput, ServiceUncheckedCreateWithoutBarbershopInput> | ServiceCreateWithoutBarbershopInput[] | ServiceUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutBarbershopInput | ServiceCreateOrConnectWithoutBarbershopInput[]
    createMany?: ServiceCreateManyBarbershopInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type SchedulingCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<SchedulingCreateWithoutBarbershopInput, SchedulingUncheckedCreateWithoutBarbershopInput> | SchedulingCreateWithoutBarbershopInput[] | SchedulingUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutBarbershopInput | SchedulingCreateOrConnectWithoutBarbershopInput[]
    createMany?: SchedulingCreateManyBarbershopInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type WorkingHoursCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<WorkingHoursCreateWithoutBarbershopInput, WorkingHoursUncheckedCreateWithoutBarbershopInput> | WorkingHoursCreateWithoutBarbershopInput[] | WorkingHoursUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: WorkingHoursCreateOrConnectWithoutBarbershopInput | WorkingHoursCreateOrConnectWithoutBarbershopInput[]
    createMany?: WorkingHoursCreateManyBarbershopInputEnvelope
    connect?: WorkingHoursWhereUniqueInput | WorkingHoursWhereUniqueInput[]
  }

  export type ClosedDayCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<ClosedDayCreateWithoutBarbershopInput, ClosedDayUncheckedCreateWithoutBarbershopInput> | ClosedDayCreateWithoutBarbershopInput[] | ClosedDayUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: ClosedDayCreateOrConnectWithoutBarbershopInput | ClosedDayCreateOrConnectWithoutBarbershopInput[]
    createMany?: ClosedDayCreateManyBarbershopInputEnvelope
    connect?: ClosedDayWhereUniqueInput | ClosedDayWhereUniqueInput[]
  }

  export type PushTokenCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<PushTokenCreateWithoutBarbershopInput, PushTokenUncheckedCreateWithoutBarbershopInput> | PushTokenCreateWithoutBarbershopInput[] | PushTokenUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: PushTokenCreateOrConnectWithoutBarbershopInput | PushTokenCreateOrConnectWithoutBarbershopInput[]
    createMany?: PushTokenCreateManyBarbershopInputEnvelope
    connect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
  }

  export type BarbershopSettingsCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<BarbershopSettingsCreateWithoutBarbershopInput, BarbershopSettingsUncheckedCreateWithoutBarbershopInput> | BarbershopSettingsCreateWithoutBarbershopInput[] | BarbershopSettingsUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: BarbershopSettingsCreateOrConnectWithoutBarbershopInput | BarbershopSettingsCreateOrConnectWithoutBarbershopInput[]
    createMany?: BarbershopSettingsCreateManyBarbershopInputEnvelope
    connect?: BarbershopSettingsWhereUniqueInput | BarbershopSettingsWhereUniqueInput[]
  }

  export type BarberUncheckedCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<BarberCreateWithoutBarbershopInput, BarberUncheckedCreateWithoutBarbershopInput> | BarberCreateWithoutBarbershopInput[] | BarberUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: BarberCreateOrConnectWithoutBarbershopInput | BarberCreateOrConnectWithoutBarbershopInput[]
    createMany?: BarberCreateManyBarbershopInputEnvelope
    connect?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<ServiceCreateWithoutBarbershopInput, ServiceUncheckedCreateWithoutBarbershopInput> | ServiceCreateWithoutBarbershopInput[] | ServiceUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutBarbershopInput | ServiceCreateOrConnectWithoutBarbershopInput[]
    createMany?: ServiceCreateManyBarbershopInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type SchedulingUncheckedCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<SchedulingCreateWithoutBarbershopInput, SchedulingUncheckedCreateWithoutBarbershopInput> | SchedulingCreateWithoutBarbershopInput[] | SchedulingUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutBarbershopInput | SchedulingCreateOrConnectWithoutBarbershopInput[]
    createMany?: SchedulingCreateManyBarbershopInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type WorkingHoursUncheckedCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<WorkingHoursCreateWithoutBarbershopInput, WorkingHoursUncheckedCreateWithoutBarbershopInput> | WorkingHoursCreateWithoutBarbershopInput[] | WorkingHoursUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: WorkingHoursCreateOrConnectWithoutBarbershopInput | WorkingHoursCreateOrConnectWithoutBarbershopInput[]
    createMany?: WorkingHoursCreateManyBarbershopInputEnvelope
    connect?: WorkingHoursWhereUniqueInput | WorkingHoursWhereUniqueInput[]
  }

  export type ClosedDayUncheckedCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<ClosedDayCreateWithoutBarbershopInput, ClosedDayUncheckedCreateWithoutBarbershopInput> | ClosedDayCreateWithoutBarbershopInput[] | ClosedDayUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: ClosedDayCreateOrConnectWithoutBarbershopInput | ClosedDayCreateOrConnectWithoutBarbershopInput[]
    createMany?: ClosedDayCreateManyBarbershopInputEnvelope
    connect?: ClosedDayWhereUniqueInput | ClosedDayWhereUniqueInput[]
  }

  export type PushTokenUncheckedCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<PushTokenCreateWithoutBarbershopInput, PushTokenUncheckedCreateWithoutBarbershopInput> | PushTokenCreateWithoutBarbershopInput[] | PushTokenUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: PushTokenCreateOrConnectWithoutBarbershopInput | PushTokenCreateOrConnectWithoutBarbershopInput[]
    createMany?: PushTokenCreateManyBarbershopInputEnvelope
    connect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
  }

  export type BarbershopSettingsUncheckedCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<BarbershopSettingsCreateWithoutBarbershopInput, BarbershopSettingsUncheckedCreateWithoutBarbershopInput> | BarbershopSettingsCreateWithoutBarbershopInput[] | BarbershopSettingsUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: BarbershopSettingsCreateOrConnectWithoutBarbershopInput | BarbershopSettingsCreateOrConnectWithoutBarbershopInput[]
    createMany?: BarbershopSettingsCreateManyBarbershopInputEnvelope
    connect?: BarbershopSettingsWhereUniqueInput | BarbershopSettingsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BarberUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<BarberCreateWithoutBarbershopInput, BarberUncheckedCreateWithoutBarbershopInput> | BarberCreateWithoutBarbershopInput[] | BarberUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: BarberCreateOrConnectWithoutBarbershopInput | BarberCreateOrConnectWithoutBarbershopInput[]
    upsert?: BarberUpsertWithWhereUniqueWithoutBarbershopInput | BarberUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: BarberCreateManyBarbershopInputEnvelope
    set?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    disconnect?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    delete?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    connect?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    update?: BarberUpdateWithWhereUniqueWithoutBarbershopInput | BarberUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: BarberUpdateManyWithWhereWithoutBarbershopInput | BarberUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: BarberScalarWhereInput | BarberScalarWhereInput[]
  }

  export type ServiceUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<ServiceCreateWithoutBarbershopInput, ServiceUncheckedCreateWithoutBarbershopInput> | ServiceCreateWithoutBarbershopInput[] | ServiceUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutBarbershopInput | ServiceCreateOrConnectWithoutBarbershopInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutBarbershopInput | ServiceUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: ServiceCreateManyBarbershopInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutBarbershopInput | ServiceUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutBarbershopInput | ServiceUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type SchedulingUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<SchedulingCreateWithoutBarbershopInput, SchedulingUncheckedCreateWithoutBarbershopInput> | SchedulingCreateWithoutBarbershopInput[] | SchedulingUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutBarbershopInput | SchedulingCreateOrConnectWithoutBarbershopInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutBarbershopInput | SchedulingUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: SchedulingCreateManyBarbershopInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutBarbershopInput | SchedulingUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutBarbershopInput | SchedulingUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type WorkingHoursUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<WorkingHoursCreateWithoutBarbershopInput, WorkingHoursUncheckedCreateWithoutBarbershopInput> | WorkingHoursCreateWithoutBarbershopInput[] | WorkingHoursUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: WorkingHoursCreateOrConnectWithoutBarbershopInput | WorkingHoursCreateOrConnectWithoutBarbershopInput[]
    upsert?: WorkingHoursUpsertWithWhereUniqueWithoutBarbershopInput | WorkingHoursUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: WorkingHoursCreateManyBarbershopInputEnvelope
    set?: WorkingHoursWhereUniqueInput | WorkingHoursWhereUniqueInput[]
    disconnect?: WorkingHoursWhereUniqueInput | WorkingHoursWhereUniqueInput[]
    delete?: WorkingHoursWhereUniqueInput | WorkingHoursWhereUniqueInput[]
    connect?: WorkingHoursWhereUniqueInput | WorkingHoursWhereUniqueInput[]
    update?: WorkingHoursUpdateWithWhereUniqueWithoutBarbershopInput | WorkingHoursUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: WorkingHoursUpdateManyWithWhereWithoutBarbershopInput | WorkingHoursUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: WorkingHoursScalarWhereInput | WorkingHoursScalarWhereInput[]
  }

  export type ClosedDayUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<ClosedDayCreateWithoutBarbershopInput, ClosedDayUncheckedCreateWithoutBarbershopInput> | ClosedDayCreateWithoutBarbershopInput[] | ClosedDayUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: ClosedDayCreateOrConnectWithoutBarbershopInput | ClosedDayCreateOrConnectWithoutBarbershopInput[]
    upsert?: ClosedDayUpsertWithWhereUniqueWithoutBarbershopInput | ClosedDayUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: ClosedDayCreateManyBarbershopInputEnvelope
    set?: ClosedDayWhereUniqueInput | ClosedDayWhereUniqueInput[]
    disconnect?: ClosedDayWhereUniqueInput | ClosedDayWhereUniqueInput[]
    delete?: ClosedDayWhereUniqueInput | ClosedDayWhereUniqueInput[]
    connect?: ClosedDayWhereUniqueInput | ClosedDayWhereUniqueInput[]
    update?: ClosedDayUpdateWithWhereUniqueWithoutBarbershopInput | ClosedDayUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: ClosedDayUpdateManyWithWhereWithoutBarbershopInput | ClosedDayUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: ClosedDayScalarWhereInput | ClosedDayScalarWhereInput[]
  }

  export type PushTokenUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<PushTokenCreateWithoutBarbershopInput, PushTokenUncheckedCreateWithoutBarbershopInput> | PushTokenCreateWithoutBarbershopInput[] | PushTokenUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: PushTokenCreateOrConnectWithoutBarbershopInput | PushTokenCreateOrConnectWithoutBarbershopInput[]
    upsert?: PushTokenUpsertWithWhereUniqueWithoutBarbershopInput | PushTokenUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: PushTokenCreateManyBarbershopInputEnvelope
    set?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    disconnect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    delete?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    connect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    update?: PushTokenUpdateWithWhereUniqueWithoutBarbershopInput | PushTokenUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: PushTokenUpdateManyWithWhereWithoutBarbershopInput | PushTokenUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: PushTokenScalarWhereInput | PushTokenScalarWhereInput[]
  }

  export type BarbershopSettingsUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<BarbershopSettingsCreateWithoutBarbershopInput, BarbershopSettingsUncheckedCreateWithoutBarbershopInput> | BarbershopSettingsCreateWithoutBarbershopInput[] | BarbershopSettingsUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: BarbershopSettingsCreateOrConnectWithoutBarbershopInput | BarbershopSettingsCreateOrConnectWithoutBarbershopInput[]
    upsert?: BarbershopSettingsUpsertWithWhereUniqueWithoutBarbershopInput | BarbershopSettingsUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: BarbershopSettingsCreateManyBarbershopInputEnvelope
    set?: BarbershopSettingsWhereUniqueInput | BarbershopSettingsWhereUniqueInput[]
    disconnect?: BarbershopSettingsWhereUniqueInput | BarbershopSettingsWhereUniqueInput[]
    delete?: BarbershopSettingsWhereUniqueInput | BarbershopSettingsWhereUniqueInput[]
    connect?: BarbershopSettingsWhereUniqueInput | BarbershopSettingsWhereUniqueInput[]
    update?: BarbershopSettingsUpdateWithWhereUniqueWithoutBarbershopInput | BarbershopSettingsUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: BarbershopSettingsUpdateManyWithWhereWithoutBarbershopInput | BarbershopSettingsUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: BarbershopSettingsScalarWhereInput | BarbershopSettingsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BarberUncheckedUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<BarberCreateWithoutBarbershopInput, BarberUncheckedCreateWithoutBarbershopInput> | BarberCreateWithoutBarbershopInput[] | BarberUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: BarberCreateOrConnectWithoutBarbershopInput | BarberCreateOrConnectWithoutBarbershopInput[]
    upsert?: BarberUpsertWithWhereUniqueWithoutBarbershopInput | BarberUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: BarberCreateManyBarbershopInputEnvelope
    set?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    disconnect?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    delete?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    connect?: BarberWhereUniqueInput | BarberWhereUniqueInput[]
    update?: BarberUpdateWithWhereUniqueWithoutBarbershopInput | BarberUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: BarberUpdateManyWithWhereWithoutBarbershopInput | BarberUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: BarberScalarWhereInput | BarberScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<ServiceCreateWithoutBarbershopInput, ServiceUncheckedCreateWithoutBarbershopInput> | ServiceCreateWithoutBarbershopInput[] | ServiceUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutBarbershopInput | ServiceCreateOrConnectWithoutBarbershopInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutBarbershopInput | ServiceUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: ServiceCreateManyBarbershopInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutBarbershopInput | ServiceUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutBarbershopInput | ServiceUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type SchedulingUncheckedUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<SchedulingCreateWithoutBarbershopInput, SchedulingUncheckedCreateWithoutBarbershopInput> | SchedulingCreateWithoutBarbershopInput[] | SchedulingUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutBarbershopInput | SchedulingCreateOrConnectWithoutBarbershopInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutBarbershopInput | SchedulingUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: SchedulingCreateManyBarbershopInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutBarbershopInput | SchedulingUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutBarbershopInput | SchedulingUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type WorkingHoursUncheckedUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<WorkingHoursCreateWithoutBarbershopInput, WorkingHoursUncheckedCreateWithoutBarbershopInput> | WorkingHoursCreateWithoutBarbershopInput[] | WorkingHoursUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: WorkingHoursCreateOrConnectWithoutBarbershopInput | WorkingHoursCreateOrConnectWithoutBarbershopInput[]
    upsert?: WorkingHoursUpsertWithWhereUniqueWithoutBarbershopInput | WorkingHoursUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: WorkingHoursCreateManyBarbershopInputEnvelope
    set?: WorkingHoursWhereUniqueInput | WorkingHoursWhereUniqueInput[]
    disconnect?: WorkingHoursWhereUniqueInput | WorkingHoursWhereUniqueInput[]
    delete?: WorkingHoursWhereUniqueInput | WorkingHoursWhereUniqueInput[]
    connect?: WorkingHoursWhereUniqueInput | WorkingHoursWhereUniqueInput[]
    update?: WorkingHoursUpdateWithWhereUniqueWithoutBarbershopInput | WorkingHoursUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: WorkingHoursUpdateManyWithWhereWithoutBarbershopInput | WorkingHoursUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: WorkingHoursScalarWhereInput | WorkingHoursScalarWhereInput[]
  }

  export type ClosedDayUncheckedUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<ClosedDayCreateWithoutBarbershopInput, ClosedDayUncheckedCreateWithoutBarbershopInput> | ClosedDayCreateWithoutBarbershopInput[] | ClosedDayUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: ClosedDayCreateOrConnectWithoutBarbershopInput | ClosedDayCreateOrConnectWithoutBarbershopInput[]
    upsert?: ClosedDayUpsertWithWhereUniqueWithoutBarbershopInput | ClosedDayUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: ClosedDayCreateManyBarbershopInputEnvelope
    set?: ClosedDayWhereUniqueInput | ClosedDayWhereUniqueInput[]
    disconnect?: ClosedDayWhereUniqueInput | ClosedDayWhereUniqueInput[]
    delete?: ClosedDayWhereUniqueInput | ClosedDayWhereUniqueInput[]
    connect?: ClosedDayWhereUniqueInput | ClosedDayWhereUniqueInput[]
    update?: ClosedDayUpdateWithWhereUniqueWithoutBarbershopInput | ClosedDayUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: ClosedDayUpdateManyWithWhereWithoutBarbershopInput | ClosedDayUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: ClosedDayScalarWhereInput | ClosedDayScalarWhereInput[]
  }

  export type PushTokenUncheckedUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<PushTokenCreateWithoutBarbershopInput, PushTokenUncheckedCreateWithoutBarbershopInput> | PushTokenCreateWithoutBarbershopInput[] | PushTokenUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: PushTokenCreateOrConnectWithoutBarbershopInput | PushTokenCreateOrConnectWithoutBarbershopInput[]
    upsert?: PushTokenUpsertWithWhereUniqueWithoutBarbershopInput | PushTokenUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: PushTokenCreateManyBarbershopInputEnvelope
    set?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    disconnect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    delete?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    connect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    update?: PushTokenUpdateWithWhereUniqueWithoutBarbershopInput | PushTokenUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: PushTokenUpdateManyWithWhereWithoutBarbershopInput | PushTokenUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: PushTokenScalarWhereInput | PushTokenScalarWhereInput[]
  }

  export type BarbershopSettingsUncheckedUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<BarbershopSettingsCreateWithoutBarbershopInput, BarbershopSettingsUncheckedCreateWithoutBarbershopInput> | BarbershopSettingsCreateWithoutBarbershopInput[] | BarbershopSettingsUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: BarbershopSettingsCreateOrConnectWithoutBarbershopInput | BarbershopSettingsCreateOrConnectWithoutBarbershopInput[]
    upsert?: BarbershopSettingsUpsertWithWhereUniqueWithoutBarbershopInput | BarbershopSettingsUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: BarbershopSettingsCreateManyBarbershopInputEnvelope
    set?: BarbershopSettingsWhereUniqueInput | BarbershopSettingsWhereUniqueInput[]
    disconnect?: BarbershopSettingsWhereUniqueInput | BarbershopSettingsWhereUniqueInput[]
    delete?: BarbershopSettingsWhereUniqueInput | BarbershopSettingsWhereUniqueInput[]
    connect?: BarbershopSettingsWhereUniqueInput | BarbershopSettingsWhereUniqueInput[]
    update?: BarbershopSettingsUpdateWithWhereUniqueWithoutBarbershopInput | BarbershopSettingsUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: BarbershopSettingsUpdateManyWithWhereWithoutBarbershopInput | BarbershopSettingsUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: BarbershopSettingsScalarWhereInput | BarbershopSettingsScalarWhereInput[]
  }

  export type BarbershopCreateNestedOneWithoutBarberInput = {
    create?: XOR<BarbershopCreateWithoutBarberInput, BarbershopUncheckedCreateWithoutBarberInput>
    connectOrCreate?: BarbershopCreateOrConnectWithoutBarberInput
    connect?: BarbershopWhereUniqueInput
  }

  export type SchedulingCreateNestedManyWithoutBarberInput = {
    create?: XOR<SchedulingCreateWithoutBarberInput, SchedulingUncheckedCreateWithoutBarberInput> | SchedulingCreateWithoutBarberInput[] | SchedulingUncheckedCreateWithoutBarberInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutBarberInput | SchedulingCreateOrConnectWithoutBarberInput[]
    createMany?: SchedulingCreateManyBarberInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type PushTokenCreateNestedManyWithoutBarberInput = {
    create?: XOR<PushTokenCreateWithoutBarberInput, PushTokenUncheckedCreateWithoutBarberInput> | PushTokenCreateWithoutBarberInput[] | PushTokenUncheckedCreateWithoutBarberInput[]
    connectOrCreate?: PushTokenCreateOrConnectWithoutBarberInput | PushTokenCreateOrConnectWithoutBarberInput[]
    createMany?: PushTokenCreateManyBarberInputEnvelope
    connect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
  }

  export type SchedulingUncheckedCreateNestedManyWithoutBarberInput = {
    create?: XOR<SchedulingCreateWithoutBarberInput, SchedulingUncheckedCreateWithoutBarberInput> | SchedulingCreateWithoutBarberInput[] | SchedulingUncheckedCreateWithoutBarberInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutBarberInput | SchedulingCreateOrConnectWithoutBarberInput[]
    createMany?: SchedulingCreateManyBarberInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type PushTokenUncheckedCreateNestedManyWithoutBarberInput = {
    create?: XOR<PushTokenCreateWithoutBarberInput, PushTokenUncheckedCreateWithoutBarberInput> | PushTokenCreateWithoutBarberInput[] | PushTokenUncheckedCreateWithoutBarberInput[]
    connectOrCreate?: PushTokenCreateOrConnectWithoutBarberInput | PushTokenCreateOrConnectWithoutBarberInput[]
    createMany?: PushTokenCreateManyBarberInputEnvelope
    connect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
  }

  export type BarbershopUpdateOneRequiredWithoutBarberNestedInput = {
    create?: XOR<BarbershopCreateWithoutBarberInput, BarbershopUncheckedCreateWithoutBarberInput>
    connectOrCreate?: BarbershopCreateOrConnectWithoutBarberInput
    upsert?: BarbershopUpsertWithoutBarberInput
    connect?: BarbershopWhereUniqueInput
    update?: XOR<XOR<BarbershopUpdateToOneWithWhereWithoutBarberInput, BarbershopUpdateWithoutBarberInput>, BarbershopUncheckedUpdateWithoutBarberInput>
  }

  export type SchedulingUpdateManyWithoutBarberNestedInput = {
    create?: XOR<SchedulingCreateWithoutBarberInput, SchedulingUncheckedCreateWithoutBarberInput> | SchedulingCreateWithoutBarberInput[] | SchedulingUncheckedCreateWithoutBarberInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutBarberInput | SchedulingCreateOrConnectWithoutBarberInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutBarberInput | SchedulingUpsertWithWhereUniqueWithoutBarberInput[]
    createMany?: SchedulingCreateManyBarberInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutBarberInput | SchedulingUpdateWithWhereUniqueWithoutBarberInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutBarberInput | SchedulingUpdateManyWithWhereWithoutBarberInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type PushTokenUpdateManyWithoutBarberNestedInput = {
    create?: XOR<PushTokenCreateWithoutBarberInput, PushTokenUncheckedCreateWithoutBarberInput> | PushTokenCreateWithoutBarberInput[] | PushTokenUncheckedCreateWithoutBarberInput[]
    connectOrCreate?: PushTokenCreateOrConnectWithoutBarberInput | PushTokenCreateOrConnectWithoutBarberInput[]
    upsert?: PushTokenUpsertWithWhereUniqueWithoutBarberInput | PushTokenUpsertWithWhereUniqueWithoutBarberInput[]
    createMany?: PushTokenCreateManyBarberInputEnvelope
    set?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    disconnect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    delete?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    connect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    update?: PushTokenUpdateWithWhereUniqueWithoutBarberInput | PushTokenUpdateWithWhereUniqueWithoutBarberInput[]
    updateMany?: PushTokenUpdateManyWithWhereWithoutBarberInput | PushTokenUpdateManyWithWhereWithoutBarberInput[]
    deleteMany?: PushTokenScalarWhereInput | PushTokenScalarWhereInput[]
  }

  export type SchedulingUncheckedUpdateManyWithoutBarberNestedInput = {
    create?: XOR<SchedulingCreateWithoutBarberInput, SchedulingUncheckedCreateWithoutBarberInput> | SchedulingCreateWithoutBarberInput[] | SchedulingUncheckedCreateWithoutBarberInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutBarberInput | SchedulingCreateOrConnectWithoutBarberInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutBarberInput | SchedulingUpsertWithWhereUniqueWithoutBarberInput[]
    createMany?: SchedulingCreateManyBarberInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutBarberInput | SchedulingUpdateWithWhereUniqueWithoutBarberInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutBarberInput | SchedulingUpdateManyWithWhereWithoutBarberInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type PushTokenUncheckedUpdateManyWithoutBarberNestedInput = {
    create?: XOR<PushTokenCreateWithoutBarberInput, PushTokenUncheckedCreateWithoutBarberInput> | PushTokenCreateWithoutBarberInput[] | PushTokenUncheckedCreateWithoutBarberInput[]
    connectOrCreate?: PushTokenCreateOrConnectWithoutBarberInput | PushTokenCreateOrConnectWithoutBarberInput[]
    upsert?: PushTokenUpsertWithWhereUniqueWithoutBarberInput | PushTokenUpsertWithWhereUniqueWithoutBarberInput[]
    createMany?: PushTokenCreateManyBarberInputEnvelope
    set?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    disconnect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    delete?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    connect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    update?: PushTokenUpdateWithWhereUniqueWithoutBarberInput | PushTokenUpdateWithWhereUniqueWithoutBarberInput[]
    updateMany?: PushTokenUpdateManyWithWhereWithoutBarberInput | PushTokenUpdateManyWithWhereWithoutBarberInput[]
    deleteMany?: PushTokenScalarWhereInput | PushTokenScalarWhereInput[]
  }

  export type SchedulingCreateNestedManyWithoutClientInput = {
    create?: XOR<SchedulingCreateWithoutClientInput, SchedulingUncheckedCreateWithoutClientInput> | SchedulingCreateWithoutClientInput[] | SchedulingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutClientInput | SchedulingCreateOrConnectWithoutClientInput[]
    createMany?: SchedulingCreateManyClientInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type PushTokenCreateNestedManyWithoutClientInput = {
    create?: XOR<PushTokenCreateWithoutClientInput, PushTokenUncheckedCreateWithoutClientInput> | PushTokenCreateWithoutClientInput[] | PushTokenUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PushTokenCreateOrConnectWithoutClientInput | PushTokenCreateOrConnectWithoutClientInput[]
    createMany?: PushTokenCreateManyClientInputEnvelope
    connect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
  }

  export type SchedulingUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<SchedulingCreateWithoutClientInput, SchedulingUncheckedCreateWithoutClientInput> | SchedulingCreateWithoutClientInput[] | SchedulingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutClientInput | SchedulingCreateOrConnectWithoutClientInput[]
    createMany?: SchedulingCreateManyClientInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type PushTokenUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<PushTokenCreateWithoutClientInput, PushTokenUncheckedCreateWithoutClientInput> | PushTokenCreateWithoutClientInput[] | PushTokenUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PushTokenCreateOrConnectWithoutClientInput | PushTokenCreateOrConnectWithoutClientInput[]
    createMany?: PushTokenCreateManyClientInputEnvelope
    connect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
  }

  export type SchedulingUpdateManyWithoutClientNestedInput = {
    create?: XOR<SchedulingCreateWithoutClientInput, SchedulingUncheckedCreateWithoutClientInput> | SchedulingCreateWithoutClientInput[] | SchedulingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutClientInput | SchedulingCreateOrConnectWithoutClientInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutClientInput | SchedulingUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SchedulingCreateManyClientInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutClientInput | SchedulingUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutClientInput | SchedulingUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type PushTokenUpdateManyWithoutClientNestedInput = {
    create?: XOR<PushTokenCreateWithoutClientInput, PushTokenUncheckedCreateWithoutClientInput> | PushTokenCreateWithoutClientInput[] | PushTokenUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PushTokenCreateOrConnectWithoutClientInput | PushTokenCreateOrConnectWithoutClientInput[]
    upsert?: PushTokenUpsertWithWhereUniqueWithoutClientInput | PushTokenUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: PushTokenCreateManyClientInputEnvelope
    set?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    disconnect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    delete?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    connect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    update?: PushTokenUpdateWithWhereUniqueWithoutClientInput | PushTokenUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: PushTokenUpdateManyWithWhereWithoutClientInput | PushTokenUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: PushTokenScalarWhereInput | PushTokenScalarWhereInput[]
  }

  export type SchedulingUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<SchedulingCreateWithoutClientInput, SchedulingUncheckedCreateWithoutClientInput> | SchedulingCreateWithoutClientInput[] | SchedulingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutClientInput | SchedulingCreateOrConnectWithoutClientInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutClientInput | SchedulingUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SchedulingCreateManyClientInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutClientInput | SchedulingUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutClientInput | SchedulingUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type PushTokenUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<PushTokenCreateWithoutClientInput, PushTokenUncheckedCreateWithoutClientInput> | PushTokenCreateWithoutClientInput[] | PushTokenUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PushTokenCreateOrConnectWithoutClientInput | PushTokenCreateOrConnectWithoutClientInput[]
    upsert?: PushTokenUpsertWithWhereUniqueWithoutClientInput | PushTokenUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: PushTokenCreateManyClientInputEnvelope
    set?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    disconnect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    delete?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    connect?: PushTokenWhereUniqueInput | PushTokenWhereUniqueInput[]
    update?: PushTokenUpdateWithWhereUniqueWithoutClientInput | PushTokenUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: PushTokenUpdateManyWithWhereWithoutClientInput | PushTokenUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: PushTokenScalarWhereInput | PushTokenScalarWhereInput[]
  }

  export type BarbershopCreateNestedOneWithoutServiceInput = {
    create?: XOR<BarbershopCreateWithoutServiceInput, BarbershopUncheckedCreateWithoutServiceInput>
    connectOrCreate?: BarbershopCreateOrConnectWithoutServiceInput
    connect?: BarbershopWhereUniqueInput
  }

  export type SchedulingServiceCreateNestedManyWithoutServiceInput = {
    create?: XOR<SchedulingServiceCreateWithoutServiceInput, SchedulingServiceUncheckedCreateWithoutServiceInput> | SchedulingServiceCreateWithoutServiceInput[] | SchedulingServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: SchedulingServiceCreateOrConnectWithoutServiceInput | SchedulingServiceCreateOrConnectWithoutServiceInput[]
    createMany?: SchedulingServiceCreateManyServiceInputEnvelope
    connect?: SchedulingServiceWhereUniqueInput | SchedulingServiceWhereUniqueInput[]
  }

  export type SchedulingServiceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<SchedulingServiceCreateWithoutServiceInput, SchedulingServiceUncheckedCreateWithoutServiceInput> | SchedulingServiceCreateWithoutServiceInput[] | SchedulingServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: SchedulingServiceCreateOrConnectWithoutServiceInput | SchedulingServiceCreateOrConnectWithoutServiceInput[]
    createMany?: SchedulingServiceCreateManyServiceInputEnvelope
    connect?: SchedulingServiceWhereUniqueInput | SchedulingServiceWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BarbershopUpdateOneRequiredWithoutServiceNestedInput = {
    create?: XOR<BarbershopCreateWithoutServiceInput, BarbershopUncheckedCreateWithoutServiceInput>
    connectOrCreate?: BarbershopCreateOrConnectWithoutServiceInput
    upsert?: BarbershopUpsertWithoutServiceInput
    connect?: BarbershopWhereUniqueInput
    update?: XOR<XOR<BarbershopUpdateToOneWithWhereWithoutServiceInput, BarbershopUpdateWithoutServiceInput>, BarbershopUncheckedUpdateWithoutServiceInput>
  }

  export type SchedulingServiceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<SchedulingServiceCreateWithoutServiceInput, SchedulingServiceUncheckedCreateWithoutServiceInput> | SchedulingServiceCreateWithoutServiceInput[] | SchedulingServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: SchedulingServiceCreateOrConnectWithoutServiceInput | SchedulingServiceCreateOrConnectWithoutServiceInput[]
    upsert?: SchedulingServiceUpsertWithWhereUniqueWithoutServiceInput | SchedulingServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: SchedulingServiceCreateManyServiceInputEnvelope
    set?: SchedulingServiceWhereUniqueInput | SchedulingServiceWhereUniqueInput[]
    disconnect?: SchedulingServiceWhereUniqueInput | SchedulingServiceWhereUniqueInput[]
    delete?: SchedulingServiceWhereUniqueInput | SchedulingServiceWhereUniqueInput[]
    connect?: SchedulingServiceWhereUniqueInput | SchedulingServiceWhereUniqueInput[]
    update?: SchedulingServiceUpdateWithWhereUniqueWithoutServiceInput | SchedulingServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: SchedulingServiceUpdateManyWithWhereWithoutServiceInput | SchedulingServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: SchedulingServiceScalarWhereInput | SchedulingServiceScalarWhereInput[]
  }

  export type SchedulingServiceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<SchedulingServiceCreateWithoutServiceInput, SchedulingServiceUncheckedCreateWithoutServiceInput> | SchedulingServiceCreateWithoutServiceInput[] | SchedulingServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: SchedulingServiceCreateOrConnectWithoutServiceInput | SchedulingServiceCreateOrConnectWithoutServiceInput[]
    upsert?: SchedulingServiceUpsertWithWhereUniqueWithoutServiceInput | SchedulingServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: SchedulingServiceCreateManyServiceInputEnvelope
    set?: SchedulingServiceWhereUniqueInput | SchedulingServiceWhereUniqueInput[]
    disconnect?: SchedulingServiceWhereUniqueInput | SchedulingServiceWhereUniqueInput[]
    delete?: SchedulingServiceWhereUniqueInput | SchedulingServiceWhereUniqueInput[]
    connect?: SchedulingServiceWhereUniqueInput | SchedulingServiceWhereUniqueInput[]
    update?: SchedulingServiceUpdateWithWhereUniqueWithoutServiceInput | SchedulingServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: SchedulingServiceUpdateManyWithWhereWithoutServiceInput | SchedulingServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: SchedulingServiceScalarWhereInput | SchedulingServiceScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutSchedulingInput = {
    create?: XOR<ClientCreateWithoutSchedulingInput, ClientUncheckedCreateWithoutSchedulingInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSchedulingInput
    connect?: ClientWhereUniqueInput
  }

  export type BarberCreateNestedOneWithoutSchedulingInput = {
    create?: XOR<BarberCreateWithoutSchedulingInput, BarberUncheckedCreateWithoutSchedulingInput>
    connectOrCreate?: BarberCreateOrConnectWithoutSchedulingInput
    connect?: BarberWhereUniqueInput
  }

  export type BarbershopCreateNestedOneWithoutSchedulingInput = {
    create?: XOR<BarbershopCreateWithoutSchedulingInput, BarbershopUncheckedCreateWithoutSchedulingInput>
    connectOrCreate?: BarbershopCreateOrConnectWithoutSchedulingInput
    connect?: BarbershopWhereUniqueInput
  }

  export type SchedulingServiceCreateNestedManyWithoutSchedulingInput = {
    create?: XOR<SchedulingServiceCreateWithoutSchedulingInput, SchedulingServiceUncheckedCreateWithoutSchedulingInput> | SchedulingServiceCreateWithoutSchedulingInput[] | SchedulingServiceUncheckedCreateWithoutSchedulingInput[]
    connectOrCreate?: SchedulingServiceCreateOrConnectWithoutSchedulingInput | SchedulingServiceCreateOrConnectWithoutSchedulingInput[]
    createMany?: SchedulingServiceCreateManySchedulingInputEnvelope
    connect?: SchedulingServiceWhereUniqueInput | SchedulingServiceWhereUniqueInput[]
  }

  export type SchedulingServiceUncheckedCreateNestedManyWithoutSchedulingInput = {
    create?: XOR<SchedulingServiceCreateWithoutSchedulingInput, SchedulingServiceUncheckedCreateWithoutSchedulingInput> | SchedulingServiceCreateWithoutSchedulingInput[] | SchedulingServiceUncheckedCreateWithoutSchedulingInput[]
    connectOrCreate?: SchedulingServiceCreateOrConnectWithoutSchedulingInput | SchedulingServiceCreateOrConnectWithoutSchedulingInput[]
    createMany?: SchedulingServiceCreateManySchedulingInputEnvelope
    connect?: SchedulingServiceWhereUniqueInput | SchedulingServiceWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientUpdateOneRequiredWithoutSchedulingNestedInput = {
    create?: XOR<ClientCreateWithoutSchedulingInput, ClientUncheckedCreateWithoutSchedulingInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSchedulingInput
    upsert?: ClientUpsertWithoutSchedulingInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutSchedulingInput, ClientUpdateWithoutSchedulingInput>, ClientUncheckedUpdateWithoutSchedulingInput>
  }

  export type BarberUpdateOneRequiredWithoutSchedulingNestedInput = {
    create?: XOR<BarberCreateWithoutSchedulingInput, BarberUncheckedCreateWithoutSchedulingInput>
    connectOrCreate?: BarberCreateOrConnectWithoutSchedulingInput
    upsert?: BarberUpsertWithoutSchedulingInput
    connect?: BarberWhereUniqueInput
    update?: XOR<XOR<BarberUpdateToOneWithWhereWithoutSchedulingInput, BarberUpdateWithoutSchedulingInput>, BarberUncheckedUpdateWithoutSchedulingInput>
  }

  export type BarbershopUpdateOneRequiredWithoutSchedulingNestedInput = {
    create?: XOR<BarbershopCreateWithoutSchedulingInput, BarbershopUncheckedCreateWithoutSchedulingInput>
    connectOrCreate?: BarbershopCreateOrConnectWithoutSchedulingInput
    upsert?: BarbershopUpsertWithoutSchedulingInput
    connect?: BarbershopWhereUniqueInput
    update?: XOR<XOR<BarbershopUpdateToOneWithWhereWithoutSchedulingInput, BarbershopUpdateWithoutSchedulingInput>, BarbershopUncheckedUpdateWithoutSchedulingInput>
  }

  export type SchedulingServiceUpdateManyWithoutSchedulingNestedInput = {
    create?: XOR<SchedulingServiceCreateWithoutSchedulingInput, SchedulingServiceUncheckedCreateWithoutSchedulingInput> | SchedulingServiceCreateWithoutSchedulingInput[] | SchedulingServiceUncheckedCreateWithoutSchedulingInput[]
    connectOrCreate?: SchedulingServiceCreateOrConnectWithoutSchedulingInput | SchedulingServiceCreateOrConnectWithoutSchedulingInput[]
    upsert?: SchedulingServiceUpsertWithWhereUniqueWithoutSchedulingInput | SchedulingServiceUpsertWithWhereUniqueWithoutSchedulingInput[]
    createMany?: SchedulingServiceCreateManySchedulingInputEnvelope
    set?: SchedulingServiceWhereUniqueInput | SchedulingServiceWhereUniqueInput[]
    disconnect?: SchedulingServiceWhereUniqueInput | SchedulingServiceWhereUniqueInput[]
    delete?: SchedulingServiceWhereUniqueInput | SchedulingServiceWhereUniqueInput[]
    connect?: SchedulingServiceWhereUniqueInput | SchedulingServiceWhereUniqueInput[]
    update?: SchedulingServiceUpdateWithWhereUniqueWithoutSchedulingInput | SchedulingServiceUpdateWithWhereUniqueWithoutSchedulingInput[]
    updateMany?: SchedulingServiceUpdateManyWithWhereWithoutSchedulingInput | SchedulingServiceUpdateManyWithWhereWithoutSchedulingInput[]
    deleteMany?: SchedulingServiceScalarWhereInput | SchedulingServiceScalarWhereInput[]
  }

  export type SchedulingServiceUncheckedUpdateManyWithoutSchedulingNestedInput = {
    create?: XOR<SchedulingServiceCreateWithoutSchedulingInput, SchedulingServiceUncheckedCreateWithoutSchedulingInput> | SchedulingServiceCreateWithoutSchedulingInput[] | SchedulingServiceUncheckedCreateWithoutSchedulingInput[]
    connectOrCreate?: SchedulingServiceCreateOrConnectWithoutSchedulingInput | SchedulingServiceCreateOrConnectWithoutSchedulingInput[]
    upsert?: SchedulingServiceUpsertWithWhereUniqueWithoutSchedulingInput | SchedulingServiceUpsertWithWhereUniqueWithoutSchedulingInput[]
    createMany?: SchedulingServiceCreateManySchedulingInputEnvelope
    set?: SchedulingServiceWhereUniqueInput | SchedulingServiceWhereUniqueInput[]
    disconnect?: SchedulingServiceWhereUniqueInput | SchedulingServiceWhereUniqueInput[]
    delete?: SchedulingServiceWhereUniqueInput | SchedulingServiceWhereUniqueInput[]
    connect?: SchedulingServiceWhereUniqueInput | SchedulingServiceWhereUniqueInput[]
    update?: SchedulingServiceUpdateWithWhereUniqueWithoutSchedulingInput | SchedulingServiceUpdateWithWhereUniqueWithoutSchedulingInput[]
    updateMany?: SchedulingServiceUpdateManyWithWhereWithoutSchedulingInput | SchedulingServiceUpdateManyWithWhereWithoutSchedulingInput[]
    deleteMany?: SchedulingServiceScalarWhereInput | SchedulingServiceScalarWhereInput[]
  }

  export type SchedulingCreateNestedOneWithoutSchedulingServiceInput = {
    create?: XOR<SchedulingCreateWithoutSchedulingServiceInput, SchedulingUncheckedCreateWithoutSchedulingServiceInput>
    connectOrCreate?: SchedulingCreateOrConnectWithoutSchedulingServiceInput
    connect?: SchedulingWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutSchedulingServiceInput = {
    create?: XOR<ServiceCreateWithoutSchedulingServiceInput, ServiceUncheckedCreateWithoutSchedulingServiceInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutSchedulingServiceInput
    connect?: ServiceWhereUniqueInput
  }

  export type SchedulingUpdateOneRequiredWithoutSchedulingServiceNestedInput = {
    create?: XOR<SchedulingCreateWithoutSchedulingServiceInput, SchedulingUncheckedCreateWithoutSchedulingServiceInput>
    connectOrCreate?: SchedulingCreateOrConnectWithoutSchedulingServiceInput
    upsert?: SchedulingUpsertWithoutSchedulingServiceInput
    connect?: SchedulingWhereUniqueInput
    update?: XOR<XOR<SchedulingUpdateToOneWithWhereWithoutSchedulingServiceInput, SchedulingUpdateWithoutSchedulingServiceInput>, SchedulingUncheckedUpdateWithoutSchedulingServiceInput>
  }

  export type ServiceUpdateOneRequiredWithoutSchedulingServiceNestedInput = {
    create?: XOR<ServiceCreateWithoutSchedulingServiceInput, ServiceUncheckedCreateWithoutSchedulingServiceInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutSchedulingServiceInput
    upsert?: ServiceUpsertWithoutSchedulingServiceInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutSchedulingServiceInput, ServiceUpdateWithoutSchedulingServiceInput>, ServiceUncheckedUpdateWithoutSchedulingServiceInput>
  }

  export type BarbershopCreateNestedOneWithoutWorkingHoursInput = {
    create?: XOR<BarbershopCreateWithoutWorkingHoursInput, BarbershopUncheckedCreateWithoutWorkingHoursInput>
    connectOrCreate?: BarbershopCreateOrConnectWithoutWorkingHoursInput
    connect?: BarbershopWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BarbershopUpdateOneRequiredWithoutWorkingHoursNestedInput = {
    create?: XOR<BarbershopCreateWithoutWorkingHoursInput, BarbershopUncheckedCreateWithoutWorkingHoursInput>
    connectOrCreate?: BarbershopCreateOrConnectWithoutWorkingHoursInput
    upsert?: BarbershopUpsertWithoutWorkingHoursInput
    connect?: BarbershopWhereUniqueInput
    update?: XOR<XOR<BarbershopUpdateToOneWithWhereWithoutWorkingHoursInput, BarbershopUpdateWithoutWorkingHoursInput>, BarbershopUncheckedUpdateWithoutWorkingHoursInput>
  }

  export type BarbershopCreateNestedOneWithoutClosedDayInput = {
    create?: XOR<BarbershopCreateWithoutClosedDayInput, BarbershopUncheckedCreateWithoutClosedDayInput>
    connectOrCreate?: BarbershopCreateOrConnectWithoutClosedDayInput
    connect?: BarbershopWhereUniqueInput
  }

  export type BarbershopUpdateOneRequiredWithoutClosedDayNestedInput = {
    create?: XOR<BarbershopCreateWithoutClosedDayInput, BarbershopUncheckedCreateWithoutClosedDayInput>
    connectOrCreate?: BarbershopCreateOrConnectWithoutClosedDayInput
    upsert?: BarbershopUpsertWithoutClosedDayInput
    connect?: BarbershopWhereUniqueInput
    update?: XOR<XOR<BarbershopUpdateToOneWithWhereWithoutClosedDayInput, BarbershopUpdateWithoutClosedDayInput>, BarbershopUncheckedUpdateWithoutClosedDayInput>
  }

  export type BarberCreateNestedOneWithoutPushTokenInput = {
    create?: XOR<BarberCreateWithoutPushTokenInput, BarberUncheckedCreateWithoutPushTokenInput>
    connectOrCreate?: BarberCreateOrConnectWithoutPushTokenInput
    connect?: BarberWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutPushTokenInput = {
    create?: XOR<ClientCreateWithoutPushTokenInput, ClientUncheckedCreateWithoutPushTokenInput>
    connectOrCreate?: ClientCreateOrConnectWithoutPushTokenInput
    connect?: ClientWhereUniqueInput
  }

  export type BarbershopCreateNestedOneWithoutPushTokenInput = {
    create?: XOR<BarbershopCreateWithoutPushTokenInput, BarbershopUncheckedCreateWithoutPushTokenInput>
    connectOrCreate?: BarbershopCreateOrConnectWithoutPushTokenInput
    connect?: BarbershopWhereUniqueInput
  }

  export type BarberUpdateOneWithoutPushTokenNestedInput = {
    create?: XOR<BarberCreateWithoutPushTokenInput, BarberUncheckedCreateWithoutPushTokenInput>
    connectOrCreate?: BarberCreateOrConnectWithoutPushTokenInput
    upsert?: BarberUpsertWithoutPushTokenInput
    disconnect?: BarberWhereInput | boolean
    delete?: BarberWhereInput | boolean
    connect?: BarberWhereUniqueInput
    update?: XOR<XOR<BarberUpdateToOneWithWhereWithoutPushTokenInput, BarberUpdateWithoutPushTokenInput>, BarberUncheckedUpdateWithoutPushTokenInput>
  }

  export type ClientUpdateOneWithoutPushTokenNestedInput = {
    create?: XOR<ClientCreateWithoutPushTokenInput, ClientUncheckedCreateWithoutPushTokenInput>
    connectOrCreate?: ClientCreateOrConnectWithoutPushTokenInput
    upsert?: ClientUpsertWithoutPushTokenInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutPushTokenInput, ClientUpdateWithoutPushTokenInput>, ClientUncheckedUpdateWithoutPushTokenInput>
  }

  export type BarbershopUpdateOneWithoutPushTokenNestedInput = {
    create?: XOR<BarbershopCreateWithoutPushTokenInput, BarbershopUncheckedCreateWithoutPushTokenInput>
    connectOrCreate?: BarbershopCreateOrConnectWithoutPushTokenInput
    upsert?: BarbershopUpsertWithoutPushTokenInput
    disconnect?: BarbershopWhereInput | boolean
    delete?: BarbershopWhereInput | boolean
    connect?: BarbershopWhereUniqueInput
    update?: XOR<XOR<BarbershopUpdateToOneWithWhereWithoutPushTokenInput, BarbershopUpdateWithoutPushTokenInput>, BarbershopUncheckedUpdateWithoutPushTokenInput>
  }

  export type BarbershopCreateNestedOneWithoutBarbershopSettingsInput = {
    create?: XOR<BarbershopCreateWithoutBarbershopSettingsInput, BarbershopUncheckedCreateWithoutBarbershopSettingsInput>
    connectOrCreate?: BarbershopCreateOrConnectWithoutBarbershopSettingsInput
    connect?: BarbershopWhereUniqueInput
  }

  export type BarbershopUpdateOneWithoutBarbershopSettingsNestedInput = {
    create?: XOR<BarbershopCreateWithoutBarbershopSettingsInput, BarbershopUncheckedCreateWithoutBarbershopSettingsInput>
    connectOrCreate?: BarbershopCreateOrConnectWithoutBarbershopSettingsInput
    upsert?: BarbershopUpsertWithoutBarbershopSettingsInput
    disconnect?: BarbershopWhereInput | boolean
    delete?: BarbershopWhereInput | boolean
    connect?: BarbershopWhereUniqueInput
    update?: XOR<XOR<BarbershopUpdateToOneWithWhereWithoutBarbershopSettingsInput, BarbershopUpdateWithoutBarbershopSettingsInput>, BarbershopUncheckedUpdateWithoutBarbershopSettingsInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BarberCreateWithoutBarbershopInput = {
    name: string
    phone: string
    password: string
    profile?: string | null
    Scheduling?: SchedulingCreateNestedManyWithoutBarberInput
    PushToken?: PushTokenCreateNestedManyWithoutBarberInput
  }

  export type BarberUncheckedCreateWithoutBarbershopInput = {
    id?: number
    name: string
    phone: string
    password: string
    profile?: string | null
    Scheduling?: SchedulingUncheckedCreateNestedManyWithoutBarberInput
    PushToken?: PushTokenUncheckedCreateNestedManyWithoutBarberInput
  }

  export type BarberCreateOrConnectWithoutBarbershopInput = {
    where: BarberWhereUniqueInput
    create: XOR<BarberCreateWithoutBarbershopInput, BarberUncheckedCreateWithoutBarbershopInput>
  }

  export type BarberCreateManyBarbershopInputEnvelope = {
    data: BarberCreateManyBarbershopInput | BarberCreateManyBarbershopInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCreateWithoutBarbershopInput = {
    name: string
    price: number
    duration: number
    description?: string | null
    photo?: string | null
    SchedulingService?: SchedulingServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutBarbershopInput = {
    id?: number
    name: string
    price: number
    duration: number
    description?: string | null
    photo?: string | null
    SchedulingService?: SchedulingServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutBarbershopInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutBarbershopInput, ServiceUncheckedCreateWithoutBarbershopInput>
  }

  export type ServiceCreateManyBarbershopInputEnvelope = {
    data: ServiceCreateManyBarbershopInput | ServiceCreateManyBarbershopInput[]
    skipDuplicates?: boolean
  }

  export type SchedulingCreateWithoutBarbershopInput = {
    date: Date | string
    time: Date | string
    duaration: number
    totalPrice: number
    status: string
    client: ClientCreateNestedOneWithoutSchedulingInput
    barber: BarberCreateNestedOneWithoutSchedulingInput
    SchedulingService?: SchedulingServiceCreateNestedManyWithoutSchedulingInput
  }

  export type SchedulingUncheckedCreateWithoutBarbershopInput = {
    id?: number
    date: Date | string
    time: Date | string
    duaration: number
    clientId: number
    barberId: number
    totalPrice: number
    status: string
    SchedulingService?: SchedulingServiceUncheckedCreateNestedManyWithoutSchedulingInput
  }

  export type SchedulingCreateOrConnectWithoutBarbershopInput = {
    where: SchedulingWhereUniqueInput
    create: XOR<SchedulingCreateWithoutBarbershopInput, SchedulingUncheckedCreateWithoutBarbershopInput>
  }

  export type SchedulingCreateManyBarbershopInputEnvelope = {
    data: SchedulingCreateManyBarbershopInput | SchedulingCreateManyBarbershopInput[]
    skipDuplicates?: boolean
  }

  export type WorkingHoursCreateWithoutBarbershopInput = {
    dayOfWeek: number
    openTime: Date | string
    closeTime: Date | string
    startLunch?: Date | string | null
    endLunch?: Date | string | null
    lunch?: boolean
  }

  export type WorkingHoursUncheckedCreateWithoutBarbershopInput = {
    id?: number
    dayOfWeek: number
    openTime: Date | string
    closeTime: Date | string
    startLunch?: Date | string | null
    endLunch?: Date | string | null
    lunch?: boolean
  }

  export type WorkingHoursCreateOrConnectWithoutBarbershopInput = {
    where: WorkingHoursWhereUniqueInput
    create: XOR<WorkingHoursCreateWithoutBarbershopInput, WorkingHoursUncheckedCreateWithoutBarbershopInput>
  }

  export type WorkingHoursCreateManyBarbershopInputEnvelope = {
    data: WorkingHoursCreateManyBarbershopInput | WorkingHoursCreateManyBarbershopInput[]
    skipDuplicates?: boolean
  }

  export type ClosedDayCreateWithoutBarbershopInput = {
    date: Date | string
    reason?: string | null
  }

  export type ClosedDayUncheckedCreateWithoutBarbershopInput = {
    id?: number
    date: Date | string
    reason?: string | null
  }

  export type ClosedDayCreateOrConnectWithoutBarbershopInput = {
    where: ClosedDayWhereUniqueInput
    create: XOR<ClosedDayCreateWithoutBarbershopInput, ClosedDayUncheckedCreateWithoutBarbershopInput>
  }

  export type ClosedDayCreateManyBarbershopInputEnvelope = {
    data: ClosedDayCreateManyBarbershopInput | ClosedDayCreateManyBarbershopInput[]
    skipDuplicates?: boolean
  }

  export type PushTokenCreateWithoutBarbershopInput = {
    userType: string
    token: string
    barber?: BarberCreateNestedOneWithoutPushTokenInput
    client?: ClientCreateNestedOneWithoutPushTokenInput
  }

  export type PushTokenUncheckedCreateWithoutBarbershopInput = {
    id?: number
    userType: string
    barberId: number
    clientId: number
    token: string
  }

  export type PushTokenCreateOrConnectWithoutBarbershopInput = {
    where: PushTokenWhereUniqueInput
    create: XOR<PushTokenCreateWithoutBarbershopInput, PushTokenUncheckedCreateWithoutBarbershopInput>
  }

  export type PushTokenCreateManyBarbershopInputEnvelope = {
    data: PushTokenCreateManyBarbershopInput | PushTokenCreateManyBarbershopInput[]
    skipDuplicates?: boolean
  }

  export type BarbershopSettingsCreateWithoutBarbershopInput = {
    autoConfirm?: boolean
    reminderTime?: number
    notifyClient?: boolean
    notifyBarber?: boolean
  }

  export type BarbershopSettingsUncheckedCreateWithoutBarbershopInput = {
    id?: number
    autoConfirm?: boolean
    reminderTime?: number
    notifyClient?: boolean
    notifyBarber?: boolean
  }

  export type BarbershopSettingsCreateOrConnectWithoutBarbershopInput = {
    where: BarbershopSettingsWhereUniqueInput
    create: XOR<BarbershopSettingsCreateWithoutBarbershopInput, BarbershopSettingsUncheckedCreateWithoutBarbershopInput>
  }

  export type BarbershopSettingsCreateManyBarbershopInputEnvelope = {
    data: BarbershopSettingsCreateManyBarbershopInput | BarbershopSettingsCreateManyBarbershopInput[]
    skipDuplicates?: boolean
  }

  export type BarberUpsertWithWhereUniqueWithoutBarbershopInput = {
    where: BarberWhereUniqueInput
    update: XOR<BarberUpdateWithoutBarbershopInput, BarberUncheckedUpdateWithoutBarbershopInput>
    create: XOR<BarberCreateWithoutBarbershopInput, BarberUncheckedCreateWithoutBarbershopInput>
  }

  export type BarberUpdateWithWhereUniqueWithoutBarbershopInput = {
    where: BarberWhereUniqueInput
    data: XOR<BarberUpdateWithoutBarbershopInput, BarberUncheckedUpdateWithoutBarbershopInput>
  }

  export type BarberUpdateManyWithWhereWithoutBarbershopInput = {
    where: BarberScalarWhereInput
    data: XOR<BarberUpdateManyMutationInput, BarberUncheckedUpdateManyWithoutBarbershopInput>
  }

  export type BarberScalarWhereInput = {
    AND?: BarberScalarWhereInput | BarberScalarWhereInput[]
    OR?: BarberScalarWhereInput[]
    NOT?: BarberScalarWhereInput | BarberScalarWhereInput[]
    id?: IntFilter<"Barber"> | number
    name?: StringFilter<"Barber"> | string
    phone?: StringFilter<"Barber"> | string
    password?: StringFilter<"Barber"> | string
    profile?: StringNullableFilter<"Barber"> | string | null
    barbershopId?: IntFilter<"Barber"> | number
  }

  export type ServiceUpsertWithWhereUniqueWithoutBarbershopInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutBarbershopInput, ServiceUncheckedUpdateWithoutBarbershopInput>
    create: XOR<ServiceCreateWithoutBarbershopInput, ServiceUncheckedCreateWithoutBarbershopInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutBarbershopInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutBarbershopInput, ServiceUncheckedUpdateWithoutBarbershopInput>
  }

  export type ServiceUpdateManyWithWhereWithoutBarbershopInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutBarbershopInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    price?: FloatFilter<"Service"> | number
    duration?: IntFilter<"Service"> | number
    description?: StringNullableFilter<"Service"> | string | null
    photo?: StringNullableFilter<"Service"> | string | null
    barbershopId?: IntFilter<"Service"> | number
  }

  export type SchedulingUpsertWithWhereUniqueWithoutBarbershopInput = {
    where: SchedulingWhereUniqueInput
    update: XOR<SchedulingUpdateWithoutBarbershopInput, SchedulingUncheckedUpdateWithoutBarbershopInput>
    create: XOR<SchedulingCreateWithoutBarbershopInput, SchedulingUncheckedCreateWithoutBarbershopInput>
  }

  export type SchedulingUpdateWithWhereUniqueWithoutBarbershopInput = {
    where: SchedulingWhereUniqueInput
    data: XOR<SchedulingUpdateWithoutBarbershopInput, SchedulingUncheckedUpdateWithoutBarbershopInput>
  }

  export type SchedulingUpdateManyWithWhereWithoutBarbershopInput = {
    where: SchedulingScalarWhereInput
    data: XOR<SchedulingUpdateManyMutationInput, SchedulingUncheckedUpdateManyWithoutBarbershopInput>
  }

  export type SchedulingScalarWhereInput = {
    AND?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
    OR?: SchedulingScalarWhereInput[]
    NOT?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
    id?: IntFilter<"Scheduling"> | number
    date?: DateTimeFilter<"Scheduling"> | Date | string
    time?: DateTimeFilter<"Scheduling"> | Date | string
    duaration?: IntFilter<"Scheduling"> | number
    clientId?: IntFilter<"Scheduling"> | number
    barberId?: IntFilter<"Scheduling"> | number
    barbershopId?: IntFilter<"Scheduling"> | number
    totalPrice?: FloatFilter<"Scheduling"> | number
    status?: StringFilter<"Scheduling"> | string
  }

  export type WorkingHoursUpsertWithWhereUniqueWithoutBarbershopInput = {
    where: WorkingHoursWhereUniqueInput
    update: XOR<WorkingHoursUpdateWithoutBarbershopInput, WorkingHoursUncheckedUpdateWithoutBarbershopInput>
    create: XOR<WorkingHoursCreateWithoutBarbershopInput, WorkingHoursUncheckedCreateWithoutBarbershopInput>
  }

  export type WorkingHoursUpdateWithWhereUniqueWithoutBarbershopInput = {
    where: WorkingHoursWhereUniqueInput
    data: XOR<WorkingHoursUpdateWithoutBarbershopInput, WorkingHoursUncheckedUpdateWithoutBarbershopInput>
  }

  export type WorkingHoursUpdateManyWithWhereWithoutBarbershopInput = {
    where: WorkingHoursScalarWhereInput
    data: XOR<WorkingHoursUpdateManyMutationInput, WorkingHoursUncheckedUpdateManyWithoutBarbershopInput>
  }

  export type WorkingHoursScalarWhereInput = {
    AND?: WorkingHoursScalarWhereInput | WorkingHoursScalarWhereInput[]
    OR?: WorkingHoursScalarWhereInput[]
    NOT?: WorkingHoursScalarWhereInput | WorkingHoursScalarWhereInput[]
    id?: IntFilter<"WorkingHours"> | number
    dayOfWeek?: IntFilter<"WorkingHours"> | number
    openTime?: DateTimeFilter<"WorkingHours"> | Date | string
    closeTime?: DateTimeFilter<"WorkingHours"> | Date | string
    startLunch?: DateTimeNullableFilter<"WorkingHours"> | Date | string | null
    endLunch?: DateTimeNullableFilter<"WorkingHours"> | Date | string | null
    barbershopId?: IntFilter<"WorkingHours"> | number
    lunch?: BoolFilter<"WorkingHours"> | boolean
  }

  export type ClosedDayUpsertWithWhereUniqueWithoutBarbershopInput = {
    where: ClosedDayWhereUniqueInput
    update: XOR<ClosedDayUpdateWithoutBarbershopInput, ClosedDayUncheckedUpdateWithoutBarbershopInput>
    create: XOR<ClosedDayCreateWithoutBarbershopInput, ClosedDayUncheckedCreateWithoutBarbershopInput>
  }

  export type ClosedDayUpdateWithWhereUniqueWithoutBarbershopInput = {
    where: ClosedDayWhereUniqueInput
    data: XOR<ClosedDayUpdateWithoutBarbershopInput, ClosedDayUncheckedUpdateWithoutBarbershopInput>
  }

  export type ClosedDayUpdateManyWithWhereWithoutBarbershopInput = {
    where: ClosedDayScalarWhereInput
    data: XOR<ClosedDayUpdateManyMutationInput, ClosedDayUncheckedUpdateManyWithoutBarbershopInput>
  }

  export type ClosedDayScalarWhereInput = {
    AND?: ClosedDayScalarWhereInput | ClosedDayScalarWhereInput[]
    OR?: ClosedDayScalarWhereInput[]
    NOT?: ClosedDayScalarWhereInput | ClosedDayScalarWhereInput[]
    id?: IntFilter<"ClosedDay"> | number
    date?: DateTimeFilter<"ClosedDay"> | Date | string
    reason?: StringNullableFilter<"ClosedDay"> | string | null
    barbershopId?: IntFilter<"ClosedDay"> | number
  }

  export type PushTokenUpsertWithWhereUniqueWithoutBarbershopInput = {
    where: PushTokenWhereUniqueInput
    update: XOR<PushTokenUpdateWithoutBarbershopInput, PushTokenUncheckedUpdateWithoutBarbershopInput>
    create: XOR<PushTokenCreateWithoutBarbershopInput, PushTokenUncheckedCreateWithoutBarbershopInput>
  }

  export type PushTokenUpdateWithWhereUniqueWithoutBarbershopInput = {
    where: PushTokenWhereUniqueInput
    data: XOR<PushTokenUpdateWithoutBarbershopInput, PushTokenUncheckedUpdateWithoutBarbershopInput>
  }

  export type PushTokenUpdateManyWithWhereWithoutBarbershopInput = {
    where: PushTokenScalarWhereInput
    data: XOR<PushTokenUpdateManyMutationInput, PushTokenUncheckedUpdateManyWithoutBarbershopInput>
  }

  export type PushTokenScalarWhereInput = {
    AND?: PushTokenScalarWhereInput | PushTokenScalarWhereInput[]
    OR?: PushTokenScalarWhereInput[]
    NOT?: PushTokenScalarWhereInput | PushTokenScalarWhereInput[]
    id?: IntFilter<"PushToken"> | number
    userType?: StringFilter<"PushToken"> | string
    barberId?: IntFilter<"PushToken"> | number
    clientId?: IntFilter<"PushToken"> | number
    barbershopId?: IntFilter<"PushToken"> | number
    token?: StringFilter<"PushToken"> | string
  }

  export type BarbershopSettingsUpsertWithWhereUniqueWithoutBarbershopInput = {
    where: BarbershopSettingsWhereUniqueInput
    update: XOR<BarbershopSettingsUpdateWithoutBarbershopInput, BarbershopSettingsUncheckedUpdateWithoutBarbershopInput>
    create: XOR<BarbershopSettingsCreateWithoutBarbershopInput, BarbershopSettingsUncheckedCreateWithoutBarbershopInput>
  }

  export type BarbershopSettingsUpdateWithWhereUniqueWithoutBarbershopInput = {
    where: BarbershopSettingsWhereUniqueInput
    data: XOR<BarbershopSettingsUpdateWithoutBarbershopInput, BarbershopSettingsUncheckedUpdateWithoutBarbershopInput>
  }

  export type BarbershopSettingsUpdateManyWithWhereWithoutBarbershopInput = {
    where: BarbershopSettingsScalarWhereInput
    data: XOR<BarbershopSettingsUpdateManyMutationInput, BarbershopSettingsUncheckedUpdateManyWithoutBarbershopInput>
  }

  export type BarbershopSettingsScalarWhereInput = {
    AND?: BarbershopSettingsScalarWhereInput | BarbershopSettingsScalarWhereInput[]
    OR?: BarbershopSettingsScalarWhereInput[]
    NOT?: BarbershopSettingsScalarWhereInput | BarbershopSettingsScalarWhereInput[]
    id?: IntFilter<"BarbershopSettings"> | number
    autoConfirm?: BoolFilter<"BarbershopSettings"> | boolean
    reminderTime?: IntFilter<"BarbershopSettings"> | number
    notifyClient?: BoolFilter<"BarbershopSettings"> | boolean
    notifyBarber?: BoolFilter<"BarbershopSettings"> | boolean
    barbershopId?: IntFilter<"BarbershopSettings"> | number
  }

  export type BarbershopCreateWithoutBarberInput = {
    name: string
    email: string
    phone: string
    logo?: string | null
    address: string
    intagram?: string | null
    facebook?: string | null
    password: string
    Service?: ServiceCreateNestedManyWithoutBarbershopInput
    Scheduling?: SchedulingCreateNestedManyWithoutBarbershopInput
    WorkingHours?: WorkingHoursCreateNestedManyWithoutBarbershopInput
    ClosedDay?: ClosedDayCreateNestedManyWithoutBarbershopInput
    PushToken?: PushTokenCreateNestedManyWithoutBarbershopInput
    BarbershopSettings?: BarbershopSettingsCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopUncheckedCreateWithoutBarberInput = {
    id?: number
    name: string
    email: string
    phone: string
    logo?: string | null
    address: string
    intagram?: string | null
    facebook?: string | null
    password: string
    Service?: ServiceUncheckedCreateNestedManyWithoutBarbershopInput
    Scheduling?: SchedulingUncheckedCreateNestedManyWithoutBarbershopInput
    WorkingHours?: WorkingHoursUncheckedCreateNestedManyWithoutBarbershopInput
    ClosedDay?: ClosedDayUncheckedCreateNestedManyWithoutBarbershopInput
    PushToken?: PushTokenUncheckedCreateNestedManyWithoutBarbershopInput
    BarbershopSettings?: BarbershopSettingsUncheckedCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopCreateOrConnectWithoutBarberInput = {
    where: BarbershopWhereUniqueInput
    create: XOR<BarbershopCreateWithoutBarberInput, BarbershopUncheckedCreateWithoutBarberInput>
  }

  export type SchedulingCreateWithoutBarberInput = {
    date: Date | string
    time: Date | string
    duaration: number
    totalPrice: number
    status: string
    client: ClientCreateNestedOneWithoutSchedulingInput
    barbershop: BarbershopCreateNestedOneWithoutSchedulingInput
    SchedulingService?: SchedulingServiceCreateNestedManyWithoutSchedulingInput
  }

  export type SchedulingUncheckedCreateWithoutBarberInput = {
    id?: number
    date: Date | string
    time: Date | string
    duaration: number
    clientId: number
    barbershopId: number
    totalPrice: number
    status: string
    SchedulingService?: SchedulingServiceUncheckedCreateNestedManyWithoutSchedulingInput
  }

  export type SchedulingCreateOrConnectWithoutBarberInput = {
    where: SchedulingWhereUniqueInput
    create: XOR<SchedulingCreateWithoutBarberInput, SchedulingUncheckedCreateWithoutBarberInput>
  }

  export type SchedulingCreateManyBarberInputEnvelope = {
    data: SchedulingCreateManyBarberInput | SchedulingCreateManyBarberInput[]
    skipDuplicates?: boolean
  }

  export type PushTokenCreateWithoutBarberInput = {
    userType: string
    token: string
    client?: ClientCreateNestedOneWithoutPushTokenInput
    barbershop?: BarbershopCreateNestedOneWithoutPushTokenInput
  }

  export type PushTokenUncheckedCreateWithoutBarberInput = {
    id?: number
    userType: string
    clientId: number
    barbershopId: number
    token: string
  }

  export type PushTokenCreateOrConnectWithoutBarberInput = {
    where: PushTokenWhereUniqueInput
    create: XOR<PushTokenCreateWithoutBarberInput, PushTokenUncheckedCreateWithoutBarberInput>
  }

  export type PushTokenCreateManyBarberInputEnvelope = {
    data: PushTokenCreateManyBarberInput | PushTokenCreateManyBarberInput[]
    skipDuplicates?: boolean
  }

  export type BarbershopUpsertWithoutBarberInput = {
    update: XOR<BarbershopUpdateWithoutBarberInput, BarbershopUncheckedUpdateWithoutBarberInput>
    create: XOR<BarbershopCreateWithoutBarberInput, BarbershopUncheckedCreateWithoutBarberInput>
    where?: BarbershopWhereInput
  }

  export type BarbershopUpdateToOneWithWhereWithoutBarberInput = {
    where?: BarbershopWhereInput
    data: XOR<BarbershopUpdateWithoutBarberInput, BarbershopUncheckedUpdateWithoutBarberInput>
  }

  export type BarbershopUpdateWithoutBarberInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    intagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Service?: ServiceUpdateManyWithoutBarbershopNestedInput
    Scheduling?: SchedulingUpdateManyWithoutBarbershopNestedInput
    WorkingHours?: WorkingHoursUpdateManyWithoutBarbershopNestedInput
    ClosedDay?: ClosedDayUpdateManyWithoutBarbershopNestedInput
    PushToken?: PushTokenUpdateManyWithoutBarbershopNestedInput
    BarbershopSettings?: BarbershopSettingsUpdateManyWithoutBarbershopNestedInput
  }

  export type BarbershopUncheckedUpdateWithoutBarberInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    intagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Service?: ServiceUncheckedUpdateManyWithoutBarbershopNestedInput
    Scheduling?: SchedulingUncheckedUpdateManyWithoutBarbershopNestedInput
    WorkingHours?: WorkingHoursUncheckedUpdateManyWithoutBarbershopNestedInput
    ClosedDay?: ClosedDayUncheckedUpdateManyWithoutBarbershopNestedInput
    PushToken?: PushTokenUncheckedUpdateManyWithoutBarbershopNestedInput
    BarbershopSettings?: BarbershopSettingsUncheckedUpdateManyWithoutBarbershopNestedInput
  }

  export type SchedulingUpsertWithWhereUniqueWithoutBarberInput = {
    where: SchedulingWhereUniqueInput
    update: XOR<SchedulingUpdateWithoutBarberInput, SchedulingUncheckedUpdateWithoutBarberInput>
    create: XOR<SchedulingCreateWithoutBarberInput, SchedulingUncheckedCreateWithoutBarberInput>
  }

  export type SchedulingUpdateWithWhereUniqueWithoutBarberInput = {
    where: SchedulingWhereUniqueInput
    data: XOR<SchedulingUpdateWithoutBarberInput, SchedulingUncheckedUpdateWithoutBarberInput>
  }

  export type SchedulingUpdateManyWithWhereWithoutBarberInput = {
    where: SchedulingScalarWhereInput
    data: XOR<SchedulingUpdateManyMutationInput, SchedulingUncheckedUpdateManyWithoutBarberInput>
  }

  export type PushTokenUpsertWithWhereUniqueWithoutBarberInput = {
    where: PushTokenWhereUniqueInput
    update: XOR<PushTokenUpdateWithoutBarberInput, PushTokenUncheckedUpdateWithoutBarberInput>
    create: XOR<PushTokenCreateWithoutBarberInput, PushTokenUncheckedCreateWithoutBarberInput>
  }

  export type PushTokenUpdateWithWhereUniqueWithoutBarberInput = {
    where: PushTokenWhereUniqueInput
    data: XOR<PushTokenUpdateWithoutBarberInput, PushTokenUncheckedUpdateWithoutBarberInput>
  }

  export type PushTokenUpdateManyWithWhereWithoutBarberInput = {
    where: PushTokenScalarWhereInput
    data: XOR<PushTokenUpdateManyMutationInput, PushTokenUncheckedUpdateManyWithoutBarberInput>
  }

  export type SchedulingCreateWithoutClientInput = {
    date: Date | string
    time: Date | string
    duaration: number
    totalPrice: number
    status: string
    barber: BarberCreateNestedOneWithoutSchedulingInput
    barbershop: BarbershopCreateNestedOneWithoutSchedulingInput
    SchedulingService?: SchedulingServiceCreateNestedManyWithoutSchedulingInput
  }

  export type SchedulingUncheckedCreateWithoutClientInput = {
    id?: number
    date: Date | string
    time: Date | string
    duaration: number
    barberId: number
    barbershopId: number
    totalPrice: number
    status: string
    SchedulingService?: SchedulingServiceUncheckedCreateNestedManyWithoutSchedulingInput
  }

  export type SchedulingCreateOrConnectWithoutClientInput = {
    where: SchedulingWhereUniqueInput
    create: XOR<SchedulingCreateWithoutClientInput, SchedulingUncheckedCreateWithoutClientInput>
  }

  export type SchedulingCreateManyClientInputEnvelope = {
    data: SchedulingCreateManyClientInput | SchedulingCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type PushTokenCreateWithoutClientInput = {
    userType: string
    token: string
    barber?: BarberCreateNestedOneWithoutPushTokenInput
    barbershop?: BarbershopCreateNestedOneWithoutPushTokenInput
  }

  export type PushTokenUncheckedCreateWithoutClientInput = {
    id?: number
    userType: string
    barberId: number
    barbershopId: number
    token: string
  }

  export type PushTokenCreateOrConnectWithoutClientInput = {
    where: PushTokenWhereUniqueInput
    create: XOR<PushTokenCreateWithoutClientInput, PushTokenUncheckedCreateWithoutClientInput>
  }

  export type PushTokenCreateManyClientInputEnvelope = {
    data: PushTokenCreateManyClientInput | PushTokenCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type SchedulingUpsertWithWhereUniqueWithoutClientInput = {
    where: SchedulingWhereUniqueInput
    update: XOR<SchedulingUpdateWithoutClientInput, SchedulingUncheckedUpdateWithoutClientInput>
    create: XOR<SchedulingCreateWithoutClientInput, SchedulingUncheckedCreateWithoutClientInput>
  }

  export type SchedulingUpdateWithWhereUniqueWithoutClientInput = {
    where: SchedulingWhereUniqueInput
    data: XOR<SchedulingUpdateWithoutClientInput, SchedulingUncheckedUpdateWithoutClientInput>
  }

  export type SchedulingUpdateManyWithWhereWithoutClientInput = {
    where: SchedulingScalarWhereInput
    data: XOR<SchedulingUpdateManyMutationInput, SchedulingUncheckedUpdateManyWithoutClientInput>
  }

  export type PushTokenUpsertWithWhereUniqueWithoutClientInput = {
    where: PushTokenWhereUniqueInput
    update: XOR<PushTokenUpdateWithoutClientInput, PushTokenUncheckedUpdateWithoutClientInput>
    create: XOR<PushTokenCreateWithoutClientInput, PushTokenUncheckedCreateWithoutClientInput>
  }

  export type PushTokenUpdateWithWhereUniqueWithoutClientInput = {
    where: PushTokenWhereUniqueInput
    data: XOR<PushTokenUpdateWithoutClientInput, PushTokenUncheckedUpdateWithoutClientInput>
  }

  export type PushTokenUpdateManyWithWhereWithoutClientInput = {
    where: PushTokenScalarWhereInput
    data: XOR<PushTokenUpdateManyMutationInput, PushTokenUncheckedUpdateManyWithoutClientInput>
  }

  export type BarbershopCreateWithoutServiceInput = {
    name: string
    email: string
    phone: string
    logo?: string | null
    address: string
    intagram?: string | null
    facebook?: string | null
    password: string
    Barber?: BarberCreateNestedManyWithoutBarbershopInput
    Scheduling?: SchedulingCreateNestedManyWithoutBarbershopInput
    WorkingHours?: WorkingHoursCreateNestedManyWithoutBarbershopInput
    ClosedDay?: ClosedDayCreateNestedManyWithoutBarbershopInput
    PushToken?: PushTokenCreateNestedManyWithoutBarbershopInput
    BarbershopSettings?: BarbershopSettingsCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopUncheckedCreateWithoutServiceInput = {
    id?: number
    name: string
    email: string
    phone: string
    logo?: string | null
    address: string
    intagram?: string | null
    facebook?: string | null
    password: string
    Barber?: BarberUncheckedCreateNestedManyWithoutBarbershopInput
    Scheduling?: SchedulingUncheckedCreateNestedManyWithoutBarbershopInput
    WorkingHours?: WorkingHoursUncheckedCreateNestedManyWithoutBarbershopInput
    ClosedDay?: ClosedDayUncheckedCreateNestedManyWithoutBarbershopInput
    PushToken?: PushTokenUncheckedCreateNestedManyWithoutBarbershopInput
    BarbershopSettings?: BarbershopSettingsUncheckedCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopCreateOrConnectWithoutServiceInput = {
    where: BarbershopWhereUniqueInput
    create: XOR<BarbershopCreateWithoutServiceInput, BarbershopUncheckedCreateWithoutServiceInput>
  }

  export type SchedulingServiceCreateWithoutServiceInput = {
    scheduling: SchedulingCreateNestedOneWithoutSchedulingServiceInput
  }

  export type SchedulingServiceUncheckedCreateWithoutServiceInput = {
    id?: number
    schedulingId: number
  }

  export type SchedulingServiceCreateOrConnectWithoutServiceInput = {
    where: SchedulingServiceWhereUniqueInput
    create: XOR<SchedulingServiceCreateWithoutServiceInput, SchedulingServiceUncheckedCreateWithoutServiceInput>
  }

  export type SchedulingServiceCreateManyServiceInputEnvelope = {
    data: SchedulingServiceCreateManyServiceInput | SchedulingServiceCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type BarbershopUpsertWithoutServiceInput = {
    update: XOR<BarbershopUpdateWithoutServiceInput, BarbershopUncheckedUpdateWithoutServiceInput>
    create: XOR<BarbershopCreateWithoutServiceInput, BarbershopUncheckedCreateWithoutServiceInput>
    where?: BarbershopWhereInput
  }

  export type BarbershopUpdateToOneWithWhereWithoutServiceInput = {
    where?: BarbershopWhereInput
    data: XOR<BarbershopUpdateWithoutServiceInput, BarbershopUncheckedUpdateWithoutServiceInput>
  }

  export type BarbershopUpdateWithoutServiceInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    intagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Barber?: BarberUpdateManyWithoutBarbershopNestedInput
    Scheduling?: SchedulingUpdateManyWithoutBarbershopNestedInput
    WorkingHours?: WorkingHoursUpdateManyWithoutBarbershopNestedInput
    ClosedDay?: ClosedDayUpdateManyWithoutBarbershopNestedInput
    PushToken?: PushTokenUpdateManyWithoutBarbershopNestedInput
    BarbershopSettings?: BarbershopSettingsUpdateManyWithoutBarbershopNestedInput
  }

  export type BarbershopUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    intagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Barber?: BarberUncheckedUpdateManyWithoutBarbershopNestedInput
    Scheduling?: SchedulingUncheckedUpdateManyWithoutBarbershopNestedInput
    WorkingHours?: WorkingHoursUncheckedUpdateManyWithoutBarbershopNestedInput
    ClosedDay?: ClosedDayUncheckedUpdateManyWithoutBarbershopNestedInput
    PushToken?: PushTokenUncheckedUpdateManyWithoutBarbershopNestedInput
    BarbershopSettings?: BarbershopSettingsUncheckedUpdateManyWithoutBarbershopNestedInput
  }

  export type SchedulingServiceUpsertWithWhereUniqueWithoutServiceInput = {
    where: SchedulingServiceWhereUniqueInput
    update: XOR<SchedulingServiceUpdateWithoutServiceInput, SchedulingServiceUncheckedUpdateWithoutServiceInput>
    create: XOR<SchedulingServiceCreateWithoutServiceInput, SchedulingServiceUncheckedCreateWithoutServiceInput>
  }

  export type SchedulingServiceUpdateWithWhereUniqueWithoutServiceInput = {
    where: SchedulingServiceWhereUniqueInput
    data: XOR<SchedulingServiceUpdateWithoutServiceInput, SchedulingServiceUncheckedUpdateWithoutServiceInput>
  }

  export type SchedulingServiceUpdateManyWithWhereWithoutServiceInput = {
    where: SchedulingServiceScalarWhereInput
    data: XOR<SchedulingServiceUpdateManyMutationInput, SchedulingServiceUncheckedUpdateManyWithoutServiceInput>
  }

  export type SchedulingServiceScalarWhereInput = {
    AND?: SchedulingServiceScalarWhereInput | SchedulingServiceScalarWhereInput[]
    OR?: SchedulingServiceScalarWhereInput[]
    NOT?: SchedulingServiceScalarWhereInput | SchedulingServiceScalarWhereInput[]
    id?: IntFilter<"SchedulingService"> | number
    schedulingId?: IntFilter<"SchedulingService"> | number
    serviceId?: IntFilter<"SchedulingService"> | number
  }

  export type ClientCreateWithoutSchedulingInput = {
    name: string
    phone: string
    PushToken?: PushTokenCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutSchedulingInput = {
    id?: number
    name: string
    phone: string
    PushToken?: PushTokenUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutSchedulingInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutSchedulingInput, ClientUncheckedCreateWithoutSchedulingInput>
  }

  export type BarberCreateWithoutSchedulingInput = {
    name: string
    phone: string
    password: string
    profile?: string | null
    barbershop: BarbershopCreateNestedOneWithoutBarberInput
    PushToken?: PushTokenCreateNestedManyWithoutBarberInput
  }

  export type BarberUncheckedCreateWithoutSchedulingInput = {
    id?: number
    name: string
    phone: string
    password: string
    profile?: string | null
    barbershopId: number
    PushToken?: PushTokenUncheckedCreateNestedManyWithoutBarberInput
  }

  export type BarberCreateOrConnectWithoutSchedulingInput = {
    where: BarberWhereUniqueInput
    create: XOR<BarberCreateWithoutSchedulingInput, BarberUncheckedCreateWithoutSchedulingInput>
  }

  export type BarbershopCreateWithoutSchedulingInput = {
    name: string
    email: string
    phone: string
    logo?: string | null
    address: string
    intagram?: string | null
    facebook?: string | null
    password: string
    Barber?: BarberCreateNestedManyWithoutBarbershopInput
    Service?: ServiceCreateNestedManyWithoutBarbershopInput
    WorkingHours?: WorkingHoursCreateNestedManyWithoutBarbershopInput
    ClosedDay?: ClosedDayCreateNestedManyWithoutBarbershopInput
    PushToken?: PushTokenCreateNestedManyWithoutBarbershopInput
    BarbershopSettings?: BarbershopSettingsCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopUncheckedCreateWithoutSchedulingInput = {
    id?: number
    name: string
    email: string
    phone: string
    logo?: string | null
    address: string
    intagram?: string | null
    facebook?: string | null
    password: string
    Barber?: BarberUncheckedCreateNestedManyWithoutBarbershopInput
    Service?: ServiceUncheckedCreateNestedManyWithoutBarbershopInput
    WorkingHours?: WorkingHoursUncheckedCreateNestedManyWithoutBarbershopInput
    ClosedDay?: ClosedDayUncheckedCreateNestedManyWithoutBarbershopInput
    PushToken?: PushTokenUncheckedCreateNestedManyWithoutBarbershopInput
    BarbershopSettings?: BarbershopSettingsUncheckedCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopCreateOrConnectWithoutSchedulingInput = {
    where: BarbershopWhereUniqueInput
    create: XOR<BarbershopCreateWithoutSchedulingInput, BarbershopUncheckedCreateWithoutSchedulingInput>
  }

  export type SchedulingServiceCreateWithoutSchedulingInput = {
    service: ServiceCreateNestedOneWithoutSchedulingServiceInput
  }

  export type SchedulingServiceUncheckedCreateWithoutSchedulingInput = {
    id?: number
    serviceId: number
  }

  export type SchedulingServiceCreateOrConnectWithoutSchedulingInput = {
    where: SchedulingServiceWhereUniqueInput
    create: XOR<SchedulingServiceCreateWithoutSchedulingInput, SchedulingServiceUncheckedCreateWithoutSchedulingInput>
  }

  export type SchedulingServiceCreateManySchedulingInputEnvelope = {
    data: SchedulingServiceCreateManySchedulingInput | SchedulingServiceCreateManySchedulingInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutSchedulingInput = {
    update: XOR<ClientUpdateWithoutSchedulingInput, ClientUncheckedUpdateWithoutSchedulingInput>
    create: XOR<ClientCreateWithoutSchedulingInput, ClientUncheckedCreateWithoutSchedulingInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutSchedulingInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutSchedulingInput, ClientUncheckedUpdateWithoutSchedulingInput>
  }

  export type ClientUpdateWithoutSchedulingInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    PushToken?: PushTokenUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutSchedulingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    PushToken?: PushTokenUncheckedUpdateManyWithoutClientNestedInput
  }

  export type BarberUpsertWithoutSchedulingInput = {
    update: XOR<BarberUpdateWithoutSchedulingInput, BarberUncheckedUpdateWithoutSchedulingInput>
    create: XOR<BarberCreateWithoutSchedulingInput, BarberUncheckedCreateWithoutSchedulingInput>
    where?: BarberWhereInput
  }

  export type BarberUpdateToOneWithWhereWithoutSchedulingInput = {
    where?: BarberWhereInput
    data: XOR<BarberUpdateWithoutSchedulingInput, BarberUncheckedUpdateWithoutSchedulingInput>
  }

  export type BarberUpdateWithoutSchedulingInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    barbershop?: BarbershopUpdateOneRequiredWithoutBarberNestedInput
    PushToken?: PushTokenUpdateManyWithoutBarberNestedInput
  }

  export type BarberUncheckedUpdateWithoutSchedulingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    barbershopId?: IntFieldUpdateOperationsInput | number
    PushToken?: PushTokenUncheckedUpdateManyWithoutBarberNestedInput
  }

  export type BarbershopUpsertWithoutSchedulingInput = {
    update: XOR<BarbershopUpdateWithoutSchedulingInput, BarbershopUncheckedUpdateWithoutSchedulingInput>
    create: XOR<BarbershopCreateWithoutSchedulingInput, BarbershopUncheckedCreateWithoutSchedulingInput>
    where?: BarbershopWhereInput
  }

  export type BarbershopUpdateToOneWithWhereWithoutSchedulingInput = {
    where?: BarbershopWhereInput
    data: XOR<BarbershopUpdateWithoutSchedulingInput, BarbershopUncheckedUpdateWithoutSchedulingInput>
  }

  export type BarbershopUpdateWithoutSchedulingInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    intagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Barber?: BarberUpdateManyWithoutBarbershopNestedInput
    Service?: ServiceUpdateManyWithoutBarbershopNestedInput
    WorkingHours?: WorkingHoursUpdateManyWithoutBarbershopNestedInput
    ClosedDay?: ClosedDayUpdateManyWithoutBarbershopNestedInput
    PushToken?: PushTokenUpdateManyWithoutBarbershopNestedInput
    BarbershopSettings?: BarbershopSettingsUpdateManyWithoutBarbershopNestedInput
  }

  export type BarbershopUncheckedUpdateWithoutSchedulingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    intagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Barber?: BarberUncheckedUpdateManyWithoutBarbershopNestedInput
    Service?: ServiceUncheckedUpdateManyWithoutBarbershopNestedInput
    WorkingHours?: WorkingHoursUncheckedUpdateManyWithoutBarbershopNestedInput
    ClosedDay?: ClosedDayUncheckedUpdateManyWithoutBarbershopNestedInput
    PushToken?: PushTokenUncheckedUpdateManyWithoutBarbershopNestedInput
    BarbershopSettings?: BarbershopSettingsUncheckedUpdateManyWithoutBarbershopNestedInput
  }

  export type SchedulingServiceUpsertWithWhereUniqueWithoutSchedulingInput = {
    where: SchedulingServiceWhereUniqueInput
    update: XOR<SchedulingServiceUpdateWithoutSchedulingInput, SchedulingServiceUncheckedUpdateWithoutSchedulingInput>
    create: XOR<SchedulingServiceCreateWithoutSchedulingInput, SchedulingServiceUncheckedCreateWithoutSchedulingInput>
  }

  export type SchedulingServiceUpdateWithWhereUniqueWithoutSchedulingInput = {
    where: SchedulingServiceWhereUniqueInput
    data: XOR<SchedulingServiceUpdateWithoutSchedulingInput, SchedulingServiceUncheckedUpdateWithoutSchedulingInput>
  }

  export type SchedulingServiceUpdateManyWithWhereWithoutSchedulingInput = {
    where: SchedulingServiceScalarWhereInput
    data: XOR<SchedulingServiceUpdateManyMutationInput, SchedulingServiceUncheckedUpdateManyWithoutSchedulingInput>
  }

  export type SchedulingCreateWithoutSchedulingServiceInput = {
    date: Date | string
    time: Date | string
    duaration: number
    totalPrice: number
    status: string
    client: ClientCreateNestedOneWithoutSchedulingInput
    barber: BarberCreateNestedOneWithoutSchedulingInput
    barbershop: BarbershopCreateNestedOneWithoutSchedulingInput
  }

  export type SchedulingUncheckedCreateWithoutSchedulingServiceInput = {
    id?: number
    date: Date | string
    time: Date | string
    duaration: number
    clientId: number
    barberId: number
    barbershopId: number
    totalPrice: number
    status: string
  }

  export type SchedulingCreateOrConnectWithoutSchedulingServiceInput = {
    where: SchedulingWhereUniqueInput
    create: XOR<SchedulingCreateWithoutSchedulingServiceInput, SchedulingUncheckedCreateWithoutSchedulingServiceInput>
  }

  export type ServiceCreateWithoutSchedulingServiceInput = {
    name: string
    price: number
    duration: number
    description?: string | null
    photo?: string | null
    barbershop: BarbershopCreateNestedOneWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutSchedulingServiceInput = {
    id?: number
    name: string
    price: number
    duration: number
    description?: string | null
    photo?: string | null
    barbershopId: number
  }

  export type ServiceCreateOrConnectWithoutSchedulingServiceInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutSchedulingServiceInput, ServiceUncheckedCreateWithoutSchedulingServiceInput>
  }

  export type SchedulingUpsertWithoutSchedulingServiceInput = {
    update: XOR<SchedulingUpdateWithoutSchedulingServiceInput, SchedulingUncheckedUpdateWithoutSchedulingServiceInput>
    create: XOR<SchedulingCreateWithoutSchedulingServiceInput, SchedulingUncheckedCreateWithoutSchedulingServiceInput>
    where?: SchedulingWhereInput
  }

  export type SchedulingUpdateToOneWithWhereWithoutSchedulingServiceInput = {
    where?: SchedulingWhereInput
    data: XOR<SchedulingUpdateWithoutSchedulingServiceInput, SchedulingUncheckedUpdateWithoutSchedulingServiceInput>
  }

  export type SchedulingUpdateWithoutSchedulingServiceInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    duaration?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutSchedulingNestedInput
    barber?: BarberUpdateOneRequiredWithoutSchedulingNestedInput
    barbershop?: BarbershopUpdateOneRequiredWithoutSchedulingNestedInput
  }

  export type SchedulingUncheckedUpdateWithoutSchedulingServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    duaration?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    barberId?: IntFieldUpdateOperationsInput | number
    barbershopId?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceUpsertWithoutSchedulingServiceInput = {
    update: XOR<ServiceUpdateWithoutSchedulingServiceInput, ServiceUncheckedUpdateWithoutSchedulingServiceInput>
    create: XOR<ServiceCreateWithoutSchedulingServiceInput, ServiceUncheckedCreateWithoutSchedulingServiceInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutSchedulingServiceInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutSchedulingServiceInput, ServiceUncheckedUpdateWithoutSchedulingServiceInput>
  }

  export type ServiceUpdateWithoutSchedulingServiceInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    barbershop?: BarbershopUpdateOneRequiredWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutSchedulingServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    barbershopId?: IntFieldUpdateOperationsInput | number
  }

  export type BarbershopCreateWithoutWorkingHoursInput = {
    name: string
    email: string
    phone: string
    logo?: string | null
    address: string
    intagram?: string | null
    facebook?: string | null
    password: string
    Barber?: BarberCreateNestedManyWithoutBarbershopInput
    Service?: ServiceCreateNestedManyWithoutBarbershopInput
    Scheduling?: SchedulingCreateNestedManyWithoutBarbershopInput
    ClosedDay?: ClosedDayCreateNestedManyWithoutBarbershopInput
    PushToken?: PushTokenCreateNestedManyWithoutBarbershopInput
    BarbershopSettings?: BarbershopSettingsCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopUncheckedCreateWithoutWorkingHoursInput = {
    id?: number
    name: string
    email: string
    phone: string
    logo?: string | null
    address: string
    intagram?: string | null
    facebook?: string | null
    password: string
    Barber?: BarberUncheckedCreateNestedManyWithoutBarbershopInput
    Service?: ServiceUncheckedCreateNestedManyWithoutBarbershopInput
    Scheduling?: SchedulingUncheckedCreateNestedManyWithoutBarbershopInput
    ClosedDay?: ClosedDayUncheckedCreateNestedManyWithoutBarbershopInput
    PushToken?: PushTokenUncheckedCreateNestedManyWithoutBarbershopInput
    BarbershopSettings?: BarbershopSettingsUncheckedCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopCreateOrConnectWithoutWorkingHoursInput = {
    where: BarbershopWhereUniqueInput
    create: XOR<BarbershopCreateWithoutWorkingHoursInput, BarbershopUncheckedCreateWithoutWorkingHoursInput>
  }

  export type BarbershopUpsertWithoutWorkingHoursInput = {
    update: XOR<BarbershopUpdateWithoutWorkingHoursInput, BarbershopUncheckedUpdateWithoutWorkingHoursInput>
    create: XOR<BarbershopCreateWithoutWorkingHoursInput, BarbershopUncheckedCreateWithoutWorkingHoursInput>
    where?: BarbershopWhereInput
  }

  export type BarbershopUpdateToOneWithWhereWithoutWorkingHoursInput = {
    where?: BarbershopWhereInput
    data: XOR<BarbershopUpdateWithoutWorkingHoursInput, BarbershopUncheckedUpdateWithoutWorkingHoursInput>
  }

  export type BarbershopUpdateWithoutWorkingHoursInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    intagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Barber?: BarberUpdateManyWithoutBarbershopNestedInput
    Service?: ServiceUpdateManyWithoutBarbershopNestedInput
    Scheduling?: SchedulingUpdateManyWithoutBarbershopNestedInput
    ClosedDay?: ClosedDayUpdateManyWithoutBarbershopNestedInput
    PushToken?: PushTokenUpdateManyWithoutBarbershopNestedInput
    BarbershopSettings?: BarbershopSettingsUpdateManyWithoutBarbershopNestedInput
  }

  export type BarbershopUncheckedUpdateWithoutWorkingHoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    intagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Barber?: BarberUncheckedUpdateManyWithoutBarbershopNestedInput
    Service?: ServiceUncheckedUpdateManyWithoutBarbershopNestedInput
    Scheduling?: SchedulingUncheckedUpdateManyWithoutBarbershopNestedInput
    ClosedDay?: ClosedDayUncheckedUpdateManyWithoutBarbershopNestedInput
    PushToken?: PushTokenUncheckedUpdateManyWithoutBarbershopNestedInput
    BarbershopSettings?: BarbershopSettingsUncheckedUpdateManyWithoutBarbershopNestedInput
  }

  export type BarbershopCreateWithoutClosedDayInput = {
    name: string
    email: string
    phone: string
    logo?: string | null
    address: string
    intagram?: string | null
    facebook?: string | null
    password: string
    Barber?: BarberCreateNestedManyWithoutBarbershopInput
    Service?: ServiceCreateNestedManyWithoutBarbershopInput
    Scheduling?: SchedulingCreateNestedManyWithoutBarbershopInput
    WorkingHours?: WorkingHoursCreateNestedManyWithoutBarbershopInput
    PushToken?: PushTokenCreateNestedManyWithoutBarbershopInput
    BarbershopSettings?: BarbershopSettingsCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopUncheckedCreateWithoutClosedDayInput = {
    id?: number
    name: string
    email: string
    phone: string
    logo?: string | null
    address: string
    intagram?: string | null
    facebook?: string | null
    password: string
    Barber?: BarberUncheckedCreateNestedManyWithoutBarbershopInput
    Service?: ServiceUncheckedCreateNestedManyWithoutBarbershopInput
    Scheduling?: SchedulingUncheckedCreateNestedManyWithoutBarbershopInput
    WorkingHours?: WorkingHoursUncheckedCreateNestedManyWithoutBarbershopInput
    PushToken?: PushTokenUncheckedCreateNestedManyWithoutBarbershopInput
    BarbershopSettings?: BarbershopSettingsUncheckedCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopCreateOrConnectWithoutClosedDayInput = {
    where: BarbershopWhereUniqueInput
    create: XOR<BarbershopCreateWithoutClosedDayInput, BarbershopUncheckedCreateWithoutClosedDayInput>
  }

  export type BarbershopUpsertWithoutClosedDayInput = {
    update: XOR<BarbershopUpdateWithoutClosedDayInput, BarbershopUncheckedUpdateWithoutClosedDayInput>
    create: XOR<BarbershopCreateWithoutClosedDayInput, BarbershopUncheckedCreateWithoutClosedDayInput>
    where?: BarbershopWhereInput
  }

  export type BarbershopUpdateToOneWithWhereWithoutClosedDayInput = {
    where?: BarbershopWhereInput
    data: XOR<BarbershopUpdateWithoutClosedDayInput, BarbershopUncheckedUpdateWithoutClosedDayInput>
  }

  export type BarbershopUpdateWithoutClosedDayInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    intagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Barber?: BarberUpdateManyWithoutBarbershopNestedInput
    Service?: ServiceUpdateManyWithoutBarbershopNestedInput
    Scheduling?: SchedulingUpdateManyWithoutBarbershopNestedInput
    WorkingHours?: WorkingHoursUpdateManyWithoutBarbershopNestedInput
    PushToken?: PushTokenUpdateManyWithoutBarbershopNestedInput
    BarbershopSettings?: BarbershopSettingsUpdateManyWithoutBarbershopNestedInput
  }

  export type BarbershopUncheckedUpdateWithoutClosedDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    intagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Barber?: BarberUncheckedUpdateManyWithoutBarbershopNestedInput
    Service?: ServiceUncheckedUpdateManyWithoutBarbershopNestedInput
    Scheduling?: SchedulingUncheckedUpdateManyWithoutBarbershopNestedInput
    WorkingHours?: WorkingHoursUncheckedUpdateManyWithoutBarbershopNestedInput
    PushToken?: PushTokenUncheckedUpdateManyWithoutBarbershopNestedInput
    BarbershopSettings?: BarbershopSettingsUncheckedUpdateManyWithoutBarbershopNestedInput
  }

  export type BarberCreateWithoutPushTokenInput = {
    name: string
    phone: string
    password: string
    profile?: string | null
    barbershop: BarbershopCreateNestedOneWithoutBarberInput
    Scheduling?: SchedulingCreateNestedManyWithoutBarberInput
  }

  export type BarberUncheckedCreateWithoutPushTokenInput = {
    id?: number
    name: string
    phone: string
    password: string
    profile?: string | null
    barbershopId: number
    Scheduling?: SchedulingUncheckedCreateNestedManyWithoutBarberInput
  }

  export type BarberCreateOrConnectWithoutPushTokenInput = {
    where: BarberWhereUniqueInput
    create: XOR<BarberCreateWithoutPushTokenInput, BarberUncheckedCreateWithoutPushTokenInput>
  }

  export type ClientCreateWithoutPushTokenInput = {
    name: string
    phone: string
    Scheduling?: SchedulingCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutPushTokenInput = {
    id?: number
    name: string
    phone: string
    Scheduling?: SchedulingUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutPushTokenInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutPushTokenInput, ClientUncheckedCreateWithoutPushTokenInput>
  }

  export type BarbershopCreateWithoutPushTokenInput = {
    name: string
    email: string
    phone: string
    logo?: string | null
    address: string
    intagram?: string | null
    facebook?: string | null
    password: string
    Barber?: BarberCreateNestedManyWithoutBarbershopInput
    Service?: ServiceCreateNestedManyWithoutBarbershopInput
    Scheduling?: SchedulingCreateNestedManyWithoutBarbershopInput
    WorkingHours?: WorkingHoursCreateNestedManyWithoutBarbershopInput
    ClosedDay?: ClosedDayCreateNestedManyWithoutBarbershopInput
    BarbershopSettings?: BarbershopSettingsCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopUncheckedCreateWithoutPushTokenInput = {
    id?: number
    name: string
    email: string
    phone: string
    logo?: string | null
    address: string
    intagram?: string | null
    facebook?: string | null
    password: string
    Barber?: BarberUncheckedCreateNestedManyWithoutBarbershopInput
    Service?: ServiceUncheckedCreateNestedManyWithoutBarbershopInput
    Scheduling?: SchedulingUncheckedCreateNestedManyWithoutBarbershopInput
    WorkingHours?: WorkingHoursUncheckedCreateNestedManyWithoutBarbershopInput
    ClosedDay?: ClosedDayUncheckedCreateNestedManyWithoutBarbershopInput
    BarbershopSettings?: BarbershopSettingsUncheckedCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopCreateOrConnectWithoutPushTokenInput = {
    where: BarbershopWhereUniqueInput
    create: XOR<BarbershopCreateWithoutPushTokenInput, BarbershopUncheckedCreateWithoutPushTokenInput>
  }

  export type BarberUpsertWithoutPushTokenInput = {
    update: XOR<BarberUpdateWithoutPushTokenInput, BarberUncheckedUpdateWithoutPushTokenInput>
    create: XOR<BarberCreateWithoutPushTokenInput, BarberUncheckedCreateWithoutPushTokenInput>
    where?: BarberWhereInput
  }

  export type BarberUpdateToOneWithWhereWithoutPushTokenInput = {
    where?: BarberWhereInput
    data: XOR<BarberUpdateWithoutPushTokenInput, BarberUncheckedUpdateWithoutPushTokenInput>
  }

  export type BarberUpdateWithoutPushTokenInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    barbershop?: BarbershopUpdateOneRequiredWithoutBarberNestedInput
    Scheduling?: SchedulingUpdateManyWithoutBarberNestedInput
  }

  export type BarberUncheckedUpdateWithoutPushTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    barbershopId?: IntFieldUpdateOperationsInput | number
    Scheduling?: SchedulingUncheckedUpdateManyWithoutBarberNestedInput
  }

  export type ClientUpsertWithoutPushTokenInput = {
    update: XOR<ClientUpdateWithoutPushTokenInput, ClientUncheckedUpdateWithoutPushTokenInput>
    create: XOR<ClientCreateWithoutPushTokenInput, ClientUncheckedCreateWithoutPushTokenInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutPushTokenInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutPushTokenInput, ClientUncheckedUpdateWithoutPushTokenInput>
  }

  export type ClientUpdateWithoutPushTokenInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    Scheduling?: SchedulingUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutPushTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    Scheduling?: SchedulingUncheckedUpdateManyWithoutClientNestedInput
  }

  export type BarbershopUpsertWithoutPushTokenInput = {
    update: XOR<BarbershopUpdateWithoutPushTokenInput, BarbershopUncheckedUpdateWithoutPushTokenInput>
    create: XOR<BarbershopCreateWithoutPushTokenInput, BarbershopUncheckedCreateWithoutPushTokenInput>
    where?: BarbershopWhereInput
  }

  export type BarbershopUpdateToOneWithWhereWithoutPushTokenInput = {
    where?: BarbershopWhereInput
    data: XOR<BarbershopUpdateWithoutPushTokenInput, BarbershopUncheckedUpdateWithoutPushTokenInput>
  }

  export type BarbershopUpdateWithoutPushTokenInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    intagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Barber?: BarberUpdateManyWithoutBarbershopNestedInput
    Service?: ServiceUpdateManyWithoutBarbershopNestedInput
    Scheduling?: SchedulingUpdateManyWithoutBarbershopNestedInput
    WorkingHours?: WorkingHoursUpdateManyWithoutBarbershopNestedInput
    ClosedDay?: ClosedDayUpdateManyWithoutBarbershopNestedInput
    BarbershopSettings?: BarbershopSettingsUpdateManyWithoutBarbershopNestedInput
  }

  export type BarbershopUncheckedUpdateWithoutPushTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    intagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Barber?: BarberUncheckedUpdateManyWithoutBarbershopNestedInput
    Service?: ServiceUncheckedUpdateManyWithoutBarbershopNestedInput
    Scheduling?: SchedulingUncheckedUpdateManyWithoutBarbershopNestedInput
    WorkingHours?: WorkingHoursUncheckedUpdateManyWithoutBarbershopNestedInput
    ClosedDay?: ClosedDayUncheckedUpdateManyWithoutBarbershopNestedInput
    BarbershopSettings?: BarbershopSettingsUncheckedUpdateManyWithoutBarbershopNestedInput
  }

  export type BarbershopCreateWithoutBarbershopSettingsInput = {
    name: string
    email: string
    phone: string
    logo?: string | null
    address: string
    intagram?: string | null
    facebook?: string | null
    password: string
    Barber?: BarberCreateNestedManyWithoutBarbershopInput
    Service?: ServiceCreateNestedManyWithoutBarbershopInput
    Scheduling?: SchedulingCreateNestedManyWithoutBarbershopInput
    WorkingHours?: WorkingHoursCreateNestedManyWithoutBarbershopInput
    ClosedDay?: ClosedDayCreateNestedManyWithoutBarbershopInput
    PushToken?: PushTokenCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopUncheckedCreateWithoutBarbershopSettingsInput = {
    id?: number
    name: string
    email: string
    phone: string
    logo?: string | null
    address: string
    intagram?: string | null
    facebook?: string | null
    password: string
    Barber?: BarberUncheckedCreateNestedManyWithoutBarbershopInput
    Service?: ServiceUncheckedCreateNestedManyWithoutBarbershopInput
    Scheduling?: SchedulingUncheckedCreateNestedManyWithoutBarbershopInput
    WorkingHours?: WorkingHoursUncheckedCreateNestedManyWithoutBarbershopInput
    ClosedDay?: ClosedDayUncheckedCreateNestedManyWithoutBarbershopInput
    PushToken?: PushTokenUncheckedCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopCreateOrConnectWithoutBarbershopSettingsInput = {
    where: BarbershopWhereUniqueInput
    create: XOR<BarbershopCreateWithoutBarbershopSettingsInput, BarbershopUncheckedCreateWithoutBarbershopSettingsInput>
  }

  export type BarbershopUpsertWithoutBarbershopSettingsInput = {
    update: XOR<BarbershopUpdateWithoutBarbershopSettingsInput, BarbershopUncheckedUpdateWithoutBarbershopSettingsInput>
    create: XOR<BarbershopCreateWithoutBarbershopSettingsInput, BarbershopUncheckedCreateWithoutBarbershopSettingsInput>
    where?: BarbershopWhereInput
  }

  export type BarbershopUpdateToOneWithWhereWithoutBarbershopSettingsInput = {
    where?: BarbershopWhereInput
    data: XOR<BarbershopUpdateWithoutBarbershopSettingsInput, BarbershopUncheckedUpdateWithoutBarbershopSettingsInput>
  }

  export type BarbershopUpdateWithoutBarbershopSettingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    intagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Barber?: BarberUpdateManyWithoutBarbershopNestedInput
    Service?: ServiceUpdateManyWithoutBarbershopNestedInput
    Scheduling?: SchedulingUpdateManyWithoutBarbershopNestedInput
    WorkingHours?: WorkingHoursUpdateManyWithoutBarbershopNestedInput
    ClosedDay?: ClosedDayUpdateManyWithoutBarbershopNestedInput
    PushToken?: PushTokenUpdateManyWithoutBarbershopNestedInput
  }

  export type BarbershopUncheckedUpdateWithoutBarbershopSettingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    intagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Barber?: BarberUncheckedUpdateManyWithoutBarbershopNestedInput
    Service?: ServiceUncheckedUpdateManyWithoutBarbershopNestedInput
    Scheduling?: SchedulingUncheckedUpdateManyWithoutBarbershopNestedInput
    WorkingHours?: WorkingHoursUncheckedUpdateManyWithoutBarbershopNestedInput
    ClosedDay?: ClosedDayUncheckedUpdateManyWithoutBarbershopNestedInput
    PushToken?: PushTokenUncheckedUpdateManyWithoutBarbershopNestedInput
  }

  export type BarberCreateManyBarbershopInput = {
    id?: number
    name: string
    phone: string
    password: string
    profile?: string | null
  }

  export type ServiceCreateManyBarbershopInput = {
    id?: number
    name: string
    price: number
    duration: number
    description?: string | null
    photo?: string | null
  }

  export type SchedulingCreateManyBarbershopInput = {
    id?: number
    date: Date | string
    time: Date | string
    duaration: number
    clientId: number
    barberId: number
    totalPrice: number
    status: string
  }

  export type WorkingHoursCreateManyBarbershopInput = {
    id?: number
    dayOfWeek: number
    openTime: Date | string
    closeTime: Date | string
    startLunch?: Date | string | null
    endLunch?: Date | string | null
    lunch?: boolean
  }

  export type ClosedDayCreateManyBarbershopInput = {
    id?: number
    date: Date | string
    reason?: string | null
  }

  export type PushTokenCreateManyBarbershopInput = {
    id?: number
    userType: string
    barberId: number
    clientId: number
    token: string
  }

  export type BarbershopSettingsCreateManyBarbershopInput = {
    id?: number
    autoConfirm?: boolean
    reminderTime?: number
    notifyClient?: boolean
    notifyBarber?: boolean
  }

  export type BarberUpdateWithoutBarbershopInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    Scheduling?: SchedulingUpdateManyWithoutBarberNestedInput
    PushToken?: PushTokenUpdateManyWithoutBarberNestedInput
  }

  export type BarberUncheckedUpdateWithoutBarbershopInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    Scheduling?: SchedulingUncheckedUpdateManyWithoutBarberNestedInput
    PushToken?: PushTokenUncheckedUpdateManyWithoutBarberNestedInput
  }

  export type BarberUncheckedUpdateManyWithoutBarbershopInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceUpdateWithoutBarbershopInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    SchedulingService?: SchedulingServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutBarbershopInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    SchedulingService?: SchedulingServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutBarbershopInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SchedulingUpdateWithoutBarbershopInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    duaration?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutSchedulingNestedInput
    barber?: BarberUpdateOneRequiredWithoutSchedulingNestedInput
    SchedulingService?: SchedulingServiceUpdateManyWithoutSchedulingNestedInput
  }

  export type SchedulingUncheckedUpdateWithoutBarbershopInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    duaration?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    barberId?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    SchedulingService?: SchedulingServiceUncheckedUpdateManyWithoutSchedulingNestedInput
  }

  export type SchedulingUncheckedUpdateManyWithoutBarbershopInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    duaration?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    barberId?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type WorkingHoursUpdateWithoutBarbershopInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    openTime?: DateTimeFieldUpdateOperationsInput | Date | string
    closeTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startLunch?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endLunch?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lunch?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkingHoursUncheckedUpdateWithoutBarbershopInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    openTime?: DateTimeFieldUpdateOperationsInput | Date | string
    closeTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startLunch?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endLunch?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lunch?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkingHoursUncheckedUpdateManyWithoutBarbershopInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    openTime?: DateTimeFieldUpdateOperationsInput | Date | string
    closeTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startLunch?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endLunch?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lunch?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClosedDayUpdateWithoutBarbershopInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClosedDayUncheckedUpdateWithoutBarbershopInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClosedDayUncheckedUpdateManyWithoutBarbershopInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PushTokenUpdateWithoutBarbershopInput = {
    userType?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    barber?: BarberUpdateOneWithoutPushTokenNestedInput
    client?: ClientUpdateOneWithoutPushTokenNestedInput
  }

  export type PushTokenUncheckedUpdateWithoutBarbershopInput = {
    id?: IntFieldUpdateOperationsInput | number
    userType?: StringFieldUpdateOperationsInput | string
    barberId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type PushTokenUncheckedUpdateManyWithoutBarbershopInput = {
    id?: IntFieldUpdateOperationsInput | number
    userType?: StringFieldUpdateOperationsInput | string
    barberId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type BarbershopSettingsUpdateWithoutBarbershopInput = {
    autoConfirm?: BoolFieldUpdateOperationsInput | boolean
    reminderTime?: IntFieldUpdateOperationsInput | number
    notifyClient?: BoolFieldUpdateOperationsInput | boolean
    notifyBarber?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BarbershopSettingsUncheckedUpdateWithoutBarbershopInput = {
    id?: IntFieldUpdateOperationsInput | number
    autoConfirm?: BoolFieldUpdateOperationsInput | boolean
    reminderTime?: IntFieldUpdateOperationsInput | number
    notifyClient?: BoolFieldUpdateOperationsInput | boolean
    notifyBarber?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BarbershopSettingsUncheckedUpdateManyWithoutBarbershopInput = {
    id?: IntFieldUpdateOperationsInput | number
    autoConfirm?: BoolFieldUpdateOperationsInput | boolean
    reminderTime?: IntFieldUpdateOperationsInput | number
    notifyClient?: BoolFieldUpdateOperationsInput | boolean
    notifyBarber?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SchedulingCreateManyBarberInput = {
    id?: number
    date: Date | string
    time: Date | string
    duaration: number
    clientId: number
    barbershopId: number
    totalPrice: number
    status: string
  }

  export type PushTokenCreateManyBarberInput = {
    id?: number
    userType: string
    clientId: number
    barbershopId: number
    token: string
  }

  export type SchedulingUpdateWithoutBarberInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    duaration?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutSchedulingNestedInput
    barbershop?: BarbershopUpdateOneRequiredWithoutSchedulingNestedInput
    SchedulingService?: SchedulingServiceUpdateManyWithoutSchedulingNestedInput
  }

  export type SchedulingUncheckedUpdateWithoutBarberInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    duaration?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    barbershopId?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    SchedulingService?: SchedulingServiceUncheckedUpdateManyWithoutSchedulingNestedInput
  }

  export type SchedulingUncheckedUpdateManyWithoutBarberInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    duaration?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    barbershopId?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PushTokenUpdateWithoutBarberInput = {
    userType?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneWithoutPushTokenNestedInput
    barbershop?: BarbershopUpdateOneWithoutPushTokenNestedInput
  }

  export type PushTokenUncheckedUpdateWithoutBarberInput = {
    id?: IntFieldUpdateOperationsInput | number
    userType?: StringFieldUpdateOperationsInput | string
    clientId?: IntFieldUpdateOperationsInput | number
    barbershopId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type PushTokenUncheckedUpdateManyWithoutBarberInput = {
    id?: IntFieldUpdateOperationsInput | number
    userType?: StringFieldUpdateOperationsInput | string
    clientId?: IntFieldUpdateOperationsInput | number
    barbershopId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type SchedulingCreateManyClientInput = {
    id?: number
    date: Date | string
    time: Date | string
    duaration: number
    barberId: number
    barbershopId: number
    totalPrice: number
    status: string
  }

  export type PushTokenCreateManyClientInput = {
    id?: number
    userType: string
    barberId: number
    barbershopId: number
    token: string
  }

  export type SchedulingUpdateWithoutClientInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    duaration?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    barber?: BarberUpdateOneRequiredWithoutSchedulingNestedInput
    barbershop?: BarbershopUpdateOneRequiredWithoutSchedulingNestedInput
    SchedulingService?: SchedulingServiceUpdateManyWithoutSchedulingNestedInput
  }

  export type SchedulingUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    duaration?: IntFieldUpdateOperationsInput | number
    barberId?: IntFieldUpdateOperationsInput | number
    barbershopId?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    SchedulingService?: SchedulingServiceUncheckedUpdateManyWithoutSchedulingNestedInput
  }

  export type SchedulingUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    duaration?: IntFieldUpdateOperationsInput | number
    barberId?: IntFieldUpdateOperationsInput | number
    barbershopId?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PushTokenUpdateWithoutClientInput = {
    userType?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    barber?: BarberUpdateOneWithoutPushTokenNestedInput
    barbershop?: BarbershopUpdateOneWithoutPushTokenNestedInput
  }

  export type PushTokenUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    userType?: StringFieldUpdateOperationsInput | string
    barberId?: IntFieldUpdateOperationsInput | number
    barbershopId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type PushTokenUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    userType?: StringFieldUpdateOperationsInput | string
    barberId?: IntFieldUpdateOperationsInput | number
    barbershopId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type SchedulingServiceCreateManyServiceInput = {
    id?: number
    schedulingId: number
  }

  export type SchedulingServiceUpdateWithoutServiceInput = {
    scheduling?: SchedulingUpdateOneRequiredWithoutSchedulingServiceNestedInput
  }

  export type SchedulingServiceUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    schedulingId?: IntFieldUpdateOperationsInput | number
  }

  export type SchedulingServiceUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    schedulingId?: IntFieldUpdateOperationsInput | number
  }

  export type SchedulingServiceCreateManySchedulingInput = {
    id?: number
    serviceId: number
  }

  export type SchedulingServiceUpdateWithoutSchedulingInput = {
    service?: ServiceUpdateOneRequiredWithoutSchedulingServiceNestedInput
  }

  export type SchedulingServiceUncheckedUpdateWithoutSchedulingInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
  }

  export type SchedulingServiceUncheckedUpdateManyWithoutSchedulingInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
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