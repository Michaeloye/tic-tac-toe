import { useState, useEffect, useRef } from "react";
import Cell from "./Cell";
import ResetButton from "./Reset";

function Board() {
  const winningSequences = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // the below state is to alternate between X and O taking X as the starting element
  const [isX, setIsX] = useState(true);
  // tracking the number of cells filled helps to determine when to declare 'Draw'
  const [cellsFilled, setCellsFilled] = useState(0);

  // it was observed that with only one setState for each cell on rerender all cells will have the same
  // element either 'X' or 'O' because the state has been set so when the map function reruns it takes in
  // the state that has already been set thus all Cells having the same element. This therefore requires a
  // need for each Cell to have its individual state and it can't be in the Cell element because
  // it is important to easily keep track of all elements on each Cell thus that is why the ShowO and
  // showX state are objects each Oject value representing each Cell

  const [showO, setShowO] = useState({
    showO0: false,
    showO1: false,
    showO2: false,
    showO3: false,
    showO4: false,
    showO5: false,
    showO6: false,
    showO7: false,
    showO8: false,
    showO9: false,
  });
  // const [showX, setShowX] = useState(false);

  const [showX, setShowX] = useState({
    showX0: false,
    showX1: false,
    showX2: false,
    showX3: false,
    showX4: false,
    showX5: false,
    showX6: false,
    showX7: false,
    showX8: false,
    showX9: false,
  });

  const handleCellClick = (num) => {
    if (isX && !showX[`showX${num}`]) {
      setShowX({
        ...showX,
        [`showX${num}`]: true,
      });
      setShowO({
        ...showO,
        [`showO${num}`]: false,
      });
    } else {
      setShowO({
        ...showO,
        [`showO${num}`]: true,
      });
      setShowX({
        ...showX,
        [`showX${num}`]: false,
      });
    }
    setIsX((prevState) => !prevState);
    setCellsFilled((prevState) => prevState + 1);
  };

  const resetBoard = () => {
    setShowO(false);
    setShowX(false);
    setIsX(true);
    setCellsFilled(0);
  };

  useEffect(() => {
    winningSequences.forEach((winningCombos) => {
      let cell1 = winningCombos[0];
      let cell2 = winningCombos[1];
      let cell3 = winningCombos[2];
      if (
        showO[`showO${cell1}`] &&
        showO[`showO${cell2}`] &&
        showO[`showO${cell3}`]
      ) {
        console.log("player 2 wins");
      } else if (
        showX[`showX${cell1}`] &&
        showX[`showX${cell2}`] &&
        showX[`showX${cell3}`]
      ) {
        console.log("player 1 wins");
      } else if (cellsFilled === 9) {
        console.log("Draw");
      }
    });
  }, [isX]);
  return (
    <>
      <div className="board">
        {/* instead of hardcording 9 Cell components it is cleaner to user map */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <Cell
            key={num}
            isElementX={showX[`showX${num}`]}
            isElementO={showO[`showO${num}`]}
            // inorder to prevent calling the onClick function to a Cell that already has an element in it...
            // ...it is necessary to check if a cell already has an element with the use of the ternary operator...
            // if either X or O is an element in the Cell don't pass handleCellClick as an onClick handler
            onClick={() => {
              showX[`showX${num}`] || showO[`showO${num}`]
                ? null
                : handleCellClick(num);
            }}
          />
        ))}
      </div>
      <ResetButton onClick={() => resetBoard()} />
    </>
  );
}

export default Board;
