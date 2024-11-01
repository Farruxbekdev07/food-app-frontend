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
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUserData } = authSlice.actions;

export default authSlice.reducer;
