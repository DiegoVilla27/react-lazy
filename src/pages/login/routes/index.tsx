import { lazy } from "react";
import PublicRouteGuard from "../../../guards/noauth";
import { RouteObject } from "react-router-dom";

// LAZY
const LoginPage = lazy(() => import("../index"));

const LoginPageRoutes: RouteObject = {
  path: "/login",
  element: (
    <PublicRouteGuard>
      <LoginPage />
    </PublicRouteGuard>
  )
};

export default LoginPageRoutes;
