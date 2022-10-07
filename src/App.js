import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./redux/features/AsyncData/StudentDataSlice";
import { Routes, Route, Link } from "react-router-dom";
import GeneralChart from "./components/GeneralChart";
import Student from "./components/Student";
import StudentList from "./components/StudentList";
import LoadingSpinner from "./components/Loading";
import NotFound from "./components/NotFound";
import StudentLayout from "./components/StudentLayout";
import PersonalInfo from "./components/PersonalInfo";
import CombinedChart from "./components/CombinedChart";
import StudentNames from "./components/StudentNames";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const timer = useSelector((state) => state.reduxGetData.loading);
  const CourseAvgData = useSelector(
    (state) => state.reduxGetData.avgCrsFunAndDiff
  );

  const style = { textDecoration: "none", marginBottom: 2 };

  return timer ? (
    <LoadingSpinner />
  ) : (
    <>
      <nav>
        <ul>
          <li style={{ marginBottom: 10 }}>
            <Link style={style} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={style} to="/student">
              Student
            </Link>
          </li>
        </ul>
        <h1>Student Dashboard</h1>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <GeneralChart
              dataXY={CourseAvgData}
              title={"Average Difficulty & Fun"}
              subtitle={"All students per assignment"}
            />
          }
        />
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentList />} />
          <Route path="personal" element={<StudentNames />}>
            <Route path=":id">
              <Route index element={<Student />} />
              <Route path="info" element={<PersonalInfo />} />
            </Route>
            <Route path="combined" element={<CombinedChart />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
