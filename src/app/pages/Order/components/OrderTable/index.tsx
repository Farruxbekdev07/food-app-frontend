import React from "react";
import TableStyle from "./Table.style";
import {
  Table,
  Paper,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  TableContainer,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Card from "../../../../components/Card";
interface Props {
  index?: number;
  price?: number;
  img?: string;
  tax?: number;
  name?: string;
}
const OrderTable = ({ index, price, img, tax, name }: Props) => {
  return (
    <TableStyle>
      <Accordion>
        <AccordionSummary>1 - Order Foods</AccordionSummary>
        <AccordionDetails>
          <TableContainer className="order__table-container" component={Paper}>
            <Table className="order__table" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell> N/r</TableCell>
                  <TableCell> Orders</TableCell>
                  <TableCell> Orderer's name</TableCell>
                  <TableCell> Price</TableCell>
                  <TableCell> Tax</TableCell>
                  <TableCell> Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>
                    <Card direction="vertical">
                      <Typography> king </Typography>
                    </Card>
                  </TableCell>
                  <TableCell>gam-burger</TableCell>
                  <TableCell>12000</TableCell>
                  <TableCell>2000</TableCell>
                  <TableCell>Pending</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>
                    <Card direction="vertical">
                      <Typography> king </Typography>
                    </Card>
                  </TableCell>
                  <TableCell>gam-burger</TableCell>
                  <TableCell>12000</TableCell>
                  <TableCell>2000</TableCell>
                  <TableCell>Pending</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </TableStyle>
  );
};

export default OrderTable;
