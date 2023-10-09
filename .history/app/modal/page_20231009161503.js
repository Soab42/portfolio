import Modal from "@/components/Modal";
import React from "react";

export default function page() {
  const component = <h1>Modal</h1>;
  function openModal() {
    //
  }
  return (
    <div>
      <Modal>{component}</Modal>
      <button onClick={""}>Open Modal</button>
    </div>
  );
}
