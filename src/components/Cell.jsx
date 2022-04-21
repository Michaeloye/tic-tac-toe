import React from "react";
import { BiCircle } from "react-icons/bi";

function Cell({ isElementX, isElementO, winner, onClick }) {
  return (
    <button
      className={"cell " + winner ? "cell-won" : ""}
      onClick={() => onClick()}
    >
      {/* for X */}
      {isElementO && <BiCircle size={86} color={"white"} />}

      {/* for O */}
      {isElementX && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      )}
    </button>
  );
}

export default Cell;
