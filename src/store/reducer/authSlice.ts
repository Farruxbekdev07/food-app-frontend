import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserRoleEnum } from "../../app/types/enums";

export type User = {
  name?: string;
  cart?: string;
  phone?: string;
  orders?: string[];
  role?: UserRoleEnum;
  telegramId?: number;
};

export interface AuthState {
  user: User | null;
  token: string;
}

const initialState: AuthState = {
  user: null,
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state: AuthState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setToken: (state: AuthState, action) => {
      state.token = action.payload?.token;
    },
    logOut: (state: AuthState) => {
      state.user = null;
      state.token = "";
    },
  },
});

export const { setUserData, setToken, logOut } = authSlice.actions;

export default authSlice.reducer;
