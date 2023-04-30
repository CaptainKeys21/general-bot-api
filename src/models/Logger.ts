import { ChangeStream, Collection, Document, MongoClient } from 'mongodb';
import client from '../services/database';
import { AllLogs } from '../types/Logger';

type findParams = {
  filter: string | string[];
  page: number;
  numPerPage?: number;
};

type returnFind = {
  metadata: {
    total: number;
    page: number;
  }[];
  data: AllLogs[];
};

export default class Logger {
  private static readonly dbName = 'Logger';
  private static readonly client: MongoClient = client;

  static async find(params: findParams): Promise<returnFind> {
    const { filter, page, numPerPage } = params;
    const parsedFilter = filter === 'all' ? await this.getAllCollectionNames() : filter;

    const db = client.db(this.dbName);
    const mainCollName = Array.isArray(parsedFilter)
      ? (parsedFilter.shift() as string)
      : parsedFilter;

    const mainColl = db.collection(mainCollName);

    const pipeline: Document[] = [{ $set: { category: mainCollName } }];

    Array.isArray(parsedFilter) &&
      parsedFilter.forEach((val) =>
        pipeline.push({
          $unionWith: {
            coll: val,
            pipeline: [{ $set: { category: val } }],
          },
        })
      );

    pipeline.push({ $sort: { time: -1 } });

    const facetData: { [key: string]: number }[] = [];
    numPerPage && facetData.push({ $limit: numPerPage });
    numPerPage && facetData.push({ $skip: (page - 1) * numPerPage });

    pipeline.push(
      {
        $facet: {
          metadata: [{ $count: 'total' }, { $addFields: { page: page } }],
          data: facetData,
        },
      },
      { $unwind: '$metadata' }
    );

    console.log(pipeline);
    const cursor = mainColl.aggregate<returnFind>(pipeline);

    const data: returnFind = (await cursor.toArray())[0];

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
      const collCommands = db.collection(info.name);
      const commandsStream = collCommands.watch();
      streamMap.set(info.name, commandsStream);
    }

    return streamMap;
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
}
