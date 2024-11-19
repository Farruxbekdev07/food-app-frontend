import styled from "@emotion/styled";

import { pxToRem } from "../../../../constants";
import { customColors } from "../../../../theme/colors";

export const CartItemStyles = styled.div`
  .card {
    display: flex;
    gap: ${pxToRem(16)};
    align-items: center;
    padding: ${pxToRem(16)};
    border-radius: ${pxToRem(24)};
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
  .card__image {
    border-radius: 8px;
    width: ${pxToRem(64)};
    height: ${pxToRem(64)};
  }
  .card__content {
    flex: 1;
    padding: 0;
    display: flex;
    gap: ${pxToRem(16)};
    align-items: center;
    justify-content: space-between;
  }
  .card__info {
    flex: 1;
  }
  .card__title {
    font-weight: bold;
    max-width: ${pxToRem(100)};
    color: ${customColors.gray[900]};
  }
  .card__price {
    font-weight: bold;
    max-width: ${pxToRem(100)};
    color: ${customColors.primary[600]};
  }
  .card__quantity-container {
    flex: 1;
    display: flex;
    gap: ${pxToRem(8)};
    align-items: center;
    justify-content: center;
  }
  .card__quantity {
    margin: 0 ${pxToRem(8)};
    color: ${customColors.gray[700]};
  }
  .card__button {
    padding: 0;
  }
  .delete__icon {
    color: ${customColors.primary[600]};
  }
`;
