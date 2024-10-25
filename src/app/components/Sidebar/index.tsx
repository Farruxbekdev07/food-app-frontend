import { Tooltip, Typography } from "@mui/material";

import { SidebarLinkType } from "./constants";
import { SidebarStyles } from "./Sidebar.style";
import { Link, useLocation } from "react-router-dom";
import FoodIcon from "../../assets/images/food-icon.avif";

type Props = {
  links: SidebarLinkType[];
};

export default function Sidebar({ links }: Props) {
  const { pathname } = useLocation();

  return (
    <SidebarStyles>
      <div className="sidebar__wrapper">
        <Typography className="sidebar__logo">
          <img src={FoodIcon} alt="Food Icon" />
        </Typography>
        <div className="sidebar__list-wrapper">
          {links.map(({ title, icon, path }) => (
            <Tooltip key={path} title={title} arrow placement="right">
              <Link
                to={path}
                key={path}
                className={`sidebar__list-item ${
                  pathname === path ? "sidebar__list-item--active" : ""
                }`}
              >
                {icon}
                <Typography className="sidebar__list-item-title">
                  {title}
                </Typography>
              </Link>
            </Tooltip>
          ))}
        </div>
      </div>
    </SidebarStyles>
  );
}
