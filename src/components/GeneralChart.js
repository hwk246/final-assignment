import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const GeneralChart = () => {
  const data1 = useSelector((state) => state.reduxGetData.students);

  const data2 = useSelector((state) => state.reduxGetData.funFactor);

  const data3 = useSelector((state) => state.reduxGetData.difficultyFactor);

  return (
    <div>
      <Chart
        options={{
          theme: { mode: "dark" },
          chart: {
            stacked: false,
            id: "HomeChart",
            background: "",
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
            formatter: (value) => {
              return `nr${value}`;
            },
            style: { colors: ["#000"], fontSize: 10 },
          },

          yaxis: {
            labels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: { colors: ["#faff00"], fontSize: 30 },
            },
            title: {
              text: "AVERAGE",
              style: { color: "#AAFF00", fontSize: 30 },
            },
          },
          xaxis: {
            tickPlacement: "on",
            categories: data1,
            labels: { style: { color: "#000", fontSize: 30 } },
            title: {
              text: "STUDENTS",
              style: { color: "#aaff00", fontSize: 30 },
            },
          },
          legend: {
            show: "true",
            position: "right",
          },
          title: {
            text: "AVARAGE FUN & DIFFICULTY",
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
        }}
        series={[
          {
            name: "fun",
            data: data2,
            color: "#00fff0",
          },
          {
            name: "dificult",
            data: data3,
            color: "#ff00f0",
          },
        ]}
        type="bar" // "line" | "area" | "bar" | "histogram" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "treemap" | "boxPlot" | "candlestick" | "radar" | "polarArea" | "rangeBar"
        width="90%"
      />
    </div>
  );
};

export default GeneralChart;
// https://www.youtube.com/watch?v=MK_52uhmcUc
