import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Tabs from './Tabs'

import s from './admin.module.css'
import Loading from '../../components/Loading/Loading';
import useCheckRoles from '../../utils/checkRoles';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const {user, isLoading} = useAuth0();

  const [allOrders, setAllOrders] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [checkRole, setCheckRole] = useState('');

  const getOrders = ()=>{
    axios.get('/orders')
    .then(response=> {
      setAllOrders(response.data)
    })
  }
  const getUsers = ()=>{
    axios.get('/user')
    .then(response=> {
      setAllUsers(response.data)
    })
  }

  useEffect(() => {
    useCheckRoles(user.email)
    .then(response=>
      setCheckRole(response)
    )

    if (allOrders.length === 0) getOrders();

    if (allUsers.length === 0) getUsers();

  }, []);

  if(isLoading) return <Loading />

  return (
    <>
    {
      checkRole===false? <Redirect to='/home' />
      :
    
    <div className={s.adminContainer}>
     {user
        ? <h2>{`Hi ${user.given_name}! Welcome to the Admin Dashboard`}</h2>
        :<h2>Welcome to the Admin Dashboard</h2>
     }
     <section className={s.firstPanel}>
        <div className={s.stats}>
          <h5>Total Users</h5>
          <h4>{allUsers.length}</h4>
        </div>

        <div className={s.stats}>
          <h5>Total Orders</h5>
          <h4>{allOrders.length}</h4>
        </div>

        <div className={s.stats}>
          <h5>Total billed</h5>
          <h4>${allOrders.length>0?allOrders.reduce((acumulator, current) => acumulator + current.total,0):0}</h4>
        </div>
     </section>
     <section>
      <Tabs></Tabs>
     </section>
    </div>
    }
    </>
  );
};

export default AdminDashboard;