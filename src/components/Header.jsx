import React from "react";
import Score from "./Score";

function Header({ whosTurn, player1Score, player2Score }) {
  return (
    <>
      <br />
      <section className="header">
        {/* player1 and player2 scores */}
        <Score player={1} score={player1Score} />
        <p className="turn-desktop">
          Player {whosTurn}'s <span>Turn</span>
        </p>
        <Score player={2} score={player2Score} />
      </section>
    </>
  );
}

export default Header;
