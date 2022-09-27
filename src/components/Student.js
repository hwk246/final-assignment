import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GeneralChart from "./GeneralChart";
import PersonalInfo from "./PersonalInfo";

const Student = () => {
  const { id } = useParams();
  // const object = useOutletContext();

  const studentIndividualData = useSelector(
    (state) => state.reduxGetData.listByName[id]
  );

  // const def = {
  //   Evelyn: [
  //     ["Scrum", 4, 5],
  //     ["wd01", 3, 4],
  //   ],
  // };
  // console.log(def);

  // const abc = [
  //   ["scrum", 2, 5, "Evelyn"],
  //   ["wd01", 3, 4, "Aranka"],
  // ];

  return (
    <div>
      <PersonalInfo id={id} />
      <GeneralChart
        dataXY={studentIndividualData}
        title={`Individual scores `}
        subtitle={""}
      />
    </div>
  );
};

export default Student;
