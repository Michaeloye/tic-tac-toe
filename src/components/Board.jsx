import React from "react";
import Cell from "./Cell";

function Board() {
  return (
    <div className="board">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(() => (
        <Cell />
      ))}
    </div>
  );
}

export default Board;
