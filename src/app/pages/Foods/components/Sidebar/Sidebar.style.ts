import styled from "@emotion/styled";
import { colors } from "@mui/material";

import { pxToRem } from "../../../../constants";
import { customColors } from "../../../../theme/colors";
import { HEADER_HEIGHT } from "../../../../components/Header/constants";

interface SidebarProps {
  isOpenSidebar: boolean;
}

const SidebarStyles = styled.div<SidebarProps>`
  display: flex;
  position: fixed;
  transition: 0.5s;
  gap: ${pxToRem(16)};
  height: fit-content;
  width: ${pxToRem(400)};
  flex-direction: column;
  padding: ${pxToRem(16)};
  border-radius: ${pxToRem(16)};
  background-color: ${colors.grey[50]};
  top: ${`calc(${pxToRem(HEADER_HEIGHT + 80)})`};
  min-height: ${`calc(100vh - ${pxToRem(HEADER_HEIGHT + 96)})`};
  max-height: ${`calc(100vh - ${pxToRem(HEADER_HEIGHT + 96)})`};
  right: ${(props) => (props.isOpenSidebar ? pxToRem(0) : pxToRem(-400))};

  .sidebar__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .sidebar__title-text {
    font-weight: 600;
    font-size: ${pxToRem(20)};
  }
  .selected__foods-container {
    display: flex;
    overflow-y: auto;
    gap: ${pxToRem(8)};
    flex-direction: column;
    min-height: ${pxToRem(500)};
  }
  .payment {
    padding: ${pxToRem(16)};
    border-radius: ${pxToRem(16)};
    background-color: ${customColors.gray[50]};
    border: 2px dashed ${customColors.gray[100]};
  }
  .payment__title {
    margin-bottom: ${pxToRem(8)};
  }
  .food__price-container {
    display: flex;
    justify-content: space-between;
  }
  .divider {
    margin: ${pxToRem(8)} 0;
  }
  .total__payment {
    font-weight: 600;
  }
`;

export default SidebarStyles;
