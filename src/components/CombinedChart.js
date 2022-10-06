import React from "react";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";
import { useState } from "react";

const CombinedChart = () => {
  const [selectedName, setSelectedName] = useState({});
  const [theme, setTheme] = useState("light");
  const [selection, setSelection] = useState(true);

  const handleChange = (e) => {
    setTheme("dark");
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

  const handleSelector = () => {
    setSelection(!selection);
  };
  const xAxis = useSelector((state) => state.reduxGetData.courses);
  const inputData = selectedName;
  const allObjectKeys = Object.keys(inputData);
  const listByNameFromState = useSelector(
    (state) => state.reduxGetData.listByName
  );
  const studentName = useSelector((state) => state.reduxGetData.students);
  const series = [];
  let subtitle = "";

  if (selection) {
    allObjectKeys.forEach((element) => {
      const funny = [];
      inputData[element].forEach((item) => {
        funny.push(item[2]);
      });
      series.push({
        name: element,
        data: funny,
        type: "area",
      });
      subtitle = "Fun";
    });
  } else {
    allObjectKeys.forEach((element) => {
      const difficulty = [];
      inputData[element].forEach((item) => {
        difficulty.push(item[1]);
      });
      series.push({
        name: element,
        data: difficulty,
        type: "area",
      });
      subtitle = "Difficulty";
    });
  }

  return (
    <>
      <div style={{ position: "absolute", top: 280, left: 170 }}>
        {studentName.map((student, index) => (
          <div style={{ marginBottom: 13 }} key={index}>
            <input
              id={student}
              type="checkbox"
              value={student}
              onChange={handleChange}
            />
          </div>
        ))}
        <div>
          <h4
            style={{
              color: "#fff",
              position: "relative",
              right: 140,
              top: 30,
              border: "1px solid gray",
              padding: 5,
            }}
            onClick={handleSelector}
          >
            {selection === true
              ? "Select Difficulty factor"
              : "Select Fun factor"}
          </h4>
        </div>
      </div>

      <div style={{ marginLeft: 200 }}>
        <Chart
          options={{
            theme: { mode: theme },
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
                style: { colors: ["#fff"], fontSize: 15 },
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
              text: subtitle,
              align: "center",
              offsetY: 25,

              style: { fontSize: 20, color: "#85c1f1" },
            },
          }}
          series={series}
          width="90%"
          height={"600px"}
          align="center"
        />
      </div>
    </>
  );
};

export default CombinedChart;
