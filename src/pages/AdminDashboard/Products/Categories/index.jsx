import React, { useEffect, useState } from 'react';
import axios from 'axios'
import DietTypes from '../../../../components/DietTypes';

import s from './categories.module.css'
import AlertDeleteCategory from '../../AdminTable/Alert/AlertDeleteCategory';
import Modal from '../../../../components/Forms/Modal';

const Categories = () => {

  const [managment, setManagment] = useState(false)
  const [input, setInput] = useState('')
  const [listOfItems, setList] = useState([])
  const [active,setActive] = useState([])
  const [activeAlert, setActiveAlert] = useState(false)
  const [activeModal, setActiveModal] = useState(false)
  const [ loading, setLoading] = useState(false)
  const [response, setResponse] = useState('')

  const getCategories = ()=>{
    axios.get("/types")
    .then(response=>{
      console.log(response.data)
      setList(response.data)
    })
  }

  useEffect(()=>{
    getCategories()
  },[])

  const handleClick = (e)=>{
    e.preventDefault()
    setManagment(!managment)
  }

  const handleChange = (e) =>{
    setInput(e.target.value)
  }

  const handleCreate = (e)=>{
    e.preventDefault()
    axios.post(`/types/${input}`)
    .then(()=>{
      setInput('')
      getCategories()
    })
  }

  const deleteCategories = ()=>{
    setLoading(true);

    axios({
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      url: `/types/delete`,
      data: active,
    })   
     .then(response => {
      setResponse(response.data.message)
      console.log('response',response)
      setLoading(false) 
      getCategories()   
     })
     .catch(error=>{
      console.log('error',error)
      setResponse(error.response.data.error)
      setLoading(false)
     });
     
  }

  return (
    <>
    {
      activeAlert && 
      <AlertDeleteCategory 
        setActive={setActive} 
        funDelete={deleteCategories}
        setActiveModal={setActiveModal}
        setActiveAlert={setActiveAlert}
      />
    }

    { activeModal
        && 
        <Modal 
          setActiveModal={setActiveModal} 
          loading={loading} 
          response={response} 
        /> 
      }

    <div className={s.container}>
      <h2>Category Managment</h2>
      <div className={s.buttonBox}>
        <button
         name='new'
          className='btn btn-primary mx-2'
          onClick={handleClick}
        >
          New
        </button>

        <button
          className='btn btn-danger mx-2'
          onClick={()=>setActiveAlert(true)}
        >
          Delete
        </button>

        <div className={s.editBox}>
         {
          managment && 
          <form className='d-flex'>
            <input 
              type="text"
              name='name'
              className='form-control w-50'
              placeholder="Enter Category's name" 
              value={input}
              onChange={handleChange}
            />
            <button 
              type='submit'
              className='btn btn-primary'
              onClick={handleCreate}
            >
              Create
            </button>
          </form>
         }
        
        </div>
      </div>
      
      <h3>Current Categories</h3>
      <DietTypes listOfItems={listOfItems} active={active} setActive={setActive} />
      
    </div>
    </>
  );
};

export default Categories;