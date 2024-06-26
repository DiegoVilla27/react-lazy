import { lazy } from "react";
import PrivateRouteGuard from "../../../guards/auth";
import { RouteObject } from "react-router-dom";

// LAZY
const UsersPage = lazy(() => import("../index"));
const UserPage = lazy(() => import("../pages/user"));

const UsersPageRoutes: RouteObject = {
  path: "users",
  element: (
    <PrivateRouteGuard>
      <UsersPage />
    </PrivateRouteGuard>
  ),
  children: [
    {
      path: ":id",
      element: <UserPage />
    }
  ]
};
export default UsersPageRoutes;
