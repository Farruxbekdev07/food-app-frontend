import styled from "@emotion/styled";
import { colors } from "@mui/material";

import { pxToRem } from "../../constants";
import { customColors } from "../../theme/colors";

const CardStyle = styled.div`
  width: fit-content;
  border-radius: ${pxToRem(12)};

  /* chip card styles */
  .chip__card {
    display: flex;
    gap: ${pxToRem(16)};
    align-items: center;
    padding: ${pxToRem(12)};
    max-width: ${pxToRem(200)};
    min-width: ${pxToRem(200)};
    border-radius: ${pxToRem(12)};
    background-color: ${colors.grey[50]};
  }
  .chip__card__media {
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
    padding: 0;
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

  /* card styles  */
  .card {
    width: ${pxToRem(300)};
    padding: ${pxToRem(24)};
    max-height: ${pxToRem(350)};
    border-radius: ${pxToRem(12)};
    background-color: ${colors.grey[50]};
  }
  .card__media {
    width: 100%;
    height: auto;
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
`;

export default CardStyle;
