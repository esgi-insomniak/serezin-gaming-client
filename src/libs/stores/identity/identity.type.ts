export type Identity = {
  name: string;
};

export type Settings = {
  theme: string;
};

export type IdentityState = {
  identity: Identity;
  isConnected: boolean;
  settings: Settings;
  setIdentity: (name: string) => void;
  setConnected: (isConnected: boolean) => void;
  setSettings: (settings: Settings) => void;
  resetIdentity: () => void;
};
