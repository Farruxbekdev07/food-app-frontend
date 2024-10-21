import React from "react";
import { Breakpoint, Container } from "@mui/material";

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
      <div className="sidebar-wrapper">
        <aside className="sidebar"></aside>
      </div>
      <div className="content">
        <div>
          <Header />
        </div>
        <div>
          <Container maxWidth={containerWidth} className="container">
            {children}
          </Container>
        </div>
      </div>
    </SidebarStyles>
  );
}
