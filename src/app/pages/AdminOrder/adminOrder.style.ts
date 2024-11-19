import styled from "@emotion/styled";

export const AdminOrderStyle = styled.div`
  .admin__order-wrapper {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 6px;
  }

  @media only screen and (max-width: 1500px) {
    .admin__order-wrapper {
      grid-template-columns: repeat(5, 1fr);
    }
  }
  @media only screen and (max-width: 1300px) {
    .admin__order-wrapper {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media only screen and (max-width: 1100px) {
    .admin__order-wrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (max-width: 660px) {
    .admin__order-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 450px) {
    .admin__order-wrapper {
      grid-template-columns: repeat(1, 5fr);
    }
  }
`;
