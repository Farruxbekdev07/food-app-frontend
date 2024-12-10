import { toast } from "react-toastify";
import ForwardIcon from "@mui/icons-material/Forward";
import { useCallback, useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { Button, Divider, IconButton, Typography } from "@mui/material";

import SidebarStyles from "./Sidebar.style";
import Loader from "../../../../components/Loader";
import NoData from "../../../../components/NoData";
import CardComponent from "../../../../components/Card";
import { CREATE_ORDER } from "../../../../graphql/Mutation/Order";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { GET_CART_ITEMS_BY_USER_ID } from "../../../../graphql/Query/Foods";
import { setOpenInvoiceSidebar } from "../../../../../store/reducer/foodSlice";

function InvoiceSidebar() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const isOpenSidebar = useAppSelector(
    (state) => state.food.isOpenInvoiceSidebar
  );
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const userRole = useAppSelector((state) => state.auth.role);

  const [getCartItemsByUserId, { data, loading }] = useLazyQuery(
    GET_CART_ITEMS_BY_USER_ID
  );
  const [createOrder] = useMutation(CREATE_ORDER, {
    refetchQueries: [{ query: GET_CART_ITEMS_BY_USER_ID }],
  });

  const fetchLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported in your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.error("There was an error getting location:", error.message);
        toast.error(`There was an error getting location!, ${error.message}`);
      }
    );
  };

  const handleCloseSidebar = () => {
    dispatch(setOpenInvoiceSidebar(!isOpenSidebar));
  };

  const handleOrder = useCallback(() => {
    if (data?.getCartItemsByUserId?.payload?.items?.length > 0) {
      createOrder({
        variables: {
          address: [location?.latitude, location?.longitude],
        },
      })
        .then(() => {
          toast.success("Order created successfully!");
        })
        .catch((e) => console.log("Order created error:", e?.message));
    } else {
      toast.error("Order not found!");
    }
  }, [data]);

  useEffect(() => {
    fetchLocation();
  }, []);

  useEffect(() => {
    if (token && userRole === "user" && isOpenSidebar) {
      getCartItemsByUserId();
    }
  }, [token, userRole, isOpenSidebar]);

  const cartItems = data?.getCartItemsByUserId?.payload?.items || [];

  const totalPrice =
    cartItems.reduce(
      (total: number, food: any) => total + food?.price * food?.quantity,
      0
    ) || 0;

  const totalDiscount = cartItems.reduce(
    (sum: number, food: any) => sum + (food.discount || 0),
    0
  );

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
          cartItems?.map(
            ({ _id, price, food: { name, shortName }, quantity }: any) => (
              <>
                <CardComponent
                  _id={_id}
                  type="cartItem"
                  quantity={quantity}
                  name={name || shortName}
                  price={price * quantity}
                />
                <Divider />
              </>
            )
          )
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
          <Typography className="food__price">{totalDiscount} UZS</Typography>
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
