"use client";
import React, { useState } from "react";

export default function Modal({ children }) {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // Restore scrolling
  };
  return (
    <div className="modal" style={{ display: `${show ? "none" : "hidden"}` }}>
      <span className="close" onClick={closeModal}>
        &times;
      </span>
      <div className="modal-content">{children}</div>
    </div>
  );
}
