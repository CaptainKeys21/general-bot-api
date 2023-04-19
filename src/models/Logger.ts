import { ChangeStream, Collection, Document, MongoClient } from 'mongodb';
import client from '../services/database';
import { AllLogs } from '../types/Logger';

type filterType = 'all' | 'default' | 'commands';
type findParams = {
  filter: filterType;
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
    const db = client.db(this.dbName);
    const coll = db.collection('commands');

    const facetData: { [key: string]: number }[] = [];
    params.numPerPage && facetData.push({ $limit: params.numPerPage });
    params.numPerPage && facetData.push({ $skip: (params.page - 1) * params.numPerPage });

    const cursor = coll.aggregate<returnFind>([
      { $sort: { time: -1 } },
      {
        $facet: {
          metadata: [{ $count: 'total' }, { $addFields: { page: params.page } }],
          data: facetData,
        },
      },
      { $unwind: '$metadata' },
    ]);

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
}
