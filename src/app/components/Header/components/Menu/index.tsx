import { Menu, MenuItem } from "@mui/material";
import React from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
};

export default function MenuComponent({ anchorEl, onClose, open }: Props) {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={onClose}>Profile</MenuItem>
      <MenuItem onClick={onClose}>My account</MenuItem>
      <MenuItem onClick={onClose}>Logout</MenuItem>
    </Menu>
  );
}
