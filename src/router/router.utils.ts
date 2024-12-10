import {
  CLIENT_ROUTES,
  ClientRoutes,
  Route as RouteType,
  RouteOptions,
  RoutesDefinition
} from '@/router';

function addQueryParams(
  pathname: string,
  queryParams: { [key: string]: unknown } | string = {}
) {
  if (typeof queryParams === 'string') {
    return `${pathname}${queryParams.startsWith('?') ? '' : '?'}${queryParams}`;
  }

  return `${pathname}${Object.entries(queryParams).reduce(
    (acc, [key, value], index) => {
      const keyValuePair = typeof value !== 'boolean' ? `${key}=${value}` : key;
      if (index === 0) {
        return acc + `?${keyValuePair}`;
      }
      return acc + `&${keyValuePair}`;
    },
    ''
  )}`;
}

function getRouteParams(
  path: string,
  params: {
    [index: string]: unknown;
  } = {}
): Record<string, string> {
  return (path.match(/:\w+/g) || [])
    .map((key) => key.replace(':', ''))
    .reduce(
      (acc, key) =>
        params[key]
          ? { ...acc, [key]: params[key] }
          : { ...acc, [key]: undefined },
      {}
    );
}

function getRoutePath(
  path: string,
  params: {
    [index: string]: string;
  } = {}
): string {
  return Object.keys(params).reduce(
    (acc, key) => (params[key] ? acc.replace(`:${key}`, params[key]) : acc),
    path
  );
}

export function getRouteForRoutes<T extends string | symbol>(
  ROUTES: RoutesDefinition<T>,
  withParams = true
) {
  return (target: T, options: RouteOptions = {}): RouteType<T> => {
    if (!ROUTES[target]) {
      return { id: target, params: '', path: '', title: '' };
    }

    const { path: routePath, parent: routeParent, ...rest } = ROUTES[target];
    const params = getRouteParams(routePath, options.params || {});
    const path = withParams ? getRoutePath(routePath, params) : routePath;

    if (routeParent) {
      const parent = getRouteForRoutes(ROUTES, withParams)(
        routeParent as T,
        options
      );

      return {
        id: target,
        params,
        parent,
        path: sanatizePath(`${parent.path}${path}`),
        ...rest
      };
    }

    return {
      id: target,
      params,
      path: sanatizePath(path), // Ensure sanitized path
      ...rest
    };
  };
}

function sanatizePath(str: string) {
  return '/' + str.split('/').filter(Boolean).join('/');
}

function getPathForRoutes<T extends string | symbol>(
  ROUTES: RoutesDefinition<T>
) {
  return (target: T, { queryParams, ...options }: RouteOptions = {}): string =>
    addQueryParams(
      getRouteForRoutes(ROUTES)(target, options).path,
      queryParams
    );
}

export function getPath(target: ClientRoutes, options?: RouteOptions) {
  return getPathForRoutes(CLIENT_ROUTES)(target, options);
}
