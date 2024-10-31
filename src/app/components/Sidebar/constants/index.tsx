import DashboardIcon from "@mui/icons-material/Dashboard";

import { ChildrenType } from "../../../types";
import ROUTE_PATHS from "../../../routes/paths";

export interface SidebarLinkType {
  path: string;
  title: string;
  icon: ChildrenType;
}

export const SIDEBAR_LINKS: SidebarLinkType[] = [
  {
    title: "Foods",
    path: ROUTE_PATHS.FOODS,
    icon: <DashboardIcon />,
  },
];

export const SIDEBAR_WIDTH = 250;
