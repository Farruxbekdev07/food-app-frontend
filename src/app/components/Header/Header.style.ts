import styled from "@emotion/styled";

import { HEADER_HEIGHT, pxToRem, SIDEBAR_WIDTH } from "../../constants";
import { colors } from "../../theme/colors";

const SEARCH_INPUT_HEIGHT = 40;
const SEARCH_INPUT_WIDTH = 300;

export const HeaderStyles = styled.header`
  display: flex;
  position: fixed;
  align-items: center;
  left: ${pxToRem(SIDEBAR_WIDTH)};
  height: ${pxToRem(HEADER_HEIGHT)};
  border-bottom: 1px solid ${colors.grey[300]};
  width: ${`calc(100% - ${pxToRem(SIDEBAR_WIDTH)})`};

  .header__wrapper {
    display: flex;
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
`;
