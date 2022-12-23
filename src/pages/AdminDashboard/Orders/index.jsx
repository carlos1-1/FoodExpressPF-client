import axios from 'axios';
import React, { useEffect, useState } from 'react';

import AdminTable from '../AdminTable';
import NewOrder from '../../../components/Forms/Orders/NewOrder.jsx'
import EditOrder from '../../../components/Forms/Orders/EditOrder'
import OrderFilters from './OrderFilters'

const Orders = () => {
  const cols = ['id','state', 'total' , 'createdAt','coments', 'address']
  const [allOrders, setAllOrders] = useState([])
  const [listToRender, setListToRender] = useState([])
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  console.log('all',allOrders)
  console.log('list',listToRender)

  const getOrders = ()=>{
    axios.get('/orders')
    .then(response=> {
      response.data.map((e)=>e.createdAt = new Date(e.createdAt).toLocaleDateString("en-US"))
      setAllOrders(response.data)
      setListToRender(response.data)
    })
  }

  const deleteOrder = (id)=>{
    setLoading(true)
    axios.delete(`/orders/${id}`)
    .then(response=> {
      console.log(response); 
      setResponse(response.data.message)
      setLoading(false)
      getOrders()
    })
    .catch(error=>{
      console.log(error)
      setResponse(response.data.message)
      setLoading(false)
    })
  }

  useEffect(()=>{
    getOrders()
  },[])
  
  return (
    <div>   
      <OrderFilters
        setListToRender={setListToRender}
        allOrders={allOrders}
      /> 

      <AdminTable 
        name='Order'
        data={listToRender}
        form={<NewOrder />}
        formEdit={<EditOrder />}
        cols={cols}
        funDelete={deleteOrder}
        loading={loading}
        response={response}
        get={getOrders}

      />
    </div>
  );
};

export default Orders;