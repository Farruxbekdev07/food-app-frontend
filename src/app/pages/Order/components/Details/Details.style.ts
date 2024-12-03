import styled from "@emotion/styled";
import { pxToRem } from "../../../../constants";
import { customColors } from "../../../../theme/colors";
import { colors } from "@mui/material";

export const OrderDetailStyles = styled.div`
  .detail__container {
    width: ${pxToRem(700)};
    padding: ${pxToRem(16)};
  }
  .details {
    display: flex;
    flex-wrap: wrap;
    gap: ${pxToRem(16)};
  }
  .action__area {
    width: fit-content;
    min-width: ${pxToRem(200)};
  }
  .card {
    height: 100%;
    display: flex;
    gap: ${pxToRem(16)};
    align-items: center;
    padding: ${pxToRem(16)};
  }
  .card__title {
    color: ${customColors.gray[200]};
  }
  .card__content {
    font-weight: bold;
  }
  .card__info {
    margin: ${pxToRem(16)} 0;
  }
  .datagrid__container {
    height: ${pxToRem(400)};
  }
  .card__total__container {
    display: flex;
    padding: ${pxToRem(40)} 0;
    justify-content: space-between;
  }
  .card__total {
    color: ${colors.grey[900]};
  }
`;
