import { useSelector } from "react-redux";
import { Tooltip, Typography } from "@mui/material";

import { SidebarProps } from "../../types";
import { SidebarStyles } from "./Sidebar.style";
import { Link, useLocation } from "react-router-dom";
import FoodIcon from "../../assets/images/foodelic.png";
import { FoodState } from "../../../store/reducer/foodSlice";

export default function Sidebar({ links }: SidebarProps) {
  const { pathname } = useLocation();
  const { isOpenSidebar }: FoodState = useSelector((state: any) => state?.food);

  return (
    <SidebarStyles className="sidebar">
      <div
        className={
          isOpenSidebar
            ? "sidebar__wrapper sidebar-open"
            : "sidebar__wrapper sidebar-close"
        }
      >
        <div>
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
      </div>
    </SidebarStyles>
  );
}
