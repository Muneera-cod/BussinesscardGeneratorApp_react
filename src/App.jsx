
import React, { useState, useRef } from 'react';
import './App.css'
import Form from './Components/Form';
import Display from './Components/Display';
import DownloadButton from './Components/DownloadButton';


function App() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    company: '',
    phone: '',
    email: '',
    photo:[]
  });

  const cardRef = useRef(null);

  const handleUpdate = (updatedFormData) => {
    setFormData(updatedFormData);
  };

  return (
    <div className="app-container">
      <Form onUpdate={handleUpdate} />
      <div className='displayandDownloadbutton'>
      <div ref={cardRef}>
        <Display formData={formData} />
      </div>
      <DownloadButton node={cardRef.current} />
      </div>
     
    </div>
  );
}

export default App;

