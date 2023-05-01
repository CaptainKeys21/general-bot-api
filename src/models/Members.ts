import { ChangeStream, MongoClient } from 'mongodb';
import client from '../services/database';
import { DiscordMember } from '../types/Discord';
import { PagedData, PaginationParams } from '../types/Models';

export default class Members {
  private static readonly dbName = 'GeneralBot';
  private static readonly collName = 'members';

  private static readonly client: MongoClient = client;

  static async getChangeSet(): Promise<ChangeStream> {
    const db = this.client.db(this.dbName);
    const collection = db.collection<DiscordMember>(this.collName);
    const membersStream = collection.watch();

    return membersStream;
  }

  static async findAll(pagination: PaginationParams): Promise<PagedData<DiscordMember[]>> {
    const db = this.client.db(this.dbName);
    const collection = db.collection<DiscordMember>(this.collName);

    const { page, numPerPage = 100 } = pagination;

    const cursor = collection.aggregate<PagedData<DiscordMember[]>>([
      {
        $lookup: {
          from: 'roles',
          localField: 'roles',
          foreignField: 'id',
          as: 'roles',
        },
      },
      {
        $facet: {
          metadata: [
            { $count: 'total' },
            {
              $addFields: {
                page,
                totalPages: { $ceil: { $divide: ['$total', numPerPage] } },
              },
            },
          ],
          data: [{ $limit: numPerPage }, { $skip: (page - 1) * numPerPage }],
        },
      },
      { $unwind: '$metadata' },
    ]);

    const data: PagedData<DiscordMember[]> = (await cursor.toArray())[0];

    return data;
  }

  static async findOne(id: string): Promise<DiscordMember | null> {
    const db = this.client.db(this.dbName);
    const collection = db.collection<DiscordMember>(this.collName);

    const cursor = collection.aggregate<DiscordMember>([
      { $match: { 'user.id': id } },
      {
        $lookup: {
          from: 'roles',
          localField: 'roles',
          foreignField: 'id',
          as: 'roles',
        },
      },
    ]);
    const result = await cursor.toArray();

    if (!result.length) return null;

    return result[0];
  }
}
