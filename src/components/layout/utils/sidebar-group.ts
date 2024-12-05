import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { ClientRoutes } from '@/router';

type SidebarGroupType = {
  [key: string]: SingleSidebarGroupType[];
};

export type SingleSidebarGroupType = {
  title: string;
  icon: keyof typeof dynamicIconImports;
  url: ClientRoutes;
  visible?: boolean;
};

export const sidebarGroup: SidebarGroupType = {
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
  ],
  ADMIN: [
    {
      title: 'Devenir admin',
      icon: 'shield',
      url: ClientRoutes.HOME
    }
  ]
};
