import { StatusEnum } from "../../../../../types/enums";

export interface IOrderItem {
  name: string;
  price: number;
  quantity: number;
}

export interface IOrder {
  foods: IOrderItem[];
  orderNumber: string;
  orderStatus: StatusEnum;
}

export interface IUserOrder {
  orders: IOrder[];
  userName: string;
}
