import React from "react";
import {
  ActionsSide,
  AvatarImg,
  AvatarInfo,
  ProfileSide,
  SmallBox,
  Span,
  TaskViewContainer,
} from "./task.styles";
import dp from "../../assets/profileDp.svg";
import { MdEdit } from "react-icons/md";
import { TbBellZ } from "react-icons/tb";
import { GrFormCheckmark } from "react-icons/gr";

const TaskView = ({ data, toggleEditForm }) => {
  // console.log("data", data?.results);
  // let slicedTasks = data?.results?.slice(0, 6);
  return (
    <>
      {data &&
        data?.results?.map((task, idx) => (
          <TaskViewContainer key={idx}>
            <ProfileSide>
              <AvatarImg>
                <img src={dp} alt="dp" />
              </AvatarImg>
              <AvatarInfo>
                <Span>{task.task_msg}</Span>
                <Span date>{task.task_date}</Span>
              </AvatarInfo>
            </ProfileSide>
            <ActionsSide>
              <SmallBox edit>
                <MdEdit onClick={() => toggleEditForm(task.id)} />
              </SmallBox>
              <SmallBox>
                <TbBellZ />
              </SmallBox>
              <SmallBox>
                <GrFormCheckmark />
              </SmallBox>
            </ActionsSide>
          </TaskViewContainer>
        ))}
    </>
  );
};

export default TaskView;
