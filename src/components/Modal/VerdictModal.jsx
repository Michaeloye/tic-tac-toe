import React from "react";
import Backdrop from "../Backdrop";
import { MdOutlineCancel } from "react-icons/md";
import { AiFillTrophy } from "react-icons/ai";

function VerdictModal({ handleClose, text }) {
  return (
    <Backdrop
      onClick={() => {
        handleClose(false);
      }}
    >
      {/* e.stopPropagation is to prevent event bubbling up the Dom */}
      <div className="verdict-modal" onClick={(e) => e.stopPropagation()}>
        <MdOutlineCancel
          className="cancel"
          color="white"
          size={40}
          onClick={() => handleClose(false)}
        />
        <p className="verdict"> {text}</p>
        <AiFillTrophy color={"#d4a010"} size={40} />
      </div>
    </Backdrop>
  );
}

export default VerdictModal;
