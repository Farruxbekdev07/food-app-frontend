import styled from "@emotion/styled";
import { colors } from "@mui/material";

import { pxToRem } from "../../../../constants";
import { customColors } from "../../../../theme/colors";

const SidebarStyles = styled.div`
  display: flex;
  gap: ${pxToRem(16)};
  height: fit-content;
  width: ${pxToRem(300)};
  flex-direction: column;
  padding: ${pxToRem(16)};
  min-height: ${pxToRem(300)};
  border-radius: ${pxToRem(16)};
  background-color: ${colors.grey[50]};

  .sidebar__title {
    font-weight: 600;
    font-size: ${pxToRem(20)};
  }
  .selected__foods-container {
    display: flex;
    gap: ${pxToRem(8)};
    overflow-y: scroll;
    flex-direction: column;
    max-height: ${pxToRem(300)};
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
  .payment__method {
    margin-top: ${pxToRem(16)};
    margin-bottom: ${pxToRem(8)};
  }
  .payment__method-cards {
    display: grid;
    gap: ${pxToRem(8)};
    grid-template-columns: 50% 50%;
  }
`;

export default SidebarStyles;
