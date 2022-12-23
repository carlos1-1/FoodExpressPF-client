import React, { useState } from 'react';


//Libraries
import { useFormik } from "formik";
import validationSchema from "./formValidations.js";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Modal from '../Modal/index.jsx';
import UserForm from './UserForm.jsx';


const EditUser = ({item, getItems}) => {

  const initialValues = item

  const [loading, setLoading] = useState(false);
  const[response, setResponse] = useState('');
  const [activeModal,setActiveModal] = useState(false)

  ///////////////////////////////////////////////ONSUBMIT
  const onSubmit = (e) => {
    setLoading(true);

    axios({
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      url: "user/update/changefields",
      data: values,
    })   
     .then(response => {
      setResponse(response.data.message)
      console.log('response',response.data.message)
      setLoading(false)  
      getItems() 
     })
     .catch(error=>{
      setResponse(error.message)
      setLoading(false)
     });
     
     
  }


    const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const {handleSubmit, handleChange, handleBlur, errors, touched,values} = formik

  const handleClick = () => {
    setActiveModal(true)
  }
  
  return (  
    <div>

      { activeModal
        && 
        <Modal 
          setActiveModal={setActiveModal} 
          loading={loading} 
          response={response} 
        /> 
      }

      <h2 className='mt-3 text-center'>Edit User</h2>

      <UserForm 
        type='Edit'
        errors = {errors}
        touched={touched}
        values = {values}
        handleChange = {handleChange}
        handleBlur = {handleBlur}
        handleClick = {handleClick}
        handleSubmit = {handleSubmit}
      />
  </div>
);
};

export default EditUser;