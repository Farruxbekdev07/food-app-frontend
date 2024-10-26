import styled from "@emotion/styled";

const CardStyle = styled.div`
  /* vertical card style */
  .vertical {
    .card__wrapper {
      display: flex;
      align-items: center;
      gap: 16px;
      flex-direction: row;
      padding: 8px;
      width: fit-content;
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
  }

  .card__wrapper {
    border-radius: 10px;
    padding: 16px;
    max-width: 250px;
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

  .card__fast-food-name {
    font-size: 16px;
    font-weight: 600;
    color: #2e344c;
    padding: 15px 0 0 0;
  }

  .card__food-cost-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    padding: 0 0 5px 0;
  }

  .card__food-rating-wrapper {
    display: flex;
    align-items: center;
    font-size: 13px;
  }

  .card__food-cost {
    font-size: 24px;
    color: orange;

    del {
      font-size: 14px;
      color: #2e344c;
    }
  }
`;

export default CardStyle;
