import { Moped, Cloche, ObjectsColumn, MessageSquareChat } from "dazzle-icons";

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
    icon: <ObjectsColumn fontSize={25} />,
  },
  {
    title: "Foods",
    path: ROUTE_PATHS.FOODS,
    icon: <Cloche fontSize={25} />,
  },
  {
    title: "Order",
    path: ROUTE_PATHS.ORDER,
    icon: <Moped fontSize={25} />,
  },
  {
    title: "Support",
    path: ROUTE_PATHS.SUPPORT,
    icon: <MessageSquareChat fontSize={25} />,
  },
];

export const SIDEBAR_WIDTH = 250;
