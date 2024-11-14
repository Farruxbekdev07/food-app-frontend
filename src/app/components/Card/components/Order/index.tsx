import {
  Card,
  Button,
  Divider,
  Typography,
  CardContent,
  CardActions,
} from "@mui/material";

import CardStyle from "../../Card.style";
import { UserRole } from "../../../../types/enums";
import { IOrder, IOrderItem, IUserOrder } from "./types";
import { useAppSelector } from "../../../../hooks/redux";

const OrderCard = ({ orders, userName }: IUserOrder) => {
  const userRole = useAppSelector((state) => state.auth?.role) as
    | UserRole
    | "user";

  return (
    <CardStyle>
      <Card className="card">
        <CardContent className="card__content">
          <Typography variant="h5" component="div" className="card__title">
            {userName}
          </Typography>

          {orders.map(({ foods, orderNumber, orderStatus }: IOrder, index) => (
            <div key={index} className="order__details">
              <Typography variant="body2" className="card__order-number">
                Order #: {orderNumber}
              </Typography>
              <Typography variant="body2" className="card__status">
                Status: {orderStatus}
              </Typography>

              <div className="order__items">
                {foods.map(
                  ({ name, price, quantity }: IOrderItem, itemIndex) => (
                    <Typography key={itemIndex} className="item__details">
                      {name} - ${price} x {quantity}
                    </Typography>
                  )
                )}
              </div>

              {index < orders.length - 1 && <Divider sx={{ marginY: 1 }} />}
            </div>
          ))}
        </CardContent>

        {userRole === "user" ? (
          <CardActions className="card__actions">
            <Button variant="contained" color="error">
              Cancel Order
            </Button>
          </CardActions>
        ) : (
          ""
        )}
      </Card>
    </CardStyle>
  );
};

export default OrderCard;
