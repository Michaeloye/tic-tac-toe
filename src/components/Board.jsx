import { useState, useEffect } from "react";
import Cell from "./Cell";
import VerdictModal from "./Modal/VerdictModal";
import ResetButton from "./Reset";

function Board({ handleWhosTurn, handlePlayer1Score, handlePlayer2Score }) {
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

  // if winnerDeclared is set to true the no cell will be clickable
  const [winnerDeclared, setWinnerDeclared] = useState(false);

  // this is needed to show the winning cells in green those making it unique to each cell
  const [winner, setWinner] = useState({
    winner0: false,
    winner1: false,
    winner2: false,
    winner3: false,
    winner4: false,
    winner5: false,
    winner6: false,
    winner7: false,
    winner8: false,
    winner9: false,
  });

  const [verdict, setVerdict] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleCellClick = (num) => {
    // set a particular cell element based on 'num' argument

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
    handleWhosTurn(isX ? "2" : "1");
  };

  const resetBoard = () => {
    // reset ever state back to normal
    setIsX(true);
    setWinnerDeclared(false);
    setWinner(false);
    setShowO(false);
    setShowX(false);
    setCellsFilled(0);
    setVerdict("");
    handleWhosTurn("1");
  };

  const handleModal = (state) => {
    setShowModal(state);
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
        setWinnerDeclared(true);
        setWinner({
          ...winner,
          [`winner${cell1}`]: true,
          [`winner${cell2}`]: true,
          [`winner${cell3}`]: true,
        });
        setVerdict("Player 2 wins");
        handleModal(true);
        handlePlayer2Score();
      } else if (
        showX[`showX${cell1}`] &&
        showX[`showX${cell2}`] &&
        showX[`showX${cell3}`]
      ) {
        setWinnerDeclared(true);
        setWinner({
          ...winner,
          [`winner${cell1}`]: true,
          [`winner${cell2}`]: true,
          [`winner${cell3}`]: true,
        });

        setVerdict("Player 1 wins");
        handleModal(true);
        handlePlayer1Score();
      }
      // if the all 9 cells are filled and no winning sequence is true return draw
      else if (
        cellsFilled === 9 &&
        !(
          showX[`showX${cell1}`] &&
          showX[`showX${cell2}`] &&
          showX[`showX${cell3}`]
        ) &&
        !(
          showO[`showO${cell1}`] &&
          showO[`showO${cell2}`] &&
          showO[`showO${cell3}`]
        )
      ) {
        setVerdict("Draw");
        handleModal(true);
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
            winner={winner[`winner${num}`]}
            // inorder to prevent calling the onClick function to a Cell that already has an element in it...
            // ...it is necessary to check if a cell already has an element with the use of the ternary operator...
            // if either X or O is an element in the Cell don't pass handleCellClick as an onClick handler
            onClick={() => {
              showX[`showX${num}`] || showO[`showO${num}`] || winnerDeclared
                ? null
                : handleCellClick(num);
            }}
          />
        ))}
      </div>
      <ResetButton onClick={() => resetBoard()} />
      {showModal && <VerdictModal text={verdict} handleClose={handleModal} />}
    </>
  );
}

export default Board;
