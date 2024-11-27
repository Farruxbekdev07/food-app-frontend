import { OptionType } from "../components/Select";

interface FormatDataForSelectArgsType {
  value: string;
  label: string;
  additionalKey?: string;
  data: { [key: string]: any }[];
  translate?: ((text: string) => string) | null;
}

const formatDataForSelect = ({
  value: valueKey,
  label: labelKey,
  additionalKey,
  data,
}: FormatDataForSelectArgsType): OptionType[] => {
  if (data?.length) {
    return data?.map((item) => {
      const label = item[labelKey];
      const value = item[valueKey];

      return {
        label,
        value,
        [additionalKey || ""]: item[additionalKey || ""],
        key: value,
      };
    });
  }
  return [];
};

export default formatDataForSelect;
