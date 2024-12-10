import { MemoizedLayout } from '@/components/layout/layout';
import { useIdentityStore } from '@/libs/stores';
import {
  ClientRoutes,
  getPath,
  HomePage,
  PrivacyPolicyPage,
  ProtectedRoutes,
  TermsOfServicePage,
  TournamentDetailsPage
} from '@/router';
import { Suspense } from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }: ProtectedRoutes) {
  const { pathname } = useLocation();

  // TODO: if condition is false, redirect to forbidden page

  return (
    <div key="layout-wrapper" className={'h-dvh overflow-none'}>
      <MemoizedLayout key={pathname}>{children}</MemoizedLayout>
    </div>
  );
}

function NotFound() {
  return <div>404</div>;
}

export function Router() {
  const { isConnected } = useIdentityStore();
  return (
    <Suspense fallback={<div>loading ...</div>}>
      <Routes>
        {/*  Public Routes */}
        <Route
          element={
            <ProtectedRoute condition={!isConnected}>
              <Outlet />
            </ProtectedRoute>
          }>
          <Route
            path={getPath(ClientRoutes.PRIVACY_POLICY)}
            element={<PrivacyPolicyPage />}
          />
          <Route
            path={getPath(ClientRoutes.TERMS_OF_SERVICE)}
            element={<TermsOfServicePage />}
          />
        </Route>
        {/*  Private Routes */}
        <Route
          element={
            // FIXME: change condition to identify.name when RSO is approved
            <ProtectedRoute condition={isConnected}>
              <Outlet />
            </ProtectedRoute>
          }>
          <Route path={getPath(ClientRoutes.HOME)} element={<HomePage />} />
          <Route
            path={getPath(ClientRoutes.TOURNAMENT_DETAILS)}
            element={<TournamentDetailsPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/*  Errors Routes */}
      </Routes>
    </Suspense>
  );
}
