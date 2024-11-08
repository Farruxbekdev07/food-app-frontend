import { AdminOrderStyle } from "./adminOrder.style";
import { Box } from "@mui/material";
import AdminOrderCard from "./components/Card";

type ADMIN_CARD_TYPE = {
  id: number;
  name: string;
  quantity: number;
};

const AdminOrderFood = [
  {
    id: 1,
    name: "olmali pierok",
    quantity: 10,
  },
  {
    id: 2,
    name: "shaftolili pierok",
    quantity: 125,
  },
  {
    id: 3,
    name: "nok pierok",
    quantity: 65,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
  {
    id: 4,
    name: "gilos pierok",
    quantity: 23,
  },
];

const AdminOrder = () => {
  return (
    <AdminOrderStyle>
      <Box className="admin__order-wrapper">
        {AdminOrderFood.map(({ name, quantity, id }) => (
          <AdminOrderCard name={name} quantity={quantity} id={id} />
        ))}
      </Box>
    </AdminOrderStyle>
  );
};

export default AdminOrder;
