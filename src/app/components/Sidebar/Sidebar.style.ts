import styled from "@emotion/styled";

import { pxToRem } from "../../constants";
import { SIDEBAR_WIDTH } from "./constants";
import { customColors } from "../../theme/colors";
import { HEADER_HEIGHT } from "../Header/constants";

export const SidebarStyles = styled.aside`
  position: fixed;
  min-height: 100vh;
  width: ${pxToRem(SIDEBAR_WIDTH)};

  .sidebar__wrapper {
    z-index: 9;
    display: flex;
    width: inherit;
    transition: 1s;
    flex-shrink: 0;
    position: relative;
    min-height: inherit;
    flex-direction: column;
    background-color: white;
    padding: 0 ${pxToRem(8)};
  }
  .sidebar__logo {
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    height: ${pxToRem(HEADER_HEIGHT)};

    img {
      height: 100%;
      object-fit: contain;
    }
  }
  .sidebar__list-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .sidebar__list-item {
    display: flex;
    gap: ${pxToRem(10)};
    align-items: center;
    text-transform: none;
    text-decoration: none;
    justify-content: flex-start;
    border-radius: ${pxToRem(8)};
    color: ${customColors.gray[700]};
    padding: ${pxToRem(12)} ${pxToRem(16)};
    border: 1px solid ${customColors.gray[100]};
  }
  .sidebar__list-item--active {
    color: ${customColors.activeColor[600]};
    border: 1px solid ${customColors.primary[600]};
    background-color: ${customColors.secondary[50]};

    .sidebar__list-item-title {
      color: ${customColors.activeColor[600]};
    }
  }

  @media screen and (max-width: ${pxToRem(900)}) {
    top: ${pxToRem(HEADER_HEIGHT)};
    min-height: ${`calc(100vh - ${pxToRem(HEADER_HEIGHT)})`};
    z-index: 9;

    .sidebar__logo {
      display: none;
    }

    .sidebar-open {
      left: 0;
    }

    .sidebar-close {
      left: -${pxToRem(SIDEBAR_WIDTH)};
    }
  }
`;
