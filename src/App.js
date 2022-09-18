// function App() {
//   // Find all names in students array
//   const student = students.map((element) => element[0]);
//   // Find unique names of students
//   const uniqueStudent = [...new Set(student)];
//   // console.log(uniqueStudent);

//   const newList = [];
//   uniqueStudent.forEach((std) =>
//     newList.push(students.filter((element) => element[0] === std))
//   );
//   newList.forEach((element) => element.forEach((number) => number.shift()));

//   for (let i = 0; i < uniqueStudent.length; i++) {
//     this.setState({ [uniqueStudent[i]]: newList[i] });
//   }

import React from "react";
import "./App.css";
import LoadingSpinner from "./components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./redux/features/AsyncData/StudentDataSlice";
import { useEffect } from "react";
import FirstChart from "./components/FirstChart";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const timer = useSelector((state) => state.reduxGetData.loading);

  return timer ? (
    <LoadingSpinner />
  ) : (
    <div>
      <FirstChart />
    </div>
  );
};

export default App;
