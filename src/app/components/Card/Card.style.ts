import styled from "@emotion/styled";
import { colors } from "@mui/material";

import { pxToRem } from "../../constants";
import { customColors } from "../../theme/colors";

const CardStyle = styled.div`
  border-radius: ${pxToRem(12)};

  /* chip card styles */
  .chip__card {
    display: flex;
    box-shadow: none;
    gap: ${pxToRem(16)};
    align-items: center;
    padding: ${pxToRem(12)};
    min-width: ${pxToRem(80)};
    border-radius: ${pxToRem(12)};
    background-color: ${colors.grey[50]};
  }
  .chip__card__media {
    object-fit: contain;
    width: ${pxToRem(56)};
    height: ${pxToRem(56)};
    border-radius: ${pxToRem(8)};
    background-color: ${customColors.gray[50]};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .chip__card__content {
    flex: 1;
    padding: 0;
    padding-bottom: 0;
  }
  .chip__card__title {
    font-weight: 600;
    font-size: ${pxToRem(18)};
  }
  .chip__card__price {
    font-weight: 600;
    font-size: ${pxToRem(14)};
    color: ${customColors.primary[700]};
  }
  .chip__card-active {
    background-color: ${customColors.primary[50]};
    border: 1px solid ${customColors.primary[700]};
  }
  .payment__card {
    height: ${pxToRem(80)};
    min-width: ${pxToRem(80)};
  }
  .payment__media {
    width: 100%;
    height: 100%;
  }

  /* card styles  */
  .card {
    box-shadow: none;
    padding: ${pxToRem(24)};
    min-width: ${pxToRem(300)};
    max-height: ${pxToRem(350)};
    border-radius: ${pxToRem(12)};
    background-color: ${colors.grey[50]};
  }
  .card__media {
    width: 100%;
    height: auto;
    object-fit: contain;
    max-height: ${pxToRem(150)};
    border-radius: ${pxToRem(12)};
    background-color: ${customColors.gray[50]};
  }
  .card__content {
    padding: ${pxToRem(16)} 0;
  }
  .card__title {
    font-weight: 600;
    font-size: ${pxToRem(24)};
  }
  .card__price-container {
    display: flex;
    padding-right: ${pxToRem(16)};
    justify-content: space-between;
  }
  .card__price {
    display: flex;
    align-items: end;
    gap: ${pxToRem(4)};
  }
  .card__rate {
    display: flex;
    gap: ${pxToRem(4)};
  }
  .card__new__price {
    font-weight: 600;
    font-size: ${pxToRem(24)};
    line-height: ${pxToRem(24)};
    color: ${customColors.primary[800]};
  }
  .card__old__price {
    font-size: ${pxToRem(12)};
    text-decoration: line-through;
  }
  .card__rate-icon {
    font-size: ${pxToRem(16)};
    color: ${colors.yellow[700]};
  }
  .card__rate-value {
    font-size: ${pxToRem(12)};
  }
  .card__actions {
    padding: 0;
    display: flex;
    gap: ${pxToRem(8)};
    justify-content: space-between;

    button {
      flex: 1;
    }
  }
  .card-active {
    border: 1px solid ${customColors.primary[700]};
  }
  .selected__card-container {
    position: relative;

    .checkbox {
      position: absolute;
    }
  }
  .card-menu {
    top: 0;
    right: 0;
    position: absolute;
  }
  .menu__item {
    display: flex;
    gap: ${pxToRem(8)};
  }
`;

export default CardStyle;
