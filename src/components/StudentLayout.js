import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const StudentLayout = () => {
  const studentName = useSelector((state) => state.reduxGetData.students);

  return (
    <div>
      <div
        style={{
          marginLeft: 10,
          display: "flex",
          float: "right",
          width: 180,
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          top: 120,
          borderRight: "1px solid gray",
        }}
      >
        <h4
          style={{
            marginBottom: 15,
            fontWeight: 900,
            borderBottom: "1px solid gray",
          }}
        >
          Personal Scores
        </h4>
        <div>
          <div id="student-list">
            {studentName.map((student, index) => (
              <div
                key={index}
                style={{ width: 120, margin: 10, textAlign: "center" }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  to={`/student/${student}`}
                >
                  {student}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <Link to={"/student/combined"}>
          <h4
            style={{
              marginBottom: 15,
              fontWeight: 900,
              borderBottom: "1px solid gray",
            }}
          >
            Combined Scores ;
          </h4>
        </Link>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default StudentLayout;
