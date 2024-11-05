import styled from "@emotion/styled";
import { colors } from "@mui/material";

import { pxToRem } from "../../constants";

const FoodStyles = styled.div`
  .create__food-button {
    display: flex;
    gap: ${pxToRem(10)};
    height: ${pxToRem(48)};

    .create__food-text {
      color: ${colors.grey[50]};
    }
  }
  .foods-container {
    display: flex;
    gap: ${pxToRem(16)};
  }
  .menu-container {
    flex: 1;
  }
`;

export default FoodStyles;
