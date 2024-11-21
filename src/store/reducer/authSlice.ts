import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserRole } from "../../app/types/enums";
import { ITelegramUser } from "../../app/types/User";

export interface AuthState {
  token: string;
  role: UserRole | string;
  user: ITelegramUser | null;
}

const initialState: AuthState = {
  role: "user",
  token: "",
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state: AuthState, action: PayloadAction<ITelegramUser>) => {
      state.user = action.payload;
    },
    setToken: (state: AuthState, action) => {
      state.token = action.payload;
    },
    setUserRole: (state: AuthState, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
    logOut: (state: AuthState) => {
      state.user = null;
      state.token = "";
      state.role = "user";
    },
  },
});

export const { setUserData, setToken, logOut, setUserRole } = authSlice.actions;

export default authSlice.reducer;
