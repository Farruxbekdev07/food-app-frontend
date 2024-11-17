import React from "react";
import PageTitle from "../../../../components/PageTitle";

import { Box, Typography } from "@mui/material";
import { CreateCourierModalStyle } from "./CreateCourier.style";

type Props = {};
const CreateCourierModal = (props: Props) => {
  return (
    <CreateCourierModalStyle>
      <Box className="modal__text-wrapper">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </CreateCourierModalStyle>
  );
};

export default CreateCourierModal;
