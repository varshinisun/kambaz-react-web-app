import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  courses: courses,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, { payload }) => {
      const newCourse = {
        ...payload, 
        _id: uuidv4(), 
      };
      state.courses.push(newCourse);
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter((c) => c._id !== courseId);
    },
    updateCourse: (state, { payload }) => {
      state.courses = state.courses.map((c) =>
        c._id === payload._id ? { ...payload } : c
      );
    },
  },
});

export const { addCourse, deleteCourse, updateCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
