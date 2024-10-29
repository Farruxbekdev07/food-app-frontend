import {
  Box,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableContainer,
} from "@mui/material";
import OrderStyle from "./Order.style";

const Order = () => {
  return (
    <OrderStyle>
      <Box className="order__wrapper">
        <TableContainer className="order__container" component={Paper}>
          <Table className="order__table">
            <TableHead>
              <TableRow>
                <TableCell> N/r</TableCell>
                <TableCell> Orders</TableCell>
                <TableCell> Orderer's name</TableCell>
                <TableCell> Price</TableCell>
                <TableCell> Tax</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>
    </OrderStyle>
  );
};

export default Order;
