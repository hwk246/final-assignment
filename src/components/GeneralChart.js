import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const GeneralChart = ({ dataXY, title, subtitle }) => {
  const mode = useSelector((state) => state.reduxChart.graphStacked);
  const graphType = useSelector((state) => state.reduxChart.graphType);
  const sorting = useSelector((state) => state.reduxChart.sorted);
  const toUse = [...dataXY];
  let dataToUse = "";

  switch (sorting) {
    case "normal":
      dataToUse = toUse;
      break;
    case "difficulty":
      dataToUse = toUse.sort((a, b) => b[1] - a[1]);
      break;
    case "fun":
      dataToUse = toUse.sort((a, b) => b[2] - a[2]);
      break;
    default:
      console.log("hallo");
  }

  const xAxis = dataToUse.map((name) => name[0]);
  const difficultData = dataToUse.map((difficulty) => difficulty[1]);
  const funData = dataToUse.map((fun) => fun[2]);

  return (
    <div style={{ borderBottom: "1px solid gray" }}>
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
            // formatter: (value) => {
            //   return `${value}`;
            // },
            style: { colors: ["#000"], fontSize: 10 },
          },
          stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            width: 3,
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
              style: { color: "#1e81b0", fontSize: 14 },
              offsetX: -5,
            },
          },
          //
          xaxis: {
            categories: xAxis,
            labels: {
              rotate: "-65",
              style: { color: "#000", fontSize: 15, fontWeight: "bold" },
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
            offsetX: 0,
            offsetY: 5,
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
          grid: { borderColor: "#ababab" },
        }}
        series={[
          {
            name: "fun factor",
            data: funData,
            type: graphType,
            color: "#6fbdfa",
          },
          {
            name: "dificulty factor",
            data: difficultData,
            type: graphType,
            color: "#dfcfa2",
          },
        ]}
        width="95%"
        height={"480px"}
        align="center"
      />
    </div>
  );
};

export default GeneralChart;
