import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Papa from "papaparse";

export const getData = createAsyncThunk("getData/wsd1", async () => {
  // payload creator
  try {
    const data = await fetch("../../../../wsd.csv");
    const textData = await data.text();
    const arrayData = Papa.parse(textData, {
      header: false,
      dynamicTyping: true,
    }).data.slice(1);

    ////////////////////// unique courses

    const allCourses = [];
    arrayData.forEach((element) => {
      allCourses.push(element[1]);
    });
    const uniqueCourses = [...new Set(allCourses)];

    /////////////////////// unique students
    const allStudents = [];
    arrayData.forEach((element) => {
      allStudents.push(element[0]);
    });
    const uniqueStudents = [...new Set(allStudents)];
    //////////////// avarage fun {course: avgFun}

    // const arrayByCourse = [];
    // uniqueCourses.forEach((course) =>
    //   arrayByCourse.push(arrayData.filter((element) => element[1] === course))
    // );
    // const listByCourse = {};
    // for (let i = 0; i < uniqueCourses.length; i++) {
    //   listByCourse[uniqueCourses[i]] = arrayByCourse[i];
    // }

    const arrayByName = [];
    uniqueStudents.forEach((student) =>
      arrayByName.push(arrayData.filter((element) => element[0] === student))
    );

    const listByName = {};
    for (let i = 0; i < uniqueStudents.length; i++) {
      listByName[uniqueStudents[i]] = arrayByName[i];
    }

    const courseFunFactor = [];
    const courseDifficultyFactor = [];
    for (let i = 2; i < 4; i++) {
      for (const item in listByName) {
        const tussenArray = [];
        let counter = 0;
        listByName[item].forEach((element) => {
          tussenArray.push(element[i]);
          counter++;
          if (counter === listByName[item].length) {
            const average =
              tussenArray.reduce((base, item) => base + item, 0) /
              tussenArray.length;
            i === 2
              ? courseDifficultyFactor.push(average)
              : courseFunFactor.push(average);
            counter = 0;
          }
        });
      }
    }

    const courses = uniqueCourses,
      students = uniqueStudents,
      funFactor = courseFunFactor,
      difficultyFactor = courseDifficultyFactor,
      totalByName = listByName;

    return {
      courses,
      students,
      funFactor,
      difficultyFactor,
      totalByName,
    };
  } catch (error) {
    console.error(error);
  }
});

const getDataSlice = createSlice({
  name: "reduxGetData",
  initialState: {
    status: "oke",
    loading: true,
  },

  extraReducers: {
    [getData.pending]: (state) => {
      state.status = "loading";
    },

    [getData.fulfilled]: (state, { payload }) => {
      state.listByName = payload.totalByName;
      state.courses = payload.courses;
      state.students = payload.students;
      state.funFactor = payload.funFactor;
      state.difficultyFactor = payload.difficultyFactor;
      state.loading = false;
      state.status = "oke";
    },

    [getData.rejected]: (state) => {
      state.status = "fucked";
    },
  },
});

export default getDataSlice.reducer;
