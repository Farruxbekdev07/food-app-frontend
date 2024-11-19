import styled from "@emotion/styled";

import { pxToRem } from "../../constants";

export const NoDataStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: ${pxToRem(200)};
  padding: ${pxToRem(16)};
  justify-content: center;
  border-radius: ${pxToRem(8)};
  background-color: transparent;
`;
