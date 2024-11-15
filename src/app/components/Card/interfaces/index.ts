import { IOrder } from "../components/Order/types";

interface CardProps {
  _id?: string;
  name?: string;
  image?: string;
  price?: number;
  discount?: number;
  userName?: string;
  userOrders?: IOrder[];
  type: "food" | "order"; // Card type
}

export default CardProps;
