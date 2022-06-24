import React, { useEffect, useState } from "react";
import {
  BottomSide,
  IconSide,
  LandingContainer,
  LHS,
  RHS,
  TaskBody,
  TaskBox,
  TaskHeader,
  TextSide,
  TopSide,
} from "./landing.styles";
import { GrAdd } from "react-icons/gr";
import CreateTaskForm from "../task/createTaskForm";
import { useDispatch, useSelector } from "react-redux";
import { getTask, getTasks } from "../../store/actions/taskAction";
import TaskView from "../task/taskView";
import EditTaskForm from "../task/editTaskForm";

const Landing = () => {
  const [fetchedTasks, setFetchedTasks] = useState("");
  const [fetchedTask, setFetchedTask] = useState("");
  const [isCreateForm, setIsCreateForm] = useState(false);
  const [isEditForm, setIsEditForm] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const dispatch = useDispatch();

  const { tasks, task } = useSelector((state) => state.task);

  useEffect(() => {
    if (!tasks) {
      dispatch(getTasks());
    }

    if (tasks) setFetchedTasks(tasks);
  }, [dispatch, tasks]);

  useEffect(() => {
    if (selectedId) dispatch(getTask(selectedId));
  }, [dispatch, selectedId]);

  useEffect(() => {
    if (task) setFetchedTask(task);
  }, [dispatch, task]);

  const toggleCreateForm = () => {
    setIsCreateForm(!isCreateForm);
    setIsEditForm(false);
  };

  const toggleEditForm = (id) => {
    setIsEditForm(!isEditForm);
    setSelectedId(id);
  };

  const handleCancel = () => {
    setIsEditForm(false);
    setIsCreateForm(false);
    setFetchedTask("");
  };

  return (
    <LandingContainer>
      <LHS />
      <RHS>
        <TopSide />
        <BottomSide>
          <TaskBox>
            <TaskHeader>
              <TextSide>TASKS {fetchedTasks?.results?.length}</TextSide>
              <IconSide>
                <GrAdd onClick={() => toggleCreateForm()} />
              </IconSide>
            </TaskHeader>
            <TaskBody>
              {isCreateForm && !isEditForm && (
                <CreateTaskForm handleCancel={handleCancel} />
              )}
              {isEditForm && fetchedTask?.status === "success" && (
                <EditTaskForm handleCancel={handleCancel} data={fetchedTask} />
              )}
              {!isCreateForm && !isEditForm && (
                <TaskView data={fetchedTasks} toggleEditForm={toggleEditForm} />
              )}
            </TaskBody>
          </TaskBox>
        </BottomSide>
      </RHS>
    </LandingContainer>
  );
};

export default Landing;
