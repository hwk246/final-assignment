import React from "react";
import GeneralChart from "./GeneralChart";
import { useSelector } from "react-redux";

const StudentList = () => {
  const students = useSelector((state) => state.reduxGetData.students);
  const diffFactorStudent = useSelector(
    (state) => state.reduxGetData.difficultPerStudent
  );
  const funFactorStudent = useSelector(
    (state) => state.reduxGetData.funPerStudent
  );

  return (
    <>
      <GeneralChart
        xAxis={students}
        funData={funFactorStudent}
        difficultData={diffFactorStudent}
        title={"Avarage Individual Scores"}
        subtitle={"Per student"}
      />
    </>
  );
};

export default StudentList;
