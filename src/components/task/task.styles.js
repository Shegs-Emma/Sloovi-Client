import styled from "styled-components";

const TaskViewContainer = styled.div`
  width: 95%;
  margin: 1rem 0 0 -0.1rem;
  /* padding: 0.5rem; */
  display: flex;
  justify-content: space-between;
`;

const ProfileSide = styled.div`
  display: flex;
  width: 60%;
`;

const ActionsSide = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
`;

const AvatarImg = styled.div``;

const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  font-size: 12px;
  margin: 0 0 0.2rem 0.6rem;
  color: ${({ date }) => (date ? "red" : "")};
`;

const SmallBox = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.2rem 0 0 0.5rem;
  border: 1px solid #e8e8e8;
  cursor: ${({ edit }) => (edit ? "pointer" : "")};
  box-shadow: 0px 4px 8px 1px rgba(117, 117, 117, 0.1);
`;

const DeleteSide = styled.div`
  width: 10%;
  padding: 0.8rem 0 0 0.5rem;
`;

export {
  TaskViewContainer,
  ProfileSide,
  ActionsSide,
  AvatarImg,
  AvatarInfo,
  Span,
  SmallBox,
  DeleteSide,
};
