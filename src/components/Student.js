import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GeneralChart from "./GeneralChart";
import { Link } from "react-router-dom";

const Student = () => {
  const { id } = useParams();

  const studentIndividualData = useSelector(
    (state) => state.reduxGetData.listByName[id]
  );

  let studentIndividual = [["", 0, 0]];

  if (id !== "option") {
    studentIndividual = studentIndividualData;
  }

  return (
    <>
      <Link
        style={{
          position: "absolute",
          top: 50,
          right: 50,
          textDecoration: "none",
        }}
        to={`/student/${id}/personal`}
      >
        {id === "option" ? "" : <h3>Personal information {id}</h3>}
      </Link>

      <GeneralChart
        margin={200}
        dataXY={studentIndividual}
        title={`Personal scores `}
        subtitle={id}
      />
    </>
  );
};

export default Student;
