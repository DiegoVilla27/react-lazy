import { lazy } from "react";
import PrivateRouteGuard from "../../../guards/auth";
import { RouteObject } from "react-router-dom";

// LAZY
const AboutPage = lazy(() => import("../index"));

const AboutPageRoutes: RouteObject = {
  path: "/about",
  element: (
    <PrivateRouteGuard>
      <AboutPage />
    </PrivateRouteGuard>
  )
};
export default AboutPageRoutes;
