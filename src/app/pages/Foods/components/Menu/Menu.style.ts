import { colors } from "@mui/material";
import styled from "styled-components";
import { customColors } from "../../../../theme/colors";

const MenuStyle = styled.div`
  .popular__foods {
    width: 100%;
  }

  .popular__menu-title {
    padding: 24px 0 16px 0;
    color: ${customColors.textColor[900]};
    font-weight: 600;
    font-size: 24px;
  }

  .menu__card-btn-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
  .card__fast-food-name {
    font-size: 18px;
    font-weight: 800;
    color: ${colors.blueGrey[800]};
    padding: 16px 0 0 0;
  }

  .card__food-cost-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    padding: 0 0 16px 0;
  }

  .card__food-rating-wrapper {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 600;
    color: ${customColors.gray[600]};
  }

  .card__food-cost {
    font-size: 24px;
    font-weight: 600;
    color: ${colors.orange[900]};

    del {
      font-size: 14px;
      font-weight: 600;
      color: ${customColors.gray[600]};
    }
  }
  .menu__card-btn-list,
  .menu___card-btn-order {
    padding: 2px 24px;
    font-size: 14px;
    font-weight: 700;
    color: ${customColors.gray[900]};
  }

  .menu___card-btn-order {
    color: ${customColors.gray[50]};
  }
`;
export default MenuStyle;
