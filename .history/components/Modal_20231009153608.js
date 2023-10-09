import React, { useState } from "react";

export default function Modal({ children }) {
  const [show, setShow] = useState(false);

  return (
    <div className="modal" style={{ display: `${show ? "none" : "hidden"}` }}>
      <div className="modal-content">{children}</div>
    </div>
  );
}
