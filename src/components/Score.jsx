import React from "react";

function Score({ player, score }) {
  return (
    <div className="score-board">
      <p className="score">Player {player}</p>
      <p className="number">{score}</p>
    </div>
  );
}

export default Score;
