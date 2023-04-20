import { Long } from 'mongodb';

export interface IDiscordUser {
  id: string;
  avatar: string | null;
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
  roles: IDiscordRole[];
  user: IDiscordUser;
  pending: boolean;
  premium_since: Date | null;
  permissions: Long | null;
  avatar: string | null;
  communication_disables_until: Date | null;
}

export interface IDiscordRole {
  id: string;
  guild_id: string;
  color: Long;
  hoist: boolean;
  managed: boolean;
  mentionable: boolean;
  name: string;
  permitions: string;
  position: Long;
  tags: {
    bot_id: string | null;
    integration_id: string | null;
  };
  icon: string | null;
  unicode_emoji: string | null;
}
