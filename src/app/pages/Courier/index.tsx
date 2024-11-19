import React from "react";
import { CourierStyle } from "./Courier.style";
import PageTitle from "../../components/PageTitle";
import FullFeaturedCrudGrid from "./components/DataGrid";
import { Box, Button, Modal } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import CreateCourierModal from "./components/CreateCourierModal";

type courierType = {
  name: string;
  phoneNumber: number;
};
const courierName: courierType[] = [
  {
    name: "Bolta",
    phoneNumber: 4514200503,
  },
  {
    name: "dfbBolta",
    phoneNumber: 4514200503,
  },
  {
    name: "Bolta",
    phoneNumber: 4514200503,
  },
  {
    name: "dffdbBolta",
    phoneNumber: 4514200503,
  },
];

const Courier = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <CourierStyle>
      <Box className="couriers-container">
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
            <Box>
              {courierName.map((courier) => (
                <CreateCourierModal {...courier} />
              ))}
            </Box>
          </Modal>
        </PageTitle>
        <FullFeaturedCrudGrid />
      </Box>
    </CourierStyle>
  );
};

export default Courier;
