import { lazy } from 'react';

export const LoginCallbackPage = lazy(
  () => import('@/pages/public-routes/authentications/login-callback.tsx')
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
