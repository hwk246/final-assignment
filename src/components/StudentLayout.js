import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const StudentLayout = () => {
  const studentName = useSelector((state) => state.reduxGetData.students);
  const listByNameFromState = useSelector(
    (state) => state.reduxGetData.listByName
  );

  // evemt for css animation
  const handleClickPersonal = () => {
    document
      .getElementById("student-list")
      .classList.toggle("student-list-show");
    document
      .getElementById("combined-list")
      .classList.toggle("combined-list-move");
  };

  const handleClickCombined = () => {
    document
      .getElementById("combined-list")
      .classList.toggle("combined-list-show");
  };

  const [selectedName, setSelectedName] = useState({});

  // useState registration of persons to combine chart
  const handleChange = (e) => {
    if (selectedName.length === 0) {
      setSelectedName({
        [e.target.value]: listByNameFromState[e.target.value],
      });
    } else {
      if (!Object.keys(selectedName).includes(e.target.value)) {
        setSelectedName({
          ...selectedName,
          [e.target.value]: listByNameFromState[e.target.value],
        });
      } else {
        const remainList = {};
        Object.keys(selectedName).forEach((item) => {
          if (item !== e.target.value) {
            remainList[item] = listByNameFromState[item];
          }
          setSelectedName(remainList);
        });
      }
    }
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
          onClick={handleClickPersonal}
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
        <div>
          <h4
            onClick={handleClickCombined}
            style={{
              marginBottom: 15,
              fontWeight: 900,
              borderBottom: "1px solid gray",
            }}
          >
            Combined Scores ;
          </h4>
          <div id="combined-list" style={{ width: 120, margin: 10 }}>
            {studentName.map((student, index) => (
              <h3 key={index} style={{ width: 120, margin: 10 }}>
                <input
                  id={student}
                  type="checkbox"
                  value={student}
                  onChange={handleChange}
                />
                {student}
              </h3>
            ))}
            <Link to={"/student/combined"} state={selectedName}>
              <button>Combine scores</button>
            </Link>
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
