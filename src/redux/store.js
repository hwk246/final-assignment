import { configureStore } from "@reduxjs/toolkit";
import getDataReducer from "./features/AsyncData/StudentDataSlice";
import chartReducer from "./features/charts/chartSlice";

export const store = configureStore({
  reducer: { reduxGetData: getDataReducer, reduxChart: chartReducer },
});
