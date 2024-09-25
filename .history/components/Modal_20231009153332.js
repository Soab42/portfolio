import React, { useState } from "react";

export default function Modal({ children, status }) {
  const [show, setShow] = useState();

  return (
    <div className="modal" style={{ display: { hidden } }}>
      <div className="modal-content">{children}</div>
    </div>
  );
}
