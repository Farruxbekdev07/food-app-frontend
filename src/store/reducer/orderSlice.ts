import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FoodState {
  orderId: string;
  orderNumber: number | string;
}

const initialState: FoodState = {
  orderId: "",
  orderNumber: 0,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderId: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload;
    },
    setOrderNumber: (state, action: PayloadAction<number | string>) => {
      state.orderNumber = action.payload;
    },
  },
});

export const { setOrderId, setOrderNumber } = orderSlice.actions;

export default orderSlice.reducer;
