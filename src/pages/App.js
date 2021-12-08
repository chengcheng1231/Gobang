import React from "react";
import "../App.css";
import { GameIntro, Game, GameTitle, GameDescription } from "../components/App";
import { GameBoard } from "./GameBoard";

function App() {
  return (
    <Game>
      <GameIntro>
        <GameTitle>Gobang</GameTitle>
        <GameDescription>
          Gobang is an abstract strategy board game. It is traditionally played
          with Go pieces (black and white stones) on a Go board. Because pieces
          are typically not moved or removed from the board, Gobang may also be
          played as a paper-and-pencil game. The game is known in several
          countries under different names. Players alternate turns placing a
          stone of their color on an empty intersection. The winner is the first
          player to form an unbroken chain of five stones horizontally,
          vertically, or diagonally.
        </GameDescription>
      </GameIntro>
      <GameBoard />
    </Game>
  );
}

export default App;
