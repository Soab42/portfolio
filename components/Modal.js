"use client";
import React, { useEffect, useState } from "react";

export default function Modal({ children, open, setOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  const closeModal = () => {
    setOpen(!open);
    setIsOpen(!open);
    document.body.style.overflow = "auto"; // Restore scrolling
  };
  return (
    <div className={"modal"} style={{ display: `${isOpen ? "flex" : "none"}` }}>
      <div className="modal-content">
        <button
          className="close"
          onClick={closeModal}
          style={{
            all: "unset",
            display: "block",
            float: "right",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
