import React from "react";
import "./Modal.css";
export default function Modal(props) {
  const { handleCloseModal } = props;
  return (
    <div className="modal-overlay">
      <div className="modal">
        {props.children}
        <button onClick={handleCloseModal}>close</button>
      </div>
    </div>
  );
}
