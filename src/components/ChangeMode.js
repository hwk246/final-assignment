import React from "react";
import { useDispatch } from "react-redux";
import {
  graphType,
  orderByFun,
  orderByDifficult,
  orderByAlphabeth,
} from "../redux/features/homeChartSlice";

const ChangeMode = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        cursor: "pointer",
        position: "absolute",
        top: -12,
        right: -10,
      }}
    >
      <h5 onClick={() => dispatch(graphType("area"))}>Area-chart</h5>
      <h5 onClick={() => dispatch(graphType("bar"))}>Bar-chart</h5>
      <h5 onClick={() => dispatch(orderByFun("fun"))}>Fun</h5>
      <h5 onClick={() => dispatch(orderByDifficult("difficulty"))}>
        Difficulty
      </h5>
      <h5 onClick={() => dispatch(orderByAlphabeth("normal"))}>Alphabeth</h5>
    </div>
  );
};

export default ChangeMode;
