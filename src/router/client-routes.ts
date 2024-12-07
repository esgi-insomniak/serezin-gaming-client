import { RoutesDefinition } from '@/router/routes.type.ts';

export enum ClientRoutes {
  LOGIN_CALLBACK = 'LOGIN_CALLBACK',
  HOME = 'HOME',
  PRIVACY_POLICY = 'PRIVACY_POLICY',
  TERMS_OF_SERVICE = 'TERMS_OF_SERVICE'
}

export const CLIENT_ROUTES: RoutesDefinition<keyof typeof ClientRoutes> = {
  LOGIN_CALLBACK: {
    title: ClientRoutes.LOGIN_CALLBACK,
    path: '/login-callback'
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
