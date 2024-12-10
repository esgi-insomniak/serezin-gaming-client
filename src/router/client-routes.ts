import { RoutesDefinition } from '@/router/routes.type.ts';

export enum ClientRoutes {
  HOME = 'HOME',
  PRIVACY_POLICY = 'PRIVACY_POLICY',
  TERMS_OF_SERVICE = 'TERMS_OF_SERVICE',
  TOURNAMENT_DETAILS = 'TOURNAMENT_DETAILS'
}

export const CLIENT_ROUTES: RoutesDefinition<keyof typeof ClientRoutes> = {
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
  },
  TOURNAMENT_DETAILS: {
    title: ClientRoutes.TOURNAMENT_DETAILS,
    path: '/:tournamentId',
    parent: ClientRoutes.HOME
  }
};
