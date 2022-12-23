import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NewUser from '../../../components/Forms/User/NewUser.jsx';
import EditUser from '../../../components/Forms/User/EditUser.jsx';
import AdminTable from '../AdminTable';

const Users = () => {
  const [allUsers, setAllUsers] = useState([])
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  
  console.log(allUsers)

  const getUsers = ()=>{
    axios.get('/user')
    .then(response=> {console.log(response); setAllUsers(response.data)})
  }


  useEffect(()=>{
    getUsers()
  },[])

  const cols = ['id', 'name' ,'email', 'direction', 'number_phone', 'type_user','banned']

  const deleteUser = (id)=>{
    console.log('deleteUserID', id)
    axios.delete(`/user/delete?id=${id}`)
    .then(response=> {
      setResponse(response.data.message)
       console.log('response',response)
       setLoading(false)   
       getUsers()
    })
    .catch(error=>console.log(error))
  }

  const blockUser = (id,banned)=>{
    setLoading(true)

    axios({
    method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      url: `user/update/${banned?'activate':'delete'}`,
      data: {id:id},
    })   
     .then(response => {
      setResponse(response.data.message)
      console.log('response',response)
      setLoading(false)  
      getUsers() 
     })
     .catch(error=>{
      setResponse(error.message)
      setLoading(false)
     });
  }

  return (
    <div>
      
      <AdminTable 
        data={allUsers} 
        form={<NewUser/>} 
        formEdit={<EditUser/>}
        name='User' 
        cols={cols}
        funDelete={deleteUser}
        funBlock={blockUser}
        loading={loading}
        response={response}
        getItems={getUsers} />      
    </div>
  );
};

export default Users
;