import { createSlice } from "@reduxjs/toolkit";

const homeChartSlice = createSlice({
  name: "reduxChart",
  initialState: { graphType: "bar", sorted: "normal" },

  reducers: {
    graphType: (state, { payload }) => {
      state.graphType = payload;
    },
    orderByFun: (state, { payload }) => {
      state.sorted = payload;
    },
    orderByDifficult: (state, { payload }) => {
      state.sorted = payload;
    },
    orderByAlphabeth: (state, { payload }) => {
      state.sorted = payload;
    },
  },
});

export default homeChartSlice.reducer;
export const { graphType, orderByFun, orderByDifficult, orderByAlphabeth } =
  homeChartSlice.actions;
