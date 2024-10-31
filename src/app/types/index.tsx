import { ReactNode } from "react";

import { SidebarLinkType } from "../components/Sidebar/constants";

export type ChildrenType = ReactNode;

export interface SidebarProps {
  links: SidebarLinkType[];
}

export interface PageTitleProps {
  title: string;
  children?: ChildrenType;
}

export interface LayoutProps {
  children: ChildrenType;
}
