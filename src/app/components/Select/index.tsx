import {
  MenuItem,
  InputLabel,
  Typography,
  FormControl,
  FormHelperText,
  Select as MUISelect,
} from "@mui/material";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";

export type OptionType = {
  label: string;
  key: string;
  value: string | number;
};

interface Props {
  control: Control<FieldValues, any>;
  errors: FieldErrors<FieldValues>;
  label?: string;
  name?: string;
  options: OptionType[];
  onSelect?: (value: string | number) => void;
  errorMessage?: string;
  defaultValue?: string;
  required?: boolean;
  width?: number | string;
  size?: "small" | "medium";
}

const Select = ({
  control,
  errors,
  label = "",
  name,
  options,
  errorMessage,
  defaultValue,
  required = false,
  onSelect = () => {},
  width,
  size = "medium",
}: Props) => {
  const labelSize = size === "medium" ? "normal" : size;

  return (
    <Controller
      control={control}
      name={name || label}
      rules={{ required }}
      defaultValue={defaultValue || ""}
      render={({ field: { value, onChange, ...field } }) => (
        <FormControl
          fullWidth={!width}
          sx={{ minWidth: width ? width : "auto" }}
        >
          {label && (
            <InputLabel
              size={labelSize}
              required={required}
              id="custom-select__label"
              className={errors[field.name] && "Mui-error"}
            >
              {label}
            </InputLabel>
          )}
          <MUISelect
            {...field}
            id="custom-select"
            size={size}
            label={label}
            error={!!errors[field.name]}
            labelId="custom-select__label"
            value={options.length ? value : ""}
            sx={{ width: width ? width : "auto" }}
            onChange={(e) => {
              onChange(e);
              onSelect(e.target.value);
            }}
          >
            {options.length ? (
              options?.map(({ key, label, value }) => (
                <MenuItem key={key} value={value}>
                  {label}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled value="">
                <Typography textAlign="center" width="100%">
                  {"No data"}
                </Typography>
              </MenuItem>
            )}
          </MUISelect>
          {errors[field.name] && (
            <FormHelperText className="Mui-error">
              {errorMessage || "Please select!"}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};

export default Select;
