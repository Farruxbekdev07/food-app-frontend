import {
  Card,
  Button,
  MenuItem,
  CardMedia,
  IconButton,
  Typography,
  CardContent,
  DialogContent,
  DialogActions,
  DialogContentText,
  CardActions,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import CardStyle from "../../Card.style";
import MenuComponent from "../../../Menu";
import ConfirmModal from "../../../ConfirmModal";
import { UserRole } from "../../../../types/enums";
import IFoods from "../../../../pages/Foods/types";
import ROUTE_PATHS from "../../../../routes/paths/paths";
import DefaultFood from "../../../../assets/images/burger.png";
import { setFoodId } from "../../../../../store/reducer/foodSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";

const FoodCard = ({ discount, id, image, name, price, shortName }: IFoods) => {
  const userRole = useAppSelector((state) => state.auth?.role) as
    | UserRole
    | "user";
  const token = useAppSelector((state) => state.auth.token);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const open = Boolean(anchorElMenu);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const handleUpdate = () => {
    navigate(ROUTE_PATHS.CREATE_FOOD);
    dispatch(setFoodId(id));
  };

  const handleOpenDialog = () => {
    setOpenConfirmModal(true);
    handleCloseMenu();
  };

  const handleCloseDialog = () => {
    setOpenConfirmModal(false);
  };

  const handleDeleteFood = () => {
    console.log("delete food id:", id);
    handleCloseDialog();
  };

  const handleOrder = () => {};

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
                ${price || 0}
              </Typography>
              <Typography className="card__old__price">
                ${discount || 0}
              </Typography>
            </div>
          </div>
        </CardContent>
        {token && userRole === "user" ? (
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
