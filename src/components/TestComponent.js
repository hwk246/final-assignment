import React from "react";
import GeneralChart from "./GeneralChart";

const TestComponent = () => {
  return (
    <div>
      <GeneralChart
        xAxis={[1, 2, 3, 4, 5, 6]}
        funData={[2, 3, 4, 2, 1, 1]}
        difficultData={[1, 3, 3, 3, 1, 4]}
        title={"Test"}
        subtitle={"Test"}
      />
    </div>
  );
};

export default TestComponent;
