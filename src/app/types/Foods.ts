import IFoods from "../pages/Foods/types";

export interface FoodDataTypes {
  title: string;
  price: number;
  discount: number;
  shortName: string;
  description: string;
}

export interface CartItemsTypes {
  _id: string;
  food: IFoods;
  price: number;
  user: string[];
  quantity: number;
}
