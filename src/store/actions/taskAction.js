import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from ".";
import TaskService from "../../services/taskService";
import { startLoad, stopLoad } from "../slices/appSlice";

export const getUserDetails = createAsyncThunk(
  "userDetails",
  async (_, { dispatch }) => {
    dispatch(startLoad());

    try {
      const res = await TaskService.userDetails();
      return res;
    } catch (err) {
      handleError(err, dispatch);
    } finally {
      dispatch(stopLoad());
    }
  }
);

export const createTask = createAsyncThunk(
  "createTask",
  async (payload, { dispatch }) => {
    dispatch(startLoad());

    try {
      const res = await TaskService.createTask(payload);
      return res;
    } catch (err) {
      console.log("errAction", err);
      handleError(err, dispatch);
    } finally {
      dispatch(stopLoad());
    }
  }
);

export const editTask = createAsyncThunk(
  "editTask",
  async (payload, { dispatch }) => {
    dispatch(startLoad());

    try {
      const { id, data } = payload;
      const res = await TaskService.editTask(id, data);
      dispatch(getTasks());
      return res;
    } catch (err) {
      console.log("errAction", err);
      handleError(err, dispatch);
    } finally {
      dispatch(stopLoad());
    }
  }
);

export const getTasks = createAsyncThunk(
  "getTasks",
  async (_, { dispatch }) => {
    dispatch(startLoad());

    try {
      const res = await TaskService.getTasks();
      return res;
    } catch (err) {
      console.log("errAction", err);
      handleError(err, dispatch);
    } finally {
      dispatch(stopLoad());
    }
  }
);

export const getTask = createAsyncThunk("getTask", async (id, { dispatch }) => {
  dispatch(startLoad());

  try {
    const res = await TaskService.getTask(id);
    return res;
  } catch (err) {
    console.log("errAction", err);
    handleError(err, dispatch);
  } finally {
    dispatch(stopLoad());
  }
});

export const deleteTask = createAsyncThunk(
  "delTask",
  async (id, { dispatch }) => {
    dispatch(startLoad());

    try {
      const res = await TaskService.deleteTask(id);
      dispatch(getTasks());
      return res;
    } catch (err) {
      console.log("errAction", err);
      handleError(err, dispatch);
    } finally {
      dispatch(stopLoad());
    }
  }
);
