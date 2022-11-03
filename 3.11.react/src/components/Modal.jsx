import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
export default function Modal(props) {
  const { handleCloseModal, children } = props;
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        {children}
        <button onClick={handleCloseModal}>close</button>
      </div>
    </div>,
    document.body
  );
}
