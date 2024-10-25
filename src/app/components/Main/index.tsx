import { Box, Button, Rating, Typography } from "@mui/material";
import React from "react";
import Card from "../Card";

type Props = {};

const Main = (props: Props) => {
  const [value, setValue] = React.useState<number | null>(1);

  return (
    <Box>
      <Card direction="vertical">
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
          <Box display="flex" gap={1}>
            <Button
              sx={{
                fontSize: "12px",
              }}
              variant="outlined"
              color="inherit"
            >
              Wishlist
            </Button>
            <Button
              sx={{
                fontSize: "12px",
              }}
              variant="contained"
              color="warning"
            >
              Order Now
            </Button>
          </Box>
        </>
      </Card>
    </Box>
  );
};

export default Main;
