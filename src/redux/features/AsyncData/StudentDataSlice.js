import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Papa from "papaparse";

export const getData = createAsyncThunk("getData/wsd1", async () => {
  try {
    const data = await fetch("../../../../wsd.csv");
    const textData = await data.text();
    const arrayData = Papa.parse(textData, {
      header: false,
      dynamicTyping: true,
    }).data.slice(1);

    const allStudents = [];
    arrayData.forEach((element) => {
      allStudents.push(element[0]);
    });

    const uniqueStudents = [...new Set(allStudents)];

    const allCourses = [];
    arrayData.forEach((element) => {
      allCourses.push(element[1]);
    });
    const uniqueCourses = [...new Set(allCourses)];

    const uniqueCoursesShort = uniqueCourses.map((coursNameLong) =>
      coursNameLong.length > 6 ? coursNameLong.slice(16) : coursNameLong
    );

    const arrayByCourse = [];
    uniqueCourses.forEach((course) =>
      arrayByCourse.push(arrayData.filter((element) => element[1] === course))
    );
    const listByCourse = {};
    for (let i = 0; i < uniqueCourses.length; i++) {
      listByCourse[uniqueCourses[i]] = arrayByCourse[i];
    }

    const arrayByName = [];
    uniqueStudents.forEach((student) =>
      arrayByName.push(arrayData.filter((element) => element[0] === student))
    );

    const listByName = {};
    for (let i = 0; i < uniqueStudents.length; i++) {
      listByName[uniqueStudents[i]] = arrayByName[i];
    }

    for (const item in listByName) {
      listByName[item].forEach((total) => total.shift());
    }

    for (const item in listByName) {
      listByName[item].forEach((element) => {
        if (element[0].length > 7) {
          element[0] = element[0].substring(17);
        }
      });
    }

    const courseFunFactor = [];
    const courseDifficultyFactor = [];

    ///////// All course average.
    for (let i = 1; i < 3; i++) {
      for (const item in listByCourse) {
        const tussenArray = [];
        let counter = 0;
        listByCourse[item].forEach((element) => {
          tussenArray.push(element[i]);
          counter++;
          if (counter === listByCourse[item].length) {
            const average = parseFloat(
              (
                tussenArray.reduce((base, item) => base + item, 0) /
                tussenArray.length
              ).toFixed(1)
            );
            i === 1
              ? courseDifficultyFactor.push(average)
              : courseFunFactor.push(average);
            counter = 0;
          }
        });
      }
    }

    const crsFunAndDiffAvg = [];
    uniqueCoursesShort.forEach((crs, index) => {
      crsFunAndDiffAvg.push([
        crs,
        courseDifficultyFactor[index],
        courseFunFactor[index],
      ]);
    });

    const studentFunFactor = [];
    const studentDifficultyFactor = [];

    ////////// average of all courses for every student
    for (let i = 1; i < 3; i++) {
      for (const item in listByName) {
        const tussenArray = [];
        let counter = 0;
        listByName[item].forEach((element) => {
          tussenArray.push(element[i]);

          counter++;
          if (counter === listByName[item].length) {
            const average = parseFloat(
              (
                tussenArray.reduce((base, item) => base + item, 0) /
                tussenArray.length
              ).toFixed(1)
            );
            i === 1
              ? studentDifficultyFactor.push(average)
              : studentFunFactor.push(average);
            counter = 0;
          }
        });
      }
    }
    const stdFunAndDiffAvg = [];
    uniqueStudents.forEach((std, index) => {
      stdFunAndDiffAvg.push([
        std,
        studentDifficultyFactor[index],
        studentFunFactor[index],
      ]);
    });

    const students = uniqueStudents,
      totalByName = listByName,
      avgStudentFunAndDiff = stdFunAndDiffAvg,
      avgCourseFunAndDiff = crsFunAndDiffAvg;

    return {
      students,
      totalByName,
      avgStudentFunAndDiff,
      avgCourseFunAndDiff,
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
    avgStudFunAndDiff: [],
    avgCourseFunAndDiff: [],
  },

  extraReducers: {
    [getData.pending]: (state) => {
      state.status = "loading";
    },

    [getData.fulfilled]: (state, { payload }) => {
      state.listByName = payload.totalByName;
      state.students = payload.students;
      state.avgStudFunAndDiff = payload.avgStudentFunAndDiff;
      state.avgCrsFunAndDiff = payload.avgCourseFunAndDiff;
      state.loading = false;
      state.status = "oke";
    },

    [getData.rejected]: (state) => {
      state.status = "fucked";
    },
  },
});

export default getDataSlice.reducer;
