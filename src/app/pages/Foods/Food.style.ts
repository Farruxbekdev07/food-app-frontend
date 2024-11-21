import styled from "@emotion/styled";

import { pxToRem } from "../../constants";

const FoodStyles = styled.div`
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
