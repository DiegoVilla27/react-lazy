import { createBrowserRouter } from "react-router-dom";
import RoutesPrivate from "./private";
import RoutesPublic from "./public";

const router = createBrowserRouter([
  ...RoutesPrivate,
  ...RoutesPublic,
  {
    path: "/*",
    element: <div>Page not found: 404</div>
  }
]);

export default router;
