import styled from "@emotion/styled";

import { colors } from "../../theme/colors";
import { HEADER_HEIGHT, pxToRem, SIDEBAR_WIDTH } from "../../constants";

export const ContainerStyles = styled.div`
  display: flex;
  min-height: 100vh;
  height: fit-content;

  .content {
    position: absolute;
    top: ${pxToRem(HEADER_HEIGHT)};
    left: ${pxToRem(SIDEBAR_WIDTH)};
    background-color: ${colors.grey[300]};
    width: ${`calc(100% - ${pxToRem(SIDEBAR_WIDTH)})`};
    height: ${`calc(100% - ${pxToRem(HEADER_HEIGHT)})`};
  }
`;
