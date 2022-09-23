import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const GeneralChart = ({ xAxis, funData, difficultData, title, subtitle }) => {
  const mode = useSelector((state) => state.reduxChart.graphMode);
  const graphType = useSelector((state) => state.reduxChart.graphType);

  const style = {
    border: "2px solid black",
    borderRadius: 5,
  };
  return (
    <div style={style}>
      <Chart
        options={{
          // theme: { mode: "dark" },
          chart: {
            // toolbar: { show: true },
            stacked: mode,
            // id: "HomeChart",
            // tools: {
            //   zoom: true,
            //   zoomin: true,
            //   pan: true,
            //   reset: true,
            // },
          },
          plotOptions: {
            bar: {
              borderRadius: 5,
              // columnWidth: 90,
              // dataLabels: {
              //   orientation: "vertical",
              // },
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
            min: 0,
            max: 5,
            tickAmount: 5,
            labels: {
              // formatter: (val) => {
              //   return `${val}`;
              // },
              style: { colors: ["#000"], fontSize: 15 },
              offsetX: `0`,
            },
            title: {
              text: "AVERAGE",
              style: { color: "##1e81b0", fontSize: 15 },
              offsetX: -5,
            },
          },
          //
          xaxis: {
            // tickPlacement: "on",
            categories: xAxis,
            labels: {
              // trim: false,
              rotate: "-65",
              style: { color: "#000", fontSize: 15 },
              offsetY: 2,
            },
            title: {
              text: "",
              style: { color: "##063970", fontSize: 20 },
              offsetY: -20,
            },
          },
          legend: {
            show: "true",
            // position: "bottom",

            // width: 110,
            // height: 70,
            offsetX: -1200,
          },
          title: {
            text: title,
            align: "center",
            style: { fontSize: 25 },
          },
          subtitle: {
            text: subtitle,
            align: "center",
            offsetY: 35,

            style: { fontSize: 20, color: "red" },
          },
          grid: { borderColor: "#ababab" },
        }}
        series={[
          {
            name: "fun factor",
            data: funData,
            color: "#69bdd2",
          },
          {
            name: "dificulty factor",
            data: difficultData,
            color: "#dfc8a2",
          },
        ]}
        type={graphType} // "line" | "area" | "bar" | "histogram" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "treemap" | "boxPlot" | "candlestick" | "radar" | "polarArea" | "rangeBar"
        // height="550"
        // align="center"

        width="98%"
        height={"450px"}
        align="center"
      />
    </div>
  );
};

export default GeneralChart;
// https://www.youtube.com/watch?v=MK_52uhmcUc
