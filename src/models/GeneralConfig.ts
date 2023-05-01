import { MongoClient } from 'mongodb';
import client from '../services/database';
import { GeneralConfig, KeynamedGeneralConfig } from '../types/Config';

export default class GeneralConfigModel {
  private static readonly dbName = 'GeneralBot';
  private static readonly collName = 'config';
  private static readonly config_type = 'general';

  private static readonly client: MongoClient = client;

  static async findAll(keyname?: boolean): Promise<GeneralConfig[] | KeynamedGeneralConfig> {
    const db = this.client.db(this.dbName);
    const collection = db.collection<GeneralConfig>(this.collName);

    const cursor = collection.find({ config_type: this.config_type }, { projection: { _id: 0 } });

    if (keyname) {
      const data = new Map();

      await cursor.forEach((conf) => {
        data.set(conf.name, {
          config_type: conf.config_type,
          data: conf.data,
          label: conf.label,
        });
      });

      return Object.fromEntries(data);
    }

    const data: GeneralConfig[] = [];
    await cursor.forEach((conf) => {
      data.push(conf);
    });

    return data;
  }
  static async findOne(name: string): Promise<GeneralConfig | null> {
    const db = this.client.db(this.dbName);
    const collection = db.collection<GeneralConfig>(this.collName);

    const data = await collection.findOne(
      { config_type: this.config_type, name },
      { projection: { _id: 0 } }
    );

    return data;
  }

  static async insertOne(data: GeneralConfig): Promise<string> {
    const db = this.client.db(this.dbName);
    const collection = db.collection<GeneralConfig>(this.collName);

    const result = await collection.insertOne(data);

    return result.insertedId.toString();
  }

  static async editOne(name: string, data?: string): Promise<boolean> {
    const db = this.client.db(this.dbName);
    const collection = db.collection<GeneralConfig>(this.collName);

    const result = await collection.updateOne(
      { config_type: this.config_type, name },
      { $set: { data } }
    );

    return result.acknowledged;
  }

  static async deleteOne(name: string): Promise<boolean> {
    const db = this.client.db(this.dbName);
    const collection = db.collection<GeneralConfig>(this.collName);

    const result = await collection.deleteOne({ config_type: this.config_type, name });

    return result.acknowledged;
  }
}
