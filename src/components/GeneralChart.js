import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import ChangeMode from "./ChangeMode";
import { orderByFun } from "../redux/features/homeChartSlice";
import { graphType } from "../redux/features/homeChartSlice";

const GeneralChart = ({ margin, dataXY, title, subtitle }) => {
  const type = useSelector((state) => state.reduxChart.graphType);
  const sorting = useSelector((state) => state.reduxChart.sorted);
  const toUse = [...dataXY];

  let dataToUse = [];

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
      console.log("error General Chart");
  }

  const xAxis = dataToUse.map((name) => name[0]);
  const difficultData = dataToUse.map((difficulty) => difficulty[1]);
  const funData = dataToUse.map((fun) => fun[2]);
  orderByFun("fun");
  graphType("area");
  const test = useSelector((state) => state.reduxGetData.graphType);
  console.log(test);

  const serie = [
    {
      name: "Fun",
      data: funData,
      type: type,
      color: "#79f315",
    },
    {
      name: "Dificulty",
      data: difficultData,
      type: type,
      color: "#bb550c",
    },
  ];

  return (
    <div>
      <Chart
        style={{
          marginLeft: margin,
        }}
        options={{
          theme: { mode: "dark" },
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
            width: 4,
          },

          grid: {
            borderColor: "#69a0c5",
            strokeDashArray: 3,
          },

          yaxis: {
            min: 0,
            max: 5,
            tickAmount: 5,
            labels: {
              style: { colors: ["#85c1f1"], fontSize: 15 },
              offsetX: 0,
            },
            title: {
              text: title,
              style: {
                color: "#85c1f1",
                fontSize: 14,
                fontFamily: "Comfortaa",
              },
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
                color: "#85c1f1",
                fontSize: 11,
                fontWeight: "400",
              },
            },
            title: {
              text: "",
              style: { color: "#85c1f1", fontSize: 20 },
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
            style: { fontSize: 22, color: "#85c1f1", fontFamily: "Comfortaa" },
          },
          subtitle: {
            text: subtitle,
            align: "center",
            offsetY: 25,
            style: { fontSize: 15, color: "#85c1f1" },
          },
        }}
        series={serie}
        width="90%"
        height={"600px"}
        align="center"
      />
      <ChangeMode />
    </div>
  );
};

export default GeneralChart;
