import MopedIcon from "@mui/icons-material/Moped";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import { SidebarLinkType } from "../types";
import ROUTE_PATHS from "../../../../routes/paths/paths";

export const SIDEBAR_ADMIN_ROUTES: SidebarLinkType[] = [
  {
    title: "Foods",
    path: ROUTE_PATHS.FOODS,
    icon: <DashboardIcon />,
  },
  {
    title: "Orders",
    path: ROUTE_PATHS.ORDER,
    icon: <MopedIcon />,
  },
  {
    title: "Couriers",
    path: ROUTE_PATHS.COURIER,
    icon: <LocalShippingIcon />,
  },
];
