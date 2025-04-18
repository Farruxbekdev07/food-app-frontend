import styled from "@emotion/styled";
import { colors } from "@mui/material";

import { pxToRem } from "../../constants";
import { customColors } from "../../theme/colors";

const CardStyle = styled.div`
  border-radius: ${pxToRem(12)};

  /* card styles  */
  .card {
    box-shadow: none;
    padding: ${pxToRem(24)};
    min-width: ${pxToRem(300)};
    max-height: ${pxToRem(400)};
    border-radius: ${pxToRem(12)};
    background-color: ${colors.grey[50]};
  }
  .card__media {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
    max-height: ${pxToRem(170)};
    min-height: ${pxToRem(150)};
    border-radius: ${pxToRem(16)};
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
  .card__quantity-icon {
    font-size: ${pxToRem(16)};
    color: ${colors.yellow[700]};
  }
  .card__quantity-value {
    font-size: ${pxToRem(12)};
  }
  .card__actions {
    padding: 0;
    display: flex;
    gap: ${pxToRem(8)};
    justify-content: end;

    button {
      flex: 1;
    }
  }
  .selected__card-container {
    position: relative;
  }
  .card-menu {
    top: 0;
    right: 0;
    position: absolute;
  }
`;

export default CardStyle;
