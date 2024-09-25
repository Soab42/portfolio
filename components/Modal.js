<<<<<<< HEAD
"use client";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

export default function Modal({ children, open, setOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open);
    // Restore scrolling
  }, [open]);
  const closeModal = (e) => {
    setOpen(!open);
    setIsOpen(!open);
  };
  const some = (e) => {};
  return (
    <div
      className={"modal"}
      style={{ display: `${isOpen ? "flex" : "none"}` }}
      onClick={closeModal}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="close"
          onClick={closeModal}
          style={{
            all: "unset",
            display: "flex",
            position: "absolute",
            cursor: "pointer",
            top: -22,
            right: -22,
            padding: "5px 5px",
            background: "rgba(100,250,200,0.49)",
            borderRadius: "5rem",
            color: "black",
            borderBottomLeftRadius: "0",
            zIndex: 100,
            fontSize: "20px",
          }}
        >
          <MdClose />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}
=======
"use client";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

export default function Modal({ children, open, setOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open);
    // Restore scrolling
  }, [open]);
  const closeModal = (e) => {
    setOpen(!open);
    setIsOpen(!open);
  };
  const some = (e) => {};
  return (
    <div
      className={"modal"}
      style={{ display: `${isOpen ? "flex" : "none"}` }}
      onClick={closeModal}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="close"
          onClick={closeModal}
          style={{
            all: "unset",
            display: "flex",
            position: "absolute",
            cursor: "pointer",
            top: -22,
            right: -22,
            padding: "5px 5px",
            background: "rgba(100,250,200,0.49)",
            borderRadius: "5rem",
            color: "black",
            borderBottomLeftRadius: "0",
            zIndex: 100,
            fontSize: "20px",
          }}
        >
          <MdClose />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}
>>>>>>> 41aacb10138a7bc96d479eebc451410c1dd06ab7
