import React from "react";
import { Box, Breakpoint, Button, Container, Typography } from "@mui/material";

import Header from "../Header";
import { ChildrenType } from "../../types";
import { SidebarStyles } from "./SidebarStyle";
import { SIDEBAR_LIST } from "./constants";

interface Props {
  links: {
    icon: JSX.Element;
    title: string;
  }[];
}

export default function Sidebar({ links }: Props) {
  return (
    <SidebarStyles>
      <Box className="sidebar__wrapper">
        <Typography className="sidebar__logo">Logo fast food</Typography>
        <Box className="sidebar__list-wrapper">
          {links.map(({ title, icon }) => (
            <Button
              className="sidebar__list-btn"
              variant="outlined"
              startIcon={icon}
            >
              {title}
            </Button>
          ))}
        </Box>
      </Box>
    </SidebarStyles>
  );
}
