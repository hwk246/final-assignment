import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GeneralChart from "./GeneralChart";
import { Link } from "react-router-dom";

// import { useOutletContext } from "react-router-dom";

const Student = () => {
  const { id } = useParams();

  const studentIndividualData = useSelector(
    (state) => state.reduxGetData.listByName[id]
  );

  return (
    <>
      <Link
        style={{
          position: "absolute",
          top: 60,
          right: 50,
          textDecoration: "none",
        }}
        to={`/student/${id}/personal`}
        id={id}
      >
        personal information {id}
      </Link>
      <GeneralChart
        margin={200}
        dataXY={studentIndividualData}
        title={`Personal scores `}
        subtitle={id}
      />
    </>
  );
};

export default Student;
