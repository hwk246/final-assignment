import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const GeneralChart = () => {
  const data1 = useSelector((state) => state.reduxGetData.students);
  const data2 = useSelector((state) => state.reduxGetData.funFactor);
  const data3 = useSelector((state) => state.reduxGetData.difficultyFactor);

  const style = {
    display: "inlineBlock",
    alignText: "center",
    border: "2px solid black",
    borderRadius: 5,
  };
  return (
    <div style={style}>
      <Chart
        options={{
          theme: { mode: "dark" },
          chart: {
            stacked: false,
            id: "HomeChart",
            background: "#00eedd",
            offsetX: 0,
          },
          plotOptions: {
            bar: {
              borderRadius: 5,
              columnWidth: 90,
              dataLabels: {
                orientation: "vertical",
              },
            },
          },
          tooltip: { followCursor: true },
          dataLabels: {
            enabled: false,
            // formatter: (value) => {
            //   return `${value}`;
            // },
            style: { colors: ["#000"], fontSize: 10 },
          },

          yaxis: {
            labels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: { colors: ["#000"], fontSize: 20 },
              offsetX: -5,
            },
            title: {
              text: "AVERAGE",
              style: { color: "#AAFF00", fontSize: 20 },
              offsetX: -9,
            },
          },
          xaxis: {
            tickPlacement: "on",
            categories: data1,
            labels: {
              style: { color: "#000", fontSize: 20 },
              offsetY: 2,
            },
            title: {
              text: "",
              style: { color: "#aaff00", fontSize: 20 },
              offsetY: -20,
            },
          },
          legend: {
            show: "true",
            position: "right",
            width: 110,
            height: 50,
            offsetY: 20,
          },
          title: {
            text: "AVARAGE FUN & DIFFICULTY",
            align: "center",
            style: { fontSize: 30 },
          },
          subtitle: {
            text: "Fun & Frustration",
            align: "center",
            offsetY: 35,
            offsetX: 100,
            style: { fontSize: 20, color: "red" },
          },
          grid: { borderColor: "blue" },
        }}
        series={[
          {
            name: "fun factor",
            data: data2,
            color: "#00ff00",
          },
          {
            name: "dificulty factor",
            data: data3,
            color: "#ff00f0",
          },
        ]}
        type="bar" // "line" | "area" | "bar" | "histogram" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "treemap" | "boxPlot" | "candlestick" | "radar" | "polarArea" | "rangeBar"
        height="550"
        width="100%"
        align="center"
      />
    </div>
  );
};

export default GeneralChart;
// https://www.youtube.com/watch?v=MK_52uhmcUc
