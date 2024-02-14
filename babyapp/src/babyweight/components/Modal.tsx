/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { WeightForm } from "./WeightForm";

interface ModalProps {
  onSubmit: (formData: any) => void;
  onCancel: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onSubmit, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <WeightForm onSubmit={onSubmit} onCancel={onCancel} />
      </div>
    </div>
  );
};