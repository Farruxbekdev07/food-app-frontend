import DashboardIcon from "@mui/icons-material/Dashboard";

import { SidebarLinkType } from "../routes/types";
import ROUTE_PATHS from "../../../routes/paths/paths";

export const SIDEBAR_LINKS: SidebarLinkType[] = [
  {
    title: "Foods",
    path: ROUTE_PATHS.FOODS,
    icon: <DashboardIcon />,
  },
];

export const SIDEBAR_WIDTH = 250;
