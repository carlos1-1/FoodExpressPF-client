import React from 'react';
import s from './orderFilters.module.css'
import AdminTables from '../../numberTables/AdminTable';
import '../../numberTables/AdminTable'

const OrderFilters =({setListToRender,allOrders}) => {
  console.log('all',allOrders)

  const handleChange =(e)=>{
    e.preventDefault()
   let filter=[]

   if(e.target.value=='')return
   else if(e.target.value==='all'){
     setListToRender([...allOrders])
     console.log('allall', allOrders)}
   else{
     filter= [...allOrders].filter(order=>order.state===e.target.value)
     console.log('filter',filter)
     setListToRender(filter)
    }
  }

  return (
    <div className='containerFilter'>

<AdminTables/>

      <form className={s.filterContainer}>
        <select 
         name="filterStatus"
         onClick={handleChange}
         className={s.select}
        >
          <option
             value=''            
          >Filter by State</option>

          <option 
            value="all"
          >
            All
          </option>

          <option 
            value="inProcces"
            >
            In Process
          </option>

          <option 
            value="onTravel"
            >
            On Travel
          </option>

          <option 
            value="done"
            >
            Done
          </option>

        </select>
      </form>
            </div>
  );
};

export default OrderFilters;