import styled from "@emotion/styled";
import { colors } from "@mui/material";

const CardStyle = styled.div`
  /* vertical card style */
  .vertical {
    width: 100%;
    .card__wrapper {
      display: flex;
      align-items: center;
      gap: 16px;
      flex-direction: row;
      padding: 8px;
      width: 100%;
    }

    .card__img-wrapper {
      padding: 4px 8px;
      border-radius: 10px;
    }
    .card__img-fast-food {
      width: 40px;
      height: 40px;
    }
  }

  /* horizontal card style  */
  .horizontal {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .card__wrapper {
    border-radius: 10px;
    padding: 16px;
    max-width: 300px;
    width: 100%;

    background-color: #fff;
  }

  .card__img-wrapper {
    background-color: #eff1f5;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    border-radius: 20px;
  }

  .card__img-fast-food {
    max-width: 100px;
    width: 100%;
  }
`;

export default CardStyle;
