import { ReactNode } from "react";

interface RouteType {
  path: string;
  component: ReactNode;
}

interface IRoutes {
  user: RouteType[];
  admin: RouteType[];
  courier: RouteType[];
}

export type { RouteType, IRoutes };
