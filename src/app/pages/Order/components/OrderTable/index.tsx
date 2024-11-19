import { OrderType } from "../../../../types/order";
import TableStyle from "./Table.style";
import {
  Box,
  Table,
  Paper,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Accordion,
  TableContainer,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

const OrderTable = ({ totalPrice, id, status, foods }: OrderType) => {
  return (
    <TableStyle>
      <Accordion>
        <AccordionSummary>
          <Box
            className="table__accordion"
            display="flex"
            justifyContent="space-between"
            width="100%"
          >
            <Typography> {id} - Order Foods</Typography>
            <Typography>Status: {status}</Typography>
            <Typography>Total Price: {totalPrice}</Typography>
          </Box>
        </AccordionSummary>

        <AccordionDetails>
          <TableContainer className="order__table-container" component={Paper}>
            <Table className="order__table" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell> N/o</TableCell>
                  <TableCell> Orders</TableCell>
                  <TableCell> Name</TableCell>
                  <TableCell> Price</TableCell>
                  <TableCell> Tax</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {foods.map(({ title, img, price, quantity, id }) => (
                  <TableRow>
                    <TableCell>{id}</TableCell>
                    <TableCell>{img}</TableCell>
                    <TableCell>{title}</TableCell>
                    <TableCell>{price}</TableCell>
                    <TableCell>{quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </TableStyle>
  );
};

export default OrderTable;
