import React from "react";
import { CourierStyle } from "./Courier.style";
import PageTitle from "../../components/PageTitle";
import FullFeaturedCrudGrid from "./components/DataGrid";
import { Button, Modal } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import CreateCourierModal from "./components/CreateCourierModal";

const Courier = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <CourierStyle>
      <div className="couriers-container">
        <PageTitle title="Courier">
          <Button
            color="primary"
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleOpen}
          >
            Add New Courier
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <CreateCourierModal />
          </Modal>
        </PageTitle>
        <FullFeaturedCrudGrid />
      </div>
    </CourierStyle>
  );
};

export default Courier;
