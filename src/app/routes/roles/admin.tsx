import RouteType from "../types";
import Foods from "../../pages/Foods";
import ROUTE_PATHS from "../paths/paths";
import NotFound from "../../pages/NotFound";
import AdminOrder from "../../pages/AdminOrder";

const { FOODS, MAIN, ADMINORDER } = ROUTE_PATHS;

export const ADMIN_ROUTES: RouteType[] = [
  {
    path: "*",
    component: <NotFound />,
  },
  {
    path: MAIN,
    component: <Foods />,
  },
  {
    path: FOODS,
    component: <Foods />,
  },
  {
    path: ADMINORDER,
    component: <AdminOrder />,
  },
];
