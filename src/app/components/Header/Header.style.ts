import styled from "@emotion/styled";
import { colors } from "@mui/material";

import {
  HEADER_HEIGHT,
  SEARCH_INPUT_WIDTH,
  SEARCH_INPUT_HEIGHT,
} from "./constants";
import { pxToRem } from "../../constants";
import { SIDEBAR_WIDTH } from "../Sidebar/constants";
import { LAYOUT_MAX_WIDTH } from "../Layout/constants";

export const HeaderStyles = styled.header`
  z-index: 10;
  display: flex;
  grid-area: header;
  align-items: center;
  height: ${pxToRem(HEADER_HEIGHT)};
  width: ${`calc(100vw - ${pxToRem(SIDEBAR_WIDTH)})`};
  max-width: 100%;

  .header__wrapper {
    width: 100%;
    display: flex;
    gap: ${pxToRem(10)};
    align-items: center;
    padding: 0 ${pxToRem(20)};
    justify-content: space-between;
  }
  .button_group {
    height: ${pxToRem(SEARCH_INPUT_HEIGHT)};
  }
  .search__input {
    width: ${pxToRem(SEARCH_INPUT_WIDTH)};
  }
  .search_button {
    height: ${pxToRem(SEARCH_INPUT_HEIGHT)};
  }
  .user__info-button {
    display: flex;
    gap: ${pxToRem(4)};
    align-items: center;
    height: ${pxToRem(SEARCH_INPUT_HEIGHT)};
  }
  .user__info-name {
    text-transform: none;
    font-size: ${pxToRem(14)};
  }
  .user__info-image {
    width: ${pxToRem(SEARCH_INPUT_HEIGHT - 15)};
    height: ${pxToRem(SEARCH_INPUT_HEIGHT - 15)};
  }
  .user__info-icon {
    color: ${colors.grey[600]};
  }

  .toggle__sidebar {
    display: none;
  }

  @media screen and (max-width: ${pxToRem(900)}) {
    left: 0;
    width: 100%;

    .toggle__sidebar {
      display: block;
    }
  }
`;
