import React from "react";
import Score from "./Score";

function Header({ whosTurn }) {
  return (
    <>
      <br />
      <section className="header">
        {/* player1 and player2 scores */}
        <Score player={1} score={10} />
        <p className="turn-desktop">
          Player {whosTurn}'s <span>Turn</span>
        </p>
        <Score player={2} score={10} />
      </section>
    </>
  );
}

export default Header;
