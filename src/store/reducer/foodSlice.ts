import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CardProps from "../../app/components/Card/interfaces";

export interface FoodState {
  foodId: string[];
  isOpenDialog: boolean;
  isOpenSidebar: boolean;
  selectedFoods: CardProps[];
  isOpenInvoiceSidebar: boolean;
}

const initialState: FoodState = {
  foodId: [],
  selectedFoods: [],
  isOpenDialog: false,
  isOpenSidebar: false,
  isOpenInvoiceSidebar: false,
};

export const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setOpenSidebar: (state, action: PayloadAction<boolean>) => {
      state.isOpenSidebar = action.payload;
    },
    setSelectedFoods: (state, action: PayloadAction<CardProps[]>) => {
      state.selectedFoods = action.payload;
    },
    setFoodId: (state, action) => {
      state.foodId = action.payload;
    },
    setOpenInvoiceSidebar: (state, action: PayloadAction<boolean>) => {
      state.isOpenInvoiceSidebar = action.payload;
    },
    setOpenDialog: (state, action: PayloadAction<boolean>) => {
      state.isOpenDialog = action.payload;
    },
  },
});

export const {
  setFoodId,
  setOpenDialog,
  setOpenSidebar,
  setSelectedFoods,
  setOpenInvoiceSidebar,
} = foodSlice.actions;

export default foodSlice.reducer;
