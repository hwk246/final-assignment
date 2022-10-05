import React from "react";
import { useDispatch } from "react-redux";
import {
  graphType,
  orderByFun,
  orderByDifficult,
  orderByAlphabeth,
} from "../redux/features/homeChartSlice";

const style = {
  margin: "10px",
  padding: 5,
  background: "#0f1453",
};

const ChangeMode = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        position: "relative",
        top: 22,
        justifyContent: "right",
        marginRight: 40,
        display: "flex",
        cursor: "pointer",
      }}
    >
      <h6 style={style} onClick={() => dispatch(graphType("area"))}>
        Area-chart
      </h6>
      <h6 style={style} onClick={() => dispatch(graphType("line"))}>
        Line-chart
      </h6>
      <h6 style={style} onClick={() => dispatch(graphType("bar"))}>
        Bar-chart
      </h6>
      <h6 style={style} onClick={() => dispatch(orderByFun("fun"))}>
        Fun
      </h6>
      <h6
        style={style}
        onClick={() => dispatch(orderByDifficult("difficulty"))}
      >
        Difficulty
      </h6>
      <h6 style={style} onClick={() => dispatch(orderByAlphabeth("normal"))}>
        Alphabeth
      </h6>
    </div>
  );
};

export default ChangeMode;
