import React from "react";
import { Box, Breakpoint, Container } from "@mui/material";

import Header from "../Header";
import { ChildrenType } from "../../types";
import { SidebarStyles } from "./Sidebar.style";

interface Props {
  children: ChildrenType;
  containerWidth?: Breakpoint;
}

export default function Sidebar({ children, containerWidth }: Props) {
  return (
    <SidebarStyles>
      <Box className="sidebar__wrapper"></Box>
    </SidebarStyles>
  );
}
