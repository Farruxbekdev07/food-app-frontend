import RouteType from "../types";
import Foods from "../../pages/Foods";
import ROUTE_PATHS from "../paths/paths";
import Courier from "../../pages/Courier";
import NotFound from "../../pages/NotFound";
import AdminOrder from "../../pages/AdminOrder";
import CreateFood from "../../pages/Foods/pages/Create";
import UpdateFood from "../../pages/Foods/pages/Update";

const { FOODS, MAIN, ADMINORDER, COURIER, CREATE_FOOD, UPDATE_FOOD } =
  ROUTE_PATHS;

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
    path: CREATE_FOOD,
    component: <CreateFood />,
  },
  {
    path: UPDATE_FOOD,
    component: <UpdateFood />,
  },
  {
    path: ADMINORDER,
    component: <AdminOrder />,
  },
  {
    path: COURIER,
    component: <Courier />,
  },
];
