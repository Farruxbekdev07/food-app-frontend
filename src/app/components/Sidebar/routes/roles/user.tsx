import ROUTE_PATHS from "../../../../routes/paths/paths";
import { SidebarLinkType } from "../types";
import { Moped } from "dazzle-icons";
const { ORDER } = ROUTE_PATHS;
export const SIDEBAR_USER_ROUTES: SidebarLinkType[] = [
  {
    path: ORDER,
    title: "Order",
    icon: <Moped fontSize={25} />,
  },
];
