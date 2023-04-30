import { Long } from 'mongodb';
import { IDiscordUser } from './Discord';

export type AllLogs = ICommandLog;

interface IBaseLog {
  logType: string;
  category: string;
  message: string;
  time: Date;
}

export interface ICommandLog extends IBaseLog {
  author: IDiscordUser;
  command: ISlashCommand | IPrefixCommand;
}

export interface IPrefixCommand {
  name: string;
  args: string[];
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
