import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const StudentNames = () => {
  const studentName = useSelector((state) => state.reduxGetData.students);
  return (
    <>
      <div
        style={{
          width: 180,
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: 280,
        }}
      >
        {studentName.map((student, index) => (
          <Link
            style={{
              marginBottom: 15,
              textAlign: "center",
              textDecoration: "none",
            }}
            key={index}
            to={`/student/personal/${student}`}
          >
            {student}
          </Link>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default StudentNames;
