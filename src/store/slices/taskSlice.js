import { createSlice } from "@reduxjs/toolkit";
import {
  createTask,
  deleteTask,
  editTask,
  getTask,
  getTasks,
  getUserDetails,
} from "../actions/taskAction";

const initialState = {
  userDetails: "",
  createTask: "",
  tasks: "",
  task: "",
  deletedTask: "",
  updatedTask: "",
};

const taskSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserDetails.fulfilled, (state, { payload }) => {
      state.userDetails = payload;
    });
    builder.addCase(createTask.fulfilled, (state, { payload }) => {
      state.createTask = payload;
    });
    builder.addCase(getTasks.fulfilled, (state, { payload }) => {
      state.tasks = payload;
    });
    builder.addCase(getTask.fulfilled, (state, { payload }) => {
      state.task = payload;
    });
    builder.addCase(deleteTask.fulfilled, (state, { payload }) => {
      state.deletedTask = payload;
    });
    builder.addCase(editTask.fulfilled, (state, { payload }) => {
      state.updatedTask = payload;
    });
  },
});

const { reducer } = taskSlice;

export default reducer;
