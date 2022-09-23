import React from "react";
import { useDispatch } from "react-redux";
import { graphMode } from "../redux/features/homeChartSlice";
import { graphType } from "../redux/features/homeChartSlice";

const ChangeMode = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(graphMode("stacked"))}>
        Stacked -- Normal
      </button>
      <button onClick={() => dispatch(graphType("line"))}>Line</button>
      <button onClick={() => dispatch(graphType("bar"))}>Bar</button>
    </div>
  );
};

export default ChangeMode;
