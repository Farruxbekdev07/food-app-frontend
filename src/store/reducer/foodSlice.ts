import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CardProps from "../../app/components/Card/interfaces";

export interface FoodState {
  isOpenSidebar: boolean;
  selectedFoods: CardProps[];
}

const initialState: FoodState = {
  selectedFoods: [],
  isOpenSidebar: false,
};

export const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpenSidebar = action.payload;
    },
    setSelectedFoods: (state, action: PayloadAction<CardProps[]>) => {
      state.selectedFoods = action.payload;
    },
  },
});

export const { setSidebarOpen, setSelectedFoods } = foodSlice.actions;

export default foodSlice.reducer;
