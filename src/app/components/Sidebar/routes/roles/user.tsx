import { BagShopping } from "dazzle-icons";
import DashboardIcon from "@mui/icons-material/Dashboard";

import { SidebarLinkType } from "../types";
import ROUTE_PATHS from "../../../../routes/paths/paths";

export const SIDEBAR_USER_ROUTES: SidebarLinkType[] = [
  {
    title: "Foods",
    path: ROUTE_PATHS.FOODS,
    icon: <DashboardIcon />,
  },
  {
    title: "Orders",
    icon: <BagShopping fontSize={25} />,
    path: ROUTE_PATHS.ORDER,
  },
];
