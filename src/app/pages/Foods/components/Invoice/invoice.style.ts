import styled from "@emotion/styled";
import { colors } from "@mui/material";
import { customColors } from "../../../../theme/colors";

const InvoiceStyle = styled.div`
  .invoice__wrapper {
    width: 285px;
    background-color: #fff;
    height: 84vh;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .invoice__card-wrapper {
    padding: 0 0 5px 0;
    border-bottom: 1px solid ${customColors.gray[100]};
  }

  .invoice__title {
    font-weight: 700;
    color: ${customColors.textColor[900]};
    padding: 0 0 6px 0;
    position: sticky;
    background-color: #fff;
    top: 0;
  }

  .invoice__card-box {
    height: fit-content;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 20px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #d6dee1;
      border-radius: 20px;
      border: 6px solid transparent;
      background-clip: content-box;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #a8bbbf;
    }
  }

  .invoice__card-cost {
    color: ${customColors.activeColor[700]};
    font-weight: 600;
    font-size: 14px;
    border: none;
  }

  .invoice__card-title {
    font-weight: 700;
    color: ${customColors.gray[600]};
  }

  .invoice__card-wrapper {
    display: flex;
    flex-direction: column;
  }

  .payment__summary {
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
    height: fit-content;
    border: 2px dashed ${customColors.gray[100]};
    background-color: ${customColors.gray[50]};
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
  }

  .payment__summary-title {
    color: ${customColors.gray[800]};
    font-weight: 600;
  }

  .payment__sub-wrapper,
  .payment__tax-wrapper,
  .payment__total-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .payment__tax-wrapper {
    padding-bottom: 10px;
    border-bottom: 2px solid ${colors.grey[300]};
  }

  .payment__sub-title,
  .payment__sub-cost,
  .payment__tax-title,
  .payment__tax-cost {
    color: ${customColors.gray[600]};
  }

  .payment__total-title,
  .payment__total-cost {
    font-weight: 600;
    color: ${customColors.textColor[700]};
  }
`;
export default InvoiceStyle;
