import { createSlice } from "@reduxjs/toolkit";

const homeChartSlice = createSlice({
  name: "reduxChart",
  initialState: { graphStacked: false, graphType: "bar" },

  reducers: {
    graphStacked: (state) => {
      state.graphStacked = !state.graphStacked;
    },

    graphType: (state, { payload }) => {
      state.graphType = payload;
    },
  },
});

export default homeChartSlice.reducer;
export const { graphStacked, graphType } = homeChartSlice.actions;
