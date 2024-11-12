import {
  Avatar,
  Button,
  ButtonGroup,
  IconButton,
  ListItemIcon,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  FoodState,
  setOpenSidebar,
  setOpenInvoiceSidebar,
} from "../../../store/reducer/foodSlice";
import MenuComponent from "../Menu";
import { HeaderStyles } from "./Header.style";
import ROUTE_PATHS from "../../routes/paths/paths";
import TelegramLogin from "../../pages/TelegramLogin";
import { logOut } from "../../../store/reducer/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state?.auth?.user);
  const token = useAppSelector((state) => state?.auth?.token);
  const isOpenInvoiceSidebar = useAppSelector(
    (state) => state.food.isOpenInvoiceSidebar
  );
  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);
  const { isOpenSidebar }: FoodState = useSelector((state: any) => state?.food);

  const dispatch = useAppDispatch();
  const open = Boolean(anchorElMenu);

  const handleToggle = () => {
    dispatch(setOpenSidebar(!isOpenSidebar));
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
    navigate(ROUTE_PATHS.MAIN);
  };

  const handleToggleInvoiceSidebar = () => {
    console.log(isOpenInvoiceSidebar);
    dispatch(setOpenInvoiceSidebar(!isOpenInvoiceSidebar));
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

        <div className="user__wrapper">
          <IconButton
            className="shopping__cart-button"
            onClick={handleToggleInvoiceSidebar}
          >
            <ShoppingCartIcon className="shopping__cart-icon" />
          </IconButton>
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
      </div>
      <MenuComponent
        open={open}
        anchorEl={anchorElMenu}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </MenuComponent>
    </HeaderStyles>
  );
};

export default Header;
