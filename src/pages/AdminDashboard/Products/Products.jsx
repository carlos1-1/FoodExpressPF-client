import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlates } from '../../../redux/actions';
import ProductsForm from '../../../components/Forms/Product/NewProduct' ;
import AdminTable from '../AdminTable';
import EditProduct from '../../../components/Forms/Product/EditProduct';
import Categories from './Categories';

import s from './products.module.css'

const Products = () => {
  const statePlates = useSelector((state) => state.plates);
  const [allPlates, setAllPlates] = useState([])
  const dispatch = useDispatch()
  console.log(statePlates)

  const deleteProducts = (id)=>{
    axios.delete(`/foods/${id}`)
    .then(response=> {console.log(response.data),dispatch(getPlates()) })
    .catch(error=>console.log(error))
  }

  useEffect(()=>{
    if(allPlates.length===0)dispatch(getPlates())
    setAllPlates(statePlates)
  },[statePlates])

  const cols = ['image', 'name' ,'description', 'dietTypes', 'price', 'rating','onStock']
  return (
    <div className={s.container}>
      <AdminTable 
        form={<ProductsForm/>} 
        formEdit={<EditProduct />}
        name='Product' 
        data={allPlates} 
        cols={cols}
        funDelete= {deleteProducts}
      />     
      <Categories /> 
    </div>
  );
};

export default Products;