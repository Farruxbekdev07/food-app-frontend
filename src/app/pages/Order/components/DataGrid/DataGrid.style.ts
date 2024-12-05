import styled from "@emotion/styled";
import { colors } from "@mui/material";

import { pxToRem } from "../../../../constants";
import { customColors } from "../../../../theme/colors";

export const DataGridStyles = styled.div`
  width: 100%;
  height: ${pxToRem(600)};

  .card {
    width: ${pxToRem(160)};
    padding: ${pxToRem(16)};
  }
  .status__container {
    height: 100%;
    display: flex;
    gap: ${pxToRem(8)};
    align-items: center;
  }
  .status {
    border-radius: 50%;
    width: ${pxToRem(8)};
    height: ${pxToRem(8)};
    background-color: ${colors.orange[700]};
  }
  .cooking {
    background-color: ${colors.orange[700]};
  }
  .delivering {
    background-color: ${colors.blue[700]};
  }
  .pending {
    background-color: ${colors.grey[700]};
  }
  .received {
    background-color: ${colors.green[700]};
  }
  .text {
    color: ${customColors.gray[700]};
  }
  .row {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
  }
`;
