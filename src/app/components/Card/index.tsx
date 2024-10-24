import { Box, Button, Checkbox, Rating, Typography } from "@mui/material";
import React from "react";
import CardStyle from "./Card.style";

type Props = {};

const Card = (props: Props) => {
  const label = { inputProps: { "aria-label": "checkbox demo" } };
  const [value, setValue] = React.useState<number | null>(1);
  return (
    <CardStyle>
      <Box className="card__wrapper">
        <Box className="card__img-wrapper">
          <Checkbox className="card__img-checked" color="warning" {...label} />
          <img
            className="card__img-fast-food"
            src="https://png.pngtree.com/png-clipart/20230216/ourmid/pngtree-juicy-burgers-with-a-transparent-background-png-image_6603069.png"
            alt="fast-food"
          />
        </Box>
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
      </Box>
    </CardStyle>
  );
};

export default Card;
