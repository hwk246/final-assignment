import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
  name: "Chart",
  initialState: {
    uniqueNames: "noname",
  },

  reducers: {
    tellSometing: (state, { payload }) => {
      state.uniqueNames = payload;

      //   state.uniqueNames = payload;
    },
  },
});

export default chartSlice.reducer;
export const { tellSometing } = chartSlice.actions;
