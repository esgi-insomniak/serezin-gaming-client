import { lazy } from 'react';

export const LoginPage = lazy(
  () => import('@/pages/public-routes/authentications/login.tsx')
);
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
