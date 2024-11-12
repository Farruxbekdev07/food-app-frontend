import { useQuery } from "@apollo/client";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Divider, IconButton, Typography } from "@mui/material";

import SidebarStyles from "./Sidebar.style";
import Loader from "../../../../components/Loader";
import CardComponent from "../../../../components/Card";
import { CartItemsTypes } from "../../../../types/Foods";
import { GET_CART_ITEMS } from "../../../../graphql/Query/Foods";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { setOpenInvoiceSidebar } from "../../../../../store/reducer/foodSlice";

function InvoiceSidebar() {
  const isOpenSidebar = useAppSelector(
    (state) => state.food.isOpenInvoiceSidebar
  );
  const dispatch = useAppDispatch();

  const { data, loading } = useQuery(GET_CART_ITEMS);

  const handleCloseSidebar = () => {
    dispatch(setOpenInvoiceSidebar(!isOpenSidebar));
  };

  const cartItems = data?.getCartItemsByUserId?.payload || [];

  return (
    <SidebarStyles isOpenSidebar={isOpenSidebar}>
      <div className="sidebar__title">
        <Typography className="sidebar__title-text">Invoice</Typography>
        <IconButton onClick={handleCloseSidebar}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="selected__foods-container">
        {loading && <Loader isInner />}
        {cartItems?.map(
          ({ _id, price, quantity, food: { name } }: CartItemsTypes) => (
            <>
              <CardComponent
                _id={_id}
                name={name}
                price={price}
                direction="vertical"
                quantity={quantity}
              />
              <Divider />
            </>
          )
        )}
      </div>
      <div className="payment">
        <div className="food__price-container">
          <Typography className="food__price">Total price</Typography>
          <Typography className="food__price">$85</Typography>
        </div>
        <div className="food__price-container">
          <Typography className="food__price">Discount</Typography>
          <Typography className="food__price">-$6</Typography>
        </div>
      </div>
      <Button variant="contained" fullWidth className="payment__button">
        Place An Order Now
      </Button>
    </SidebarStyles>
  );
}

export default InvoiceSidebar;
