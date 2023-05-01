export interface GeneralConfig {
  name: string;
  config_type: string;
  data?: string;
  label?: string;
}

export interface KeynamedGeneralConfig {
  [k: string]: {
    config_type: string;
    data?: string;
    label?: string;
  };
}

export interface CommandAllowedIdsConfig {
  name: string;
  config_type: string;
  allowed: {
    users: string[];
    roles: string[];
  };
}

export interface KeynamedCAIConfig {
  [k: string]: {
    config_type: string;
    allowed: AllowedData;
  };
}

export interface AllowedData {
  users: string[];
  roles: string[];
}
