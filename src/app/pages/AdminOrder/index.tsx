import { AdminOrderStyle } from "./adminOrder.style";
import { Box } from "@mui/material";
import AdminOrderCard from "./components/Card";
import { AdminOrderType } from "../../types/adminOrder";

const AdminOrderFood: AdminOrderType[] = [
  {
    id: 1,
    foods: [
      {
        name: "fast food",
        quantity: 5,
      },
    ],
  },
  {
    id: 1,
    foods: [
      {
        name: "fast food",
        quantity: 5,
      },
    ],
  },
  {
    id: 1,
    foods: [
      {
        name: "fast food",
        quantity: 5,
      },
    ],
  },
  {
    id: 1,
    foods: [
      {
        name: "fast food",
        quantity: 5,
      },
    ],
  },
  {
    id: 1,
    foods: [
      {
        name: "fast food",
        quantity: 5,
      },
    ],
  },
  {
    id: 1,
    foods: [
      {
        name: "fast food",
        quantity: 5,
      },
    ],
  },
  {
    id: 1,
    foods: [
      {
        name: "fast food",
        quantity: 5,
      },
    ],
  },
  {
    id: 1,
    foods: [
      {
        name: "fast food",
        quantity: 5,
      },
      {
        name: "fast food",
        quantity: 5,
      },
      {
        name: "fast food",
        quantity: 5,
      },
    ],
  },
];

const AdminOrder = () => {
  return (
    <AdminOrderStyle>
      <Box className="admin__order-wrapper">
        {AdminOrderFood.map((order) => (
          <AdminOrderCard {...order} />
        ))}
      </Box>
    </AdminOrderStyle>
  );
};

export default AdminOrder;
