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

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const timer = useSelector((state) => state.reduxGetData.loading);
  const students = useSelector((state) => state.reduxGetData.students);
  const funData = useSelector((state) => state.reduxGetData.funFactor);
  const difficultData = useSelector(
    (state) => state.reduxGetData.difficultyFactor
  );

  return timer ? (
    <LoadingSpinner />
  ) : (
    <>
      <nav>
        <ul style={{ listStyle: "none", fontSize: 20 }}>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/student">Student</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <GeneralChart
              xAxis={students}
              funData={funData}
              difficultData={difficultData}
            />
          }
        />
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentList />} />
          <Route path="/student/:id" element={<Student />} />
          <Route path="/student/new" element={<NewStudent />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
