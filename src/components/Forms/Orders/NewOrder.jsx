import React, { useState } from 'react';
import { INITIAL_ORDER_FORM as initialValues } from '../../../utils/initialObjects'

//Libraries
import { useFormik } from "formik";
import validationSchema from "./formValidations";
import Modal from '../Modal';
import OrderForm from './OrderForm';
import axios from "axios";


const NewOrder = ({saludo}) => {

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
      url: "/orders",
      data: values,
    })   
     .then(response => {
      setResponse(
        `${response.data.created} 
        ${response.data.user.email}`)

      console.log('response',response)
      setLoading(false)    
     })
     .catch(error=>{
      console.log('error',error)
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
      <h2 className='mt-3 text-center'>Create a New Order {saludo}</h2>
      { activeModal
        && 
        <Modal 
          setActiveModal={setActiveModal} 
          loading={loading} 
          response={response} 
        /> 
      }

      <OrderForm 
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

export default NewOrder;