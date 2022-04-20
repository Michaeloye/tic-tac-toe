import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
      <p className="turn-mobile">Player 1's Turn</p>
    </div>
  );
}

export default App;
