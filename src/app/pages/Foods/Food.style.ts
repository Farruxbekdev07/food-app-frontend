import styled from "@emotion/styled";

import { pxToRem } from "../../constants";
import { colors } from "../../theme/colors";

export const FoodStyles = styled.div`
  .create__food-button {
    display: flex;
    gap: ${pxToRem(10)};

    .create__food-text {
      color: ${colors.grey[50]};
    }
  }
`;
