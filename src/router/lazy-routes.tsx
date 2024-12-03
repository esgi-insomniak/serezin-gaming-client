import { lazy } from "react";

export const LoginPage = lazy(
  () => import("@/pages/public-routes/authentications/login.tsx"),
);
export const HomePage = lazy(() => import("@/pages/public-routes/home.tsx"));
