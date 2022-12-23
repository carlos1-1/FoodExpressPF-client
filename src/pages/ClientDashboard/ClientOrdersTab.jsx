import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './ClientOrdersTab.css';
import ReviewModal from './ReviewModal';

export default function ClientOrdersTab({}){
    
    const dispatch = useDispatch();
    const [userOrders, setUserOrders] = useState([]);
    const userInfo = useSelector(state => state.user);
    const [pagination, setPagination] = useState({numPages: 1, ordersPerPage: 5, currentPage: 1});
    const [userReviews, setUserReviews] = useState([]);

    function handlePagination(e){
        setPagination({...pagination,currentPage: parseInt(e.target.id)});
    };

    useEffect(()=>{
        axios.get(`/orders/${userInfo.id}`)
            .then((response)=>{
                setUserOrders(response.data.reverse());
            })
            .catch(err => console.log(err));
        axios.get(`/reviews/user/${userInfo.id}`)
            .then((response)=>{
                setUserReviews(response.data);
            })
            .catch(err => console.log(err));
    },[]);

    useEffect(()=>{
        console.log(userReviews);
    },[userReviews]);

    useEffect(()=>{
        let newNumPages = Math.ceil(userOrders.length / pagination.ordersPerPage);
        setPagination({...pagination, numPages: newNumPages});
    },[userOrders]);

    
    return(
        <>
            <nav aria-label="ordersPagination">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                    <a class="page-link"  aria-label="Previous"  id='previus' onClick={e=>setPagination({...pagination, currentPage: 1})}>
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    {new Array(pagination.numPages).fill(0,0).map((e,index) =>{
                        return <li class='page-item'><a class="page-link" onClick={e => handlePagination(e)} id={index+1}>{index+1}</a></li>
                    })}
                    <li class="page-item">
                    <a class="page-link"  aria-label="Next" id='next' onClick={e=>setPagination({...pagination, currentPage: pagination.numPages})}>
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
            <div class="accordion accordion-flush">
                {userOrders.length == 0 ?  
                    <div class="alert alert-warning" role="alert">
                    You don`t have any orders yet!
                    </div>
                : userOrders.map((order,index) =>{
                        if(index < ((pagination.currentPage-1) * pagination.ordersPerPage) || index >= (pagination.currentPage * pagination.ordersPerPage)) return;
                        return <>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id={`flush-heading${index}`}>
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                                    orderId#: {order.id} 
                                </button>
                            </h2>
                            <div id={`flush-collapse${index}`} class="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlush">
                                <div class="accordion-body">
                                    <p><strong>Coments:</strong> {order.coments}</p>
                                    <p><strong>State:</strong> {order.state}</p>
                                    <p><strong>Addres:</strong> {order.address}</p>
                                    <p><strong>Total:</strong> ${order.total}</p>
                                    <p><strong>Date:</strong> {[new Date(order.createdAt).toDateString(), ' --- ' ,new Date(order.createdAt).toLocaleTimeString()]}</p>
                                </div>
                                {order.state == 'done' ? <div  class="alert alert-primary w-75  m-auto " role="alert" >
                                    <h4 class="alert-heading ">Gracias por comprar en Food-expres!</h4>
                                    <hr />
                                    Para nosotros la calidad de nuestro platos es muy importante. 
                                    Accede al Link del plato y dejanos tu opinion
                                </div> 
                                : <></>}
                                {order.state == 'done' ? <div class='d-flex' className='cardsConteiner'>
                                    {order.foods.map((food)=>{
                                        return <div class="card" className='foodCard'>
                                                <img src={food.image} class="card-img-top" alt="..."/>
                                                <div class="card-body">
                                                <p class="card-text">{food.name}</p>
                                                {!userReviews.find(review => review.foodId == food.id) ?
                                                    <ReviewModal 
                                                    foodName={food.name}
                                                    foodId={food.id}
                                                    userId={userInfo.id}
                                                    setUserReviews={setUserReviews}
                                                    userInfo={userInfo}
                                                    ></ReviewModal>
                                                    : <></>}
                                                    
                                                </div>
                                            </div>
                                        })}
                                </div> 
                                : <></>}
                            </div>
                        </div>
                        </>
                    ;
                    })
                }
            </div>
            
        </>)
};