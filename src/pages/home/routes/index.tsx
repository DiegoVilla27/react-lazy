import HomePage from "..";
import PrivateRouteGuard from "../../../guards/auth";

const HomePageRoutes = {
  path: "/",
  element: (
    <PrivateRouteGuard>
      <HomePage />
    </PrivateRouteGuard>
  )
};
export default HomePageRoutes;
