import styled from "@emotion/styled";
import { colors } from "@mui/material";
import { customColors } from "../../../../theme/colors";

const CategoriesStyled = styled.div`
  .popular__foods-card-wrapper {
    display: flex;
  }

  .popular__foods-card-wrapper::-webkit-scrollbar {
    display: none;
  }

  .categories__title {
    padding: 0 0 10px 0;
    color: ${customColors.textColor[900]};
    font-weight: 600;
    font-size: 24px;
  }

  .categories__card-title {
    font-size: 14px;
    font-weight: 600;
    color: ${colors.blueGrey[800]};
  }
`;

export default CategoriesStyled;
