export type FoodType = {
  title: string;
  img: string;
  price: number;
  quantity: number;
  id: number;
};

export type OrderType = {
  id: number;
  status: string;
  totalPrice: number;
  foods: FoodType[];
};
