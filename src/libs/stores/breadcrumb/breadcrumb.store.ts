import { create } from 'zustand';
import { buildBreadcrumbTrail, matchedRouteKey } from './breadcrumb.utils';

export type BreadcrumbItemType = {
  title: string;
  path: string;
};

type BreadcrumbState = {
  getBreadcrumbs: (currentPath: string) => BreadcrumbItemType[];
};

export const useBreadcrumbStore = create<BreadcrumbState>(() => ({
  getBreadcrumbs: (currentPath) => {
    const routeKey = matchedRouteKey(currentPath);
    return routeKey ? buildBreadcrumbTrail(routeKey) : [];
  }
}));
