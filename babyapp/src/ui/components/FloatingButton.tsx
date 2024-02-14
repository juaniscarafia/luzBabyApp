import React from "react";

interface FloatingButtonProps {
  onClick: () => void;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <button className="btn btn-outline floating-button" onClick={onClick}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
