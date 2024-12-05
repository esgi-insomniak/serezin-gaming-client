export type Identity = {
  name: string;
};

export type IdentityState = {
  identity: Identity;
  isConnected: boolean;
  setIdentity: (name: string) => void;
  setConnected: (isConnected: boolean) => void;
  resetIdentity: () => void;
};
