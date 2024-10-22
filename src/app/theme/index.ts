import { colors, createTheme } from "@mui/material";
import { CUSTOM_COLORS } from "../constants/customColors";

export const theme = createTheme({
  palette: {
    secondary: colors.deepOrange,
    text: {
      secondary: CUSTOM_COLORS.DEEP_BLUE,
    },
  },
});
