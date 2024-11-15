import styled from "@emotion/styled";
import { colors } from "@mui/material";

import { pxToRem } from "../../constants";
import { customColors } from "../../theme/colors";

export const ChipStyles = styled.div`
  border-radius: ${pxToRem(12)};

  .chip__card {
    display: flex;
    cursor: pointer;
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
    display: flex;
    align-items: center;
    padding: 0 !important;
    justify-content: space-between;
    gap: ${pxToRem(8)};
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
  .chip__card__quantity {
    display: flex;
    gap: ${pxToRem(8)};
    align-items: center;

    button {
      flex: 1;
      height: ${pxToRem(30)};
    }
  }
  .chip__card-active {
    background-color: ${customColors.primary[50]};
    border: 1px solid ${customColors.primary[700]};
  }
`;
