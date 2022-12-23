import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';
import { postReview } from '../../redux/actions';

export default function ReviewModal({foodName, userId, foodId, setUserReviews, userInfo, userReviews}){

    const dispatch = useDispatch();
    let modalId = foodId;
    const [fieldsData, setData] = useState({
        comments: '',
        rating: null
    });
    const [errors, setErrors] = useState({
        commentErr: '',
        ratingErr: ''
    });
    const RATING_ERR = 'Rating debe estar entre 0 y 5';

    function handleChange(e){
        if(e.target.id=='rating' &&(e.target.value<=0 || e.target.value>5)) setErrors({...errors,ratingErr: RATING_ERR });
        if(e.target.id=='rating' &&(e.target.value>0 & e.target.value<=5)) setErrors({...errors,ratingErr: '' });
        setData({...fieldsData, [e.target.id]: e.target.value});
    };

    async function handleSubmit(){
        if(errors.commentErr == '' && errors.ratingErr == ''){
            dispatch(postReview(userId, foodId, fieldsData.comments, fieldsData.rating));
            axios.get(`/reviews/user/${userInfo.id}`)
            .then((response)=>{
                setUserReviews(response.data);
            })
            .catch(err => console.log(err));
        }else{
            sweetAlert({
                text: 'Some fields are wrong!',
                icon: 'error'
            });
        }
    };
    
    
    
    return(<>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#foodModal${foodId}`}>
            New Review
        </button>
        <div class="modal fade modal-lg " id={`foodModal${foodId}`} tabindex="-1" aria-labelledby="foodModalLabel" aria-hidden="true" className='modal'>
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="foodModalLabel">FoodReview: {foodName}</h1>
                </div>
                <div class="modal-body">
                    <label for="message-text" class="label">Comments</label>
                    <textarea class="form-control w-100" id="comments" onChange={e => handleChange(e)}></textarea>
                    <label for="recipient-rating" class="label">Rating</label>
                    <input type="number" class="form-control" id="rating" onChange={e => handleChange(e)}/>
                    {errors.ratingErr ? <label class='text-danger'>{errors.ratingErr}</label> : <></>}
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={e=>handleSubmit(e)}>Send review</button>
                </div>
            </div>
            </div>
        </div>
    </>);
};