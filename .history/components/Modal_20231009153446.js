import React, { useState } from "react";

export default function Modal({ children, status }) {
  const [show, setShow] = useState(status);

  return (
    <div className="modal" style={{ display: {show ? 'none': 'hidden' } }}>
      <div className="modal-content">{children}</div>
    </div>
  );
}
