import { Dialog, useTheme, DialogTitle, useMediaQuery } from "@mui/material";

import { IConfirmModal } from "./types";
import { useAppSelector } from "../../hooks/redux";

function ConfirmModal({ children, title, handleClose }: IConfirmModal) {
  const openDialog = useAppSelector((state) => state.food.isOpenDialog);

  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      open={openDialog}
      onClose={handleClose}
      // fullScreen={fullScreen}
      aria-labelledby="responsive-dialog-title"
      aria-describedby="responsive-dialog-description"
    >
      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
      {children}
    </Dialog>
  );
}

export default ConfirmModal;
