import { Box, Button, Grid2, Rating, Typography } from "@mui/material";
import React from "react";
import Card from "../../../../components/Card";
import CategoriesStyled from "./Categories.style";
import Menu from "../Menu";
import MenuStyle from "../Menu/Menu.style";

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
              <Typography className="categories__card-title">Donuts</Typography>
            </Card>
          </Grid2>
        </Grid2>
      </CategoriesStyled>
    </MenuStyle>
  );
};

export default Categories;
