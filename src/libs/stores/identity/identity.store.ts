import { COOKIE_ACCESS_TOKEN_KEY, IDENTITY_STORAGE_KEY } from '@/libs/enum.ts';
import {
  Identity,
  IdentityState
} from '@/libs/stores/identity/identity.type.ts';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const initialState: Pick<IdentityState, 'identity' | 'isConnected'> = {
  identity: {
    discord: {},
    riot: {}
  },
  isConnected: false
};

export const useIdentityStore = create<IdentityState>()(
  immer(
    persist(
      (set) => ({
        ...initialState,
        setIdentity: (identity: Identity) => set({ identity }),
        setConnected: (isConnected: boolean) => set({ isConnected }),
        resetIdentity: () => {
          set(initialState);
          sessionStorage.removeItem(IDENTITY_STORAGE_KEY);
          document.cookie = `${COOKIE_ACCESS_TOKEN_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        }
      }),
      {
        name: IDENTITY_STORAGE_KEY,
        storage: createJSONStorage(() => sessionStorage),
        onRehydrateStorage: (state) => {
          state.isConnected =
            (!!sessionStorage.getItem(IDENTITY_STORAGE_KEY) ||
              document.cookie.includes(COOKIE_ACCESS_TOKEN_KEY)) ??
            false;
        }
      }
    )
  )
);
