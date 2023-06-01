import { ChangeStream, Collection, Document, MongoClient } from 'mongodb';
import client from '../services/database';
import { AllLogs, MessageLog } from '../types/Logger';
import { DateParams, PaginationParams } from '../types/Models';
import { PagedData } from '../types/Models';

type findParams = {
  filter: string | string[];
} & PaginationParams &
  DateParams;

export default class Logger {
  private static readonly dbName = 'Logger';
  private static readonly client: MongoClient = client;

  static async find(params: findParams): Promise<PagedData<AllLogs[]>> {
    const { filter, page, numPerPage, dateInitial, dateFinal } = params;
    const parsedFilter = filter === 'all' ? await this.getAllCollectionNames() : filter;

    const db = client.db(this.dbName);
    const mainCollName = Array.isArray(parsedFilter)
      ? (parsedFilter.shift() as string)
      : parsedFilter;

    const mainColl = db.collection(mainCollName);

    const datePipeline = this.makeDatePipeLine(dateInitial, dateFinal);
    const pipeline: Document[] = [...datePipeline, { $set: { category: mainCollName } }];

    Array.isArray(parsedFilter) &&
      parsedFilter.forEach((val) => {
        pipeline.push({
          $unionWith: {
            coll: val,
            pipeline: [...datePipeline, { $set: { category: val } }],
          },
        });
      });

    pipeline.push({ $sort: { time: -1 } });

    const pagination = this.makePaginationPipeline(page, numPerPage);
    pipeline.push(...pagination);

    const cursor = mainColl.aggregate<PagedData<AllLogs[]>>(pipeline);

    const data: PagedData<AllLogs[]> = (await cursor.toArray())[0];

    return data;
  }

  static async findMessagesByUserId(
    userId: string,
    pagination: PaginationParams,
    date: DateParams
  ): Promise<PagedData<MessageLog[]>> {
    const db = client.db(this.dbName);
    const collection = db.collection('messages');

    const pipeline: Document[] = [];

    const { dateInitial, dateFinal } = date;
    pipeline.push(...this.makeDatePipeLine(dateInitial, dateFinal));

    pipeline.push({ $match: { 'data.author.id': userId } }, { $sort: { time: -1 } });

    const { page, numPerPage } = pagination;
    pipeline.push(...this.makePaginationPipeline(page, numPerPage));

    const cursor = collection.aggregate<PagedData<MessageLog[]>>(pipeline);

    const data: PagedData<MessageLog[]> = (await cursor.toArray())[0];

    return data;
  }

  static async getAllCollections(): Promise<Collection<Document>[]> {
    const db = client.db(this.dbName);
    const colls = await db.collections();
    return colls;
  }

  static async getChangeSets(): Promise<Map<string, ChangeStream>> {
    const db = this.client.db(this.dbName);
    const streamMap = new Map<string, ChangeStream>();
    const cursor = db.listCollections();

    for await (const info of cursor) {
      const collection = db.collection(info.name);
      const commandsStream = collection.watch();
      streamMap.set(info.name, commandsStream);
    }

    return streamMap;
  }

  static async getMemberMessagesChangeSet(userId: string): Promise<ChangeStream> {
    const db = this.client.db(this.dbName);
    const collection = db.collection('messages');
    return collection.watch([
      { $match: { operationType: 'insert' } },
      { $match: { 'fullDocument.data.author.id': userId } },
    ]);
  }

  static async checkCategory(types: string | string[]): Promise<boolean> {
    if (types === 'all') return true;

    const collNames = await this.getAllCollectionNames();
    return Array.isArray(types)
      ? types.every((val) => collNames.includes(val))
      : collNames.includes(types);
  }

  static async getAllCollectionNames(): Promise<string[]> {
    const db = this.client.db(this.dbName);
    return (await db.listCollections().toArray()).map((val) => val.name);
  }

  private static makeDatePipeLine(initial: number, final: number): Document[] {
    const datePipeline: Document[] = [];

    if (initial || final) {
      const time = {};
      initial && Object.defineProperty(time, '$gt', { value: new Date(initial), enumerable: true });
      final && Object.defineProperty(time, '$lt', { value: new Date(final), enumerable: true });

      datePipeline.push({ $match: { time } });
    }

    return datePipeline;
  }

  private static makePaginationPipeline(page: number, numPerPage?: number): Document[] {
    const facetData: Document[] = [];
    numPerPage && facetData.push({ $skip: (page - 1) * numPerPage });
    numPerPage && facetData.push({ $limit: numPerPage });

    const pipeline = [
      {
        $facet: {
          metadata: [{ $count: 'total' }, { $addFields: { page: page } }],
          data: facetData,
        },
      },
      { $unwind: '$metadata' },
    ];

    return pipeline;
  }
}
