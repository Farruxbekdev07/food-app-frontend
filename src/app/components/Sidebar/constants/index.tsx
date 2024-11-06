import { Moped, Cloche } from "dazzle-icons";

import { SidebarLinkType } from "../routes/types";
import ROUTE_PATHS from "../../../routes/paths/paths";

export const SIDEBAR_LINKS: SidebarLinkType[] = [
  {
    title: "Foods",
    path: ROUTE_PATHS.FOODS,
    icon: <Cloche fontSize={25} />,
  },
  {
    title: "Orders",
    path: ROUTE_PATHS.ORDER,
    icon: <Moped fontSize={25} />,
  },
];

export const SIDEBAR_WIDTH = 250;
