import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  id: string;
  hash: string;
  username: string;
  photo_url: string;
  auth_date: string;
  last_name: string;
  first_name: string;
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
  },
});

export const { setUserData, setToken } = authSlice.actions;

export default authSlice.reducer;
