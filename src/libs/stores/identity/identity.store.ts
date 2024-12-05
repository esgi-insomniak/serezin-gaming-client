import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { createJSONStorage, persist } from 'zustand/middleware';
import { COOKIE_ACCESS_TOKEN_KEY, IDENTITY_STORAGE_KEY } from '@/libs/enum.ts';
import {
  IdentityState,
  Settings
} from '@/libs/stores/identity/identity.type.ts';

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
        setIdentity: (name: string) => set({ identity: { name } }),
        setConnected: (isConnected: boolean) => set({ isConnected }),
        setSettings: (settings: Settings) => set({ settings }),
        resetIdentity: () => set(() => initialState)
      }),
      {
        name: IDENTITY_STORAGE_KEY,
        storage: createJSONStorage(() => sessionStorage),
        onRehydrateStorage: (state) => {
          const isConnected =
            sessionStorage.getItem(IDENTITY_STORAGE_KEY) ||
            document.cookie.includes(COOKIE_ACCESS_TOKEN_KEY);
          if (isConnected) {
            state.isConnected = true;
          }
        }
      }
    )
  )
);
