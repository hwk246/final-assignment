import React from "react";
import "./App.css";
import LoadingSpinner from "./components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./redux/features/AsyncData/StudentDataSlice";
import { useEffect } from "react";
import Home from "./components/Home";
import GeneralChart from "./components/GeneralChart";
import Nav from "./components/Nav";

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
      <Nav />
      <Home />
      <GeneralChart />
    </div>
  );
};

export default App;
