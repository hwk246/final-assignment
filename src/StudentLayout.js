import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const StudentLayout = () => {
  const studentName = useSelector((state) => state.reduxGetData.students);

  return (
    <div>
      <div style={{ position: "absolute", top: 60, right: 20 }}>
        {studentName.map((student, index) => (
          <button key={index} style={{ margin: 5 }}>
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
