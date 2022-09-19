import React from "react";
import { useSelector } from "react-redux";

const style = {
  color: "blue",
  border: "1px solid black",
  borderRadius: 5,
  height: 50,
  marginBottom: 50,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const Nav = () => {
  const students = useSelector((state) => {
    return state.reduxGetData.students;
  });
  return (
    <div className="nav" style={style}>
      <h1>NavBar</h1>
      <select style={{ float: "right", marginRight: 20 }}>
        {students.map((student, index) => (
          <option key={index}>{student}</option>
        ))}
      </select>
    </div>
  );
};

export default Nav;
