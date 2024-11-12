import {
  Box,
  Button,
  Tooltip,
  TextField,
  Typography,
  FormControl,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm, Controller, FieldValues } from "react-hook-form";

import { ApolloError, useMutation } from "@apollo/client";
import CreateFoodStyles from "./CreateFood.style";
import PageTitle from "../../../../components/PageTitle";
import ROUTE_PATHS from "../../../../routes/paths/paths";
import { CREATE_FOODS } from "../../../../graphql/Mutation/Foods";
import { toast } from "react-toastify";

function CreateFood() {
  const navigate = useNavigate();
  const fieldsRef = useRef<HTMLDivElement>(null);
  const [fieldsHeight, setFieldsHeight] = useState(0);
  const [uploadFileUrl, setUploadFileUrl] = useState("");

  const [createFoods, { data, loading }] = useMutation(CREATE_FOODS);

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpload = (
    event: React.ChangeEvent<HTMLInputElement> | null
    // field: ControllerRenderProps<FieldValues, "image">
  ) => {
    const files = event?.target.files;

    if (files && files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      // field.onChange(files[0]);
      setUploadFileUrl(url);
      console.log(process.env.REACT_APP_BACKEND_URL);
    }
  };

  const handleCreateFood = useCallback(
    (values: FieldValues) => {
      console.log("Form values:", values);
      createFoods({
        variables: {
          food: {
            ...values,
            price: Number(values?.price),
            discount: Number(values?.discount),
          },
        },
      })
        .then(() => {
          toast.success("Create food successfully!");
          navigate(ROUTE_PATHS.FOODS);
        })
        .catch((error: ApolloError) => {
          toast.error(error?.message);
        });
    },
    [createFoods, data, loading]
  );

  const handleCancel = () => {
    reset();
    navigate(ROUTE_PATHS.FOODS);
  };

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
                {/* <Controller
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
                /> */}
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  onChange={(event: any) => handleUpload(event)}
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
