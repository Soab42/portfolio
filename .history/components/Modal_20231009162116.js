"use client";
import React, { useState } from "react";

export default function Modal({ children, open }) {
  const [isOpen, setIsOpen] = useState(open);
  // console.log("open" + isOpen);
  const closeModal = () => {
    setIsOpen(false);
    console.log(isOpen);
    document.body.style.overflow = "auto"; // Restore scrolling
  };
  return (
    <div className="modal" style={{ display: `${isOpen ? "none" : "hidden"}` }}>
      <div className="modal-content">
        <butto
          className="close"
          onClick={closeModal}
          style={{ display: "flex", justifyContent: "right" }}
        >
          &times;
        </butto>
        {children}
      </div>
    </div>
  );
}
