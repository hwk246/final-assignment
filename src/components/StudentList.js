import React from "react";
import GeneralChart from "./GeneralChart";
import { useSelector } from "react-redux";

const StudentList = () => {
  const studentAvgData = useSelector(
    (state) => state.reduxGetData.avgStudFunAndDiff
  );

  return (
    <>
      <GeneralChart
        margin={200}
        dataXY={studentAvgData}
        title={"Avarage Scores"}
        subtitle={"Per student"}
      />
    </>
  );
};

export default StudentList;
