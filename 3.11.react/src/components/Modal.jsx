import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
export default function Modal(props) {
  const { handleCloseModal, children, isSalesModal } = props;
  const styles = {
    border: isSalesModal ? "2px solid gold" : "none",
  };
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal" style={styles}>
        {children}
        <button onClick={handleCloseModal}>close</button>
      </div>
    </div>,
    document.body
  );
}
