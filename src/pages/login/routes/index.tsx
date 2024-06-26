import LoginPage from "..";
import PublicRouteGuard from "../../../guards/noauth";

const LoginPageRoutes = {
  path: "/login",
  element: (
    <PublicRouteGuard>
      <LoginPage />
    </PublicRouteGuard>
  )
};

export default LoginPageRoutes;
