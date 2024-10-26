import styled from "@emotion/styled";

import { pxToRem } from "../../constants";
import { colors, customColors } from "../../theme/colors";
import { HEADER_HEIGHT } from "../Header/constants";
import { SIDEBAR_WIDTH } from "../Sidebar/constants";

export const ContainerStyles = styled.div`
  display: flex;
  min-height: 100vh;
  height: fit-content;
  max-width: ${pxToRem(1200)};

  .content {
    position: absolute;
    top: ${pxToRem(HEADER_HEIGHT)};
    left: ${pxToRem(SIDEBAR_WIDTH)};
    background-color: ${customColors.gray[50]};
    min-width: ${`calc(100% - ${pxToRem(SIDEBAR_WIDTH)})`};
    min-height: ${`calc(100% - ${pxToRem(HEADER_HEIGHT)})`};
    max-width: ${`calc(1200 - ${pxToRem(SIDEBAR_WIDTH)})`};
  }

  @media screen and (max-width: ${pxToRem(900)}) {
    .content {
      left: 0;
      width: 100%;
    }
  }
`;
