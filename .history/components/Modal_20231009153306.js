import React, { useState } from "react";

export default function Modal({ children }) {
  const [show, setShow] = useState();
  function show() {}
  return (
    <div className="modal" style={{ display: { hidden } }}>
      <div className="modal-content">{children}</div>
    </div>
  );
}
