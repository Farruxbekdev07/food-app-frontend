import React from "react";
import { Box, Button, Grid2, Rating, Typography } from "@mui/material";

import FoodsStyle from "./Foods.style";
import Container from "../../Container";
import Card from "../../components/Card";
import Invoice from "./components/Invoice";

type Props = {};

const Foods = ({}: Props) => {
  const [value, setValue] = React.useState<number | null>(1);
  return (
    <FoodsStyle>
      <Box className="food__wrapper">
        <Container>
          <Box className="categories__wrapper">
            <Typography className="categories__title">
              Explore Categories
            </Typography>
            <Grid2 container spacing={1}>
              <Grid2 size={2}>
                <Card direction="vertical">
                  <Typography className="categories__card-title">
                    Donuts
                  </Typography>
                </Card>
              </Grid2>
            </Grid2>

            <Box className="popular__foods">
              <Typography className="popular__menu-title">Menu</Typography>
              <Grid2 container spacing={1}>
                <Grid2 size={3}>
                  <Card direction="horizontal">
                    <>
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
                        <Button variant="outlined" color="inherit">
                          Wishlist
                        </Button>
                        <Button variant="contained">Order Now</Button>
                      </Box>
                    </>
                  </Card>
                </Grid2>
              </Grid2>
            </Box>
          </Box>
        </Container>

        <Invoice />
      </Box>
    </FoodsStyle>
  );
};

export default Foods;
