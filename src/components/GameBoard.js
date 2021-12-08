import styled from "styled-components";

export const BoardPosition = styled.div`
  width: 620px;
  margin: 0px 30px;
`;

export const BoardRow = styled.div`
  display: flex;
`;

export const StepButtonWrapper = styled.button`
  padding: 5px 8px;
  font-size: 24px;
  text-align: center;
  background: ${(props) => (props.isCurrent ? "#212768" : "white")};
  color: ${(props) => (props.isCurrent ? "white" : "#212768")};
  margin-right: 10px;
  margin-top: 10px;
  border: 1px solid #212768;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s all ease-in;
  &:hover {
    background: #212768;
    color: white;
  }

  &:focus {
    outline: none;
    background: #212768;
    color: white;
  }
`;

export const BoardResult = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 4px;
`;

export const BoardFunction = styled.div`
  display: flex;
  margin: 10px 0px;
`;

export const FunctionButton = styled.div`
  padding: 6px;
  font-size: 24px;
  text-align: center;
  background: rgb(41, 109, 45);
  margin-right: 10px;
  width: 120px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  transition: 0.2s all ease-in;
  &:hover {
    background: rgb(159, 224, 170);
  }
`;

export const BoardStep = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 605px;
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
`;
