/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

interface formData {
  date: string;
  weight: number;
}

interface WeightFormProps {
  onSubmit: (formData: formData) => void;
  onCancel: () => void;
}

export const WeightForm: React.FC<WeightFormProps> = ({ onSubmit, onCancel }) => {
  const initialFormData = {
    date: '',
    weight: 0
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    const newValue = name === 'weight' ? Number(value) : value;
  
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
      <h2 className="text-center mb-4">Add Weight</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label>Date:</label>
          <input className="form-control timePicker" type="date" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div className="form-group mt-3">
          <label>Weight:</label>
          <div className="input-group mb-3">
            <input type="number" className="form-control" placeholder="Weight" aria-label="weight" aria-describedby="add-weight" name="weight" value={formData.weight} onChange={handleChange} />
            <span className="input-group-text" id="add-weight">kg</span>
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
