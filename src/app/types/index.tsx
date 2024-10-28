import { ReactNode } from "react";

import { SidebarLinkType } from "../components/Sidebar/constants";

export type ChildrenType = ReactNode;

export type SidebarProps = {
  links: SidebarLinkType[];
};

export type PageTitleProps = {
  title: string;
  children?: ChildrenType;
};

export type ContainerProps = {
  children: ChildrenType;
};
