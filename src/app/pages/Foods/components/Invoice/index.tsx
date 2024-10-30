import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import InvoiceStyle from "./invoice.style";
import Card from "../../../../components/Card";
import DefaultFood from "../../../../assets/images/default-food.png";

const Invoice = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

  return (
    <InvoiceStyle>
      <Box className="invoice__wrapper">
        <Box className="invoice__card-box">
          <Typography className="invoice__title">Invoice</Typography>
          <Box>
            <Box className="invoice__card-wrapper">
              <Card
                price={25}
                rate={2000}
                name="Burger"
                oldPrice={12}
                image={DefaultFood}
                direction="vertical"
              />
            </Box>
          </Box>
        </Box>

        <Box className="payment__summary">
          <Typography className="payment__summary-title">
            Payment Summary
          </Typography>

          <Box className="payment__sub-wrapper">
            <Typography className="payment__sub-title">Sub Total </Typography>
            <Typography className="payment__sub-cost">$250 </Typography>
          </Box>

          <Box className="payment__tax-wrapper">
            <Typography className="payment__tax-title">Tax</Typography>
            <Typography className="payment__tax-cost">-$10</Typography>
          </Box>

          <Box className="payment__total-wrapper">
            <Typography className="payment__total-title">
              Total Payment
            </Typography>
            <Typography className="payment__total-cost"> $500</Typography>
          </Box>

          <Button variant="contained" fullWidth>
            Place An Order Now
          </Button>
        </Box>
      </Box>
    </InvoiceStyle>
  );
};

export default Invoice;
