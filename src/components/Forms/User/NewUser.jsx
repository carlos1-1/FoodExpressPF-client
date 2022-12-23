import React, { useState } from 'react';
import axios from 'axios';
import { INITIAL_USER_FORM as initialValues } from '../../../utils/initialObjects'

//Libraries
import { useFormik } from "formik";
import validationSchema from "./formValidations.js";
import UserForm from './UserForm';
import Modal from '../Modal';


const NewUser = () => {

  const [loading, setLoading] = useState(false);
  const[response, setResponse] = useState('');
  const [activeModal,setActiveModal] = useState(false)

  ///////////////////////////////////////////////ONSUBMIT
  const onSubmit = (e) => {
    setLoading(true);

    axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      url: "user/create",
      data: values,
    })   
     .then(response => {
      setResponse(
       `${response.data.created}
       ${response.data.user.email}`
      )
      console.log('response',response)
      setLoading(false)   
     })
     .catch(error=>{
      setResponse(error.message)
      setLoading(false)
     });
     formik.resetForm()
  }


    const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const {handleSubmit, handleChange, handleBlur, errors, touched,values} = formik
  console.log(errors)

  const handleClick = () => {
    setActiveModal(true)
  }

  return (  
    <>
      { activeModal
        && 
        <Modal 
          setActiveModal={setActiveModal} 
          loading={loading} 
          response={response} 
        /> 
      }

      <h2 className='mt-3 text-center'>Create New User</h2>

       <UserForm
        type='Create'
        errors = {errors}
        touched={touched}
        values = {values}
        handleChange = {handleChange}
        handleBlur = {handleBlur}
        handleClick = {handleClick}
        handleSubmit = {handleSubmit}
      />
  </>
);
};

export default NewUser;