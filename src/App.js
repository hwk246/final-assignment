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
import StudentLayout from "./components/StudentLayout";
import PersonalInfo from "./components/PersonalInfo";
import CombinedChart from "./components/CombinedChart";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const timer = useSelector((state) => state.reduxGetData.loading);
  const CourseAvgData = useSelector(
    (state) => state.reduxGetData.avgCrsFunAndDiff
  );

  return timer ? (
    <LoadingSpinner />
  ) : (
    <>
      <nav style={{ borderBottom: "1px solid gray", marginBottom: "25px" }}>
        <ul style={{ listStyle: "none", fontSize: 20, cursor: "pointer" }}>
          <li style={{ marginBottom: 10, marginLeft: 10 }}>
            <Link style={{ textDecoration: "none", marginBottom: 5 }} to="/">
              Homepage
            </Link>
          </li>
          <li style={{ marginLeft: 10 }}>
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
              dataXY={CourseAvgData}
              title={"Avarage Difficulty & Fun"}
              subtitle={"All students per assignment"}
            />
          }
        />
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentList />} />
          <Route path=":id" element={<Student />} />
          <Route path="combined" element={<CombinedChart />} />
        </Route>
        <Route path="/student/:id/personal" element={<PersonalInfo />} />
        <Route path="/student/new" element={<NewStudent />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
