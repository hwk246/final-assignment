import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const StudentLayout = () => {
  const studentName = useSelector((state) => state.reduxGetData.students);

  return (
    <div>
      <div
        style={{
          display: "flex",
          float: "right",
          width: "70%",
          flexDirection: "row",
          justifyContent: "space-between",
          // alignItems: "center",
          position: "absolute",
          // border: "1px solid gray",
          bottom: 50,
          // right: 320,
        }}
      >
        {studentName.map((student, index) => (
          <button key={index} style={{ border: "1px solid gray", margin: 5 }}>
            <Link
              style={{
                textDecoration: "none",
                fontSize: 17,
                fontWeight: "bold",
              }}
              to={`/student/${student}`}
            >
              {student}
            </Link>
          </button>
        ))}
      </div>

      <div style={{ color: "gray" }}>
        <Outlet context={" ---> Outlet context if needed"} />
      </div>
    </div>
  );
};

export default StudentLayout;
