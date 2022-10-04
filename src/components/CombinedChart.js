import React from "react";
// import GeneralChart from "./GeneralChart";
// import Chart from "react-apexcharts";

// import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";
import { useState } from "react";

const CombinedChart = () => {
  const [selectedName, setSelectedName] = useState({});

  const handleChange = (e) => {
    if (selectedName.length === 0) {
      setSelectedName({
        [e.target.value]: listByNameFromState[e.target.value],
      });
    } else {
      if (!Object.keys(selectedName).includes(e.target.value)) {
        setSelectedName({
          ...selectedName,
          [e.target.value]: listByNameFromState[e.target.value],
        });
      } else {
        const remainList = {};
        Object.keys(selectedName).forEach((item) => {
          if (item !== e.target.value) {
            remainList[item] = listByNameFromState[item];
          }
          setSelectedName(remainList);
        });
      }
    }
  };

  // const location = useLocation();
  const inputData = selectedName;
  const allObjectKeys = Object.keys(inputData);
  const listByNameFromState = useSelector(
    (state) => state.reduxGetData.listByName
  );
  const studentName = useSelector((state) => state.reduxGetData.students);

  // const toUse = location.state;

  const series = [];

  allObjectKeys.forEach((element) => {
    const funny = [];
    const difficulty = [];
    inputData[element].forEach((item) => {
      funny.push(item[2]);
      difficulty.push(item[1]);
    });
    series.push(
      {
        name: `${element} difficulty`,
        data: difficulty,
        type: "line",
        color: "#dfcfa2",
      },
      { name: `${element} fun`, data: funny, type: "line", color: "#6fbdfa" }
    );
  });

  const xAxis = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 30,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
  ];

  return (
    <div
      style={{
        marginLeft: 200,
        // borderBottom: "1px solid gray",
        marginBottom: 0,
      }}
    >
      <div
        style={{
          // border: "1px solid gray",
          display: "inline",
          position: "absolute",
          top: 186,
        }}
      >
        {studentName.map((student, index) => (
          <div style={{ marginBottom: 8 }} key={index}>
            <input
              id={student}
              type="checkbox"
              value={student}
              onChange={handleChange}
            />
            <h3
              style={{
                display: "inline",
                fontSize: 15,
                margin: 20,
              }}
            >
              {/* {student} */}
            </h3>
          </div>
        ))}
      </div>

      <Chart
        options={{
          theme: { mode: "light" },

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
              text: "Combined Scores",
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
            text: "Combined Scores",
            align: "center",
            style: { fontSize: 22 },
          },
          subtitle: {
            text: "-",
            align: "center",
            offsetY: 25,

            style: { fontSize: 20, color: "#1e81b0" },
          },
        }}
        series={series}
        width="90%"
        height={"600px"}
        align="center"
      />
    </div>
  );
};

export default CombinedChart;
