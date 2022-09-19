import { createSlice } from "@reduxjs/toolkit";

const homeChartSlice = createSlice({
  name: "reduxChart",
  initialState: {
    options: {
      theme: { mode: "dark" },
      chart: {
        stacked: false,
        id: "HomeChart",
        background: "gray",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: 80,
          dataLabels: {
            orientation: "vertical",
          },
        },
      },
      tooltip: { followCursor: true },
      dataLabels: {
        // formatter: (value) => {
        //   return `nr${value}`;
        // },
        style: { colors: ["#000"], fontSize: 10 },
      },

      yaxis: {
        labels: {
          // formatter: (val) => {
          //   return `${val}`;
          // },
          style: { colors: ["#faff00"], fontSize: 30 },
        },
        title: {
          text: "AVERAGE",
          style: { color: "red", fontSize: 30 },
        },
      },
      xaxis: {
        tickPlacement: "on",
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labels: { style: { colors: ["#000"], fontSize: 30 } },
        title: {
          text: "STUDENTS",
          style: { color: "#ffff00", fontSize: 30 },
        },
      },
      legend: {
        show: "true",
        position: "right",
      },
      title: {
        text: "AVARAGE",
        align: "center",
        style: { fontSize: 30 },
      },
      subtitle: {
        text: "Fun & Frustration",
        align: "center",
        offsetY: 50,
        style: { fontSize: 20, color: "red" },
      },
      grid: { borderColor: "blue" },
    },
  },

  reducers: {},
});

export default homeChartSlice.reducer;
// export const {} = homeChartSlice.actions;
