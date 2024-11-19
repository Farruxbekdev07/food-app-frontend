import DashboardIcon from "@mui/icons-material/Dashboard";

import ROUTE_PATHS from "../../../../routes/paths/paths";
import { SidebarLinkType } from "../types";
import { Moped, Truck } from "dazzle-icons";

export const SIDEBAR_ADMIN_ROUTES: SidebarLinkType[] = [
  {
    title: "Foods",
    path: ROUTE_PATHS.FOODS,
    icon: <DashboardIcon />,
  },
  {
    title: "Admin-Order",
    path: ROUTE_PATHS.ADMINORDER,
    icon: <Moped fontSize={25} />,
  },
  {
    title: "Courier",
    path: ROUTE_PATHS.COURIER,
    icon: <Truck fontSize={25} />,
  },
];
