import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { filterDietType } from 'redux/actions';
import axios from 'axios'

//STYLES
import s from './dietTypes.module.css'

const DietTypes = ({ listOfItems, active, setActive}) => {


    const handleOnClick = (e)=>{
        e.preventDefault()
        const name = e.target.name
        if(active){
        const includes =  active.includes(name)
        if(!includes) setActive ([...active,name])
        else setActive([...active].filter(e=>e!=name))
        }
    }

    return (
        <div>
            
            {listOfItems &&
                listOfItems.map((e,idx)=>(
                    <button 
                        className={active?.includes(e.name)?s.active:s.button} 
                        name={e.name} 
                        onClick={handleOnClick} 
                        key={idx}>
                        {e.name}
                    </button>
                ))
            }
            
        </div>
    );
};

export default DietTypes;