import { useCallback, useState } from "react";
import ForwardIcon from "@mui/icons-material/Forward";
import { useQuery, useSubscription } from "@apollo/client";
import { Button, Divider, IconButton, Typography } from "@mui/material";

import SidebarStyles from "./Sidebar.style";
import Loader from "../../../../components/Loader";
import NoData from "../../../../components/NoData";
import CardComponent from "../../../../components/Card";
import { CREATE_ORDER } from "../../../../graphql/Subscription/Orders";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { GET_CART_ITEMS_BY_USER_ID } from "../../../../graphql/Query/Foods";
import { setOpenInvoiceSidebar } from "../../../../../store/reducer/foodSlice";

function InvoiceSidebar() {
  const [startSubscription, setStartSubscription] = useState(false);
  const isOpenSidebar = useAppSelector(
    (state) => state.food.isOpenInvoiceSidebar
  );
  const dispatch = useAppDispatch();

  const { data, loading } = useQuery(GET_CART_ITEMS_BY_USER_ID);
  const { data: CreateOrderData, error: CreateOrderError } = useSubscription(
    CREATE_ORDER,
    {
      variables: {
        order: {
          to: data?.getCartItemsByUserId?.payload || [],
        },
      },
      skip: !startSubscription,
    }
  );

  const handleCloseSidebar = () => {
    dispatch(setOpenInvoiceSidebar(!isOpenSidebar));
  };

  const handleOrder = useCallback(() => {
    setStartSubscription(true);
    console.log("Create Order Data:", CreateOrderData);
  }, [CreateOrderError]);

  const cartItems = data?.getCartItemsByUserId?.payload?.items || [];

  const totalPrice =
    cartItems.reduce(
      (total: number, order: { price: number; quantity: number }) =>
        total + order?.price * order?.quantity,
      0
    ) || 0;

  return (
    <SidebarStyles isOpenSidebar={isOpenSidebar}>
      <div className="sidebar__title">
        <Typography className="sidebar__title-text">Invoice</Typography>
        <IconButton onClick={handleCloseSidebar}>
          <ForwardIcon />
        </IconButton>
      </div>
      <div className="selected__foods-container">
        {loading && <Loader isInner />}
        {cartItems?.length !== 0 ? (
          cartItems?.map(({ _id, price, name }: any) => (
            <>
              <CardComponent
                _id={_id}
                price={price}
                type="cartItem"
                name={name || ""}
              />
              <Divider />
            </>
          ))
        ) : (
          <NoData />
        )}
      </div>
      <div className="payment">
        <div className="food__price-container">
          <Typography className="food__price">Total price</Typography>
          <Typography className="food__price">{totalPrice} UZS</Typography>
        </div>
        <div className="food__price-container">
          <Typography className="food__price">Discount</Typography>
          <Typography className="food__price">0 UZS</Typography>
        </div>
      </div>
      <Button
        fullWidth
        variant="contained"
        onClick={handleOrder}
        className="payment__button"
      >
        Order Now
      </Button>
    </SidebarStyles>
  );
}

export default InvoiceSidebar;
