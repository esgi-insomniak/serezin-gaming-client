import { RoutesDefinition } from "@/router/routes.type.ts";

export enum ClientRoutes {
  LOGIN = "LOGIN",
  HOME = "HOME",
}

export const CLIENT_ROUTES: RoutesDefinition<keyof typeof ClientRoutes> = {
  LOGIN: {
    title: ClientRoutes.LOGIN,
    path: "/login",
  },
  HOME: {
    title: ClientRoutes.HOME,
    path: "/",
  },
};
