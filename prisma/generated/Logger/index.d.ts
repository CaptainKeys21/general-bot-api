
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model CommandsAuthor
 * 
 */
export type CommandsAuthor = {
  accent_color: string | null
  avatar: string | null
  banner: string | null
  bot: boolean | null
  discriminator: string | null
  id: string
  public_flags: bigint | null
  tag: string | null
  username: string | null
}

/**
 * Model CommandsCommand
 * 
 */
export type CommandsCommand = {
  args: string[]
  guild_id: string | null
  id: string | null
  isSlashCommand: boolean | null
  name: string
  options: CommandDataOption[]
  resolved: Prisma.JsonValue | null
  target_id: string | null
  type: bigint | null
}

/**
 * Model CommandDataOption
 * 
 */
export type CommandDataOption = {
  name: string
  values: Prisma.JsonValue | null
  kind: string
  options: CommandDataOption[]
  resolved: Prisma.JsonValue | null
  focused: boolean
}

/**
 * Model commands
 * 
 */
export type commands = {
  id: string
  author: CommandsAuthor | null
  command: CommandsCommand
  logType: string | null
  message: string | null
  time: Date
  type: string | null
}

/**
 * Model LoggerDefault
 * 
 */
export type LoggerDefault = {
  id: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Commands
 * const commands = await prisma.commands.findMany()
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
   * // Fetch zero or more Commands
   * const commands = await prisma.commands.findMany()
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
   * `prisma.commands`: Exposes CRUD operations for the **commands** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commands
    * const commands = await prisma.commands.findMany()
    * ```
    */
  get commands(): Prisma.commandsDelegate<GlobalReject>;

  /**
   * `prisma.loggerDefault`: Exposes CRUD operations for the **LoggerDefault** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoggerDefaults
    * const loggerDefaults = await prisma.loggerDefault.findMany()
    * ```
    */
  get loggerDefault(): Prisma.LoggerDefaultDelegate<GlobalReject>;
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
    commands: 'commands',
    LoggerDefault: 'LoggerDefault'
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
   * Model CommandsAuthor
   */





  export type CommandsAuthorSelect = {
    accent_color?: boolean
    avatar?: boolean
    banner?: boolean
    bot?: boolean
    discriminator?: boolean
    id?: boolean
    public_flags?: boolean
    tag?: boolean
    username?: boolean
  }


  export type CommandsAuthorGetPayload<S extends boolean | null | undefined | CommandsAuthorArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CommandsAuthor :
    S extends undefined ? never :
    S extends { include: any } & (CommandsAuthorArgs)
    ? CommandsAuthor 
    : S extends { select: any } & (CommandsAuthorArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CommandsAuthor ? CommandsAuthor[P] : never
  } 
      : CommandsAuthor



  export interface CommandsAuthorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {







  }

  /**
   * The delegate class that acts as a "Promise-like" for CommandsAuthor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommandsAuthorClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * CommandsAuthor without action
   */
  export type CommandsAuthorArgs = {
    /**
     * Select specific fields to fetch from the CommandsAuthor
     */
    select?: CommandsAuthorSelect | null
  }



  /**
   * Model CommandsCommand
   */





  export type CommandsCommandSelect = {
    args?: boolean
    guild_id?: boolean
    id?: boolean
    isSlashCommand?: boolean
    name?: boolean
    options?: boolean | CommandDataOptionArgs
    resolved?: boolean
    target_id?: boolean
    type?: boolean
  }


  export type CommandsCommandInclude = {}

  export type CommandsCommandGetPayload<S extends boolean | null | undefined | CommandsCommandArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CommandsCommand :
    S extends undefined ? never :
    S extends { include: any } & (CommandsCommandArgs)
    ? CommandsCommand 
    : S extends { select: any } & (CommandsCommandArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'options' ? Array < CommandDataOptionGetPayload<S['select'][P]>>  :  P extends keyof CommandsCommand ? CommandsCommand[P] : never
  } 
      : CommandsCommand



  export interface CommandsCommandDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {







  }

  /**
   * The delegate class that acts as a "Promise-like" for CommandsCommand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommandsCommandClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    options<T extends CommandDataOptionArgs= {}>(args?: Subset<T, CommandDataOptionArgs>): Prisma.PrismaPromise<Array<CommandDataOptionGetPayload<T>>| Null>;

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
   * CommandsCommand without action
   */
  export type CommandsCommandArgs = {
    /**
     * Select specific fields to fetch from the CommandsCommand
     */
    select?: CommandsCommandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommandsCommandInclude | null
  }



  /**
   * Model CommandDataOption
   */





  export type CommandDataOptionSelect = {
    name?: boolean
    values?: boolean
    kind?: boolean
    options?: boolean | CommandDataOptionArgs
    resolved?: boolean
    focused?: boolean
  }


  export type CommandDataOptionInclude = {}

  export type CommandDataOptionGetPayload<S extends boolean | null | undefined | CommandDataOptionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CommandDataOption :
    S extends undefined ? never :
    S extends { include: any } & (CommandDataOptionArgs)
    ? CommandDataOption 
    : S extends { select: any } & (CommandDataOptionArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'options' ? Array < CommandDataOptionGetPayload<S['select'][P]>>  :  P extends keyof CommandDataOption ? CommandDataOption[P] : never
  } 
      : CommandDataOption



  export interface CommandDataOptionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {







  }

  /**
   * The delegate class that acts as a "Promise-like" for CommandDataOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommandDataOptionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    options<T extends CommandDataOptionArgs= {}>(args?: Subset<T, CommandDataOptionArgs>): Prisma.PrismaPromise<Array<CommandDataOptionGetPayload<T>>| Null>;

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
   * CommandDataOption without action
   */
  export type CommandDataOptionArgs = {
    /**
     * Select specific fields to fetch from the CommandDataOption
     */
    select?: CommandDataOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommandDataOptionInclude | null
  }



  /**
   * Model commands
   */


  export type AggregateCommands = {
    _count: CommandsCountAggregateOutputType | null
    _min: CommandsMinAggregateOutputType | null
    _max: CommandsMaxAggregateOutputType | null
  }

  export type CommandsMinAggregateOutputType = {
    id: string | null
    logType: string | null
    message: string | null
    time: Date | null
    type: string | null
  }

  export type CommandsMaxAggregateOutputType = {
    id: string | null
    logType: string | null
    message: string | null
    time: Date | null
    type: string | null
  }

  export type CommandsCountAggregateOutputType = {
    id: number
    logType: number
    message: number
    time: number
    type: number
    _all: number
  }


  export type CommandsMinAggregateInputType = {
    id?: true
    logType?: true
    message?: true
    time?: true
    type?: true
  }

  export type CommandsMaxAggregateInputType = {
    id?: true
    logType?: true
    message?: true
    time?: true
    type?: true
  }

  export type CommandsCountAggregateInputType = {
    id?: true
    logType?: true
    message?: true
    time?: true
    type?: true
    _all?: true
  }

  export type CommandsAggregateArgs = {
    /**
     * Filter which commands to aggregate.
     */
    where?: commandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commands to fetch.
     */
    orderBy?: Enumerable<commandsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned commands
    **/
    _count?: true | CommandsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommandsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommandsMaxAggregateInputType
  }

  export type GetCommandsAggregateType<T extends CommandsAggregateArgs> = {
        [P in keyof T & keyof AggregateCommands]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommands[P]>
      : GetScalarType<T[P], AggregateCommands[P]>
  }




  export type CommandsGroupByArgs = {
    where?: commandsWhereInput
    orderBy?: Enumerable<commandsOrderByWithAggregationInput>
    by: CommandsScalarFieldEnum[]
    having?: commandsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommandsCountAggregateInputType | true
    _min?: CommandsMinAggregateInputType
    _max?: CommandsMaxAggregateInputType
  }


  export type CommandsGroupByOutputType = {
    id: string
    logType: string | null
    message: string | null
    time: Date
    type: string | null
    _count: CommandsCountAggregateOutputType | null
    _min: CommandsMinAggregateOutputType | null
    _max: CommandsMaxAggregateOutputType | null
  }

  type GetCommandsGroupByPayload<T extends CommandsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CommandsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommandsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommandsGroupByOutputType[P]>
            : GetScalarType<T[P], CommandsGroupByOutputType[P]>
        }
      >
    >


  export type commandsSelect = {
    id?: boolean
    author?: boolean | CommandsAuthorArgs
    command?: boolean | CommandsCommandArgs
    logType?: boolean
    message?: boolean
    time?: boolean
    type?: boolean
  }


  export type commandsInclude = {}

  export type commandsGetPayload<S extends boolean | null | undefined | commandsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? commands :
    S extends undefined ? never :
    S extends { include: any } & (commandsArgs | commandsFindManyArgs)
    ? commands 
    : S extends { select: any } & (commandsArgs | commandsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'author' ? CommandsAuthorGetPayload<S['select'][P]> | null :
        P extends 'command' ? CommandsCommandGetPayload<S['select'][P]> :  P extends keyof commands ? commands[P] : never
  } 
      : commands


  type commandsCountArgs = 
    Omit<commandsFindManyArgs, 'select' | 'include'> & {
      select?: CommandsCountAggregateInputType | true
    }

  export interface commandsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Commands that matches the filter.
     * @param {commandsFindUniqueArgs} args - Arguments to find a Commands
     * @example
     * // Get one Commands
     * const commands = await prisma.commands.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends commandsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, commandsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'commands'> extends True ? Prisma__commandsClient<commandsGetPayload<T>> : Prisma__commandsClient<commandsGetPayload<T> | null, null>

    /**
     * Find one Commands that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {commandsFindUniqueOrThrowArgs} args - Arguments to find a Commands
     * @example
     * // Get one Commands
     * const commands = await prisma.commands.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends commandsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, commandsFindUniqueOrThrowArgs>
    ): Prisma__commandsClient<commandsGetPayload<T>>

    /**
     * Find the first Commands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandsFindFirstArgs} args - Arguments to find a Commands
     * @example
     * // Get one Commands
     * const commands = await prisma.commands.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends commandsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, commandsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'commands'> extends True ? Prisma__commandsClient<commandsGetPayload<T>> : Prisma__commandsClient<commandsGetPayload<T> | null, null>

    /**
     * Find the first Commands that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandsFindFirstOrThrowArgs} args - Arguments to find a Commands
     * @example
     * // Get one Commands
     * const commands = await prisma.commands.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends commandsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, commandsFindFirstOrThrowArgs>
    ): Prisma__commandsClient<commandsGetPayload<T>>

    /**
     * Find zero or more Commands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commands
     * const commands = await prisma.commands.findMany()
     * 
     * // Get first 10 Commands
     * const commands = await prisma.commands.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commandsWithIdOnly = await prisma.commands.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends commandsFindManyArgs>(
      args?: SelectSubset<T, commandsFindManyArgs>
    ): Prisma.PrismaPromise<Array<commandsGetPayload<T>>>

    /**
     * Create a Commands.
     * @param {commandsCreateArgs} args - Arguments to create a Commands.
     * @example
     * // Create one Commands
     * const Commands = await prisma.commands.create({
     *   data: {
     *     // ... data to create a Commands
     *   }
     * })
     * 
    **/
    create<T extends commandsCreateArgs>(
      args: SelectSubset<T, commandsCreateArgs>
    ): Prisma__commandsClient<commandsGetPayload<T>>

    /**
     * Create many Commands.
     *     @param {commandsCreateManyArgs} args - Arguments to create many Commands.
     *     @example
     *     // Create many Commands
     *     const commands = await prisma.commands.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends commandsCreateManyArgs>(
      args?: SelectSubset<T, commandsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Commands.
     * @param {commandsDeleteArgs} args - Arguments to delete one Commands.
     * @example
     * // Delete one Commands
     * const Commands = await prisma.commands.delete({
     *   where: {
     *     // ... filter to delete one Commands
     *   }
     * })
     * 
    **/
    delete<T extends commandsDeleteArgs>(
      args: SelectSubset<T, commandsDeleteArgs>
    ): Prisma__commandsClient<commandsGetPayload<T>>

    /**
     * Update one Commands.
     * @param {commandsUpdateArgs} args - Arguments to update one Commands.
     * @example
     * // Update one Commands
     * const commands = await prisma.commands.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends commandsUpdateArgs>(
      args: SelectSubset<T, commandsUpdateArgs>
    ): Prisma__commandsClient<commandsGetPayload<T>>

    /**
     * Delete zero or more Commands.
     * @param {commandsDeleteManyArgs} args - Arguments to filter Commands to delete.
     * @example
     * // Delete a few Commands
     * const { count } = await prisma.commands.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends commandsDeleteManyArgs>(
      args?: SelectSubset<T, commandsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commands
     * const commands = await prisma.commands.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends commandsUpdateManyArgs>(
      args: SelectSubset<T, commandsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Commands.
     * @param {commandsUpsertArgs} args - Arguments to update or create a Commands.
     * @example
     * // Update or create a Commands
     * const commands = await prisma.commands.upsert({
     *   create: {
     *     // ... data to create a Commands
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commands we want to update
     *   }
     * })
    **/
    upsert<T extends commandsUpsertArgs>(
      args: SelectSubset<T, commandsUpsertArgs>
    ): Prisma__commandsClient<commandsGetPayload<T>>

    /**
     * Find zero or more Commands that matches the filter.
     * @param {commandsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const commands = await prisma.commands.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: commandsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Commands.
     * @param {commandsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const commands = await prisma.commands.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: commandsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Commands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandsCountArgs} args - Arguments to filter Commands to count.
     * @example
     * // Count the number of Commands
     * const count = await prisma.commands.count({
     *   where: {
     *     // ... the filter for the Commands we want to count
     *   }
     * })
    **/
    count<T extends commandsCountArgs>(
      args?: Subset<T, commandsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommandsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommandsAggregateArgs>(args: Subset<T, CommandsAggregateArgs>): Prisma.PrismaPromise<GetCommandsAggregateType<T>>

    /**
     * Group by Commands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandsGroupByArgs} args - Group by arguments.
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
      T extends CommandsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommandsGroupByArgs['orderBy'] }
        : { orderBy?: CommandsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommandsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for commands.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__commandsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    author<T extends CommandsAuthorArgs= {}>(args?: Subset<T, CommandsAuthorArgs>): Prisma__CommandsAuthorClient<CommandsAuthorGetPayload<T> | Null>;

    command<T extends CommandsCommandArgs= {}>(args?: Subset<T, CommandsCommandArgs>): Prisma__CommandsCommandClient<CommandsCommandGetPayload<T> | Null>;

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
   * commands base type for findUnique actions
   */
  export type commandsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commandsInclude | null
    /**
     * Filter, which commands to fetch.
     */
    where: commandsWhereUniqueInput
  }

  /**
   * commands findUnique
   */
  export interface commandsFindUniqueArgs extends commandsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * commands findUniqueOrThrow
   */
  export type commandsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commandsInclude | null
    /**
     * Filter, which commands to fetch.
     */
    where: commandsWhereUniqueInput
  }


  /**
   * commands base type for findFirst actions
   */
  export type commandsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commandsInclude | null
    /**
     * Filter, which commands to fetch.
     */
    where?: commandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commands to fetch.
     */
    orderBy?: Enumerable<commandsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for commands.
     */
    cursor?: commandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of commands.
     */
    distinct?: Enumerable<CommandsScalarFieldEnum>
  }

  /**
   * commands findFirst
   */
  export interface commandsFindFirstArgs extends commandsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * commands findFirstOrThrow
   */
  export type commandsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commandsInclude | null
    /**
     * Filter, which commands to fetch.
     */
    where?: commandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commands to fetch.
     */
    orderBy?: Enumerable<commandsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for commands.
     */
    cursor?: commandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of commands.
     */
    distinct?: Enumerable<CommandsScalarFieldEnum>
  }


  /**
   * commands findMany
   */
  export type commandsFindManyArgs = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commandsInclude | null
    /**
     * Filter, which commands to fetch.
     */
    where?: commandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commands to fetch.
     */
    orderBy?: Enumerable<commandsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing commands.
     */
    cursor?: commandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commands.
     */
    skip?: number
    distinct?: Enumerable<CommandsScalarFieldEnum>
  }


  /**
   * commands create
   */
  export type commandsCreateArgs = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commandsInclude | null
    /**
     * The data needed to create a commands.
     */
    data: XOR<commandsCreateInput, commandsUncheckedCreateInput>
  }


  /**
   * commands createMany
   */
  export type commandsCreateManyArgs = {
    /**
     * The data used to create many commands.
     */
    data: Enumerable<commandsCreateManyInput>
  }


  /**
   * commands update
   */
  export type commandsUpdateArgs = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commandsInclude | null
    /**
     * The data needed to update a commands.
     */
    data: XOR<commandsUpdateInput, commandsUncheckedUpdateInput>
    /**
     * Choose, which commands to update.
     */
    where: commandsWhereUniqueInput
  }


  /**
   * commands updateMany
   */
  export type commandsUpdateManyArgs = {
    /**
     * The data used to update commands.
     */
    data: XOR<commandsUpdateManyMutationInput, commandsUncheckedUpdateManyInput>
    /**
     * Filter which commands to update
     */
    where?: commandsWhereInput
  }


  /**
   * commands upsert
   */
  export type commandsUpsertArgs = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commandsInclude | null
    /**
     * The filter to search for the commands to update in case it exists.
     */
    where: commandsWhereUniqueInput
    /**
     * In case the commands found by the `where` argument doesn't exist, create a new commands with this data.
     */
    create: XOR<commandsCreateInput, commandsUncheckedCreateInput>
    /**
     * In case the commands was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commandsUpdateInput, commandsUncheckedUpdateInput>
  }


  /**
   * commands delete
   */
  export type commandsDeleteArgs = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commandsInclude | null
    /**
     * Filter which commands to delete.
     */
    where: commandsWhereUniqueInput
  }


  /**
   * commands deleteMany
   */
  export type commandsDeleteManyArgs = {
    /**
     * Filter which commands to delete
     */
    where?: commandsWhereInput
  }


  /**
   * commands findRaw
   */
  export type commandsFindRawArgs = {
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
   * commands aggregateRaw
   */
  export type commandsAggregateRawArgs = {
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
   * commands without action
   */
  export type commandsArgs = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commandsInclude | null
  }



  /**
   * Model LoggerDefault
   */


  export type AggregateLoggerDefault = {
    _count: LoggerDefaultCountAggregateOutputType | null
    _min: LoggerDefaultMinAggregateOutputType | null
    _max: LoggerDefaultMaxAggregateOutputType | null
  }

  export type LoggerDefaultMinAggregateOutputType = {
    id: string | null
  }

  export type LoggerDefaultMaxAggregateOutputType = {
    id: string | null
  }

  export type LoggerDefaultCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type LoggerDefaultMinAggregateInputType = {
    id?: true
  }

  export type LoggerDefaultMaxAggregateInputType = {
    id?: true
  }

  export type LoggerDefaultCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type LoggerDefaultAggregateArgs = {
    /**
     * Filter which LoggerDefault to aggregate.
     */
    where?: LoggerDefaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoggerDefaults to fetch.
     */
    orderBy?: Enumerable<LoggerDefaultOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoggerDefaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoggerDefaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoggerDefaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoggerDefaults
    **/
    _count?: true | LoggerDefaultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoggerDefaultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoggerDefaultMaxAggregateInputType
  }

  export type GetLoggerDefaultAggregateType<T extends LoggerDefaultAggregateArgs> = {
        [P in keyof T & keyof AggregateLoggerDefault]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoggerDefault[P]>
      : GetScalarType<T[P], AggregateLoggerDefault[P]>
  }




  export type LoggerDefaultGroupByArgs = {
    where?: LoggerDefaultWhereInput
    orderBy?: Enumerable<LoggerDefaultOrderByWithAggregationInput>
    by: LoggerDefaultScalarFieldEnum[]
    having?: LoggerDefaultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoggerDefaultCountAggregateInputType | true
    _min?: LoggerDefaultMinAggregateInputType
    _max?: LoggerDefaultMaxAggregateInputType
  }


  export type LoggerDefaultGroupByOutputType = {
    id: string
    _count: LoggerDefaultCountAggregateOutputType | null
    _min: LoggerDefaultMinAggregateOutputType | null
    _max: LoggerDefaultMaxAggregateOutputType | null
  }

  type GetLoggerDefaultGroupByPayload<T extends LoggerDefaultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LoggerDefaultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoggerDefaultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoggerDefaultGroupByOutputType[P]>
            : GetScalarType<T[P], LoggerDefaultGroupByOutputType[P]>
        }
      >
    >


  export type LoggerDefaultSelect = {
    id?: boolean
  }


  export type LoggerDefaultGetPayload<S extends boolean | null | undefined | LoggerDefaultArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LoggerDefault :
    S extends undefined ? never :
    S extends { include: any } & (LoggerDefaultArgs | LoggerDefaultFindManyArgs)
    ? LoggerDefault 
    : S extends { select: any } & (LoggerDefaultArgs | LoggerDefaultFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof LoggerDefault ? LoggerDefault[P] : never
  } 
      : LoggerDefault


  type LoggerDefaultCountArgs = 
    Omit<LoggerDefaultFindManyArgs, 'select' | 'include'> & {
      select?: LoggerDefaultCountAggregateInputType | true
    }

  export interface LoggerDefaultDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one LoggerDefault that matches the filter.
     * @param {LoggerDefaultFindUniqueArgs} args - Arguments to find a LoggerDefault
     * @example
     * // Get one LoggerDefault
     * const loggerDefault = await prisma.loggerDefault.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LoggerDefaultFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LoggerDefaultFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'LoggerDefault'> extends True ? Prisma__LoggerDefaultClient<LoggerDefaultGetPayload<T>> : Prisma__LoggerDefaultClient<LoggerDefaultGetPayload<T> | null, null>

    /**
     * Find one LoggerDefault that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LoggerDefaultFindUniqueOrThrowArgs} args - Arguments to find a LoggerDefault
     * @example
     * // Get one LoggerDefault
     * const loggerDefault = await prisma.loggerDefault.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LoggerDefaultFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LoggerDefaultFindUniqueOrThrowArgs>
    ): Prisma__LoggerDefaultClient<LoggerDefaultGetPayload<T>>

    /**
     * Find the first LoggerDefault that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggerDefaultFindFirstArgs} args - Arguments to find a LoggerDefault
     * @example
     * // Get one LoggerDefault
     * const loggerDefault = await prisma.loggerDefault.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LoggerDefaultFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LoggerDefaultFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'LoggerDefault'> extends True ? Prisma__LoggerDefaultClient<LoggerDefaultGetPayload<T>> : Prisma__LoggerDefaultClient<LoggerDefaultGetPayload<T> | null, null>

    /**
     * Find the first LoggerDefault that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggerDefaultFindFirstOrThrowArgs} args - Arguments to find a LoggerDefault
     * @example
     * // Get one LoggerDefault
     * const loggerDefault = await prisma.loggerDefault.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LoggerDefaultFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LoggerDefaultFindFirstOrThrowArgs>
    ): Prisma__LoggerDefaultClient<LoggerDefaultGetPayload<T>>

    /**
     * Find zero or more LoggerDefaults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggerDefaultFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoggerDefaults
     * const loggerDefaults = await prisma.loggerDefault.findMany()
     * 
     * // Get first 10 LoggerDefaults
     * const loggerDefaults = await prisma.loggerDefault.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loggerDefaultWithIdOnly = await prisma.loggerDefault.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LoggerDefaultFindManyArgs>(
      args?: SelectSubset<T, LoggerDefaultFindManyArgs>
    ): Prisma.PrismaPromise<Array<LoggerDefaultGetPayload<T>>>

    /**
     * Create a LoggerDefault.
     * @param {LoggerDefaultCreateArgs} args - Arguments to create a LoggerDefault.
     * @example
     * // Create one LoggerDefault
     * const LoggerDefault = await prisma.loggerDefault.create({
     *   data: {
     *     // ... data to create a LoggerDefault
     *   }
     * })
     * 
    **/
    create<T extends LoggerDefaultCreateArgs>(
      args: SelectSubset<T, LoggerDefaultCreateArgs>
    ): Prisma__LoggerDefaultClient<LoggerDefaultGetPayload<T>>

    /**
     * Create many LoggerDefaults.
     *     @param {LoggerDefaultCreateManyArgs} args - Arguments to create many LoggerDefaults.
     *     @example
     *     // Create many LoggerDefaults
     *     const loggerDefault = await prisma.loggerDefault.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LoggerDefaultCreateManyArgs>(
      args?: SelectSubset<T, LoggerDefaultCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LoggerDefault.
     * @param {LoggerDefaultDeleteArgs} args - Arguments to delete one LoggerDefault.
     * @example
     * // Delete one LoggerDefault
     * const LoggerDefault = await prisma.loggerDefault.delete({
     *   where: {
     *     // ... filter to delete one LoggerDefault
     *   }
     * })
     * 
    **/
    delete<T extends LoggerDefaultDeleteArgs>(
      args: SelectSubset<T, LoggerDefaultDeleteArgs>
    ): Prisma__LoggerDefaultClient<LoggerDefaultGetPayload<T>>

    /**
     * Update one LoggerDefault.
     * @param {LoggerDefaultUpdateArgs} args - Arguments to update one LoggerDefault.
     * @example
     * // Update one LoggerDefault
     * const loggerDefault = await prisma.loggerDefault.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LoggerDefaultUpdateArgs>(
      args: SelectSubset<T, LoggerDefaultUpdateArgs>
    ): Prisma__LoggerDefaultClient<LoggerDefaultGetPayload<T>>

    /**
     * Delete zero or more LoggerDefaults.
     * @param {LoggerDefaultDeleteManyArgs} args - Arguments to filter LoggerDefaults to delete.
     * @example
     * // Delete a few LoggerDefaults
     * const { count } = await prisma.loggerDefault.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LoggerDefaultDeleteManyArgs>(
      args?: SelectSubset<T, LoggerDefaultDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoggerDefaults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggerDefaultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoggerDefaults
     * const loggerDefault = await prisma.loggerDefault.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LoggerDefaultUpdateManyArgs>(
      args: SelectSubset<T, LoggerDefaultUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Find zero or more LoggerDefaults that matches the filter.
     * @param {LoggerDefaultFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const loggerDefault = await prisma.loggerDefault.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: LoggerDefaultFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LoggerDefault.
     * @param {LoggerDefaultAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const loggerDefault = await prisma.loggerDefault.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: LoggerDefaultAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of LoggerDefaults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggerDefaultCountArgs} args - Arguments to filter LoggerDefaults to count.
     * @example
     * // Count the number of LoggerDefaults
     * const count = await prisma.loggerDefault.count({
     *   where: {
     *     // ... the filter for the LoggerDefaults we want to count
     *   }
     * })
    **/
    count<T extends LoggerDefaultCountArgs>(
      args?: Subset<T, LoggerDefaultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoggerDefaultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoggerDefault.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggerDefaultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoggerDefaultAggregateArgs>(args: Subset<T, LoggerDefaultAggregateArgs>): Prisma.PrismaPromise<GetLoggerDefaultAggregateType<T>>

    /**
     * Group by LoggerDefault.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoggerDefaultGroupByArgs} args - Group by arguments.
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
      T extends LoggerDefaultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoggerDefaultGroupByArgs['orderBy'] }
        : { orderBy?: LoggerDefaultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoggerDefaultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoggerDefaultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for LoggerDefault.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LoggerDefaultClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * LoggerDefault base type for findUnique actions
   */
  export type LoggerDefaultFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the LoggerDefault
     */
    select?: LoggerDefaultSelect | null
    /**
     * Filter, which LoggerDefault to fetch.
     */
    where: LoggerDefaultWhereUniqueInput
  }

  /**
   * LoggerDefault findUnique
   */
  export interface LoggerDefaultFindUniqueArgs extends LoggerDefaultFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LoggerDefault findUniqueOrThrow
   */
  export type LoggerDefaultFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the LoggerDefault
     */
    select?: LoggerDefaultSelect | null
    /**
     * Filter, which LoggerDefault to fetch.
     */
    where: LoggerDefaultWhereUniqueInput
  }


  /**
   * LoggerDefault base type for findFirst actions
   */
  export type LoggerDefaultFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the LoggerDefault
     */
    select?: LoggerDefaultSelect | null
    /**
     * Filter, which LoggerDefault to fetch.
     */
    where?: LoggerDefaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoggerDefaults to fetch.
     */
    orderBy?: Enumerable<LoggerDefaultOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoggerDefaults.
     */
    cursor?: LoggerDefaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoggerDefaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoggerDefaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoggerDefaults.
     */
    distinct?: Enumerable<LoggerDefaultScalarFieldEnum>
  }

  /**
   * LoggerDefault findFirst
   */
  export interface LoggerDefaultFindFirstArgs extends LoggerDefaultFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LoggerDefault findFirstOrThrow
   */
  export type LoggerDefaultFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the LoggerDefault
     */
    select?: LoggerDefaultSelect | null
    /**
     * Filter, which LoggerDefault to fetch.
     */
    where?: LoggerDefaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoggerDefaults to fetch.
     */
    orderBy?: Enumerable<LoggerDefaultOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoggerDefaults.
     */
    cursor?: LoggerDefaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoggerDefaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoggerDefaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoggerDefaults.
     */
    distinct?: Enumerable<LoggerDefaultScalarFieldEnum>
  }


  /**
   * LoggerDefault findMany
   */
  export type LoggerDefaultFindManyArgs = {
    /**
     * Select specific fields to fetch from the LoggerDefault
     */
    select?: LoggerDefaultSelect | null
    /**
     * Filter, which LoggerDefaults to fetch.
     */
    where?: LoggerDefaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoggerDefaults to fetch.
     */
    orderBy?: Enumerable<LoggerDefaultOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoggerDefaults.
     */
    cursor?: LoggerDefaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoggerDefaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoggerDefaults.
     */
    skip?: number
    distinct?: Enumerable<LoggerDefaultScalarFieldEnum>
  }


  /**
   * LoggerDefault create
   */
  export type LoggerDefaultCreateArgs = {
    /**
     * Select specific fields to fetch from the LoggerDefault
     */
    select?: LoggerDefaultSelect | null
    /**
     * The data needed to create a LoggerDefault.
     */
    data: XOR<LoggerDefaultCreateInput, LoggerDefaultUncheckedCreateInput>
  }


  /**
   * LoggerDefault createMany
   */
  export type LoggerDefaultCreateManyArgs = {
    /**
     * The data used to create many LoggerDefaults.
     */
    data: Enumerable<LoggerDefaultCreateManyInput>
  }


  /**
   * LoggerDefault update
   */
  export type LoggerDefaultUpdateArgs = {
    /**
     * Select specific fields to fetch from the LoggerDefault
     */
    select?: LoggerDefaultSelect | null
    /**
     * The data needed to update a LoggerDefault.
     */
    data: XOR<LoggerDefaultUpdateInput, LoggerDefaultUncheckedUpdateInput>
    /**
     * Choose, which LoggerDefault to update.
     */
    where: LoggerDefaultWhereUniqueInput
  }


  /**
   * LoggerDefault updateMany
   */
  export type LoggerDefaultUpdateManyArgs = {
    /**
     * The data used to update LoggerDefaults.
     */
    data: XOR<LoggerDefaultUpdateManyMutationInput, LoggerDefaultUncheckedUpdateManyInput>
    /**
     * Filter which LoggerDefaults to update
     */
    where?: LoggerDefaultWhereInput
  }


  /**
   * LoggerDefault delete
   */
  export type LoggerDefaultDeleteArgs = {
    /**
     * Select specific fields to fetch from the LoggerDefault
     */
    select?: LoggerDefaultSelect | null
    /**
     * Filter which LoggerDefault to delete.
     */
    where: LoggerDefaultWhereUniqueInput
  }


  /**
   * LoggerDefault deleteMany
   */
  export type LoggerDefaultDeleteManyArgs = {
    /**
     * Filter which LoggerDefaults to delete
     */
    where?: LoggerDefaultWhereInput
  }


  /**
   * LoggerDefault findRaw
   */
  export type LoggerDefaultFindRawArgs = {
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
   * LoggerDefault aggregateRaw
   */
  export type LoggerDefaultAggregateRawArgs = {
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
   * LoggerDefault without action
   */
  export type LoggerDefaultArgs = {
    /**
     * Select specific fields to fetch from the LoggerDefault
     */
    select?: LoggerDefaultSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CommandsScalarFieldEnum: {
    id: 'id',
    logType: 'logType',
    message: 'message',
    time: 'time',
    type: 'type'
  };

  export type CommandsScalarFieldEnum = (typeof CommandsScalarFieldEnum)[keyof typeof CommandsScalarFieldEnum]


  export const LoggerDefaultScalarFieldEnum: {
    id: 'id'
  };

  export type LoggerDefaultScalarFieldEnum = (typeof LoggerDefaultScalarFieldEnum)[keyof typeof LoggerDefaultScalarFieldEnum]


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


  export type commandsWhereInput = {
    AND?: Enumerable<commandsWhereInput>
    OR?: Enumerable<commandsWhereInput>
    NOT?: Enumerable<commandsWhereInput>
    id?: StringFilter | string
    author?: XOR<CommandsAuthorNullableCompositeFilter, CommandsAuthorObjectEqualityInput> | null
    command?: XOR<CommandsCommandCompositeFilter, CommandsCommandObjectEqualityInput>
    logType?: StringNullableFilter | string | null
    message?: StringNullableFilter | string | null
    time?: DateTimeFilter | Date | string
    type?: StringNullableFilter | string | null
  }

  export type commandsOrderByWithRelationInput = {
    id?: SortOrder
    author?: CommandsAuthorOrderByInput
    command?: CommandsCommandOrderByInput
    logType?: SortOrder
    message?: SortOrder
    time?: SortOrder
    type?: SortOrder
  }

  export type commandsWhereUniqueInput = {
    id?: string
  }

  export type commandsOrderByWithAggregationInput = {
    id?: SortOrder
    logType?: SortOrder
    message?: SortOrder
    time?: SortOrder
    type?: SortOrder
    _count?: commandsCountOrderByAggregateInput
    _max?: commandsMaxOrderByAggregateInput
    _min?: commandsMinOrderByAggregateInput
  }

  export type commandsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<commandsScalarWhereWithAggregatesInput>
    OR?: Enumerable<commandsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<commandsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    logType?: StringNullableWithAggregatesFilter | string | null
    message?: StringNullableWithAggregatesFilter | string | null
    time?: DateTimeWithAggregatesFilter | Date | string
    type?: StringNullableWithAggregatesFilter | string | null
  }

  export type LoggerDefaultWhereInput = {
    AND?: Enumerable<LoggerDefaultWhereInput>
    OR?: Enumerable<LoggerDefaultWhereInput>
    NOT?: Enumerable<LoggerDefaultWhereInput>
    id?: StringFilter | string
  }

  export type LoggerDefaultOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type LoggerDefaultWhereUniqueInput = {
    id?: string
  }

  export type LoggerDefaultOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: LoggerDefaultCountOrderByAggregateInput
    _max?: LoggerDefaultMaxOrderByAggregateInput
    _min?: LoggerDefaultMinOrderByAggregateInput
  }

  export type LoggerDefaultScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LoggerDefaultScalarWhereWithAggregatesInput>
    OR?: Enumerable<LoggerDefaultScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LoggerDefaultScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
  }

  export type commandsCreateInput = {
    id?: string
    author?: XOR<CommandsAuthorNullableCreateEnvelopeInput, CommandsAuthorCreateInput> | null
    command: XOR<CommandsCommandCreateEnvelopeInput, CommandsCommandCreateInput>
    logType?: string | null
    message?: string | null
    time: Date | string
    type?: string | null
  }

  export type commandsUncheckedCreateInput = {
    id?: string
    author?: XOR<CommandsAuthorNullableCreateEnvelopeInput, CommandsAuthorCreateInput> | null
    command: XOR<CommandsCommandCreateEnvelopeInput, CommandsCommandCreateInput>
    logType?: string | null
    message?: string | null
    time: Date | string
    type?: string | null
  }

  export type commandsUpdateInput = {
    author?: XOR<CommandsAuthorNullableUpdateEnvelopeInput, CommandsAuthorCreateInput> | null
    command?: XOR<CommandsCommandUpdateEnvelopeInput, CommandsCommandCreateInput>
    logType?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type commandsUncheckedUpdateInput = {
    author?: XOR<CommandsAuthorNullableUpdateEnvelopeInput, CommandsAuthorCreateInput> | null
    command?: XOR<CommandsCommandUpdateEnvelopeInput, CommandsCommandCreateInput>
    logType?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type commandsCreateManyInput = {
    id?: string
    author?: XOR<CommandsAuthorNullableCreateEnvelopeInput, CommandsAuthorCreateInput> | null
    command: XOR<CommandsCommandCreateEnvelopeInput, CommandsCommandCreateInput>
    logType?: string | null
    message?: string | null
    time: Date | string
    type?: string | null
  }

  export type commandsUpdateManyMutationInput = {
    author?: XOR<CommandsAuthorNullableUpdateEnvelopeInput, CommandsAuthorCreateInput> | null
    command?: XOR<CommandsCommandUpdateEnvelopeInput, CommandsCommandCreateInput>
    logType?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type commandsUncheckedUpdateManyInput = {
    author?: XOR<CommandsAuthorNullableUpdateEnvelopeInput, CommandsAuthorCreateInput> | null
    command?: XOR<CommandsCommandUpdateEnvelopeInput, CommandsCommandCreateInput>
    logType?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LoggerDefaultCreateInput = {
    id?: string
  }

  export type LoggerDefaultUncheckedCreateInput = {
    id?: string
  }

  export type LoggerDefaultCreateManyInput = {
    id?: string
  }

  export type LoggerDefaultUpdateInput = {

  }

  export type LoggerDefaultUncheckedUpdateInput = {

  }

  export type LoggerDefaultUpdateManyMutationInput = {

  }

  export type LoggerDefaultUncheckedUpdateManyInput = {

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

  export type CommandsAuthorNullableCompositeFilter = {
    equals?: CommandsAuthorObjectEqualityInput | null
    is?: CommandsAuthorWhereInput | null
    isNot?: CommandsAuthorWhereInput | null
    isSet?: boolean
  }

  export type CommandsAuthorObjectEqualityInput = {
    accent_color?: string | null
    avatar?: string | null
    banner?: string | null
    bot?: boolean | null
    discriminator?: string | null
    id: string
    public_flags?: bigint | number | null
    tag?: string | null
    username?: string | null
  }

  export type CommandsCommandCompositeFilter = {
    equals?: CommandsCommandObjectEqualityInput
    is?: CommandsCommandWhereInput
    isNot?: CommandsCommandWhereInput
  }

  export type CommandsCommandObjectEqualityInput = {
    args?: Enumerable<string>
    guild_id?: string | null
    id?: string | null
    isSlashCommand?: boolean | null
    name: string
    options?: Enumerable<CommandDataOptionObjectEqualityInput>
    resolved?: InputJsonValue | null
    target_id?: string | null
    type?: bigint | number | null
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

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type CommandsAuthorOrderByInput = {
    accent_color?: SortOrder
    avatar?: SortOrder
    banner?: SortOrder
    bot?: SortOrder
    discriminator?: SortOrder
    id?: SortOrder
    public_flags?: SortOrder
    tag?: SortOrder
    username?: SortOrder
  }

  export type CommandsCommandOrderByInput = {
    args?: SortOrder
    guild_id?: SortOrder
    id?: SortOrder
    isSlashCommand?: SortOrder
    name?: SortOrder
    options?: CommandDataOptionOrderByCompositeAggregateInput
    resolved?: SortOrder
    target_id?: SortOrder
    type?: SortOrder
  }

  export type commandsCountOrderByAggregateInput = {
    id?: SortOrder
    logType?: SortOrder
    message?: SortOrder
    time?: SortOrder
    type?: SortOrder
  }

  export type commandsMaxOrderByAggregateInput = {
    id?: SortOrder
    logType?: SortOrder
    message?: SortOrder
    time?: SortOrder
    type?: SortOrder
  }

  export type commandsMinOrderByAggregateInput = {
    id?: SortOrder
    logType?: SortOrder
    message?: SortOrder
    time?: SortOrder
    type?: SortOrder
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

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type LoggerDefaultCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LoggerDefaultMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LoggerDefaultMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommandsAuthorNullableCreateEnvelopeInput = {
    set?: CommandsAuthorCreateInput | null
  }

  export type CommandsAuthorCreateInput = {
    accent_color?: string | null
    avatar?: string | null
    banner?: string | null
    bot?: boolean | null
    discriminator?: string | null
    id: string
    public_flags?: bigint | number | null
    tag?: string | null
    username?: string | null
  }

  export type CommandsCommandCreateEnvelopeInput = {
    set?: CommandsCommandCreateInput
  }

  export type CommandsCommandCreateInput = {
    args?: CommandsCommandCreateargsInput | Enumerable<string>
    guild_id?: string | null
    id?: string | null
    isSlashCommand?: boolean | null
    name: string
    options?: Enumerable<CommandDataOptionCreateInput>
    resolved?: InputJsonValue | null
    target_id?: string | null
    type?: bigint | number | null
  }

  export type CommandsAuthorNullableUpdateEnvelopeInput = {
    set?: CommandsAuthorCreateInput | null
    upsert?: CommandsAuthorUpsertInput
    unset?: boolean
  }

  export type CommandsCommandUpdateEnvelopeInput = {
    set?: CommandsCommandCreateInput
    update?: CommandsCommandUpdateInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type CommandsAuthorWhereInput = {
    AND?: Enumerable<CommandsAuthorWhereInput>
    OR?: Enumerable<CommandsAuthorWhereInput>
    NOT?: Enumerable<CommandsAuthorWhereInput>
    accent_color?: StringNullableFilter | string | null
    avatar?: StringNullableFilter | string | null
    banner?: StringNullableFilter | string | null
    bot?: BoolNullableFilter | boolean | null
    discriminator?: StringNullableFilter | string | null
    id?: StringFilter | string
    public_flags?: BigIntNullableFilter | bigint | number | null
    tag?: StringNullableFilter | string | null
    username?: StringNullableFilter | string | null
  }

  export type CommandsCommandWhereInput = {
    AND?: Enumerable<CommandsCommandWhereInput>
    OR?: Enumerable<CommandsCommandWhereInput>
    NOT?: Enumerable<CommandsCommandWhereInput>
    args?: StringNullableListFilter
    guild_id?: StringNullableFilter | string | null
    id?: StringNullableFilter | string | null
    isSlashCommand?: BoolNullableFilter | boolean | null
    name?: StringFilter | string
    options?: XOR<CommandDataOptionCompositeListFilter, Enumerable<CommandDataOptionObjectEqualityInput>>
    resolved?: JsonNullableFilter
    target_id?: StringNullableFilter | string | null
    type?: BigIntNullableFilter | bigint | number | null
  }

  export type CommandDataOptionObjectEqualityInput = {
    name: string
    values?: InputJsonValue | null
    kind: string
    options?: Enumerable<CommandDataOptionObjectEqualityInput>
    resolved?: InputJsonValue | null
    focused: boolean
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

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type CommandDataOptionOrderByCompositeAggregateInput = {
    _count?: SortOrder
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

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type CommandsCommandCreateargsInput = {
    set: Enumerable<string>
  }

  export type CommandDataOptionCreateInput = {
    name: string
    values?: InputJsonValue | null
    kind: string
    options?: Enumerable<CommandDataOptionCreateInput>
    resolved?: InputJsonValue | null
    focused: boolean
  }

  export type CommandsAuthorUpsertInput = {
    set: CommandsAuthorCreateInput | null
    update: CommandsAuthorUpdateInput
  }

  export type CommandsCommandUpdateInput = {
    args?: CommandsCommandUpdateargsInput | Enumerable<string>
    guild_id?: NullableStringFieldUpdateOperationsInput | string | null
    id?: NullableStringFieldUpdateOperationsInput | string | null
    isSlashCommand?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: StringFieldUpdateOperationsInput | string
    options?: XOR<CommandDataOptionListUpdateEnvelopeInput, Enumerable<CommandDataOptionCreateInput>>
    resolved?: InputJsonValue | InputJsonValue | null
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
    isSet?: boolean
  }

  export type BigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
    isSet?: boolean
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type CommandDataOptionCompositeListFilter = {
    equals?: Enumerable<CommandDataOptionObjectEqualityInput>
    every?: CommandDataOptionWhereInput
    some?: CommandDataOptionWhereInput
    none?: CommandDataOptionWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | null
    not?: InputJsonValue | null
    isSet?: boolean
  }

  export type CommandsAuthorUpdateInput = {
    accent_color?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discriminator?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    public_flags?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommandsCommandUpdateargsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
    unset?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CommandDataOptionListUpdateEnvelopeInput = {
    set?: Enumerable<CommandDataOptionCreateInput>
    push?: Enumerable<CommandDataOptionCreateInput>
    updateMany?: CommandDataOptionUpdateManyInput
    deleteMany?: CommandDataOptionDeleteManyInput
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
    unset?: boolean
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
    isSet?: boolean
  }

  export type NestedBigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
    isSet?: boolean
  }

  export type CommandDataOptionWhereInput = {
    AND?: Enumerable<CommandDataOptionWhereInput>
    OR?: Enumerable<CommandDataOptionWhereInput>
    NOT?: Enumerable<CommandDataOptionWhereInput>
    name?: StringFilter | string
    values?: JsonNullableFilter
    kind?: StringFilter | string
    options?: XOR<CommandDataOptionCompositeListFilter, Enumerable<CommandDataOptionObjectEqualityInput>>
    resolved?: JsonNullableFilter
    focused?: BoolFilter | boolean
  }

  export type CommandDataOptionUpdateManyInput = {
    where: CommandDataOptionWhereInput
    data: CommandDataOptionUpdateInput
  }

  export type CommandDataOptionDeleteManyInput = {
    where: CommandDataOptionWhereInput
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type CommandDataOptionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    values?: InputJsonValue | InputJsonValue | null
    kind?: StringFieldUpdateOperationsInput | string
    options?: XOR<CommandDataOptionListUpdateEnvelopeInput, Enumerable<CommandDataOptionCreateInput>>
    resolved?: InputJsonValue | InputJsonValue | null
    focused?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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