/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

interface formData {
  date: string;
  height: number;
}

interface HeightFormProps {
  onSubmit: (formData: formData) => void;
  onCancel: () => void;
}

export const HeightForm: React.FC<HeightFormProps> = ({ onSubmit, onCancel }) => {
  const initialFormData = {
    date: '',
    height: 0
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    const newValue = name === 'height' ? Number(value) : value;
  
    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    onCancel();
  };

  return (
    <div className="form-container">
      <h2 className="text-center mb-4">Add Height</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label>Date:</label>
          <input className="form-control timePicker" type="date" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div className="form-group mt-3">
          <label>Height:</label>
          <div className="input-group mb-3">
            <input type="number" className="form-control" placeholder="Height" aria-label="height" aria-describedby="add-height" name="height" value={formData.height} onChange={handleChange} />
            <span className="input-group-text" id="add-height">cm</span>
          </div>
        </div>
        <div className="form-group mt-3 text-center">
          <button type="submit" className="btn btn-form">Add</button>
          <button type="button" className="btn btn-form" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};
