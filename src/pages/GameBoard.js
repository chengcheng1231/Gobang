import React from "react";
import { useState } from "react";
import Square from "./Square";
import "../App.css";
import {
  BoardPosition,
  BoardRow,
  StepButtonWrapper,
  BoardResult,
  BoardFunction,
  FunctionButton,
  BoardStep,
} from "../components/GameBoard";
import { calculateWinner, handleShare } from "../utils";

// board components
export function GameBoard() {
  // 設定棋盤各個十字的資料
  const [boardData, setBoardData] = useState(
    Array(19).fill(Array(19).fill(null))
  ); //設定19X19 的棋盤資料
  const [stepNumber, setStepNumber] = useState(0); // 設定黑棋先下
  const [boardRecords, setBoardRecords] = useState([
    Array(19).fill(Array(19).fill(null)),
  ]); //紀錄下棋過程
  const [gameResult, setGameResult] = useState(false); // 設定每次下棋的結果
  const nextPlayer = stepNumber % 2 !== 1 ? "black" : "white";
  const winnerPlayer = stepNumber % 2 === 1 ? "black" : "white";
  const gameResultText = gameResult
    ? `Winner is ${winnerPlayer} `
    : ` Next player is: ${nextPlayer}`;

  //產生棋盤
  const checkerBoardSize = 19;
  function creatCheckerBoard() {
    let checkerBoardAll = [];
    for (let i = 0; i <= checkerBoardSize - 1; i++) {
      let checkerBoardRow = [];
      for (let j = 0; j <= checkerBoardSize - 1; j++) {
        //將 19 個格子資料裝進 checkerBoardRow
        checkerBoardRow.push(
          <Square
            key={[i, j]}
            squarePosition={[i, j]}
            squareData={boardData[i][j]}
            handleChessData={handleChessData}
            checkerBoardSize={checkerBoardSize}
          />
        );
      }
      // 將 checkerBoardRow 裝進 div tag
      checkerBoardAll.push(<BoardRow key={i}>{checkerBoardRow}</BoardRow>);
    }

    return checkerBoardAll;
  }

  //處理格子的點擊事件 // 這部分照作業提示來做的
  const handleChessData = (squarePosition) => {
    const currentHistory = boardRecords.slice(0, stepNumber + 1);
    const newBoardData = JSON.parse(
      JSON.stringify(currentHistory[currentHistory.length - 1])
    );

    if (gameResult || newBoardData[squarePosition[0]][squarePosition[1]])
      return; //如果結果開頭是 W 或是該格子有資料則回傳
    const chessColor = stepNumber % 2 !== 1 ? "black" : "white";
    newBoardData[squarePosition[0]][squarePosition[1]] = chessColor;
    setBoardData(newBoardData);
    setBoardRecords([...currentHistory, newBoardData]); //紀錄棋盤
    setStepNumber(stepNumber + 1);
    //開始判斷輸贏
    if (calculateWinner(newBoardData, squarePosition, chessColor)) {
      setGameResult(true);
    }
  };

  // 設定點擊 Reset 棋盤
  const handleReset = () => {
    setBoardData(Array(19).fill(Array(19).fill(null)));
    setGameResult(null); //True 設定黑棋先下
    setBoardRecords([Array(19).fill(Array(19).fill(null))]);
    setStepNumber(0);
  };

  // 設定點擊上一步棋盤
  const handleBack = () => {
    if (stepNumber > 0) {
      setStepNumber(stepNumber - 1);
      setBoardData(boardRecords[stepNumber - 1]);
    }
  };

  // 設定點擊下一步棋盤
  const handleForward = () => {
    if (stepNumber < boardRecords.length - 1) {
      setStepNumber(stepNumber + 1);
      setBoardData(boardRecords[stepNumber + 1]);
    }
  };

  //處理點擊某一步棋盤
  const handleStep = (index) => {
    setBoardData(boardRecords[index]);
    setStepNumber(index);
    if (index + 1 !== boardRecords.length) {
      setGameResult(null);
    }
  };

  //設定點擊某一步棋盤
  const StepButton = ({ index, handleStep, isCurrent }) => {
    var children = `${index + 1}`;
    const handleClickStep = () => {
      handleStep(index);
    };
    return (
      <StepButtonWrapper isCurrent={isCurrent} onClick={handleClickStep}>
        {children}
      </StepButtonWrapper>
    );
  };

  // 回傳 board components 結果
  return (
    <BoardPosition id="canva">
      <BoardResult>{gameResultText}</BoardResult>
      <BoardFunction>
        <FunctionButton onClick={handleBack}>Back</FunctionButton>
        <FunctionButton onClick={handleForward}>Forward</FunctionButton>
        <FunctionButton onClick={handleShare}>Share</FunctionButton>
        <FunctionButton onClick={handleReset}>Reset</FunctionButton>
      </BoardFunction>
      {creatCheckerBoard()}
      <BoardStep>Steps：</BoardStep>
      {boardRecords.map((record, index) => (
        <StepButton
          key={index}
          index={index}
          handleStep={handleStep}
          isCurrent={index === stepNumber}
        />
      ))}
    </BoardPosition>
  );
}
