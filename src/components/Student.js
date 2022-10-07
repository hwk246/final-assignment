import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GeneralChart from "./GeneralChart";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { graphType } from "../redux/features/homeChartSlice";
import { orderByFun } from "../redux/features/homeChartSlice";

const Student = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  dispatch(graphType("line"));
  dispatch(orderByFun("fun"));

  const studentIndividualData = useSelector(
    (state) => state.reduxGetData.listByName[id]
  );

  let studentIndividual = [["", "", ""]];

  if (id !== "option") {
    studentIndividual = studentIndividualData;
  }

  return (
    <>
      <Link
        style={{
          position: "relative",
          left: 300,
          top: 675,
          display: "inline-block",
          textDecoration: "none",
          background: "#0f1453",
        }}
        to={`/student/personal/${id}/info`}
      >
        {id === "option" ? "" : <h3>Personal information {id}</h3>}
      </Link>

      <GeneralChart
        margin={200}
        dataXY={studentIndividual}
        title={`Personal scores `}
        subtitle={id}
      />
    </>
  );
};

export default Student;
