import { combineReducers } from "@reduxjs/toolkit";

import foodSlice from "./foodSlice";
import authSlice from "./authSlice";
import courierSlice from "./courierSlice";

const rootReducers = combineReducers({
  food: foodSlice,
  auth: authSlice,
  courier: courierSlice,
});

export default rootReducers;
