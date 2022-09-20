import React from "react";
import { useParams } from "react-router-dom";
import GeneralChart from "./GeneralChart";

const Student = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Overview of scores {id}</h1>
      <GeneralChart />
    </div>
  );
};

export default Student;
