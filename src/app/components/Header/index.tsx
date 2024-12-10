import {
  Avatar,
  Button,
  MenuItem,
  IconButton,
  Typography,
  ListItemIcon,
} from "@mui/material";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Logout } from "@mui/icons-material";
import { useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  FoodState,
  setOpenSidebar,
  setOpenInvoiceSidebar,
} from "../../../store/reducer/foodSlice";
import {
  logOut,
  setToken,
  setUserData,
  setUserRole,
} from "../../../store/reducer/authSlice";
import client from "../../graphql";
import MenuComponent from "../Menu";
import { UserRole } from "../../types/enums";
import { HeaderStyles } from "./Header.style";
import ROUTE_PATHS from "../../routes/paths/paths";
import { LOGIN } from "../../graphql/Mutation/Auth";
import TelegramLogin from "../../pages/TelegramLogin";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state?.auth?.user);
  const token = useAppSelector((state) => state?.auth?.token);
  const userRole = useAppSelector((state) => state?.auth?.role) as UserRole;
  const isOpenInvoiceSidebar = useAppSelector(
    (state) => state.food.isOpenInvoiceSidebar
  );
  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);
  const { isOpenSidebar }: FoodState = useSelector((state: any) => state?.food);

  const [telegramUserLogin, { data, loading }] = useLazyQuery(LOGIN);

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
    dispatch(setOpenInvoiceSidebar(!isOpenInvoiceSidebar));
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);

    if (queryParams.get("hash")) {
      const authData = {
        id: queryParams.get("id")?.toString() || "",
        first_name: queryParams.get("first_name") || "",
        last_name: queryParams.get("last_name") || "",
        username: queryParams.get("username") || "",
        photo_url: queryParams.get("photo_url") || "",
        auth_date: Number(queryParams.get("auth_date")) || 0,
        hash: queryParams.get("hash") || "",
      };

      telegramUserLogin({ variables: { auth: authData } });

      if (authData.id) {
        dispatch(setUserData(authData));
      }
    }
  }, []);

  useEffect(() => {
    if (data && !loading) {
      dispatch(setUserRole(data?.telegramUserLogin?.user?.role));
      dispatch(setToken(data?.telegramUserLogin?.token));
      client.clearStore();
      client.refetchQueries({ include: "active" });
      toast.success("Sign in successfully!");
      navigate(ROUTE_PATHS.MAIN);
    }
  }, [data, loading]);

  return (
    <HeaderStyles>
      <div className="header__wrapper">
        <IconButton className="toggle__sidebar" onClick={handleToggle}>
          <MenuIcon />
        </IconButton>

        <div className="user__wrapper">
          {userRole === "user" && token && (
            <IconButton
              className="shopping__cart-button"
              onClick={handleToggleInvoiceSidebar}
            >
              <ShoppingCartIcon className="shopping__cart-icon" />
            </IconButton>
          )}
          {user && token ? (
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
