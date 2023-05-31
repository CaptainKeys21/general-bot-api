import { Long } from 'mongodb';
import { Embed } from './DiscordEmbed';

export interface DiscordUser {
  id: string;
  avatar: string | null;
  bot: boolean;
  discriminator: string;
  username: string;
  public_flags: Long;
  banner: string | null;
  accent_color: string | null;
}

export interface DiscordMember {
  deaf: boolean;
  guild_id: string;
  joined_at: Date;
  mute: boolean;
  nick: string | null;
  roles: DiscordRole[];
  user: DiscordUser;
  pending: boolean;
  premium_since: Date | null;
  permissions: Long | null;
  avatar: string | null;
  communication_disables_until: Date | null;
}

export interface DiscordRole {
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

export interface DiscordChannel {
  id: string;
  bitrate: number | null;
  parent_id: string | null;
  guild_id: string;
  kind: ChannelType;
  last_message_id: string | null;
  last_pin_timestamp: string | null;
  name: string;
  permission_overwrites: PermissionOverwrite[];
  position: number;
  topic: string | null;
  user_limit: number | null;
  nsfw: boolean;
  rate_limit_per_user: number | null;
  rtc_region: string | null;
  video_quality_mode: VideoQualityMode;
  message_count: number | null;
  member_count: number | null;
  thread_metadata: ThreadMetadata | null;
  member: ThreadMember | null;
  default_auto_archive_duration: number | null;
}

export interface DiscordEmoji {
  animated: boolean;
  available: boolean;
  id: string;
  name: string;
  managed: boolean;
  require_colons: boolean;
  roles: DiscordRole[];
  user: DiscordUser | null;
}

export interface ThreadMember {
  id: string | null;
  user_id: string | null;
  join_timestamp: string;
  flags: string;
}

export interface ThreadMetadata {
  archived: boolean;
  auto_archive_duration: number | null;
  archive_timestamp: string | null;
  locked: boolean;
  create_timestamp: string | null;
  invitable: boolean;
}

export enum VideoQualityMode {
  Auto,
  Full,
  Unknown,
}

export interface PermissionOverwrite {
  allow: string;
  deny: string;
  id: string;
  type: string;
}

export interface DiscordMessage {
  id: string;
  attachments: DiscordAttachment[];
  author: DiscordUser;
  channel_id: string;
  content: string;
  edited_timestamp: Date | null;
  embeds: Embed[];
  guild_id: string | null;
  kind: MessageType;
  member: DiscordMember | null;
  mention_everyone: boolean;
  mention_roles: string[];
  mention_channels: {
    id: string;
    guild_id: string;
    kind: ChannelType;
    name: string;
  }[];
  mentions: DiscordUser[];
  nonce: string;
  pinned: boolean;
  reactions: MessageReaction[];
  timestamp: string;
  tts: boolean;
  webhook: string | null;
  activity: {
    kind: MessageActivityKind;
    party_id: string | null;
  } | null;
  application: {
    id: string;
    cover_image: string | null;
    description: string;
    icon: string | null;
    name: string;
  } | null;
  message_reference: {
    message_id: string | null;
    channel_id: string;
    guild_id: string | null;
  } | null;
  flags: number;
  sticker_items: {
    id: string;
    name: string;
    format_type: StickerFormatType;
  };
  referenced_message: DiscordMessage | null;
  interaction: {
    id: string;
    kind: InteractionType;
    name: string;
    user: DiscordUser;
  };
  components: ActionRow[];
}

export interface MessageReaction {
  count: number;
  me: boolean;
  reaction_type: ReactionType;
}

export type ReactionType =
  | {
      animated: boolean;
      id: string;
      name: string | null;
    }
  | string;

export interface DiscordAttachment {
  id: number;
  filename: string;
  height: number | null;
  proxy_url: string;
  size: number;
  url: string;
  width: number | null;
  content_type: string | null;
  ephemeral: boolean;
}

export interface ActionRow {
  kind: ComponentType;
  components: ActionRowComponent[];
}

export interface DiscordButton {
  kind: ComponentType;
  style: ButtonStyle;
  label: string | null;
  emoji: ReactionType | null;
  custom_id: string | null;
  url: string | null;
  disabled: boolean;
}

export interface DiscordSelectMenu {
  kind: ComponentType;
  placeholder: string | null;
  custom_id: string | null;
  min_values: number | null;
  max_values: number | null;
  options: {
    label: string;
    value: string;
    description: string | null;
    emoji: ReactionType | null;
    default: boolean;
  }[];
  values: string[];
}

export interface DiscordInputText {
  kind: ComponentType;
  custom_id: string;
  value: string;
}

export type ActionRowComponent = DiscordButton | DiscordSelectMenu | DiscordInputText;

export enum InteractionType {
  Ping,
  ApplicationCommand,
  MessageComponent,
  Autocomplete,
  ModalSubmit,
  Unknown,
}

export enum MessageType {
  Regular,
  GroupRecipientAddition,
  GroupRecipientRemoval,
  GroupCallCreation,
  GroupNameUpdate,
  GroupIconUpdate,
  PinsAdd,
  MemberJoin,
  NitroBoost,
  NitroTier1,
  NitroTier2,
  NitroTier3,
  ChannelFollowAdd,
  GuildDiscoveryDisqualified,
  GuildDiscoveryRequalified,
  GuildDiscoveryGracePeriodInitialWarning,
  GuildDiscoveryGracePeriodFinalWarning,
  ThreadCreated,
  InlineReply,
  ChatInputCommand,
  ThreadStarterMessage,
  GuildInviteReminder,
  ContextMenuCommand,
  AutoModerationAction,
  Unknown,
}

export enum ChannelType {
  Text,
  Private,
  Voice,
  Category,
  News,
  NewsThread,
  PublicThread,
  PrivateThread,
  Stage,
  Directory,
  Forum,
  Unknown,
}

export enum MessageActivityKind {
  JOIN,
  SPECTATE,
  LISTEN,
  JOIN_REQUEST,
  Unknown,
}

export enum StickerFormatType {
  Png,
  Apng,
  Lottie,
  Unknown,
}

export enum ComponentType {
  ActionRow,
  Button,
  SelectMenu,
  InputText,
  Unknown,
}

export enum ButtonStyle {
  Primary,
  Secondary,
  Success,
  Danger,
  Link,
  Unknown,
}
