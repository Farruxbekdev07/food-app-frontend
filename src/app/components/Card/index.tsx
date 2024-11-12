import {
  Card,
  Avatar,
  Button,
  MenuItem,
  CardMedia,
  IconButton,
  Typography,
  CardActions,
  CardContent,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useCallback, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ApolloError, useMutation } from "@apollo/client";

import MenuComponent from "../Menu";
import CardStyle from "./Card.style";
import CardProps from "./interfaces";
import { UserRole } from "../../types/enums";
import DefaultFood from "../../assets/images/burger.png";
import { setFoodId, setOpenDialog } from "../../../store/reducer/foodSlice";
import { CREATE_CART_ITEM, DELETE_FOOD } from "../../graphql/Mutation/Foods";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import ROUTE_PATHS from "../../routes/paths/paths";
import ConfirmModal from "../ConfirmModal";

const CardComponent = ({
  _id,
  name,
  price,
  image,
  onClick,
  oldPrice,
  quantity,
  direction,
  className,
  redirectPath = "",
}: CardProps) => {
  const userRole = useAppSelector((state) => state.auth?.role) as
    | UserRole
    | "user";
  const token = useAppSelector((state) => state.auth.token);
  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const [createCardItem, { data, loading }] = useMutation(CREATE_CART_ITEM);
  const [deleteFood] = useMutation(DELETE_FOOD);

  const open = Boolean(anchorElMenu);
  const dispatch = useAppDispatch();

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const handleUpdate = () => {
    navigate(redirectPath);
    dispatch(setFoodId(_id));
  };

  const handleOpenDialog = () => {
    dispatch(setOpenDialog(true));
    handleCloseMenu();
  };

  const handleCloseDialog = () => {
    dispatch(setOpenDialog(false));
  };

  const handleDeleteFood = () => {
    deleteFood({
      variables: {
        foodId: _id,
      },
    })
      .then(() => {
        toast.success("Delete food successfully!");
      })
      .catch((error: ApolloError) => {
        toast.error(error?.message);
      });
    console.log("delete food id:", _id);
    handleCloseDialog();
  };

  const handleOrder = useCallback(() => {
    createCardItem({
      variables: {
        food: _id,
      },
    })
      .then(() => {
        toast.success("Create card item successfully!");
      })
      .catch((error: ApolloError) => {
        toast.error(error?.message);
      });
  }, [createCardItem, data, loading]);

  if (direction === "horizontal") {
    return (
      <CardStyle>
        <Card className={`card ${className}`}>
          <div className="selected__card-container">
            {userRole === "admin" && (
              <IconButton
                aria-label="options"
                className="card-menu"
                onClick={handleOpenMenu}
              >
                <MoreVertIcon />
              </IconButton>
            )}
            <CardMedia
              component="img"
              alt={name || "food"}
              className="card__media"
              image={image || DefaultFood}
            />
          </div>
          <CardContent className="card__content">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="card__title"
            >
              {name || "Food"}
            </Typography>
            <div className="card__price-container">
              <div className="card__price">
                <Typography className="card__new__price">
                  ${price || 0}
                </Typography>
                <Typography className="card__old__price">
                  ${oldPrice || 0}
                </Typography>
              </div>
            </div>
          </CardContent>
          {token && userRole === "user" ? (
            <CardActions className="card__actions">
              <Button variant="outlined">Wishlist</Button>
              <Button variant="contained" onClick={handleOrder}>
                Order Now
              </Button>
            </CardActions>
          ) : !userRole ? (
            <CardActions className="card__actions">
              <Button variant="outlined">Wishlist</Button>
              <Button variant="contained" onClick={handleOrder}>
                Order Now
              </Button>
            </CardActions>
          ) : (
            ""
          )}
        </Card>
        <MenuComponent
          open={open}
          anchorEl={anchorElMenu}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleUpdate}>
            <EditIcon color="warning" />
            <Typography>Update</Typography>
          </MenuItem>
          <MenuItem onClick={handleOpenDialog}>
            <DeleteIcon color="error" />
            <Typography>Delete</Typography>
          </MenuItem>
        </MenuComponent>
        <ConfirmModal title="Delete Food" handleClose={handleCloseDialog}>
          <DialogContent>
            <DialogContentText>
              Do you want to delete this food?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleCloseDialog}>
              Cancel
            </Button>
            <Button onClick={handleDeleteFood} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </ConfirmModal>
      </CardStyle>
    );
  } else if (direction === "vertical") {
    return (
      <CardStyle onClick={onClick}>
        {/* <CardActionArea> */}
        <Card className={`chip__card ${className}`}>
          <Avatar className="chip__card__media">
            <img src={image || DefaultFood} alt={name || "food"} />{" "}
          </Avatar>
          <CardContent className="chip__card__content">
            <div>
              <Typography variant="body1" className="chip__card__title">
                {name || "Food"}
              </Typography>
              {price ? (
                <Typography variant="body1" className="chip__card__price">
                  ${price || 0}
                </Typography>
              ) : (
                ""
              )}
            </div>
            {quantity ? (
              <div className="chip__card__quantity">
                <IconButton>-</IconButton>
                <Typography className="card__quantity-value">
                  {quantity || 0}
                </Typography>
                <IconButton>+</IconButton>
              </div>
            ) : (
              ""
            )}
          </CardContent>
        </Card>
        {/* </CardActionArea> */}
      </CardStyle>
    );
  }
};

export default CardComponent;
