import styled from "@emotion/styled";

import { pxToRem } from "../../constants";

const OrderStyle = styled.div`
  .card-container {
    display: grid;
    gap: ${pxToRem(16)};
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }
`;

export default OrderStyle;
