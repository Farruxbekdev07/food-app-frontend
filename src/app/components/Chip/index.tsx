import {
  Box,
  Card,
  Avatar,
  Button,
  MenuItem,
  TextField,
  Typography,
  IconButton,
  CardContent,
  FormControl,
  DialogActions,
  DialogContent,
  CardActionArea,
  DialogContentText,
} from "@mui/material";
import {
  useForm,
  Controller,
  FieldValues,
  ControllerRenderProps,
} from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useLazyQuery, useMutation } from "@apollo/client";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import MenuComponent from "../Menu";
import { pxToRem } from "../../constants";
import { ChipStyles } from "./Chip.style";
import ConfirmModal from "../ConfirmModal";
import { UserRole } from "../../types/enums";
import { useAppSelector } from "../../hooks/redux";
import DefaultMedia from "../../assets/images/burger.png";
import {
  DELETE_CATEGORY_BY_ID,
  UPDATE_CATEGORY_BY_ID,
} from "../../graphql/Mutation/Categories";
import { GET_CATEGORY_BY_ID } from "../../graphql/Query/Category";

interface Props {
  id: string;
  name?: string;
  image?: string;
  className?: string;
  onClick?: () => void;
  price?: number | string;
  refetchCategory: () => void;
}

function ChipComponent({
  id,
  name,
  price,
  image,
  onClick,
  className,
  refetchCategory,
}: Props) {
  const [blob, setBlob] = useState("");
  const [uploadFileUrl, setUploadFileUrl] = useState("");
  const token = useAppSelector((state) => state.auth.token);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const userRole = useAppSelector((state) => state.auth.role) as UserRole;
  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);
  const [dialogMode, setDialogMode] = useState<"delete" | "update">("delete");

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const open = Boolean(anchorElMenu);
  const [getCategoryById, { data: categoryData }] = useLazyQuery(
    GET_CATEGORY_BY_ID,
    {
      variables: { categoryId: id },
    }
  );
  const [updateCategory] = useMutation(UPDATE_CATEGORY_BY_ID);
  const [deleteCategory] = useMutation(DELETE_CATEGORY_BY_ID);

  const handleUpload = async (
    event: React.ChangeEvent<HTMLInputElement> | null,
    field: ControllerRenderProps<FieldValues, "image">
  ) => {
    const files = event?.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      const blob = await new Blob([file], { type: file.type }).text();
      setBlob(blob);
      const url = URL.createObjectURL(file);
      field.onChange(file);
      setUploadFileUrl(url);
    }
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const handleCloseDialog = () => {
    setOpenConfirmModal(false);
  };

  const handleDeleteCategory = () => {
    deleteCategory({
      variables: {
        categoryId: id,
      },
    })
      .then(() => {
        toast.success("Category deleted successfully!");
        handleCloseDialog();
        refetchCategory();
      })
      .catch((e) => console.log("Category deleted error:", e?.message));
  };

  const handleUpdateCategory = (values: FieldValues) => {
    updateCategory({
      variables: {
        categoryId: id,
        category: {
          name: values.name,
        },
      },
    })
      .then(() => {
        toast.success("Category updated successfully!");
        handleCloseDialog();
        refetchCategory();
      })
      .catch((e) => console.log("Category updated error:", e?.message));
  };

  const handleOpenDialog = (mode: "delete" | "update") => {
    setDialogMode(mode);
    setOpenConfirmModal(true);
    handleCloseMenu();
  };

  useEffect(() => {
    if (token && userRole === "admin") {
      getCategoryById();
    }
  }, [token]);

  useEffect(() => {
    const category = categoryData?.getCategoryById?.payload;
    reset({ name: category?.name });
  }, [dialogMode]);

  return (
    <ChipStyles onClick={onClick}>
      <Card className={`chip__card ${className}`}>
        <Avatar className="chip__card__media">
          <img src={image || DefaultMedia} alt={name || "food"} />{" "}
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
          {userRole === "admin" && (
            <IconButton onClick={handleOpenMenu}>
              <MoreVertIcon />
            </IconButton>
          )}
        </CardContent>
      </Card>
      <MenuComponent
        open={open}
        anchorEl={anchorElMenu}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => handleOpenDialog("update")}>
          <EditIcon color="warning" />
          <Typography>Update</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleOpenDialog("delete")}>
          <DeleteIcon color="error" />
          <Typography>Delete</Typography>
        </MenuItem>
      </MenuComponent>
      <ConfirmModal
        open={openConfirmModal}
        title="Delete Category"
        handleClose={handleCloseDialog}
      >
        <DialogContent
          sx={{ display: "flex", gap: pxToRem(16), flexDirection: "column" }}
        >
          {dialogMode === "delete" ? (
            <DialogContentText>
              Do you want to delete this category?
            </DialogContentText>
          ) : (
            <>
              <CardActionArea
                sx={{
                  display: "flex",
                  width: pxToRem(450),
                  height: pxToRem(250),
                }}
              >
                <Box
                  component="label"
                  sx={{
                    flex: 1,
                    height: "100%",
                    display: "flex",
                    cursor: "pointer",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Controller
                    name="image"
                    control={control}
                    render={({ field }) => (
                      <FormControl>
                        <input
                          hidden
                          type="file"
                          accept="image/*"
                          onChange={(event: any) => handleUpload(event, field)}
                        />
                      </FormControl>
                    )}
                  />
                  {uploadFileUrl ? (
                    <img
                      alt="Upload image"
                      src={uploadFileUrl}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: pxToRem(8),
                      }}
                    />
                  ) : (
                    <>
                      <CloudUploadIcon sx={{ fontSize: pxToRem(100) }} />
                      <Typography>Maximum File Size: 4 MB</Typography>
                    </>
                  )}
                </Box>
              </CardActionArea>
              <Controller
                name="name"
                rules={{
                  required: true,
                }}
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <TextField
                      {...field}
                      required
                      label={"Name"}
                      error={!!errors[field.name]}
                      helperText={
                        !!errors[field.name] && "Please input category name!"
                      }
                    />
                  </FormControl>
                )}
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          {dialogMode === "update" ? (
            <>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button onClick={handleSubmit(handleUpdateCategory)}>
                Update
              </Button>
            </>
          ) : (
            <>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button onClick={handleDeleteCategory}>Delete</Button>
            </>
          )}
        </DialogActions>
      </ConfirmModal>
    </ChipStyles>
  );
}

export default ChipComponent;
