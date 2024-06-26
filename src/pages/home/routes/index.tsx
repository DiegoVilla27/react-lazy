import { lazy } from "react";
import PrivateRouteGuard from "../../../guards/auth";
import { RouteObject } from "react-router-dom";

// LAZY
const HomePage = lazy(() => import("../index"));

const HomePageRoutes: RouteObject = {
  path: "/",
  element: (
    <PrivateRouteGuard>
      <HomePage />
    </PrivateRouteGuard>
  )
};
export default HomePageRoutes;
