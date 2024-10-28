import { ReactNode } from "react";

import ROUTE_PATHS from "./paths";
import Foods from "../pages/Foods";
import NotFound from "../pages/NotFound";
import AdminPanel from "../pages/AdminPanel";
import Order from "../pages/Order";
import Support from "../pages/Support";

type RouteType = {
  path: string;
  component: ReactNode;
};

const { FOODS, MAIN, ADMIN_PANEL, ORDER, SUPPORT } = ROUTE_PATHS;

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
    path: ADMIN_PANEL,
    component: <AdminPanel />,
  },
  {
    path: ORDER,
    component: <Order />,
  },
  {
    path: SUPPORT,
    component: <Support />,
  },
];
