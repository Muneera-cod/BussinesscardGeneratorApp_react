
import React from 'react';
import "./Display.css"
import { IconPhoneFilled,IconLocationFilled,IconMail } from '@tabler/icons-react';
import { useRef } from 'react';
import generatePDF from 'react-to-pdf';

const Display = (props) => {
  const targetRef = useRef();
  return (<>
    <div className="card-preview" ref={targetRef}>
      <div style={{padding:'5%'}}>
      <img src={props.formik.values.photo}></img>
     
      </div>
     
      <div className='details'>
        <div className='details1'>
          <h1>{props.formik.values.name || 'Name'}</h1>
          <p>{props.formik.values.title || 'Job Title'}</p>
        </div>
      
        <div className='details2'>
          
          <div className='detail2In'><IconLocationFilled color='white'/><p>{props.formik.values.location || 'Location'}</p></div>
          <div  className='detail2In'><IconPhoneFilled color='white'/><p>{props.formik.values.phone || 'Phone Number'}</p></div>
           <div  className='detail2In'><IconMail color='white'/><p>{props.formik.values.email || 'Email Address'}</p></div>
        </div>
          
      </div>
     
    </div><button onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})} style={{marginTop:'5%'}}>Download PDF</button>
         
    </>
  );
};

export default Display
