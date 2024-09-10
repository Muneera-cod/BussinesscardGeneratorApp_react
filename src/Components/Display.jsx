
import React from 'react';
import "./Display.css"
import { IconPhoneFilled,IconLocationFilled,IconMail } from '@tabler/icons-react';
import { useRef } from 'react';
import generatePDF from 'react-to-pdf';
const Display = ({ formData }) => {
  const targetRef = useRef();
  return (<>
    <div className="card-preview" ref={targetRef}>
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
     
    </div><button onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})} style={{marginTop:'5%'}}>Download PDF</button>
         
    </>
  );
};

export default Display
