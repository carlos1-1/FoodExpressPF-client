import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';
import { getUser } from '../../redux/actions';
import "./ClientTabInfo.css";

export default function ClientTabInfo(){

    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.user);
    const [user, setUser] = useState({...userInfo});
    const [canEdit, setCanEdit] = useState({
        name: false,
        direction: false,
        contact: false
    });

    function handleClick(e){
        if(canEdit[e.target.id]) setCanEdit({...canEdit, [e.target.id]: false});
        else setCanEdit({...canEdit, [e.target.id]: true});
    };

    function handleChange(e){
        setUser({...user, [e.target.id]: e.target.value});
    };

    async function onSubmit(){
        await swal({
            text: 'Saving Data',
            timer: 2000,
            buttons: false
        });
        await axios({
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            url: "/user/update/changefields",
            data: {name: user.name, number_phone: user.number_phone, direction: user.direction, id: user.id} 
        })
        .then(response => response.data)
        .then(async(data) => {
            swal({
                icon: "success",
                text: 'Done!',
                timer: 2000,
                buttons: false});
            dispatch(getUser(user));
            })
        .catch(err => swal({
            icon: "error",
            text: JSON.stringify(err.message)}));
    };

    

    return(
        <>
            <table class='table table-striped'>
                <tbody>
                    <tr>
                        <th scope='row'>User</th>
                        <td colspan='2'>{user.email}</td>
                    </tr>
                    <tr>
                        <th scope='row'>Name</th>
                        {canEdit.name ? 
                            <td><input id='name' onChange={e=> handleChange(e)}></input></td> : 
                            <td id='nameTd'>{user.name}</td>}
                        <td id='tdBtn'><button className='editInfobtn' id='name' onClick={e =>handleClick(e)}>{canEdit.name ? 'insert' : 'edit'}</button></td>
                    </tr>
                    <tr>
                        <th scope='colspan 1'>Address</th>
                        {canEdit.direction ? 
                            <td><input id='direction' onChange={e=> handleChange(e)}></input></td> : 
                            <td id='directionTd'>{user.direction}</td>}
                        <td id='tdBtn'><button className='editInfobtn' id='direction' onClick={e =>handleClick(e)}>{canEdit.direction ? 'insert' : 'edit'}</button></td>
                    </tr>
                    <tr>
                        <th scope='row'>Contact</th>
                        {canEdit.contact ? 
                            <td><input id='number_phone' onChange={e=> handleChange(e)}></input></td> : 
                            <td id='contactTd'>{user.number_phone}</td>}
                        <td id='tdBtn'><button className='editInfobtn' id='contact' onClick={e =>handleClick(e)}>{canEdit.contact ? 'insert' : 'edit'}</button></td>
                    </tr>
                    <tr>
                        <th scope='row'>Type User</th>
                        <td colspan='2'>{user.type_user}</td>
                    </tr>
                </tbody>
            </table>
            <div className='saveDasch'>
            <button class="btn btn-outline-dark" onClick={e=>onSubmit()}>Save Changes</button>
            </div>
        </>
    );
};