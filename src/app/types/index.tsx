import { ReactNode } from "react";

export type ChildrenType = ReactNode;

export type PageTitleProps = {
  title: string;
  children?: ChildrenType;
};

export type LayoutProps = {
  children: ChildrenType;
};
