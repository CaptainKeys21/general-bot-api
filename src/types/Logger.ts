import { Long } from 'mongodb';
import { IDiscordUser } from './Discord';

export type AllLogs = ICommandLog | ISlashCommand;

export interface ICommandLog {
  logType: string;
  author: IDiscordUser;
  command: ISlashCommand;
  message: string;
  time: Date;
}

export interface ISlashCommand {
  id: string;
  name: string;
  type: Long;
  resolved: {
    [key: string]: string;
  };
  options: string[];
  guild_id: string;
  target_id: string | null;
}
