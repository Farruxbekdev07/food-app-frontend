export type AdminOrderFood = {
  name: string;
  quantity: number;
};

export type AdminOrderType = {
  id: number;
  foods: AdminOrderFood[];
};
