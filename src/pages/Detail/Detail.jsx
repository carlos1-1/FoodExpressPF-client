import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clearDetail, getComment } from "../../redux/actions.js";
import Loading from "../../components/Loading/Loading";
import useLocalStorage from "../../hooks/useLocalStorage.js";
import NavBar from '../../components/NavBar/NavBar.jsx';

import "./Detail.css"
import Commment from '../../components/Comment/Comment.jsx';

import { AiOutlineShoppingCart } from "react-icons/ai";
import {Toaster, toast} from "react-hot-toast";
import DietTypes from '../../components/DietTypes'




function Detail() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.detail);
  const { id } = useParams();
 console.log(details);
  const Cart = useLocalStorage("CART", "");
  const comments = useSelector(state => state.allComents);

  useEffect(() => {
    dispatch(getDetail(id));
    dispatch(getComment(id));
    return dispatch(clearDetail());
  }, []);

  useEffect(()=>{

  },[comments]);
console.log('comments',comments)




  const add = () => {
    const name = details.name;
    const id = details.id;
    const price = details.price;
    const image = details.image;

    Cart.add({ id, name, price, image });
  };

  return(
    <div >
      <div >
      <NavBar  Cart={Cart} />
      </div>
      <div className='containerDetail'>
          <div className='subContainer'>
             <Link to="/home" className='BackLink'>
               <button className='back'>Back</button>
             </Link>
             {details.name ?
             <div className='containerInfo'>
                        <div className='conteinerImage'>
                             <img className='foodImage' src={details.image? details.image : details.img} alt="Loading" />
                       </div>
                   <div className='Cont'>
                        {details.onStock === true ? (
                        <><h3 className='activado'>In stock</h3><button className='Add' onClick={() => add()}>Add    <AiOutlineShoppingCart onClick={() => toast.success('successfully added')} /></button></>
                        ) 
                        : (
                        <h4 className='desactiviado'>No stock</h4>
                        
                         )}
                       <h2 className="h1 font-weight-bold mb-4 text-white card-title">{details.name}</h2>
                       <p className="card-text text-white">Price: ${details.price}</p>
                       <p className="card-text text-white">Type: {details.type}</p>
                       <p className="card-text text-white">Rating: {comments.length>0?(comments.reduce((acumulator, current) => acumulator + current.rating,0)/comments.length):0} ⭐ </p>
                       <p className="card-text text-white"> Description: {details.description}</p>
                       {/* <p className="card-text text-white">
                        Reviews:{" "}
                       {details.reviews
                        ? details.reviews.join(" - ") : "No reviews yet" } </p> */}
                        {/* {comments.comment ?
                        <p>coment1{comments.comment}</p>
                        : <div><Loading/></div>
                      } */}

                       <DietTypes listOfItems={details.dietTypes}/>     
                     
                        <Commment
                           id={id}
                            comments={comments}/>
                        <Toaster
                           position='top-center'
                           reverseOrder={false}
                           />
                  </div>
             </div>
                  


             : <div><Loading/></div>}
         </div>
      </div>
    </div>
  )

}

export default Detail;