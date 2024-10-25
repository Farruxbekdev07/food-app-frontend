import styled from "@emotion/styled";

import { colors } from "../../theme/colors";
import { HEADER_HEIGHT, pxToRem, SIDEBAR_WIDTH } from "../../constants";

export const SidebarStyles = styled.aside`
  position: fixed;
  min-height: 100vh;
  border-right: 1px solid ${colors.grey[300]};
  width: ${pxToRem(SIDEBAR_WIDTH)};

  .sidebar__wrapper {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    padding: 0 ${pxToRem(8)};
  }
  .sidebar__logo {
    height: ${pxToRem(HEADER_HEIGHT)};
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

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
    color: ${colors.grey[700]};
    justify-content: flex-start;
    border-radius: ${pxToRem(8)};
    border: 1px solid ${colors.grey[400]};
    padding: ${pxToRem(12)} ${pxToRem(16)};
  }
  .sidebar__list-item--active {
    color: ${colors.red[700]};
    border: 1px solid ${colors.orange[900]};
    background-color: ${colors.orange[100]};

    .sidebar__list-item-title {
      color: ${colors.orange[900]};
    }
  }
`;
