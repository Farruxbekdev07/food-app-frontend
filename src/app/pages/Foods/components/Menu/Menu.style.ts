import styled from "styled-components";

import { pxToRem } from "../../../../constants";

const MenuStyle = styled.div`
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
export default MenuStyle;
