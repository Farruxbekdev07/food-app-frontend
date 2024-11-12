import IFoods from "../pages/Foods/types";

export interface FoodDataTypes {
  title: string;
  shortName: string;
  description: string;
  price: number;
  discount: number;
}

export interface CartItemsTypes {
  _id: string[];
  price: number;
  user: string[];
  quantity: number;
  food: IFoods;
}
