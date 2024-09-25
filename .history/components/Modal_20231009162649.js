"use client";
import React, { useState } from "react";

export default function Modal({ children, open }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log("open" + open());
  const closeModal = () => {
    setIsOpen(false);
    console.log(isOpen);
    // document.body.style.overflow = "auto"; // Restore scrolling
  };
  return (
    <div className={"modal"}>
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
