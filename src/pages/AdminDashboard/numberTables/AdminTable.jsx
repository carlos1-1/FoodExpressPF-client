import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {Toaster, toast} from "react-hot-toast";
import React from "react";
import '../numberTables/AdminTable.css'
import getTables, { putTables } from '../../../redux/actions'


export default function AdminTables(){
    const [input, setInput] = useState({}) 
    const dispatch = useDispatch()
    const numberTables = useSelector((state) => state.tables);
    

    useEffect(()=>{
        dispatch(getTables())
    },[dispatch])

    let tables = numberTables.capacity


console.log(tables, 'tables')



function handleSubmit(e) {
    e.preventDefault();
    console.log(input, 'form');
    dispatch(putTables(input));    
    toast.success("numberTables modified!!");
    setInput({
        capacity: '',
    });
    location.reload()
      }
      
      function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value, //name es lo que se le va pasando              
    });    
    console.log(input);
  }


 

    return(
        <div className="contTables">
            <form onSubmit={(e) => handleSubmit(e)}>
            <Toaster />
            <h3 className="cant">Tables available:   {numberTables.capacity}</h3>            
                <input
                className="iNum"
                defaultValue={numberTables.capacity}
                type='number'
                max= '20'
                min= '1'
                name="capacity"
                onChange={(e) => handleChange(e)}/>         
                <button className="btn12">Save</button>
            </form>
            
    </div>
    )
}