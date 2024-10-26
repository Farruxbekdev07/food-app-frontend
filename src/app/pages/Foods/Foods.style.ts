import styled from "@emotion/styled";

const FoodsStyle = styled.div`
  .food__wrapper {
    width: 100%;
    display: flex;
    gap: 16px;

    padding: 10px;
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
    color: black;
    font-weight: 600;
  }

  .popular__menu-title {
    padding: 10px 0;
    color: black;
    font-weight: 600;
  }
`;
export default FoodsStyle;
