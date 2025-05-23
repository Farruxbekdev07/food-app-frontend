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
          textTransform: "none",
          borderRadius: `${pxToRem(8)}`,
          background: customColors.primary[600],
          minWidth: "0",
        },
        outlined: {
          textTransform: "none",
          borderRadius: `${pxToRem(8)}`,
          background: customColors.gray[50],
          border: `1px solid ${customColors.gray[100]}`,
          minWidth: "0",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: `${pxToRem(8)} !important`,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          display: "flex",
          gap: `${pxToRem(8)}`,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          overflow: "hidden",
          whiteSpace: "nowrap",
          wordBreak: "break-word",
          textOverflow: "ellipsis",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          width: "100%",
          maxHeight: `${pxToRem(40)}`,
        },
      },
    },
  },
});
