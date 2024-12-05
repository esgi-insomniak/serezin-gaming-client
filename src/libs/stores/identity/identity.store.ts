import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { createJSONStorage, persist } from 'zustand/middleware';
import { COOKIE_ACCESS_TOKEN_KEY, IDENTITY_STORAGE_KEY } from '@/libs/enum.ts';
import { IdentityState } from '@/libs/stores/identity/identity.type.ts';

const initialState: Pick<IdentityState, 'identity' | 'isConnected'> = {
  identity: { name: '' },
  isConnected: false
};

export const useIdentityStore = create<IdentityState>()(
  immer(
    persist(
      (set) => ({
        ...initialState,
        setIdentity: (name: string) => set({ identity: { name } }),
        setConnected: (isConnected: boolean) => set({ isConnected }),
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
