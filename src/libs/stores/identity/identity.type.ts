import { AuthenticateUserDto } from '@/libs/api';

export type Identity = AuthenticateUserDto & {};

export type IdentityState = {
  identity: Identity;
  isConnected: boolean;
  setIdentity: (user: Identity) => void;
  setConnected: (isConnected: boolean) => void;
  resetIdentity: () => void;
};
