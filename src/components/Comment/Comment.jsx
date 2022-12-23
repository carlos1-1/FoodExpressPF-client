import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {useState } from "react";
import { getComment } from "../../redux/actions";
import './Comment.css'
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import axios from "axios";


export default function Commment({id, comments}) {
//     const dispatch = useDispatch()

// console.log(id, 'id comment')
//     useEffect(() => { 
//         dispatch(getComment(id)); //
//       }, [dispatch]);

   
    // const comments = useSelector((state)=>state.allComents);   
    // console.log(comments, 'Yop')
    // console.log('user', comments[2].user.name)
    const [ reviews, setReviews] = useState([])
 
    useEffect(()=>{
     axios.get('reviews/'+id)
     .then(response=> {setReviews(response.data)})
    },[])
    console.log(reviews)



return(
  <div>
    <div id="carouselExampleIndicators"  className="carousel carousel-dark slide"  data-bs-ride="true" >
    <div className="carouselUno">
      {reviews.map((el,index) =>{
         return <>
         
               <div className={index===0?'carousel-item active':'carousel-item'} >
                    <FaQuoteRight className="quote"/>
                        {
                         el ?
                        
                         <div className="containerRev">
                            
                             <p className="nameRev">{!el.comment.user? el.user.name:"Error"}</p>
                             <p className="contenidoRev">{!el.comment?"1 no reviews": el.comment}</p>
                         </div>
                        :  <p>"1 no reviews yet"</p>
                         }       
                 </div>
                 
                 
                        </>
                    })}
    </div>
    </div>
    <div className="indicadoresC">
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span className="visually-hidden" >Previous</span>
                   </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                   </button>
                   </div>
                   </div>
)



//     let stars = []   
  
    
//     comments?.map(a => {       
//         stars.push(a.rating)
//     })
//     // console.log(comment, 'comentrarios')
//     // console.log(stars, 'star')
    
//     let suma = 0;

// for(let i=0; i<stars.length; i++) {
//     suma = suma + stars[i]
// }
// let num  = 0

// if(suma===0) {
//     num=0
// }
// else{
//     num = (suma/stars.length)
//     // console.log(num)
// }
// let prom = Math.round(suma/stars.length)

    // console.log(prom, 'PROMEDIO')

    // return (
    //     <div>    
       
    //     <div className="comments">
    //             <ul>
    //                 {comments.map(el =>{
    //                     return <>
    //                     <li className="text">{el.user ? <></>: el.user.name},{el.comment} </li>
    //                     </>
    //                 })}
                    
    //             </ul>
    //         </div>
        
    //     </div>
    //     )
    //     }

    // return (
    //   <div id="carouselExampleIndicators"  className="carousel carousel-dark slide"  data-bs-ride="true" >
     
    //        <div className="carouselUno">
    //              <div className="carousel-item active">
    //              <FaQuoteRight className="quote"/>
    //                    {
    //                     comments ?
                        
    //                     <div className="containerRev">
                            
    //                         <p className="nameRev">{comments.comment.user? comments.user.name:"Error"}</p>
    //                         <p className="contenidoRev">{comments.comment?"1 no reviews": comments.comment}</p>
    //                     </div>
    //                    :  <p>"1 no reviews yet"</p>
    //                     }       
    //              </div>
           
    //               <div className="carousel-item">
    //               <FaQuoteRight className="quote"/>
    //                    {
    //                       comments ?
    //                        <div className="containerRev">
    //                           <p className="nameRev">{comments.comment.user? comments.user.name:"Error"}</p>
    //                           <p className="contenidoRev">{comments.comment?"1 no reviews": comments.comment}</p>
    //                         </div>
    //                          :  <p>"2 no reviews yet"</p>
    //                     } 
                 
    //               </div>
    //                   <div className="carousel-item">
    //                   <FaQuoteRight className="quote"/>
    //                              {
    //                                comments.length >0 ?
    //                                 <div className="containerRev">
    //                                      <p className="nameRev">{comments.comment.user? comments.user.name:"Error"}</p>
    //                                       <p className="contenidoRev">{comments.comment}</p>
    //                                  </div>
    //                                       : <p>"3 no reviews yet"</p>
    //                                   } 

                           
    //                  </div>
                 
    //             </div>
    //               <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    //              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //                <span className="visually-hidden" >Previous</span>
    //              </button>
    //              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    //            <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //               <span className="visually-hidden">Next</span>
    //               </button>
    // </div>
    //   );
    };