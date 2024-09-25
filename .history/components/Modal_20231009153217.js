import React from "react";

export default function Modal({ children }) {
  return (
    <div className="modal" style={{ display: { hidden } }}>
      <div className="modal-content">{children}</div>
    </div>
  );
}
