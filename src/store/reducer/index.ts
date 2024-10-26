import { combineReducers } from "@reduxjs/toolkit";

import foodSlice from "./foodSlice";

const rootReducers = combineReducers({
  food: foodSlice,
});

export default rootReducers;
