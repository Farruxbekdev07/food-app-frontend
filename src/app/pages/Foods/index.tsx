import React from "react";
import { Box, Button, Grid2, Rating, Typography } from "@mui/material";

import { FoodStyles } from "./Food.style";
import Card from "../../components/Card";
import Invoice from "./components/Invoice";
import Categories from "./components/Categories";
import Menu from "./components/Menu";

const Foods = () => {
  return (
    <FoodStyles>
      <Box className="food__wrapper">
        <Box
          sx={{
            maxWidth: "1000px",
            width: "100%",
          }}
        >
          <Categories />
          <Menu />
        </Box>
        <Invoice />
      </Box>
    </FoodStyles>
  );
};

export default Foods;
