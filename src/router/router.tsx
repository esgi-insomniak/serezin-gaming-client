import { Outlet, Route, Routes } from 'react-router-dom';
import { PropsWithChildren, Suspense } from 'react';
import { ClientRoutes, getPath, HomePage, LoginPage } from '@/router';

function ProtectedRoute({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

export function Router() {
  return (
    <Suspense fallback={<div>loading ...</div>}>
      <Routes>
        {/*  Public Routes */}
        <Route
          element={
            <ProtectedRoute>
              <Outlet />
            </ProtectedRoute>
          }>
          <Route path={getPath(ClientRoutes.HOME)} element={<HomePage />} />
          <Route path={getPath(ClientRoutes.LOGIN)} element={<LoginPage />} />
        </Route>
        {/*  Private Routes */}
        {/*  Errors Routes */}
      </Routes>
    </Suspense>
  );
}
