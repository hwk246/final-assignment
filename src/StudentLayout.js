import React from "react";
import { Link, Outlet } from "react-router-dom";

const StudentLayout = () => {
  return (
    <>
      <Link to="/student/Evelyn">Evelyn</Link>
      <br />
      <Link to="/student/Aranka">Aranka</Link>
      <br />
      <Link to="/student/Floris">Floris</Link>
      <br />
      <Link to="/student/new">New</Link>
      <Outlet />
    </>
  );
};

export default StudentLayout;
