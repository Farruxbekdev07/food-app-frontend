import {
  Box,
  Card,
  Divider,
  Typography,
  CardContent,
  CardActionArea,
} from "@mui/material";

import { OrderCardStyles } from "./OrderCard.style";

interface Props {
  price?: number;
  orderNumber?: number;
  orderStatus?: string;
}

const OrderCard = ({ price, orderNumber, orderStatus }: Props) => {
  return (
    <OrderCardStyles>
      <CardActionArea>
        <Card className="card">
          <div className="card__header">
            <Typography variant="h6" className="order__id">
              Order #35
            </Typography>
            <Typography variant="h6" className="order__id">
              $42
            </Typography>
          </div>

          <Divider className="divider" />

          <CardContent className="card__content">
            <div className="card__status__container">
              <div className="card__status" />
              <Typography variant="body2" className="card__text">
                Active
              </Typography>
            </div>
            <Typography variant="body2" className="card__text">
              14:30
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </OrderCardStyles>
  );
};

export default OrderCard;
