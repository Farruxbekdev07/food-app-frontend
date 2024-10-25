import { ReactNode } from "react";

import ROUTE_PATHS from "./paths";
import Foods from "../pages/Foods";
import NotFound from "../pages/NotFound";

type RouteType = {
  path: string;
  component: ReactNode;
};

const { FOODS, MAIN } = ROUTE_PATHS;

export const ROUTES: RouteType[] = [
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
];
