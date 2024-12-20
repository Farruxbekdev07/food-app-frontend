import {
  Box,
  Button,
  Tooltip,
  TextField,
  Typography,
  FormControl,
  CardActionArea,
} from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  useForm,
  Controller,
  FieldValues,
  ControllerRenderProps,
} from "react-hook-form";
import { ApolloError, useMutation, useQuery } from "@apollo/client";

import CreateFoodStyles from "./CreateFood.style";
import Select from "../../../../components/Select";
import PageTitle from "../../../../components/PageTitle";
import ROUTE_PATHS from "../../../../routes/paths/paths";
import formatDataForSelect from "../../../../helpers/select";
import { CREATE_FOOD } from "../../../../graphql/Mutation/Foods";
import { GET_ALL_CATEGORIES } from "../../../../graphql/Query/Category";

function CreateFood() {
  const navigate = useNavigate();
  const [blob, setBlob] = useState("");
  const fieldsRef = useRef<HTMLDivElement>(null);
  const [fieldsHeight, setFieldsHeight] = useState(0);
  const [uploadFileUrl, setUploadFileUrl] = useState<string | null>(null);

  const { data: categoriesData } = useQuery(GET_ALL_CATEGORIES);
  const [createFoods, { data, loading }] = useMutation(CREATE_FOOD);

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

  const handleCreateFood = useCallback(
    (values: FieldValues) => {
      const { name, price, discount, shortName, category, description } =
        values || {};
      createFoods({
        variables: {
          food: {
            name,
            category,
            shortName,
            description,
            price: Number(price),
            discount: Number(discount),
          },
        },
      })
        .then(() => {
          toast.success("Create food successfully!");
          navigate(ROUTE_PATHS.FOODS);
        })
        .catch((e) => console.log("Food created error:", e?.message));
    },
    [createFoods, data, loading]
  );

  const handleCancel = () => {
    reset();
    navigate(ROUTE_PATHS.FOODS);
  };

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
  }, [uploadFileUrl]);

  return (
    <CreateFoodStyles>
      <PageTitle title="Create Food" />
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
                    <Typography>Maximum File Size: 1 MB</Typography>
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
                  label={"Short Name"}
                  error={!!errors[field.name]}
                  helperText={
                    !!errors[field.name] && "Please input food short name!"
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
            options={categoryOptions}
            errorMessage="Please select category!"
          />
          <div className="form__actions">
            <Button variant="outlined" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit(handleCreateFood)}
            >
              Create
            </Button>
          </div>
        </div>
      </div>
    </CreateFoodStyles>
  );
}

export default CreateFood;
