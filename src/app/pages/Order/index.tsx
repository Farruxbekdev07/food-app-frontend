import { Box } from "@mui/material";
import OrderStyle from "./Order.style";
import OrderTable from "./components/OrderTable";
import { OrderType } from "../../types/order";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../../graphql/Query/Orders";

const Order = () => {
  const { loading, data, error } = useQuery(GET_ORDERS, {
    variables: { statuses: "", page: 1, limit: 10 },
  });

  const orders = data?.getOrders?.payload || [];
  return (
    <OrderStyle>
      <Box className="order__wrapper">
        {orders.map((item: any) => (
          <OrderTable {...item} />
        ))}
      </Box>
    </OrderStyle>
  );
};

export default Order;
