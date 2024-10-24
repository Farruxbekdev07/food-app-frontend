import styled from "@emotion/styled";

const CardStyle = styled.div`
  .card__wrapper {
    border: 2px solid pink;
    border-radius: 10px;
    padding: 16px;
    margin: 10px;
    max-width: 250px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .card__img-wrapper {
    width: 100%;
    background-color: #eff1f5;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    border-radius: 20px;
    position: relative;
  }

  .card__img-checked {
    position: absolute;
    top: 5px;
    left: 5px;
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
