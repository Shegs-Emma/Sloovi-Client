import styled from "styled-components";

const LandingContainer = styled.div`
  display: flex;
`;

const LHS = styled.div`
  width: 20%;
  height: 100vh;
  background-color: #323e4d;
`;

const RHS = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const TopSide = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #fff;
`;

const BottomSide = styled.div`
  width: 100%;
  background-color: #fafafa;
  height: 100vh;
  /* padding: 2rem; */
`;

const TaskBox = styled.div`
  border: 1px solid #e8e8e8;
  width: 40%;
  /* height: 20rem; */
  margin: 4rem 0 0 4rem;
  background: #eef7fc;
`;

const TaskHeader = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #e8e8e8;
  background: #fff;
`;

const TextSide = styled.div`
  width: 80%;
  padding: 0.5rem;
  color: #746965;
  font-size: 14px;
`;

const IconSide = styled.div`
  width: 10%;
  padding: 0.5rem 0 0 1.5rem;
  border-left: 1px solid #e8e8e8;
  cursor: pointer;
`;

const TaskBody = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin: 0 auto;

  height: 24rem;
  overflow: auto;
`;

const FormArea = styled.form`
  width: 95%;
  margin: 0.1rem 0 0 -0.1rem;
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0.5rem auto;
`;

const FormInputDate = styled.div`
  display: flex;
  width: 95%;
  margin: 0.5rem auto;
`;

const P = styled.p`
  font-size: 14px;
  margin: 0.8rem 0 0.8rem 0;
  margin: ${({ cancel }) => (cancel ? "0.8rem 0.7rem 0.8rem 0" : "")};
  cursor: ${({ cancel }) => (cancel ? "pointer" : "")};
`;

const FieldRow = styled.div`
  display: flex;
  background-color: #fff;
`;

const Input = styled.input.attrs({
  autoComplete: "off",
})`
  font-size: 14px;
  width: 80%;
  width: ${({ dateTime }) => (dateTime ? "80%" : "")};
  padding: 10px;
  border: none;
  outline: none;

  ::placeholder {
    color: #746965;
  }

  &:focus {
    border: none;
  }
`;

const RenderInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  border-radius: 3px;
  padding-right: 0.5rem;
`;

const DateAndTime = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const DateTimeFormInput = styled.input`
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  background-color: white;
  padding: 0.7rem;
  width: 85%;
  font-family: "Poppins";
  color: #484848;
  font-size: 0.85rem;
  &:focus {
    outline: none;
  }
`;

const SubmitRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  justify-content: ${({ edit }) => (edit ? "space-between" : "")};
  margin: 1rem 0;
`;

const SubmitItems = styled.div`
  display: flex;
  width: 50%;
`;

const Button = styled.button`
  width: 20rem;
  height: 2.5rem;
  background: #47bb7f;
  margin-right: 0.5rem;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;

export {
  LandingContainer,
  LHS,
  RHS,
  TopSide,
  BottomSide,
  TaskBox,
  TaskHeader,
  TextSide,
  IconSide,
  TaskBody,
  FormInput,
  P,
  Input,
  RenderInput,
  FormInputDate,
  DateAndTime,
  FormArea,
  FieldRow,
  DateTimeFormInput,
  SubmitRow,
  SubmitItems,
  Button,
};
