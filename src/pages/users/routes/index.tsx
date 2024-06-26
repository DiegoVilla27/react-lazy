import UsersPage from "..";
import PrivateRouteGuard from "../../../guards/auth";
import UserPage from "../pages/user";

const UsersPageRoutes = {
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
