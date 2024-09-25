"use client";
import React, { useState } from "react";

export default function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // Restore scrolling
  };
  return (
    <div className="modal" style={{ display: `${isOpen ? "flex" : "hidden"}` }}>
      <div className="modal-content">
        <span
          className="close"
          onClick={closeModal}
          style={{ display: "flex", justifyContent: "right" }}
        >
          &times;
        </span>
        <div>{children}</div>
      </div>
    </div>
  );
}
