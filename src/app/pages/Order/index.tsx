import { Box } from "@mui/material";
import OrderStyle from "./Order.style";
import OrderTable from "./components/OrderTable";

const Order = () => {
  return (
    <OrderStyle>
      <Box className="order__wrapper">
        <OrderTable />
      </Box>
    </OrderStyle>
  );
};

export default Order;
