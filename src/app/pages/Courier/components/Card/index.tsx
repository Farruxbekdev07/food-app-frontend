import React from "react";
import { CourierCardStyle } from "./CourierCard.stayle";
import { Box, Button } from "@mui/material";
import PageTitle from "../../../../components/PageTitle";
import { Plus } from "dazzle-icons";

type Props = {};

const CourierCard = (props: Props) => {
  return (
    <CourierCardStyle>
      <PageTitle title="Courier">
        <Button startIcon={<Plus />} variant="contained">
          create
        </Button>
      </PageTitle>

      <Box className="courier__wrapper"></Box>
    </CourierCardStyle>
  );
};

export default CourierCard;
