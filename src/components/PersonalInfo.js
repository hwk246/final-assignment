import React from "react";
import { studentPersonal } from "../personal";
import { useParams } from "react-router-dom";

const PersonalInfo = () => {
  const { id } = useParams();
  const studentInfo = studentPersonal.filter((item) => item.name === id);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: 30,
          marginLeft: 250,
        }}
      >
        <div>
          <img
            style={{ height: 150, marginLeft: 30 }}
            src={studentInfo[0].picture}
            alt="person"
          ></img>
        </div>
        <div>
          <h2>
            {studentInfo[0].name} {studentInfo[0].surname}
          </h2>
          <h3> {studentInfo[0].email}</h3>
          <h3>{studentInfo[0].telephone}</h3>
        </div>
      </div>
      <div
        style={{
          width: 600,
          border: "1px solid gray",
          padding: 35,
          marginRight: 40,
        }}
      >
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex obcaecati,
          vel saepe earum tempora inventore exercitationem assumenda officiis
          aspernatur dignissimos maiores in quis quidem numquam suscipit dolore
          perferendis et delectus.Lorem ipsum
        </p>
        <p>
          necessitatibus vel libero facilis laboriosam natus neque aliquid
          soluta aspernatur optio nobis! Et illo error quia. vel saepe earum
          tempora inventore exercitationem assumenda officiis aspernatur
          dignissimos maiores in quis quidem numquam suscipit dolore perferendis
          et delectus.Lorem ipsum dolor sit amet consecteturvel saepe earum
          tempora inventore exercitationem assumenda officiis aspernatur
          dignissimos maiores in
        </p>
      </div>
    </div>
  );
};

export default PersonalInfo;
