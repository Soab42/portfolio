import Modal from "@/components/Modal";
import React from "react";

export default function page() {
  const component = <h1>Modal</h1>;
  return (
    <div>
      <Modal>{component}</Modal>
    </div>
  );
}
