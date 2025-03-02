import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedStrings, LOCALIZATION_STRINGS_ENUM } from '../utils/localization';
import { Link } from 'react-router-dom';

const RegisterForm = ({ onSubmit }) => {
  const {getLanguage} = useLanguage();
  const currentLang = getLanguage();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '', password: '', isArchive: false });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">
    <div className="mb-3">
      <label htmlFor="name" className="form-label fw-bolder">
        {getLocalizedStrings(LOCALIZATION_STRINGS_ENUM.name, currentLang)}
      </label>
      <input
        type="name"
        className="form-control"
        id="name"
        name="name"
        placeholder={getLocalizedStrings(LOCALIZATION_STRINGS_ENUM.enterName, currentLang)}
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label fw-bolder">
          {getLocalizedStrings(LOCALIZATION_STRINGS_ENUM.email, currentLang)}
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder={getLocalizedStrings(LOCALIZATION_STRINGS_ENUM.enterEmail, currentLang)}
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label fw-bolder">
          
        {getLocalizedStrings(LOCALIZATION_STRINGS_ENUM.password, currentLang)}
        </label>
        <input
          className="form-control"
          id="password"
          type='password'
          name="password"
          placeholder={getLocalizedStrings(LOCALIZATION_STRINGS_ENUM.enterPassword, currentLang)}
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="text-center mb-5 fw-bold" >
        <Link className="form-check-label" style={{ cursor: 'pointer', textDecoration: 'none', color: '#923cb5' }} to="/login">
          {getLocalizedStrings(LOCALIZATION_STRINGS_ENUM.alreadyHaveAccount, currentLang)}
        </Link>
      </div>

      <button type="submit" className="btn btn-primary w-100" style={{ background: '#923cb5', border: 'none' }}>
        
      {getLocalizedStrings(LOCALIZATION_STRINGS_ENUM.register, currentLang)}
      </button>
    </form>
  );
};

export default RegisterForm;