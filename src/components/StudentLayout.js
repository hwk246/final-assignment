import React from "react";
import { Link, Outlet } from "react-router-dom";

const StudentLayout = () => {
  return (
    <div>
      <div
        style={{
          marginLeft: 10,
          display: "flex",
          float: "right",
          width: 230,
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          top: 120,
        }}
      >
        <Link
          to={"/student/personal/option"}
          style={{ textDecoration: "none" }}
        >
          <h3
            style={{
              marginBottom: 15,
              fontWeight: 900,
            }}
          >
            Personal Scores
          </h3>
        </Link>

        <Link
          to={"/student/personal/combined"}
          style={{ textDecoration: "none" }}
        >
          <h3
            style={{
              marginBottom: 15,
              fontWeight: 900,
            }}
          >
            Combined Scores
          </h3>
        </Link>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default StudentLayout;
