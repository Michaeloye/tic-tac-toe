import React from "react";
import Score from "./Score";

function Header() {
  return (
    <>
      <br />
      <section className="heading">
        {/* player1 and player2 scores */}
        <Score player={1} score={10} />
        <Score player={2} score={10} />
      </section>
    </>
  );
}

export default Header;
