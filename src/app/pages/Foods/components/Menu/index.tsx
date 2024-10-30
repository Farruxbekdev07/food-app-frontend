import { Box, Grid2, Typography } from "@mui/material";

import MenuStyle from "./Menu.style";
import CardComponent from "../../../../components/Card";

const Menu = () => {
  return (
    <MenuStyle>
      <Box className="popular__foods">
        <Typography className="popular__menu-title">Menu</Typography>
        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <CardComponent direction="horizontal" />
            <CardComponent direction="vertical" />
          </Grid2>
        </Grid2>
      </Box>
    </MenuStyle>
  );
};

export default Menu;
