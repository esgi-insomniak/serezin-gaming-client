import {
  AuthenticateUserDtoDiscord,
  AuthenticateUserDtoRiot
} from '@/libs/api';

export type Identity = {
  discord: AuthenticateUserDtoDiscord;
  riot?: AuthenticateUserDtoRiot;
};

export type IdentityState = {
  identity: Identity;
  isConnected: boolean;
  setIdentity: (user: Identity) => void;
  setConnected: (isConnected: boolean) => void;
  resetIdentity: () => void;
};
