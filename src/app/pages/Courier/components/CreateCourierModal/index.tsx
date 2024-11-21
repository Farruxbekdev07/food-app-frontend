import { Box, Button, TextField, Typography } from "@mui/material";
import { CreateCourierModalStyle } from "./CreateCourier.style";

type Props = {
  name: string;
  phoneNumber: number;
};
const CreateCourierModal = ({ name, phoneNumber }: Props) => {
  return (
    <CreateCourierModalStyle>
      <Box className="modal__text-wrapper">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create add courier
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextField placeholder="courier search"></TextField>
          <Button variant="contained">add</Button>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap={1}
          overflow="auto"
          height="190px"
        >
          <Box display="flex" justifyContent="space-between" p={1}>
            <Typography>{name}</Typography>
            <Typography>{phoneNumber}</Typography>
          </Box>
        </Box>
      </Box>
    </CreateCourierModalStyle>
  );
};

export default CreateCourierModal;
