import {
  Box,
  Slide,
  Button,
  Dialog,
  TextField,
  Typography,
  FormControl,
  DialogTitle,
  DialogContent,
  DialogActions,
  CardActionArea,
} from "@mui/material";
import {
  useForm,
  Controller,
  FieldValues,
  ControllerRenderProps,
} from "react-hook-form";
import { toast } from "react-toastify";
import { Pagination } from "@mui/material";
import { ApolloError } from "apollo-server";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { TransitionProps } from "@mui/material/transitions";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import IFoods from "./types";
import FoodStyles from "./Food.style";
import { useModal } from "../../hooks";
import { pxToRem } from "../../constants";
import NoData from "../../components/NoData";
import Loader from "../../components/Loader";
import { UserRole } from "../../types/enums";
import InvoiceSidebar from "./components/Sidebar";
import ChipComponent from "../../components/Chip";
import CardComponent from "../../components/Card";
import PageTitle from "../../components/PageTitle";
import ROUTE_PATHS from "../../routes/paths/paths";
import ICard from "../../components/Card/interfaces";
import DefaultMedia from "../../assets/images/burger.png";
import { GET_ALL_FOODS } from "../../graphql/Query/Foods";
import { GET_ALL_CATEGORIES } from "../../graphql/Query/Category";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { CREATE_CATEGORY } from "../../graphql/Mutation/Categories";
import { ICategory, setCategories } from "../../../store/reducer/foodSlice";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Foods = () => {
  const [page, setPage] = useState(1);
  const [blob, setBlob] = useState("");
  const [uploadFileUrl, setUploadFileUrl] = useState("");
  const categories = useAppSelector((state) => state.food?.categories);
  const userRole = useAppSelector((state) => state.auth?.role) as UserRole;

  const { isOpen, openModal, closeModal } = useModal();

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    data: categoryData,
    refetch: refetchCategory,
    loading: loadingCategory,
  } = useQuery(GET_ALL_CATEGORIES);
  const {
    loading,
    data: foodData,
    refetch: refetchFoods,
  } = useQuery(GET_ALL_FOODS, {
    variables: {
      page: page,
      limit: 10,
      categories: categories
        ? categories.map((category: ICategory) => category._id)
        : "all",
    },
  });
  const [createCategory] = useMutation(CREATE_CATEGORY);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleSelectCategory = (category: ICategory) => {
    if (category) {
      const isCategoryExists = categories?.some(
        (item: ICategory) => item._id === category._id
      );

      if (isCategoryExists) {
        const updatedCategories = categories.filter(
          (item: ICategory) => item._id !== category._id
        );
        dispatch(setCategories(updatedCategories));
      } else {
        const updatedCategories = [...categories, category];
        dispatch(setCategories(updatedCategories));
      }
    }
  };

  const handleNavigate = () => {
    navigate(ROUTE_PATHS.CREATE_FOOD);
  };

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

  const handleCreateCategory = (values: FieldValues) => {
    createCategory({
      variables: {
        category: {
          image: blob,
          name: values.name,
        },
      },
    })
      .then(() => {
        toast.success("Category created successfully!");
        refetchCategory();
        closeModal();
        reset();
      })
      .catch((e) => console.log("Category created error:", e?.message));
  };

  useEffect(() => {
    refetchFoods();
  }, [foodData, categories]);

  const foods = foodData?.getAllFoods?.payload || [];
  const totalPages = foodData?.getAllFoods?.totalPages || 1;
  const categoriesList = categoryData?.getAllCategories?.payload || [];

  return (
    <FoodStyles>
      <PageTitle title="Explore Categories">
        {userRole === "admin" && (
          <div className="button__group">
            <Button
              variant="contained"
              onClick={openModal}
              startIcon={<AddIcon />}
            >
              New Category
            </Button>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleNavigate}
            >
              New Food
            </Button>
          </div>
        )}
      </PageTitle>
      <div className="foods-container">
        <div className="menu-container">
          {loadingCategory && <Loader isInner />}
          {categoriesList?.length !== 0 ? (
            <div className="chip__card-container">
              {categoriesList.map(({ _id, name }: ICard, index: number) => {
                const isCategoryExists = categories?.some(
                  (category: ICategory) => category._id === _id
                );

                return (
                  <ChipComponent
                    name={name}
                    id={_id || ""}
                    image={DefaultMedia}
                    refetchCategory={refetchCategory}
                    onClick={() => handleSelectCategory({ _id, name })}
                    className={isCategoryExists ? "chip__card-active" : ""}
                  />
                );
              })}
            </div>
          ) : (
            <NoData />
          )}
          <div>
            <PageTitle title="Menu" />
            {foods?.length !== 0 ? (
              <div className="card-container">
                {loading && <Loader isInner />}
                {foods.map(({ name, price, _id, discount, image }: IFoods) => (
                  <CardComponent
                    _id={_id}
                    type="food"
                    image={image}
                    price={price}
                    name={name || ""}
                    discount={discount}
                  />
                ))}
              </div>
            ) : (
              <NoData />
            )}
          </div>
        </div>
        {userRole === "user" && <InvoiceSidebar />}
        <InvoiceSidebar />
      </div>
      {foods?.length > 0 && (
        <Pagination
          page={page}
          color="primary"
          count={totalPages}
          onChange={handlePageChange}
        />
      )}
      <Dialog
        keepMounted
        open={isOpen}
        onClose={closeModal}
        TransitionComponent={Transition}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Create Category</DialogTitle>
        <DialogContent
          className="dialog-content"
          sx={{ display: "flex", gap: pxToRem(16), flexDirection: "column" }}
        >
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
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button onClick={handleSubmit(handleCreateCategory)}>Create</Button>
        </DialogActions>
      </Dialog>
    </FoodStyles>
  );
};

export default Foods;
