import { createSlice } from "@reduxjs/toolkit";

const homeChartSlice = createSlice({
  name: "reduxChart",
  initialState: { graphStacked: false, graphType: "bar", sorted: "normal" },

  reducers: {
    graphStacked: (state) => {
      state.graphStacked = !state.graphStacked;
    },

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
export const {
  graphStacked,
  graphType,
  orderByFun,
  orderByDifficult,
  orderByAlphabeth,
} = homeChartSlice.actions;
