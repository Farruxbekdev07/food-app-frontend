import styled from "@emotion/styled";
import { customColors } from "../../../../theme/colors";

export const OrderCardstyle = styled.div`
  .card__wrapper {
    max-width: 100%;
    gap: 8px;
    border-radius: 8px;
    padding: 16px;
  }

  .card_id {
    font-size: 26px;
    font-weight: 600;
    padding: 0 0 4px 0;
    text-align: center;
    color: ${customColors.textColor[700]};
  }

  .card__food-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .card__food-name {
    padding: 0 0 20px 0;
    font-size: 16px;
    font-weight: 500;
    color: ${customColors.textColor[900]};
  }

  .card__food-count {
    font-size: 16px;
    font-weight: 500;
    color: ${customColors.textColor[900]};
  }

  #status-simple-select-lebel {
    font-size: 16px;
    font-weight: 500;
    color: ${customColors.textColor[800]};
  }
`;
