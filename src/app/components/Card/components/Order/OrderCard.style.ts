import styled from "@emotion/styled";
import { colors } from "@mui/material";

import { pxToRem } from "../../../../constants";
import { customColors } from "../../../../theme/colors";

export const OrderCardStyles = styled.div`
  overflow: hidden;
  min-width: ${pxToRem(300)};
  min-height: ${pxToRem(100)};
  max-height: ${pxToRem(400)};
  border-radius: ${pxToRem(8)};

  .card {
    width: 100%;
    display: flex;
    gap: ${pxToRem(8)};
    flex-direction: column;
    padding: ${pxToRem(16)};
    box-shadow: 0 0 ${pxToRem(4)} ${customColors.gray[300]};
  }
  .card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .order__id {
    font-weight: bold;
  }
  .divider {
    margin: 0 ${pxToRem(8)};
  }
  .card__content {
    display: flex;
    padding: 0 !important;
    justify-content: space-between;
  }
  .card__status__container {
    display: flex;
    gap: ${pxToRem(8)};
    align-items: center;
  }
  .card__status {
    border-radius: 50%;
    width: ${pxToRem(8)};
    height: ${pxToRem(8)};
    background-color: ${colors.orange[700]};
  }
  .card__text {
    color: ${customColors.gray[700]};
  }
`;
