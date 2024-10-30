import styled from "@emotion/styled";

import { pxToRem } from "../../constants";
import { LAYOUT_MAX_WIDTH } from "./constants";
import { customColors } from "../../theme/colors";
import { HEADER_HEIGHT } from "../Header/constants";
import { SIDEBAR_WIDTH } from "../Sidebar/constants";

export const LayoutStyles = styled.div`
  display: grid;
  height: 100vh;
  margin: 0 auto;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  max-width: ${pxToRem(LAYOUT_MAX_WIDTH)};
  grid-template-rows: ${pxToRem(HEADER_HEIGHT)} 1fr;
  grid-template-columns: ${pxToRem(SIDEBAR_WIDTH)} 1fr;

  .main {
    grid-area: main;
    overflow-y: auto;
    padding: ${pxToRem(16)};
    background-color: ${customColors.gray[50]};
    border-top-left-radius: 10px;
  }

  @media screen and (max-width: ${pxToRem(900)}) {
    grid-template-areas:
      "header"
      "main";
    grid-template-columns: 1fr;
    grid-template-rows: ${pxToRem(HEADER_HEIGHT)} 1fr;
  }
`;
