export type Identity = {
  name: string;
};

export type Settings = {
  theme: string;
};

export type ActionIdentity = {
  setIdentity: (name: string) => void;
  setConnected: (isConnected: boolean) => void;
  setSettings: (settings: Settings) => void;
  resetIdentity: () => void;
};

export type IdentityState = {
  identity: Identity;
  isConnected: boolean;
  settings: Settings;
  actions: ActionIdentity;
};
