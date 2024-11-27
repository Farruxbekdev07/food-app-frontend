import React from "react";
import { OrderCardstyle } from "./Card.style";
import {
  Box,
  Card,
  Typography,
  CardContent,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { AdminOrderType } from "../../../../types/adminOrder";
import { Xmark } from "dazzle-icons";

const AdminOrderCard = ({ id, foods }: AdminOrderType) => {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <OrderCardstyle>
      <Card className="card__wrapper">
        <CardContent className="card__content">
          <Box>
            <Xmark className="card__xMark" />
            <Typography className="card_id">#{id}</Typography>
            {foods.map(({ name, quantity }) => (
              <Box className="card__food-wrapper">
                <Typography className="card__food-name">{name}</Typography>
                <Typography className="card__food-count">
                  {quantity}x
                </Typography>
              </Box>
            ))}
          </Box>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            fullWidth
          >
            <ToggleButton value="pending">Pending</ToggleButton>
            <ToggleButton value="cooking">Cooking</ToggleButton>
          </ToggleButtonGroup>
        </CardContent>
      </Card>
    </OrderCardstyle>
  );
};

export default AdminOrderCard;
