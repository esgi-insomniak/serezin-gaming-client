import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { ClientRoutes } from '@/router';
import { useIdentityStore } from '@/libs/stores';

type SidebarGroupType = {
  [key: string]: SingleSidebarGroupType[];
};

export type SingleSidebarGroupType = {
  title: string;
  icon: keyof typeof dynamicIconImports;
  url: ClientRoutes;
  visible?: boolean;
};

export function useSidebarGroup() {
  const { isConnected } = useIdentityStore();
  const sidebarGroup: SidebarGroupType = {
    APPLICATION: [
      {
        title: 'Dashboard',
        icon: 'house',
        url: ClientRoutes.HOME
      }
    ],
    TOURNOI: [
      {
        title: 'Predictions',
        icon: 'spade',
        url: ClientRoutes.HOME
      }
    ]
  };

  if (isConnected) {
    sidebarGroup.ADMIN = [
      {
        title: 'Devenir admin',
        icon: 'shield',
        url: ClientRoutes.HOME,
        visible: isConnected
      }
    ];
  }

  return { sidebarGroup };
}
