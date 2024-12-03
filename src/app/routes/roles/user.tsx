import RouteType from "../types";
import Foods from "../../pages/Foods";
import ROUTE_PATHS from "../paths/paths";
import NotFound from "../../pages/NotFound";
import Order from "../../pages/Order";
import OrderMap from "../../pages/Order/pages/Map";

const { FOODS, MAIN, ORDER, USER_ORDER_MAP } = ROUTE_PATHS;

export const USER_ROUTES: RouteType[] = [
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
    path: ORDER,
    component: <Order />,
  },
  {
    path: USER_ORDER_MAP,
    component: <OrderMap />,
  },
];
