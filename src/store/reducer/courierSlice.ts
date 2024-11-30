import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FoodState {
  newCourierId: string;
}

const initialState: FoodState = {
  newCourierId: "",
};

export const courierSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setNewCourier: (state, action: PayloadAction<string>) => {
      state.newCourierId = action.payload;
    },
    setRemoveCourier: (state) => {
      state.newCourierId = "";
    },
  },
});

export const { setNewCourier, setRemoveCourier } = courierSlice.actions;

export default courierSlice.reducer;
