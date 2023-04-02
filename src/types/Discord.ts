import { Long } from 'mongodb';

export interface IDiscordUser {
  id: string;
  avatar: string;
  bot: boolean;
  discriminator: string;
  username: string;
  public_flags: Long;
  banner: string | null;
  accent_color: string | null;
}

export interface IDiscordMember {
  deaf: boolean;
  guild_id: string;
  joined_at: Date;
  mute: boolean;
  nick: string | null;
  roles: string[];
  user: IDiscordUser;
  pending: boolean;
  premium_since: Date | null;
  permissions: Long | null;
  avatar: string | null;
  communication_disables_until: Date | null;
}
