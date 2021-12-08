import React from "react";
import { SquareForm, SquareLine, SquareChess } from "../components/Square.js";

// square components
export default function Square({
  squareData,
  squarePosition,
  handleChessData,
  checkerBoardSize,
}) {
  var chessColor = squareData;

  const handleChessClick = () => {
    handleChessData(squarePosition);
  };

  return (
    <SquareForm onClick={handleChessClick}>
      <SquareChess chessColor={chessColor}></SquareChess>
      <SquareLine
        squarePosition={squarePosition}
        checkerBoardSize={checkerBoardSize}
      ></SquareLine>
    </SquareForm>
  );
}
