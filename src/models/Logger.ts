import { ChangeStream, Collection, Document, MongoClient } from 'mongodb';
import client from '../services/database';

export default class Logger {
  private static readonly dbName = 'Logger';
  private static readonly client: MongoClient = client;

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
