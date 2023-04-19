import { ChangeStream, MongoClient } from 'mongodb';
import client from '../services/database';
import { IDiscordMember } from '../types/Discord';

export default class Members {
  private static readonly dbName = 'GeneralBot';
  private static readonly collName = 'members';

  private static readonly client: MongoClient = client;

  static async getChangeSet(): Promise<ChangeStream> {
    const db = this.client.db(this.dbName);
    const collection = db.collection<IDiscordMember>(this.collName);
    const membersStream = collection.watch();

    return membersStream;
  }

  static async findAll(_pagination?: [number, number]): Promise<IDiscordMember[]> {
    const db = this.client.db(this.dbName);
    const collection = db.collection<IDiscordMember>(this.collName);

    const cursor = collection.aggregate([
      {
        $lookup: {
          from: 'roles',
          localField: 'roles',
          foreignField: 'id',
          as: 'roles',
        },
      },
    ]);

    const data: any[] = [];
    await cursor.forEach((mem) => {
      data.push({ ...mem });
    });

    return data;
  }
}
