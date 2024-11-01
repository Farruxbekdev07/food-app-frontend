import { combineReducers } from "@reduxjs/toolkit";

import foodSlice from "./foodSlice";
import authSlice from "./authSlice";

const rootReducers = combineReducers({
  food: foodSlice,
  auth: authSlice,
});

export default rootReducers;
