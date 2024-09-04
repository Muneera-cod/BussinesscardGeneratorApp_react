
import React from 'react';
import "./Display.css"
import { IconPhoneFilled,IconLocationFilled,IconMail } from '@tabler/icons-react';
const Display = ({ formData }) => {
  return (
    <div className="card-preview">
      <div style={{padding:'5%'}}>
      <img src={formData.photo}></img>
     
      </div>
     
      <div className='details'>
        <div className='details1'>
          <h1>{formData.name || 'Name'}</h1>
          <p>{formData.title || 'Job Title'}</p>
        </div>
      
        <div className='details2'>
          
          <div className='detail2In'><IconLocationFilled color='white'/><p>{formData.location || 'Location'}</p></div>
          <div  className='detail2In'><IconPhoneFilled color='white'/><p>{formData.phone || 'Phone Number'}</p></div>
           <div  className='detail2In'><IconMail color='white'/><p>{formData.email || 'Email Address'}</p></div>
        </div>
          
      </div>
     
    </div>
  );
};

export default Display
