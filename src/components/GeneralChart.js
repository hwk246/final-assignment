import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const GeneralChart = ({ xAxis, funData, difficultData, title, subtitle }) => {
  const mode = useSelector((state) => state.reduxChart.graphStacked);
  const graphType = useSelector((state) => state.reduxChart.graphType);

  return (
    <div style={{ borderBottom: "1px solid gray" }}>
      <Chart
        options={{
          theme: { mode: "light" },
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
              // borderRadius: 1,
              columnWidth: 70,

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
              style: { color: "#1e81b0", fontSize: 14 },
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
            // position: "bottom",
            // width: 110,
            // height: 70,
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
// https://www.youtube.com/watch?v=MK_52uhmcUc
