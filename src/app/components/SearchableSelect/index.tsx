import React, { useMemo } from "react";
import { Autocomplete, TextField } from "@mui/material";

export type OptionType = {
  key: string;
  label: string;
  value: string | number;
};

export interface SearchableSelectOptionType extends OptionType {
  type?: string;
  group?: string;
}

interface Props {
  name: string;
  label: string;
  error?: boolean;
  helperText?: string;
  value: string | number;
  width?: string | number;
  disableGroupBy?: boolean;
  size?: "medium" | "small";
  disableClearable?: boolean;
  optionsDefaultGroup?: string;
  options: SearchableSelectOptionType[];
  onChange: (value: string | any) => void;
  onSelect?: (value: SearchableSelectOptionType) => void;
}

const SearchableSelect = ({
  name,
  label,
  width,
  value,
  error,
  options,
  onChange,
  onSelect,
  size = "medium",
  disableGroupBy = false,
  disableClearable = false,
  optionsDefaultGroup = "",
  helperText = "Please select",
}: Props) => {
  const handleSelectChange = (
    _: React.SyntheticEvent,
    option: SearchableSelectOptionType | null
  ) => {
    onChange(option ? option?.value : "");
    if (onSelect) {
      onSelect(
        option
          ? option
          : { label: "Not found", value: "notFound", key: "notFound" }
      );
    }
  };

  const getOptionLabel = (option: SearchableSelectOptionType) => {
    return option.label;
  };

  const getOptionKey = (option: SearchableSelectOptionType) => {
    return option.value;
  };

  const optionValue = useMemo(() => {
    return options?.find((item) => item?.value === value) || null;
  }, [value, options]);

  return (
    <Autocomplete
      options={options}
      value={optionValue}
      getOptionKey={getOptionKey}
      onChange={handleSelectChange}
      sx={{ width: width || "auto" }}
      getOptionLabel={getOptionLabel}
      id={`searchable-${name}-select`}
      disableClearable={disableClearable}
      groupBy={
        !disableGroupBy
          ? (option) => option?.group || optionsDefaultGroup
          : undefined
      }
      isOptionEqualToValue={(option, value) => option.value === value.value}
      renderInput={(params) => (
        <TextField
          {...params}
          size={size}
          error={error}
          label={label}
          helperText={error && helperText}
        />
      )}
    />
  );
};

export default SearchableSelect;
