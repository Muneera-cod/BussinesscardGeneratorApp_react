
import React, { useState } from 'react';

const Form = ({ onUpdate }) => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    location:'',
    phone: '',
    email: '',
    photo:[]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    onUpdate({ ...formData, [name]: value });
  };

  return (
    <div className="form-container">
      <form>
        <fieldset>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />

        
        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} />

        <label>Phone:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>Upload Photo</label>
        <input type="file" name="photo" value={formData.photo} onChange={handleChange} />
        </fieldset>
        
      </form>
    </div>
  );
};

export default Form;
