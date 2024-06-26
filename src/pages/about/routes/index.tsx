import AboutPage from "..";
import PrivateRouteGuard from "../../../guards/auth";

const AboutPageRoutes = {
  path: "/about",
  element: (
    <PrivateRouteGuard>
      <AboutPage />
    </PrivateRouteGuard>
  )
};
export default AboutPageRoutes;
