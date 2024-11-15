import { Dialog, DialogTitle } from "@mui/material";

import { IConfirmModal } from "./types";

function ConfirmModal({ open, children, title, handleClose }: IConfirmModal) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      aria-describedby="responsive-dialog-description"
    >
      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
      {children}
    </Dialog>
  );
}

export default ConfirmModal;
