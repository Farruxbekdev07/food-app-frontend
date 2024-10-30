import styled from "@emotion/styled";
import { colors } from "@mui/material";

import { pxToRem } from "../../constants";

export const NotFoundStyles = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 999999;
  position: absolute;
  justify-content: center;
  background-color: ${colors.grey[50]};

  .not__found {
    display: flex;
    gap: ${pxToRem(16)};
    align-items: center;
    flex-direction: column;
  }
  .not__found-image {
    width: ${pxToRem(480)};
  }
  .not__found-text {
    font-weight: 600;
    text-align: center;
    font-size: ${pxToRem(24)};
  }
  .not__found-button {
    display: flex;
    gap: ${pxToRem(8)};
  }
`;
