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
  .chip__card-container {
    display: grid;
    gap: ${pxToRem(16)};
    margin-bottom: ${pxToRem(16)};
    grid-template-columns: repeat(auto-fill, minmax(${pxToRem(200)}, 1fr));
  }
  .card-container {
    display: grid;
    gap: ${pxToRem(16)};
    grid-template-columns: repeat(auto-fill, minmax(${pxToRem(300)}, 1fr));
  }
`;

export default FoodStyles;
