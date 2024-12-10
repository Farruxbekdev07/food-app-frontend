import {
  Card,
  Button,
  CardMedia,
  Typography,
  IconButton,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { ApolloError } from "apollo-server";
import { useMutation } from "@apollo/client";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  DELETE_CART_ITEM,
  UPDATE_CART_FOOD_QUANTITY,
} from "../../../../graphql/Mutation/Foods";
import ConfirmModal from "../../../ConfirmModal";
import { CartItemStyles } from "./CartItem.style";
import Burger from "../../../../assets/images/burger.png";
import { GET_CART_ITEMS_BY_USER_ID } from "../../../../graphql/Query/Foods";

interface Props {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

const CartItem = ({ image, title, price, quantity = 1, id }: Props) => {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const [deleteCartItem] = useMutation(DELETE_CART_ITEM, {
    refetchQueries: [{ query: GET_CART_ITEMS_BY_USER_ID }],
  });
  const [updateCartFoodQuantity] = useMutation(UPDATE_CART_FOOD_QUANTITY);

  const handleOpenDialog = () => {
    setOpenConfirmModal(true);
  };

  const handleCloseDialog = () => {
    setOpenConfirmModal(false);
  };

  const handleIncrement = () => {
    updateCartFoodQuantity({
      variables: {
        cartItemId: id,
        quantity: quantity + 1,
      },
    })
      .then(() => {
        toast.success("Updated cart item quantity successfully!");
      })
      .catch((e: ApolloError) => {
        console.error(e.message);
      });
  };

  const handleDecrement = () => {
    if (quantity >= 1) {
      updateCartFoodQuantity({
        variables: {
          cartItemId: id,
          quantity: quantity - 1,
        },
      })
        .then(() => {
          toast.success("Updated cart item quantity successfully!");
        })
        .catch((e: ApolloError) => {
          console.error(e.message);
        });
    } else {
      toast.error("You cannot decrease the quantity below 1");
    }
  };

  const handleDeleteCartItem = () => {
    deleteCartItem({
      variables: {
        food: id,
      },
    })
      .then(() => {
        toast.success("Deleted cart item successfully!");
      })
      .catch((e: ApolloError) => {
        console.error(e.message);
      });
    handleCloseDialog();
  };

  return (
    <CartItemStyles>
      <Card className="card">
        <CardMedia
          alt={title}
          component="img"
          image={image || Burger}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__info">
            <Typography variant="subtitle1" className="card__title">
              {title}
            </Typography>
            <Typography className="card__price" variant="body1">
              {price} UZS
            </Typography>
          </div>
          <div className="card__quantity-container">
            <IconButton
              onClick={handleDecrement}
              className="card__button"
              disabled={quantity <= 1}
            >
              <RemoveIcon fontSize="small" />
            </IconButton>
            <Typography variant="body2" className="card__quantity">
              {quantity}
            </Typography>
            <IconButton onClick={handleIncrement} className="card__button">
              <AddIcon fontSize="small" />
            </IconButton>
          </div>
          <IconButton aria-label="options" onClick={handleOpenDialog}>
            <DeleteIcon className="delete__icon" />
          </IconButton>
        </div>
        <ConfirmModal
          open={openConfirmModal}
          title="Delete Cart Item"
          handleClose={handleCloseDialog}
        >
          <DialogContent>
            <DialogContentText>
              Do you want to delete this cart item?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleCloseDialog}>
              Cancel
            </Button>
            <Button onClick={handleDeleteCartItem} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </ConfirmModal>
      </Card>
    </CartItemStyles>
  );
};

export default CartItem;
