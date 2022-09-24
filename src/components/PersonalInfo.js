import React from "react";
import { studentPersonal } from "../personal";

const PersonalInfo = (id) => {
  const studentInfo = studentPersonal.filter((item) => item.name === id.id);
  console.log(studentInfo);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        top: 20,
        right: 300,
        zIndex: 1,
        width: 250,
        boxShadow: "1px 1px 10px gray",
      }}
    >
      <div style={{ marginRight: 10 }}>
        <img
          style={{ height: 90 }}
          src={studentInfo[0].picture}
          alt="person"
        ></img>
      </div>
      <div>
        <h4>
          {studentInfo[0].name} {studentInfo[0].surname}
        </h4>
        <h5> {studentInfo[0].email}</h5>
        <h5>{studentInfo[0].telephon}</h5>
      </div>
    </div>
  );
};

export default PersonalInfo;
