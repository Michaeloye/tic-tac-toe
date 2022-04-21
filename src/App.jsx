import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";

function App() {
  const [whosTurn, setWhosTurn] = useState("1");

  const handleWhosTurn = (player) => {
    setWhosTurn(player);
  };
  return (
    <div className="App">
      <Header whosTurn={whosTurn} />
      <Board handleWhosTurn={handleWhosTurn} />
      <p className="turn-mobile">Player {whosTurn}'s Turn</p>
    </div>
  );
}

export default App;
