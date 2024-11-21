import styled from "@emotion/styled";
import { pxToRem } from "../../constants";

export const PageTitleStyles = styled.div`
  display: flex;
  align-items: start;
  height: ${pxToRem(64)};
  justify-content: space-between;

  .page__title {
    font-size: 24px;
    font-weight: 600;
  }
`;
