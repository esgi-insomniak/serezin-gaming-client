import { RoutesDefinition } from '@/router/routes.type.ts';

export enum ClientRoutes {
  LOGIN = 'LOGIN',
  HOME = 'HOME',
  PRIVACY_POLICY = 'PRIVACY_POLICY',
  TERMS_OF_SERVICE = 'TERMS_OF_SERVICE'
}

export const CLIENT_ROUTES: RoutesDefinition<keyof typeof ClientRoutes> = {
  LOGIN: {
    title: ClientRoutes.LOGIN,
    path: '/login'
  },
  HOME: {
    title: ClientRoutes.HOME,
    path: '/'
  },
  PRIVACY_POLICY: {
    title: ClientRoutes.PRIVACY_POLICY,
    path: '/privacy-policy'
  },
  TERMS_OF_SERVICE: {
    title: ClientRoutes.TERMS_OF_SERVICE,
    path: '/terms-of-service'
  }
};
