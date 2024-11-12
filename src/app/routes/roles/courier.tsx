import RouteType from "../types";
import NotFound from "../../pages/NotFound";

export const COURIER_ROUTES: RouteType[] = [
  {
    path: "*",
    component: <NotFound />,
  },
];
