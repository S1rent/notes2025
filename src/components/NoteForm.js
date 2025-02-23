import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NoteForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    isArchive: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', description: '', isArchive: false });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
      <div className="mb-3">
        <label htmlFor="title" className="form-label fw-bolder">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label fw-bolder">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          rows="3"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="isArchive"
          name="isArchive"
          checked={formData.isArchive}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="isArchive">
          Archive this note?
        </label>
      </div>

      <button type="submit" className="btn btn-primary w-100" style={{ background: '#923cb5', border: 'none' }}>
        Save Note
      </button>
    </form>
  );
};

export default NoteForm;