import { Avatar, Box, Button, TextField } from "@mui/material";
import React from "react";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { HeaderStyles } from "./HeaderStyle";

type Props = {};

const Header = (props: Props) => {
  return (
    <HeaderStyles>
      <Box className="Header__wrapper">
        <Box>
          <TextField placeholder="Search food" variant="outlined" />
          <Button variant="outlined" endIcon={<FilterAltIcon />}>
            filter
          </Button>
        </Box>

        <Box>
          <NotificationsActiveIcon />
          <Button variant="outlined">
            <Avatar></Avatar> sey helllo
          </Button>
        </Box>
      </Box>
    </HeaderStyles>
  );
};

export default Header;
