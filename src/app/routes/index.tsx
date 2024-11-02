import { ReactNode } from "react";

import ROUTE_PATHS from "./paths";
import Foods from "../pages/Foods";
import NotFound from "../pages/NotFound";
import CreateFood from "../pages/Foods/pages/Create";

interface RouteType {
  path: string;
  component: ReactNode;
}

const { FOODS, MAIN, CREATE_FOOD } = ROUTE_PATHS;

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
];
