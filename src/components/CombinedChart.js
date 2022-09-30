import React from "react";
import Chart from "react-apexcharts";
import ChangeMode from "./ChangeMode";
import { useLocation } from "react-router-dom";

const CombinedChart = () => {
  const location = useLocation();
  console.log(location.state);

  const mode = false;
  const margin = 200;
  const title = "";
  const xAxis = [1, 2, 3];
  const subtitle = "";
  const funData = [1, 3, 4];
  const difficultData = [4, 3, 2];
  const graphType = "line";

  return (
    <div
      style={{
        marginLeft: margin,
        borderBottom: "1px solid gray",
        marginBottom: 0,
      }}
    >
      <Chart
        options={{
          theme: { mode: "light" },
          chart: {
            stacked: mode,
          },
          plotOptions: {
            bar: {
              columnWidth: 70,
            },
          },
          tooltip: { followCursor: true },
          dataLabels: {
            enabled: false,
            style: { colors: ["#000"], fontSize: 10 },
          },
          stroke: {
            show: true,
            curve: "smooth",
            width: 3,
          },

          yaxis: {
            min: 0,
            max: 5,
            tickAmount: 5,
            labels: {
              style: { colors: ["#000"], fontSize: 15 },
              offsetX: 0,
            },
            title: {
              text: title,
              style: { color: "#1e81b0", fontSize: 14 },
              offsetX: -8,
            },
          },
          xaxis: {
            categories: xAxis,

            labels: {
              minHeight: 150,
              maxHeight: 150,
              trim: true,
              rotate: "-60",
              style: {
                color: "#000",
                fontSize: 11,
                fontWeight: "400",
              },

              // offsetY: 2,
            },

            title: {
              text: "",
              style: { color: "##063970", fontSize: 20 },
              offsetY: -20,
            },
          },
          legend: {
            show: "true",
            offsetX: 0,
            offsetY: -30,
            position: "top",
          },
          title: {
            text: title,
            align: "center",
            style: { fontSize: 22 },
          },
          subtitle: {
            text: subtitle,
            align: "center",
            offsetY: 25,

            style: { fontSize: 20, color: "#1e81b0" },
          },
        }}
        series={[
          {
            name: "Fun",
            data: funData,
            type: graphType,
            color: "#6fbdfa",
          },
          {
            name: "Dificulty",
            data: difficultData,
            type: graphType,
            color: "#dfcfa2",
          },
        ]}
        width="90%"
        height={"600px"}
        align="center"
      />
      <ChangeMode />
    </div>
  );
};

export default CombinedChart;
