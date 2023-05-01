import { DiscordUser, InteractionType } from './Discord';

export type AllLogs = CommandLog;

interface BaseLog {
  logType: string;
  category: string;
  message?: string;
  time: Date;
}

export interface CommandLog extends BaseLog {
  author: DiscordUser;
  command: SlashCommand | PrefixCommand;
}

export interface PrefixCommand {
  name: string;
  args: string[];
}

export interface SlashCommand {
  id: string;
  name: string;
  type: InteractionType;
  resolved: {
    [key: string]: string;
  };
  options: string[];
  guild_id: string;
  target_id: string | null;
}
