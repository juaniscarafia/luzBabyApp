/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { HeightForm } from "./HeightForm";

interface ModalProps {
  onSubmit: (formData: any) => void;
  onCancel: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onSubmit, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <HeightForm onSubmit={onSubmit} onCancel={onCancel} />
      </div>
    </div>
  );
};