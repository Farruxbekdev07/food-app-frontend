import styled from "@emotion/styled";

import { pxToRem } from "../../../../constants";
import { customColors } from "../../../../theme/colors";

const CreateFoodStyles = styled.div`
  width: 100%;
  border: 1px solid;
  max-width: ${pxToRem(1200)};

  .form {
    width: 100%;
    display: flex;
    gap: ${pxToRem(16)};
    height: fit-content;
    align-items: stretch;
  }
  .image-upload {
    flex: 1;
    overflow: hidden;
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
    min-height: ${pxToRem(300)};
    border-radius: ${pxToRem(16)};
    border: 2px dashed ${customColors.gray[100]};
  }
  .upload-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: ${pxToRem(16)};
  }
  .upload-icon {
    font-size: ${pxToRem(160)};
    color: ${customColors.primary[600]};
  }
  .fields {
    flex: 1;
    display: flex;
    gap: ${pxToRem(16)};
    height: fit-content;
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

  @media screen and (max-width: ${pxToRem(900)}) {
    .form {
      flex-direction: column;
    }
  }
`;

export default CreateFoodStyles;
