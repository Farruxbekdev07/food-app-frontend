import { ChildrenType } from "../../../../types";

export type SidebarLinkType = {
  path: string;
  title: string;
  icon: ChildrenType;
};

export type SidebarProps = {
  links: SidebarLinkType[];
};
