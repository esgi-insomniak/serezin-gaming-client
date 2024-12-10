import { lazy } from 'react';

export const HomePage = lazy(() => import('@/pages/private-routes/home.tsx'));
export const PrivacyPolicyPage = lazy(
  () => import('@/pages/public-routes/privacy-terms-services/privacy.tsx')
);
export const TermsOfServicePage = lazy(
  () =>
    import(
      '@/pages/public-routes/privacy-terms-services/termes-of-services.tsx'
    )
);
export const TournamentDetailsPage = lazy(
  () => import('@/pages/private-routes/tournament/tournament.tsx')
);
