import { BagShopping } from "dazzle-icons";
import MopedIcon from "@mui/icons-material/Moped";
import DashboardIcon from "@mui/icons-material/Dashboard";

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
    icon: <BagShopping fontSize={25} />,
  },
  {
    title: "Couriers",
    path: ROUTE_PATHS.COURIER,
    icon: <MopedIcon />,
  },
];
