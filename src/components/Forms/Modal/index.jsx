import React from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

// Styles
import s from './modal.module.css'

const Modal = ({ setActiveModal, loading, response }) => {

  const history = useHistory();

  const handleClick = (e)=>{
    const name = e.target.name
    console.log(name)
    if(name == 'home') history.replace('/home')
    else if(name == 'admin') history.replace('/admin')
    else if(name == 'close') setActiveModal(false);
    
  }

  return (
    <div className={s.modalBackdrop}>
      <div className={s.modalContainer}>
        <div className="modal-content">
          <div className="modal-header">
            {loading? 
              <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
              :<div>
                <h4 className="modal-title mb-3">{response}</h4>
              </div>    
            }
          </div>

            <div className="modal-footer">

            <button 
              name='home'
              type="button" 
              className="btn btn-primary mx-1" 
              onClick={handleClick}
            >
              Go Home
            </button>

            <button 
              name='admin'
              type="button" 
              className="btn btn-secondary mx-1" 
              onClick={handleClick}
            >
              Back to Dashboard
            </button>

            <button 
              name='close'
              type="button" 
              className="btn btn-danger mx-1" 
              onClick={handleClick}
            >
              Close
            </button>
          </div>
        </div>      
      </div>
   </div>
  );
};

export default Modal;