import { MongoClient } from 'mongodb';
import client from '../services/database';
import { AllowedData, CommandAllowedIdsConfig, KeynamedCAIConfig } from '../types/Config';

export default class CommandAllowedIdsConfigModel {
  private static readonly dbName = 'GeneralBot';
  private static readonly collName = 'config';
  private static readonly config_type = 'command_allowed_ids';

  private static readonly client: MongoClient = client;

  static async findAll(keyname?: boolean): Promise<CommandAllowedIdsConfig[] | KeynamedCAIConfig> {
    const db = this.client.db(this.dbName);
    const collection = db.collection<CommandAllowedIdsConfig>(this.collName);

    const cursor = collection.find({ config_type: this.config_type }, { projection: { _id: 0 } });

    if (keyname) {
      const data = new Map();

      await cursor.forEach((conf) => {
        data.set(conf.name, {
          config_type: conf.config_type,
          allowed: conf.allowed,
        });
      });

      return Object.fromEntries(data);
    }

    const data: CommandAllowedIdsConfig[] = [];
    await cursor.forEach((conf) => {
      data.push(conf);
    });

    return data;
  }
  static async findOne(name: string): Promise<CommandAllowedIdsConfig | null> {
    const db = this.client.db(this.dbName);
    const collection = db.collection<CommandAllowedIdsConfig>(this.collName);

    const data = await collection.findOne(
      { config_type: this.config_type, name },
      { projection: { _id: 0 } }
    );

    return data;
  }

  static async insertOne(data: CommandAllowedIdsConfig): Promise<string> {
    const db = this.client.db(this.dbName);
    const collection = db.collection<CommandAllowedIdsConfig>(this.collName);

    const result = await collection.insertOne(data);

    return result.insertedId.toString();
  }

  static async editOne(name: string, data?: AllowedData): Promise<boolean> {
    const db = this.client.db(this.dbName);
    const collection = db.collection<CommandAllowedIdsConfig>(this.collName);

    const result = await collection.updateOne(
      { config_type: this.config_type, name },
      { $set: { allowed: data } }
    );

    return result.acknowledged;
  }

  static async deleteOne(name: string): Promise<boolean> {
    const db = this.client.db(this.dbName);
    const collection = db.collection<CommandAllowedIdsConfig>(this.collName);

    const result = await collection.deleteOne({ config_type: this.config_type, name });

    return result.acknowledged;
  }
}
