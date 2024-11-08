import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITelegramUser } from "../../app/types/User";

export interface AuthState {
  role: string;
  token: string;
  user: ITelegramUser | null;
}

const initialState: AuthState = {
  user: null,
  token: "",
  role: "",
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
    setAuthRole: (state: AuthState, action) => {
      state.role = action.payload;
    },
    logOut: (state: AuthState) => {
      state.user = null;
      state.token = "";
    },
  },
});

export const { setUserData, setToken, logOut, setAuthRole } = authSlice.actions;

export default authSlice.reducer;
