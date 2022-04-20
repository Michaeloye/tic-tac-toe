import React from "react";
import { BiCircle } from "react-icons/bi";

function Cell() {
  return (
    <button class="cell">
      <BiCircle size={86} color={"white"} />
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> */}
    </button>
  );
}

export default Cell;
