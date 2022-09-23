import React from "react";
import LoadingSpinner from "./components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./redux/features/AsyncData/StudentDataSlice";
import { useEffect } from "react";
import GeneralChart from "./components/GeneralChart";
import StudentList from "./components/StudentList";
import Student from "./components/Student";
import NewStudent from "./components/NewStudent";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import StudentLayout from "./StudentLayout";
import ChangeMode from "./components/ChangeMode";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const timer = useSelector((state) => state.reduxGetData.loading);
  const courses = useSelector((state) => state.reduxGetData.courses);
  const funData = useSelector((state) => state.reduxGetData.funFactor);
  const difficultData = useSelector(
    (state) => state.reduxGetData.difficultyFactor
  );

  return timer ? (
    <LoadingSpinner />
  ) : (
    <>
      <nav style={{ border: "3px solid black", marginBottom: "35px" }}>
        <ul style={{ listStyle: "none", fontSize: 20 }}>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              Homepage
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/student">
              Student
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <GeneralChart
              xAxis={courses}
              funData={funData}
              difficultData={difficultData}
              title={"Avarage Difficulty & Fun"}
              subtitle={"all students"}
            />
          }
        />
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentList />} />
          <Route path=":id" element={<Student />} />
          <Route path="new" element={<NewStudent />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <ChangeMode />
    </>
  );
};

export default App;
