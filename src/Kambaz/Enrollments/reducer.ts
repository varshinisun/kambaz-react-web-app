import { createSlice } from "@reduxjs/toolkit";
import enrollmentsData from "../Database/enrollments.json"; 
import { v4 as uuidv4 } from "uuid";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

const initialState = {
  enrollments: enrollmentsData as Enrollment[],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (state, { payload }) => {
      const newEnrollment = {
        _id: uuidv4(), 
        ...payload,
      };
      state.enrollments.push(newEnrollment);
    },
    removeEnrollment: (state, { payload: enrollmentId }) => {
      state.enrollments = state.enrollments.filter((e) => e._id !== enrollmentId);
    },
  },
});

export const { addEnrollment, removeEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
