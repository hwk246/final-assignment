import { createSlice } from "@reduxjs/toolkit";

const homeChartSlice = createSlice({
  name: "reduxChart",
  initialState: { graphMode: false, graphType: "bar" },

  reducers: {
    graphMode: (state) => {
      state.graphMode = !state.graphMode;
    },

    graphType: (state, { payload }) => {
      state.graphType = payload;
    },
  },
});

export default homeChartSlice.reducer;
export const { graphMode, graphType } = homeChartSlice.actions;
