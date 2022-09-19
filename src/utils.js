import React from "react";

const utils = (props) => {
  const allCourses = [];
  arrayData.forEach((element) => {
    allCourses.push(element[1]);
  });
  const uniqueCourses = [...new Set(allCourses)];

  return <div></div>;
};

export default utils;
