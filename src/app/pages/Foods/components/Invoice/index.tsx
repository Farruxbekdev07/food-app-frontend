import { Box, Typography } from "@mui/material";
import React from "react";
import InvoiceStyle from "./invoice.style";
import Card from "../../../../components/Card";

type Props = {};

const Invoice = (props: Props) => {
  return (
    <InvoiceStyle>
      <Box className="invoice__wrapper">
        <Typography>Invoice</Typography>
        <Box className="invoice__card-wrapper">
          <Card direction="vertical">
            <Box>
              <Box display="flex" flexDirection="column">
                <Typography>King Burger</Typography>
                <Typography>100$</Typography>
              </Box>
            </Box>
          </Card>
        </Box>
        <Box className="invoice__card-wrapper">
          <Card direction="vertical">
            <Box>
              <Box display="flex" flexDirection="column">
                <Typography>King Burger</Typography>
                <Typography>100$</Typography>
              </Box>
            </Box>
          </Card>
        </Box>
        <Box className="invoice__card-wrapper">
          <Card direction="vertical">
            <Box>
              <Box display="flex" flexDirection="column">
                <Typography>King Burger</Typography>
                <Typography>100$</Typography>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </InvoiceStyle>
  );
};

export default Invoice;
