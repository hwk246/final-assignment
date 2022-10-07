import React from "react";
import { Link, Outlet } from "react-router-dom";

const StudentLayout = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: 230,
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          top: 150,
          left: -5,
        }}
      >
        <Link
          to={"/student/personal/option"}
          style={{ textDecoration: "none" }}
        >
          <h3
            style={{
              marginBottom: 15,
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
            }}
          >
            Combined Scores
          </h3>
        </Link>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default StudentLayout;
