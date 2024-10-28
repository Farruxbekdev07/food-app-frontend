import { Box, Button, Grid2, Rating, Typography } from "@mui/material";
import React from "react";
import Card from "../../../../components/Card";
import MenuStyle from "./Menu.style";

const Menu = () => {
  const [value, setValue] = React.useState<number | null>(1);
  return (
    <MenuStyle>
      <Box className="popular__foods">
        <Typography className="popular__menu-title">Menu</Typography>
        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <Card direction="horizontal">
              <Box>
                <Typography variant="h6" className="card__fast-food-name">
                  Meat Burger
                </Typography>
                <Box className="card__food-cost-wrapper">
                  <Box className="card__food-cost">
                    $30 <del> $28.30 </del>
                  </Box>

                  <Box className="card__food-rating-wrapper">
                    <Rating
                      size="small"
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      max={1}
                    />
                    1.5K+
                  </Box>
                </Box>
                <Box className="menu__card-btn-wrapper">
                  <Button variant="outlined" className="menu__card-btn-list">
                    Wishlist
                  </Button>
                  <Button className="menu___card-btn-order" variant="contained">
                    Order Now
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid2>
        </Grid2>
      </Box>
    </MenuStyle>
  );
};

export default Menu;
