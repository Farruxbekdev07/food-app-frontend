import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FoodState {
  isOpenSidebar: boolean;
}

const initialState: FoodState = {
  isOpenSidebar: false,
};

export const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpenSidebar = action.payload;
    },
  },
});

export const { setSidebarOpen } = foodSlice.actions;

export default foodSlice.reducer;
