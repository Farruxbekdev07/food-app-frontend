import { createTheme } from "@mui/material";

import { colors } from "./colors";
import { pxToRem } from "../constants";

export const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    allVariants: {
      color: colors.grey[700],
    },
  },
  palette: {
    secondary: colors.orange,
    text: {
      secondary: colors.blue[900],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          background: colors.orange[900],
          textTransform: "none",
          borderRadius: `${pxToRem(8)}`,
        },
        outlined: {
          background: colors.grey[100],
          textTransform: "none",
          borderRadius: `${pxToRem(8)}`,
          border: `1px solid ${colors.grey[300]}`,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: `${pxToRem(16)}`,
        },
      },
    },
  },
});
