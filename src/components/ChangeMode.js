import React from "react";
import { useDispatch } from "react-redux";
// import { graphStacked } from "../redux/features/homeChartSlice";
import { graphType } from "../redux/features/homeChartSlice";

const ChangeMode = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        cursor: "pointer",
        position: "absolute",
        top: 12,
        right: -10,
      }}
    >
      {/* <button onClick={() => dispatch(graphStacked())}>Stacked/Normal</button> */}
      <h5
        style={{
          textAlign: "center",
          width: 100,
          margin: 1,
        }}
        onClick={() => dispatch(graphType("line"))}
      >
        Line-chart
      </h5>
      <h5
        style={{
          textAlign: "center",
          width: 100,
          margin: 1,
        }}
        onClick={() => dispatch(graphType("bar"))}
      >
        Bar-chart
      </h5>
    </div>
  );
};

export default ChangeMode;
