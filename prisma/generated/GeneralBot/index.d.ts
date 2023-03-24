
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model ConfigAllowed
 * 
 */
export type ConfigAllowed = {
  roles: string[]
  users: string[]
}

/**
 * Model MembersData
 * 
 */
export type MembersData = {
  avatar: string | null
  communication_disabled_until: string | null
  deaf: boolean
  guild_id: string
  joined_at: string
  mute: boolean
  nick: string | null
  pending: boolean
  permissions: number | null
  premium_since: string | null
  roles: string[]
  user: MembersDataUser
}

/**
 * Model MembersDataUser
 * 
 */
export type MembersDataUser = {
  accent_color: string | null
  avatar: string | null
  banner: string | null
  bot: boolean
  discriminator: string
  id: string
  public_flags: bigint
  username: string
}

/**
 * Model config
 * 
 */
export type config = {
  id: string
  allowed: ConfigAllowed | null
  config_type: string
  data: string | null
  group: string | null
  name: string
}

/**
 * Model members
 * 
 */
export type members = {
  id: string
  data: MembersData
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Configs
 * const configs = await prisma.config.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Configs
   * const configs = await prisma.config.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

      /**
   * `prisma.config`: Exposes CRUD operations for the **config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configs
    * const configs = await prisma.config.findMany()
    * ```
    */
  get config(): Prisma.configDelegate<GlobalReject>;

  /**
   * `prisma.members`: Exposes CRUD operations for the **members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.members.findMany()
    * ```
    */
  get members(): Prisma.membersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.11.0
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    config: 'config',
    members: 'members'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ConfigAllowed
   */





  export type ConfigAllowedSelect = {
    roles?: boolean
    users?: boolean
  }


  export type ConfigAllowedGetPayload<S extends boolean | null | undefined | ConfigAllowedArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ConfigAllowed :
    S extends undefined ? never :
    S extends { include: any } & (ConfigAllowedArgs)
    ? ConfigAllowed 
    : S extends { select: any } & (ConfigAllowedArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ConfigAllowed ? ConfigAllowed[P] : never
  } 
      : ConfigAllowed



  export interface ConfigAllowedDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {







  }

  /**
   * The delegate class that acts as a "Promise-like" for ConfigAllowed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ConfigAllowedClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ConfigAllowed without action
   */
  export type ConfigAllowedArgs = {
    /**
     * Select specific fields to fetch from the ConfigAllowed
     */
    select?: ConfigAllowedSelect | null
  }



  /**
   * Model MembersData
   */





  export type MembersDataSelect = {
    avatar?: boolean
    communication_disabled_until?: boolean
    deaf?: boolean
    guild_id?: boolean
    joined_at?: boolean
    mute?: boolean
    nick?: boolean
    pending?: boolean
    permissions?: boolean
    premium_since?: boolean
    roles?: boolean
    user?: boolean | MembersDataUserArgs
  }


  export type MembersDataInclude = {}

  export type MembersDataGetPayload<S extends boolean | null | undefined | MembersDataArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MembersData :
    S extends undefined ? never :
    S extends { include: any } & (MembersDataArgs)
    ? MembersData 
    : S extends { select: any } & (MembersDataArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? MembersDataUserGetPayload<S['select'][P]> :  P extends keyof MembersData ? MembersData[P] : never
  } 
      : MembersData



  export interface MembersDataDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {







  }

  /**
   * The delegate class that acts as a "Promise-like" for MembersData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MembersDataClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends MembersDataUserArgs= {}>(args?: Subset<T, MembersDataUserArgs>): Prisma__MembersDataUserClient<MembersDataUserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MembersData without action
   */
  export type MembersDataArgs = {
    /**
     * Select specific fields to fetch from the MembersData
     */
    select?: MembersDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MembersDataInclude | null
  }



  /**
   * Model MembersDataUser
   */





  export type MembersDataUserSelect = {
    accent_color?: boolean
    avatar?: boolean
    banner?: boolean
    bot?: boolean
    discriminator?: boolean
    id?: boolean
    public_flags?: boolean
    username?: boolean
  }


  export type MembersDataUserGetPayload<S extends boolean | null | undefined | MembersDataUserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MembersDataUser :
    S extends undefined ? never :
    S extends { include: any } & (MembersDataUserArgs)
    ? MembersDataUser 
    : S extends { select: any } & (MembersDataUserArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof MembersDataUser ? MembersDataUser[P] : never
  } 
      : MembersDataUser



  export interface MembersDataUserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {







  }

  /**
   * The delegate class that acts as a "Promise-like" for MembersDataUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MembersDataUserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MembersDataUser without action
   */
  export type MembersDataUserArgs = {
    /**
     * Select specific fields to fetch from the MembersDataUser
     */
    select?: MembersDataUserSelect | null
  }



  /**
   * Model config
   */


  export type AggregateConfig = {
    _count: ConfigCountAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  export type ConfigMinAggregateOutputType = {
    id: string | null
    config_type: string | null
    data: string | null
    group: string | null
    name: string | null
  }

  export type ConfigMaxAggregateOutputType = {
    id: string | null
    config_type: string | null
    data: string | null
    group: string | null
    name: string | null
  }

  export type ConfigCountAggregateOutputType = {
    id: number
    config_type: number
    data: number
    group: number
    name: number
    _all: number
  }


  export type ConfigMinAggregateInputType = {
    id?: true
    config_type?: true
    data?: true
    group?: true
    name?: true
  }

  export type ConfigMaxAggregateInputType = {
    id?: true
    config_type?: true
    data?: true
    group?: true
    name?: true
  }

  export type ConfigCountAggregateInputType = {
    id?: true
    config_type?: true
    data?: true
    group?: true
    name?: true
    _all?: true
  }

  export type ConfigAggregateArgs = {
    /**
     * Filter which config to aggregate.
     */
    where?: configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configs to fetch.
     */
    orderBy?: Enumerable<configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned configs
    **/
    _count?: true | ConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfigMaxAggregateInputType
  }

  export type GetConfigAggregateType<T extends ConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfig[P]>
      : GetScalarType<T[P], AggregateConfig[P]>
  }




  export type ConfigGroupByArgs = {
    where?: configWhereInput
    orderBy?: Enumerable<configOrderByWithAggregationInput>
    by: ConfigScalarFieldEnum[]
    having?: configScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfigCountAggregateInputType | true
    _min?: ConfigMinAggregateInputType
    _max?: ConfigMaxAggregateInputType
  }


  export type ConfigGroupByOutputType = {
    id: string
    config_type: string
    data: string | null
    group: string | null
    name: string
    _count: ConfigCountAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  type GetConfigGroupByPayload<T extends ConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ConfigGroupByOutputType[P]>
        }
      >
    >


  export type configSelect = {
    id?: boolean
    allowed?: boolean | ConfigAllowedArgs
    config_type?: boolean
    data?: boolean
    group?: boolean
    name?: boolean
  }


  export type configInclude = {}

  export type configGetPayload<S extends boolean | null | undefined | configArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? config :
    S extends undefined ? never :
    S extends { include: any } & (configArgs | configFindManyArgs)
    ? config 
    : S extends { select: any } & (configArgs | configFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'allowed' ? ConfigAllowedGetPayload<S['select'][P]> | null :  P extends keyof config ? config[P] : never
  } 
      : config


  type configCountArgs = 
    Omit<configFindManyArgs, 'select' | 'include'> & {
      select?: ConfigCountAggregateInputType | true
    }

  export interface configDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Config that matches the filter.
     * @param {configFindUniqueArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends configFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, configFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'config'> extends True ? Prisma__configClient<configGetPayload<T>> : Prisma__configClient<configGetPayload<T> | null, null>

    /**
     * Find one Config that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {configFindUniqueOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends configFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, configFindUniqueOrThrowArgs>
    ): Prisma__configClient<configGetPayload<T>>

    /**
     * Find the first Config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configFindFirstArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends configFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, configFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'config'> extends True ? Prisma__configClient<configGetPayload<T>> : Prisma__configClient<configGetPayload<T> | null, null>

    /**
     * Find the first Config that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configFindFirstOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends configFindFirstOrThrowArgs>(
      args?: SelectSubset<T, configFindFirstOrThrowArgs>
    ): Prisma__configClient<configGetPayload<T>>

    /**
     * Find zero or more Configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configs
     * const configs = await prisma.config.findMany()
     * 
     * // Get first 10 Configs
     * const configs = await prisma.config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configWithIdOnly = await prisma.config.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends configFindManyArgs>(
      args?: SelectSubset<T, configFindManyArgs>
    ): Prisma.PrismaPromise<Array<configGetPayload<T>>>

    /**
     * Create a Config.
     * @param {configCreateArgs} args - Arguments to create a Config.
     * @example
     * // Create one Config
     * const Config = await prisma.config.create({
     *   data: {
     *     // ... data to create a Config
     *   }
     * })
     * 
    **/
    create<T extends configCreateArgs>(
      args: SelectSubset<T, configCreateArgs>
    ): Prisma__configClient<configGetPayload<T>>

    /**
     * Create many Configs.
     *     @param {configCreateManyArgs} args - Arguments to create many Configs.
     *     @example
     *     // Create many Configs
     *     const config = await prisma.config.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends configCreateManyArgs>(
      args?: SelectSubset<T, configCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Config.
     * @param {configDeleteArgs} args - Arguments to delete one Config.
     * @example
     * // Delete one Config
     * const Config = await prisma.config.delete({
     *   where: {
     *     // ... filter to delete one Config
     *   }
     * })
     * 
    **/
    delete<T extends configDeleteArgs>(
      args: SelectSubset<T, configDeleteArgs>
    ): Prisma__configClient<configGetPayload<T>>

    /**
     * Update one Config.
     * @param {configUpdateArgs} args - Arguments to update one Config.
     * @example
     * // Update one Config
     * const config = await prisma.config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends configUpdateArgs>(
      args: SelectSubset<T, configUpdateArgs>
    ): Prisma__configClient<configGetPayload<T>>

    /**
     * Delete zero or more Configs.
     * @param {configDeleteManyArgs} args - Arguments to filter Configs to delete.
     * @example
     * // Delete a few Configs
     * const { count } = await prisma.config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends configDeleteManyArgs>(
      args?: SelectSubset<T, configDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configs
     * const config = await prisma.config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends configUpdateManyArgs>(
      args: SelectSubset<T, configUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Config.
     * @param {configUpsertArgs} args - Arguments to update or create a Config.
     * @example
     * // Update or create a Config
     * const config = await prisma.config.upsert({
     *   create: {
     *     // ... data to create a Config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Config we want to update
     *   }
     * })
    **/
    upsert<T extends configUpsertArgs>(
      args: SelectSubset<T, configUpsertArgs>
    ): Prisma__configClient<configGetPayload<T>>

    /**
     * Find zero or more Configs that matches the filter.
     * @param {configFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const config = await prisma.config.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: configFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Config.
     * @param {configAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const config = await prisma.config.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: configAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configCountArgs} args - Arguments to filter Configs to count.
     * @example
     * // Count the number of Configs
     * const count = await prisma.config.count({
     *   where: {
     *     // ... the filter for the Configs we want to count
     *   }
     * })
    **/
    count<T extends configCountArgs>(
      args?: Subset<T, configCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfigAggregateArgs>(args: Subset<T, ConfigAggregateArgs>): Prisma.PrismaPromise<GetConfigAggregateType<T>>

    /**
     * Group by Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigGroupByArgs} args - Group by arguments.
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
      T extends ConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfigGroupByArgs['orderBy'] }
        : { orderBy?: ConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__configClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    allowed<T extends ConfigAllowedArgs= {}>(args?: Subset<T, ConfigAllowedArgs>): Prisma__ConfigAllowedClient<ConfigAllowedGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * config base type for findUnique actions
   */
  export type configFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: configInclude | null
    /**
     * Filter, which config to fetch.
     */
    where: configWhereUniqueInput
  }

  /**
   * config findUnique
   */
  export interface configFindUniqueArgs extends configFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * config findUniqueOrThrow
   */
  export type configFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: configInclude | null
    /**
     * Filter, which config to fetch.
     */
    where: configWhereUniqueInput
  }


  /**
   * config base type for findFirst actions
   */
  export type configFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: configInclude | null
    /**
     * Filter, which config to fetch.
     */
    where?: configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configs to fetch.
     */
    orderBy?: Enumerable<configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configs.
     */
    cursor?: configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configs.
     */
    distinct?: Enumerable<ConfigScalarFieldEnum>
  }

  /**
   * config findFirst
   */
  export interface configFindFirstArgs extends configFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * config findFirstOrThrow
   */
  export type configFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: configInclude | null
    /**
     * Filter, which config to fetch.
     */
    where?: configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configs to fetch.
     */
    orderBy?: Enumerable<configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configs.
     */
    cursor?: configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configs.
     */
    distinct?: Enumerable<ConfigScalarFieldEnum>
  }


  /**
   * config findMany
   */
  export type configFindManyArgs = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: configInclude | null
    /**
     * Filter, which configs to fetch.
     */
    where?: configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configs to fetch.
     */
    orderBy?: Enumerable<configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing configs.
     */
    cursor?: configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configs.
     */
    skip?: number
    distinct?: Enumerable<ConfigScalarFieldEnum>
  }


  /**
   * config create
   */
  export type configCreateArgs = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: configInclude | null
    /**
     * The data needed to create a config.
     */
    data: XOR<configCreateInput, configUncheckedCreateInput>
  }


  /**
   * config createMany
   */
  export type configCreateManyArgs = {
    /**
     * The data used to create many configs.
     */
    data: Enumerable<configCreateManyInput>
  }


  /**
   * config update
   */
  export type configUpdateArgs = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: configInclude | null
    /**
     * The data needed to update a config.
     */
    data: XOR<configUpdateInput, configUncheckedUpdateInput>
    /**
     * Choose, which config to update.
     */
    where: configWhereUniqueInput
  }


  /**
   * config updateMany
   */
  export type configUpdateManyArgs = {
    /**
     * The data used to update configs.
     */
    data: XOR<configUpdateManyMutationInput, configUncheckedUpdateManyInput>
    /**
     * Filter which configs to update
     */
    where?: configWhereInput
  }


  /**
   * config upsert
   */
  export type configUpsertArgs = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: configInclude | null
    /**
     * The filter to search for the config to update in case it exists.
     */
    where: configWhereUniqueInput
    /**
     * In case the config found by the `where` argument doesn't exist, create a new config with this data.
     */
    create: XOR<configCreateInput, configUncheckedCreateInput>
    /**
     * In case the config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<configUpdateInput, configUncheckedUpdateInput>
  }


  /**
   * config delete
   */
  export type configDeleteArgs = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: configInclude | null
    /**
     * Filter which config to delete.
     */
    where: configWhereUniqueInput
  }


  /**
   * config deleteMany
   */
  export type configDeleteManyArgs = {
    /**
     * Filter which configs to delete
     */
    where?: configWhereInput
  }


  /**
   * config findRaw
   */
  export type configFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * config aggregateRaw
   */
  export type configAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * config without action
   */
  export type configArgs = {
    /**
     * Select specific fields to fetch from the config
     */
    select?: configSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: configInclude | null
  }



  /**
   * Model members
   */


  export type AggregateMembers = {
    _count: MembersCountAggregateOutputType | null
    _min: MembersMinAggregateOutputType | null
    _max: MembersMaxAggregateOutputType | null
  }

  export type MembersMinAggregateOutputType = {
    id: string | null
  }

  export type MembersMaxAggregateOutputType = {
    id: string | null
  }

  export type MembersCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type MembersMinAggregateInputType = {
    id?: true
  }

  export type MembersMaxAggregateInputType = {
    id?: true
  }

  export type MembersCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type MembersAggregateArgs = {
    /**
     * Filter which members to aggregate.
     */
    where?: membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: Enumerable<membersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned members
    **/
    _count?: true | MembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembersMaxAggregateInputType
  }

  export type GetMembersAggregateType<T extends MembersAggregateArgs> = {
        [P in keyof T & keyof AggregateMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembers[P]>
      : GetScalarType<T[P], AggregateMembers[P]>
  }




  export type MembersGroupByArgs = {
    where?: membersWhereInput
    orderBy?: Enumerable<membersOrderByWithAggregationInput>
    by: MembersScalarFieldEnum[]
    having?: membersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembersCountAggregateInputType | true
    _min?: MembersMinAggregateInputType
    _max?: MembersMaxAggregateInputType
  }


  export type MembersGroupByOutputType = {
    id: string
    _count: MembersCountAggregateOutputType | null
    _min: MembersMinAggregateOutputType | null
    _max: MembersMaxAggregateOutputType | null
  }

  type GetMembersGroupByPayload<T extends MembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembersGroupByOutputType[P]>
            : GetScalarType<T[P], MembersGroupByOutputType[P]>
        }
      >
    >


  export type membersSelect = {
    id?: boolean
    data?: boolean | MembersDataArgs
  }


  export type membersInclude = {}

  export type membersGetPayload<S extends boolean | null | undefined | membersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? members :
    S extends undefined ? never :
    S extends { include: any } & (membersArgs | membersFindManyArgs)
    ? members 
    : S extends { select: any } & (membersArgs | membersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'data' ? MembersDataGetPayload<S['select'][P]> :  P extends keyof members ? members[P] : never
  } 
      : members


  type membersCountArgs = 
    Omit<membersFindManyArgs, 'select' | 'include'> & {
      select?: MembersCountAggregateInputType | true
    }

  export interface membersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Members that matches the filter.
     * @param {membersFindUniqueArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends membersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, membersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'members'> extends True ? Prisma__membersClient<membersGetPayload<T>> : Prisma__membersClient<membersGetPayload<T> | null, null>

    /**
     * Find one Members that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {membersFindUniqueOrThrowArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends membersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, membersFindUniqueOrThrowArgs>
    ): Prisma__membersClient<membersGetPayload<T>>

    /**
     * Find the first Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersFindFirstArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends membersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, membersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'members'> extends True ? Prisma__membersClient<membersGetPayload<T>> : Prisma__membersClient<membersGetPayload<T> | null, null>

    /**
     * Find the first Members that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersFindFirstOrThrowArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends membersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, membersFindFirstOrThrowArgs>
    ): Prisma__membersClient<membersGetPayload<T>>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.members.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.members.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membersWithIdOnly = await prisma.members.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends membersFindManyArgs>(
      args?: SelectSubset<T, membersFindManyArgs>
    ): Prisma.PrismaPromise<Array<membersGetPayload<T>>>

    /**
     * Create a Members.
     * @param {membersCreateArgs} args - Arguments to create a Members.
     * @example
     * // Create one Members
     * const Members = await prisma.members.create({
     *   data: {
     *     // ... data to create a Members
     *   }
     * })
     * 
    **/
    create<T extends membersCreateArgs>(
      args: SelectSubset<T, membersCreateArgs>
    ): Prisma__membersClient<membersGetPayload<T>>

    /**
     * Create many Members.
     *     @param {membersCreateManyArgs} args - Arguments to create many Members.
     *     @example
     *     // Create many Members
     *     const members = await prisma.members.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends membersCreateManyArgs>(
      args?: SelectSubset<T, membersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Members.
     * @param {membersDeleteArgs} args - Arguments to delete one Members.
     * @example
     * // Delete one Members
     * const Members = await prisma.members.delete({
     *   where: {
     *     // ... filter to delete one Members
     *   }
     * })
     * 
    **/
    delete<T extends membersDeleteArgs>(
      args: SelectSubset<T, membersDeleteArgs>
    ): Prisma__membersClient<membersGetPayload<T>>

    /**
     * Update one Members.
     * @param {membersUpdateArgs} args - Arguments to update one Members.
     * @example
     * // Update one Members
     * const members = await prisma.members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends membersUpdateArgs>(
      args: SelectSubset<T, membersUpdateArgs>
    ): Prisma__membersClient<membersGetPayload<T>>

    /**
     * Delete zero or more Members.
     * @param {membersDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends membersDeleteManyArgs>(
      args?: SelectSubset<T, membersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const members = await prisma.members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends membersUpdateManyArgs>(
      args: SelectSubset<T, membersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Members.
     * @param {membersUpsertArgs} args - Arguments to update or create a Members.
     * @example
     * // Update or create a Members
     * const members = await prisma.members.upsert({
     *   create: {
     *     // ... data to create a Members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Members we want to update
     *   }
     * })
    **/
    upsert<T extends membersUpsertArgs>(
      args: SelectSubset<T, membersUpsertArgs>
    ): Prisma__membersClient<membersGetPayload<T>>

    /**
     * Find zero or more Members that matches the filter.
     * @param {membersFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const members = await prisma.members.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: membersFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Members.
     * @param {membersAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const members = await prisma.members.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: membersAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membersCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.members.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends membersCountArgs>(
      args?: Subset<T, membersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembersAggregateArgs>(args: Subset<T, MembersAggregateArgs>): Prisma.PrismaPromise<GetMembersAggregateType<T>>

    /**
     * Group by Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersGroupByArgs} args - Group by arguments.
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
      T extends MembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembersGroupByArgs['orderBy'] }
        : { orderBy?: MembersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__membersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    data<T extends MembersDataArgs= {}>(args?: Subset<T, MembersDataArgs>): Prisma__MembersDataClient<MembersDataGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * members base type for findUnique actions
   */
  export type membersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membersInclude | null
    /**
     * Filter, which members to fetch.
     */
    where: membersWhereUniqueInput
  }

  /**
   * members findUnique
   */
  export interface membersFindUniqueArgs extends membersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * members findUniqueOrThrow
   */
  export type membersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membersInclude | null
    /**
     * Filter, which members to fetch.
     */
    where: membersWhereUniqueInput
  }


  /**
   * members base type for findFirst actions
   */
  export type membersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membersInclude | null
    /**
     * Filter, which members to fetch.
     */
    where?: membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: Enumerable<membersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: Enumerable<MembersScalarFieldEnum>
  }

  /**
   * members findFirst
   */
  export interface membersFindFirstArgs extends membersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * members findFirstOrThrow
   */
  export type membersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membersInclude | null
    /**
     * Filter, which members to fetch.
     */
    where?: membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: Enumerable<membersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: Enumerable<MembersScalarFieldEnum>
  }


  /**
   * members findMany
   */
  export type membersFindManyArgs = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membersInclude | null
    /**
     * Filter, which members to fetch.
     */
    where?: membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: Enumerable<membersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing members.
     */
    cursor?: membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    distinct?: Enumerable<MembersScalarFieldEnum>
  }


  /**
   * members create
   */
  export type membersCreateArgs = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membersInclude | null
    /**
     * The data needed to create a members.
     */
    data: XOR<membersCreateInput, membersUncheckedCreateInput>
  }


  /**
   * members createMany
   */
  export type membersCreateManyArgs = {
    /**
     * The data used to create many members.
     */
    data: Enumerable<membersCreateManyInput>
  }


  /**
   * members update
   */
  export type membersUpdateArgs = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membersInclude | null
    /**
     * The data needed to update a members.
     */
    data: XOR<membersUpdateInput, membersUncheckedUpdateInput>
    /**
     * Choose, which members to update.
     */
    where: membersWhereUniqueInput
  }


  /**
   * members updateMany
   */
  export type membersUpdateManyArgs = {
    /**
     * The data used to update members.
     */
    data: XOR<membersUpdateManyMutationInput, membersUncheckedUpdateManyInput>
    /**
     * Filter which members to update
     */
    where?: membersWhereInput
  }


  /**
   * members upsert
   */
  export type membersUpsertArgs = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membersInclude | null
    /**
     * The filter to search for the members to update in case it exists.
     */
    where: membersWhereUniqueInput
    /**
     * In case the members found by the `where` argument doesn't exist, create a new members with this data.
     */
    create: XOR<membersCreateInput, membersUncheckedCreateInput>
    /**
     * In case the members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<membersUpdateInput, membersUncheckedUpdateInput>
  }


  /**
   * members delete
   */
  export type membersDeleteArgs = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membersInclude | null
    /**
     * Filter which members to delete.
     */
    where: membersWhereUniqueInput
  }


  /**
   * members deleteMany
   */
  export type membersDeleteManyArgs = {
    /**
     * Filter which members to delete
     */
    where?: membersWhereInput
  }


  /**
   * members findRaw
   */
  export type membersFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * members aggregateRaw
   */
  export type membersAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * members without action
   */
  export type membersArgs = {
    /**
     * Select specific fields to fetch from the members
     */
    select?: membersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membersInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ConfigScalarFieldEnum: {
    id: 'id',
    config_type: 'config_type',
    data: 'data',
    group: 'group',
    name: 'name'
  };

  export type ConfigScalarFieldEnum = (typeof ConfigScalarFieldEnum)[keyof typeof ConfigScalarFieldEnum]


  export const MembersScalarFieldEnum: {
    id: 'id'
  };

  export type MembersScalarFieldEnum = (typeof MembersScalarFieldEnum)[keyof typeof MembersScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type configWhereInput = {
    AND?: Enumerable<configWhereInput>
    OR?: Enumerable<configWhereInput>
    NOT?: Enumerable<configWhereInput>
    id?: StringFilter | string
    allowed?: XOR<ConfigAllowedNullableCompositeFilter, ConfigAllowedObjectEqualityInput> | null
    config_type?: StringFilter | string
    data?: StringNullableFilter | string | null
    group?: StringNullableFilter | string | null
    name?: StringFilter | string
  }

  export type configOrderByWithRelationInput = {
    id?: SortOrder
    allowed?: ConfigAllowedOrderByInput
    config_type?: SortOrder
    data?: SortOrder
    group?: SortOrder
    name?: SortOrder
  }

  export type configWhereUniqueInput = {
    id?: string
    name_config_type?: configNameConfig_typeCompoundUniqueInput
  }

  export type configOrderByWithAggregationInput = {
    id?: SortOrder
    config_type?: SortOrder
    data?: SortOrder
    group?: SortOrder
    name?: SortOrder
    _count?: configCountOrderByAggregateInput
    _max?: configMaxOrderByAggregateInput
    _min?: configMinOrderByAggregateInput
  }

  export type configScalarWhereWithAggregatesInput = {
    AND?: Enumerable<configScalarWhereWithAggregatesInput>
    OR?: Enumerable<configScalarWhereWithAggregatesInput>
    NOT?: Enumerable<configScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    config_type?: StringWithAggregatesFilter | string
    data?: StringNullableWithAggregatesFilter | string | null
    group?: StringNullableWithAggregatesFilter | string | null
    name?: StringWithAggregatesFilter | string
  }

  export type membersWhereInput = {
    AND?: Enumerable<membersWhereInput>
    OR?: Enumerable<membersWhereInput>
    NOT?: Enumerable<membersWhereInput>
    id?: StringFilter | string
    data?: XOR<MembersDataCompositeFilter, MembersDataObjectEqualityInput>
  }

  export type membersOrderByWithRelationInput = {
    id?: SortOrder
    data?: MembersDataOrderByInput
  }

  export type membersWhereUniqueInput = {
    id?: string
  }

  export type membersOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: membersCountOrderByAggregateInput
    _max?: membersMaxOrderByAggregateInput
    _min?: membersMinOrderByAggregateInput
  }

  export type membersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<membersScalarWhereWithAggregatesInput>
    OR?: Enumerable<membersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<membersScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
  }

  export type configCreateInput = {
    id?: string
    allowed?: XOR<ConfigAllowedNullableCreateEnvelopeInput, ConfigAllowedCreateInput> | null
    config_type: string
    data?: string | null
    group?: string | null
    name: string
  }

  export type configUncheckedCreateInput = {
    id?: string
    allowed?: XOR<ConfigAllowedNullableCreateEnvelopeInput, ConfigAllowedCreateInput> | null
    config_type: string
    data?: string | null
    group?: string | null
    name: string
  }

  export type configUpdateInput = {
    allowed?: XOR<ConfigAllowedNullableUpdateEnvelopeInput, ConfigAllowedCreateInput> | null
    config_type?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type configUncheckedUpdateInput = {
    allowed?: XOR<ConfigAllowedNullableUpdateEnvelopeInput, ConfigAllowedCreateInput> | null
    config_type?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type configCreateManyInput = {
    id?: string
    allowed?: XOR<ConfigAllowedNullableCreateEnvelopeInput, ConfigAllowedCreateInput> | null
    config_type: string
    data?: string | null
    group?: string | null
    name: string
  }

  export type configUpdateManyMutationInput = {
    allowed?: XOR<ConfigAllowedNullableUpdateEnvelopeInput, ConfigAllowedCreateInput> | null
    config_type?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type configUncheckedUpdateManyInput = {
    allowed?: XOR<ConfigAllowedNullableUpdateEnvelopeInput, ConfigAllowedCreateInput> | null
    config_type?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type membersCreateInput = {
    id?: string
    data: XOR<MembersDataCreateEnvelopeInput, MembersDataCreateInput>
  }

  export type membersUncheckedCreateInput = {
    id?: string
    data: XOR<MembersDataCreateEnvelopeInput, MembersDataCreateInput>
  }

  export type membersUpdateInput = {
    data?: XOR<MembersDataUpdateEnvelopeInput, MembersDataCreateInput>
  }

  export type membersUncheckedUpdateInput = {
    data?: XOR<MembersDataUpdateEnvelopeInput, MembersDataCreateInput>
  }

  export type membersCreateManyInput = {
    id?: string
    data: XOR<MembersDataCreateEnvelopeInput, MembersDataCreateInput>
  }

  export type membersUpdateManyMutationInput = {
    data?: XOR<MembersDataUpdateEnvelopeInput, MembersDataCreateInput>
  }

  export type membersUncheckedUpdateManyInput = {
    data?: XOR<MembersDataUpdateEnvelopeInput, MembersDataCreateInput>
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type ConfigAllowedNullableCompositeFilter = {
    equals?: ConfigAllowedObjectEqualityInput | null
    is?: ConfigAllowedWhereInput | null
    isNot?: ConfigAllowedWhereInput | null
    isSet?: boolean
  }

  export type ConfigAllowedObjectEqualityInput = {
    roles?: Enumerable<string>
    users?: Enumerable<string>
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type ConfigAllowedOrderByInput = {
    roles?: SortOrder
    users?: SortOrder
  }

  export type configNameConfig_typeCompoundUniqueInput = {
    name: string
    config_type: string
  }

  export type configCountOrderByAggregateInput = {
    id?: SortOrder
    config_type?: SortOrder
    data?: SortOrder
    group?: SortOrder
    name?: SortOrder
  }

  export type configMaxOrderByAggregateInput = {
    id?: SortOrder
    config_type?: SortOrder
    data?: SortOrder
    group?: SortOrder
    name?: SortOrder
  }

  export type configMinOrderByAggregateInput = {
    id?: SortOrder
    config_type?: SortOrder
    data?: SortOrder
    group?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type MembersDataCompositeFilter = {
    equals?: MembersDataObjectEqualityInput
    is?: MembersDataWhereInput
    isNot?: MembersDataWhereInput
  }

  export type MembersDataObjectEqualityInput = {
    avatar?: string | null
    communication_disabled_until?: string | null
    deaf: boolean
    guild_id: string
    joined_at: string
    mute: boolean
    nick?: string | null
    pending: boolean
    permissions?: number | null
    premium_since?: string | null
    roles?: Enumerable<string>
    user: MembersDataUserObjectEqualityInput
  }

  export type MembersDataOrderByInput = {
    avatar?: SortOrder
    communication_disabled_until?: SortOrder
    deaf?: SortOrder
    guild_id?: SortOrder
    joined_at?: SortOrder
    mute?: SortOrder
    nick?: SortOrder
    pending?: SortOrder
    permissions?: SortOrder
    premium_since?: SortOrder
    roles?: SortOrder
    user?: MembersDataUserOrderByInput
  }

  export type membersCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type membersMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type membersMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConfigAllowedNullableCreateEnvelopeInput = {
    set?: ConfigAllowedCreateInput | null
  }

  export type ConfigAllowedCreateInput = {
    roles?: ConfigAllowedCreaterolesInput | Enumerable<string>
    users?: ConfigAllowedCreateusersInput | Enumerable<string>
  }

  export type ConfigAllowedNullableUpdateEnvelopeInput = {
    set?: ConfigAllowedCreateInput | null
    upsert?: ConfigAllowedUpsertInput
    unset?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type MembersDataCreateEnvelopeInput = {
    set?: MembersDataCreateInput
  }

  export type MembersDataCreateInput = {
    avatar?: string | null
    communication_disabled_until?: string | null
    deaf: boolean
    guild_id: string
    joined_at: string
    mute: boolean
    nick?: string | null
    pending: boolean
    permissions?: number | null
    premium_since?: string | null
    roles?: MembersDataCreaterolesInput | Enumerable<string>
    user: MembersDataUserCreateInput
  }

  export type MembersDataUpdateEnvelopeInput = {
    set?: MembersDataCreateInput
    update?: MembersDataUpdateInput
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type ConfigAllowedWhereInput = {
    AND?: Enumerable<ConfigAllowedWhereInput>
    OR?: Enumerable<ConfigAllowedWhereInput>
    NOT?: Enumerable<ConfigAllowedWhereInput>
    roles?: StringNullableListFilter
    users?: StringNullableListFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type MembersDataWhereInput = {
    AND?: Enumerable<MembersDataWhereInput>
    OR?: Enumerable<MembersDataWhereInput>
    NOT?: Enumerable<MembersDataWhereInput>
    avatar?: StringNullableFilter | string | null
    communication_disabled_until?: StringNullableFilter | string | null
    deaf?: BoolFilter | boolean
    guild_id?: StringFilter | string
    joined_at?: StringFilter | string
    mute?: BoolFilter | boolean
    nick?: StringNullableFilter | string | null
    pending?: BoolFilter | boolean
    permissions?: IntNullableFilter | number | null
    premium_since?: StringNullableFilter | string | null
    roles?: StringNullableListFilter
    user?: XOR<MembersDataUserCompositeFilter, MembersDataUserObjectEqualityInput>
  }

  export type MembersDataUserObjectEqualityInput = {
    accent_color?: string | null
    avatar?: string | null
    banner?: string | null
    bot: boolean
    discriminator: string
    id: string
    public_flags: bigint | number
    username: string
  }

  export type MembersDataUserOrderByInput = {
    accent_color?: SortOrder
    avatar?: SortOrder
    banner?: SortOrder
    bot?: SortOrder
    discriminator?: SortOrder
    id?: SortOrder
    public_flags?: SortOrder
    username?: SortOrder
  }

  export type ConfigAllowedCreaterolesInput = {
    set: Enumerable<string>
  }

  export type ConfigAllowedCreateusersInput = {
    set: Enumerable<string>
  }

  export type ConfigAllowedUpsertInput = {
    set: ConfigAllowedCreateInput | null
    update: ConfigAllowedUpdateInput
  }

  export type MembersDataCreaterolesInput = {
    set: Enumerable<string>
  }

  export type MembersDataUserCreateInput = {
    accent_color?: string | null
    avatar?: string | null
    banner?: string | null
    bot: boolean
    discriminator: string
    id: string
    public_flags: bigint | number
    username: string
  }

  export type MembersDataUpdateInput = {
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    communication_disabled_until?: NullableStringFieldUpdateOperationsInput | string | null
    deaf?: BoolFieldUpdateOperationsInput | boolean
    guild_id?: StringFieldUpdateOperationsInput | string
    joined_at?: StringFieldUpdateOperationsInput | string
    mute?: BoolFieldUpdateOperationsInput | boolean
    nick?: NullableStringFieldUpdateOperationsInput | string | null
    pending?: BoolFieldUpdateOperationsInput | boolean
    permissions?: NullableIntFieldUpdateOperationsInput | number | null
    premium_since?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: MembersDataUpdaterolesInput | Enumerable<string>
    user?: XOR<MembersDataUserUpdateEnvelopeInput, MembersDataUserCreateInput>
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type MembersDataUserCompositeFilter = {
    equals?: MembersDataUserObjectEqualityInput
    is?: MembersDataUserWhereInput
    isNot?: MembersDataUserWhereInput
  }

  export type ConfigAllowedUpdateInput = {
    roles?: ConfigAllowedUpdaterolesInput | Enumerable<string>
    users?: ConfigAllowedUpdateusersInput | Enumerable<string>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type MembersDataUpdaterolesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type MembersDataUserUpdateEnvelopeInput = {
    set?: MembersDataUserCreateInput
    update?: MembersDataUserUpdateInput
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type MembersDataUserWhereInput = {
    AND?: Enumerable<MembersDataUserWhereInput>
    OR?: Enumerable<MembersDataUserWhereInput>
    NOT?: Enumerable<MembersDataUserWhereInput>
    accent_color?: StringNullableFilter | string | null
    avatar?: StringNullableFilter | string | null
    banner?: StringNullableFilter | string | null
    bot?: BoolFilter | boolean
    discriminator?: StringFilter | string
    id?: StringFilter | string
    public_flags?: BigIntFilter | bigint | number
    username?: StringFilter | string
  }

  export type ConfigAllowedUpdaterolesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type ConfigAllowedUpdateusersInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type MembersDataUserUpdateInput = {
    accent_color?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bot?: BoolFieldUpdateOperationsInput | boolean
    discriminator?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    public_flags?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
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