import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { ClientRoutes, getPath } from '@/router';

type SidebarGroupType = {
  [key: string]: SingleSidebarGroupType[];
};

export type SingleSidebarGroupType = {
  title: string;
  icon: keyof typeof dynamicIconImports;
  url: string;
  visible?: boolean;
};

export const sidebarGroup: SidebarGroupType = {
  APPLICATION: [
    {
      title: 'Dashboard',
      icon: 'house',
      url: getPath(ClientRoutes.HOME)
    }
  ],
  TOURNOI: [
    {
      title: 'Predictions',
      icon: 'spade',
      url: getPath(ClientRoutes.HOME)
    }
  ],
  ADMIN: [
    {
      title: 'Devenir admin',
      icon: 'shield',
      url: getPath(ClientRoutes.HOME)
    }
  ]
};
