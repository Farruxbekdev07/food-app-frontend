import styled from "@emotion/styled";

import { pxToRem } from "../../../../constants";

export const DataGridStyles = styled.div`
  width: 100%;
  height: ${pxToRem(500)};

  .actions {
    color: "text.secondary";
  }

  .textPrimary {
    color: "text.primary";
  }
`;
