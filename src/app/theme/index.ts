import { createTheme } from "@mui/material";

import { pxToRem } from "../constants";
import { customColors } from "./colors";

export const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    allVariants: {
      color: customColors.textColor[900],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          height: pxToRem(48),
          textTransform: "none",
          borderRadius: `${pxToRem(8)}`,
          background: customColors.primary[600],
        },
        outlined: {
          height: pxToRem(48),
          textTransform: "none",
          borderRadius: `${pxToRem(8)}`,
          background: customColors.gray[50],
          border: `1px solid ${customColors.gray[100]}`,
        },
      },
    },
  },
});
