export interface IGeneralConfig {
  name: string;
  config_type: string;
  data?: string;
}

export interface IKeynamedGeneralConfig {
  [k: string]: { config_type: string; data?: string | undefined };
}

export interface ICommandAllowedIdsConfig {
  name: string;
  config_type: string;
  allowed: {
    users: string[];
    roles: string[];
  };
}

export interface IKeynamedCAIConfig {
  [k: string]: {
    config_type: string;
    allowed: IAllowedData;
  };
}

export interface IAllowedData {
  users: string[];
  roles: string[];
}
