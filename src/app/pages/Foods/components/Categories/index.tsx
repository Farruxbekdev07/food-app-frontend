import React from "react";
import { Grid2, Typography } from "@mui/material";

import MenuStyle from "../Menu/Menu.style";
import Card from "../../../../components/Card";
import CategoriesStyled from "./Categories.style";

const Categories = () => {
  return (
    <MenuStyle>
      <CategoriesStyled>
        <Typography className="categories__title">
          Explore Categories
        </Typography>
        <Grid2 container spacing={1}>
          <Grid2 size={2}>
            <Card direction="vertical">
              {/* <Typography className="categories__card-title">Donuts</Typography> */}
            </Card>
          </Grid2>
        </Grid2>
      </CategoriesStyled>
    </MenuStyle>
  );
};

export default Categories;
