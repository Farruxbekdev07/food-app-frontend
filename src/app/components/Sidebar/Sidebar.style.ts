import styled from "@emotion/styled";

import { pxToRem } from "../../constants";
import { SIDEBAR_WIDTH } from "./constants";
import { customColors } from "../../theme/colors";
import { HEADER_HEIGHT } from "../Header/constants";

export const SidebarStyles = styled.aside`
  grid-area: sidebar;
  position: relative;

  .sidebar__wrapper {
    width: ${pxToRem(SIDEBAR_WIDTH)};
    display: flex;
    transition: 1s;
    flex-shrink: 0;
    min-height: 100%;
    flex-direction: column;
    background-color: white;
    justify-content: space-between;
    padding: ${pxToRem(16)};
    padding-top: 0;
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
    gap: ${pxToRem(16)};
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
    z-index: 99;
    position: fixed;
    transition: left 0.3s ease;
    top: ${pxToRem(HEADER_HEIGHT)};
    left: -${pxToRem(SIDEBAR_WIDTH)};
    min-height: ${`calc(100vh - ${pxToRem(HEADER_HEIGHT)})`};

    .sidebar__logo {
      display: none;
    }
    .sidebar-open {
      left: 0;
      position: fixed;
    }
    .sidebar-close {
      left: -${pxToRem(SIDEBAR_WIDTH)};
      position: fixed;
    }
  }
`;
