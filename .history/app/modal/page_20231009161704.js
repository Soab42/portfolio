"use client";
import Modal from "@/components/Modal";
import React from "react";

export default function page() {
  const component = <h1>Modal</h1>;
  function openModal() {
    //
  }
  return (
    <div>
      <Modal open={openModal}>{component}</Modal>
      <button onClick={openModal}>Open Modal</button>
    </div>
  );
}
