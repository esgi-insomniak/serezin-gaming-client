import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import {
  ClientRoutes,
  getPath,
  HomePage,
  LoginPage,
  PrivacyPolicyPage,
  ProtectedRoutes,
  TermsOfServicePage
} from '@/router';
import Layout from '@/components/layout/layout.tsx';

function ProtectedRoute({
  children,
  withLayout = false,
  condition
}: ProtectedRoutes) {
  if (!condition) return <Navigate to={getPath(ClientRoutes.LOGIN)} />;
  return (
    <div>
      {withLayout ? <Layout>{children}</Layout> : null}
      {children}
    </div>
  );
}

export function Router() {
  return (
    <Suspense fallback={<div>loading ...</div>}>
      <Routes>
        {/*  Public Routes */}
        <Route
          element={
            <ProtectedRoute withLayout={false} condition={true}>
              <Outlet />
            </ProtectedRoute>
          }>
          <Route path={getPath(ClientRoutes.LOGIN)} element={<LoginPage />} />
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
            <ProtectedRoute withLayout condition={true}>
              <Outlet />
            </ProtectedRoute>
          }>
          <Route path={getPath(ClientRoutes.HOME)} element={<HomePage />} />
        </Route>
        {/*  Errors Routes */}
      </Routes>
    </Suspense>
  );
}
