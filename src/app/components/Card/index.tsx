import { Box, Button, Checkbox, Rating, Typography } from "@mui/material";
import React from "react";
import CardStyle from "./Card.style";

type Props = {
  children: JSX.Element;
  direction: "vertical" | "horizontal";
};

const Card = ({ children }: Props) => {
  const label = { inputProps: { "aria-label": "checkbox demo" } };
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
        {children}
      </Box>
    </CardStyle>
  );
};

export default Card;
