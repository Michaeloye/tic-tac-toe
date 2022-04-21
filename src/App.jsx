import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";

function App() {
  const [whosTurn, setWhosTurn] = useState("1");
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const handleWhosTurn = (player) => {
    setWhosTurn(player);
  };
  const handlePlayer1Score = () =>
    setPlayer1Score((prevState) => prevState + 1);
  const handlePlayer2Score = () =>
    setPlayer2Score((prevState) => prevState + 1);

  return (
    <div className="App">
      <Header
        whosTurn={whosTurn}
        player1Score={player1Score}
        player2Score={player2Score}
      />
      <Board
        handleWhosTurn={handleWhosTurn}
        handlePlayer1Score={handlePlayer1Score}
        handlePlayer2Score={handlePlayer2Score}
      />
      <p className="turn-mobile">Player {whosTurn}'s Turn</p>
      <footer className="footer">
        {" "}
        Made by <a href="https://github.com/Michaeloye">Michael Oyebadejo</a>
      </footer>
    </div>
  );
}

export default App;
