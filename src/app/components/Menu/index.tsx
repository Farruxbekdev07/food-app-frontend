import { Menu } from "@mui/material";

import { ChildrenType } from "../../types";

type Props = {
  open: boolean;
  className?: string;
  onClose: () => void;
  children: ChildrenType;
  anchorEl: HTMLElement | null;
};

export default function MenuComponent({
  open,
  onClose,
  anchorEl,
  children,
  className,
}: Props) {
  return (
    <Menu
      open={open}
      id="basic-menu"
      onClose={onClose}
      anchorEl={anchorEl}
      className={className}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      {children}
    </Menu>
  );
}
