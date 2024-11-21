import { Box } from "@mui/material";
import OrderStyle from "./Order.style";
import OrderTable from "./components/OrderTable";
import { OrderType } from "../../types/order";
import { useQuery } from "@apollo/client";
import { GET_ORDER_BY_ID } from "../../graphql/Query/Orders";

const orders: OrderType[] = [
  {
    id: 1,
    status: "pending",
    totalPrice: 47835435,
    foods: [
      {
        id: 1,
        title: "Burger",
        img: "httpsL//dfa;fkd;.png",
        price: 20000,
        quantity: 2,
      },
      {
        id: 2,
        title: "Burger",
        img: "httpsL//dfa;fkd;.png",
        price: 20000,
        quantity: 2,
      },
    ],
  },
  {
    id: 2,
    status: "go",
    totalPrice: 100000,
    foods: [
      {
        id: 1,
        title: "Burger",
        img: "httpsL//dfa;fkd;.png",
        price: 20000,
        quantity: 2,
      },
      {
        id: 2,
        title: "Burger",
        img: "httpsL//dfa;fkd;.png",
        price: 20000,
        quantity: 2,
      },
    ],
  },
];

const { loading, error, data } = useQuery(GET_ORDER_BY_ID, {
  variables: { GET_ORDER_BY_ID },
});

const Order = () => {
  return (
    <OrderStyle>
      <Box className="order__wrapper">
        {orders.map((item) => (
          <OrderTable {...item} />
        ))}
      </Box>
    </OrderStyle>
  );
};

export default Order;
