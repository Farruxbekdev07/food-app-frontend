import { IOrder } from "../components/Order/types";

interface CardProps {
  _id?: string;
  name?: string;
  image?: string;
  price?: number;
  discount?: number;
  userName?: string;
  quantity?: number;
  userOrders?: IOrder[];
  type: "food" | "order" | "cartItem";
}

export default CardProps;
