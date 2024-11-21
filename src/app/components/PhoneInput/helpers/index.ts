import { DEFAULT_PHONE_NUMBER_CODE } from "../constants";

export const trimPhone = (phone: string) => ("" + phone).replace(/\D/g, "");

export const formatPhoneNumber = (phone: string) => {
  return trimPhone(phone).replace(
    /(\d{2})(\d{3})(\d{2})(\d{2})/,
    "($1) $2-$3-$4"
  );
};

export const displayPhoneNumber = (phone: string) => {
  return (
    DEFAULT_PHONE_NUMBER_CODE +
    " " +
    trimPhone(phone).replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "($1) $2-$3-$4")
  );
};
