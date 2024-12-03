import { combineReducers } from "@reduxjs/toolkit";

import foodSlice from "./foodSlice";
import authSlice from "./authSlice";
import orderSlice from "./orderSlice";
import courierSlice from "./courierSlice";

const rootReducers = combineReducers({
  food: foodSlice,
  auth: authSlice,
  order: orderSlice,
  courier: courierSlice,
});

export default rootReducers;
