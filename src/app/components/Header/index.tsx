import {
  Avatar,
  Button,
  ButtonGroup,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import MenuComponent from "./components/Menu";
import { HeaderStyles } from "./Header.style";
import { useDispatch, useSelector } from "react-redux";
import { FoodState, setSidebarOpen } from "../../../store/reducer/foodSlice";

const Header = () => {
  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);
  const { isOpenSidebar }: FoodState = useSelector((state: any) => state?.food);

  const dispatch = useDispatch();
  const open = Boolean(anchorElMenu);

  const handleToggle = () => {
    console.log(isOpenSidebar);
    dispatch(setSidebarOpen(!isOpenSidebar));
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
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

        <div className="user__info">
          <Button
            size="small"
            variant="outlined"
            onClick={handleOpenMenu}
            className="user__info-button"
          >
            <Avatar alt="User name" className="user__info-image" />
            <Typography className="user__info-name">User Name</Typography>
            <KeyboardArrowDownIcon className="user__info-icon" />
          </Button>
        </div>
      </div>
      <MenuComponent
        open={open}
        anchorEl={anchorElMenu}
        onClose={handleCloseMenu}
      />
    </HeaderStyles>
  );
};

export default Header;
