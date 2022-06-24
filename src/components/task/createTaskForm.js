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
import { useEffect, useState } from "react";
import {
  createTask,
  getTasks,
  getUserDetails,
} from "../../store/actions/taskAction";
import { useDispatch, useSelector } from "react-redux";

const CreateTaskForm = ({ handleCancel }) => {
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [assignee, setAssignee] = useState("");

  const dispatch = useDispatch();
  const { userDetails, tasks } = useSelector((state) => state.task);

  useEffect(() => {
    if (!userDetails) {
      dispatch(getUserDetails());
    }

    if (userDetails) console.log("userDetails", userDetails);
  }, [dispatch, userDetails]);

  useEffect(() => {
    if (!tasks) {
      dispatch(getTasks());
    }

    if (tasks) console.log("tasks", tasks);
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

  const handleSubmit = (event) => {
    event.preventDefault();

    let timeZone = new Date()
      .toString()
      .match(/([A-Z]+[+-][0-9]+.*)/)[1]
      .split(" ")[0]
      .split("+")[1]
      .match(/.{1,2}/g)
      .join(":");

    let newTaskValues = {
      task_msg: taskDescription,
      task_date: taskDate,
      task_time: timeConverter(taskTime).toString(),
      time_zone: timeConverter(timeZone).toString(),
      assigned_user: assignee,
      is_completed: "0",
    };

    dispatch(createTask(newTaskValues))
      .unwrap()
      .then(() => handleCancel());
  };
  return (
    <>
      <FormArea>
        <FormInput>
          <P>Task Description</P>
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

        <SubmitRow>
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

export default CreateTaskForm;
