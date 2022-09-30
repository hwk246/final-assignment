import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import CombinedChart from "./CombinedChart";

const StudentLayout = () => {
  const studentName = useSelector((state) => state.reduxGetData.students);

  const handleClick = () => {
    document
      .getElementById("student-list")
      .classList.toggle("student-list-show");
    document.getElementById("test").classList.toggle("testje");
  };

  const [selectedName, setSelectedName] = useState([]);

  const handleChange = (e) => {
    setSelectedName([...selectedName, e.target.value]);
  };

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
          onClick={handleClick}
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
              <h3
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
              </h3>
            ))}
          </div>
        </div>
        <div id="test">
          <h4
            style={{
              marginBottom: 15,
              fontWeight: 900,
              borderBottom: "1px solid gray",
            }}
          >
            <Link to={"/student/combined"} state={{ name: selectedName }}>
              Combined Scores
            </Link>
          </h4>
          <div style={{ width: 120, margin: 10 }}>
            {studentName.map((student, index) => (
              <h3 key={index + 1} style={{ width: 120, margin: 10 }}>
                <input
                  type="checkbox"
                  value={student}
                  onChange={handleChange}
                />
                {student}
              </h3>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default StudentLayout;
