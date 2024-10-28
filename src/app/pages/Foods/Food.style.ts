import styled from "@emotion/styled";
import { colors } from "@mui/material";

import { pxToRem } from "../../constants";

export const FoodStyles = styled.div`
  .create__food-button {
    display: flex;
    gap: ${pxToRem(10)};

    .create__food-text {
      color: ${colors.grey[50]};
    }
  }

  .food__wrapper {
    width: 100%;
    display: flex;
    gap: 16px;

    padding: 20px;
  }

  .categories__wrapper {
    max-width: 1000px;
    width: 100%;
  }

  .popular__foods-card-wrapper {
    display: flex;
  }

  .popular__foods-card-wrapper::-webkit-scrollbar {
    display: none;
  }

  .categories__title {
    padding: 0 0 10px 0;
    color: ${colors.blueGrey[800]};
    font-weight: 600;
    font-size: 24px;
  }

  .categories__card-title {
    font-size: 14px;
    font-weight: 600;
    color: ${colors.blueGrey[800]};
  }

  .popular__menu-title {
    padding: 10px 0;
    color: ${colors.blueGrey[800]};
    font-weight: 600;
    font-size: 24px;
  }

  .menu__card-btn-wrapper {
    display: flex;
    justify-content: space-between;

    button {
      padding: 8px 20px;
      font-size: 12px;
    }
  }
`;
