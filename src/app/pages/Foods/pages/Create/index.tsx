import {
  Box,
  Button,
  Tooltip,
  TextField,
  Typography,
  FormControl,
  CardActionArea,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, FieldValues, useForm } from "react-hook-form";

import StyledForm from "./Form.style";
import ROUTE_PATHS from "../../../../routes/paths";
import PageTitle from "../../../../components/PageTitle";

type UploadFileType = {
  file?: File;
  path?: string;
  name?: string;
  size?: number;
  type?: string;
  lastModified?: number;
  lastModifiedDate?: Date;
};

function CreateFood() {
  const [uploadFile, setUploadFile] = useState<UploadFileType | null>(null);
  const navigate = useNavigate();

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpload = (event: any) => {
    const files = event.target.files[0];
    setUploadFile(files);
    console.log(files);
  };

  const handleCreateFood = (values: FieldValues) => {
    console.log("Form values:", values);
  };

  const handleCancel = () => {
    reset();
    navigate(ROUTE_PATHS.FOODS);
  };

  return (
    <div>
      <PageTitle title="Create Food" />
      <StyledForm>
        <div className="image-upload">
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
                        onChange={(event: any) => {
                          const files = event.target.files[0];
                          field.onChange(files);
                          setUploadFile(files);
                          console.log(files);
                        }}
                      />
                    </FormControl>
                  )}
                />
                <CloudUploadIcon className="upload-icon" />
                <Typography>Maximum File Size: 4 MB</Typography>
                {uploadFile ? (
                  <Typography>{uploadFile?.name}</Typography>
                ) : null}
              </Box>
            </Tooltip>
          </CardActionArea>
        </div>

        <div className="fields">
          <Controller
            name="title"
            rules={{
              required: true,
            }}
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <TextField
                  {...field}
                  required
                  label={"Title"}
                  error={!!errors[field.name]}
                  helperText={
                    !!errors[field.name] && "Please input food title!"
                  }
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
      </StyledForm>
    </div>
  );
}

export default CreateFood;
