import React from "react";
import { useSelector } from "react-redux";

const FirstChart = () => {
  const courses = useSelector((state) => state.reduxGetData.courses);
  const students = useSelector((state) => state.reduxGetData.students);
  const name = useSelector(
    (state) => state.reduxGetData.listByName.Floris[0][0]
  );

  return (
    <div style={{ display: "flex" }}>
      <div>
        {courses.map((course, index) => {
          return <h3 key={index}>{course}</h3>;
        })}
      </div>
      <div>
        {students.map((student, index) => {
          return <h3 key={index}>{student}</h3>;
        })}
      </div>
      <h1>{name}</h1>
      <h1>{name}</h1>
      <h1>{name}</h1>
    </div>
  );
};

export default FirstChart;
