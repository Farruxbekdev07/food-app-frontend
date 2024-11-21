import { Control, Controller, FieldValues } from "react-hook-form";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import { formatPhoneNumber } from "./helpers"; // Assuming you have a helper function for formatting
import { DEFAULT_PHONE_NUMBER_CODE } from "./constants";

type Props = {
  required?: boolean;
  helperText?: string;
  size?: "medium" | "small";
  control: Control<FieldValues> | undefined;
  phoneCode?: string;
  value?: string;
  onPhoneChange?: (value: string) => void;
};

function PhoneInput({
  control,
  helperText,
  size = "medium",
  required = false,
  phoneCode = DEFAULT_PHONE_NUMBER_CODE,
  value,
  onPhoneChange,
}: Props) {
  return (
    <Controller
      name="phone"
      rules={{
        required: helperText || "Phone number is required!",
        minLength: {
          value: 9,
          message: "Phone number must be at least 9 characters long!",
        },
      }}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          const newValue = event.target.value;
          if (onPhoneChange) {
            onPhoneChange(newValue);
          }
          field.onChange(newValue); // Integrating with React Hook Form
        };

        return (
          <FormControl fullWidth>
            <TextField
              {...field}
              size={size}
              required={required}
              label={"Phone number"}
              placeholder="(00) 000-00-00"
              error={!!error}
              value={value || formatPhoneNumber(field.value)}
              onChange={handleChange}
              inputProps={{
                maxLength: 14,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">{phoneCode}</InputAdornment>
                ),
              }}
              helperText={error?.message || ""}
            />
          </FormControl>
        );
      }}
    />
  );
}

export default PhoneInput;
