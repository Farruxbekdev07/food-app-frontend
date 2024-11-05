import RouteType from "../types";
import ROUTE_PATHS from "../paths/paths";
import NotFound from "../../pages/NotFound";

const {} = ROUTE_PATHS;

export const COURIER_ROUTES: RouteType[] = [
  {
    path: "*",
    component: <NotFound />,
  },
];
