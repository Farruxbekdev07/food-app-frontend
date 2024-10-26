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
    title: "Foods",
    path: ROUTE_PATHS.FOODS,
    icon: <DashboardIcon />,
  },
];

export const SIDEBAR_WIDTH = 240;
export const SIDEBAR_MIN_WIDTH = 40;
