import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICategory {
  _id?: string;
  name?: string;
  image?: string;
}

export interface FoodState {
  foodId: string[];
  isOpenSidebar: boolean;
  categories: ICategory[];
  isOpenInvoiceSidebar: boolean;
}

const initialState: FoodState = {
  foodId: [],
  categories: [],
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
    setCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload;
    },
    setFoodId: (state, action) => {
      state.foodId = action.payload;
    },
    setOpenInvoiceSidebar: (state, action: PayloadAction<boolean>) => {
      state.isOpenInvoiceSidebar = action.payload;
    },
  },
});

export const {
  setFoodId,
  setCategories,
  setOpenSidebar,
  setOpenInvoiceSidebar,
} = foodSlice.actions;

export default foodSlice.reducer;
