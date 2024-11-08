import React from "react";
import { OrderCardstyle } from "./Card.style";
import {
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

type Props = {
  id: number;
  name: string;
  quantity: number;
};

const AdminOrderCard = ({ name, quantity, id }: Props) => {
  const [status, setStatus] = React.useState("");
  console.log(status);

  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  return (
    <OrderCardstyle>
      <Card className="card__wrapper">
        <CardContent>
          <Typography className="card_id">#{id}</Typography>
          <Box className="card__food-wrapper">
            <Typography className="card__food-name">{name}</Typography>
            <Typography className="card__food-count">{quantity}x</Typography>
          </Box>
          <FormControl fullWidth>
            <InputLabel id="status-simple-select-lebel">Status</InputLabel>
            <Select
              labelId="status-simple-select-lebel"
              id="status-select-label"
              value={status}
              label="status"
              onChange={handleChangeStatus}
            >
              <MenuItem className="card__select-name" value="pending">
                pending
              </MenuItem>
              <MenuItem className="card__select-name" value="cooking">
                cooking
              </MenuItem>
              <MenuItem className="card__select-name" value="delivering">
                delivering
              </MenuItem>
              <MenuItem className="card__select-name" value="received">
                received
              </MenuItem>
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    </OrderCardstyle>
  );
};

export default AdminOrderCard;
