import React from 'react';

// Styles
import s from './alert.module.css'

const Alert = ({setDeleteItem, funBlock, setActiveModal}) => {


  const handleBlock = ()=>{
    setActiveModal(true)
    funBlock()
    setDeleteItem({id:'', activeBlock:false})
    
  }


  return(
    <div className = {s.backdropAlert}>
      <div className={s.alertContainer}>
        
        <h3>Are you sure you want to block this user?</h3>
        <div className={s.buttonsBox}>
          <button
            className='btn btn-primary mx-2'
            onClick={handleBlock}
          >
            Yes
          </button>

          <button
            className='btn btn-danger mx-2'
            onClick={()=>setDeleteItem({id:'', activeBlock:false})}
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}
  


export default Alert;