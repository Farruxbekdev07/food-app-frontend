import {
  Card,
  Button,
  MenuItem,
  CardMedia,
  IconButton,
  Typography,
  CardContent,
  CardActions,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { GraphQLError } from "graphql";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import {
  CREATE_CART_ITEM,
  DELETE_FOOD_BY_ID,
} from "../../../../graphql/Mutation/Foods";
import CardStyle from "../../Card.style";
import MenuComponent from "../../../Menu";
import ConfirmModal from "../../../ConfirmModal";
import { UserRole } from "../../../../types/enums";
import IFoods from "../../../../pages/Foods/types";
import ROUTE_PATHS from "../../../../routes/paths/paths";
import DefaultFood from "../../../../assets/images/burger.png";
import { setFoodId } from "../../../../../store/reducer/foodSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { GET_CART_ITEMS_BY_USER_ID } from "../../../../graphql/Query/Foods";

const FoodCard = ({ discount, _id, image, name, price }: IFoods) => {
  const token = useAppSelector((state) => state.auth.token);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const userRole = useAppSelector((state) => state.auth?.role) as UserRole;
  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const open = Boolean(anchorElMenu);

  const [deleteFood] = useMutation(DELETE_FOOD_BY_ID);
  const [createCartItem] = useMutation(CREATE_CART_ITEM, {
    refetchQueries: [{ query: GET_CART_ITEMS_BY_USER_ID }],
  });

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const handleUpdate = () => {
    dispatch(setFoodId(_id));
    navigate(ROUTE_PATHS.UPDATE_FOOD);
  };

  const handleOpenDialog = () => {
    setOpenConfirmModal(true);
    handleCloseMenu();
  };

  const handleCloseDialog = () => {
    setOpenConfirmModal(false);
  };

  const handleDeleteFood = () => {
    handleCloseDialog();
    deleteFood({
      variables: {
        foodId: _id,
      },
    })
      .then(() => {
        toast.success("Deleted food successfully!");
      })
      .catch((error: GraphQLError) => {
        toast.error(error.message);
      });
  };

  const handleOrder = () => {
    createCartItem({
      variables: {
        data: { food: _id, quantity: 1 },
      },
    })
      .then(() => {
        toast.success("Cart item created successfully!");
        handleCloseDialog();
      })
      .catch((e) => console.log("Cart item created error:", e?.message));
  };

  return (
    <CardStyle>
      <Card className="card">
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
                {price || 0} UZS
              </Typography>
              <Typography className="card__old__price">
                {discount || 0} UZS
              </Typography>
            </div>
          </div>
        </CardContent>
        {userRole === "user" ? (
          <CardActions className="card__actions">
            <Button variant="contained" onClick={handleOrder}>
              Order Now
            </Button>
          </CardActions>
        ) : !userRole ? (
          <CardActions className="card__actions">
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

      <ConfirmModal
        title="Delete Food"
        open={openConfirmModal}
        handleClose={handleCloseDialog}
      >
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
};

export default FoodCard;
