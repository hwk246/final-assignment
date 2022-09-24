import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GeneralChart from "./GeneralChart";
import PersonalInfo from "./PersonalInfo";

const Student = () => {
  const { id } = useParams();
  // const object = useOutletContext();

  const xAxis = useSelector((state) => state.reduxGetData.courses);
  const dataListByName = useSelector(
    (state) => state.reduxGetData.listByName[id]
  );

  const funData = [];
  dataListByName.forEach((element) => {
    funData.push(element[3]);
  });

  const difficultData = [];
  dataListByName.forEach((element) => {
    difficultData.push(element[2]);
  });

  return (
    <div>
      {/* <h1>
        Overview of scores {id} {object}
      </h1> */}

      <PersonalInfo id={id} />

      <GeneralChart
        xAxis={xAxis}
        funData={funData}
        difficultData={difficultData}
        title={`Individual scores `}
        subtitle={""}
      />
    </div>
  );
};

export default Student;
