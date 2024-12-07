import { MemoizedLayout } from '@/components/layout/layout';
import {
  ClientRoutes,
  getPath,
  HomePage,
  LoginCallbackPage,
  PrivacyPolicyPage,
  ProtectedRoutes,
  TermsOfServicePage
} from '@/router';
import { Suspense } from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';

function ProtectedRoute({ children, condition }: ProtectedRoutes) {
  const { pathname } = useLocation();

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
  return (
    <Suspense fallback={<div>loading ...</div>}>
      <Routes>
        {/*  Public Routes */}
        <Route
          element={
            <ProtectedRoute condition={true}>
              <Outlet />
            </ProtectedRoute>
          }>
          <Route
            path={getPath(ClientRoutes.LOGIN_CALLBACK)}
            element={<LoginCallbackPage />}
          />
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
            <ProtectedRoute condition={true}>
              <Outlet />
            </ProtectedRoute>
          }>
          <Route path={getPath(ClientRoutes.HOME)} element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/*  Errors Routes */}
      </Routes>
    </Suspense>
  );
}
