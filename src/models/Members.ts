import { ChangeStream, MongoClient, Document } from 'mongodb';
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

  static async findAll(
    pagination: PaginationParams,
    searchQuery: string
  ): Promise<PagedData<DiscordMember[]>> {
    const db = this.client.db(this.dbName);
    const collection = db.collection<DiscordMember>(this.collName);

    const { page, numPerPage = 100 } = pagination;

    const pipeline: Document[] = [];
    pipeline.push({
      $lookup: {
        from: 'roles',
        localField: 'roles',
        foreignField: 'id',
        as: 'roles',
      },
    });

    searchQuery &&
      pipeline.push({
        $match: {
          $or: [{ 'user.username': new RegExp(searchQuery) }, { nick: new RegExp(searchQuery) }],
        },
      });

    pipeline.push(
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
          data: [{ $skip: (page - 1) * numPerPage }, { $limit: numPerPage }],
        },
      },
      { $unwind: '$metadata' }
    );

    const cursor = collection.aggregate<PagedData<DiscordMember[]>>(pipeline);

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
