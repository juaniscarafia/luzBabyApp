/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

interface formData {
  date: string;
  time: string;
  measure: number;
  idmilk: number;
}

interface MeasureFormProps {
  onSubmit: (formData: formData) => void;
  onCancel: () => void;
}

export const MeasureForm: React.FC<MeasureFormProps> = ({ onSubmit, onCancel }) => {
  const initialFormData = {
    date: '',
    time: '',
    measure: 0,
    idmilk: 0
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    const newValue = name === 'measure' || name === 'idmilk' ? Number(value) : value;
  
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
      <h2 className="text-center mb-4">Add Measure Milk</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label>Date:</label>
          <input className="form-control timePicker" type="date" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div className="form-group mt-3">
          <label>Time:</label>
          <input className="form-control" type="time" name="time" value={formData.time} onChange={handleChange} />
        </div>
        <div className="form-group mt-3">
          <label>Measure:</label>
          <div className="input-group mb-3">
            <input type="number" className="form-control" placeholder="Measure" aria-label="measure" aria-describedby="add-measure" name="measure" value={formData.measure} onChange={handleChange} />
            <span className="input-group-text" id="add-measure">ml</span>
          </div>
        </div>
        <div className="form-group mt-3">
          <label>Milk:</label>
          <select className="form-select" aria-label="Select milk" value={formData.idmilk} name="idmilk" onChange={handleChange}>
            <option value="">Select milk</option>
            <option value="1">Nutrilon ProFuturo</option>
            <option value="2">Nutrilon HA</option>
            <option value="3">Sancor Bebé Advanced 1</option>
          </select>
        </div>
        <div className="form-group mt-3 text-center">
          <button type="submit" className="btn btn-form">Add</button>
          <button type="button" className="btn btn-form" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};
