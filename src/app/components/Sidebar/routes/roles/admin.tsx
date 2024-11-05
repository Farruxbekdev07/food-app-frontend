import DashboardIcon from "@mui/icons-material/Dashboard";

import ROUTE_PATHS from "../../../../routes/paths/paths";
import { SidebarLinkType } from "../types";

export const SIDEBAR_ADMIN_ROUTES: SidebarLinkType[] = [
  {
    title: "Foods",
    path: ROUTE_PATHS.FOODS,
    icon: <DashboardIcon />,
  },
];
