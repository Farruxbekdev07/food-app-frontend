import styled from "@emotion/styled";

import { pxToRem } from "../../constants";
import { colors } from "../../theme/colors";
import { HEADER_HEIGHT } from "./constants";
import { SIDEBAR_WIDTH } from "../Sidebar/constants";

const SEARCH_INPUT_WIDTH = 300;
const SEARCH_INPUT_HEIGHT = 40;

export const HeaderStyles = styled.header`
  display: grid;
  position: fixed;
  align-items: center;
  left: ${pxToRem(SIDEBAR_WIDTH)};
  height: ${pxToRem(HEADER_HEIGHT)};
  width: ${`calc(100% - ${pxToRem(SIDEBAR_WIDTH)})`};

  .header__wrapper {
    display: flex;
    gap: ${pxToRem(10)};
    align-items: center;
    padding: 0 ${pxToRem(16)};
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
