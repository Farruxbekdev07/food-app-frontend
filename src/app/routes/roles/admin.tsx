import { RouteType } from "../types";
import Foods from "../../pages/Foods";
import ROUTE_PATHS from "../paths/paths";
import NotFound from "../../pages/NotFound";
import CreateFood from "../../pages/Foods/pages/Create";
import UpdateFood from "../../pages/Foods/pages/Update";

const { FOODS, MAIN, CREATE_FOOD, UPDATE_FOOD } = ROUTE_PATHS;

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
];
