import styled from "@emotion/styled";

import { pxToRem } from "../../../../constants";

export const DataGridStyles = styled.div`
  width: 100%;
  height: ${pxToRem(800)};

  .actions {
    color: "text.secondary";
  }

  .textPrimary {
    color: "text.primary";
  }
  .searchable-select {
    min-height: ${pxToRem(47)};

    .MuiInputBase-root {
      min-height: ${pxToRem(47)};
      padding-top: ${pxToRem(9)};
      padding-left: ${pxToRem(9)};
      padding-right: ${pxToRem(39)};
      padding-bottom: ${pxToRem(9)};
    }
  }
`;
