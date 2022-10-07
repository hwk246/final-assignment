import React from "react";
import { useDispatch } from "react-redux";
import {
  graphType,
  orderByFun,
  orderByDifficult,
  orderByAlphabeth,
} from "../redux/features/homeChartSlice";

const style = {
  background: "#0f1453",
  margin: "10px",
  padding: 5,
  cursor: "pointer",
};

const ChangeMode = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        background: "#0f1453",
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
      }}
    >
      <h4>GraphType:</h4>
      <h6 style={style} onClick={() => dispatch(graphType("area"))}>
        Area-chart
      </h6>
      <h6 style={style} onClick={() => dispatch(graphType("line"))}>
        Line-chart
      </h6>
      <h6 style={style} onClick={() => dispatch(graphType("bar"))}>
        Bar-chart
      </h6>
      <h4 style={{ marginLeft: 30, background: "#0f1453" }}>Sorting:</h4>
      <h6 style={style} onClick={() => dispatch(orderByFun("fun"))}>
        Fun
      </h6>
      <h6
        style={style}
        onClick={() => dispatch(orderByDifficult("difficulty"))}
      >
        Difficulty
      </h6>
      <h6
        style={{
          marginRight: 130,
          marginLeft: 20,
          cursor: "pointer",
          background: "#0f1453",
        }}
        onClick={() => dispatch(orderByAlphabeth("normal"))}
      >
        Alphabethical
      </h6>
    </div>
  );
};

export default ChangeMode;
