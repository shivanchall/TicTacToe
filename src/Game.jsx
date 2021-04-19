import React, { useEffect, useState } from "react";
import Square from "./Square";

const initialState = ["", "", "", "", "", "", "", "", ""];

function Game() {
  const [gameState, setGameState] = useState(initialState);
  const [isXChance, setXChance] = useState(true);

  function handleClick(index) {
    let strings = Array.from(gameState);
    strings[index] = isXChance ? "X" : "O";
    setGameState(strings);
    setXChance(!isXChance);
  }
  function clear() {
    setGameState(initialState);
    setXChance(true);
  }
  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      alert(`${winner} won the game!!`);
      clear();
    }
  }, [gameState]);

  function checkWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0.3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < 8; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  }

  return (
    <div>
      <div className="row-square">
        <Square onClick={() => handleClick(0)} state={gameState[0]} />
        <Square onClick={() => handleClick(1)} state={gameState[1]} />
        <Square onClick={() => handleClick(2)} state={gameState[2]} />
      </div>
      <div className="row-square">
        <Square onClick={() => handleClick(3)} state={gameState[3]} />
        <Square onClick={() => handleClick(4)} state={gameState[4]} />
        <Square onClick={() => handleClick(5)} state={gameState[5]} />
      </div>
      <div className="row-square">
        <Square onClick={() => handleClick(6)} state={gameState[6]} />
        <Square onClick={() => handleClick(7)} state={gameState[7]} />
        <Square onClick={() => handleClick(8)} state={gameState[8]} />
      </div>

      <button className="clear" onClick={clear}>
        CLEAR
      </button>
    </div>
  );
}
export default Game;
