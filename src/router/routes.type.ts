export type RouteBase<T> = {
  title: string;
  path: string;
  parent?: T;
};

export type RouteOptions = {
  params?: { [key: string]: unknown };
  queryParams?: { [key: string]: unknown } | string;
};

export type Route<T> = Omit<RouteBase<T>, 'parent'> & {
  id: T;
  params: unknown;
  parent?: Route<T>;
};

export type RoutesDefinition<T extends string | symbol> = Record<
  T,
  RouteBase<T>
>;

export interface ProtectedRoutes {
  withLayout: boolean;
}
