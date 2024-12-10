import { CLIENT_ROUTES, ClientRoutes, getRouteForRoutes } from '@/router';
import { BreadcrumbItemType } from '.';

export const matchedRouteKey = (
  currentPath: string
): ClientRoutes | undefined => {
  return (Object.keys(CLIENT_ROUTES) as Array<ClientRoutes>).find((key) => {
    const route = getRouteForRoutes(CLIENT_ROUTES)(key);
    const routeRegex = new RegExp(`^${route.path.replace(/:\w+/g, '[^/]+')}$`);
    return routeRegex.test(currentPath);
  });
};

export const buildBreadcrumbTrail = (
  routeKey: ClientRoutes
): BreadcrumbItemType[] => {
  const route = getRouteForRoutes(CLIENT_ROUTES)(routeKey);
  if (!route) return [];

  const parentTrail =
    route.parent && CLIENT_ROUTES[route.parent as unknown as ClientRoutes]
      ? buildBreadcrumbTrail(route.parent as unknown as ClientRoutes)
      : [];

  return [
    ...parentTrail,
    {
      title: route.title,
      path: route.path
    }
  ];
};
