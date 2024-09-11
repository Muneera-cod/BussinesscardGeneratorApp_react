import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
const Form = (props) => {



  return (
    <div className="form-container">
      <form onSubmit={props.formik.handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:'center',paddingBottom:'10px'}}>
        <fieldset>
        <label>Name:</label>
        <input type="text" name="name" value={props.formik.values.name} onChange={props.formik.handleChange} />
        {props.formik.touched.name && props.formik.errors.name?(<div>{props.formik.errors.name}</div>):null}

        <label>Title:</label>
        <input type="text" name="title" value={props.formik.values.title} onChange={props.formik.handleChange} />

        
        <label>Location:</label>
        <input type="text" name="location" value={props.formik.values.location} onChange={props.formik.handleChange} />

        <label>Phone:</label>
        <input type="text" name="phone" value={props.formik.values.phone} onChange={props.formik.handleChange} />

        <label>Email:</label>
        <input type="email" name="email" value={props.formik.values.email} onChange={props.formik.handleChange} />
        {props.formik.touched.email && props.formik.errors.email?(<div >{props.formik.errors.email}</div>):null}

        <label>Upload Photo</label>
        <input type="file" name="photo" value={props.formik.values.photo} onChange={props.formik.handleChange} />
        </fieldset>
        <button style={{padding:'10px',width:'30%'}} type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
