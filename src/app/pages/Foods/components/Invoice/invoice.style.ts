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
    border-bottom: 1px solid ${customColors.primary[100]};
  }

  .invoice__title {
    font-weight: 600;
    color: ${colors.blueGrey[800]};
  }

  .invoice__card-title {
    font-weight: 600;
    color: ${customColors.secondary[900]};
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
    border: 2px dashed ${colors.grey[500]};
    background-color: ${colors.grey[50]};
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
  }

  .payment__summary-title {
    color: ${colors.grey[800]};
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

  .payment__total-title,
  .payment__total-cost {
    font-weight: 600;
    color: ${colors.indigo[900]};
  }
`;
export default InvoiceStyle;
