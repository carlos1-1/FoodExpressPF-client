import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {  useState } from "react";
import { postComment } from "../../redux/actions";
import './FormComment.css'


export default function FormComent(id){
  const dispatch = useDispatch()
  const user = useSelector(state => state.user);
  // console.log(user, 'usuario')
  const [input, setInput] = useState({
    comment: "",
    rating: "",
    foodId: "",
    userId: '',
  });
  const idFood = id.id
  const idUser = user.id

  // console.log(user.id)



  function handleSubmit(e) {
    e.preventDefault();
    console.log(input, 'form');
    dispatch(postComment(input));
    alert("comment created!!");
    setInput({
      comment: "",
      rating: "",
      foodId: "",
      userId: '',
    });
    // history.push("/home");
  }


    
      function handleChange(e) {
      
        setInput({
          ...input,
          [e.target.name]: e.target.value, //name es lo que se le va pasando
          foodId: idFood,  
          userId: idUser,          
        });    
        // console.log(input);
      }

 

    return (
        <div className="container">        
              
                <form onSubmit={(e) => handleSubmit(e)}>  
                <div>
                  <input
                  className="inputComnet"
                    type="text"
                    onChange={(e) => handleChange(e)}                   
                    placeholder="complete..."
                    name="comment"
                    value={input.comment}
                  />
                  <button className="buttonSend"                  
                  ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                </svg></button>
                  </div>                
                <div className="rating">
                  <h3 className="star"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>{input.rating}</h3>                    
                  <input
                    type="range"
                    onChange={(e) => handleChange(e)}    
                    max='5'
                    min='1'        
                    name='rating'         
                    value={input.rating}    
                    />  
                  </div>                
                  
                </form>
                       
        </div>
    )
}