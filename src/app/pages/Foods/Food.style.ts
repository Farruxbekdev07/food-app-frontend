import styled from "@emotion/styled";
import { colors } from "@mui/material";

import { pxToRem } from "../../constants";

export const FoodStyles = styled.div`
  .create__food-button {
    display: flex;
    gap: ${pxToRem(10)};

    .create__food-text {
      color: ${colors.grey[50]};
    }
  }

  .food__wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }
`;
