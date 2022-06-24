import {
  Button,
  DateAndTime,
  DateTimeFormInput,
  FieldRow,
  FormArea,
  FormInput,
  FormInputDate,
  P,
  SubmitItems,
  SubmitRow,
} from "../landing/landing.styles";
import { RenderTextField } from "../landing/landing.utils";
import { CgNotes } from "react-icons/cg";
import Select from "react-select";
// import { confirmAlert } from "react-confirm-alert";
import { useEffect, useState } from "react";
import {
  deleteTask,
  editTask,
  getTasks,
  getUserDetails,
} from "../../store/actions/taskAction";
import { useDispatch, useSelector } from "react-redux";
import { DeleteSide } from "./task.styles";
import { RiDeleteBinLine } from "react-icons/ri";

const EditTaskForm = ({ handleCancel, data }) => {
  const [taskDescription, setTaskDescription] = useState(
    data?.results?.task_msg || ""
  );
  const [taskDate, setTaskDate] = useState(data?.results?.task_date || "");
  const [taskTime, setTaskTime] = useState("");
  const [assignee, setAssignee] = useState("");

  const dispatch = useDispatch();
  const { userDetails, tasks } = useSelector((state) => state.task);

  useEffect(() => {
    if (!userDetails) {
      dispatch(getUserDetails());
    }
  }, [dispatch, userDetails]);

  useEffect(() => {
    if (!tasks) {
      dispatch(getTasks());
    }
  }, [dispatch, tasks]);

  const options =
    userDetails &&
    userDetails?.results?.data?.map((option) => ({
      value: option.id,
      label: option.first,
    }));

  // Date picker handler
  const handleChange = (event) => {
    setTaskDate(event.target.value);
  };

  const handleChangeTime = (event) => {
    setTaskTime(event.target.value);
  };

  const timeConverter = (time) => {
    var array = time.split(":");
    var seconds =
      parseInt(array[0], 10) * 60 * 60 + parseInt(array[1], 10) * 60;
    return seconds;
  };

  const handleDelete = (id) => {
    let result = window.confirm("Are you sure you want to delete this Task?");

    if (result) {
      dispatch(deleteTask(id))
        .unwrap()
        .then(() => handleCancel());
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let timeZone = new Date()
      .toString()
      .match(/([A-Z]+[+-][0-9]+.*)/)[1]
      .split(" ")[0]
      .split("+")[1]
      .match(/.{1,2}/g)
      .join(":");

    let editTaskValues = {
      task_msg: taskDescription,
      task_date: taskDate,
      task_time: taskTime
        ? timeConverter(taskTime).toString()
        : data?.results?.task_time.toString(),
      time_zone: timeConverter(timeZone).toString(),
      assigned_user: assignee ? assignee : data?.results?.assigned_user,
      is_completed: "0",
    };

    const payload = {
      id: data?.results?.id,
      data: editTaskValues,
    };

    dispatch(editTask(payload))
      .unwrap()
      .then(() => handleCancel());
  };

  return (
    <>
      <FormArea>
        <FormInput>
          <P>Task Description Edit</P>
          <FieldRow>
            <RenderTextField
              placeholder="Follow Up"
              name="description"
              type="text"
              value={taskDescription}
              valueSetter={setTaskDescription}
            />
            <CgNotes className="follow" />
          </FieldRow>
        </FormInput>

        <FormInputDate>
          <DateAndTime>
            <P>Date</P>
            <DateTimeFormInput
              type="date"
              value={taskDate}
              onChange={handleChange}
            />
          </DateAndTime>

          <DateAndTime>
            <P>Time</P>
            <DateTimeFormInput
              type="time"
              value={taskTime}
              onChange={handleChangeTime}
            />
          </DateAndTime>
        </FormInputDate>

        <FormInput>
          <P>Assign User</P>
          <Select
            options={options}
            value={options?.value}
            onChange={(option) => setAssignee(option.value)}
          />
        </FormInput>

        <SubmitRow edit>
          <DeleteSide>
            <RiDeleteBinLine onClick={() => handleDelete(data?.results?.id)} />
          </DeleteSide>
          <SubmitItems>
            <P cancel onClick={() => handleCancel()}>
              Cancel
            </P>
            <Button type="submit" onClick={handleSubmit}>
              Save
            </Button>
          </SubmitItems>
        </SubmitRow>
      </FormArea>
    </>
  );
};

export default EditTaskForm;
