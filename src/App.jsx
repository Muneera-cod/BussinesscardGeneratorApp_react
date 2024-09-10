
import React, { useState, useRef } from 'react';
import './App.css'
import Form from './Components/Form';
import Display from './Components/Display';
import Navbar from './Components/Navbar';
// import DownloadButton from './Components/DownloadButton';


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
      <Navbar/>
      <div className='innerbox'>
          <div className='displayandDownloadbutton'>
          <div ref={cardRef}>
            <Display formData={formData} />
          </div>
          {/* <DownloadButton node={cardRef.current} /> */}
          </div>
     
      <Form onUpdate={handleUpdate} />
      </div>
     
    </div>
  );
}

export default App;

