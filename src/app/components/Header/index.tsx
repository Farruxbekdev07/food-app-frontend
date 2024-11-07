import {
  Avatar,
  Button,
  ButtonGroup,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import MenuComponent from "../Menu";
import { HeaderStyles } from "./Header.style";
import { useAppDispatch } from "../../hooks/redux";
import TelegramLogin from "../../pages/TelegramLogin";
import { logOut } from "../../../store/reducer/authSlice";
import { FoodState, setSidebarOpen } from "../../../store/reducer/foodSlice";

const Header = () => {
  const user = useSelector((state: any) => state?.auth?.user);
  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);
  const { isOpenSidebar }: FoodState = useSelector((state: any) => state?.food);

  const dispatch = useAppDispatch();
  const open = Boolean(anchorElMenu);

  const handleToggle = () => {
    dispatch(setSidebarOpen(!isOpenSidebar));
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const handleLogOut = () => {
    handleCloseMenu();
    dispatch(logOut());
  };

  return (
    <HeaderStyles>
      <div className="header__wrapper">
        <IconButton className="toggle__sidebar" onClick={handleToggle}>
          <MenuIcon />
        </IconButton>
        <ButtonGroup className="button_group">
          <TextField
            size="small"
            variant="outlined"
            className="search__input"
            placeholder="Search food"
          />
          <Button size="small" variant="contained" className="search_button">
            Search
          </Button>
        </ButtonGroup>

        {user ? (
          <div className="user__info">
            <Button
              size="small"
              variant="outlined"
              onClick={handleOpenMenu}
              className="user__info-button"
            >
              <Avatar
                alt="User name"
                src={user?.photo_url || ""}
                className="user__info-image"
              />
              <Typography className="user__info-name">
                {user?.first_name || "User Name"} {user?.last_name || ""}
              </Typography>
              <KeyboardArrowDownIcon className="user__info-icon" />
            </Button>
          </div>
        ) : (
          <TelegramLogin />
        )}
      </div>
      <MenuComponent
        open={open}
        anchorEl={anchorElMenu}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </MenuComponent>
    </HeaderStyles>
  );
};

export default Header;
