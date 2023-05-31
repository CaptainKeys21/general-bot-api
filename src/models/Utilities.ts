import { MongoClient } from 'mongodb';
import client from '../services/database';
import { DiscordEmoji } from '../types/Discord';

interface IdNames {
  [k: string]: string | ExtraData;
}

type ExtraData = {
  name: string;
  color?: number;
  type?: number;
};

export default class Utilities {
  private static readonly dbName = 'GeneralBot';

  private static readonly client: MongoClient = client;

  static async findNameById(ids: string[]): Promise<IdNames> {
    const db = this.client.db(this.dbName);
    const coll = db.collection('members');
    const cursor = coll.aggregate([
      { $match: { 'user.id': { $in: ids } } },
      {
        $project: {
          _id: false,
          id: '$user.id',
          value: {
            $cond: [{ $ne: ['$nick', null] }, { name: '$nick' }, { name: '$user.username' }],
          },
        },
      },
      {
        $unionWith: {
          coll: 'roles',
          pipeline: [
            { $match: { id: { $in: ids } } },
            { $project: { _id: false, id: '$id', value: { name: '$name', color: '$color' } } },
          ],
        },
      },
      {
        $unionWith: {
          coll: 'channels',
          pipeline: [
            { $match: { id: { $in: ids } } },
            { $project: { _id: false, id: '$id', value: { name: '$name', type: '$type' } } },
          ],
        },
      },
      { $replaceRoot: { newRoot: { $arrayToObject: [[{ k: '$id', v: '$value' }]] } } },
      { $group: { _id: 0, merged: { $push: '$$ROOT' } } },
      { $replaceRoot: { newRoot: { $mergeObjects: '$merged' } } },
    ]);

    const data: IdNames = (await cursor.toArray())[0];
    return data;
  }

  static async findEmojisById(ids: string[]): Promise<DiscordEmoji[]> {
    const parsedIds = ids.map((val) => {
      const split = val.split(':');
      return {
        animated: Boolean(split[0]),
        name: split[1],
        id: split[2],
      };
    });

    const db = this.client.db(this.dbName);
    const coll = db.collection<DiscordEmoji>('emojis');

    const cursor = coll.find({
      $and: [
        { id: { $in: parsedIds.map((data) => data.id) } },
        { name: { $in: parsedIds.map((data) => data.name) } },
      ],
    });

    const data = await cursor.toArray();

    return data;
  }
}
