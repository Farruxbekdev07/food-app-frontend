import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Avatar,
  Button,
  ButtonGroup,
  TextField,
  Typography,
} from "@mui/material";

import { HeaderStyles } from "./Header.style";
import UserImage from "../../assets/images/food-icon.avif";

type Props = {};

const Header = ({}: Props) => {
  return (
    <HeaderStyles>
      <div className="header__wrapper">
        <ButtonGroup className="button_group">
          <TextField
            variant="outlined"
            className="search__input"
            label="Search food"
            size="small"
          />
          <Button size="small" variant="contained" className="search_button">
            Search
          </Button>
        </ButtonGroup>

        <div className="user__info">
          <Button variant="outlined" size="small" className="user__info-button">
            <Avatar
              src={UserImage}
              alt="User name"
              className="user__info-image"
            />
            <Typography className="user__info-name">User Name</Typography>
            <KeyboardArrowDownIcon className="user__info-icon" />
          </Button>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
