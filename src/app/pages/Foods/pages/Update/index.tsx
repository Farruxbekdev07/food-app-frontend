import {
  Box,
  Button,
  Tooltip,
  TextField,
  Typography,
  FormControl,
  CardActionArea,
} from "@mui/material";
import {
  useForm,
  Controller,
  FieldValues,
  ControllerRenderProps,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useCallback, useEffect, useRef, useState } from "react";

import PageTitle from "../../../../components/PageTitle";
import ROUTE_PATHS from "../../../../routes/paths/paths";
import { useAppSelector } from "../../../../hooks/redux";
import CreateFoodStyles from "../Create/CreateFood.style";
import { GET_FOOD_BY_ID } from "../../../../graphql/Query/Foods";
import { UPDATE_FOOD_BY_ID } from "../../../../graphql/Mutation/Foods";
import { toast } from "react-toastify";
import { ApolloError } from "apollo-server";
import { GET_ALL_CATEGORIES } from "../../../../graphql/Query/Category";
import formatDataForSelect from "../../../../helpers/select";
import Select from "../../../../components/Select";

function UpdateFood() {
  const navigate = useNavigate();
  const [blob, setBlob] = useState("");
  const fieldsRef = useRef<HTMLDivElement>(null);
  const [fieldsHeight, setFieldsHeight] = useState(0);
  const [uploadFileUrl, setUploadFileUrl] = useState("");
  const foodId = useAppSelector((state) => state.food?.foodId);

  const { data: categoriesData } = useQuery(GET_ALL_CATEGORIES);
  const [updateFood] = useMutation(UPDATE_FOOD_BY_ID);
  const { data: foodData } = useQuery(GET_FOOD_BY_ID, {
    variables: {
      foodId,
    },
  });

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const handleUpdateFood = useCallback(
    (values: FieldValues) => {
      const { name, category, shortName, description, price, discount } =
        values || {};
      updateFood({
        variables: {
          foodId,
          food: {
            name,
            category,
            shortName,
            description,
            price: Number(price),
            discount: Number(discount),
          },
          image: blob,
        },
      }).then(() => {
        toast.success("Update food successfully!");
        navigate(ROUTE_PATHS.FOODS);
      });
    },
    [updateFood]
  );

  const handleCancel = () => {
    reset();
    navigate(ROUTE_PATHS.FOODS);
  };

  const food = foodData?.getFoodById?.payload;
  const categories = categoriesData?.getAllCategories?.payload;

  const categoryOptions = formatDataForSelect({
    value: "_id",
    label: "name",
    data: categories,
  });

  useEffect(() => {
    if (fieldsRef.current) {
      setFieldsHeight(fieldsRef?.current?.offsetHeight);
    }
    if (food) {
      reset({
        name: food?.name || "",
        price: food?.price || 0,
        discount: food?.discount || 0,
        shortName: food?.shortName || "",
        description: food?.description || "",
      });
    }
  }, [uploadFileUrl, food, reset]);

  return (
    <CreateFoodStyles>
      <PageTitle title="Update Food" />
      <div className="form">
        <div className="image-upload" style={{ maxHeight: fieldsHeight }}>
          <CardActionArea className="upload__focusable-area">
            <Tooltip title={"Upload Image"} arrow placement="right">
              <Box className="upload-file" component="label">
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
                    className="upload-image"
                  />
                ) : (
                  <>
                    <CloudUploadIcon className="upload-icon" />
                    <Typography>Maximum File Size: 4 MB</Typography>
                  </>
                )}
              </Box>
            </Tooltip>
          </CardActionArea>
        </div>
        <div className="fields" ref={fieldsRef}>
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
                  value={field.value || ""}
                  error={!!errors[field.name]}
                  helperText={!!errors[field.name] && "Please input food name!"}
                />
              </FormControl>
            )}
          />
          <Controller
            name="shortName"
            rules={{
              required: true,
            }}
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <TextField
                  {...field}
                  required
                  label={"ShortName"}
                  value={field.value || ""}
                  error={!!errors[field.name]}
                  helperText={
                    !!errors[field.name] && "Please input food shortName!"
                  }
                />
              </FormControl>
            )}
          />
          <Controller
            name="price"
            rules={{
              required: true,
            }}
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <TextField
                  {...field}
                  required
                  label={"Price"}
                  value={field.value || ""}
                  error={!!errors[field.name]}
                  helperText={
                    !!errors[field.name] && "Please input food price!"
                  }
                />
              </FormControl>
            )}
          />
          <Controller
            name="discount"
            rules={{
              required: true,
            }}
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <TextField
                  {...field}
                  required
                  label={"Discount"}
                  value={field.value || ""}
                  error={!!errors[field.name]}
                  helperText={
                    !!errors[field.name] && "Please input food discount!"
                  }
                />
              </FormControl>
            )}
          />
          <Controller
            name="description"
            rules={{
              required: true,
            }}
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <TextField
                  {...field}
                  required
                  label={"Description"}
                  value={field.value || ""}
                  error={!!errors[field.name]}
                  helperText={
                    !!errors[field.name] && "Please input food description!"
                  }
                />
              </FormControl>
            )}
          />
          <Select
            required
            size="medium"
            errors={errors}
            name="category"
            control={control}
            label="Category"
            defaultValue={food?.category?.name}
            options={categoryOptions}
            errorMessage="Please select category!"
          />
          <div className="form__actions">
            <Button variant="outlined" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit(handleUpdateFood)}
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </CreateFoodStyles>
  );
}

export default UpdateFood;
