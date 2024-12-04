import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { IDENTITY_STORAGE_KEY } from '@/libs/enum.ts';

interface Identity {
  name: string;
}

interface Settings {
  theme: string;
}

interface ActionIdentity {
  setIdentity: (name: string) => void;
  setConnected: (isConnected: boolean) => void;
  setSettings: (settings: Settings) => void;
  resetIdentity: () => void;
}

interface IdentityState {
  identity: Identity;
  isConnected: boolean;
  settings: Settings;
  actions: ActionIdentity;
}

const initialState: Pick<
  IdentityState,
  'identity' | 'isConnected' | 'settings'
> = {
  identity: { name: '' },
  isConnected: false,
  settings: { theme: 'light' }
};

export const useIdentityStore = create<IdentityState>()(
  immer(
    persist(
      (set) => ({
        ...initialState,
        actions: {
          setIdentity: (name: string) => set({ identity: { name } }),
          setConnected: (isConnected: boolean) => set({ isConnected }),
          setSettings: (settings: Settings) => set({ settings }),
          resetIdentity: () => set(initialState)
        }
      }),
      {
        name: IDENTITY_STORAGE_KEY,
        storage: createJSONStorage(() => sessionStorage)
      }
    )
  )
);
