
import React, { useState, useRef } from 'react';
import './App.css'
import Form from './Components/Form';
import Display from './Components/Display';
import Navbar from './Components/Navbar';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import DownloadButton from './Components/DownloadButton';
import { useFormik } from 'formik';

function App() {
  const formik=useFormik({

    initialValues:{
      name: '',
      title: '',
      location:'',
      phone: '',
      email: '',
      photo:[]
    },
    validate:values=>{
       const errors={};
       if (!values.email){
         errors.email="Required"
      //    toast.error("Email is required", {
      //     position: toast.POSITION.TOP_RIGHT
      // });
       }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email="Invalid email"
        toast.error("Invalid email format", {
          position: toast.POSITION.TOP_RIGHT
      });
       }
       if (!values.name) {
        errors.name = 'Required';
      }
      return errors
    },
    onSubmit: values=>{
      // alert(JSON.stringify(values,null,2))
      toast.success("Form submitted successfully")
    }
  }
  )



  return (
    <div className="app-container">
      <Navbar/>
      <div className='innerbox'>
          <div className='displayandDownloadbutton'>
          <div>
            <Display formik={formik} />
          </div>
          <ToastContainer/>
          {/* <DownloadButton node={cardRef.current} /> */}
          </div>
     
      <Form formik={formik} />
      </div>
     
    </div>
  );
}

export default App;

