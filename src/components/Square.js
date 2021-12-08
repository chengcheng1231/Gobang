import styled from "styled-components";

export const SquareForm = styled.div`
  background: rgb(240, 192, 104);
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  width: 34px;
  margin-right: -2px;
  margin-top: -2px;
  padding: 0;
  text-align: center;
  cursor: pointer;
`;

export const SquareLine = styled.div`
    position: relative;

    &:before {
        content: "";
        background: #070707f5;
        width: 1px;
        height: ${(props) =>
          props.squarePosition[0] === props.checkerBoardSize - 1
            ? "17px;"
            : "34px;"}
        top: ${(props) => (props.squarePosition[0] === 0 ? "17px;" : "0px;")}
        position: absolute;
    }

    &:after {
        content: "";
        background: #070707f5;
        height: 1px;
        width: ${(props) =>
          props.squarePosition[1] === props.checkerBoardSize - 1
            ? "17px;"
            : "34px;"}
        left: ${(props) => (props.squarePosition[1] === 0 ? "17px;" : "0px;")}
        top: 17px;
        position: absolute;
    }
`;

export const SquareChess = styled.div`
    width: 25px;
    height: 25px;
    position: absolute;
    margin-left: 4px;
    margin-top: 4px;
    border-radius: 20px;
    z-index: 1;
    border: ${(props) =>
      props.chessColor === "white" ? "black solid 1px;" : "null;"} 
    background: ${(props) => props.chessColor}
`;
