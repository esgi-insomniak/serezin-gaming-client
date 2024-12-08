import { AuthenticateUserDtoRiot, AuthenticateUserDtoUser } from '@/libs/api';

export type Identity = {
  discord: AuthenticateUserDtoUser;
  riot?: AuthenticateUserDtoRiot;
};

export type IdentityState = {
  identity: Identity;
  isConnected: boolean;
  setIdentity: (user: Identity) => void;
  setConnected: (isConnected: boolean) => void;
  resetIdentity: () => void;
};
