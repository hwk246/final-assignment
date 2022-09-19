import { configureStore } from "@reduxjs/toolkit";
import getDataReducer from "./features/AsyncData/StudentDataSlice";
import chartReducer from "./features/homeChartSlice";

export const store = configureStore({
  reducer: { reduxGetData: getDataReducer, reduxChart: chartReducer },
});
