import styled from "@emotion/styled";

import { pxToRem } from "../../../../constants";
import { customColors } from "../../../../theme/colors";

const StyledForm = styled.div`
  display: flex;
  gap: ${pxToRem(16)};
  align-items: stretch;

  .image-upload {
    flex: 1;
  }

  .upload__focusable-area {
    height: 100%;
    border-radius: ${pxToRem(16)};
  }

  .upload-file {
    height: 100%;
    display: flex;
    cursor: pointer;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: ${pxToRem(24)};
    border-radius: ${pxToRem(16)};
    border: 2px dashed ${customColors.gray[100]};
  }

  .upload-icon {
    font-size: ${pxToRem(160)};
    color: ${customColors.primary[600]};
  }

  .fields {
    flex: 1.5;
    display: flex;
    gap: ${pxToRem(16)};
    flex-direction: column;
  }

  .form__actions {
    display: flex;
    gap: ${pxToRem(16)};
    justify-content: end;

    button {
      flex: 1;
      height: ${pxToRem(50)};
    }
  }
`;

export default StyledForm;
