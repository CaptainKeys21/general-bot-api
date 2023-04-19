import { MongoClient } from 'mongodb';
import client from '../services/database';
import { IDiscordRole } from '../types/Discord';

export default class Roles {
  private static readonly dbName = 'GeneralBot';
  private static readonly collName = 'roles';

  private static readonly client: MongoClient = client;

  static async findAll(): Promise<IDiscordRole[]> {
    const db = this.client.db(this.dbName);
    const collection = db.collection<IDiscordRole>(this.collName);

    const cursor = collection.find();

    const data: IDiscordRole[] = [];
    await cursor.forEach((role) => {
      data.push({ ...role });
    });

    return data;
  }
}
