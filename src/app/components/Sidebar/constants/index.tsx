import DashboardIcon from "@mui/icons-material/Dashboard";

import { ChildrenType } from "../../../types";
import ROUTE_PATHS from "../../../routes/paths";

export type SidebarLinkType = {
  path: string;
  title: string;
  icon: ChildrenType;
};

export const SIDEBAR_LINKS: SidebarLinkType[] = [
  {
    title: "Dashboard",
    path: ROUTE_PATHS.ADMIN_PANEL,
    icon: <DashboardIcon />,
  },
  {
    title: "Foods",
    path: ROUTE_PATHS.FOODS,
    icon: <DashboardIcon />,
  },
  {
    title: "Order",
    path: ROUTE_PATHS.ORDER,
    icon: <DashboardIcon />,
  },
];

export const SIDEBAR_WIDTH = 250;
